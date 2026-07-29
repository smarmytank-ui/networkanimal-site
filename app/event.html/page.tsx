import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer, Header } from "../site-chrome";
import { LiveEventDetail } from "./live-event-detail";

export const metadata: Metadata = { title: "Event" };

export default function SharedEventPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<main className="subpage"><p className="eyebrow">Loading event</p></main>}>
        <LiveEventDetail />
      </Suspense>
      <Footer />
    </>
  );
}
