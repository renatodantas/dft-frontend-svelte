import type { SidebarItem } from "models/sidebar-item";
import { Writable, writable } from "svelte/store";

export const sidebarItens: Writable<SidebarItem[]> = writable<SidebarItem[]>([]);
