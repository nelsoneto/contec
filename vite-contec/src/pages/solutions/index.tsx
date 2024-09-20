import womanLaptop from '../../assets/portrait-woman-glasses-holding-laptop-pointing-screen-showing-her-work-computer-standing.jpg'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'

export function Solutions() {
  return (
    <div className="max-h-screen w-full py-20 font-baijamjuree-regular text-zinc-200">
      <Navbar />
      <div className="flex h-screen w-full flex-col space-y-8 px-72 py-20">
        <h1 className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 bg-clip-text px-1 font-baijamjuree-bold text-5xl text-transparent">
          MIDAS
        </h1>
        <h2 className="font-roboto-bold text-5xl">
          A nossa solução mais{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 bg-clip-text px-1 text-transparent">
            completa para sua empresa.
          </span>
        </h2>
        <div className="flex w-9/12 flex-col gap-2 text-pretty">
          <p className="text-lg">
            O MIDAS tem a finalidade de auxiliar no gerenciamento da sua
            empresa. Você terá total controle gerencial, facilitando a venda e
            gerando mais lucros.
          </p>
        </div>
        <div className="my-4 border-t border-slate-800"></div>

        <div className="grid w-full justify-items-center gap-4 xl:grid-cols-2">
          <div className="flex w-full justify-center">
            <img
              src={womanLaptop}
              alt=""
              className="h-96 w-auto rounded-md border-8 border-slate-500 object-cover"
            />
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-auto justify-start px-2">
              <h2 className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ratione, quibusdam veritatis voluptate eligendi culpa
                omnis voluptatum nulla aperiam eum quod sit, veniam officiis,
                dolore totam aut ipsa animi! Magni.
              </h2>
            </div>

            <ul className="list-disc px-8">
              <li className="font-baijamjuree-bold text-sky-400">
                Controle financeiro
              </li>{' '}
              <p className="text-justify">
                Renegociações, fluxo de caixa, gestão de contas a pagar e a
                receber, grupos de receitas e despesas, cenro de custo, controle
                de comissões e vendas.
              </p>
              <li className="font-baijamjuree-bold">Estoque</li>{' '}
              <p className="text-justify">
                Cadastro, controle, histórico, movimentação, condicional,
                importação do XML na entrada, com cadastramento automático do
                produto, controle de unidades.
              </p>
              <li className="font-baijamjuree-bold">Cadastros</li>
              <li className="font-baijamjuree-bold">Fiscal</li>
              <li className="font-baijamjuree-bold">Produção</li>
              <li className="font-baijamjuree-bold">Ordem de serviços</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
