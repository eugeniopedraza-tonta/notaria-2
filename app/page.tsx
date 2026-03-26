"use client";

import {
  Scale,
  Building2,
  FileText,
  Users,
  Home as HomeIcon,
  Handshake,
  ClipboardList,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    category: "Bienes Inmuebles",
    icon: HomeIcon,
    items: [
      "Compraventa de Bien Inmueble",
      "Donación de Bien Inmueble",
      "Dación en Pago",
      "Fusión de Inmuebles",
      "Subdivisión de Inmuebles",
      "Constitución de Usufructo Vitalicio o Temporal",
      "Constitución de Hipoteca",
      "Constitución de Régimen de Propiedad en Condominio",
    ],
  },
  {
    category: "Sociedades Mercantiles",
    icon: Building2,
    items: [
      "Constitución de Sociedad Anónima de Capital Variable",
      "Protocolización de Actas de Asamblea",
      "Escisión de Sociedades",
      "Fusión de Sociedades",
      "Transformación de Sociedades",
      "Mandatos",
      "Sociedad de Responsabilidad Limitada",
      "Sociedad Cooperativa de Responsabilidad Limitada",
    ],
  },
  {
    category: "Sociedades Civiles",
    icon: Handshake,
    items: [
      "Constitución de Asociación Civil",
      "Constitución de Sociedad Civil",
    ],
  },
  {
    category: "Sucesiones",
    icon: FileText,
    items: [
      "Testamento",
      "Sucesión Testamentaria",
      "Protocolización de Hijuela",
      "Cesión de Derechos Hereditarios",
      "Repudio de Derechos Hereditarios",
      "Sucesiones Intestadas",
    ],
  },
  {
    category: "Servicios Diversos",
    icon: ClipboardList,
    items: [
      "Copias Certificadas",
      "Mandatos (Poderes Notariales)",
      "Carta Permiso",
      "Capitulaciones Matrimoniales",
      "Fe de Hechos",
      "Ratificación de Firmas en Contrato de Arrendamiento",
    ],
  },
];

const requisitos = [
  {
    tramite: "Compraventa de Bienes Inmuebles",
    vendedor: [
      "Título de Propiedad del o los vendedores",
      "Recibo del Impuesto Predial al corriente en sus pagos",
      "Acta de Matrimonio (si el inmueble fue adquirido durante el matrimonio)",
      "Último recibo pagado del servicio de agua y drenaje; si es casa habitación, recibo de energía eléctrica o telefonía fija",
      "Identificación oficial vigente (Credencial del INE o pasaporte)",
    ],
    comprador: [
      "Identificación oficial vigente (Credencial del INE o pasaporte)",
    ],
  },
  {
    tramite: "Donación de Bien Inmueble",
    vendedor: [
      "Título de Propiedad del o los donantes",
      "Recibo de Impuesto Predial al corriente",
      "Acta de Matrimonio (si el inmueble fue adquirido durante el matrimonio)",
      "Último recibo pagado del servicio de agua y drenaje",
      "Identificación oficial vigente",
    ],
    comprador: [
      "Identificación oficial vigente",
      "Acta de Nacimiento (si el donatario es descendiente del donante)",
    ],
    compradorLabel: "Donatario",
  },
  {
    tramite: "Dación en Pago",
    vendedor: [
      "Título de Propiedad del inmueble a dar en pago",
      "Recibo del Impuesto Predial al corriente",
      "Acta de Matrimonio (si aplica)",
      "Último recibo pagado del servicio de agua y drenaje",
      "Identificación oficial vigente del o los deudores",
    ],
    comprador: ["Identificación oficial vigente"],
    vendedorLabel: "Deudor",
    compradorLabel: "Acreedor",
  },
];

const municipalities = [
  "Abasolo",
  "Apodaca",
  "El Carmen",
  "General Escobedo",
  "General Zuazua",
  "Guadalupe",
  "Hidalgo",
  "Mina",
  "Monterrey",
  "Pesquería",
  "Salinas Victoria",
  "San Pedro Garza García",
];

