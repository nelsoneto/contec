import Image from 'next/image'
import womanLaptop from '../../../../public/images/business-man-1962249_1280.jpg'

export default function Hero() {
  return (
    <div className="mx-auto max-h-max w-full">
      <div className="flex w-auto flex-col space-y-8 py-24 xl:px-72">
        <div className="gap-2 space-y-4 text-pretty xl:flex-col">
          <h1 className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 bg-clip-text px-1 font-alt text-5xl text-transparent">
            MIDAS
          </h1>
          <h2 className="font-alt text-4xl">
            A nossa solução mais{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 bg-clip-text px-1 text-transparent">
              completa para sua empresa.
            </span>
          </h2>
          <p className="text-lg">
            O MIDAS tem a finalidade de auxiliar no gerenciamento da sua
            empresa. Você terá total controle gerencial, facilitando a venda e
            gerando mais lucros.
          </p>
        </div>

        <div className="my-4 border-t border-slate-800"></div>

        <div className="grid w-full justify-items-center xl:grid-cols-2">
          <div className="flex w-full justify-start">
            <Image
              src={womanLaptop}
              alt=""
              className="h-auto w-auto rounded-md border-8 border-slate-500 object-cover"
            />
          </div>
          <div className="flex w-full justify-around px-2">
            <div className="flex w-full flex-col gap-4">
              <h2 className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ratione, quibusdam veritatis voluptate eligendi culpa
                omnis voluptatum nulla aperiam eum quod sit, veniam officiis,
                dolore totam aut ipsa animi! Magni.
              </h2>

              <div className="text-justify">
                <ul className="list-disc px-8">
                  <li className="font-alt text-sky-400">Controle financeiro</li>{' '}
                  <p>
                    Renegociações, fluxo de caixa, gestão de contas a pagar e a
                    receber, grupos de receitas e despesas, cenro de custo,
                    controle de comissões e vendas.
                  </p>
                  <li className="font-alt text-sky-400">Estoque</li>{' '}
                  <p>
                    Cadastro, controle, histórico, movimentação, condicional,
                    importação do XML na entrada, com cadastramento automático
                    do produto, controle de unidades.
                  </p>
                  <li className="font-alt text-sky-400">Cadastros</li>
                  <p>
                    Clientes, fornecedores, funcionários, convênios, contas e
                    bancos.
                  </p>
                  <li className="font-alt text-sky-400">Fiscal</li>
                  <p>
                    Emissão Nota Fiscal Eletrônica, EFD IMCS/IPI (SPED Fiscal) e
                    EFD Contribuições, CT-e, CC-e, NFC-e, MDF-e.
                  </p>
                  <li className="font-alt text-sky-400">Produção</li>
                  <p>
                    Cadastro de receitas para produtos idustrializado com baixa
                    automática de insumos na produção.
                  </p>
                  <li className="font-alt text-sky-400">Ordem de serviços</li>
                  <p>Criação de controle sobre serviços prestados.</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
