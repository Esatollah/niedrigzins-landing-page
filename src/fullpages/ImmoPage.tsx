import Navbar from "@/components/Navbar";
import React from "react";

interface ImmoPageProps {
  images: string[];
  title: string;
  description: string;
  keyfacts: Record<string, string>;
  details: Record<string, string>;
  aufteilung: Record<string, number>;
  punktet_mit: string[];
  punktet_mit_text?: string;
  extended_description?: string;
  plz: string;
  ort: string;
  isDemo: boolean;
  price: number;
  eigenmittel: number;
  kreditsumme: number;
  zinssatz: number;
  aktueller_zinssatz: number;
  monatliche_rate: number;
  vergleichsrate: number;
  dokumente: string[];
  anbieter: string;
  anbieter_ort: string;
  locationurl?: string;
  flaechen: Record<string, number>;
  photo_copyright?: string;
  austattung_eigenschaften: Record<string, string>;
}

export default function ImmoPage(props: ImmoPageProps) {
  return (
    <div className="container flex flex-col items-center">
      <div>thing</div>
      <div className="flex max-w-6xl flex-col-reverse md:flex-row md:justify-between md:space-x-8">
        <div className="flex flex-col md:w-2/3">
          <h1 className="max-w-2xl text-4xl font-bold lg:text-6xl">
            {props.title}
          </h1>
          <h2 className="max-w-2xl text-xl font-bold">
            {props.plz} {props.ort}
          </h2>
          <div className="py-4" />
          <h2 className="max-w-2xl text-xl font-bold">Key facts</h2>
          <div className="grid grid-cols-2 rounded-3xl bg-orange-50 p-5">
            {Object.entries(props.keyfacts).map(([key, value]) => (
              <div>
                <h3 className="font-bold">{key}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>

          <div className="py-4" />
          <h2 className="max-w-2xl text-xl font-bold">Kurzbeschreibung</h2>
          <p>{props.description}</p>

          <div className="py-4" />
          <h2 className="max-w-2xl text-xl font-bold">Lage</h2>
          <div className="relative w-full py-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.5941485990259!2d16.46316122859768!3d48.295608098196325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d046110b7132f%3A0xc844a6aecf05a4ab!2sFranz-Wallner-Gasse%2021%2C%202201%20Gerasdorf%20bei%20Wien!5e0!3m2!1sde!2sat!4v1725825751551!5m2!1sde!2sat"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            ></iframe>
          </div>

          <div className="py-8" />
          <h2 className="max-w-2xl text-xl font-bold">Details</h2>
          <div className="grid grid-cols-2 rounded-3xl bg-orange-50 p-5">
            {Object.entries(props.details).map(([key, value]) => (
              <div>
                <h3 className="font-bold">{key}</h3>
                {value.split(";").map((v) => (
                  <p>{v}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="py-4" />
          <h2 className="max-w-2xl text-xl font-bold">
            Diese Ligenschaft punktet mit:
          </h2>
          <ul className="list-disc pl-8">
            {props.punktet_mit.map((punkt) => (
              <li>{punkt}</li>
            ))}
          </ul>
          <p>{props.punktet_mit_text}</p>

          <div className="py-4" />
          <h2 className="max-w-2xl text-xl font-bold">
            Austattung und Eigenschaften
          </h2>
          <div className="py-2" />
          <div className="pl-8">
            {Object.entries(props.austattung_eigenschaften).map(
              ([key, value]) => (
                <div>
                  <p className="max-w-2xl">
                    <span className="font-bold">{key}</span>: {value}
                  </p>
                </div>
              ),
            )}

            <div className="py-4" />
            <h2 className="max-w-2xl font-bold">Flächen</h2>
            <ul>
              {Object.entries(props.flaechen).map(([key, value]) => (
                <li>
                  {key}: {value}m²
                </li>
              ))}
            </ul>

            <div className="py-4" />
            <h2 className="max-w-2xl font-bold">Aufteilung</h2>
            <ul>
              {Object.entries(props.aufteilung).map(([key, value]) => (
                <li>
                  {key}: {value}m²
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <div className="flex h-fit flex-col rounded-3xl bg-orange-50 px-5 py-10">
            <div className="py-5" />
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">Kaufpreis</h3>
                <p>{props.price.toLocaleString("de-De")} Euro</p>
              </div>
              <div>
                <h3 className="font-bold">Eigenmittel (20%)</h3>
                <p>{props.eigenmittel.toLocaleString("de-De")} Euro</p>
              </div>
            </div>
            <div className="py-2" />
            <div>
              <h3 className="font-bold">Kreditsumme</h3>
              <p>{props.kreditsumme.toLocaleString("de-De")} Euro</p>
            </div>
            <div className="py-2" />
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">Zinssatz</h3>
                <p>{props.zinssatz}%</p>
              </div>
              <div>
                <h3 className="max-w-36 text-wrap text-sm font-semibold text-gray-400">
                  Aktueller
                  <br /> Vergleichs-Zinssatz
                </h3>
                <p>3,6%</p>
              </div>
            </div>
            <div className="py-2" />
            <div className="flex justify-between">
              <div className="w-1/2">
                <h3 className="font-bold">Monatliche Kreditrate</h3>
                <p>{props.monatliche_rate.toLocaleString("de-De")} Euro</p>
              </div>
              <div>
                <h3 className="max-w-36 text-wrap text-sm font-semibold text-gray-400">
                  Vergleichsrate
                  <br /> <span className="font-light">bei aktuellem Zins</span>
                </h3>
                <p>3,6%</p>
              </div>
            </div>
            <div className="py-1" />
            <h3 className="font-bold text-emerald-500">Monatliche Ersparnis</h3>
            <div className="py-1" />
            <p className="rounded-2xl bg-emerald-500 py-4 text-center text-2xl font-extrabold text-white transition-all hover:scale-105">
              -
              {(props.vergleichsrate - props.monatliche_rate).toLocaleString(
                "de-De",
              )}{" "}
              Euro*
            </p>
            <div className="py-2" />
            <h3 className="font-bold">Vorliegende Dokumente</h3>
            <ul className="list-disc pl-5">
              {props.dokumente.map((dokument) => (
                <li>{dokument}</li>
              ))}
            </ul>
          </div>
          <div className="py-4" />
          <div className="flex h-fit flex-col rounded-3xl bg-orange-50 p-5">
            <h2 className="text-xl font-bold">Anbieter</h2>
            <h3 className="text-sm font-bold">{props.anbieter}</h3>
            <p>{props.anbieter_ort}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
