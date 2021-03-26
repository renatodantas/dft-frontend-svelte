import axios from "axios";
import type { Pageable } from "src/models/components/pageable";
import type { CategoriaServico } from "src/models/domain/categoria-servico";
import { writable } from "svelte/store";

type Paginacao = {
  sort?: string,
  order?: string,
  page?: number,
  size?: number,
}

export const categorias = writable<CategoriaServico[]>([]);
export const categoriaSelecionada = writable<CategoriaServico>({});

export async function loadCategorias(paginacao?: Paginacao): Promise<void> {
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
