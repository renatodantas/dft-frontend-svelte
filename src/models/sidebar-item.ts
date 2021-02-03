/**
 * Interface que representa um item do sidebar.
 */
export interface SidebarItem {
  /**
   * Link para encaminhamento
   */
  href: string;

  /**
   * Descrição do item
   */
  descricao: string;
  
  /**
   * Ícone do item
   */
  icone: string;
}