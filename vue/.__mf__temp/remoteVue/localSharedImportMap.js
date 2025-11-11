
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "pinia": async () => {
          let pkg = await import("__mf__virtual/remoteVue__prebuild__pinia__prebuild__.js");
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/remoteVue__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "vue": async () => {
          let pkg = await import("__mf__virtual/remoteVue__prebuild__vue__prebuild__.js");
            return pkg;
        }
      ,
        "vue-router": async () => {
          let pkg = await import("__mf__virtual/remoteVue__prebuild__vue_mf_2_router__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "pinia": {
            name: "pinia",
            version: "3.0.4",
            scope: ["default"],
            loaded: false,
            from: "remoteVue",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"pinia"}' must be provided by host`);
              }
              usedShared["pinia"].loaded = true
              const {"pinia": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^3.0.4",
              
            }
          }
        ,
          "react": {
            name: "react",
            version: "18.3.1",
            scope: ["default"],
            loaded: false,
            from: "remoteVue",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^18.3.1",
              
            }
          }
        ,
          "vue": {
            name: "vue",
            version: "3.5.22",
            scope: ["default"],
            loaded: false,
            from: "remoteVue",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"vue"}' must be provided by host`);
              }
              usedShared["vue"].loaded = true
              const {"vue": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^3.5.22",
              
            }
          }
        ,
          "vue-router": {
            name: "vue-router",
            version: "4.6.3",
            scope: ["default"],
            loaded: false,
            from: "remoteVue",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"vue-router"}' must be provided by host`);
              }
              usedShared["vue-router"].loaded = true
              const {"vue-router": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^4.6.3",
              
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      