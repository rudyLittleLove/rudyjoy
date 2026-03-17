var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
var path = __require("path");
var vite_config_default = defineConfig({
  define: {
    "process.env": {
      "BASE_URL": "/"
    }
  },
  server: {
    host: "127.0.0.1"
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: "Icon"
        }),
        ElementPlusResolver()
      ]
    }),
    Components({
      resolvers: [
        IconsResolver({
          enabledCollections: ["ep"]
        }),
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("D:\\workspace\\website-vue3", "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5cclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuXHJcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcclxuXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuXHJcblxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBkZWZpbmU6IHtcclxuICAgICdwcm9jZXNzLmVudic6IHtcclxuICAgICAgJ0JBU0VfVVJMJzpcIi9cIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiAnMTI3LjAuMC4xJ1xyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU1NkZFXHU2ODA3XHU3RUM0XHU0RUY2XHJcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XHJcbiAgICAgICAgICBwcmVmaXg6ICdJY29uJyxcclxuICAgICAgICB9KSxcclxuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKClcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NkNFOFx1NTE4Q1x1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxyXG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgZW5hYmxlZENvbGxlY3Rpb25zOiBbJ2VwJ10sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICAgIEljb25zKHtcclxuICAgICAgYXV0b0luc3RhbGw6IHRydWUsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIC8vXHU4QkJFXHU3RjZFXHU1MjJCXHU1NDBEXHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKFwiRDpcXFxcd29ya3NwYWNlXFxcXHdlYnNpdGUtdnVlM1wiLCAnLi9zcmMnKSxcclxuICAgICAgLy8gJ0Bhc3NldHMnOiBwYXRoLnJlc29sdmUoXCJEOlxcXFx3b3Jrc3BhY2VcXFxcd2Vic2l0ZS12dWUzXCIsICcuL3NyYy9hc3NldHMnKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBRWhCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBRXBDLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUUxQixJQUFNLE9BQU8sVUFBUTtBQUtyQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDYixZQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsUUFFVCxjQUFjO0FBQUEsVUFDWixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsUUFDRCxvQkFBb0I7QUFBQSxNQUN0QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBRVQsY0FBYztBQUFBLFVBQ1osb0JBQW9CLENBQUMsSUFBSTtBQUFBLFFBQzNCLENBQUM7QUFBQSxRQUNELG9CQUFvQjtBQUFBLE1BQ3RCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BRUwsS0FBSyxLQUFLLFFBQVEsK0JBQStCLE9BQU87QUFBQSxJQUUxRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
