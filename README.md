# Next.js + Turborepo optional dependencies reproduction

A simple setup where `page.tsx` imports `@node-rs/argon2` with Turborepo. Next.js will error when you visit `localhost:3000/`.

```
npm install
npm run dev
```

<details>
  <summary>Full Error</summary>
<pre><code>Error: Cannot find module '@node-rs/argon2-wasm32-wasi'
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:604:27
    at Object.<anonymous> (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:607:15)
    at [project]/node_modules/@node-rs/argon2/index.js [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:628:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:44:151
    at [project]/app/page.tsx [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:59:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at Module.default (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:63:20)
    at tree.children.page (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:3729:168)
    at eq (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:402270)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:6514
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:133:36
    at NoopContextManager.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NoopTracer.startActiveSpan (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18093)
    at ProxyTracer.startActiveSpan (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18854)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:122:103
    at NoopContextManager.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NextTracerImpl.trace (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:122:28)
    at rc (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:6395)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:9085
    at Array.map (<anonymous>)
    at rc (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:8818)
    at async rb (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:14151) {
  code: 'MODULE_NOT_FOUND'
}
Error: Cannot find module 'module "@node-rs/argon2-darwin-x64"'
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:363:39
    at Object.<anonymous> (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:366:27)
    at [project]/node_modules/@node-rs/argon2/index.js [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:628:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:44:151
    at [project]/app/page.tsx [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:59:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at Module.default (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:63:20)
    at tree.children.page (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:3729:168)
    at eq (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:402270)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:6514
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:133:36
    at NoopContextManager.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NoopTracer.startActiveSpan (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18093)
    at ProxyTracer.startActiveSpan (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18854)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:122:103
    at NoopContextManager.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NextTracerImpl.trace (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:122:28)
    at rc (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:6395)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:9085
    at Array.map (<anonymous>)
    at rc (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:8818)
    at async rb (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:14151) {
  digest: '3404983254'
}
 ⨯ Error: Cannot find module 'module "@node-rs/argon2-darwin-x64"'
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:363:39
    at Object.<anonymous> (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:366:27)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:44:151
    at [project]/app/page.tsx [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:59:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at Module.default (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:63:20)
    at tree.children.page (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:3729:168)
    at Array.map (<anonymous>)
 ⨯ Error: Cannot find module 'module "@node-rs/argon2-darwin-x64"'
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:363:39
    at Object.<anonymous> (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:366:27)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:44:151
    at [project]/app/page.tsx [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:59:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at Module.default (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:63:20)
    at tree.children.page (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:3729:168)
    at Array.map (<anonymous>)
digest: "3404983254"
 ⨯ Error: Cannot find module 'module "@node-rs/argon2-darwin-x64"'
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:363:39
    at Object.<anonymous> (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:366:27)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:44:151
    at [project]/app/page.tsx [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:59:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at Module.default (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:63:20)
    at tree.children.page (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:3729:168)
    at Array.map (<anonymous>)
 ⨯ Error: Cannot find module 'module "@node-rs/argon2-darwin-x64"'
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:363:39
    at Object.<anonymous> (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:366:27)
    at [project]/node_modules/@node-rs/argon2/index.js [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:628:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:44:151
    at [project]/app/page.tsx [app-rsc] (ecmascript) (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:59:3)
    at instantiateModule (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:488:23)
    at getOrInstantiateModuleFromParent (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:539:12)
    at esmImport (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/[turbopack]_runtime.js:113:20)
    at Module.default (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/_aa2b7a._.js:63:20)
    at tree.children.page (/Users/root/code/nextjs-turbopack-optional-dependecies/.next/server/chunks/node_modules_598b7f._.js:3729:168)
    at eq (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:402270)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:6514
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:133:36
    at NoopContextManager.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NoopTracer.startActiveSpan (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18093)
    at ProxyTracer.startActiveSpan (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:18854)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:122:103
    at NoopContextManager.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:7062)
    at ContextAPI.with (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/@opentelemetry/api/index.js:1:518)
    at NextTracerImpl.trace (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/server/lib/trace/tracer.js:122:28)
    at rc (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:6395)
    at /Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:9085
    at Array.map (<anonymous>)
    at rc (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:8818)
    at async rb (/Users/root/code/nextjs-turbopack-optional-dependecies/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:14151) {
  digest: '3404983254',
  page: '/'
}
</pre></code>
</details>

## Debugging

1. Find `node_modules/@node-rs/argon2`
2. Check `node_modules/@node-rs/argon2-<platform>-<cpu>` exists
3. Go to `node_modules/@node-rs/argon2/index.js`
4. Find `require(@node-rs/argon2-<platform>-<cpu>)` and check that it throws
