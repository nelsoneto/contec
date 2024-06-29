import city from '../assets/city.svg'
export function Hero() {
  return (
    // <div className='w-full'>
    //   <div>
    //     <img src={city} alt='city' className='mt-16 w-full' />
    //   </div>
    //   <div className="absolute bottom-48 left-12 rounded-md bg-slate-800 px-6 py-4 text-white opacity-70">
    //     <div className='flex-col space-y-2'>
    //       <h2 className="font-baijamjuree-bold text-6xl break-normal">Transformando a gestão da sua empresa com soluções inovadoras</h2>
    //       <p className="text-2xl">Experimente a versão gratuita por 30 dias.</p>
    //     </div>
    //   </div>
    // </div>
    <section className="relative flex min-h-screen w-full flex-col justify-center md:block md:h-screen">
      <div className="grid grid-cols-2 bg-slate-500 px-24 py-20">
        <div className="flex flex-col items-center justify-center">
          <h1>aosdfkasodfkaodfdko</h1>
          <h1>aosdfkasodfkaodfdko</h1>
        </div>
        <div className="flex justify-center bg-fuchsia-400">
          <img alt="city" src={city} className="h-96 w-96" />
        </div>
      </div>
      <h2></h2>
    </section>
  )
}
