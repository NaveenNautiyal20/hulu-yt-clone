import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import { Inter } from "@next/font/google";
import axios from "axios";
import requests from "../utils/requests";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }: { results: any }) {
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context: { query: { genre: any } }) {
  var genre: keyof typeof requests = context.query.genre
    ? context.query.genre
    : "fetchTrending";

  try {
    const request = await axios.get(
      `https://api.themoviedb.org/3/${requests[genre].url}`
    );
    return {
      props: {
        results: request.data.results,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        results: [],
      },
    };
  }
}
