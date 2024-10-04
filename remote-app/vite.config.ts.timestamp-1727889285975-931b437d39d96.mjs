// vite.config.ts
import { federation } from "file:///C:/Users/T938377/microfrontend/remote-app/node_modules/.pnpm/@module-federation+vite@1.0.0/node_modules/@module-federation/vite/lib/index.cjs";
import react from "file:///C:/Users/T938377/microfrontend/remote-app/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.2.10/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { writeFileSync } from "fs";
import { defineConfig, loadEnv } from "file:///C:/Users/T938377/microfrontend/remote-app/node_modules/.pnpm/vite@5.2.10/node_modules/vite/dist/node/index.js";

// package.json
var dependencies = {
  react: "^18.3.1",
  "react-dom": "^18.3.1"
};

// vite.config.ts
var vite_config_default = defineConfig(({ mode }) => {
  const selfEnv = loadEnv(mode, process.cwd());
  return {
    server: {
      fs: {
        allow: [".", "../shared"]
      }
    },
    build: {
      target: "chrome89"
    },
    plugins: [
      {
        name: "generate-environment",
        options: function() {
          console.info("selfEnv", selfEnv);
          writeFileSync("./src/environment.ts", `export default ${JSON.stringify(selfEnv, null, 2)};`);
        }
      },
      federation({
        filename: "remoteEntry.js",
        name: "remoteApp",
        exposes: {
          "./third-app": "./src/App.tsx"
        },
        remotes: {},
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true
          }
        }
      }),
      react()
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVDkzODM3N1xcXFxtaWNyb2Zyb250ZW5kXFxcXHJlbW90ZS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFQ5MzgzNzdcXFxcbWljcm9mcm9udGVuZFxcXFxyZW1vdGUtYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9UOTM4Mzc3L21pY3JvZnJvbnRlbmQvcmVtb3RlLWFwcC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZlZGVyYXRpb24gfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vdml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgZGVwZW5kZW5jaWVzIH0gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG5cdGNvbnN0IHNlbGZFbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpO1xuXHRyZXR1cm4ge1xuXHRcdHNlcnZlcjoge1xuXHRcdFx0ZnM6IHtcblx0XHRcdFx0YWxsb3c6IFsnLicsICcuLi9zaGFyZWQnXSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRidWlsZDoge1xuXHRcdFx0dGFyZ2V0OiAnY2hyb21lODknLFxuXHRcdH0sXG5cdFx0cGx1Z2luczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnZ2VuZXJhdGUtZW52aXJvbm1lbnQnLFxuXHRcdFx0XHRvcHRpb25zOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdzZWxmRW52Jywgc2VsZkVudik7XG5cdFx0XHRcdFx0d3JpdGVGaWxlU3luYygnLi9zcmMvZW52aXJvbm1lbnQudHMnLCBgZXhwb3J0IGRlZmF1bHQgJHtKU09OLnN0cmluZ2lmeShzZWxmRW52LCBudWxsLCAyKX07YCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0ZmVkZXJhdGlvbih7XG5cdFx0XHRcdGZpbGVuYW1lOiAncmVtb3RlRW50cnkuanMnLFxuXHRcdFx0XHRuYW1lOiAncmVtb3RlQXBwJyxcblx0XHRcdFx0ZXhwb3Nlczoge1xuXHRcdFx0XHRcdCcuL3RoaXJkLWFwcCc6ICcuL3NyYy9BcHAudHN4Jyxcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVtb3Rlczoge30sXG5cdFx0XHRcdHNoYXJlZDoge1xuXHRcdFx0XHRcdHJlYWN0OiB7XG5cdFx0XHRcdFx0XHRyZXF1aXJlZFZlcnNpb246IGRlcGVuZGVuY2llcy5yZWFjdCxcblx0XHRcdFx0XHRcdHNpbmdsZXRvbjogdHJ1ZSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSksXG5cdFx0XHRyZWFjdCgpLFxuXHRcdF0sXG5cdH07XG59KTtcbiIsICJ7XG5cdFwibmFtZVwiOiBcInZpdGUtcmVhY3QtbWljcm9mcm9udGVuZHNfcmVtb3RlXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMC4wXCIsXG5cdFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwiZGV2XCI6IFwidml0ZSAtLXBvcnQgNDE3NVwiLFxuXHRcdFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxuXHRcdFwicHJldmlld1wiOiBcIm5wbSBydW4gYnVpbGQgJiYgdml0ZSBwcmV2aWV3IC0tcG9ydCA0MTc1XCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwicmVhY3RcIjogXCJeMTguMy4xXCIsXG5cdFx0XCJyZWFjdC1kb21cIjogXCJeMTguMy4xXCJcblx0fSxcblx0XCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiQG1vZHVsZS1mZWRlcmF0aW9uL3ZpdGVcIjogXCIxLjAuMFwiLFxuXHRcdFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuNzlcIixcblx0XHRcIkB0eXBlcy9yZWFjdC1kb21cIjogXCIxOC4yLjI1XCIsXG5cdFx0XCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIjQuMi4xXCIsXG5cdFx0XCJ0eXBlc2NyaXB0XCI6IFwiNS40LjVcIixcblx0XHRcInZpdGVcIjogXCI1LjIuMTBcIlxuXHR9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVULFNBQVMsa0JBQWtCO0FBQ2xWLE9BQU8sV0FBVztBQUNsQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLGNBQWMsZUFBZTs7O0FDTXJDLG1CQUFnQjtBQUFBLEVBQ2YsT0FBUztBQUFBLEVBQ1QsYUFBYTtBQUNkOzs7QURORCxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN6QyxRQUFNLFVBQVUsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBQzNDLFNBQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNQLElBQUk7QUFBQSxRQUNILE9BQU8sQ0FBQyxLQUFLLFdBQVc7QUFBQSxNQUN6QjtBQUFBLElBQ0Q7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNUO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUjtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sU0FBUyxXQUFZO0FBQ3BCLGtCQUFRLEtBQUssV0FBVyxPQUFPO0FBQy9CLHdCQUFjLHdCQUF3QixrQkFBa0IsS0FBSyxVQUFVLFNBQVMsTUFBTSxDQUFDLENBQUMsR0FBRztBQUFBLFFBQzVGO0FBQUEsTUFDRDtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1IsZUFBZTtBQUFBLFFBQ2hCO0FBQUEsUUFDQSxTQUFTLENBQUM7QUFBQSxRQUNWLFFBQVE7QUFBQSxVQUNQLE9BQU87QUFBQSxZQUNOLGlCQUFpQixhQUFhO0FBQUEsWUFDOUIsV0FBVztBQUFBLFVBQ1o7QUFBQSxRQUNEO0FBQUEsTUFDRCxDQUFDO0FBQUEsTUFDRCxNQUFNO0FBQUEsSUFDUDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
