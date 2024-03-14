type Sale = {
  id: string;
  identificador: number;
  conta: string;
  ativo: string;
  quantidade: number;
  quantidadeResidual: number;
  status: number;
  pu: number | null;
  taxa: number | null;
  puOferta: number | null;
  taxaOferta: number | null;
  dataInicio: string;
  dataFim: string;
  ativoEmissor: string | null;
  ativoVencimento: string | null;
  broker: string | null;
  descricao: string | null;
  qtdPendente: number | null;
  detalhamento: SaleBrokerDetail[] | null;
  assessor: string;
};

type SaleDetail = {
  id: string;
  identificador: number;
  conta: string;
  quantidade: number;
  status: number;
  data: string;
  taxa: number | null;
  puCadastro: number | null;
  puBanco: number | null;
  broker: string;
  liquidez: number;
  observacoes: string | null;
  assessor: string;
};
