export function Header() {
  return (
    <section className="relative h-auto w-auto bg-bannerImg bg-cover bg-center px-10 py-32 xl:h-screen xl:px-60 xl:py-64">
      <div className="grid w-full grid-cols-2 items-center justify-center gap-7 rounded-lg px-4 py-4">
        <div className="items-center justify-center gap-10 text-balance rounded-lg">
          <div className="w-48 rounded-md px-2 font-alt text-2xl text-cyan-300 sm:w-auto sm:py-28 sm:text-4xl lg:text-6xl">
            <h1 className="text-sky-500">
              <span className="">Transforme</span> sua gestão com nossas
              soluções que impulsionam resultados e eficiência.
            </h1>
          </div>
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
