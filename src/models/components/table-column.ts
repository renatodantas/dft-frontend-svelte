/**
 * Parâmetro de exibição das colunas de uma tabela.
 */
export type Column = {
  /**
   * Texto a ser exibido na coluna
   */
  label: string;
  /**
   * Atributo equivalente no objeto passado como parâmetro
   */
  property?: string;
  /**
   * Se exibe a 
   */
  sortable?: boolean;
};