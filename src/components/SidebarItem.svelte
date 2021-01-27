<script>
  export let href;
  export let active = false;
</script>

<li class="nav-item">
  <a class="nav-link d-inline-flex text-white" class:active {href}>
    <div class="icone">
      <slot name="icon" />
    </div>
    <div>
      <slot />
    </div>
  </a>
</li>

<style>
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
