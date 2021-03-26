<script lang="typescript">
  import type { Column } from "src/models/components/table-column";
  import { router } from "tinro";
  import HeaderColumn from "./HeaderColumn.svelte";

  type SortOrder = "desc" | undefined;
  let sortedColumn: string;
  let sortedOrder: SortOrder;

  // Parâmetros
  export let columns: Column[] = [];

  function setStatus(column: string, sort: SortOrder) {
    sortedColumn = column;
    sortedOrder = sort;
    updateUrl();
  }

  function updateUrl() {
    // Aplica o sort caso o nome da coluna seja diferente
    // Evita push desnecessário no history
    const q = router.location.query;
    const queryParams = { ...(q.get() as Record<string, string>) };

    if (queryParams.sort !== sortedColumn) {
      queryParams.sort = sortedColumn;
    }
    if (queryParams.order !== sortedOrder) {
      if (sortedOrder) {
        queryParams.order = sortedOrder;
      } else {
        delete queryParams.order;
      }
    }
    q.replace(queryParams);
  }
</script>

<thead>
  <tr>
    {#each columns as column}
      <HeaderColumn
        label={column.label}
        sortable={column.sortable}
        isCurrent={sortedColumn === column.property}
        on:sort={(e) => setStatus(`${column.property}`, e.detail.sort)}
      />
    {/each}
  </tr>
</thead>
