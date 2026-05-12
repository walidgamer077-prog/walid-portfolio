const skills = [
  "Análisis financiero",
  "Excel",
  "Marketing digital",
  "Liderazgo",
  "Comunicación",
  "Gestión de proyectos",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-bold">Walid Guerdh</span>
          <a
            href="mailto:walidguerdh04@gmail.com"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Contactar
          </a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-400">
          Administración y Dirección de Empresas
        </p>

        <h1 className="max-w-4xl text-6xl font-bold tracking-tight md:text-8xl">
          Walid Guerdh
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-300">
          Portfolio profesional y CV digital orientado a gestión empresarial,
          análisis financiero, marketing digital y marca personal.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:walidguerdh04@gmail.com"
            className="rounded-full bg-white px-8 py-4 text-center font-semibold text-black"
          >
            Contactar
          </a>

          <a
            href="#sobre-mi"
            className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold"
          >
            Ver portfolio
          </a>
        </div>
      </section>

      <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-6 text-4xl font-bold">Sobre mí</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
          Soy estudiante de Administración y Dirección de Empresas con interés en
          estrategia empresarial, análisis financiero, marketing digital y
          crecimiento de negocios. Busco desarrollar una presencia profesional
          sólida y aportar valor en proyectos orientados a resultados.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-4xl font-bold">Habilidades</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-4xl font-bold">Experiencia y proyectos</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">Proyecto de análisis financiero</h3>
            <p className="mt-3 text-zinc-300">
              Evaluación ficticia de una startup, análisis de costes, ingresos,
              rentabilidad y propuesta de mejora estratégica.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">Campaña de marketing digital</h3>
            <p className="mt-3 text-zinc-300">
              Diseño de una campaña académica para mejorar visibilidad,
              posicionamiento y captación de clientes potenciales.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-10 text-4xl font-bold">Contacto</h2>

  <form
  action="https://formsubmit.co/walidgamer077@gmail.com"

  method="POST"
  className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8"
 >
          <input
            className="mb-4 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
            placeholder="Nombre"
          />

          <input
            className="mb-4 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
            placeholder="Email"
          />

          <textarea
            className="mb-4 w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none"
            placeholder="Mensaje"
            rows={5}
          />

          <button className="w-full rounded-full bg-white px-8 py-4 font-semibold text-black">
            Enviar mensaje
          </button>
        </form>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-zinc-400">
        © 2026 Walid Guerdh · Instagram · Telegram
      </footer>
    </main>
  );
}