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
        Grundstück: "620 m²",
        Baujahr: "2021/22",
        Objektkategorie: "Haus",
        Zimmer: "5",
        Nutzung: "Wohnen",
      }}
      details={{
        Wohnfläche: "207 m²",
        Grundstück: "620 m²",
        Gesamtfläche: "310 m²",
        Freifläche: "Terasse 42m²;Balkon 42m²",
        Bauklasse: "I, II",
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
      aufteilung={{
        Gesamtzimmeranzahl: 5,
        Badezimmer: 2,
        Toiletten: 3,
        Schlafzimmer: 4,
        Terrassen: 1,
        Balkone: 2,
      }}
      flaechen={{
        Wohnfläche: 207,
        Gesamtfläche: 310,
        Grundfläche: 620,
        Kellerfläche: 103,
        Balkonfläche: 42,
        Terassenfläche: 41.45,
      }}
      photo_copyright="Raiffeisen Immobilien Vermittlung GmbH"
      austattung_eigenschaften={{
        Objektkategorie: "Haus",
        Nutzung: "Wohnen",
        Vermarktungsart: "Kauf",
        Eigentumsform: "Alleineigentum",
        Baujahr: "2021/22",
        Baustatus: "Im Bau",
        Heizung: "Fußbodenheizung: Luft Wärmepumpepumpenheizung",
      }}
    />
    <Footer />
  </div>
  )
}
