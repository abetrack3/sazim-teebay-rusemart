/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APOLLO_GRAPHQL_API_ENDPOINT: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
