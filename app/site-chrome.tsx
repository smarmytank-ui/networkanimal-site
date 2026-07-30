import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Network Animal home">
      <img
        className="brand-logo"
        src="/networkanimal-eyes.png"
        alt=""
        width={48}
        height={38}
        aria-hidden="true"
      />
      <span>Network Animal</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Main navigation">
        <Link href="/events">Events</Link>
        <Link href="/organizers">For organizers</Link>
        <Link href="/about">About</Link>
        <Link className="nav-cta" href="/#get-started">Discover your animal</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <Brand />
      <div className="footer-links">
        <Link href="/events">Events</Link>
        <Link href="/organizers">Organize an event</Link>
        <a href="mailto:1pn@networkanimal.com">Contact</a>
      </div>
      <a
        className="powered-by"
        href="https://www.1pn.org"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit One Purpose Network"
      >
        <span>Powered by</span>
        <img src="/one-purpose-network.png" alt="One Purpose Network" width={180} height={54} />
      </a>
    </footer>
  );
}
