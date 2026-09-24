/* ═══════════════════════════════════════════════════════════════════
   EL MOLDE DE LA LANDING · va en app/page.tsx

   Tiene dos mitades:
     1. LOS DATOS  → los rellenas con la fuente oficial del proyecto
     2. LA PÁGINA  → no la rediseñes: ya está resuelta

   Regla: si un dato no está en la fuente, NO lo inventes. Avisa y pide.
   ═══════════════════════════════════════════════════════════════════ */

/* ══════════════════ 1. LOS DATOS · esto es lo que cambias ══════════════════ */

const NEGOCIO = {
  nombre: "El Tomate Mecánico",
  // PROMESA: qué gana quien entra, en una frase. No el nombre solo.
  promesa: "Escuela de fútbol formativo en Santiago para cadetes de 12 a 17 años",
  // Una línea que aterriza la promesa: para quién es y qué recibe.
  bajada:
    "Postula a las pruebas de admisión de El Tomate Mecánico. Formación deportiva integral con GPS, videoanálisis e informes de inteligencia artificial.",
  // EL LLAMADO A LA ACCIÓN. Es el mismo en toda la página, no cambia por sección.
  cta: "Postular a la prueba",
};

// Tres datos duros que dan confianza. Salen de la fuente, no del aire.
const DATOS_HERO: { valor: string; texto: string }[] = [
  { valor: "12 a 17", texto: "años cumplidos al año de ingreso" },
  { valor: "85%", texto: "asistencia mínima mensual exigida" },
  { valor: "10 días", texto: "hábiles de respuesta por email tras la prueba" },
];

// PRUEBA · por qué creerte. Tres, no más.
const PRUEBA: { titulo: string; texto: string }[] = [
  {
    titulo: "Tecnología e Inteligencia Artificial",
    texto:
      "Jornadas de prueba y entrenamientos monitoreados con GPS y video. TacticalAI y BiophysicalAI entregan reportes objetivos en la app iOS del club.",
  },
  {
    titulo: "Compromiso académico escolar",
    texto:
      "Formamos deportistas íntegros: exigimos nota mínima 4,0 en el informe escolar de notas para postular y mantenerse en competencia.",
  },
  {
    titulo: "Cuerpo técnico y rigor formativo",
    texto:
      "Planificación seria con 85% de asistencia mínima requerida, seguimiento médico básico, torneo interno y asignación por edad y nivel.",
  },
];

// OFERTA · qué se ofrece y cuánto cuesta. Sin letra chica.
const OFERTA_TITULO = "Categorías, Horarios y Aranceles";
const OFERTA: { nombre: string; detalle: string; precio: string; nota: string }[] = [
  {
    nombre: "Cadete Menor (Sub-13 y Sub-14)",
    detalle: "12 a 14 años · Martes y jueves de 18:00 a 19:30 · Sábado de 10:00 a 12:00",
    precio: "$85.000",
    nota: "mensualidad en 10 cuotas (marzo a diciembre)",
  },
  {
    nombre: "Cadete Mayor (Sub-15 y Sub-16)",
    detalle: "15 a 16 años · Lunes, miércoles y viernes de 18:00 a 20:00 · Sábado de 09:00 a 11:30",
    precio: "$95.000",
    nota: "mensualidad en 10 cuotas (marzo a diciembre)",
  },
  {
    nombre: "Proyección (Sub-17)",
    detalle: "17 años · Lunes a viernes de 17:30 a 20:00 · Sábado de 09:00 a 12:00",
    precio: "$110.000",
    nota: "mensualidad en 10 cuotas (marzo a diciembre)",
  },
];

// Descuentos, becas o extras. Cortos: son etiquetas, no párrafos.
const EXTRAS: string[] = [
  "Matrícula anual: $120.000 (pago único al confirmar cupo)",
  "Beca Garra Tricolor: hasta 50% en mensualidad por mérito deportivo",
  "Descuento hermanos: 15% en la mensualidad del segundo cadete",
  "Pago anual al contado: 10% de descuento sobre el total del año",
  "WebPay hasta 3 cuotas sin interés en la app iOS",
  "Incluye entrenamientos, app iOS, seguimiento médico y torneo",
];

// CÓMO SE HACE · los pasos, para bajarle la ansiedad a quien decide.
const PASOS: { titulo: string; texto: string }[] = [
  {
    titulo: "Postulación online",
    texto: "Completa el formulario en esta página con tus datos de apoderado y del cadete postulante.",
  },
  {
    titulo: "Prueba táctico-física",
    texto:
      "Jornada en cancha un sábado por la mañana con GPS y video para evaluación objetiva con IA.",
  },
  {
    titulo: "Entrevista familiar",
    texto:
      "Reunión de pilares formativos, disponibilidad y revisión de compromiso escolar (nota mínima 4,0).",
  },
  {
    titulo: "Resultado por email",
    texto: "Envío del informe y confirmación de cupo en un plazo de 10 días hábiles desde la prueba.",
  },
];

