import Link from 'next/link'

export function Header() {
  return (
    // eslint-disable-next-line prettier/prettier
    <header className="mt-9 h-auto w-auto bg-cover bg-stars bg-center px-4 py-32 md:bg-bannerImg xl:h-screen xl:px-60 xl:py-64">
      <div className="w-full items-center justify-center gap-7 rounded-lg md:grid md:grid-cols-2">
        <div className="items-center justify-center gap-10 text-balance rounded-lg">
          <div className="w-auto rounded-md text-center font-alt text-4xl md:text-start md:text-5xl xl:py-28 xl:text-6xl">
            <h1 className="text-sky-500 xl:text-sky-500">
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
      <div className="flex w-full justify-end text-xs text-zinc-500">
        <Link
          rel="noreferrer"
          href="https://www.freepik.com/free-photo/close-up-portrait-smiling-girl-entrepreneur-office-woman-glasses-looking-happy-confident-s_22531011.htm#from_view=detail_alsolike"
        >
          Image by benzoix on Freepik
        </Link>
      </div>
    </header>
  )
}
