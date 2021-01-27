<script>
  import Lazy from "@utils/Lazy.svelte";
  import { Route } from "tinro";
  import TipificacaoRoute from "./tipificacao/TipificacaoRoute.svelte";
</script>

<div class="col-md-9">
  <Route path="/">
    <Lazy component={import("./Home.svelte")} />
  </Route>

  <TipificacaoRoute />
</div>

<!--
  <Route path="/tipificacao/categorias">
  <Lazy
    component={import('./tipificacao/categorias/CategoriaList.svelte')} />
</Route>
<Route path="/tipificacao/categorias/:id">
  <Lazy
    component={import('./tipificacao/categorias/CategoriaEdit.svelte')} />
</Route> 
-->
