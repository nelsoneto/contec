import heroImg from '../assets/responsive-contec.svg'

export function Hero() {
  return (
    <section className="bg-slate-100 px-6 py-20 lg:px-72 lg:py-16">
      <div className="grid w-full items-center justify-center gap-7 rounded-lg px-4 py-4 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-10 rounded-lg px-2 py-2 text-center lg:text-left">
          <span className="rounded-md font-baijamjuree-bold text-2xl md:text-3xl lg:text-4xl">
            <span className="bg-blue-300 px-0 py-0">Transforme</span> sua gestão
            com nossas soluções que impulsionam resultados e eficiência.
          </span>
          <a
            href=""
            className="rounded-xl bg-blue-600 px-4 py-3 text-lg text-blue-50 hover:ring-4 hover:ring-blue-200 hover:ring-offset-1"
          >
            Agenda uma demonstração gratis por 30 dias.
          </a>
        </div>
        <div className="rounded-lg bg-blue-300 px-3 py-4 shadow-md ring-8 ring-blue-200">
          <img
            alt="city"
            src={heroImg}
            className="h-auto w-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
