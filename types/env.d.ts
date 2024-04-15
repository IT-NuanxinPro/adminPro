/// <reference types="vite/client" />
interface ImportMetaEnv {
    // 每次添加一个环境变量都需要在这里添加对应的类型声明
    readonly VITE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
