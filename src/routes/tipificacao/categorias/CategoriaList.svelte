<script lang="typescript">
  import ModalConfirm from "src/components/ModalConfirm.svelte";
  import Header from "src/components/table/Header.svelte";
  import Paginator from "src/components/table/Paginator.svelte";
  import type { Column } from "src/models/components/table-column";
  import type { CategoriaServico } from "src/models/domain/categoria-servico";
  import {
    categorias,
    categoriaSelecionada,
    loadCategorias,
    paginas,
  } from "src/stores/categoria-servico.store";
  import { parseQueryParams } from "src/utils/parsers";
  import { router } from "tinro";
  import CategoriaEdit from "./CategoriaEdit.svelte";

  router.subscribe(() => {
    const params = parseQueryParams();
    loadCategorias(params);
  });

  function paginar(e: CustomEvent<number>) {
    const pagina = e.detail;
    // Aplica o sort caso o nome da coluna seja diferente
    // Evita push desnecessário no history
    const params = parseQueryParams({ page: pagina + "" }) as Record<
      string,
      string
    >;
    router.location.query.replace(params);
  }

  function ordenar(e: CustomEvent<{ sort: string; order: string }>) {
    const { sort, order } = e.detail;
    const params = parseQueryParams({ sort, order }) as Record<string, string>;
    router.location.query.replace(params);
  }

  function selecionar(item: CategoriaServico) {
    categoriaSelecionada.set(item);
  }

  function excluir() {
    console.log("Bora excluir o q? " + $categoriaSelecionada.descricao);
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
    <Header {columns} on:sort={ordenar} />
    <tbody>
      {#each $categorias as item}
        <tr>
          <td>{item.id}</td>
          <td>{item.descricao}</td>
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Ações">
              <button
                class="btn btn-sm btn-outline-dark"
                title="Editar"
                data-bs-toggle="modal"
                data-bs-target="#categoriaEdit"
                on:click={() => selecionar(item)}
              >
                <i class="bi-pencil-square" />
              </button>
              <button
                class="btn btn-sm btn-outline-danger"
                title="Excluir"
                data-bs-toggle="modal"
                data-bs-target="#modalConfirm"
                on:click={() => selecionar(item)}
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

<CategoriaEdit />

<style>
  .card-body {
    height: 3rem;
  }
</style>