// EL FORMULARIO · los seis campos que pide el encargo. Hoy no envía a ningún lado.
type Campo = {
  name: string;
  label: string;
  tipo: "text" | "email" | "tel" | "number" | "textarea";
  ancho?: "completo";
};
const CAMPOS: Campo[] = [
  { name: "apoderado", label: "Nombre del apoderado", tipo: "text" },
  { name: "correo", label: "Correo", tipo: "email" },
  { name: "celular", label: "Celular", tipo: "tel" },
  { name: "cadete", label: "Nombre del cadete", tipo: "text" },
  { name: "edad", label: "Edad", tipo: "number" },
  { name: "pregunta", label: "Pregunta", tipo: "textarea", ancho: "completo" },
];

const CONTACTO = {
  direccion: "Complejo Deportivo La Reconquista, Av. Departamental 1810, La Florida, Santiago",
  correo: "admisiones@eltomatemecanico.cl",
  telefono: "+56 2 2345 6789 (lun a vie de 10:00 a 18:00)",
};

/* ══════════════════ 2. LA PÁGINA · de aquí abajo no se toca ══════════════════ */

export const metadata = {
  title: `${NEGOCIO.nombre} — Escuela de Fútbol Formativo`,
  description: NEGOCIO.promesa,
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-20 md:pb-0">
      {/* ── Barra de arriba ── */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <span className="text-lg font-bold tracking-tight">{NEGOCIO.nombre}</span>
          <a href="#postular" className="btn hidden px-5 py-2.5 text-sm sm:inline-flex">
            {NEGOCIO.cta}
          </a>
        </div>
      </header>

      {/* ── 1 · PORTADA: la promesa y el llamado a la acción ── */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <h1 className="max-w-3xl text-balance text-[clamp(2.1rem,7vw,3.6rem)] font-bold leading-[1.08] tracking-tight">
            {NEGOCIO.promesa}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{NEGOCIO.bajada}</p>
          <a href="#postular" className="btn btn-inverso mt-8">
            {NEGOCIO.cta}
          </a>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/25 sm:grid-cols-3">
            {DATOS_HERO.map((d) => (
              <div key={d.texto} className="bg-primary px-5 py-5">
                <dt className="text-3xl font-bold tabular-nums">{d.valor}</dt>
                <dd className="mt-1 text-sm text-white/80">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 2 · PRUEBA: por qué creerte ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            Por qué elegirnos
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {PRUEBA.map((p, i) => (
              <article key={p.titulo} className="rounded-2xl border border-line p-6">
                <span className="text-sm font-bold tabular-nums text-primary-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-bold leading-snug">{p.titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 · OFERTA: qué incluye y cuánto cuesta ── */}
      <section className="bg-soft">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            {OFERTA_TITULO}
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {OFERTA.map((o) => (
              <article
                key={o.nombre}
                className="flex flex-col rounded-2xl border border-line bg-paper p-6"
              >
                <h3 className="text-xl font-bold leading-snug">{o.nombre}</h3>
                <p className="mt-1 text-sm text-muted">{o.detalle}</p>
                <p className="mt-auto pt-5 text-3xl font-bold tabular-nums text-primary-ink">
                  {o.precio}
                </p>
                <p className="mt-1 text-sm text-muted">{o.nota}</p>
              </article>
            ))}
          </div>
          {EXTRAS.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {EXTRAS.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium"
                >
                  {e}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── 4 · CÓMO SE HACE: los pasos ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            Cómo es el proceso
          </h2>
          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PASOS.map((p, i) => (
              <li key={p.titulo} className="border-t-2 border-primary pt-4">
                <span className="text-sm font-bold tabular-nums text-primary-ink">
                  Paso {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-bold leading-snug">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5 · EL LLAMADO FINAL: el formulario ── */}
      <section id="postular" className="bg-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight">
            {NEGOCIO.cta}
          </h2>
          <p className="mt-2 text-muted">Déjanos tus datos y te respondemos.</p>
          <form action="#" className="mt-8 grid gap-4 sm:grid-cols-2">
            {CAMPOS.map((c) => (
              <div key={c.name} className={c.ancho === "completo" ? "sm:col-span-2" : undefined}>
                <label htmlFor={c.name} className="mb-1.5 block text-sm font-semibold">
                  {c.label}
                </label>
                {c.tipo === "textarea" ? (
                  <textarea
                    id={c.name}
                    name={c.name}
                    rows={4}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
                  />
                ) : (
                  <input
                    id={c.name}
                    name={c.name}
                    type={c.tipo}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 outline-none focus:border-primary"
                  />
                )}
              </div>
            ))}
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-bloque">
                {NEGOCIO.cta}
              </button>
              <p className="mt-3 text-center text-sm text-muted">
                O escríbenos a {CONTACTO.correo}
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-5xl gap-2 px-5 py-10 text-sm text-muted sm:grid-cols-3">
          <p className="font-bold text-ink">{NEGOCIO.nombre}</p>
          <p>{CONTACTO.direccion}</p>
          <p>
            {CONTACTO.correo} · {CONTACTO.telefono}
          </p>
        </div>
      </footer>

      {/* ── El mismo botón, fijo abajo, solo en celular ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href="#postular" className="btn btn-bloque">
          {NEGOCIO.cta}
        </a>
      </div>
    </div>
  );
}
