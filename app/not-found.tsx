import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <section className="empty-panel">
        <p className="kicker">Not Found</p>
        <h1>Certificate unavailable.</h1>
        <p className="lead">
          The certificate ID is not registered as a valid Web3 Talents
          certificate.
        </p>
        <div className="lookup">
          <Link className="button-link" href="/">
            Search Again
          </Link>
        </div>
      </section>
    </main>
  );
}

