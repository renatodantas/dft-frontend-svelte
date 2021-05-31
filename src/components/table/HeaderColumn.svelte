<script lang="ts">
  /**
   * Componente que renderiza uma coluna de um header de tabela.
   * Incorpora itens como ordenação.
   */
  import { createEventDispatcher } from "svelte";

  export let label: string;
  export let sortable = false;
  export let isCurrent = false;

  const iconAscending = "bi-caret-up";
  const iconAscendingCurrent = "bi-caret-up-fill";
  const iconDescendingCurrent = "bi-caret-down-fill";
  const dispatch = createEventDispatcher();

  let isAscending = true;
  $: icon = !isCurrent
    ? iconAscending
    : isAscending
    ? iconAscendingCurrent
    : iconDescendingCurrent;

  function changeOrder() {
    isAscending = !isAscending;
    dispatch("sort", isAscending ? "asc" : "desc");
  }
</script>

<th>
  {label}

  {#if sortable}
    <i
      role="button"
      class={icon}
      on:click|preventDefault={() => changeOrder()}
    />
  {/if}
</th>
