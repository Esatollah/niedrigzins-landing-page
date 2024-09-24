import React from "react";
import ImmoPage from "../../fullpages/ImmoPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ImmoPage
        images={["/wien1.jpg", "/wien2.jpg", "/wien3.jpg", "/wien4.jpg"]}
        title="Luxuriöses Eigentumswohnung in Wien"
        plz="1030"
        ort="Wien"
        description="Diese exklusive Eigentumswohnung befinet sich in einer der begehrtesten Lagen Wiens, im 3. Bezirk, Landstraße, und bietet eine einmalige Gelegenheit für anspruchsvolle Stadtmenschen. Die im Jahr 2015 erbaute Wohnung erstreckt sich über 120 m² und zeichnet sich durch eine moderne Architektur, hochwertige Materialien und eine durchdachte Raumaufteilung aus."
        keyfacts={{
          Wohnfläche: "120 m²",
          Grundstück: "n. z.",
          Baujahr: "2015",
          Zimmer: "4",
        }}
        details={{
          Wohnfläche: "120 m²",
          Grundstück: "n. a.",
          Gesamtfläche: "135 m²",
          Freifläche: "Balkon 15m²",
          Bauklasse: "I, II",
        }}
        punktet_mit={[
          "Zentrale Lage",
          "Nahe Donaukanal, Stadtpark und Prater",
          "Moderne Architektur mit hochwertigen Materialien",
          "Große Fensterfronten",
          "Offen Küche",
          "Balkon in den Innenhof",
        ]}
        punktet_mit_text="Die Wohnung befindet sich in einer hervorragenden Lage im 3. Bezirk, Landstraße, einer der gefragtesten Wohngegenden Wiens. Der Stadtpark ist nur wenige Gehminuten entfernt und bietet zahlreiche Erholungsmöglichkeiten. Die Wiener Innenstadt erreichen Sie in nur 10 Minuten zu Fuß oder mit den nahegelegenen öffentlichen Verkehrsmitteln. Alle wichtigen Einrichtungen des täglichen Bedarfs wie Supermärkte, Apotheken, Ärzte, sowie zahlreiche Cafés und Restaurants befinden sich in unmittelbarer Umgebung."
        isDemo={true}
        price={700000}
        eigenmittel={140000}
        kreditsumme={874800}
        zinssatz={1.5}
        monatliche_rate={2430}
        vergleichsrate={3600}
        aktueller_zinssatz={3.44}
        dokumente={[
          "Expose",
          "Grundrissplan",
          "Grundbuchauszug",
          "Nebenkostenübersicht",
          "Energieausweis",
        ]}
        anbieter="ROI Immobilienvermittlungs GmbH"
        anbieter_ort="Wien"
        aufteilung={{
          Gesamtzimmeranzahl: 4,
          Badezimmer: 1,
          Toiletten: 1,
          Schlafzimmer: 2,
          Balkon: 1,
        }}
        flaechen={{
          Wohnfläche: 120,
          Gesamtfläche: 135,
          Balkonfläche: 15,
        }}
        photo_copyright="naomi hebert on unsplash; robin van geenen on unsplash; zac gudakov on unsplash"
        austattung_eigenschaften={{
          Objektkategorie: "Wohnung",
          Nutzung: "Wohnen",
          Vermarktungsart: "Kauf",
          Eigentumsform: "Alleineigentum",
          Baujahr: "2015",
          Baustatus: "Sofort beziehbar",
          Heizung: "Fernwärme, Fußbodenheizung",
        }}
      />
      <Footer />
    </div>
  );
}
