<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Column } from "../../models/components/table-column";
  import HeaderColumn from "./HeaderColumn.svelte";

  // Parâmetros
  export let columns: Column[] = [];

  let sortedColumn: string | undefined;
  let sortedOrder: string | undefined;
  const dispatcher = createEventDispatcher();

  function setStatus(column?: string, sort?: string): void {
    sortedColumn = column;
    sortedOrder = sort;
    dispatcher("sort", { sort: sortedColumn, order: sortedOrder });
  }
</script>

<thead>
  <tr>
    {#each columns as column}
      <HeaderColumn
        label={column.label}
        sortable={column.sortable}
        isCurrent={sortedColumn === column.property}
        on:sort={(e) => setStatus(column.property, e.detail)}
      />
    {/each}
  </tr>
</thead>
