<script>
  import Lazy from "@utils/Lazy.svelte";
  import { Route } from "tinro";
</script>

<Route path="/tipificacao/categorias">
  <Lazy component={import("./CategoriaList.svelte")} />
</Route>
<Route path="/tipificacao/categorias/:id">
  <Lazy component={import("./CategoriaEdit.svelte")} />
</Route>
