<script lang="ts">
  /*
  Componente responsável por carregar as páginas de forma síncrona.
  */
  export let component: any;
</script>

{#await component.then ? component : component()}
  <div id="loading">
    <img src="/loading.gif" alt="Aguardando carregamento" />
  </div>
{:then Cmp}
  <svelte:component this={Cmp.default} />
{/await}

<style>
  #loading {
    margin: 2rem;
  }
</style>
