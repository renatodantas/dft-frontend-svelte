/**
 * Interface que representa uma lista paginada pelo backend.
 */
export interface Pageable<T> {
  totalPages: number;
  totalElements: number;
  size: number;
  content: T[],
  number: number, 
  // sort: {
  //   sorted: boolean,
  //   unsorted: boolean,
  //   empty: boolean
  // },
  first: boolean,
  last: boolean,
  empty: boolean
  }