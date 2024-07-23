import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import Link from "next/link";
import pic from "../../public/Image by Austin Distel.webp";
import otherpic from "../../public/moderne Villa.webp";
import smallpic from "../../public/Image by Douglas Sheppard.webp";
import smolpic from "../../public/Image by Kara Eads.webp";
import bigGrafik from "../../public/NZ Grafik Käufer.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="py-20" />
      <section className="container mx-auto flex flex-col justify-center py-12 md:py-12">
        <h1 className="w-full text-4xl font-extralight md:w-4/5 md:text-8xl">
          <span className="font-bold">
            Immobilien zum Wunschpreis verkaufen
          </span>
        </h1>
        <div className="py-4" />
        <h3 className="w-full text-2xl font-extralight md:w-2/5">
          Verkaufen Sie Immobilien nicht unter Wert, sondern zum Wunschpreis.
        </h3>
        <div className="py-4" />
        <button className="w-80 rounded-2xl border-2 border-dashed border-black bg-green-500 px-14 py-3 text-4xl font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          Immobilie verkaufen
        </button>
      </section>

      <div className="bg-orange-50 font-light text-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl">
            Der Verkauf von Immobilien über Niedrigzins.at nach Ihren
            Vorstellungen: Schnell, einfach, geldbringend
          </h2>

          <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Geldbringend</h3>
              <p>
                Je nach Kredithöhe kannst du dir im Gesamtzeitraum mehrere
                10.000€ oder sogar 100.000€ Euro an Kosten sparen und so
                lukrative Deals holen.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Schnell</h3>
              <p>
                Niedrigzins.at stellt die komplette Infrastruktur für die
                Abwicklung zur Verfügung. Du brauchst dich nur registrieren,
                verifizieren und schon kannst du mit wenigen Klicks die besten
                Immobilieninvestments zu top Konditionen durchführen.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Einfach</h3>
              <p>
                Kosten sparen - Einkünfte erhöhen: So einfach ist die Rechnung.
                Spare monatlich Geld, um deine Investments profitabler vermieten
                oder selbst nutzen zu können.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20" />
      <div className="min-h-[90vh] font-light text-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-6 text-center text-3xl">
                Das Niedrigzins.at Prinzip
              </h2>
              <div className="mb-6 flex space-y-4 md:mb-0">
                <img
                  src="/path/to/your/icon1.png"
                  alt="Affordability Icon"
                  className="mx-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    BESSERE LEISTBARKEIT
                  </h3>
                  <p>
                    Aufgrund der geringeren monatlichen Belastung durch die
                    Übernahme günstiger Kredite, können Sie sich Ihre Immobilie
                    besser leisten, oder sogar eine größere mit ihrem Budget
                    kaufen.
                  </p>
                </div>
              </div>

              <div className="mb-6 flex space-y-4 md:mb-0">
                <img
                  src="/path/to/your/icon2.png"
                  alt="Cost Saving Icon"
                  className="mx-auto"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    WENIGER GESAMTKOSTEN
                  </h3>
                  <p>
                    Weniger jährliche Zinsen bedeutet massiv weniger
                    Gesamtkosten am Ende des Finanzierungszeitraums. Sie
                    ersparen sich durch das Niedrigzins.at Prinzip mehrere (wenn
                    nicht dutzende) tausende Euros.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <Image
                src={bigGrafik}
                alt="Property Image"
                className="mb-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto bg-orange-50 px-4 py-32 sm:px-6 lg:px-40">
        <h2 className="mb-6 text-5xl font-semibold text-orange-600">
          Ihre Vorteile durch Niedrigzins.at
        </h2>
        <div className="py-12" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-4">
            <div className="mx-auto h-20 w-20 bg-red-500"></div>
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
            <div className="mx-auto h-20 w-20 bg-red-500"></div>
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
            <div className="mx-auto h-20 w-20 bg-red-500"></div>
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

      <section className="bg-white">
        <h2 className="mb-6 mt-12 text-center text-3xl">
          Wie läuft der Vermittlungsprozess ab?
        </h2>
        <div className="mx-4 flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
          <Card className="h-[36rem] border border-gray-700 p-5 md:w-[28rem]">
            <CardTitle className="mb-4 font-light">Schritt 1</CardTitle>
            <CardContent className="h-full">
              <div className="mb-4 h-48 w-full bg-red-500"></div>
              <h3 className="mb-8 text-2xl font-bold">
                Auf Niedrigzins.at registrieren
              </h3>
              <p>
                Durchforsten Sie Niedrigzins.at Immobilienplattform und finde
                Immobilien nach deinen Vorstellungen.
              </p>
            </CardContent>
          </Card>
          <Card className="h-[36rem] border border-gray-700 p-5 md:w-[28rem]">
            <CardTitle className="mb-4 font-light">Schritt 2</CardTitle>
            <CardContent className="h-full">
              <div className="mb-4 h-48 w-full bg-red-500"></div>
              <h3 className="mb-8 text-2xl font-bold">
                Maklerplatform connecten
              </h3>
              <p>
                Registriere dich einmalig als Käufer. Unsere KI-gestützten
                Systeme validieren deine Daten und bestätigen dich als
                verifizierten Käufer. Dafür brauchst du keine weiteren Schritte
                zur Bank zu unternehmen.
              </p>
            </CardContent>
          </Card>
          <Card className="h-[36rem] border border-gray-700 p-5 md:w-[28rem]">
            <CardTitle className="mb-4 font-light">Schritt 3</CardTitle>
            <CardContent className="h-full">
              <div className="mb-4 h-48 w-full bg-red-500"></div>
              <h3 className="mb-8 text-2xl font-bold">
                Inserat via Maklerplatform veröffentlichen
              </h3>
              <p>
                Durch die Vor-Verifizierung mit unseren System kann dir die Bank
                binnen kürzester Zeit dein GO für den Kauf geben und den Kauf
                mittels weniger Klicks abschließen. Immobilieninvestments leicht
                gemacht!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="font-light">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="mx-auto mb-4 max-w-screen-lg text-center text-4xl font-semibold md:text-8xl">
            Jetzt Inserat über Ihr Maklertool bei Niedrigzins.at inserieren
          </h1>
          <button className="rounded bg-orange-600 px-8 py-2 text-3xl font-bold text-white hover:bg-orange-700">
            Loslegen
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
