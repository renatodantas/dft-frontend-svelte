<script lang="typescript">
  import { Route } from "tinro";
  import Error404 from "./routes/Error404.svelte";
  import Lazy from "./utils/Lazy.svelte";
</script>

<Route fallback>
  <Error404 />
</Route>

<Route path="/">
  <Lazy component={import("./routes/Home.svelte")} />
</Route>

<!-- Tipificação -->
<Route path="/tipificacao">
  <Lazy component={import("./routes/tipificacao/Tipificacao.svelte")} />
</Route>
<Route path="/tipificacao/categorias">
  <Lazy
    component={import("./routes/tipificacao/categorias/CategoriaList.svelte")}
  />
</Route>
<Route path="/tipificacao/categorias/:id">
  <Lazy
    component={import("./routes/tipificacao/categorias/CategoriaEdit.svelte")}
  />
</Route>

<!-- Relatórios -->
<Route path="/relatorios">
  <Lazy component={import("./routes/relatorios/Relatorios.svelte")} />
</Route>
