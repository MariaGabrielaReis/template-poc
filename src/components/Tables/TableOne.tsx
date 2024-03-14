import { MultiSelect } from "../FormElements/MultiSelect";

const data = [
  {
    contact: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contact: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contact: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contact: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contact: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contact: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
  {
    contact: "Fechado",
    name: "Maby Reis",
    accountBTG: "123123",
    account: "123123",
    bank: "BTG",
    value: "R$ 160.789",
    date: "19/07/2023",
  },
];

export function TableOne() {
  return (
    <div className="rounded bg-white px-5 pb-2.5 pt-6 dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Ativos em Trânsito
        </h4>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Conta BTG ou nome"
            className="focus:border-brand active:border-brand dark:focus:border-brand h-10 rounded border-[1.5px] border-stroke bg-transparent px-4 text-black outline-none transition disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
          />

          <MultiSelect
            id="multiSelect"
            defaultOptions={[
              { label: "Todos", value: "Todos" },
              { label: "Em andamento", value: "Em andamento" },
              { label: "Finalizado", value: "Finalizado" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="dark:bg-meta- grid grid-cols-7 rounded-sm bg-gray-2">
          <div className="flex items-center justify-center p-2.5  text-center">
            <p className="font-medium uppercase xsm:text-base">
              CONTRATO ASSINADO
            </p>
          </div>
          <div className="flex items-center justify-center p-2.5 text-center">
            <p className="font-medium uppercase xsm:text-base">NOME</p>
          </div>
          <div className="flex items-center justify-center p-2.5 text-center">
            <p className="font-medium uppercase xsm:text-base">CONTA BTG</p>
          </div>
          <div className="flex items-center justify-center p-2.5 text-center">
            <p className="font-medium uppercase xsm:text-base">INSTITUIÇÃO</p>
          </div>
          <div className="flex items-center justify-center p-2.5 text-center">
            <p className="font-medium uppercase xsm:text-base">CONTA</p>
          </div>
          <div className="flex items-center justify-center p-2.5 text-center">
            <p className="font-medium uppercase xsm:text-base">
              VALOR BRUTO DOS ATIVOS
            </p>
          </div>
          <div className="flex items-center justify-center p-2.5 text-center">
            <p className="font-medium uppercase xsm:text-base">DATA INICIAL</p>
          </div>
        </div>

        {data.map((item, key) => (
          <div
            className={`grid grid-cols-7 sm:grid-cols-7 ${
              key === data.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{item.contact}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{item.name}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{item.accountBTG}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{item.bank}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{item.account}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{item.value}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
