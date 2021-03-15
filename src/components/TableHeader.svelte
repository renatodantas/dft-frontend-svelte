<script lang="typescript">
  import type { Column } from "src/models/components/table-column";

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
      <th>
        {column.label}
      </th>
    {/each}
  </tr>
</thead>
