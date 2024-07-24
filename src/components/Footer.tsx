export default function Footer() {
  return (
    <div className="mt-12 bg-gray-50 py-6 shadow-inner px-4">
      <h1 className="mx-auto text-xl max-w-5xl text-gray-800 ">Niedrigzins.at</h1>
      <div className="mx-auto flex justify-between text-sm text-gray-400 max-w-5xl">
        <div>
          <p>Endlich leistbares Zuhause</p>
          <div className="py-2"/>
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
