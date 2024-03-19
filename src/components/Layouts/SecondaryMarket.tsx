"use client";

import { formatDate } from "@/utils/formatDate";
import { formatNumber } from "@/utils/formatNumber";
import { MultiSelect } from "../FormElements/MultiSelect";
import { Table } from "../Tables/Table";

const data: Sale[] = [
  {
    id: "90ba86db-eaf7-41bc-b69b-fef26d6ac2c3",
    identificador: 31,
    conta: "4046207",
    ativo: "DEB-PEJA11",
    ativoEmissor: "PETRO RIO JAGUAR PETROLEO S.A.",
    ativoVencimento: "2032-08-16T00:00:00",
    quantidade: 50.0,
    quantidadeResidual: 0.0,
    pu: 12.8,
    taxa: 12.0,
    puOferta: 11.9532,
    taxaOferta: 20.0,
    status: 1,
    dataInicio: "2024-03-13T21:41:15.327",
    dataFim: "2024-03-18T21:42:29.073",
    broker: "joao.costa",
    descricao: null,
    qtdPendente: 0,
    assessor: "dev02",
    detalhamento: [
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
    ],
  },
  {
    id: "90ba86db-eaf7-41bc-b69b-fef26d6ac2c3",
    identificador: 31,
    conta: "4046207",
    ativo: "DEB-PEJA11",
    ativoEmissor: "PETRO RIO JAGUAR PETROLEO S.A.",
    ativoVencimento: "2032-08-16T00:00:00",
    quantidade: 50.0,
    quantidadeResidual: 0.0,
    pu: 12.8,
    taxa: 12.0,
    puOferta: 11.9532,
    taxaOferta: 20.0,
    status: 1,
    dataInicio: "2024-03-13T21:41:15.327",
    dataFim: "2024-03-18T21:42:29.073",
    broker: "joao.costa",
    descricao: null,
    qtdPendente: 0,
    assessor: "dev02",
    detalhamento: [
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
    ],
  },
  {
    id: "90ba86db-eaf7-41bc-b69b-fef26d6ac2c3",
    identificador: 31,
    conta: "4046207",
    ativo: "DEB-PEJA11",
    ativoEmissor: "PETRO RIO JAGUAR PETROLEO S.A.",
    ativoVencimento: "2032-08-16T00:00:00",
    quantidade: 50.0,
    quantidadeResidual: 0.0,
    pu: 12.8,
    taxa: 12.0,
    puOferta: 11.9532,
    taxaOferta: 20.0,
    status: 1,
    dataInicio: "2024-03-13T21:41:15.327",
    dataFim: "2024-03-18T21:42:29.073",
    broker: "joao.costa",
    descricao: null,
    qtdPendente: 0,
    assessor: "dev02",
    detalhamento: [
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
      {
        id: "938c26ad-fd12-4d23-afbe-a8ca26098115",
        identificador: 1,
        conta: "4046207",
        quantidade: 40.0,
        status: 2,
        data: "2024-03-13T21:41:15.327",
        taxa: null,
        puCadastro: 15.0,
        puBanco: null,
        liquidez: "SALDO EM CONTA",
        observacoes: "observacao",
        assessor: "dev02",
      },
    ],
  },
];

const headers = [
  { minWidth: `120px`, text: `BROKER`, code: `broker` },
  { minWidth: `64px`, text: `ID`, code: `identificador`, hasOrdenation: false },
  {
    minWidth: `80px`,
    text: `CONTA VENDA`,
    code: `conta`,
    hasOrdenation: false,
  },
  { minWidth: `160px`, text: `ATIVO`, code: `ativo` },
  {
    minWidth: `72px`,
    text: `DATA VENC.`,
    code: `ativoVencimento`,
    formatter: (value: string) => formatDate({ value }),
  },
  {
    minWidth: `64px`,
    text: `QTDE VENDA`,
    code: `quantidade`,
    formatter: (value: string) => formatNumber({ valueToFormat: value }),
  },
  {
    minWidth: `64px`,
    text: `QTDE RESIDUAL`,
    code: `quantidadeResidual`,
    formatter: (value: string) => formatNumber({ valueToFormat: value }),
  },
  {
    minWidth: `96px`,
    text: `STATUS`,
    code: `status`,
    formatter: (value: string) => {
      return value === "1" ? "Aguardando Início" : "Ofertando";
    },
  },
  {
    minWidth: `56px`,
    text: `TAXA VENDA`,
    code: `taxa`,
    hasOrdenation: false,
    formatter: (value: string) =>
      formatNumber({ valueToFormat: value, maximumFractionDigits: 4 }),
  },
  {
    minWidth: `56px`,
    text: `PU VENDA`,
    code: `pu`,
    hasOrdenation: false,
    formatter: (value: string) =>
      formatNumber({ valueToFormat: value, maximumFractionDigits: 4 }),
  },
  {
    minWidth: `56px`,
    text: `TAXA OFERTA`,
    code: `taxaOferta`,
    hasOrdenation: false,
    formatter: (value: string) =>
      formatNumber({ valueToFormat: value, maximumFractionDigits: 4 }),
  },
  {
    minWidth: `56px`,
    text: `PU OFERTA`,
    code: `puOferta`,
    hasOrdenation: false,
    formatter: (value: string) =>
      formatNumber({ valueToFormat: value, maximumFractionDigits: 4 }),
  },
  {
    minWidth: `80px`,
    text: `FINANCEIRO VENDA`,
    code: `financeiroVenda`,
    hasOrdenation: false,
  },
  {
    minWidth: `56px`,
    text: `DATA INICIAL`,
    code: `dataInicio`,
    formatter: (value: string) => formatDate({ value }),
  },
  {
    minWidth: `56px`,
    text: `DATA FINAL`,
    code: `dataFim`,
    formatter: (value: string) => formatDate({ value }),
  },
  {
    minWidth: `160px`,
    text: `DESCRIÇÃO`,
    code: `descricao`,
    hasOrdenation: false,
  },
  { minWidth: `32px`, text: `AÇÕES`, code: ``, hasOrdenation: false },
];

