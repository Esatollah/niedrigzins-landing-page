import React from "react";
import ImmoPage from "../../fullpages/ImmoPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
  <div>
    <Navbar />
    <ImmoPage
      images={[""]}
      title="Elegante Stadtvilla kurz vor Fertigstellung"
      plz="2201"
      ort="Gerasdorf"
      description="Dieses hochwertige Baumeisterhaus wurde 2021/2022 in Ziegelbauweise errichtet und bietet auf ca. 300 m² Wohnnutzfläche aufgeteilt auf 3 Geschoße sehr viel Platz. Hier findet entweder eine große Familie ein schönes Zuhause oder man kann hier auch Arbeiten und Wohnen unter einem Dach realisieren."
      keyfacts={{
        Wohnfläche: "207 m²",
        Grundstücks: "620 m²",
        Baujahr: "2021/22",
        Objektkategorie: "Haus",
        Zimmer: "5",
        Nutzung: "Wohnen",
      }}
      punktet_mit={[
        "Ruhelage",
        "sehr gute Infrastruktur",
        "Ziegelhaus",
        "Luft- Wärmepumpe",
        "Fußbodenheizung",
        "Anschlüsse für Klimaanlage",
        "Verkabelung für Alarmanlage",
        "Sicherheitstüre RC2",
        "Sicheritsfenseter mit 3-fach Verglasung",
        "elektrische Außenjalousien, teilweise mit Insektengitter",
        "belichtete Kellerräume",
      ]}
      isDemo={false}
      price={1350000}
      eigenmittel={270000}
      kreditsumme={1442920.32}
      zinssatz={2.03}
      monatliche_rate={4008.11}
      vergleichsrate={4910.17}
      aktueller_zinssatz={3.6}
      dokumente={[
        "Expose",
        "Grundrissplan",
        "Grundbuchauszug",
        "Energieausweis",
        "Nebenkostenübersicht",
      ]}
      anbieter="25/7 - Raiffeisen Immobilien Vermittlung GesmbH"
      anbieter_ort="Wien"
    />
    <Footer />
  </div>
  )
}
