import Image from "next/image";
import Navbar from "@/components/Navbar";
import bigGrafik from "../../public/NZ Grafik Käufer.png";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import bill from "../../public/bill.svg";
import journey from "../../public/journey.svg";
import discountt from "../../public/discountt.svg";
import coinflip from "../../public/coinflip.svg";
import cashstack from "../../public/cashstack.svg";
import time from "../../public/time-new-svgrepo-com.svg";
import Graz from "../../public/Graz.jpg";
import Kitzbuehel from "../../public/Kitzbuehel.jpg";
import Salzburg from "../../public/Salzburg.jpg";
import Wien from "../../public/Wien.jpg";
import Linz from "../../public/Linz.jpg";
import step1 from "../../public/01_Kauf.jpg";
import step2 from "../../public/02_Kauf.jpg";
import step3 from "../../public/03_Kauf.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ImmoInfo = {
  niedrigzins: number;
  mr_euro: number;
  mr_euro_original: number;
  zins: number;
  img?: any;
  ort?: string;
  bundesland?: string;
};

const immos: ImmoInfo[] = [
  {
    niedrigzins: 1.8,
    mr_euro: 1560,
    zins: 3.5,
    mr_euro_original: 2530,
    ort: "Graz",
    bundesland: "Steiermark",
    img: Graz,
  },
  {
    niedrigzins: 2.2,
    mr_euro: 4170,
    zins: 3.8,
    mr_euro_original: 6300,
    ort: "Kitzbühel",
    bundesland: "Tirol",
    img: Kitzbuehel,
  },
  {
    niedrigzins: 1.7,
    mr_euro: 1910,
    zins: 3.2,
    mr_euro_original: 2500,
    ort: "Linz",
    bundesland: "Oberösterreich",
    img: Linz,
  },
  {
    niedrigzins: 2.6,
    mr_euro: 3310,
    zins: 3.3,
    mr_euro_original: 4350,
    ort: "Salzburg",
    img: Salzburg,
  },
  {
    niedrigzins: 1.5,
    mr_euro: 2430,
    zins: 3.44,
    mr_euro_original: 3600,
    ort: "Wien",
    img: Wien,
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [maxMr, setMaxMr] = useState(50);

  return (
    <div className="">
      <Navbar></Navbar>
      <section className="container mx-auto flex flex-col items-center justify-center py-12 md:py-12">
        <div className="py-12" />
        <h1 className="w-full text-center text-4xl font-extralight md:w-3/5 md:text-8xl">
          <span className="font-bold">Endlich leistbares</span> Zuhause
        </h1>
        <div className="py-4" />
        <h3 className="w-full text-center text-2xl font-extralight md:w-3/5">
          Kaufe dein Eigenheim mit Zinsen von nur 2% oder weniger
        </h3>
      </section>
      <section className="flex justify-center">
        <button
          className="rounded-2xl border-2 border-dashed border-black bg-emerald-500 px-14 py-3 text-2xl font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none md:text-4xl"
          onClick={() => setIsOpen(true)}
        >
          Immobilie finden
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
            >
              <motion.div
                initial={{ scale: 0, rotate: "12.5deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                exit={{ scale: 0, rotate: "0deg" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-orange-50 p-6 shadow-xl"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col space-y-2">
                    <h2 className="font-bold">Maximale Monatsrate</h2>
                    <h4 className="w-52 bg-white text-center py-2 border border-black rounded-lg">€ {maxMr}</h4>
                    <Slider
                      value={[maxMr]}
                      onValueChange={(value) => setMaxMr(value[0])}
                      defaultValue={[800]}
                      step={50}
                      max={5000}
                      className="max-w-[20rem] h-2"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h2 className="font-bold">Ort</h2>
                    <Select>
                    <SelectTrigger className="w-52 bg-white text-center py-2 border border-black rounded-lg">
                    <SelectValue className="text-center" placeholder="Ort" defaultValue={"Wien"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Wien">Wien</SelectItem>
                        <SelectItem value="Graz">Graz</SelectItem>
                        <SelectItem value="Tirol">Tirol</SelectItem>
                        <SelectItem value="Salzburg">Salzburg</SelectItem>
                        <SelectItem value="Linz">Linz</SelectItem>
                        <SelectItem value="Klagenfurt">Klagenfurt</SelectItem>
                        <SelectItem value="Innsbruck">Innsbruck</SelectItem>
                    </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <div className="py-10" />
      <div className="no-scrollbar mx-auto flex max-w-screen-2xl justify-between space-x-12 overflow-x-auto px-4">
        {immos.map((immo, i) => (
          <div>
            <Card key={i} className="shadowshadow-2xl">
              <CardContent className="relative w-64 rounded border-2 border-gray-300 p-0 shadow-xl">
                {immo.img ? (
                  <Image
                    src={immo.img}
                    alt={"House"}
                    className="h-40 object-cover object-center"
                  />
                ) : (
                  <div className="h-40 w-full bg-red-100 md:h-40" />
                )}
                <div className="flex justify-between px-6 py-4">
                  <div>
                    <h3 className="text-xs text-emerald-500">Niedrigzins</h3>
                    <p className="font-bold">{immo.niedrigzins}%</p>
                    <p className="text-xs line-through">{immo.zins}%</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-emerald-500">
                      Monatliche Rate
                    </h3>
                    <p className="font-bold">
                      {immo.mr_euro.toLocaleString("de-DE")} Euro
                    </p>
                    <p className="text-xs line-through">
                      {immo.mr_euro_original.toLocaleString("de-DE")} Euro
                    </p>
                  </div>
                </div>
                <div className="border-1 absolute bottom-[30%] left-[80%] right-0 flex w-1/3 flex-col items-center justify-center overflow-visible rounded border-gray-300 bg-emerald-500 text-white shadow shadow-black">
                  <h3 className="text-lg">
                    -
                    {(immo.mr_euro_original - immo.mr_euro).toLocaleString(
                      "de-DE",
                    )}
                  </h3>
                  <p className="text-center text-xs">Euro pro Monat</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="py-20" />

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

          <div className="flex flex-col justify-center md:flex-row md:space-x-4">
            <div className="space-y-4 md:w-1/3">
              <Image
                className="mx-auto"
                src={bill}
                alt="Bill Icon"
                height={100}
                width={100}
              />
              <p>
                Je nach Kredithöhe kannst du dir im Gesamtzeitraum mehrere
                10.000€ oder sogar 100.000€ Euro an Kosten sparen und so
                lukrative Deals holen.
              </p>
            </div>

            <div className="space-y-4 md:w-1/3">
              <Image
                className="mx-auto mb-8 pr-8 pt-4"
                src={journey}
                alt="Journey"
                height={100}
                width={100}
              />
              <p>
                Niedrigzins.at stellt die komplette Infrastruktur für die
                Abwicklung zur Verfügung. Du brauchst dich nur registrieren,
                verifizieren und schon kannst du mit wenigen Klicks die besten
                Immobilieninvestments zu top Konditionen durchführen.
              </p>
            </div>

            <div className="space-y-4 md:w-1/3">
              <Image
                className="mx-auto mb-8 pr-8 pt-4"
                src={discountt}
                alt="Discount"
                height={100}
                width={100}
              />
              <p>
                Kosten sparen - Einkünfte erhöhen: So einfach ist die Rechnung.
                Spare monatlich Geld, um deine Investments profitabler vermieten
                oder selbst nutzen zu können.{" "}
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
                  <h3 className="text-xl font-semibold">
                    BESSERE LEISTBARKEIT
                  </h3>
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
                  <h3 className="text-xl font-semibold">
                    WENIGER GESAMTKOSTEN
                  </h3>
                  <p className="w-3/4">
                    Weniger jährliche Zinsen bedeutet massiv weniger
                    Gesamtkosten am Ende des Finanzierungszeitraums. Sie
                    ersparen sich durch das Niedrigzins.at Prinzip mehrere (wenn
                    nicht dutzende) tausende Euros.
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
          <h2 className="mb-6 text-5xl font-semibold text-orange-600">
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
                Leistbare Immobilien
              </h3>
              <p>
                Dank der niedrigeren monatlichen Kosten können Sie sich ihre
                Immobilie leichter leisten oder sogar eine größere innerhalb
                Ihres Budgets kaufen.
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
                Schnell registriert, gewinnt! Die besten Immobilien und sehr
                schnelle Abwicklungen ermöglichen unkompliziertes Investieren
                und Wohnen in Wunschimmobilien.
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
                Weniger Monatliche- und Gesamtkosten
              </h3>
              <p>
                Geringere jährliche Zinsen führen erheblich reduzierte
                Gesamtkosten. Durch das Niedrigzins.at Prinzip sparen Sie sich
                viel Geld, das Sie anders verwenden können.
              </p>
            </div>
          </div>
        </div>
        <div className="py-8" />
        <section className="bg-white">
          <h2 className="mb-6 mt-12 text-center text-2xl md:text-3xl">
            Wie läuft der Kaufprozess ab?
          </h2>
          <div className="py-4" />
          <div className="mx-4 flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
            <Card className="h-[36rem] border-2 border-gray-700 p-3 md:w-[28rem] md:p-5">
              <CardTitle className="mb-4 font-light">Schritt 1</CardTitle>
              <CardContent className="h-full">
                <Image
                  src={step1}
                  alt="Step 1"
                  className="my-4 mb-4 h-48 w-full rounded-lg object-cover"
                />
                <h3 className="mb-8 text-2xl font-light">Immobilien finden</h3>
                <p>
                  Durchforsten Sie Niedrigzins.at Immobilienplattform und finde
                  Immobilien nach deinen Vorstellungen.
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
                <h3 className="mb-8 text-2xl font-light">
                  Registrieren und verifizieren
                </h3>
                <p>
                  Registriere dich einmalig als Käufer. Unsere KI-gestützten
                  Systeme validieren deine Daten und bestätigen dich als
                  verifizierten Käufer. Dafür brauchst du keine weiteren
                  Schritte zur Bank zu unternehmen.
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
                <h3 className="mb-8 text-2xl font-light">
                  Mit wenigen Klicks kaufen
                </h3>
                <p>
                  Durch die Vor-Verifizierung mit unseren System kann dir die
                  Bank binnen kürzester Zeit dein GO für den Kauf geben und den
                  Kauf mittels weniger Klicks abschließen. Immobilieninvestments
                  leicht gemacht!
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

      <div className="font-light">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-4 text-4xl font-semibold md:text-8xl">
            Leistbare Immobilien sind schnell weg!
          </h1>
          <p className="mb-14 text-2xl md:text-4xl">
            Registrieren Sie sich gleich!
          </p>
          <button className="rounded bg-orange-600 px-8 py-2 text-3xl font-bold text-white hover:bg-orange-700">
            Registrieren
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
