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
    <section className='relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center'>
      <img alt="city" src={city} className='h-96 w-96' />
    </section>
  )
}