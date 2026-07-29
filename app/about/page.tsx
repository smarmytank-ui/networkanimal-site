import type { Metadata } from "next";
import { Footer, Header } from "../site-chrome";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="subpage">
        <p className="eyebrow">The idea behind Network Animal</p>
        <h1>You walk into every room carrying something valuable.</h1>
        <p className="lede">
          Your experience. Your relationships. The people you know, like, and
          trust. Network Animal helps you understand what is in that backpack,
          recognize who may need it, and build the depth of relationship that
          makes a thoughtful introduction possible.
        </p>
        <div className="content-card">
          <h2>Powered by One Purpose Network</h2>
          <p className="lede">
            One Purpose Network teaches a giving-first approach to networking:
            learn who people really are, understand what they need, and connect
            them with care—not because you expect something in return.
          </p>
          <a className="button primary" href="https://www.1pn.org" target="_blank" rel="noreferrer">
            Visit One Purpose Network
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
