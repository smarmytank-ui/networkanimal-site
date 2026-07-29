"use client";

import { useEffect, useState } from "react";
import {
  fallbackEvent,
  fetchPublishedEvents,
  type PublicEvent,
} from "../events/live-events";

function displayDate(value: string | null) {
  if (!value) return "To be announced";
  const date = new Date(value.includes("T") ? value : `${value}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    ...(value.includes("T") ? { hour: "numeric", minute: "2-digit", timeZoneName: "short" } : {}),
  }).format(date);
}

export function LiveEventDetail() {
  const [event, setEvent] = useState<PublicEvent | null | undefined>(undefined);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("slug");
    fetchPublishedEvents()
      .then((events) => setEvent(events.find((candidate) => candidate.slug === slug) ?? null))
      .catch(() => setEvent(slug === fallbackEvent.slug ? fallbackEvent : null));
  }, []);

  if (event === undefined) {
    return <main className="subpage"><p className="eyebrow">Loading event</p><h1>Opening the room…</h1></main>;
  }
  if (event === null) {
    return <main className="subpage"><p className="eyebrow">Event not found</p><h1>This event is not currently published.</h1></main>;
  }

  return (
    <main className="subpage">
      <p className="eyebrow">Network Animal event</p>
      <h1>{event.title}</h1>
      <p className="lede">{event.description ?? "A live event built for deeper, more meaningful relationships."}</p>
      <div className="content-card">
        <div className="event-facts">
          <div><small>When</small><strong>{displayDate(event.start_at ?? event.event_date)}</strong><span>{event.end_at ? `Ends ${displayDate(event.end_at)}` : ""}</span></div>
          <div><small>Where</small><strong>{event.venue_name ?? event.location ?? "To be announced"}</strong><span>{event.street_address ?? ""}</span></div>
          <div><small>Hosted by</small><strong>{event.organization_name ?? "Network Animal organizer"}</strong><span>{event.capacity ? `Capacity: ${event.capacity} guests` : ""}</span></div>
        </div>
        <div className="button-row">
          {event.registration_url && <a className="button primary" href={event.registration_url} target="_blank" rel="noreferrer">Register and pay</a>}
          <a className="button secondary" href="mailto:1pn@networkanimal.com?subject=Network%20Animal%20event">Contact Network Animal</a>
        </div>
      </div>
    </main>
  );
}
