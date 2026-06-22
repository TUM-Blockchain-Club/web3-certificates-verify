import { redirect } from "next/navigation";

type PageProps = {
  searchParams: Promise<{
    certificateId?: string;
  }>;
};

export default async function VerifyIndexPage({ searchParams }: PageProps) {
  const { certificateId } = await searchParams;

  if (certificateId?.trim()) {
    redirect(`/verify/${encodeURIComponent(certificateId.trim())}`);
  }

  redirect("/");
}

