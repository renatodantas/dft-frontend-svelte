import { Writable, writable } from "svelte/store";
import type { SidebarItem } from "../models/sidebar-item";

export const sidebarItens: Writable<SidebarItem[]> = writable<SidebarItem[]>([]);
