import "../styles/globals.css";
import { LicenceProvider } from "../context/licenceContext";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <LicenceProvider>
          <Component {...pageProps} />
          <Navbar />
        </LicenceProvider>
      </main>
    </>
  );
}

export default MyApp;
