<script lang="typescript">
  import { createEventDispatcher } from "svelte";

  export let titulo: string;
  export let mensagem: string;
  export let labelConfirmar = "Confirmar";
  export let labelCancelar = "Cancelar";

  const dispatch = createEventDispatcher();
  function confirmar(sim: boolean) {
    dispatch(sim ? "confirm" : "cancel");
  }
</script>

<div
  class="modal"
  tabindex="-1"
  id="modalConfirm"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{titulo}</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <p>{mensagem}</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary btn-sm"
          data-bs-dismiss="modal"
          on:click={() => confirmar(false)}
        >
          {labelCancelar}
        </button>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-bs-dismiss="modal"
          on:click={() => confirmar(true)}
        >
          {labelConfirmar}
        </button>
      </div>
    </div>
  </div>
</div>
