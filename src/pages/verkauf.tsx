import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import Link from "next/link";
import pic from "../../public/Image by Austin Distel.webp";
import otherpic from "../../public/moderne Villa.webp";
import smallpic from "../../public/Image by Douglas Sheppard.webp";
import smolpic from "../../public/Image by Kara Eads.webp";
import bigGrafik from "../../public/NZ Grafik Verkäufer.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import bill from "../../public/bill.svg";
import journey from "../../public/journey.svg";
import discountt from "../../public/discountt.svg";
import discount from "../../public/discount.svg";
import coinflip from "../../public/coinflip.svg";
import cashstack from "../../public/cashstack.svg";
import time from "../../public/time-new-svgrepo-com.svg";
import Graz from "../../public/Graz.jpg";
import Kitzbuehel from "../../public/Kitzbuehel.jpg";
import Salzburg from "../../public/Salzburg.jpg";
import Wien from "../../public/Wien.jpg";
import Linz from "../../public/Linz.jpg";
import verkaufPic from "../../public/verkauf.jpg";
import step1 from "../../public/01_Verkauf.jpg";
import step2 from "../../public/02_Verkauf.jpg";
import step3 from "../../public/03_Verkauf.jpg";
import fast from "../../public/fast.svg";
import easy from "../../public/easy.svg";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="py-20" />
      <section className="container relative mx-auto flex justify-center py-12 md:py-12">
        <div>
          <h1 className="w-full text-center text-4xl font-bold md:w-3/5 md:text-start lg:text-8xl">
            Immobilien zum Wunschpreis verkaufen
          </h1>
          <div className="py-4" />
          <h3 className="w-full text-center text-2xl font-extralight md:w-2/5 md:text-start">
            Verkaufen Sie Immobilien nicht unter Wert, sondern zum Wunschpreis.
          </h3>
          <div className="py-4" />
          <button className="mx-auto w-60 rounded-2xl border-2 border-dashed border-black bg-green-500 px-14 py-3 text-xl font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none md:mx-0 md:text-xl lg:w-80">
            Immobilie verkaufen
          </button>
        </div>
        <Image
          src={verkaufPic}
          alt="Verkauf"
          className="absolute left-[42%] top-16 -z-10 hidden w-[50%] md:block lg:w-[60%]"
        />
      </section>

      <div className="py-20" />

      <div className="bg-orange-50 font-light text-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl">
            Der Verkauf von Immobilien über Niedrigzins.at nach Ihren
            Vorstellungen: Schnell, einfach, geldbringend
          </h2>

          <div className="flex flex-col justify-center md:flex-row md:space-x-4">
            <div className="md:w-1/3">
              <Image
                className="mx-auto"
                src={bill}
                alt="Bill Icon"
                height={100}
                width={100}
              />
              <h1 className="text-center text-2xl font-semibold">
                Geldbringend
              </h1>
              <div className="py-4" />
              <p>
                Durch das Niedrigzins.at Prinzip erhalten Sie den Wunschpreis
                für Ihre Immobilie. Sie profitieren dabei genauso wie der
                Käufer: eine Win-Win-Situation für jeden.
              </p>
            </div>

            <div className="space-y-4 md:w-1/3">
              <Image
                className="mx-auto"
                src={fast}
                alt="Fast Icon"
                height={100}
                width={100}
              />
              <h1 className="text-center text-2xl font-semibold">Schnell</h1>
              <p>
                Oft muss es beim Immobilienverkauf schnell gehen. Einmal auf
                Niedrigzins.at registriert wird Ihre Immobilie umgehend den
                potentesten Käufern vorgeschlagen.
              </p>
            </div>

            <div className="space-y-4 md:w-1/3">
              <Image
                className="mx-auto pl-4 pt-4"
                src={easy}
                alt="Easy Icon"
                height={100}
                width={100}
              />
              <h1 className="text-center text-2xl font-semibold">Einfach</h1>
              <p>
                Bei Niedrigzins.at finden Sie alles an einem Ort. Sie tätigen
                einfache Eingaben über unser Portal - wir erledigen den Rest.
                Bankkontakt inklusive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[90vh] font-light text-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-60 sm:px-6 lg:px-8">
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
                  <h3 className="text-xl font-semibold">SCHNELLER VERKAUFEN</h3>
                  <p className="w-3/4">
                    Bei guten Immobilien ist Schnelligkeit gefragt. Top
                    Konditionen und digitale Prozesse ermöglichen Käufern und
                    Verkäufern von Immobilien eine rasche Abwicklung von der
                    jeder profitiert.
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
                  <h3 className="text-xl font-semibold">
                    HÖHERER VERKAUFSWERT
                  </h3>
                  <p className="w-3/4">
                    Durch die günstigen Zinskonditionen können sich Käufer
                    Immobilien mit höherem Verkaufswert leisten. Dies bringt
                    Ihnen mehr Geld und dem Käufer eine bessere Immobilie: Eine
                    Win-Win-Situation für jeden.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8" />

            <div className="lg:w-1/2">
              <Image
                src={bigGrafik}
                alt="Property Image"
                className="mb-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="font-light text-gray-900">
        <div className="mx-auto bg-orange-50 px-4 py-32 sm:px-6 lg:px-40">
          <h2 className="mb-6 text-center text-3xl font-semibold text-orange-600 md:text-start md:text-5xl">
            Ihre Vorteile durch Niedrigzins.at
          </h2>
          <div className="py-12" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <Image
                src={coinflip}
                alt="Coinflip"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-center text-xl font-semibold">
                Übertragung Ihrer Hypothek
              </h3>
              <p>
                Über Niedrigzins.at können Sie problemlos Ihre Hypothek an
                verifizierte und gecheckte Käufer weitergeben.
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
                Wer schnell ist, gewinnt! Die besten Immobilien sind schnell
                vergeben. Einmal registriert und verifiziert können Sie
                Immobilien via Niedrigzins.at bestmöglich verkaufen.
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
                Höhere Verkaufswerte
              </h3>
              <p>
                Durch Top Zinskonditionen können sich Käufer Ihre Immobilie
                besser leisten und Sie kommen auf Ihre Kosten.
              </p>
            </div>
          </div>
        </div>
        <section className="bg-white">
          <h2 className="mb-12 mt-12 px-8 text-center text-3xl font-bold md:text-4xl lg:ml-12 lg:text-start">
            Wie läuft der Verkaufsprozess ab?
          </h2>
          <div className="mx-4 flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
            <Card className="h-[36rem] border-2 border-gray-700 p-5 md:w-[28rem]">
              <CardTitle className="mb-4 font-light">Schritt 1</CardTitle>
              <CardContent className="h-full">
                <Image
                  src={step1}
                  alt="Step 1"
                  className="my-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="mb-8 text-2xl font-bold">
                  Auf Niedrigzins.at registrieren
                </h3>
                <p>
                  Zur Nutzung des Portals ist eine einmalige Registrierung
                  erforderlich. Kosten entstehen Ihnen dabei keine. Einmal
                  registriert können Sie die vollen Funktionen von
                  Niedrigzins.at nutzen.
                </p>
              </CardContent>
            </Card>
            <Card className="h-[36rem] border border-gray-700 p-5 md:w-[28rem]">
              <CardTitle className="mb-4 font-light">Schritt 2</CardTitle>
              <CardContent className="h-full">
                <Image
                  src={step2}
                  alt="Step 2"
                  className="my-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="mb-8 text-2xl font-bold">
                  Einfach Inserat erstellen
                </h3>
                <p>
                  Durch einfache und unkomplizierte Eingabemasken lassen sich
                  Inserate im Handumdrehen erstellen. Nach einem Check durch
                  Niedrigzins.at wird Ihr Inserat freigegeben und steht für
                  Käufer zur Verfügung.
                </p>
              </CardContent>
            </Card>
            <Card className="h-[36rem] border border-gray-700 p-5 md:w-[28rem]">
              <CardTitle className="mb-4 font-light">Schritt 3</CardTitle>
              <CardContent className="h-full">
                <Image
                  src={step3}
                  alt="Step 3"
                  className="my-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="mb-8 text-2xl font-bold">
                  Verifizierte Käufer erhalten Immobilien-Vorschlag
                </h3>
                <p>
                  Verifizierte Käufer erhalten auf Basis ihrer Profile
                  zielgenaue Immobilienvorschläge. Dadurch wird ein "perfektes
                  Match" gefunden, was die Kaufabwicklung einfacher und
                  schneller macht.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <section className="py-36">
        <div className="mx-auto w-[80%] rounded-3xl border-4 border-emerald-500 bg-zinc-200 p-8 font-light">
          <h2 className="pb-4 text-4xl">Was kostet dich Niedrigzins.at?</h2>
          <h2 className="text-4xl">Kostenlos.</h2>
          <p className="pb-8 text-lg">
            Die reine Nutzung des Portals ist für dich komplett kostenlos.
          </p>
          <h2 className="text-4xl">1% vom Kauf der Immobilie</h2>
          <p className="text-lg">
            Erst bei einem erfolgreichen Immobilienkauf, fällt eine einmalige
            Gebühr vom Kaufpreis an.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="mx-auto mb-4 max-w-screen-lg text-center text-4xl font-semibold lg:text-8xl">
          Immobilie inserieren und auf Ihre Kosten kommen!
        </h1>
        <div className="py-4" />
        <button className="rounded bg-orange-600 px-8 py-2 text-xl font-bold text-white hover:bg-orange-700 md:text-3xl">
          Jetzt Immobilie verkaufen
        </button>
      </div>

      <Footer />
    </div>
  );
}
