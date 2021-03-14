<script lang="typescript">
  /*
  Componente responsável por carregar as páginas de forma síncrona.
  */
  export let component: any;
</script>

<style>
  #loading {
    margin: 2rem;
  }
</style>

{#await component.then ? component : component()}
  <div id="loading">
    <img src="/loading.gif" alt="Aguardando carregamento">
  </div>
{:then Cmp}
  <svelte:component this={Cmp.default} />
{/await}
