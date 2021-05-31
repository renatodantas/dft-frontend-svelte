<script lang="ts">
  import { router } from "tinro";
  import type { CardLink } from "../models/components/card-link";

  export let itens: CardLink[] = [];

  function abrir(url: string) {
    if (url === "#") return;
    router.goto(url);
  }
</script>

<div class="container mt-4 w-auto">
  <div class="row row-cols-3">
    {#each itens as item}
      <div class="col mb-4">
        <div
          class="card shadow w-100 h-100"
          on:click|preventDefault={() => abrir(item.url)}
        >
          <h6 class="card-header">{item.titulo}</h6>
          <div class="card-body">
            {item.descricao}
          </div>
          <div class="card-footer text-center">
            <button
              class="btn btn-sm btn-outline-primary"
              class:disabled={item.url === "#"}
            >
              Visitar
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .col {
    height: 12rem;
  }

  .card:hover {
    background-color: rgba(203, 201, 240, 0.3);
    cursor: pointer;
  }
</style>
