import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import useSWR from "swr";

interface IFilm {
  name: string;
  genre: string;
  published: string;
}

interface FilmProps {
  film: IFilm[];
}

function FilmPage() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:9000/film",
    fetcher
  );
  console.log("data", data);
  console.log("error", error);
  console.log("loading", isLoading);

  // if (error) return <h1>Error bos</h1>;
  // if (isLoading) return <h1>Loading dulu</h1>;
  const film: IFilm[] = data;
  return (
    <div>
      <Head>
        <title>Film Page</title>
        <meta content="film" />
      </Head>
      <h1>Film Page</h1>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        film.map((item) => (
          <div>
            <h1>
              {item.name} - {item.genre} - {item.published}
            </h1>
          </div>
        ))
      )}
    </div>
  );
}

async function fetcher(url: string) {
  const response = await axios.get(url);
  console.log(response);

  return response.data;
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data, error, isLoading } = useSWR(
//     "http://localhost:9000/film",
//     fetcher
//   );
//   return {
//     props: {
//       data,
//     },
//   };
// };

export default FilmPage;
