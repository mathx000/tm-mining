/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REVENDA_FORMSPREE_ENDPOINT?: string;
  readonly VITE_PRODUTO_FORMSPREE_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
