import { redirect } from "next/navigation";

type PageProps = {
  searchParams: Promise<{
    certificateId?: string;
  }>;
};

export default async function Home({ searchParams }: PageProps) {
  const { certificateId } = await searchParams;

  if (certificateId?.trim()) {
    redirect(`/verify/${encodeURIComponent(certificateId.trim())}`);
  }

  return (
    <main className="page">
      <section className="empty-panel">
        <p className="kicker">Certificate Verification</p>
        <h1>Verify a Web3 Talents certificate.</h1>
        <div className="lookup">
          <form action="/">
            <input
              aria-label="Certificate ID"
              name="certificateId"
              placeholder="Certificate ID"
              required
            />
            <button type="submit">Verify</button>
          </form>
          <p className="muted-note">
            Certificate IDs are printed on issued PDFs and encoded in their QR
            codes.
          </p>
        </div>
      </section>
    </main>
  );
}

