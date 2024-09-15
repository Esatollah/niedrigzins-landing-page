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
        title="Doppelhaushälfte in ruhiger Lage"
        plz="4020"
        ort="Linz"
        description="Geräumige Doppelhaushälfte in ruhiger Siedungslage von Linz. Vier Schlafzimmer, offener Wohnbereich mit moderner Küche, zwei Badezimmer und ein gepflegter Garten mit Terasse. Ideal für Familien."
        keyfacts={{
          Wohnfläche: "140 m²",
          Grundstück: "500 m²",
          Baujahr: "2013",
          Zimmer: "5",
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
          "Familienfreundliche Siedlung",
          "Großzügiger Wohn- und Essbereich",
          "Luft- Wärmepumpe",
          "Zusätzliches Gäste-WC",
          "Terasse",
          "Gaszentralheizung",
          "Moderne Geräte",
          "Fußbodenheizung",
        ]}
        isDemo={true}
        price={550000}
        eigenmittel={110000}
        kreditsumme={687600}
        zinssatz={1.7}
        monatliche_rate={1910}
        vergleichsrate={2500}
        aktueller_zinssatz={3.6}
        dokumente={[
          "Expose",
          "Grundrissplan",
          "Grundbuchauszug",
          "Nebenkostenübersicht",
          "Energieausweis",
        ]}
        anbieter="Real Estate Makler"
        anbieter_ort="Linz"
        aufteilung={{
          Gesamtzimmeranzahl: 5,
          Badezimmer: 2,
          Toiletten: 2,
          Schlafzimmer: 3,
          Terrassen: 1,
        }}
        flaechen={{
          Wohnfläche: 140,
          Gesamtfläche: 180,
          Grundfläche: 500,
          Terassenfläche: 40,
        }}
        photo_copyright="Lotus Design on unsplash; stefan hiienur on unsplash; zac gudakov on unsplash"
        austattung_eigenschaften={{
          Objektkategorie: "Haus",
          Nutzung: "Wohnen",
          Vermarktungsart: "Kauf",
          Eigentumsform: "Alleineigentum",
          Baujahr: "2013",
          Baustatus: "Sofort beziehbar",
          Heizung: "Gaszentralheizung, Fußbodenheizung",
        }}
      />
      <Footer />
    </div>
  );
}
