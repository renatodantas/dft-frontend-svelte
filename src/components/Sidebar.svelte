<script lang="typescript">
  import type { SidebarItem } from "../models/sidebar-item";

  export let itens: SidebarItem[];
</script>

<div id="sidebar-logo" class="align-bottom pt-2">
  <a href="/">
    <img src="/dft-logo.png" alt="Logotipo" height="40" />
  </a>
</div>

<ul class="nav flex-column mt-4">
  {#each itens as item}
    <li class="nav-item">
      <a
        class="nav-link d-inline-flex text-white"
        class:active={item.href === "#"}
        href={item.href}
      >
        <div class="icone">
          <i class={item.icone} />
        </div>
        <div>
          {item.descricao}
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  #sidebar-logo {
    height: 55px;
    background-color: #43408f;
  }

  #sidebar-logo > img {
    margin-left: 10px;
  }

  a.nav-link {
    padding-bottom: 0;
    color: rgb(169, 174, 226);
    font-size: 0.9rem;
  }
  a.active {
    color: white;
  }

  .icone {
    padding-right: 10px;
  }
</style>
