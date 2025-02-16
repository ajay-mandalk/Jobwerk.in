// src/types/navbar.ts
export interface MenuItem {
    title: string;
    path: string;
    badge?: boolean;
    children?: MenuItem[];
  }
