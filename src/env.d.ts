/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@clerk/astro/env" />
interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }

  interface Post {
    id: number;
    attributes: {
      title: string;
      excerpt: string;
      content: string;
      author: {
        name: string;
        avatar: string;
      };
      coverImage: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      publishedAt: string; // Or Date
    };
  }