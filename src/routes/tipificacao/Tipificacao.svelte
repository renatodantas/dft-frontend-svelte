<script lang="typescript">
  import CardLinks from "../../components/CardLinks.svelte";
  import type { CardLink } from "../../models/card-link";

  const itens: CardLink[] = [
    {
      titulo: "Categoria de Serviços",
      descricao: "Descrição para categorias aqui",
      url: "/tipificacao/categorias",
    },
    {
      titulo: "Órgãos",
      descricao: "Descrição para os órgãos aqui",
      url: "#",
    },
    {
      titulo: "Unidades",
      descricao: "Descrição para as unidades aqui",
      url: "#",
    },
    {
      titulo: "Entregas",
      descricao: "Descrição para as entregas aqui",
      url: "#",
    },
    {
      titulo: "Indic. de Produtividade",
      descricao: "Descrição para os indicadores de produtividade aqui",
      url: "#",
    },
  ];
</script>

<CardLinks {itens} />
