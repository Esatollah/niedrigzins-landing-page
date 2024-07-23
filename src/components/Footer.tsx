export default function Footer() {
  return (
    <div className="mt-12 bg-gray-50 py-6 shadow-inner">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-4 text-sm text-gray-400">
        <div>
          <h1 className="text-xl text-gray-800">Niedrigzins.at</h1>
          Niedrigzins.at belebt den Immobilienmarkt, macht Käufe erschwinglicher
          und verkürzt Laufzeiten.
          <br />
          Niedrigzins.at ist eine Marke der JVMG GmbH mit Sitz in 2380
          Perchtoldsdorf, Österreich.
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>FAQs</strong>
            <br />
            Infos für Finanzinstitute
            <br />
            Partner werden
            <br />
            Developer
            <br />
            Kontakt
          </div>
          <div>
            <strong>Richtlinien</strong>
            <br />
            Datenschutz
            <br />
            AGB
            <br />
            Cookie
            <br />
            Impressum
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-gray-400">
        © 2024 von Niedrigzins
      </p>
    </div>
  );
}
