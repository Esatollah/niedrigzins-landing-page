import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import Link from "next/link";
import pic from "../../public/Image by Austin Distel.webp";
import otherpic from "../../public/moderne Villa.webp";
import smallpic from "../../public/Image by Douglas Sheppard.webp";
import smolpic from "../../public/Image by Kara Eads.webp";
import bigGrafik from "../../public/NZ Grafik Käufer.webp";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0.1, 0.33], ["0px", "150%"]);

  return (
    <div ref={ref} className="">
      <Navbar></Navbar>
      <section className="container mx-auto flex flex-col items-center justify-center py-12 md:py-24">
        <h1 className="w-full text-center text-4xl md:w-3/5 md:text-6xl">
          Immobilien günstiger kaufen
        </h1>
        <div className="py-4" />
        <h3 className="w-full text-center text-lg font-light md:w-3/5">
          Profitiere vom Niedrigzins.at Prinzip und kaufe Immobilien zu besseren
          Konditionen als sie aktuell marktüblich sind.
        </h3>
      </section>

      <div className="relative mb-[20%] flex justify-center md:hidden">
        <Image
          src={smallpic}
          alt="House"
          className="mt-[45%] h-[20%] max-w-[30%] rounded-lg shadow-lg"
        />
        <div className="absolute -z-10">
          <Image
            src={otherpic}
            alt="House"
            className="mx-auto w-[50%] rounded-lg shadow-lg"
          />
        </div>
        <div className="w-20" />
        <Image
          src={smolpic}
          alt="House"
          className="max-w-1/5 mt-[4.5%] h-1/5 max-w-[30%] rounded-lg shadow-lg"
        />
      </div>

      <div className="relative mb-[20%] hidden justify-center space-x-[18%] md:flex">
        <Image
          src={smallpic}
          alt="House"
          className="mt-[6.5%] h-[20%] rounded-lg shadow-lg md:max-w-[30%] lg:max-w-[20%]"
        />
        <motion.div
          className="absolute -z-10 md:left-[17.5%] md:w-[30%] lg:left-[19.5%] lg:w-1/4"
          style={{ y }}
        >
          <Image
            src={otherpic}
            alt="House"
            className="rounded-lg shadow-lg md:w-[150%] lg:w-full"
          />
        </motion.div>
        <Image
          src={smolpic}
          alt="House"
          className="mt-[16.5%] h-[20%] rounded-lg shadow-lg md:max-w-[30%] lg:max-w-[20%]"
        />
      </div>
      <section className="container mx-auto flex flex-col items-center py-12 md:flex-row md:justify-between">
        <div className="p-6 md:w-1/3">
          <h1 className="mb-6 text-3xl font-extralight md:text-xl lg:text-3xl">
            Günstiger Immobilien kaufen
          </h1>
          <p className="text-xl font-light md:text-xs lg:text-lg">
            Kaufe Immobilien zu besseren Konditionen, als sie die aktuelle
            Marktlage hergibt. Durch die Übernahme günstig finanzierter Kredite,
            sparst du dir darüber hinaus eine Menge Geld. Einfach registrieren,
            Daten eingeben und als verifizierter Käufer die besten Deals
            erhalten.
          </p>
          <Link
            className="text-xl font-extralight text-orange-400"
            href={"/kaufen"}
          >
            zur Käufer Page
          </Link>
        </div>
        <div className="w-1/3" />
        <div className="flex-col items-center justify-center space-y-4 md:flex md:w-1/3 md:flex-row md:space-x-4 md:space-y-0">
          <Image
            src={pic}
            alt="Person working"
            className="w-full rounded-lg shadow-lg md:w-5/6"
          />
        </div>
      </section>
      <div className="md:py-8 lg:py-28 3xl:py-44" />
      <Image
        src={bigGrafik}
        alt="bigGrafik"
        className="mx-auto hidden md:block md:max-w-[80%]"
      />

      <div className="md:py-8 lg:py-28 " />
      <div className="container mx-auto flex flex-col md:flex-row justify-end lg:space-x-64 lg:pr-40">
        <div className="max-w-96">
          <h2 className="text-6xl font-extralight">Verkauf</h2>
          <div className="py-2"/>
          <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          </p>
          <div className="py-2"/>
          <Link
            className="text-xl font-extralight text-orange-400"
            href={"/kaufen"}
          >
            zur Verkäufer Page
          </Link>
        </div>
        <div className="w-40 h-40 md:h-96 md:w-96 bg-red-100" />
      </div>

      <div className="md:py-8 lg:py-28 " />
      <div className="container mx-auto flex flex-col md:flex-row justify-start lg:space-x-64 lg:pl-40">
        <div className="h-40 w-40 md:h-96 md:w-96 bg-red-100" />
        <div className="max-w-96">
          <h2 className="text-6xl font-extralight">Makler</h2>
          <div className="py-2"/>
          <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          </p>
          <div className="py-2"/>
          <Link
            className="text-xl font-extralight text-orange-400"
            href={"/kaufen"}
          >
            zur Makler Page
          </Link>
        </div>
      </div>
      <div className="md:py-28" />
      <div className="bg-orange-50 font-light text-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl">
            Der Immobilienkauf über Niedrigzins.at kann deine monatlichen Kosten
            um bis zu 30% senken.
          </h2>
          <p className="mb-12">
            Im Rechenbeispiel werden zur Darstellung entsprechende Zahlen
            geschätzt. Tatsächliche Werte können abweichen (auch in noch bessere
            Konditionen).
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">10.000</h3>
              <p>
                Je nach Kredithöhe kannst du dir im Gesamtzeitraum mehrere
                10.000€ oder sogar 100.000€ Euro an Kosten sparen und so
                lukrative Deals holen.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Einfacher</h3>
              <p>
                Niedrigzins.at stellt die komplette Infrastruktur für die
                Abwicklung zur Verfügung. Du brauchst dich nur registrieren,
                verifizieren und schon kannst du mit wenigen Klicks die besten
                Immobilieninvestments zu top Konditionen durchführen.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Günstiger</h3>
              <p>
                Kosten sparen - Einkünfte erhöhen: So einfach ist die Rechnung.
                Spare monatlich Geld, um deine Investments profitabler vermieten
                oder selbst nutzen zu können.{" "}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">-30%</h3>
              <p>
                Hier kannst du dein Unternehmen, deine Produkte oder Services
                bewerben. Hilf Personen, das Unternehmen und seine Angebote
                kennenzulernen. Lege dar, was das Unternehmen einzigartig macht
                und wie Nutzer davon profitieren können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
