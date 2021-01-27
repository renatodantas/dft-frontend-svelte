<script>
  import Lazy from "@utils/Lazy.svelte";
  import { Route } from "tinro";
  import CategoriaRoute from "./categorias/CategoriaRoute.svelte";
</script>

<Route path="/tipificacao">
  <Lazy component={import("./Tipificacao.svelte")} />
</Route>

<CategoriaRoute />
