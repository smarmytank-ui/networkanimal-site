import Link from "next/link";
import { AnimatedFace } from "./animated-face";
import { Footer, Header } from "./site-chrome";

const event = {
  slug: "built-different-wildcard-charity-poker-tournament",
  name: "Built Different Wildcard Charity Poker Tournament",
  date: "Thursday, September 24, 2026",
  time: "5:30–9:30 PM",
  venue: "Hilton Irvine Orange County Airport",
  address: "18800 MacArthur Boulevard, Irvine, California 92612",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Giving-first networking for real life</p>
            <h1>Know what you bring. Build relationships that matter.</h1>
            <p className="hero-lede">
              Discover your networking animal, walk into the room knowing what
              you can give, and meet people worth knowing—not just collecting.
            </p>
            <div className="button-row" id="get-started">
              <a className="button primary" href="#how-it-works">
                Discover your animal
              </a>
              <Link className="button secondary" href="/events">
                Find an event
              </Link>
            </div>
          </div>
          <div className="hero-mark" aria-label="The Network Animal eyes wake up and smile">
            <div className="eyes-stage"><AnimatedFace /></div>
            <p>Look around. The right relationship may already be in the room.</p>
          </div>
        </section>

        <section className="belief-band">
          <p>
            Networking is not about handing out more cards. It is about knowing
            people deeply enough to recognize what they need—and giving from the
            relationships, resources, and trust you already carry.
          </p>
        </section>

        <section className="section" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>From a room full of strangers to relationships with purpose.</h2>
          </div>
          <div className="steps">
            <article>
              <span>01</span>
              <h3>Discover your animal</h3>
              <p>A short quiz reveals how you naturally connect, give, and build trust.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Build your Dot</h3>
              <p>Share what you bring into the room and what is on your mind right now.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Meet meaningful matches</h3>
              <p>At live events, find people with complementary strengths and real potential.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Keep the relationship</h3>
              <p>Mutual connections stay in your network so the conversation can grow after the event.</p>
            </article>
          </div>
        </section>

        <section className="section featured">
          <div className="event-intro">
            <p className="eyebrow">Featured event</p>
            <h2>{event.name}</h2>
            <p>
              An evening of poker, purpose, and generosity benefiting
              neurodiverse charities in Orange County.
            </p>
          </div>
          <div className="event-card">
            <div className="date-block">
              <strong>SEP</strong>
              <span>24</span>
              <small>2026</small>
            </div>
            <div className="event-details">
              <p>{event.date} · {event.time} PT</p>
              <h3>{event.venue}</h3>
              <p>{event.address}</p>
              <div className="button-row">
                <Link className="button primary" href={`/events/${event.slug}`}>
                  View event
                </Link>
                <a className="text-link" href="https://www.1pn.org/poker" target="_blank" rel="noreferrer">
                  Registration & payment ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section organizer-callout">
          <div>
            <p className="eyebrow">Make your next event mean more</p>
            <h2>Give your guests a better reason to meet.</h2>
          </div>
          <div>
            <p>
              Network Animal helps organizers turn attendance into deeper
              conversation, thoughtful matching, and relationships that outlive
              the name badge.
            </p>
            <Link className="button light" href="/organizers">
              Bring Network Animal to your event
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
