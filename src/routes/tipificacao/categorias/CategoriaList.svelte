<script>
</script>

<style>
  .card-body {
    height: 3rem;
  }
</style>

<div class="container">
  <div class="card card-titulo shadow-sm my-4">
    <div class="card-body d-flex justify-content-between align-items-center">
      <strong>Categorias de Serviço</strong>
      <a class="btn btn-primary btn-sm" href="/tipificacao/categorias/novo">
        Incluir
      </a>
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
        <td class="text-center">
          <div class="btn-group" role="group" aria-label="Ações">
            <button class="btn btn-sm btn-outline-dark" title="Editar">
              <i class="bi-pencil-square" />
            </button>
            <button class="btn btn-sm btn-outline-danger" title="Excluir">
              <i class="bi-trash" />
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Teste 2</td>
        <td>Não</td>
        <td class="text-center">
          <div class="btn-group" role="group" aria-label="Ações">
            <button class="btn btn-sm btn-outline-dark" title="Editar">
              <i class="bi-pencil-square" />
            </button>
            <button class="btn btn-sm btn-outline-danger" title="Excluir">
              <i class="bi-trash" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
