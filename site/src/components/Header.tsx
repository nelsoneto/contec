export function Header() {
  return (
    <section className="relative mt-9 h-auto w-auto bg-none bg-cover bg-center px-10 py-32 md:bg-bannerImg xl:h-screen xl:px-60 xl:py-64">
      <div className="w-full items-center justify-center gap-7 rounded-lg p-4 md:grid md:grid-cols-2">
        <div className="items-center justify-center gap-10 text-balance rounded-lg">
          <div className="w-auto rounded-md text-center font-alt text-xl text-cyan-300 sm:text-2xl md:text-start md:text-5xl xl:py-28 xl:text-6xl">
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
