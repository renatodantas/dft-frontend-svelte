import axios from "axios";
import { derived, writable } from "svelte/store";
import type { Pageable, PageableParams } from "../models/components/pageable";
import type { CategoriaServico } from "../models/domain/categoria-servico";

export const paginas = writable<Pageable<CategoriaServico> | null>(null);
export const categorias = derived(paginas, $paginacao => $paginacao?.content || []);
export const categoriaSelecionada = writable<CategoriaServico>({});

const API = 'http://localhost:5000/api/categorias-servico';

export function loadCategorias(paginacao: PageableParams): void {
  console.log('[loadCategorias] GET', paginacao);

  axios.get<Pageable<CategoriaServico>>(API, {
    withCredentials: true,
    params: paginacao
  })
    .then(response => paginas.set(response.data))
    .catch(error => {
      alert('Deu erro!');
      console.log(error);
    });
}

export function loadCategoria(id: number): void {
  console.log('[loadCategoria] GET', id);

  axios.get<CategoriaServico>(`${API}/${id}`, { withCredentials: true })
    .then(response => categoriaSelecionada.set(response.data))
    .catch(error => {
      alert('Deu erro!');
      console.log(error);
    });
}

export function removeCategoria(id: number): Promise<unknown> {
  return axios.delete(`${API}/${id}`, { withCredentials: true })
    .catch(error => {
      alert('Deu erro!');
      console.log(error);
    });
}