<script lang="typescript">
  /*
  Componente responsável por carregar as páginas de forma síncrona.
  */
  export let component: any;
</script>

{#await component.then ? component : component()}
  Carregando...
{:then Cmp}
  <svelte:component this={Cmp.default} />
{/await}
