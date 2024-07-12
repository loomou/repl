import i,{transform as o}from"https://esm.sh/@swc/wasm-web";function u(){return{name:"react-plugin",async buildStart(){await i()},async transform(s,e){let r;try{r=await o(s,{filename:e,minify:!1,sourceMaps:!0,swcrc:!1,configFile:!1,jsc:{target:"es2020",parser:{syntax:"typescript",tsx:!0},transform:{useDefineForClassFields:!0,react:{runtime:"automatic",importSource:"react",refresh:!0,development:!0}}}})}catch(n){this.error(n);return}let a=`if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("${e}");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "@react-refresh";

${r.code}

window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("${e}", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("${e}", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});
`,t;return r.map&&(t=JSON.parse(r.map)),{code:a,map:t}}}}export{u as default};
