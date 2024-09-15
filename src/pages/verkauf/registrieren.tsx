import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="mb-0 h-[79vh] overflow-auto pb-0 md:h-[82vh]">
        <iframe
          data-tally-src="https://tally.so/r/w8Gg6o"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Käufer Registrierung"
          className="mb-0 pb-0"
        ></iframe>
      </div>
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        }}
      />
      <Footer />
    </>
  );
}