const subHeaders = [
  {
    minWidth: `48px`,
    text: `ID`,
    hasOrdenation: false,
    code: `identificador`,
  },
  {
    minWidth: `128px`,
    text: `ASSESSOR`,
    hasOrdenation: false,
    code: `assessor`,
  },
  { minWidth: `80px`, text: `CONTA`, hasOrdenation: false, code: `conta` },
  {
    minWidth: `64px`,
    text: `QTD`,
    hasOrdenation: false,
    code: `quantidade`,
    formatter: (value: string) => formatNumber({ valueToFormat: value }),
  },
  {
    minWidth: `224px`,
    text: `STATUS`,
    hasOrdenation: false,
    code: `status`,
    formatter: (value: string) => {
      return value === "1" ? "Aguardando Início" : "Aguardando Ordem Comprador";
    },
  },
  {
    minWidth: `80rem`,
    text: `DATA`,
    hasOrdenation: false,
    code: `data`,
    formatter: (value: string) => formatDate({ value }),
  },
  {
    minWidth: `80px`,
    text: `TAXA`,
    hasOrdenation: false,
    code: `taxa`,
    formatter: (value: string) => formatNumber({ valueToFormat: value }),
  },
  {
    minWidth: `80px`,
    text: `PU`,
    hasOrdenation: false,
    code: `puCadastro`,
    formatter: (value: string) => formatNumber({ valueToFormat: value }),
  },
  {
    minWidth: `80px`,
    text: `PU BANCO`,
    hasOrdenation: false,
    code: `puBanco`,
    formatter: (value: string) => formatNumber({ valueToFormat: value }),
  },
  {
    minWidth: `96px`,
    text: `FINANCEIRO COMPRA`,
    hasOrdenation: false,
    code: `financeiro`,
    formatter: (value: string) => formatNumber({ valueToFormat: value }),
  },
  {
    minWidth: `128px`,
    text: `LIQUIDEZ`,
    hasOrdenation: false,
    code: `liquidez`,
  },
  {
    minWidth: `160px`,
    text: `OBSERVAÇÕES`,
    hasOrdenation: false,
    code: `observacoes`,
  },
];

export function SecondaryMarket() {
  return (
    <div className="mt-4 md:mt-6 2xl:mt-7.5 ">
      <div className="rounded-sm bg-white px-5 pb-2.5 pt-6">
        <div className="md:flex md:justify-between">
          <h4 className="mb-6 text-xl font-semibold text-black">
            Mercado Secundário
          </h4>

          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <input
              type="text"
              placeholder="Conta da venda"
              className="h-10 w-full rounded border-[1.5px] border-stroke bg-transparent px-4 text-black outline-none transition focus:border-brand active:border-brand disabled:cursor-default disabled:bg-whiter"
            />

            <MultiSelect
              id="multiSelect"
              placeholder="Broker responsável"
              defaultOptions={[
                { label: `joao.costa`, value: `joao.costa` },
                { label: `vitor.brito`, value: `vitor.brito` },
                { label: `douglas.silva`, value: `douglas.silva` },
              ]}
            />
          </div>
        </div>

        <Table
          headers={headers}
          data={data}
          subitemProperty={"detalhamento"}
          subtableHeaders={subHeaders}
        />
      </div>
    </div>
  );
}
