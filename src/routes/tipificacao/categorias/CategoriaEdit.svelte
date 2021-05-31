<script lang="ts">
  import { onMount } from "svelte";
  import { meta } from "tinro";
  import {
    categoriaSelecionada,
    loadCategoria,
  } from "../../../stores/categoria-servico.store";

  const route = meta();

  // Carrega categoria pelo ID ao iniciar
  onMount(() => {
    categoriaSelecionada.set({});

    const id: string = route.params.id;
    if (id !== "novo") {
      loadCategoria(Number(id));
    }
  });
</script>

<div class="container">
  <div class="card card-titulo shadow-sm my-4">
    <div class="card-body d-flex justify-content-between align-items-center">
      <strong>
        {$route.params.id === "novo" ? "Criar" : "Alterar"} Categoria
      </strong>
      <a class="btn btn-primary btn-sm" href="/tipificacao/categorias/novo">
        Incluir
      </a>
    </div>
  </div>

  Categoria: {$categoriaSelecionada.descricao}
</div>
