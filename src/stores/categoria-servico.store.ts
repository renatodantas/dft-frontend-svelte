import axios from "axios";
import type { Pageable, PageableParams } from "src/models/components/pagination";
import type { CategoriaServico } from "src/models/domain/categoria-servico";
import { writable } from "svelte/store";

export const categorias = writable<CategoriaServico[]>([]);
export const categoriaSelecionada = writable<CategoriaServico>({});

export async function loadCategorias(paginacao?: PageableParams): Promise<void> {
  console.log('[loadCategorias] GET', paginacao);
  
  try {
    const response = await axios.get<Pageable<CategoriaServico>>(
      'http://localhost:5000/api/categorias-servico', {
        withCredentials: true,
        params: paginacao
      });
    categorias.set(response.data.content);
  } catch (error) {
    alert('Deu erro!');
    console.log(error);
  }
}
