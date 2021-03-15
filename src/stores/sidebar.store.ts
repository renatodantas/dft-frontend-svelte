import { Writable, writable } from "svelte/store";
import type { SidebarItem } from "../models/components/sidebar-item";

export const sidebarItens: Writable<SidebarItem[]> = writable<SidebarItem[]>([]);
