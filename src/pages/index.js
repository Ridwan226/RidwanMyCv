import Head from "next/head";
import { NavHeader } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavHeader />
      </main>
    </div>
  );
}
