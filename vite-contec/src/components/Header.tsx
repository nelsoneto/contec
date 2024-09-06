export function Header() {
  return (
    <section className="bg-slate-900 bg-custom-image bg-cover bg-center px-10 py-32 xl:px-72 xl:py-64">
      <div className="grid w-full grid-cols-2 items-center justify-center gap-7 rounded-lg px-4 py-4">
        <div className="flex flex-col items-center justify-center gap-10 rounded-lg p-1 text-left">
          <span className="rounded-md px-3 font-baijamjuree-bold text-2xl text-zinc-800 sm:py-36 sm:text-5xl">
            <span className="bg-blue-300 px-0 py-0 text-zinc-50">
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
