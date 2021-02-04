<script lang="typescript">
  import { Route } from "tinro";
  import Lazy from "./utils/Lazy.svelte";
</script>

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
