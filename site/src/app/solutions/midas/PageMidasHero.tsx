export default function PageMidasHero() {
  return (
    <>
      <div className="flex w-auto flex-col space-y-8 bg-slate-800 py-4 xl:px-72">
        <div className="flex flex-col items-center justify-center px-10 py-4">
          <h2 className="mt-6 font-alt text-4xl">
            Conheça as características técnicas do{' '}
            <span className="text-blue-400">MIDAS</span>
          </h2>
        </div>
        <div className="grid h-full w-full xl:grid-cols-2">
          <div className="w-full py-2 text-justify">
            <ul className="list-disc px-8">
              <li className="font-alt text-blue-400">Controle financeiro</li>{' '}
              <p>
                Renegociações, fluxo de caixa, gestão de contas a pagar e a
                receber, grupos de receitas e despesas, cenro de custo, controle
                de comissões e vendas.
              </p>
              <li className="font-alt text-blue-400">Estoque</li>{' '}
              <p>
                Cadastro, controle, histórico, movimentação, condicional,
                importação do XML na entrada, com cadastramento automático do
                produto, controle de unidades.
              </p>
              <li className="font-alt text-blue-400">Cadastros</li>
              <p>
                Clientes, fornecedores, funcionários, convênios, contas e
                bancos.
              </p>
              <li className="font-alt text-blue-400">Fiscal</li>
              <p>
                Emissão Nota Fiscal Eletrônica, EFD IMCS/IPI (SPED Fiscal) e EFD
                Contribuições, CT-e, CC-e, NFC-e, MDF-e.
              </p>
              <li className="font-alt text-blue-400">Produção</li>
              <p>
                Cadastro de receitas para produtos idustrializado com baixa
                automática de insumos na produção.
              </p>
              <li className="font-alt text-blue-400">Ordem de serviços</li>
              <p>Criação de controle sobre serviços prestados.</p>
            </ul>
          </div>
          <div className="w-full py-2 text-justify">
            <ul className="list-disc px-8">
              <li className="font-alt text-blue-400">Controle de entregas</li>{' '}
              <p>
                Agendamento de entrega de produtos, relatórios de itens a
                entregar e previsão de entregas.
              </p>
              <li className="font-alt text-blue-400">
                Conferência de movimento
              </li>{' '}
              <p>
                Conferência de saídas de produtos com leitura de código de
                barras e impressão de etiquetas.
              </p>
              <li className="font-alt text-blue-400">Agendas</li>
              <p>
                Agendamento de serviços com geração de ordem de serviços.
                Agedamento de cobrança com emissão de cobrança.
              </p>
              <li className="font-alt text-blue-400">Força de Vendas</li>
              <p>Módulo PDV (supermercados) venda, Tablets e Smartphones.</p>
              <li className="font-alt text-blue-400">Atualização</li>
              <p>
                Sistema atualizado com as últimas exigências relacioadas a
                emissão de NF-e e NFC-e.
              </p>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700"></div>
      </div>
    </>
  )
}
