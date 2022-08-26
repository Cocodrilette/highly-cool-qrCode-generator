import Head from "next/head";
import styles from "../styles/Home.module.css";

import License from "../components/License";

export default function Home() {
  return (
    <>
      <Head>
        <title>Licencia de Perreo - Home</title>
        <meta
          name="Licencia de Perreo"
          content="Un autorización para poder perrear de manera totalmente desproporcionada"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="pageTitle">Home</h1>
      <License />
    </>
  );
}
