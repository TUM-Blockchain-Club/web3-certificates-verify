import { sql } from "@/lib/db";

const CERTIFICATE_ID_PATTERN = /^[A-Za-z0-9_-]{16,80}$/;

type CertificateRow = {
  certificate_id: string;
  cohort: string;
  certificate_name: string;
  participant_name: string;
  certificate_issued_on: string | Date;
};

export type PublicCertificate = {
  certificateId: string;
  cohort: string;
  certificateName: string;
  participantName: string;
  issuedOn: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatIssuedOn(value: string | Date) {
  const date =
    value instanceof Date ? value : new Date(`${String(value).slice(0, 10)}T00:00:00Z`);

  return dateFormatter.format(date);
}

export async function getCertificateById(
  certificateId: string,
): Promise<PublicCertificate | null> {
  const normalizedId = certificateId.trim();

  if (!CERTIFICATE_ID_PATTERN.test(normalizedId)) {
    return null;
  }

  const [row] = await sql<CertificateRow[]>`
    select
      certificate_id,
      cohort,
      certificate_name,
      participant_name,
      certificate_issued_on
    from public.certificate_recipients
    where certificate_id = ${normalizedId}
      and verification_active = true
    limit 1
  `;

  if (!row) {
    return null;
  }

  return {
    certificateId: row.certificate_id,
    cohort: row.cohort,
    certificateName: row.certificate_name,
    participantName: row.participant_name,
    issuedOn: formatIssuedOn(row.certificate_issued_on),
  };
}

