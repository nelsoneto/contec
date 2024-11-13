// import { useState } from 'react'
// import CountUp from 'react-countup'
// import ScrollTrigger from 'react-scroll-trigger'

// export function Counter() {
//   const [clientCounterOn, setclientCounterOn] = useState(false)
//   const [suporteCounterOn, setsuporteCounterOn] = useState(false)

//   return (
//     <div className="grid h-auto w-full grid-cols-1 justify-around gap-10 bg-slate-800 p-32 font-baijamjuree-bold text-zinc-200 xl:grid-cols-3">
//       <div className="flex w-auto items-center justify-center">
//         <ScrollTrigger
//           onEnter={() => setclientCounterOn(true)}
//           onExit={() => setclientCounterOn(false)}
//         >
//           {clientCounterOn && (
//             <div className="flex">
//               <div className="flex flex-col items-center justify-center gap-4">
//                 <div className="text-4xl">
//                   + <CountUp start={0} end={500} duration={3} />
//                 </div>
//                 <h1 className="text-2xl text-blue-400">Clientes ativos</h1>
//               </div>
//             </div>
//           )}
//         </ScrollTrigger>
//       </div>

//       <div className="flex w-auto items-center justify-center text-center">
//         <ScrollTrigger
//           onEnter={() => setsuporteCounterOn(true)}
//           onExit={() => setsuporteCounterOn(false)}
//         >
//           {suporteCounterOn && (
//             <div className="flex">
//               <div className="flex flex-col items-center justify-center gap-4">
//                 <div className="text-4xl">
//                   <CountUp start={0} end={100} duration={3} />%
//                 </div>
//                 <h1 className="text-2xl text-blue-400">
//                   Satisfeitos com Suporte
//                 </h1>
//               </div>
//             </div>
//           )}
//         </ScrollTrigger>
//       </div>

//       <div className="flex w-auto items-center justify-center text-center">
//         <ScrollTrigger
//           onEnter={() => setsuporteCounterOn(true)}
//           onExit={() => setsuporteCounterOn(false)}
//         >
//           {suporteCounterOn && (
//             <div className="flex">
//               <div className="flex flex-col items-center justify-center gap-4">
//                 <div className="text-4xl">
//                   + <CountUp start={0} end={25} duration={3} />
//                 </div>

//                 <h1 className="text-2xl text-blue-400">Anos de mercado</h1>
//               </div>
//             </div>
//           )}
//         </ScrollTrigger>
//       </div>
//     </div>
//   )
// }
