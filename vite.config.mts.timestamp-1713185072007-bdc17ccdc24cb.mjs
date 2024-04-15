// vite.config.mts
import { defineConfig, loadEnv } from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/vite@5.2.2_@types+node@20.11.30_less@4.2.0/node_modules/vite/dist/node/index.js";
import { viteMockServe } from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/vite-plugin-mock@3.0.1_esbuild@0.20.2_mockjs@1.1.0_vite@5.2.2/node_modules/vite-plugin-mock/dist/index.mjs";
import { fileURLToPath } from "url";
import vue from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.2_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.2_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import AutoImport from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Icons from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/vite.js";
import Components from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import IconsResolver from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/resolver.js";
import ElementPlus from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/unplugin-element-plus@0.8.0/node_modules/unplugin-element-plus/dist/vite.mjs";
import { ElementPlusResolver } from "file:///Users/nuanxinpro/WebstormProjects/adminPro/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///Users/nuanxinpro/WebstormProjects/adminPro/vite.config.mts";
var vite_config_default = defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    root,
    base: "./",
    publicDir: fileURLToPath(new URL("./public/", __vite_injected_original_import_meta_url)),
    // 无需处理静态资源位置
    assetsInclude: fileURLToPath(new URL("./src/assets/", __vite_injected_original_import_meta_url)),
    // 需要处理的静态资源位置
    plugins: [
      vue(),
      VueJsx(),
      // 开启mock服务器
      viteMockServe({
        // 如果接口为 /mock/xxx 以 mock 开头就会被拦截响应配置的内容
        mockPath: "mock",
        // 数据模拟需要拦截的请求起始 URL
        enable: true
        // 本地环境是否开启 mock 功能
      }),
      // 开启ElementPlus自动引入CSS
      ElementPlus({}),
      // 自动导入组件
      AutoImport({
        resolvers: [ElementPlusResolver(), IconsResolver()],
        dts: fileURLToPath(new URL("./types/auto-imports.d.ts", __vite_injected_original_import_meta_url))
      }),
      // 自动注册组件
      Components({
        resolvers: [ElementPlusResolver(), IconsResolver()],
        dts: fileURLToPath(new URL("./types/components.d.ts", __vite_injected_original_import_meta_url))
      }),
      Icons({
        autoInstall: true
      })
    ],
    server: {
      host: true,
      port: 9e3,
      open: false,
      cors: true,
      // 允许跨域
      proxy: {
        // 以 /api 开头的接口请求都会被代理到 target
        [env.VITE_API_BASE_URL]: {
          target: "http://localhost:9000",
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_API_BASE_URL}`), "")
        },
        [env.VITE_APP_MOCK_BASEURL]: {
          target: "http://localhost:9000",
          // 改变 Host Header
          changeOrigin: true
          // 发起请求时将 '/api' 替换为 ''
          //rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
        "#": fileURLToPath(new URL("./types", __vite_injected_original_import_meta_url))
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
          index: fileURLToPath(new URL("./index.html", __vite_injected_original_import_meta_url))
        },
        // 静态资源分类打包
        output: {
          format: "esm",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js"
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL251YW54aW5wcm8vV2Vic3Rvcm1Qcm9qZWN0cy9hZG1pblByb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL251YW54aW5wcm8vV2Vic3Rvcm1Qcm9qZWN0cy9hZG1pblByby92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL251YW54aW5wcm8vV2Vic3Rvcm1Qcm9qZWN0cy9hZG1pblByby92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJztcbmltcG9ydCB0eXBlIHsgVXNlckNvbmZpZywgQ29uZmlnRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBWdWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnO1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInO1xuaW1wb3J0IEVsZW1lbnRQbHVzIGZyb20gJ3VucGx1Z2luLWVsZW1lbnQtcGx1cy92aXRlJztcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcbiAgICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTsgLy8gXHU4M0I3XHU1M0Q2XHU1RjUzXHU1MjREXHU1REU1XHU0RjVDXHU3NkVFXHU1RjU1XG4gICAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCByb290KTsgLy8gXHU1MkEwXHU4RjdEXHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm9vdCxcbiAgICAgICAgYmFzZTogJy4vJyxcbiAgICAgICAgcHVibGljRGlyOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcHVibGljLycsIGltcG9ydC5tZXRhLnVybCkpLCAvLyBcdTY1RTBcdTk3MDBcdTU5MDRcdTc0MDZcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTRGNERcdTdGNkVcbiAgICAgICAgYXNzZXRzSW5jbHVkZTogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9hc3NldHMvJywgaW1wb3J0Lm1ldGEudXJsKSksIC8vIFx1OTcwMFx1ODk4MVx1NTkwNFx1NzQwNlx1NzY4NFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NEY0RFx1N0Y2RVxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICB2dWUoKSxcbiAgICAgICAgICAgIFZ1ZUpzeCgpLFxuICAgICAgICAgICAgLy8gXHU1RjAwXHU1NDJGbW9ja1x1NjcwRFx1NTJBMVx1NTY2OFxuICAgICAgICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgICAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2M0E1XHU1M0UzXHU0RTNBIC9tb2NrL3h4eCBcdTRFRTUgbW9jayBcdTVGMDBcdTU5MzRcdTVDMzFcdTRGMUFcdTg4QUJcdTYyRTZcdTYyMkFcdTU0Q0RcdTVFOTRcdTkxNERcdTdGNkVcdTc2ODRcdTUxODVcdTVCQjlcbiAgICAgICAgICAgICAgICBtb2NrUGF0aDogJ21vY2snLCAvLyBcdTY1NzBcdTYzNkVcdTZBMjFcdTYyREZcdTk3MDBcdTg5ODFcdTYyRTZcdTYyMkFcdTc2ODRcdThCRjdcdTZDNDJcdThENzdcdTU5Q0IgVVJMXG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlIC8vIFx1NjcyQ1x1NTczMFx1NzNBRlx1NTg4M1x1NjYyRlx1NTQyNlx1NUYwMFx1NTQyRiBtb2NrIFx1NTI5Rlx1ODBGRFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBcdTVGMDBcdTU0MkZFbGVtZW50UGx1c1x1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NUNTU1xuICAgICAgICAgICAgRWxlbWVudFBsdXMoe30pLFxuICAgICAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU3RUM0XHU0RUY2XG4gICAgICAgICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCksIEljb25zUmVzb2x2ZXIoKV0sXG4gICAgICAgICAgICAgICAgZHRzOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vdHlwZXMvYXV0by1pbXBvcnRzLmQudHMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTZDRThcdTUxOENcdTdFQzRcdTRFRjZcbiAgICAgICAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICAgICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKSwgSWNvbnNSZXNvbHZlcigpXSxcbiAgICAgICAgICAgICAgICBkdHM6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi90eXBlcy9jb21wb25lbnRzLmQudHMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBJY29ucyh7XG4gICAgICAgICAgICAgICAgYXV0b0luc3RhbGw6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIHNlcnZlcjoge1xuICAgICAgICAgICAgaG9zdDogdHJ1ZSxcbiAgICAgICAgICAgIHBvcnQ6IDkwMDAsXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGNvcnM6IHRydWUsIC8vIFx1NTE0MVx1OEJCOFx1OERFOFx1NTdERlxuICAgICAgICAgICAgcHJveHk6IHtcbiAgICAgICAgICAgICAgICAvLyBcdTRFRTUgL2FwaSBcdTVGMDBcdTU5MzRcdTc2ODRcdTYzQTVcdTUzRTNcdThCRjdcdTZDNDJcdTkwRkRcdTRGMUFcdTg4QUJcdTRFRTNcdTc0MDZcdTUyMzAgdGFyZ2V0XG4gICAgICAgICAgICAgICAgW2Vudi5WSVRFX0FQSV9CQVNFX1VSTF06IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDo5MDAwJyxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2Vudi5WSVRFX0FQSV9CQVNFX1VSTH1gKSwgJycpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbZW52LlZJVEVfQVBQX01PQ0tfQkFTRVVSTF06IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDo5MDAwJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gXHU2NTM5XHU1M0Q4IEhvc3QgSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBcdTUzRDFcdThENzdcdThCRjdcdTZDNDJcdTY1RjZcdTVDMDYgJy9hcGknIFx1NjZGRlx1NjM2Mlx1NEUzQSAnJ1xuICAgICAgICAgICAgICAgICAgICAvL3Jld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICAgICAgJyMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vdHlwZXMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgLy8gXHU1MTczXHU5NUVEc291cmNlbWFwXHU2MkE1XHU5NTE5XHU2NUY2XHU0RTBEXHU0RjFBXHU2M0QwXHU3OTNBXHU2RTkwXHU2NTg3XHU0RUY2XHU0RjREXHU3RjZFXG4gICAgICAgICAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgICAgICAgICAgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0XHU2NTg3XHU0RUY2XHU1OTI3XHU1QzBGXHU4RDg1XHU4RkM3IDQwMGtiIFx1NEYxQVx1NjNEMFx1NzkzQVx1OEI2Nlx1NTQ0QVxuICAgICAgICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA0MDAsXG4gICAgICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgLy8gXHU2MjUzXHU1MzA1XHU1MTY1XHU1M0UzXHU2NTg3XHU0RUY2XG4gICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9pbmRleC5odG1sJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NTIwNlx1N0M3Qlx1NjI1M1x1NTMwNVxuICAgICAgICAgICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICdlc20nLFxuICAgICAgICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ3N0YXRpYy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnc3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVCxTQUFTLGNBQWMsZUFBZTtBQUMzVixTQUFTLHFCQUFxQjtBQUU5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLDJCQUEyQjtBQVgySixJQUFNLDJDQUEyQztBQWFoUCxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBNkI7QUFDN0QsUUFBTSxPQUFPLFFBQVEsSUFBSTtBQUN6QixRQUFNLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFDOUIsU0FBTztBQUFBLElBQ0g7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLFdBQVcsY0FBYyxJQUFJLElBQUksYUFBYSx3Q0FBZSxDQUFDO0FBQUE7QUFBQSxJQUM5RCxlQUFlLGNBQWMsSUFBSSxJQUFJLGlCQUFpQix3Q0FBZSxDQUFDO0FBQUE7QUFBQSxJQUN0RSxTQUFTO0FBQUEsTUFDTCxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUE7QUFBQSxNQUVQLGNBQWM7QUFBQTtBQUFBLFFBRVYsVUFBVTtBQUFBO0FBQUEsUUFDVixRQUFRO0FBQUE7QUFBQSxNQUNaLENBQUM7QUFBQTtBQUFBLE1BRUQsWUFBWSxDQUFDLENBQUM7QUFBQTtBQUFBLE1BRWQsV0FBVztBQUFBLFFBQ1AsV0FBVyxDQUFDLG9CQUFvQixHQUFHLGNBQWMsQ0FBQztBQUFBLFFBQ2xELEtBQUssY0FBYyxJQUFJLElBQUksNkJBQTZCLHdDQUFlLENBQUM7QUFBQSxNQUM1RSxDQUFDO0FBQUE7QUFBQSxNQUVELFdBQVc7QUFBQSxRQUNQLFdBQVcsQ0FBQyxvQkFBb0IsR0FBRyxjQUFjLENBQUM7QUFBQSxRQUNsRCxLQUFLLGNBQWMsSUFBSSxJQUFJLDJCQUEyQix3Q0FBZSxDQUFDO0FBQUEsTUFDMUUsQ0FBQztBQUFBLE1BQ0QsTUFBTTtBQUFBLFFBQ0YsYUFBYTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxJQUNMO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQSxNQUNOLE9BQU87QUFBQTtBQUFBLFFBRUgsQ0FBQyxJQUFJLGlCQUFpQixHQUFHO0FBQUEsVUFDckIsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLElBQUksaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0FBQUEsUUFDL0U7QUFBQSxRQUNBLENBQUMsSUFBSSxxQkFBcUIsR0FBRztBQUFBLFVBQ3pCLFFBQVE7QUFBQTtBQUFBLFVBRVIsY0FBYztBQUFBO0FBQUE7QUFBQSxRQUdsQjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDSCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLFFBQ3BELEtBQUssY0FBYyxJQUFJLElBQUksV0FBVyx3Q0FBZSxDQUFDO0FBQUEsTUFDMUQ7QUFBQSxJQUNKO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQSxNQUVILFdBQVc7QUFBQTtBQUFBLE1BRVgsdUJBQXVCO0FBQUEsTUFDdkIsZUFBZTtBQUFBO0FBQUEsUUFFWCxPQUFPO0FBQUEsVUFDSCxPQUFPLGNBQWMsSUFBSSxJQUFJLGdCQUFnQix3Q0FBZSxDQUFDO0FBQUEsUUFDakU7QUFBQTtBQUFBLFFBRUEsUUFBUTtBQUFBLFVBQ0osUUFBUTtBQUFBLFVBQ1IsZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsUUFDcEI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
