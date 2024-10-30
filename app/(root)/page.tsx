import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>; //https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Jos" },
      _id: 1,
      description: "The best season so far.",
      image:
        "https://media.formula1.com/image/upload/t_16by9North/f_auto/q_auto/v1706626658/fom-website/2023/Miscellaneous/GettyImages-1656999898.jpg",
      category: "Racing",
      title: "Formula 1",
    },
  ];

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

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No results found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
