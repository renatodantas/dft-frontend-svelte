import type { SidebarItem } from "../models/sidebar-item";

const home: SidebarItem[] = [];

const tipificacao: SidebarItem[] = [
  {
    href: "/tipificacao/categorias",
    icone: "bi-arrow-right-square",
    descricao: "Categoria de Serviços",
  },
  {
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Órgãos",
  },
  {
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Unidades",
  },
  {
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Entregas",
  },
  {
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Indic. de Produtividade",
  },
];

const relatorios: SidebarItem[] = [
  {
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Relatório Gerencial",
  },
  {
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Perfis por Usuário",
  },
  {
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Categorias de Serviço",
  },
  {
    href: "#",
    icone: "bi-arrow-right-square",
    descricao: "Descrição das Unidades",
  },
];

export {
  home,
  tipificacao,
  relatorios
};
