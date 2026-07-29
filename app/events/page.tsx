import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";
import { LiveEvents } from "./live-events";

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
        <LiveEvents />
      </main>
      <Footer />
    </>
  );
}
