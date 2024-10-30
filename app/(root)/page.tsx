import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>; //https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> connect with people!
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on pitches & get noticed.
        </p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
