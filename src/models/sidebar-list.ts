import type { SidebarItem } from "./sidebar-item";

const AGRUPADOR_TIPIFICACAO = 'tipificacao';
const AGRUPADOR_RELATORIOS = 'relatorios';

const menuTipificacao: SidebarItem[] = [
  {
    agrupador: AGRUPADOR_TIPIFICACAO,
    href: "/tipificacao/categorias",
    icone: "bi-arrow-right-square",
    descricao: "Categoria de Serviços",
  },
  {
    agrupador: AGRUPADOR_TIPIFICACAO,
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Órgãos",
  },
  {
    agrupador: AGRUPADOR_TIPIFICACAO,
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Unidades",
  },
  {
    agrupador: AGRUPADOR_TIPIFICACAO,
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Entregas",
  },
  {
    agrupador: AGRUPADOR_TIPIFICACAO,
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Indic. de Produtividade",
  },
]

const menuRelatorios: SidebarItem[] = [
  {
    agrupador: AGRUPADOR_RELATORIOS,
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Relatório Gerencial",
  },
  {
    agrupador: AGRUPADOR_RELATORIOS,
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Perfis por Usuário",
  },
  {
    agrupador: AGRUPADOR_RELATORIOS,
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Categorias de Serviço",
  },
  {
    agrupador: AGRUPADOR_RELATORIOS,
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Descrição das Unidades",
  },
];

export const itens: SidebarItem[] = [
  ...menuTipificacao, 
  ...menuRelatorios
];