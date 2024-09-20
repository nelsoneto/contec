import heroImg from '../assets/responsive-contec.svg'

export function Hero() {
  return (
    <section className="bg-slate-800 px-6 py-20 xl:px-60 xl:py-16">
      <div className="grid w-full items-center justify-between gap-12 rounded-lg px-4 py-4 lg:grid-cols-2">
        <div className="flex flex-col gap-12 rounded-lg px-2 py-2 text-left lg:text-pretty">
          <h1 className="rounded-md font-baijamjuree-bold text-2xl text-zinc-300 md:text-3xl lg:text-3xl">
            Com nossos produtos sua empresa vai ter mais{' '}
            <span className="text-blue-400">resultados</span> e eficiência.
          </h1>

          <p>
            Aumente a produtividade ao automatizar rotinas dispendiosas da
            administração, mostrando informações relevantes através de
            relatórios gerenciais. Conta ainda com emissão de boletos bancários,
            emissão de NF-e, NFC-e, SPED Fiscal e PIS/COFINS e muito mais.
          </p>
          <a
            href="/solutions"
            className="mb-6 rounded-lg bg-blue-600 px-4 py-3 text-center text-xl text-zinc-100 hover:bg-blue-800"
          >
            Saiba mais
          </a>
        </div>
        <div className="h-auto w-auto rounded-lg bg-gradient-to-r from-blue-400 via-blue-600 to-sky-600 p-4 shadow-md ring-8 ring-sky-100">
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
