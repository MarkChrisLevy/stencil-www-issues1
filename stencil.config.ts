import {Config} from "@stencil/core";

export const config: Config = {
    namespace: "App",
    srcIndexHtml: "src/index.html",
    globalScript: "src/global.ts",
    devServer: {
        openBrowser: false,
        reloadStrategy: "pageReload",
        port: 9001
    },
    outputTargets: [
        {type: "www", serviceWorker: null, baseUrl: "/"}
    ]
}

