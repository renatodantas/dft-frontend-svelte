<script lang="typescript">
  import { Route } from "tinro";
  import Navbar from "./components/Navbar.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Router from "./Router.svelte";
  import { configRouter } from "./routes/route-config";

  // Configura o router com as opções ideais para a aplicação
  configRouter();
</script>

<Route path="/*">
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-3 bg-gradient p-0" id="sidebarMenu">
        <Sidebar />
      </div>
      <div class="col p-0">
        <Navbar />
        <Router />
      </div>
    </div>
  </div>
</Route>

<style>
  #sidebarMenu {
    background-color: #43408f !important;
  }
</style>
