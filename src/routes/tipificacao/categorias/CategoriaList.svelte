<script lang="ts" context="module">
  import type { RecordParams } from "src/models/components/pageable";
  import type { Column } from "src/models/components/table-column";
  import { router } from "tinro";
  import ModalConfirm from "../../../components/ModalConfirm.svelte";
  import Header from "../../../components/table/Header.svelte";
  import Paginator from "../../../components/table/Paginator.svelte";
  import {
    categorias,
    loadCategorias,
    paginas,
    removeCategoria,
  } from "../../../stores/categoria-servico.store";
  import { parseQueryParams } from "../../../utils/parsers";

  router.subscribe((currentRoute) => {
    console.log("Mudou route: ", currentRoute.path);

    const params = parseQueryParams();
    loadCategorias(params);
  });
</script>

<script lang="ts">
  let idExclusao: number;

  function paginar(e: CustomEvent<number>) {
    const pagina = e.detail;
    // Aplica o sort caso o nome da coluna seja diferente
    // Evita push desnecessário no history
    const params = parseQueryParams({ page: `${pagina}` }) as RecordParams;
    router.location.query.replace(params);
  }

  function ordenar(e: CustomEvent<{ sort: string; order: string }>) {
    const { sort, order } = e.detail;
    const params = parseQueryParams({ sort, order }) as RecordParams;
    router.location.query.replace(params);
  }

  function excluir() {
    removeCategoria(idExclusao);
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
      <a
        class="btn btn-primary btn-sm d-flex align-items-center"
        href="/tipificacao/categorias/novo"
      >
        <i class="bi-plus-circle mx-1" /> Incluir
      </a>
    </div>
  </div>

  <table class="table table-striped table-bordered">
    <Header {columns} on:sort={ordenar} />
    <tbody>
      {#each $categorias as item}
        <tr>
          <td>{item.id}</td>
          <td>{item.descricao}</td>
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Ações">
              <a
                href={`/tipificacao/categorias/${item.id}`}
                class="btn btn-sm btn-outline-dark"
                title="Editar"
                on:click={() => (idExclusao = Number(item.id))}
              >
                <i class="bi-pencil-square" />
              </a>
              <button
                class="btn btn-sm btn-outline-danger"
                title="Excluir"
                data-bs-toggle="modal"
                data-bs-target="#modalConfirm"
              >
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

<ModalConfirm
  titulo="Exclusão de categoria"
  mensagem="Confirma a exclusão desta categoria?"
  on:confirm={excluir}
/>

<style>
  .card-body {
    height: 3rem;
  }
</style>
