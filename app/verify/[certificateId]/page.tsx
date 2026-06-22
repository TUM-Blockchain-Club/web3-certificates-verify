import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { getCertificateById } from "@/lib/certificates";

type PageProps = {
  params: Promise<{
    certificateId: string;
  }>;
};

const getCertificate = cache(getCertificateById);

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { certificateId } = await params;
  const certificate = await getCertificate(certificateId);

  if (!certificate) {
    return {
      title: "Certificate Not Found",
    };
  }

  return {
    title: `${certificate.participantName} - ${certificate.certificateName}`,
    description: `Valid ${certificate.certificateName} for ${certificate.participantName}.`,
    robots: {
      follow: false,
      index: false,
    },
  };
}

export default async function VerifyCertificatePage({ params }: PageProps) {
  const { certificateId } = await params;
  const certificate = await getCertificate(certificateId);

  if (!certificate) {
    notFound();
  }

  return (
    <main className="page">
      <section className="verification-panel" aria-label="Certificate details">
        <div className="statement">
          <div>
            <p className="kicker">{certificate.cohort}</p>
            <h1>{certificate.participantName}</h1>
            <p className="lead">
              This certificate is registered as a valid Web3 Talents credential
              issued by Tum Blockchain Club.
            </p>
          </div>
          <span className="status-pill">Valid Certificate</span>
        </div>

        <dl className="details">
          <div className="detail-row">
            <dt className="detail-label">Certificate</dt>
            <dd className="detail-value">{certificate.certificateName}</dd>
          </div>
          <div className="detail-row">
            <dt className="detail-label">Issued</dt>
            <dd className="detail-value">{certificate.issuedOn}</dd>
          </div>
          <div className="detail-row">
            <dt className="detail-label">Issuer</dt>
            <dd className="detail-value">Tum Blockchain Club</dd>
          </div>
          <div className="detail-row">
            <dt className="detail-label">ID</dt>
            <dd className="detail-value">{certificate.certificateId}</dd>
          </div>
          <div className="detail-row">
            <dt className="detail-label">Status</dt>
            <dd className="detail-value">Valid</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
