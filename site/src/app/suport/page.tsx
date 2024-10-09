import PagePerguntas from './PagePerguntas'

export default function newTest() {
  return (
    <div className="mx-auto max-h-max w-full text-slate-300">
      <div className="mt-16 flex h-full w-full justify-center gap-4 bg-gradient-to-r from-blue-900 via-sky-700 to-blue-900 py-4">
        <h1 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-300 bg-clip-text px-1 font-alt text-4xl text-transparent">
          Suporte & Donwloads
        </h1>
        <h2 className="hidden items-center justify-center text-center font-alt text-4xl xl:flex"></h2>
      </div>
      <div className="flex flex-col items-center justify-center text-2xl">
        <h1>Downloads Importantes</h1>
        <div className="grid grid-cols-4 p-10">
          <div>Team Viewers</div>
          <div>Team Viewers</div>
          <div>Team Viewers</div>
          <div>Team Viewers</div>
        </div>
      </div>
      <PagePerguntas />
    </div>
  )
}
