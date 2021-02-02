import { router } from "tinro";

export function configRouter() {
  // Navega para o topo ao mudar de rota
  router.subscribe(() => window.scrollTo(0, 0));
  // Ativa navegação por hash
  router.mode.hash();
}
