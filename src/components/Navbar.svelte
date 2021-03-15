<script lang="typescript">
  import { itens } from "src/models/components/sidebar-list";
  import { active, meta } from "tinro";
  import { sidebarItens } from "../stores/sidebar.store";

  // Listener para mudanças de navegação
  // e atualização do Sidebar
  meta().subscribe((meta) => {
    const urlSplit: string[] = meta.url.split(/\//g);
    const item = urlSplit[1];

    // Envia para a store
    const itensSelecionados = itens.filter((i) => i.agrupador === item);
    sidebarItens.set(itensSelecionados);
  });
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="/tipificacao"
            use:active
          >
            Tipificação
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="/relatorios"
            use:active
          >
            Relatórios
          </a>
        </li>
        <!--
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"> Dropdown </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true">Disabled</a
            >
          </li>
        -->
      </ul>

      <!--
        <form class="d-flex">
          <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      -->
    </div>
  </div>
</nav>

<style>
  .active {
    color: #5a579d !important;
    font-weight: 500;
  }
</style>
