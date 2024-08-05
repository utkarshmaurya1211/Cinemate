import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hook/useFetch";
import { useEffect } from "react";

export const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(api, queryTerm);
  useEffect(() => {
    document.title = `Search - ${queryTerm}`;
  });
  return (
    <main>
      <section>
        <p className="text-3xl text-grey-700 dark:text-white">
          {movies.length === 0 ? `No Result` : `Result For ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