// ─── Sections ────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f1f3d]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8962e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f3d]/50 via-transparent to-[#0f1f3d]/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b8962e]/50 bg-[#b8962e]/10 text-[#d4af57] text-sm font-medium tracking-widest uppercase mb-8">
          <Award className="w-4 h-4" />
          Desde 1972
        </div>

        <h1 className="text-white font-bold mb-3" style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem, 5vw, 3.5rem)", lineHeight: 1.15 }}>
          Notaría Pública
          <span className="block text-[#d4af57]">Número 2</span>
        </h1>

        <div className="w-16 h-0.5 bg-[#b8962e] mx-auto my-6" />

        <p className="text-white/75 text-lg mb-2 tracking-wide">
          Lic. Raúl Ricardo Pedraza Rodríguez
        </p>
        <p className="text-[#d4af57]/80 text-sm uppercase tracking-widest mb-1">
          Notario Público Titular
        </p>
        <p className="text-white/60 text-sm mb-1">
          Lic. Jorge Iván Pedraza Rodríguez
        </p>
        <p className="text-white/50 text-xs uppercase tracking-widest mb-10">
          Notario Público Suplente
        </p>

        <p className="text-white/70 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Más de cinco décadas brindando seguridad jurídica en Monterrey, Nuevo León. Su confianza es nuestra mayor responsabilidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicios"
            className="px-8 py-3.5 rounded-full bg-[#b8962e] text-white font-semibold hover:bg-[#d4af57] transition-all duration-200 shadow-lg hover:shadow-[#b8962e]/30 hover:shadow-xl"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          >
            Contáctenos
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#notario"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#d4af57] transition-colors flex flex-col items-center gap-1 text-xs"
      >
        <span className="tracking-widest uppercase">Conoce más</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}

