import axios from "axios";
import type { Pageable, PageableParams } from "src/models/components/pageable";
import type { CategoriaServico } from "src/models/domain/categoria-servico";
import { derived, writable } from "svelte/store";

export const paginas = writable<Pageable<CategoriaServico> | null>(null);
export const categorias = derived(paginas, $paginacao => $paginacao?.content || []);
export const categoriaSelecionada = writable<CategoriaServico>({});

export async function loadCategorias(paginacao: PageableParams): Promise<void> {
  console.log('[loadCategorias] GET', paginacao);
  
  try {
    const response = await axios.get<Pageable<CategoriaServico>>(
      'http://localhost:5000/api/categorias-servico', {
        withCredentials: true,
        params: paginacao
      });
    paginas.set(response.data);
  
  } catch (error) {
    alert('Deu erro!');
    console.log(error);
  }
}
