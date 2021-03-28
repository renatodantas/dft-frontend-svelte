import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE, DEFAULT_SORT_ORDER, PageableParams } from "src/models/components/pagination";
import { router } from "tinro";

/**
 * Parser para os parâmetros de query da URL para
 * o formato a ser enviado na requisição da API,
 * ignorando os valores default.
 * 
 * @param params parâmetros da query string (opcional);
 *          caso não seja fornecido, será obtido automaticamente
 *          do componente de router
 * @returns {PageableParams} parâmetros para envio na requisição
 */
export function parseQueryParams(_params?: Record<string, string>): PageableParams {
  const params = _params || router.location.query.get() as Record<string, string>;
  const pageable: PageableParams = {};
  
  const page = parseInt(params["page"]);
  if (page && page !== DEFAULT_PAGE_NUMBER) {
    pageable.page = page;
  }

  const size = parseInt(params["size"]);
  if (size && size !== DEFAULT_PAGE_SIZE) {
    pageable.size = size;
  }

  const order = params['order'];
  if (order !== DEFAULT_SORT_ORDER) {
    pageable.order = order;
  }

  const sort = params['sort'];
  if (sort) {
    pageable.sort = sort;
  }

  return pageable;
}