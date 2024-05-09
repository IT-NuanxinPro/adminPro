import { defineConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import type { UserConfig, ConfigEnv } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import ElementPlus from 'unplugin-element-plus/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const root = process.cwd(); // 获取当前工作目录
    const env = loadEnv(mode, root); // 加载环境变量
    return {
        root,
        base: './',
        publicDir: fileURLToPath(new URL('./public/', import.meta.url)), // 无需处理静态资源位置
        assetsInclude: fileURLToPath(new URL('./src/assets/', import.meta.url)), // 需要处理的静态资源位置
        plugins: [
            vue(),
            VueJsx(),
            // 开启mock服务器
            viteMockServe({
                // 如果接口为 /mock/xxx 以 mock 开头就会被拦截响应配置的内容
                mockPath: 'mock', // 数据模拟需要拦截的请求起始 URL
                enable: true // 本地环境是否开启 mock 功能
            }),
            // 开启ElementPlus自动引入CSS
            ElementPlus({}),
            // 自动导入组件
            AutoImport({
                imports: ['vue', 'vue-router', 'pinia'],
                eslintrc: {
                    enabled: true
                },
                resolvers: [ElementPlusResolver(), IconsResolver()],
                dts: fileURLToPath(new URL('./types/auto-imports.d.ts', import.meta.url))
            }),
            // 自动注册组件
            Components({
                resolvers: [ElementPlusResolver(), IconsResolver()],
                dts: fileURLToPath(new URL('./types/components.d.ts', import.meta.url))
            }),
            Icons({
                autoInstall: true
            })
        ],
        server: {
            host: true,
            port: 9000,
            open: false,
            cors: true, // 允许跨域
            proxy: {
                // 以 /api 开头的接口请求都会被代理到 target
                [env.VITE_API_BASE_URL]: {
                    target: 'http://localhost:9000',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(new RegExp(`^${env.VITE_API_BASE_URL}`), '')
                },
                [env.VITE_APP_MOCK_BASEURL]: {
                    target: 'http://localhost:9000',
                    // 改变 Host Header
                    changeOrigin: true
                    // 发起请求时将 '/api' 替换为 ''
                    //rewrite: (path) => path.replace(/^\/api/, ""),
                }
            }
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '#': fileURLToPath(new URL('./types', import.meta.url))
            }
        },
        build: {
            // 关闭sourcemap报错时不会提示源文件位置
            sourcemap: false,
            // 打包后的文件大小超过 400kb 会提示警告
            chunkSizeWarningLimit: 400,
            rollupOptions: {
                // 打包入口文件
                input: {
                    index: fileURLToPath(new URL('./index.html', import.meta.url))
                },
                // 静态资源分类打包
                output: {
                    format: 'esm',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js'
                }
            }
        }
    };
});
