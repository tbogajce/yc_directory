import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const post = await client.fetch(STARTUPS_BY_ID_QUERY, { id });
  if (!post) return notFound();

  return (
    <>
      <h1 className="text-3xl">{post.title}</h1>
    </>
  );
}

export default Page;
