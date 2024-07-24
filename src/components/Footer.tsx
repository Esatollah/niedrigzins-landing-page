export default function Footer() {
  return (
    <div className="mt-12 bg-gray-50 py-6 shadow-inner">
      <div className="mx-auto flex justify-between px-4 text-sm text-gray-400 max-w-5xl">
        <div>
          <h1 className="text-xl text-gray-800">Niedrigzins.at</h1>
          <p>Endlich leistbares Zuhause</p>
          <div className="py-4"/>
          <p>Kontakt</p>
        </div>
          <div>
            <strong>FAQs</strong>
            <br />
            Infos für Finanzinstitute
            <br />
            Partner werden
            <br />
            Developer
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
      <p className="mt-4 text-center text-xs text-gray-400">
        © 2024 von Niedrigzins
      </p>
    </div>
  );
}
