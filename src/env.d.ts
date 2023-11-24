/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_CLIENT_ID: string;
  readonly SECRET_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
