<script lang="typescript">
  import type { Pageable } from "src/models/components/pageable";
  import { createEventDispatcher } from "svelte";

  export let paginas: Pageable<unknown> | null;
  const dispatch = createEventDispatcher();

  function emit(pagina: number) {
    dispatch("page", pagina);
  }
</script>

<nav aria-label="Navegação">
  <ul class="pagination justify-content-center">
    <li class="page-item" class:disabled={paginas?.first}>
      <span
        class="page-link"
        role="button"
        tabindex="-1"
        aria-disabled="true"
        on:click={() => emit(0)}
      >
        Primeira
      </span>
    </li>

    {#each Array(paginas?.totalPages) as _, pagina}
      <li class="page-item" class:disabled={paginas?.number === pagina}>
        <span class="page-link" role="button" on:click={() => emit(pagina)}>
          {pagina + 1}
        </span>
      </li>
    {/each}

    <li class="page-item" class:disabled={paginas?.last}>
      <span
        class="page-link"
        role="button"
        on:click|preventDefault={() => emit((paginas?.totalPages || 0) - 1)}
      >
        Última
      </span>
    </li>
  </ul>
</nav>

<style>
  span {
    cursor: pointer;
  }
</style>
