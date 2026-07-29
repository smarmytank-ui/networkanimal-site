import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <p className="eyebrow">Upcoming events</p>
        <h1>Walk into the room with purpose.</h1>
        <p className="lede">
          Join a Network Animal event to discover meaningful matches, meet with
          intention, and build relationships that continue after the room clears.
        </p>
        <article className="content-card event-card">
          <div className="date-block"><strong>SEP</strong><span>24</span><small>2026</small></div>
          <div className="event-details">
            <p>Thursday, September 24, 2026 · 5:30–9:30 PM PT</p>
            <h2>Built Different Wildcard Charity Poker Tournament</h2>
            <p>Hilton Irvine Orange County Airport · Irvine, California</p>
            <Link className="button primary" href="/events/built-different-wildcard-charity-poker-tournament">
              View event
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
