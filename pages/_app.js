import "@/styles/globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="h-full w-full overflow-y-auto overflow-x-hidden flex-grow">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
