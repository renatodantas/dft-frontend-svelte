import { router } from "tinro";
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, DEFAULT_SORT_ORDER, PageableParams, RecordParams } from "../models/components/pageable";

/**
 * Parser para os parâmetros de query da URL para
 * o formato a ser enviado na requisição da API,
 * ignorando os valores default.
 * 
 * Os novos parâmetros serão analisados e adicionados
 * aos já existentes.
 * 
 * @param newParams novos parâmetros para a query string (opcional);
 *          caso não seja fornecido, será obtido automaticamente
 *          do componente de router
 * @returns {PageableParams} parâmetros para envio na requisição
 */
export function parseQueryParams(newParams: Record<string, string> = {}): PageableParams | RecordParams {
  const routerParams = router.location.query.get() as Record<string, string>
  const pageable: PageableParams = { ...routerParams, ...newParams };

  if (pageable.page == DEFAULT_PAGE_NUMBER) {
    delete pageable.page;
  }

  if (pageable.size == DEFAULT_PAGE_SIZE) {
    delete pageable.size;
  }

  if (pageable.order == DEFAULT_SORT_ORDER) {
    delete pageable.order;
  }

  return pageable;
}