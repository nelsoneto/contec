export function Header() {
  return (
    <section className="relative bg-custom-image bg-cover bg-center px-10 py-32 xl:h-screen xl:px-60 xl:py-64">
      <div className="grid w-full grid-cols-2 items-center justify-center gap-7 rounded-lg px-4 py-4">
        <div className="items-center justify-center gap-10 rounded-lg text-left">
          <span className="rounded-md px-4 font-baijamjuree-bold text-xl sm:py-36 sm:text-5xl lg:text-6xl">
            <span className="bg-sky-400 bg-gradient-to-r from-indigo-500 px-2">
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
