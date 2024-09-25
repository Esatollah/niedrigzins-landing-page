import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import bigGrafik from "../../../public/NZ Grafik Makler.png";
import coinflip from "../../../public/coinflip.svg";
import cashstack from "../../../public/cashstack.svg";
import time from "../../../public/time-new-svgrepo-com.svg";
import zufrieden from "../../../public/zufrieden.svg";
import step1 from "../../../public/01_Makler.jpg";
import step2 from "../../../public/02_Makler.jpg";
import step3 from "../../../public/03_Makler.jpg";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0.04, 0.23], ["0px", "120%"]);

  return (
    <div ref={ref} className="">
      <Navbar></Navbar>
      <div className="py-12 lg:py-12" />
      <section className="container relative mx-auto flex flex-col justify-center py-12">
        <h1 className="w-full text-center text-5xl font-bold lg:w-4/5 lg:text-start lg:text-6xl lg:text-8xl">
          Immobilien schneller vermitteln
        </h1>
        <div className="py-4" />
        <h3 className="w-full text-center text-2xl font-extralight md:text-start lg:w-2/5">
          Wertvolle Immobilien sind heiß begehrt. Niedrigzins.at gibt Ihnen die
          optimalen Möglichkeiten dazu.
        </h3>
        <div className="py-4" />
        <button
          className="mx-auto w-60 rounded-2xl border-2 border-dashed border-black bg-green-500 px-14 py-3 text-2xl font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none lg:mx-0 lg:w-80 lg:text-4xl"
          onClick={() => (window.location.href = "/makler/einreichung")}
        >
          Loslegen
        </button>
        <div className="py-40 lg:py-80" />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="mb-6 text-4xl font-bold text-emerald-500">
              Das Niedrigzins.at Prinzip
            </h2>
            <div className="mb-6 flex space-y-4 lg:mb-0">
              <Image
                src={coinflip}
                alt="Affordability Icon"
                className="mx-auto"
                width={50}
                height={50}
              />
              <div className="px-2 md:px-8" />
              <div>
                <h3 className="text-xl font-semibold">BESSERE LEISTBARKEIT</h3>
                <p className="w-3/4">
                  Aufgrund der geringeren monatlichen Belastung durch die
                  Übernahme günstiger Kredite, können Sie sich Ihre Immobilie
                  besser leisten, oder sogar eine größere mit ihrem Budget
                  kaufen.
                </p>
              </div>
            </div>

            <div className="mb-6 flex space-y-4 md:mb-0">
              <Image
                src={cashstack}
                alt="Cost Saving Icon"
                className="mx-auto"
                width={50}
                height={50}
              />
              <div className="px-2 md:px-8" />
              <div>
                <h3 className="text-xl font-semibold">WENIGER GESAMTKOSTEN</h3>
                <p className="w-3/4">
                  Weniger jährliche Zinsen bedeutet massiv weniger Gesamtkosten
                  am Ende des Finanzierungszeitraums. Sie ersparen sich durch
                  das Niedrigzins.at Prinzip mehrere (wenn nicht dutzende)
                  tausende Euros.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8" />
        </div>
        <motion.div
          className="top-[12%] -z-10 hidden md:absolute md:left-[40%] md:w-[60%] lg:block"
          style={{ y }}
        >
          <Image src={bigGrafik} className="" alt="House" />
        </motion.div>
      </section>

      <div className="py-20" />

      <div className="mx-auto bg-orange-50 px-4 py-32 sm:px-6 lg:px-40">
        <h2 className="mb-6 text-5xl font-semibold text-orange-600">
          Ihre Vorteile durch Niedrigzins.at
        </h2>
        <div className="py-12" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src={zufrieden}
              alt="satisfied"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-center text-xl font-semibold">
              Zufriedene Kunden
            </h3>
            <p>
              Verkäufer von Immobilien wollen ihre Immobilien schnell und gut
              verkaufen und dabei wenig Aufwand haben. All das bietet Ihnen
              Niedrigzins.at und Ihre Kunden sind dadurch zufriedener.
            </p>
          </div>
          <div className="space-y-4">
            <Image
              src={time}
              alt="Time Saving"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-center text-xl font-semibold">
              Schnelle Abwicklung
            </h3>
            <p>
              Wer schnell ist gewinnt! Die besten Immobilien sind schnell
              vergeben. Einmal registriert und verifziert können Sie Immobilien
              via Niedrigzins.at in Windeseile verkaufen. Durch die Anbindungen
              zu den größten Maklerportalen haben Sie auch keinen Mehraufwand.
            </p>
          </div>
          <div className="space-y-4">
            <Image
              src={cashstack}
              alt="Cost Reduction"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-center text-xl font-semibold">
              Höhere Provisionen
            </h3>
            <p>
              Durch einen höheren Verkaufspreis der Immobilie steigt auch
              anteilig Ihre Provision.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12" />
      <section className="bg-white">
        <h2 className="mb-12 mt-12 px-8 text-center text-3xl font-bold md:text-4xl lg:ml-12 lg:text-start">
          Wie läuft der Vermittlungsprozess ab?
        </h2>
        <div className="mx-4 flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
          <Card className="h-[36rem] border-2 border-gray-700 p-5 md:w-[28rem]">
            <CardTitle className="mb-4 font-light">Schritt 1</CardTitle>
            <CardContent className="h-full">
              <Image
                src={step1}
                alt="Step 1"
                className="my-4 mb-4 h-48 w-full rounded-lg object-cover"
              />
              <h3 className="mb-8 text-2xl font-bold">
                Auf Niedrigzins.at registrieren
              </h3>
              <p>
                Zur Nutzung des Portals ist eine einmalige Registrierung
                erforderlich. Kosten entstehen Ihnen dabei keine. Einmal
                registriert können Sie die vollen Funktionen von Niedrigzins.at
                nutzen.
              </p>
            </CardContent>
          </Card>
          <Card className="h-[36rem] border-2 border-gray-700 p-5 md:w-[28rem]">
            <CardTitle className="mb-4 font-light">Schritt 2</CardTitle>
            <CardContent className="h-full">
              <Image
                src={step2}
                alt="Step 2"
                className="my-4 mb-4 h-48 w-full rounded-lg object-cover"
              />
              <h3 className="mb-8 text-2xl font-bold">
                Maklerplatform connecten
              </h3>
              <p>
                Einfache und unkomplizierte Prozesse sind uns wichtig. Sie
                brauchen nur einmalig Ihre meistgenutzte Maklerplattform
                connecten und schon können Sie auch direkt darüber Inserate auf
                Niedrigzins.at schalten.
              </p>
            </CardContent>
          </Card>
          <Card className="h-[36rem] border-2 border-gray-700 p-5 md:w-[28rem]">
            <CardTitle className="mb-4 font-light">Schritt 3</CardTitle>
            <CardContent className="h-full">
              <Image
                src={step3}
                alt="Step 3"
                className="my-4 mb-4 h-48 w-full rounded-lg object-cover"
              />
              <h3 className="mb-8 text-2xl font-bold">
                Inserat via Maklerplatform veröffentlichen
              </h3>
              <p>
                Einmal connected übertragen sich Inserate automatisch und
                problemlos von Ihrer Maklerplattform auf Niedrigzins.at. Sie
                können weiterhin die Verwaltung über Ihre Maklerplattform
                durchführen.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-36">
        <div className="mx-auto w-[80%] rounded-3xl border-4 border-zinc-200 bg-emerald-500 p-8 font-light md:rounded-[5rem] md:p-20">
          <h2 className="pb-4 text-2xl md:text-4xl">
            Was kostet Niedrigzins.at für Makler?
          </h2>
          <div className="flex justify-between">
            <h2 className="text-2xl lg:text-7xl">Kostenlos.</h2>
            <h2 className="ml-auto inline text-2xl lg:text-7xl">0,00 Euro</h2>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-40 text-center font-light">
        <h1 className="mx-auto mb-4 max-w-screen-lg text-center text-4xl font-semibold lg:text-8xl">
          Jetzt Inserat über Ihr Maklertool bei Niedrigzins.at inserieren
        </h1>
        <button
          className="rounded bg-orange-600 px-8 py-2 text-3xl font-bold text-white hover:bg-orange-700"
          onClick={() => (window.location.href = "/makler/einreichung")}
        >
        Jetzt Immobilie über Niedrigzins inserieren
        </button>
      </div>

      <Footer />
    </div>
  );
}
