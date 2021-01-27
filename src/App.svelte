<script>
  import { router } from "tinro";
  import Navbar from "./components/Navbar.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Routes from "./routes/Routes.svelte";

  // Navega para o topo ao mudar de rota
  router.subscribe(() => window.scrollTo(0, 0));
</script>

<div class="container-fluid h-100">
  <div class="row h-100">
    <div class="col-3 bg-gradient p-0" id="sidebarMenu">
      <Sidebar />
    </div>
    <div class="col p-0">
      <Navbar />
      <Routes />
    </div>
  </div>
</div>

<style>
  #sidebarMenu {
    background-color: #43408f !important;
  }
</style>
