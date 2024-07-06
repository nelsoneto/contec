export function Header() {
  return (
    <section className="h-svh bg-slate-900 bg-custom-image bg-cover px-6 py-20 lg:px-72 lg:py-64">
      <div className="grid w-full items-center justify-center gap-7 rounded-lg px-4 py-4 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-10 rounded-lg px-2 py-2 text-center lg:text-left">
          <span className="rounded-md px-3 font-baijamjuree-bold text-2xl text-zinc-800 md:text-3xl lg:text-5xl">
            <span className="bg-blue-300 px-0 py-0 text-neutral-800">
              Transforme
            </span>{' '}
            sua gestão com nossas soluções que impulsionam resultados e
            eficiência.
          </span>
        </div>
        {/* <div className="rounded-lg bg-blue-500 px-3 py-4 shadow-md ring-8 ring-blue-200">
          <img
            alt="city"
            src={heroImg}
            className="h-auto w-auto rounded-xl object-cover"
          />
        </div> */}
      </div>
    </section>
  )
}
