<script lang="typescript">
  import Paginator from "src/components/table/Paginator.svelte";
  import type { Column } from "src/models/components/table-column";
  import { parseQueryParams } from "src/utils/parsers";
  import { router } from "tinro";
  import TableHeader from "../../../components/table/Header.svelte";
  import {
    categorias,
    loadCategorias,
    paginas,
  } from "../../../stores/categoria-servico.store";

  router.subscribe(() => {
    const params = parseQueryParams();
    loadCategorias(params);
  });

  function paginar(e: CustomEvent<number>) {
    const pagina = `${e.detail}`;
    // Aplica o sort caso o nome da coluna seja diferente
    // Evita push desnecessário no history
    const params = parseQueryParams({ page: pagina }) as Record<string, string>;
    console.log("PARAMS PAGINAR:", params);
    router.location.query.replace(params);
  }

  function ordenar(e: CustomEvent<{ sort: string; order: string }>) {
    const { sort, order } = e.detail;
    const params = parseQueryParams({ sort, order }) as Record<string, string>;
    console.log("PARAMS ORDENAR:", params);
    router.location.query.replace(params);
  }

  const columns: Column[] = [
    {
      property: "id",
      label: "ID",
      sortable: true,
    },
    {
      property: "descricao",
      label: "Descrição",
      sortable: true,
    },
    {
      label: "",
    },
  ];
</script>

<div class="container">
  <div class="card card-titulo shadow-sm my-4">
    <div class="card-body d-flex justify-content-between align-items-center">
      <strong>Categorias de Serviço</strong>
      <a class="btn btn-primary btn-sm" href="/tipificacao/categorias/novo">
        Incluir
      </a>
    </div>
  </div>

  <table class="table table-striped table-bordered">
    <TableHeader {columns} on:sort={ordenar} />
    <tbody>
      {#each $categorias as item}
        <tr>
          <td>{item.id}</td>
          <td>{item.descricao}</td>
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Ações">
              <button class="btn btn-sm btn-outline-dark" title="Editar">
                <i class="bi-pencil-square" />
              </button>
              <button class="btn btn-sm btn-outline-danger" title="Excluir">
                <i class="bi-trash" />
              </button>
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <Paginator paginas={$paginas} on:page={paginar} />
</div>

<style>
  .card-body {
    height: 3rem;
  }
</style>
