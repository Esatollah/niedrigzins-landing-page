import Navbar from "@/components/Navbar";
import React from "react";

interface ImmoPageProps {
  images: string[];
  title: string;
  description: string;
  keyfacts: Record<string, string>;
  punktet_mit: string[];
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
}

export default function ImmoPage(props: ImmoPageProps) {
  return (
    <div className="container">
      <div>
       thing
      </div>
      <div className="flex flex-col-reverse md:flex-row md:space-x-8">
        <div className="flex flex-col md:w-2/3">
          <h1 className="text-4xl lg:text-6xl font-bold max-w-2xl">
          {props.title}
          </h1>
          <h2 className="text-xl font-bold max-w-2xl">
            {props.plz} {props.ort}
          </h2>

          <h2 className="text-xl font-bold max-w-2xl">
            Key facts
          </h2>
          <div className="grid grid-cols-2 bg-orange-50 p-5 rounded-3xl">
            {Object.entries(props.keyfacts).map(([key, value]) => (
              <div>
                <h3 className="font-bold">{key}</h3>
                <p>{value}</p>
              </div>
            ))}
            </div>
          <h2 className="text-xl font-bold max-w-2xl">
          Kurzbeschreibung
          </h2>
          <p>{props.description}</p>

          <div className="relative w-full py-80">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.5941485990259!2d16.46316122859768!3d48.295608098196325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d046110b7132f%3A0xc844a6aecf05a4ab!2sFranz-Wallner-Gasse%2021%2C%202201%20Gerasdorf%20bei%20Wien!5e0!3m2!1sde!2sat!4v1725825751551!5m2!1sde!2sat" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          ></iframe>
          </div>

        </div>
        <div className="flex flex-col md:w-[45%] p-5 bg-orange-50 rounded-3xl">
          {props.title}
        </div>
      </div>
    </div>
  )
}
