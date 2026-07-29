import type { Metadata } from "next";
import { Footer, Header } from "../../site-chrome";

export const metadata: Metadata = { title: "Built Different Wildcard Charity Poker Tournament" };

export default function EventPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <p className="eyebrow">Network Animal event</p>
        <h1>Built Different Wildcard Charity Poker Tournament</h1>
        <p className="lede">
          Poker, purpose, and generosity come together in support of
          neurodiverse charities in Orange County.
        </p>
        <div className="content-card">
          <div className="event-facts">
            <div><small>When</small><strong>Thursday, September 24, 2026</strong><span>5:30–9:30 PM Pacific</span></div>
            <div><small>Where</small><strong>Hilton Irvine Orange County Airport</strong><span>18800 MacArthur Boulevard, Irvine, CA 92612</span></div>
            <div><small>Hosted by</small><strong>One Purpose Network</strong><span>Capacity: 150 guests</span></div>
          </div>
          <div className="button-row">
            <a className="button primary" href="https://www.1pn.org/poker" target="_blank" rel="noreferrer">
              Register and pay
            </a>
            <a className="button secondary" href="mailto:info@1pn.org?subject=Built%20Different%20Poker%20Tournament">
              Contact the organizer
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
