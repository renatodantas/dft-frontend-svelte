<script>
  import { onMount } from "svelte";

  onMount(() => {});
</script>

<div class="container">
  <div class="card card-titulo shadow-sm my-4">
    <div class="card-body d-flex justify-content-between">
      <h5 class="mt-1">Categorias de Serviço</h5>
      <a class="btn btn-primary btn-sm" href="/tipificacao/categorias/novo"
        >Incluir</a
      >
    </div>
  </div>

  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Descrição</th>
        <th>Ativo</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Teste 1</td>
        <td>Sim</td>
        <td>[botões]</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Teste 2</td>
        <td>Não</td>
        <td>[botões]</td>
      </tr>
    </tbody>
  </table>
</div>
