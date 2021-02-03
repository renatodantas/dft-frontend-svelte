<script lang="typescript">
  import { Route } from "tinro";
  import Navbar from "./components/Navbar.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import type { SidebarItem } from "./models/sidebar-item";
  import { configRouter } from "./route-config";
  import Routes from "./Routes.svelte";

  // Configura o router com as opções ideais para a aplicação
  configRouter();

  // Itens do sidebar, enviados pelo Navbar
  let sidebarItens: SidebarItem[] = [];
</script>

<Route path="/*">
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-3 bg-gradient p-0" id="sidebarMenu">
        <Sidebar itens={sidebarItens} />
      </div>
      <div class="col p-0">
        <Navbar on:exibir={(event) => (sidebarItens = event.detail.itens)} />
        <Routes />
      </div>
    </div>
  </div>
</Route>

<style>
  #sidebarMenu {
    background-color: #43408f !important;
  }
</style>
