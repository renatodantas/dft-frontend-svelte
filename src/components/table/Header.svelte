<script lang="typescript">
  import type { Column } from "src/models/components/table-column";
  import { meta, router } from "tinro";
  import HeaderColumn from "./HeaderColumn.svelte";

  type Params = "sort" | "order";
  type SortOrder = "desc" | undefined;
  const route = meta();

  // Parâmetros
  export let params: Record<Params, string>;

  let sortedColumn: string;
  let sortedOrder: SortOrder;

  function setStatus(column: string, sort: SortOrder) {
    sortedColumn = column;
    sortedOrder = sort;
    updateUrl();
  }

  function updateUrl() {
    // Aplica o sort caso o nome da coluna seja diferente
    // Evita push desnecessário no history
    const query = { ...route.query };

    if (query.sort !== sortedColumn) {
      // q.set("sort", sortedColumn);
      query.sort = sortedColumn;
    }
    if (query.order !== sortedOrder) {
      if (sortedOrder) {
        // q.set("order", sortedOrder);
        query.order = sortedOrder;
      } else {
        // q.delete("order");
        delete query.order;
      }
    }
    console.log("Params depois:", query);
    router.location.query.replace(query);
  }

  // function getIcon(current: boolean, ascending: boolean): string {
  //   if (!current) {
  //     return iconAscending;
  //   }
  //   return ascending ? iconAscendingCurrent : iconDescendingCurrent;
  // }

  let columns: Column[] = [
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
