"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type PublicEvent = {
  id: string;
  title: string;
  slug: string;
  event_date: string | null;
  start_at: string | null;
  end_at: string | null;
  venue_name: string | null;
  street_address: string | null;
  location: string | null;
  description: string | null;
  capacity: number | null;
  registration_url: string | null;
  organization_name: string | null;
};

const fallbackEvent: PublicEvent = {
  id: "built-different",
  title: "Built Different Wildcard Charity Poker Tournament",
  slug: "built-different-wildcard-charity-poker-tournament",
  event_date: "2026-09-24",
  start_at: "2026-09-24T17:30:00-07:00",
  end_at: "2026-09-24T21:30:00-07:00",
  venue_name: "Hilton Irvine Orange County Airport",
  street_address: "18800 MacArthur Boulevard, Irvine, California 92612",
  location: "Irvine, California",
  description:
    "An evening of poker, purpose, and generosity benefiting neurodiverse charities in Orange County.",
  capacity: 150,
  registration_url: "https://www.1pn.org/poker",
  organization_name: "One Purpose Network",
};

const columns = [
  "id",
  "title",
  "slug",
  "event_date",
  "start_at",
  "end_at",
  "venue_name",
  "street_address",
  "location",
  "description",
  "capacity",
  "registration_url",
  "organization_name",
].join(",");

export async function fetchPublishedEvents(): Promise<PublicEvent[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return [fallbackEvent];

  const response = await fetch(
    `${url}/rest/v1/networkanimal_public_events?select=${columns}&order=event_date.asc`,
    { headers: { apikey: key, Authorization: `Bearer ${key}` } },
  );
  if (!response.ok) throw new Error(`Event catalog request failed (${response.status})`);
  const events = (await response.json()) as PublicEvent[];
  return events.length ? events : [];
}

function eventDateParts(event: PublicEvent) {
  const source = event.event_date ?? event.start_at;
  if (!source) return { month: "DATE", day: "TBA", year: "" };
  const date = new Date(source.includes("T") ? source : `${source}T12:00:00`);
  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date).toUpperCase(),
    day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
    year: new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(date),
  };
}

function fullDate(event: PublicEvent) {
  const source = event.start_at ?? event.event_date;
  if (!source) return "Date to be announced";
  const date = new Date(source.includes("T") ? source : `${source}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    ...(event.start_at ? { hour: "numeric", minute: "2-digit", timeZoneName: "short" } : {}),
  }).format(date);
}

export function EventCard({ event }: { event: PublicEvent }) {
  const date = eventDateParts(event);
  return (
    <article className="content-card event-card live-event-card">
      <div className="date-block">
        <strong>{date.month}</strong><span>{date.day}</span><small>{date.year}</small>
      </div>
      <div className="event-details">
        <p>{fullDate(event)}</p>
        <h2>{event.title}</h2>
        <p>{event.venue_name ?? event.location ?? "Location to be announced"}</p>
        <Link className="button primary" href={`/event.html?slug=${encodeURIComponent(event.slug)}`}>
          View event
        </Link>
      </div>
    </article>
  );
}

export function LiveEvents() {
  const [events, setEvents] = useState<PublicEvent[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetchPublishedEvents()
      .then(setEvents)
      .catch(() => {
        setFailed(true);
        setEvents([fallbackEvent]);
      });
  }, []);

  if (!events) return <div className="event-loading">Loading upcoming events…</div>;
  if (!events.length) {
    return <div className="content-card"><h2>More purposeful rooms are coming.</h2><p className="lede">There are no published events right now. Check back soon.</p></div>;
  }

  return (
    <div className="event-list">
      {failed && <p className="catalog-note">Live event updates are temporarily unavailable. Showing the confirmed featured event.</p>}
      {events.map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  );
}

export { fallbackEvent };
