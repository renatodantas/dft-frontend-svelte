<script lang="typescript">
  import type { Column } from "src/models/components/table-column";
  import { onMount } from "svelte";
  import { router } from "tinro";
  import TableHeader from "../../../components/table/Header.svelte";
  import {
    categorias,
    loadCategorias,
  } from "../../../stores/categoria-servico.store";

  // let page = 0;
  // let size = 10;

  onMount(async () => {
    await loadCategorias();
  });

  router.subscribe(() => {
    const params = router.location.query.get() as Record<string, string>;
    loadCategorias({
      // page: params["page"] || undefined,
      // size: params["size"] || undefined,
      sort: params["sort"],
      order: params["order"],
    });
  });

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
    <TableHeader {columns} />
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

  <nav aria-label="Navegação">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
          >Primeira</a
        >
      </li>
      <li class="page-item">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Última</a>
      </li>
    </ul>
  </nav>
</div>

<style>
  .card-body {
    height: 3rem;
  }
</style>
