<script lang="typescript">
  import { Route } from "tinro";
  import Lazy from "../utils/Lazy.svelte";
  import Error404 from "./errors/Error404.svelte";
</script>

<Route fallback>
  <Error404 />
</Route>

<Route path="/">
  <Lazy component={import("./Home.svelte")} />
</Route>

<!-- Tipificação -->
<Route path="/tipificacao">
  <Lazy component={import("./tipificacao/Tipificacao.svelte")} />
</Route>
<Route path="/tipificacao/categorias">
  <Lazy component={import("./tipificacao/categorias/CategoriaList.svelte")} />
</Route>
<Route path="/tipificacao/categorias/:id">
  <Lazy component={import("./tipificacao/categorias/CategoriaEdit.svelte")} />
</Route>

<!-- Relatórios -->
<Route path="/relatorios">
  <Lazy component={import("./relatorios/Relatorios.svelte")} />
</Route>
