<script lang="typescript">
  import { onMount } from "svelte";
  import { router } from "tinro";
  import TableHeader from "../../../components/TableHeader.svelte";
  import {
    categorias,
    loadCategorias,
  } from "../../../stores/categoria-servico.store";

  let fieldSort = "id";
  let fieldOrder = "asc";
  // let page = 0;
  // let size = 10;

  onMount(async () => {
    await loadCategorias();
  });

  router.subscribe(() => {
    console.log("mudou route:", router.location.query.get());
    router.location.query.get("sort");
    // loadCategorias({
    //   sort: fieldOrder,
    //   order: fieldOrder,
    //   page,
    //   size,
    // });
  });

  function ordenar(event: MouseEvent) {
    const link = <HTMLAnchorElement>event.target;
    const { sort, order } = link.dataset;
    router.location.query.set("sort", `${sort}`);
    router.location.query.set("order", `${order}`);
  }
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
    <!--
      <thead>
        <tr>
          <th>
            ID
          {#if fieldSort === "id"}
            {#if fieldOrder === "desc"}
              <span
                on:click={ordenar}
                role="button"
                data-sort="id"
                class="bi-caret-up-fill"
              />
              {:else}
              <span
                on:click={ordenar}
                role="button"
                data-sort="id"
                data-order="desc"
                class="bi-caret-down-fill"
              />
            {/if}
          {/if}
        </th>
        <th>Descrição</th>
        <th />
      </tr>
    </thead>
    -->
    <TableHeader />
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
