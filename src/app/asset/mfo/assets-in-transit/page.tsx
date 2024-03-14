import { CardDataStats } from "@/components/CardDataStats";
import {
  AlertIcon,
  DataStatsContainer,
} from "@/components/Dashboard/E-commerce.styles";
import { MultiSelect } from "@/components/FormElements/MultiSelect";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Table } from "@/components/Tables/Table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ativos em Trânsito",
};

const headers = [
  { minWidth: `112px`, text: `CONTRATO ASSINADO`, code: "contract" },
  { minWidth: `112px`, text: `NOME L.G.P.D`, code: `name` },
  { minWidth: `80px`, text: `CONTA BTG`, code: `accountBTG` },
  { minWidth: `112px`, text: `INSTITUIÇÃO`, code: `bank` },
  { minWidth: `80px`, text: `CONTA`, code: `account` },
  { minWidth: `112px`, text: `VALOR BRUTO DOS ATIVOS`, code: `value` },
  { minWidth: `80px`, text: `DATA INICIAL`, code: `date` },
];
const data = [
  {
    contract: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contract: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contract: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contract: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contract: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contract: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contract: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
];

export default function AssetsInTransitPage() {
  return (
    <DefaultLayout>
      <div className="mb-4 flex w-full items-center border-l-6 border-warning bg-warning bg-opacity-[15%] px-7 py-4 md:p-4">
        <AlertIcon>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.50493 16H17.5023C18.6204 16 19.3413 14.9018 18.8354 13.9735L10.8367 0.770573C10.2852 -0.256858 8.70677 -0.256858 8.15528 0.770573L0.156617 13.9735C-0.334072 14.8998 0.386764 16 1.50493 16ZM10.7585 12.9298C10.7585 13.6155 10.2223 14.1433 9.45583 14.1433C8.6894 14.1433 8.15311 13.6155 8.15311 12.9298V12.9015C8.15311 12.2159 8.6894 11.688 9.45583 11.688C10.2223 11.688 10.7585 12.2159 10.7585 12.9015V12.9298ZM8.75236 4.01062H10.2548C10.6674 4.01062 10.9127 4.33826 10.8671 4.75288L10.2071 10.1186C10.1615 10.5049 9.88572 10.7455 9.50142 10.7455C9.11929 10.7455 8.84138 10.5028 8.79579 10.1186L8.13574 4.75288C8.09449 4.33826 8.33984 4.01062 8.75236 4.01062Z"
              fill="#FBBF24"
            ></path>
          </svg>
        </AlertIcon>
        <div className="w-full">
          <h5 className="text-lg font-semibold text-[#9D5425]">Observação</h5>
          <p className="leading-relaxed text-[#D0915C]">
            Ativos finalizados há mais de 90 dias não aparecerão nesta lista
          </p>
        </div>
      </div>

      <DataStatsContainer>
        <CardDataStats
          title="Ativos"
          total="R$ 236.117.273"
          note="147"
          isActive
          onClick={() => console.log("ativos")}
        />
        <CardDataStats
          title="Finalizados"
          total="R$ 236.117.273"
          note="147"
          onClick={() => console.log("Finalizados")}
        />
        <CardDataStats
          title="Em Andamento"
          total="0"
          note="0"
          onClick={() => console.log("Andamento")}
        />
        <CardDataStats title="Total BTG" total="R$ 106.110.363" note="60" />
        <CardDataStats title="Externo" total="R$ 130.006.910" note="87" />
      </DataStatsContainer>

      <div className="mt-4 md:mt-6 2xl:mt-7.5 ">
        <div className="rounded-sm bg-white px-5 pb-2.5 pt-6">
          <div className="md:flex md:justify-between">
            <h4 className="mb-6 text-xl font-semibold text-black">
              Ativos em Trânsito
            </h4>

            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <input
                type="text"
                placeholder="Conta BTG ou nome"
                className="focus:border-brand active:border-brand h-10 w-full rounded border-[1.5px] border-stroke bg-transparent px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter"
              />

              <MultiSelect
                id="multiSelect"
                placeholder="Status dos ativos"
                defaultOptions={[
                  { label: "Todos", value: "Todos" },
                  { label: "Em andamento", value: "Em andamento" },
                  { label: "Finalizado", value: "Finalizado" },
                ]}
              />
            </div>
          </div>

          <Table headers={headers} data={data} />
        </div>
      </div>
    </DefaultLayout>
  );
}
