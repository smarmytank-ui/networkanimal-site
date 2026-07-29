import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = { title: "For event organizers" };

export default function OrganizersPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <p className="eyebrow">For event organizers</p>
        <h1>Turn attendance into relationships.</h1>
        <p className="lede">
          Network Animal helps your guests understand what they bring, find
          people worth meeting, and leave with connections built on more than a
          quick introduction.
        </p>
        <div className="content-card">
          <div className="three-up">
            <div><strong>Guide the room</strong><p>Create intentional moments for complementary people to meet.</p></div>
            <div><strong>See participation</strong><p>Manage invitations, check-in, and live attendance without reading private conversations.</p></div>
            <div><strong>Extend the value</strong><p>Help meaningful connections continue long after the event ends.</p></div>
          </div>
          <a className="button primary" href="mailto:1pn@networkanimal.com?subject=I%20want%20to%20organize%20an%20event">
            Start a conversation
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
