<script>
  import SidebarItem from "./SidebarItem.svelte";
</script>

<div id="sidebar-logo" class="align-bottom pt-2">
  <img src="/dft-logo.png" alt="Logotipo" height="40" />
</div>

<ul class="nav flex-column mt-4">
  <SidebarItem href="/tipificacao/categorias">
    <i slot="icone" class="bi-arrow-right-square" />
    Categoria de Serviços
  </SidebarItem>
  <SidebarItem>
    <i slot="icone" class="bi-arrow-right-square" />
    Órgãos
  </SidebarItem>
  <SidebarItem>
    <i slot="icone" class="bi-arrow-right-square" />
    Unidades
  </SidebarItem>
  <SidebarItem>
    <i slot="icone" class="bi-arrow-right-square" />
    Entregas
  </SidebarItem>
  <SidebarItem>
    <i slot="icone" class="bi-arrow-right-square" />
    Indic. de Produtividade
  </SidebarItem>
</ul>

<style>
  #sidebar-logo {
    height: 55px;
    background-color: #43408f;
  }

  #sidebar-logo > img {
    margin-left: 10px;
  }

  /*
  #sidebarMenu {
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  }

  .navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: #3c356a;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
  }
  a {
    color: white;
    font-size: 0.8rem;
  }
  */
</style>
