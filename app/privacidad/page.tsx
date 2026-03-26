import { Scale } from "lucide-react";
import Link from "next/link";

export default function Privacidad() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#b8962e] hover:text-[#d4af57] transition-colors mb-6"
          >
            ← Regresar al inicio
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#0f1f3d] flex items-center justify-center">
              <Scale className="w-5 h-5 text-[#d4af57]" />
            </div>
            <div className="text-sm text-[#0f1f3d]/50 uppercase tracking-wider">Notaría Pública No. 2</div>
          </div>
          <h1 className="text-3xl font-bold text-[#0f1f3d] mb-2" style={{ fontFamily: "Georgia, serif" }}>
            Aviso de Privacidad
          </h1>
          <span className="block w-12 h-0.5 bg-[#b8962e] mb-6" />
          <p className="text-sm text-[#0f1f3d]/50">Última actualización: marzo de 2012</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-[#0f1f3d]/75 leading-relaxed">
          <p>
            En cumplimiento con lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, la <strong>Notaría Pública No. 2</strong>, con domicilio en Washington #408 Poniente, Col. Centro, Monterrey, N.L., C.P. 64000, le informa el tipo de datos personales que recabamos de usted, cómo los usamos, manejamos y aprovechamos.
          </p>

          <section>
            <h2 className="text-lg font-bold text-[#0f1f3d] mb-2" style={{ fontFamily: "Georgia, serif" }}>
              Datos Personales Recabados
            </h2>
            <p>
              Para la prestación de nuestros servicios notariales, recabamos los siguientes datos personales:
            </p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Nombre completo y estado civil",
                "Domicilio y datos de nacimiento",
                "Datos de contacto (teléfono y correo electrónico)",
                "Información financiera y patrimonial",
                "Detalles de los inmuebles involucrados en los trámites",
                "Información sobre cónyuge y/o herederos",
                "Documentos de identidad oficial",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b8962e] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1f3d] mb-2" style={{ fontFamily: "Georgia, serif" }}>
              Finalidad del Tratamiento
            </h2>
            <p>Los datos personales recabados son utilizados para:</p>
            <ul className="list-none space-y-2 mt-3">
              {[
                "Confirmar su identidad y capacidad legal",
                "Atender sus necesidades jurídicas",
                "Brindar seguridad jurídica en transacciones (compraventas, donaciones, testamentos, hipotecas, etc.)",
                "Elaborar los instrumentos notariales correspondientes",
                "Ofrecer asesoría jurídica",
                "Cumplir con los requisitos legales establecidos",
                "Verificar la información proporcionada",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b8962e] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1f3d] mb-2" style={{ fontFamily: "Georgia, serif" }}>
              Transferencia de Datos
            </h2>
            <p>
              Sus datos personales sólo son tratados por el personal adscrito a esta Notaría, salvo cuando la ley lo requiera o cuando sea necesario para la prestación del servicio, como en el caso de peritos valuadores o gestores de documentos registrales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0f1f3d] mb-2" style={{ fontFamily: "Georgia, serif" }}>
              Derechos ARCO
            </h2>
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercer estos derechos, puede contactarnos en:
            </p>
            <div className="mt-4 bg-[#faf8f3] rounded-xl p-5 border border-[#f5e9c8] text-sm">
              <div><strong>Correo:</strong> informes@notaria2mty.com</div>
              <div><strong>Teléfono:</strong> (81) 83-42-5220</div>
              <div><strong>Domicilio:</strong> Washington #408 Poniente, Col. Centro, Monterrey, N.L.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
