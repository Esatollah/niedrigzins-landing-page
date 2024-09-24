import React from "react";
import ImmoPage from "../../fullpages/ImmoPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <ImmoPage
        images={["/Graz.jpg", "/Graztwo.jpg", "/Grazthree.jpg"]}
        title="Modernes Einfamilienhaus in Graz"
        plz="8020"
        ort="Graz"
        description="Dieses attraktive Einfamilienhaus in Graz bietet die perfekte Kombination aus modernem Wohnen und einer idyllischen, familienfreundlichen Umgebung. Das 2010 erbaute Haus liegt in einer ruhigen Wohngegend am Stadtrand und bietet durch seine großzügige Raumaufteilung und den großen Garten eine ideale Lebensqualität für Familien."
        keyfacts={{
          Wohnfläche: "150 m²",
          Grundstück: "600 m²",
          Baujahr: "2010",
          Zimmer: "5",
        }}
        details={{
          Wohnfläche: "150 m²",
          Grundstück: "600 m²",
          Gesamtfläche: "190 m²",
          Freifläche: "Garten;Terrasse 40m²",
          Bauklasse: "I, II",
        }}
        punktet_mit={[
          "Ruhige Lage",
          "Gute Infrastruktur",
          "Familienfreundliche Umgebung",
          "LKH in der Nähe",
          "Großzügiger Garten",
          "Hochwertige Ausstattung",
        ]}
        punktet_mit_text="Das Haus befindet sich in einer sehr ruhigen und begehrten Wohnlage von Graz, die sich durch ihre Nähe zur Natur und die gleichzeitig gute Anbindung an die Stadt auszeichnet. Schulen, Kindergärten, Einkaufsmöglichkeiten und Freizeiteinrichtungen sind in wenigen Minuten erreichbar. Das Zentrum von Graz ist nur etwa 15 Autominuten entfernt, was eine schnelle Anbindung an das Stadtleben ermöglicht."
        isDemo={true}
        price={450000}
        eigenmittel={90000}
        kreditsumme={561600}
        zinssatz={1.8}
        monatliche_rate={1560}
        vergleichsrate={2530}
        aktueller_zinssatz={3.5}
        dokumente={[
          "Expose",
          "Grundrissplan",
          "Grundbuchauszug",
          "Nebenkostenübersicht",
          "Energieausweis",
        ]}
        anbieter="Schoön+Schnell Immobilienvermittlungs GmbH"
        anbieter_ort="Graz"
        aufteilung={{
          Gesamtzimmeranzahl: 5,
          Badezimmer: 1,
          Toiletten: 2,
          Schlafzimmer: 3,
          Terrasse: 1,
        }}
        flaechen={{
          Wohnfläche: 150,
          Gesamtfläche: 600,
          Terrassenfläche: 40,
        }}
        photo_copyright="matt jones on unsplash; steven ungermann on unsplash; zac gudakov on unsplash"
        austattung_eigenschaften={{
          Objektkategorie: "Haus",
          Nutzung: "Wohnen",
          Vermarktungsart: "Kauf",
          Eigentumsform: "Alleineigentum",
          Baujahr: "2010",
          Baustatus: "Sofort beziehbar",
          Heizung: "Luft-Wärmepumpe, Fußbodenheizung",
        }}
      />
      <Footer />
    </div>
  );
}
