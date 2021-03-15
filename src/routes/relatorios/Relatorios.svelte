<script lang="typescript">
  import CardLinks from "../../components/CardLinks.svelte";
  import type { CardLink } from "../../models/components/card-link";

  const itens: CardLink[] = [
    {
      titulo: "Relatório Gerencial",
      descricao: "Descrição para o relatório aqui",
      url: "#",
    },
    {
      titulo: "Perfis por Usuário",
      descricao: "Descrição para o relatório aqui",
      url: "#",
    },
    {
      titulo: "Categorias de Serviço",
      descricao: "Descrição para o relatório aqui",
      url: "#",
    },
    {
      titulo: "Descrição das Unidades",
      descricao: "Descrição para o relatório aqui",
      url: "#",
    },
  ];
</script>

<CardLinks {itens} />