function NotarioSection() {
  return (
    <section id="notario" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#b8962e] uppercase tracking-widest text-xs font-semibold">
              ¿Qué es un Notario Público?
            </span>
            <h2 className="mt-3 mb-2 text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "Georgia, serif" }}>
              Fe Pública al Servicio de la Sociedad
            </h2>
            <span className="gold-line block mb-6" />
            <blockquote className="border-l-4 border-[#b8962e] pl-5 mb-6 italic text-[#0f1f3d]/70 leading-relaxed">
              "El Notario es un Licenciado en Derecho especializado, con alta formación jurídica, que interviene en los negocios comerciales y civiles como fedatario y consejero legal de los inversionistas, empresarios y particulares."
            </blockquote>
            <p className="text-[#0f1f3d]/70 leading-relaxed mb-6">
              El Notario Público es un profesional del Derecho, investido de fe pública por el Estado, facultado para autenticar actos y hechos jurídicos, y para dar forma en los términos de ley a los instrumentos en que los mismos se consignen.
            </p>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-[#b8962e] font-semibold hover:text-[#d4af57] transition-colors"
            >
              Ver nuestros servicios <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Scale, label: "Fe Pública", desc: "Autenticación oficial de actos jurídicos" },
              { icon: BookOpen, label: "Asesoría Legal", desc: "Consejero legal en transacciones civiles y mercantiles" },
              { icon: Award, label: "Desde 1972", desc: "Más de 50 años de trayectoria en Monterrey" },
              { icon: Briefcase, label: "Especialización", desc: "Alta formación jurídica y fiscal" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-[#faf8f3] rounded-xl p-5 border border-[#f5e9c8]">
                <div className="w-10 h-10 rounded-lg bg-[#b8962e]/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#b8962e]" />
                </div>
                <div className="font-semibold text-[#0f1f3d] text-sm mb-1">{label}</div>
                <div className="text-[#0f1f3d]/60 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiciosSection() {
  return (
    <section id="servicios" className="py-20 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#b8962e] uppercase tracking-widest text-xs font-semibold">
            Lo que hacemos
          </span>
          <h2 className="mt-3 mb-2 text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "Georgia, serif" }}>
            Nuestros Servicios Notariales
          </h2>
          <span className="gold-line gold-line-center block mb-6" />
          <p className="text-[#0f1f3d]/60 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios notariales para personas físicas y morales en Monterrey y el área metropolitana de Nuevo León.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ category, icon: Icon, items }) => (
            <div
              key={category}
              className="service-card bg-white rounded-2xl p-6 border border-[#f5e9c8] shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0f1f3d] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#d4af57]" />
              </div>
              <h3 className="font-bold text-[#0f1f3d] text-base mb-3" style={{ fontFamily: "Georgia, serif" }}>
                {category}
              </h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#0f1f3d]/65">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b8962e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20 bg-[#0f1f3d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#d4af57]/70 uppercase tracking-widest text-xs font-semibold">
            Nuestro Equipo
          </span>
          <h2 className="mt-3 mb-2 text-3xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
            Curriculum Vitae
          </h2>
          <span className="gold-line gold-line-center block mb-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Titular */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#b8962e] flex items-center justify-center text-white font-bold text-xl shrink-0" style={{ fontFamily: "Georgia, serif" }}>
                RP
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                  Lic. Raúl Ricardo Pedraza Rodríguez
                </h3>
                <span className="text-[#d4af57] text-sm uppercase tracking-wider">Notario Público Titular</span>
              </div>
            </div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex gap-3">
                <BookOpen className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Licenciatura en Derecho — Universidad de Monterrey (1976–1980)</span>
              </li>
              <li className="flex gap-3">
                <Award className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Estudios de Derecho Fiscal — Facultad Libre de Derecho de Monterrey</span>
              </li>
              <li className="flex gap-3">
                <Briefcase className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>19 años en la Notaría No. 2, inicialmente como pasante y abogado auxiliar</span>
              </li>
              <li className="flex gap-3">
                <Scale className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Autorización como Notario Suplente: 1995</span>
              </li>
              <li className="flex gap-3">
                <Scale className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Autorización como Notario Titular: 2003</span>
              </li>
              <li className="flex gap-3">
                <Users className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Miembro de la Asociación Nacional del Notario Mexicano y del Colegio de Notarios Públicos de Nuevo León</span>
              </li>
            </ul>
          </div>

          {/* Suplente */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#1a3258] border border-[#b8962e]/40 flex items-center justify-center text-[#d4af57] font-bold text-xl shrink-0" style={{ fontFamily: "Georgia, serif" }}>
                JP
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                  Lic. Jorge Iván Pedraza Rodríguez
                </h3>
                <span className="text-[#d4af57] text-sm uppercase tracking-wider">Notario Público Suplente</span>
              </div>
            </div>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex gap-3">
                <BookOpen className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Licenciatura en Derecho — Universidad de Monterrey (1988)</span>
              </li>
              <li className="flex gap-3">
                <Award className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Diplomado en Derecho Constitucional — Universidad Panamericana</span>
              </li>
              <li className="flex gap-3">
                <Briefcase className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Abogado auxiliar y litigante civil, mercantil y familiar (1991–2001)</span>
              </li>
              <li className="flex gap-3">
                <Briefcase className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Director Regional en el Servicio de Administración Tributaria (2001–2006)</span>
              </li>
              <li className="flex gap-3">
                <Briefcase className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Director Fiduciario Ejecutivo en el Servicio de Administración y Enajenación de Bienes (2007)</span>
              </li>
              <li className="flex gap-3">
                <Scale className="w-4 h-4 text-[#b8962e] shrink-0 mt-0.5" />
                <span>Abogado auxiliar en Notaría a partir de 2008</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function RequisitosSection() {
  return (
    <section id="requisitos" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#b8962e] uppercase tracking-widest text-xs font-semibold">
            Documentación
          </span>
          <h2 className="mt-3 mb-2 text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "Georgia, serif" }}>
            Requisitos de Trámites
          </h2>
          <span className="gold-line gold-line-center block mb-6" />
          <p className="text-[#0f1f3d]/60 max-w-xl mx-auto text-sm">
            A continuación encontrará los documentos necesarios para los trámites más comunes. Para otros servicios, contáctenos directamente.
          </p>
        </div>

        <div className="space-y-4">
          {requisitos.map(({ tramite, vendedor, comprador, vendedorLabel, compradorLabel }) => (
            <details
              key={tramite}
              className="group border border-[#f5e9c8] rounded-xl overflow-hidden bg-[#faf8f3]"
            >
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer hover:bg-[#f5e9c8]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f1f3d] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-[#d4af57]" />
                  </div>
                  <span className="font-semibold text-[#0f1f3d]">{tramite}</span>
                </div>
                <ChevronDown className="accordion-icon w-5 h-5 text-[#b8962e] transition-transform duration-200 shrink-0" />
              </summary>

              <div className="px-6 pb-6 pt-2 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#b8962e] mb-3">
                    {vendedorLabel ?? "Vendedor"}
                  </h4>
                  <ul className="space-y-2">
                    {vendedor.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-[#0f1f3d]/70">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b8962e] shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#b8962e] mb-3">
                    {compradorLabel ?? "Comprador"}
                  </h4>
                  <ul className="space-y-2">
                    {comprador.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-[#0f1f3d]/70">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b8962e] shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#0f1f3d]/50">
          ¿Necesita información sobre otros trámites?{" "}
          <a href="#contacto" className="text-[#b8962e] hover:underline font-medium">
            Contáctenos
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function MunicipiosSection() {
  return (
    <section id="municipios" className="py-20 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#b8962e] uppercase tracking-widest text-xs font-semibold">
            Área de Servicio
          </span>
          <h2 className="mt-3 mb-2 text-3xl font-bold text-[#0f1f3d]" style={{ fontFamily: "Georgia, serif" }}>
            Municipios Atendidos
          </h2>
          <span className="gold-line gold-line-center block mb-6" />
          <p className="text-[#0f1f3d]/60 max-w-xl mx-auto text-sm">
            Atendemos trámites en los siguientes municipios del área metropolitana de Monterrey y Nuevo León.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {municipalities.map((mun) => (
            <div
              key={mun}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-4 border border-[#f5e9c8] shadow-sm hover:border-[#b8962e]/40 hover:shadow-md transition-all"
            >
              <MapPin className="w-4 h-4 text-[#b8962e] shrink-0" />
              <span className="text-[#0f1f3d] font-medium text-sm">{mun}</span>
            </div>
          ))}
        </div>

        {/* Embedded map */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-[#f5e9c8] shadow-md">
          <iframe
            title="Ubicación Notaría Pública No. 2 Monterrey"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.3!2d-100.3161!3d25.6714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWashington+408+Pte+Centro+Monterrey!5e0!3m2!1ses!2smx!4v1234567890"
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ContactoSection() {
  return (
    <section id="contacto" className="py-20 bg-[#0f1f3d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#d4af57]/70 uppercase tracking-widest text-xs font-semibold">
            Estamos aquí para ayudarle
          </span>
          <h2 className="mt-3 mb-2 text-3xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
            Contáctenos
          </h2>
          <span className="gold-line gold-line-center block mb-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#b8962e]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#d4af57]" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Dirección</div>
                <div className="text-white/65 text-sm leading-relaxed">
                  Washington #408 Poniente, Col. Centro<br />
                  Monterrey, Nuevo León, México<br />
                  C.P. 64000
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#b8962e]/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#d4af57]" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Teléfonos</div>
                <div className="space-y-1 text-sm">
                  <a href="tel:+528183425220" className="block text-white/65 hover:text-[#d4af57] transition-colors">
                    +52 (81) 83-42-5220
                  </a>
                  <a href="tel:+528183438025" className="block text-white/65 hover:text-[#d4af57] transition-colors">
                    +52 (81) 83-43-8025
                  </a>
                  <a href="tel:+528183406667" className="block text-white/65 hover:text-[#d4af57] transition-colors">
                    +52 (81) 83-40-6667
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">WhatsApp</div>
                <a
                  href="https://wa.me/528119391016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 hover:text-[#25D366] transition-colors text-sm"
                >
                  +52 811 939 1016
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#b8962e]/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#d4af57]" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">Correo Electrónico</div>
                <a
                  href="mailto:informes@notaria2mty.com"
                  className="text-white/65 hover:text-[#d4af57] transition-colors text-sm"
                >
                  informes@notaria2mty.com
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/528119391016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-2 px-6 py-3.5 rounded-full font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.176.588 4.22 1.607 5.978L4 29l8.239-1.582A11.94 11.94 0 0016.003 27c6.629 0 12.003-5.374 12.003-12.003C28.006 8.373 22.632 3 16.003 3zm5.574 16.333c-.305-.152-1.804-.891-2.084-.992-.279-.1-.483-.152-.686.153-.203.305-.787.992-.964 1.196-.178.203-.356.228-.66.076-.305-.152-1.285-.474-2.447-1.509-.904-.805-1.514-1.8-1.692-2.104-.178-.305-.019-.47.134-.621.137-.136.305-.356.457-.534.152-.178.203-.305.305-.508.101-.203.05-.381-.025-.534-.076-.152-.686-1.65-.94-2.26-.247-.594-.498-.513-.686-.522l-.584-.01c-.203 0-.534.076-.813.381-.279.305-1.066 1.041-1.066 2.539s1.09 2.946 1.243 3.149c.152.203 2.147 3.28 5.203 4.598.728.314 1.295.502 1.738.643.73.233 1.394.2 1.919.121.585-.087 1.804-.737 2.058-1.449.254-.712.254-1.322.178-1.449-.076-.127-.279-.203-.584-.356z" />
              </svg>
              Escríbanos por WhatsApp
            </a>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
          >
            <h3 className="text-white font-semibold text-lg" style={{ fontFamily: "Georgia, serif" }}>
              Envíenos un mensaje
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Nombre</label>
                <input
                  type="text"
                  required
                  placeholder="Su nombre"
                  className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#b8962e] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Teléfono</label>
                <input
                  type="tel"
                  placeholder="Su teléfono"
                  className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#b8962e] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Correo Electrónico</label>
              <input
                type="email"
                required
                placeholder="su@correo.com"
                className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#b8962e] transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Servicio de Interés</label>
              <select className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-[#b8962e] transition-colors">
                <option value="" className="bg-[#0f1f3d]">Seleccione un servicio</option>
                <option value="inmuebles" className="bg-[#0f1f3d]">Compraventa de Inmuebles</option>
                <option value="testamento" className="bg-[#0f1f3d]">Testamento</option>
                <option value="sociedad" className="bg-[#0f1f3d]">Constitución de Sociedad</option>
                <option value="poder" className="bg-[#0f1f3d]">Poder Notarial</option>
                <option value="otro" className="bg-[#0f1f3d]">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Mensaje</label>
              <textarea
                rows={4}
                required
                placeholder="Describa brevemente su consulta..."
                className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#b8962e] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#b8962e] text-white font-semibold hover:bg-[#d4af57] transition-colors"
            >
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080f1e] py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© {new Date().getFullYear()} Notaría Pública No. 2 — Monterrey, N.L. México.</span>
          <div className="flex items-center gap-6">
            <a href="/privacidad" className="hover:text-[#d4af57] transition-colors">
              Aviso de Privacidad
            </a>
            <span>informes@notaria2mty.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <NotarioSection />
      <ServiciosSection />
      <CurriculumSection />
      <RequisitosSection />
      <MunicipiosSection />
      <ContactoSection />
      <Footer />
    </>
  );
}
