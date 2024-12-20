// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aQL8O":[function(require,module,exports,__globalThis) {
var Refresh = require("f11b6b8f6a1f6f0b");
var ErrorOverlay = require("f490fb404efab291");
window.__REACT_REFRESH_VERSION_RUNTIME = '0.14.2';
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener('parcelhmraccept', ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"5Vs3g":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "be67dd72bd13eb0f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"hkKyJ":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$42ed = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$42ed.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouter = require("react-router");
var _framerMotion = require("framer-motion"); // For animations
const About = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).h1, {
                style: styles.title,
                initial: {
                    opacity: 0,
                    y: -100
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1
                },
                children: "Welcome to Rasoiwala \uD83C\uDF74"
            }, void 0, false, {
                fileName: "src/components/About.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).p, {
                style: styles.description,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1.2,
                    delay: 0.3
                },
                children: "Discover the ultimate destination for food lovers! At Rasoiwala, we connect you to the finest restaurants, diverse cuisines, and unforgettable dining experiences in your city."
            }, void 0, false, {
                fileName: "src/components/About.jsx",
                lineNumber: 21,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).div, {
                style: styles.section,
                initial: {
                    opacity: 0,
                    x: -100
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 1.2,
                    delay: 0.5
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        style: styles.subtitle,
                        children: "Why Choose Us?"
                    }, void 0, false, {
                        fileName: "src/components/About.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                        style: styles.list,
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                children: "Handpicked restaurants offering the best flavors."
                            }, void 0, false, {
                                fileName: "src/components/About.jsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                children: "Real-time reviews from trusted foodies."
                            }, void 0, false, {
                                fileName: "src/components/About.jsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                children: "Personalized recommendations just for you."
                            }, void 0, false, {
                                fileName: "src/components/About.jsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/About.jsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/About.jsx",
                lineNumber: 33,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).div, {
                style: styles.section,
                initial: {
                    opacity: 0,
                    x: 100
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 1.2,
                    delay: 0.7
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        style: styles.subtitle,
                        children: "Our Mission"
                    }, void 0, false, {
                        fileName: "src/components/About.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        style: styles.text,
                        children: "To create a vibrant community of food enthusiasts while empowering local businesses to thrive in a competitive culinary landscape."
                    }, void 0, false, {
                        fileName: "src/components/About.jsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/About.jsx",
                lineNumber: 52,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).footer, {
                style: styles.footer,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1.2,
                    delay: 1
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        style: styles.signature,
                        children: "Bon app\xe9tit! \uD83E\uDD42"
                    }, void 0, false, {
                        fileName: "src/components/About.jsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        style: styles.credits,
                        children: "\xa9 2024 Rasoiwala. All rights reserved."
                    }, void 0, false, {
                        fileName: "src/components/About.jsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/About.jsx",
                lineNumber: 69,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Outlet), {}, void 0, false, {
                fileName: "src/components/About.jsx",
                lineNumber: 81,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                className: "px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition duration-300",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                    to: "./profile",
                    children: "About me"
                }, void 0, false, {
                    fileName: "src/components/About.jsx",
                    lineNumber: 83,
                    columnNumber: 5
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/About.jsx",
                lineNumber: 82,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/About.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, undefined);
};
_c = About;
const styles = {
    container: {
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#f9fafb',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        textAlign: 'center'
    },
    title: {
        fontSize: '3rem',
        marginBottom: '20px',
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    description: {
        fontSize: '1.4rem',
        marginBottom: '30px',
        lineHeight: '1.8',
        maxWidth: '700px',
        color: '#34495e'
    },
    section: {
        marginBottom: '30px',
        maxWidth: '700px',
        textAlign: 'left'
    },
    subtitle: {
        fontSize: '1.8rem',
        marginBottom: '15px',
        color: '#e67e22',
        fontWeight: '600'
    },
    list: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#7f8c8d',
        paddingLeft: '20px'
    },
    text: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#7f8c8d'
    },
    footer: {
        marginTop: '40px',
        borderTop: '1px solid #ecf0f1',
        paddingTop: '20px'
    },
    signature: {
        fontSize: '1.4rem',
        fontStyle: 'italic',
        color: '#e74c3c'
    },
    credits: {
        fontSize: '1rem',
        color: '#95a5a6'
    }
};
exports.default = About;
var _c;
$RefreshReg$(_c, "About");

  $parcel$ReactRefreshHelpers$42ed.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router":"dXVwI","framer-motion":"5bZBB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"5bZBB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "motion", ()=>(0, _proxyMjs.motion));
parcelHelpers.export(exports, "m", ()=>(0, _proxyMjs1.m));
parcelHelpers.export(exports, "AnimatePresence", ()=>(0, _indexMjs.AnimatePresence));
parcelHelpers.export(exports, "MotionConfig", ()=>(0, _indexMjs1.MotionConfig));
parcelHelpers.export(exports, "LazyMotion", ()=>(0, _indexMjs2.LazyMotion));
parcelHelpers.export(exports, "LayoutGroup", ()=>(0, _indexMjs3.LayoutGroup));
parcelHelpers.export(exports, "domMin", ()=>(0, _featuresMinMjs.domMin));
parcelHelpers.export(exports, "domAnimation", ()=>(0, _featuresAnimationMjs.domAnimation));
parcelHelpers.export(exports, "domMax", ()=>(0, _featuresMaxMjs.domMax));
parcelHelpers.export(exports, "useMotionValue", ()=>(0, _useMotionValueMjs.useMotionValue));
parcelHelpers.export(exports, "useMotionTemplate", ()=>(0, _useMotionTemplateMjs.useMotionTemplate));
parcelHelpers.export(exports, "resolveMotionValue", ()=>(0, _resolveMotionValueMjs.resolveMotionValue));
parcelHelpers.export(exports, "useTransform", ()=>(0, _useTransformMjs.useTransform));
parcelHelpers.export(exports, "useSpring", ()=>(0, _useSpringMjs.useSpring));
parcelHelpers.export(exports, "useVelocity", ()=>(0, _useVelocityMjs.useVelocity));
parcelHelpers.export(exports, "useScroll", ()=>(0, _useScrollMjs.useScroll));
parcelHelpers.export(exports, "useElementScroll", ()=>(0, _useElementScrollMjs.useElementScroll));
parcelHelpers.export(exports, "useViewportScroll", ()=>(0, _useViewportScrollMjs.useViewportScroll));
parcelHelpers.export(exports, "useTime", ()=>(0, _useTimeMjs.useTime));
parcelHelpers.export(exports, "useWillChange", ()=>(0, _indexMjs4.useWillChange));
parcelHelpers.export(exports, "useMotionValueEvent", ()=>(0, _useMotionValueEventMjs.useMotionValueEvent));
parcelHelpers.export(exports, "useReducedMotion", ()=>(0, _useReducedMotionMjs.useReducedMotion));
parcelHelpers.export(exports, "useReducedMotionConfig", ()=>(0, _useReducedMotionConfigMjs.useReducedMotionConfig));
parcelHelpers.export(exports, "animationControls", ()=>(0, _animationControlsMjs.animationControls));
parcelHelpers.export(exports, "useAnimate", ()=>(0, _useAnimateMjs.useAnimate));
parcelHelpers.export(exports, "useAnimateMini", ()=>(0, _useAnimateStyleMjs.useAnimateMini));
parcelHelpers.export(exports, "useAnimation", ()=>(0, _useAnimationMjs.useAnimation));
parcelHelpers.export(exports, "useAnimationControls", ()=>(0, _useAnimationMjs.useAnimationControls));
parcelHelpers.export(exports, "useAnimationFrame", ()=>(0, _useAnimationFrameMjs.useAnimationFrame));
parcelHelpers.export(exports, "animateVisualElement", ()=>(0, _visualElementMjs.animateVisualElement));
parcelHelpers.export(exports, "useCycle", ()=>(0, _useCycleMjs.useCycle));
parcelHelpers.export(exports, "isValidMotionProp", ()=>(0, _validPropMjs.isValidMotionProp));
parcelHelpers.export(exports, "useIsPresent", ()=>(0, _usePresenceMjs.useIsPresent));
parcelHelpers.export(exports, "usePresence", ()=>(0, _usePresenceMjs.usePresence));
parcelHelpers.export(exports, "useInView", ()=>(0, _useInViewMjs.useInView));
parcelHelpers.export(exports, "DragControls", ()=>(0, _useDragControlsMjs.DragControls));
parcelHelpers.export(exports, "useDragControls", ()=>(0, _useDragControlsMjs.useDragControls));
parcelHelpers.export(exports, "useDomEvent", ()=>(0, _useDomEventMjs.useDomEvent));
parcelHelpers.export(exports, "createRendererMotionComponent", ()=>(0, _indexMjs5.createRendererMotionComponent));
parcelHelpers.export(exports, "isMotionComponent", ()=>(0, _isMotionComponentMjs.isMotionComponent));
parcelHelpers.export(exports, "unwrapMotionComponent", ()=>(0, _unwrapMotionComponentMjs.unwrapMotionComponent));
parcelHelpers.export(exports, "VisualElement", ()=>(0, _visualElementMjs1.VisualElement));
parcelHelpers.export(exports, "addScaleCorrector", ()=>(0, _scaleCorrectionMjs.addScaleCorrector));
parcelHelpers.export(exports, "disableInstantTransitions", ()=>(0, _useInstantTransitionMjs.disableInstantTransitions));
parcelHelpers.export(exports, "useInstantTransition", ()=>(0, _useInstantTransitionMjs.useInstantTransition));
parcelHelpers.export(exports, "useInstantLayoutTransition", ()=>(0, _useInstantLayoutTransitionMjs.useInstantLayoutTransition));
parcelHelpers.export(exports, "useResetProjection", ()=>(0, _useResetProjectionMjs.useResetProjection));
parcelHelpers.export(exports, "buildTransform", ()=>(0, _buildTransformMjs.buildTransform));
parcelHelpers.export(exports, "visualElementStore", ()=>(0, _storeMjs.visualElementStore));
parcelHelpers.export(exports, "animateValue", ()=>(0, _mainThreadAnimationMjs.animateValue));
parcelHelpers.export(exports, "color", ()=>(0, _indexMjs6.color));
parcelHelpers.export(exports, "complex", ()=>(0, _indexMjs7.complex));
parcelHelpers.export(exports, "px", ()=>(0, _unitsMjs.px));
parcelHelpers.export(exports, "MotionGlobalConfig", ()=>(0, _globalConfigMjs.MotionGlobalConfig));
parcelHelpers.export(exports, "AcceleratedAnimation", ()=>(0, _acceleratedAnimationMjs.AcceleratedAnimation));
parcelHelpers.export(exports, "startOptimizedAppearAnimation", ()=>(0, _startMjs.startOptimizedAppearAnimation));
parcelHelpers.export(exports, "optimizedAppearDataAttribute", ()=>(0, _dataIdMjs.optimizedAppearDataAttribute));
parcelHelpers.export(exports, "spring", ()=>(0, _indexMjs8.spring));
parcelHelpers.export(exports, "findSpring", ()=>(0, _findMjs.findSpring));
parcelHelpers.export(exports, "MotionContext", ()=>(0, _indexMjs9.MotionContext));
parcelHelpers.export(exports, "MotionConfigContext", ()=>(0, _motionConfigContextMjs.MotionConfigContext));
parcelHelpers.export(exports, "PresenceContext", ()=>(0, _presenceContextMjs.PresenceContext));
parcelHelpers.export(exports, "LayoutGroupContext", ()=>(0, _layoutGroupContextMjs.LayoutGroupContext));
parcelHelpers.export(exports, "SwitchLayoutGroupContext", ()=>(0, _switchLayoutGroupContextMjs.SwitchLayoutGroupContext));
parcelHelpers.export(exports, "FlatTree", ()=>(0, _flatTreeMjs.FlatTree));
parcelHelpers.export(exports, "DeprecatedLayoutGroupContext", ()=>(0, _deprecatedLayoutGroupContextMjs.DeprecatedLayoutGroupContext));
parcelHelpers.export(exports, "useDeprecatedAnimatedState", ()=>(0, _useAnimatedStateMjs.useAnimatedState));
parcelHelpers.export(exports, "useDeprecatedInvertedScale", ()=>(0, _useInvertedScaleMjs.useInvertedScale));
parcelHelpers.export(exports, "AnimateSharedLayout", ()=>(0, _animateSharedLayoutMjs.AnimateSharedLayout));
parcelHelpers.export(exports, "delay", ()=>(0, _delayMjs.delay));
parcelHelpers.export(exports, "invariant", ()=>(0, _motionUtils.invariant));
parcelHelpers.export(exports, "noop", ()=>(0, _motionUtils.noop));
parcelHelpers.export(exports, "isDragActive", ()=>(0, _motionDom.isDragActive));
parcelHelpers.export(exports, "MotionValue", ()=>(0, _indexMjs10.MotionValue));
parcelHelpers.export(exports, "motionValue", ()=>(0, _indexMjs10.motionValue));
parcelHelpers.export(exports, "animate", ()=>(0, _indexMjs11.animate));
parcelHelpers.export(exports, "createScopedAnimate", ()=>(0, _indexMjs11.createScopedAnimate));
parcelHelpers.export(exports, "animateMini", ()=>(0, _animateStyleMjs.animateMini));
parcelHelpers.export(exports, "scroll", ()=>(0, _indexMjs12.scroll));
parcelHelpers.export(exports, "scrollInfo", ()=>(0, _trackMjs.scrollInfo));
parcelHelpers.export(exports, "inView", ()=>(0, _indexMjs13.inView));
parcelHelpers.export(exports, "inertia", ()=>(0, _inertiaMjs.inertia));
parcelHelpers.export(exports, "keyframes", ()=>(0, _keyframesMjs.keyframes));
parcelHelpers.export(exports, "stagger", ()=>(0, _staggerMjs.stagger));
parcelHelpers.export(exports, "transform", ()=>(0, _transformMjs.transform));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampMjs.clamp));
parcelHelpers.export(exports, "mix", ()=>(0, _indexMjs14.mix));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeMjs.pipe));
parcelHelpers.export(exports, "progress", ()=>(0, _progressMjs.progress));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapMjs.wrap));
parcelHelpers.export(exports, "time", ()=>(0, _syncTimeMjs.time));
parcelHelpers.export(exports, "cancelSync", ()=>(0, _indexLegacyMjs.cancelSync));
parcelHelpers.export(exports, "sync", ()=>(0, _indexLegacyMjs.sync));
parcelHelpers.export(exports, "anticipate", ()=>(0, _anticipateMjs.anticipate));
parcelHelpers.export(exports, "backIn", ()=>(0, _backMjs.backIn));
parcelHelpers.export(exports, "backInOut", ()=>(0, _backMjs.backInOut));
parcelHelpers.export(exports, "backOut", ()=>(0, _backMjs.backOut));
parcelHelpers.export(exports, "circIn", ()=>(0, _circMjs.circIn));
parcelHelpers.export(exports, "circInOut", ()=>(0, _circMjs.circInOut));
parcelHelpers.export(exports, "circOut", ()=>(0, _circMjs.circOut));
parcelHelpers.export(exports, "easeIn", ()=>(0, _easeMjs.easeIn));
parcelHelpers.export(exports, "easeInOut", ()=>(0, _easeMjs.easeInOut));
parcelHelpers.export(exports, "easeOut", ()=>(0, _easeMjs.easeOut));
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierMjs.cubicBezier));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsMjs.steps));
parcelHelpers.export(exports, "mirrorEasing", ()=>(0, _mirrorMjs.mirrorEasing));
parcelHelpers.export(exports, "reverseEasing", ()=>(0, _reverseMjs.reverseEasing));
parcelHelpers.export(exports, "distance", ()=>(0, _distanceMjs.distance));
parcelHelpers.export(exports, "distance2D", ()=>(0, _distanceMjs.distance2D));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateMjs.interpolate));
parcelHelpers.export(exports, "cancelFrame", ()=>(0, _frameMjs.cancelFrame));
parcelHelpers.export(exports, "frame", ()=>(0, _frameMjs.frame));
parcelHelpers.export(exports, "frameData", ()=>(0, _frameMjs.frameData));
parcelHelpers.export(exports, "frameSteps", ()=>(0, _frameMjs.frameSteps));
parcelHelpers.export(exports, "animations", ()=>(0, _animationsMjs.animations));
parcelHelpers.export(exports, "createBox", ()=>(0, _modelsMjs.createBox));
parcelHelpers.export(exports, "calcLength", ()=>(0, _deltaCalcMjs.calcLength));
parcelHelpers.export(exports, "filterProps", ()=>(0, _filterPropsMjs.filterProps));
parcelHelpers.export(exports, "makeUseVisualState", ()=>(0, _useVisualStateMjs.makeUseVisualState));
parcelHelpers.export(exports, "addPointerEvent", ()=>(0, _addPointerEventMjs.addPointerEvent));
parcelHelpers.export(exports, "addPointerInfo", ()=>(0, _eventInfoMjs.addPointerInfo));
parcelHelpers.export(exports, "isMotionValue", ()=>(0, _isMotionValueMjs.isMotionValue));
parcelHelpers.export(exports, "isBrowser", ()=>(0, _isBrowserMjs.isBrowser));
parcelHelpers.export(exports, "useUnmountEffect", ()=>(0, _useUnmountEffectMjs.useUnmountEffect));
parcelHelpers.export(exports, "useIsomorphicLayoutEffect", ()=>(0, _useIsomorphicEffectMjs.useIsomorphicLayoutEffect));
parcelHelpers.export(exports, "useForceUpdate", ()=>(0, _useForceUpdateMjs.useForceUpdate));
parcelHelpers.export(exports, "Reorder", ()=>_namespaceMjs);
var _proxyMjs = require("./render/components/motion/proxy.mjs");
var _proxyMjs1 = require("./render/components/m/proxy.mjs");
var _indexMjs = require("./components/AnimatePresence/index.mjs");
var _indexMjs1 = require("./components/MotionConfig/index.mjs");
var _indexMjs2 = require("./components/LazyMotion/index.mjs");
var _indexMjs3 = require("./components/LayoutGroup/index.mjs");
var _featuresMinMjs = require("./render/dom/features-min.mjs");
var _featuresAnimationMjs = require("./render/dom/features-animation.mjs");
var _featuresMaxMjs = require("./render/dom/features-max.mjs");
var _useMotionValueMjs = require("./value/use-motion-value.mjs");
var _useMotionTemplateMjs = require("./value/use-motion-template.mjs");
var _resolveMotionValueMjs = require("./value/utils/resolve-motion-value.mjs");
var _useTransformMjs = require("./value/use-transform.mjs");
var _useSpringMjs = require("./value/use-spring.mjs");
var _useVelocityMjs = require("./value/use-velocity.mjs");
var _useScrollMjs = require("./value/use-scroll.mjs");
var _useElementScrollMjs = require("./value/scroll/use-element-scroll.mjs");
var _useViewportScrollMjs = require("./value/scroll/use-viewport-scroll.mjs");
var _useTimeMjs = require("./value/use-time.mjs");
var _indexMjs4 = require("./value/use-will-change/index.mjs");
var _useMotionValueEventMjs = require("./utils/use-motion-value-event.mjs");
var _useReducedMotionMjs = require("./utils/reduced-motion/use-reduced-motion.mjs");
var _useReducedMotionConfigMjs = require("./utils/reduced-motion/use-reduced-motion-config.mjs");
var _animationControlsMjs = require("./animation/hooks/animation-controls.mjs");
var _useAnimateMjs = require("./animation/hooks/use-animate.mjs");
var _useAnimateStyleMjs = require("./animation/hooks/use-animate-style.mjs");
var _useAnimationMjs = require("./animation/hooks/use-animation.mjs");
var _useAnimationFrameMjs = require("./utils/use-animation-frame.mjs");
var _visualElementMjs = require("./animation/interfaces/visual-element.mjs");
var _useCycleMjs = require("./utils/use-cycle.mjs");
var _validPropMjs = require("./motion/utils/valid-prop.mjs");
var _usePresenceMjs = require("./components/AnimatePresence/use-presence.mjs");
var _useInViewMjs = require("./utils/use-in-view.mjs");
var _useDragControlsMjs = require("./gestures/drag/use-drag-controls.mjs");
var _useDomEventMjs = require("./events/use-dom-event.mjs");
var _indexMjs5 = require("./motion/index.mjs");
var _isMotionComponentMjs = require("./motion/utils/is-motion-component.mjs");
var _unwrapMotionComponentMjs = require("./motion/utils/unwrap-motion-component.mjs");
var _visualElementMjs1 = require("./render/VisualElement.mjs");
var _scaleCorrectionMjs = require("./projection/styles/scale-correction.mjs");
var _useInstantTransitionMjs = require("./utils/use-instant-transition.mjs");
var _useInstantLayoutTransitionMjs = require("./projection/use-instant-layout-transition.mjs");
var _useResetProjectionMjs = require("./projection/use-reset-projection.mjs");
var _buildTransformMjs = require("./render/html/utils/build-transform.mjs");
var _storeMjs = require("./render/store.mjs");
var _mainThreadAnimationMjs = require("./animation/animators/MainThreadAnimation.mjs");
var _indexMjs6 = require("./value/types/color/index.mjs");
var _indexMjs7 = require("./value/types/complex/index.mjs");
var _unitsMjs = require("./value/types/numbers/units.mjs");
var _globalConfigMjs = require("./utils/GlobalConfig.mjs");
var _acceleratedAnimationMjs = require("./animation/animators/AcceleratedAnimation.mjs");
var _startMjs = require("./animation/optimized-appear/start.mjs");
var _dataIdMjs = require("./animation/optimized-appear/data-id.mjs");
var _indexMjs8 = require("./animation/generators/spring/index.mjs");
var _findMjs = require("./animation/generators/spring/find.mjs");
var _indexMjs9 = require("./context/MotionContext/index.mjs");
var _motionConfigContextMjs = require("./context/MotionConfigContext.mjs");
var _presenceContextMjs = require("./context/PresenceContext.mjs");
var _layoutGroupContextMjs = require("./context/LayoutGroupContext.mjs");
var _switchLayoutGroupContextMjs = require("./context/SwitchLayoutGroupContext.mjs");
var _flatTreeMjs = require("./render/utils/flat-tree.mjs");
var _deprecatedLayoutGroupContextMjs = require("./context/DeprecatedLayoutGroupContext.mjs");
var _useAnimatedStateMjs = require("./animation/hooks/use-animated-state.mjs");
var _useInvertedScaleMjs = require("./value/use-inverted-scale.mjs");
var _animateSharedLayoutMjs = require("./components/AnimateSharedLayout.mjs");
var _delayMjs = require("./utils/delay.mjs");
var _namespaceMjs = require("./components/Reorder/namespace.mjs");
var _motionUtils = require("motion-utils");
var _motionDom = require("motion-dom");
var _indexMjs10 = require("./value/index.mjs");
var _indexMjs11 = require("./animation/animate/index.mjs");
var _animateStyleMjs = require("./animation/animators/waapi/animate-style.mjs");
var _indexMjs12 = require("./render/dom/scroll/index.mjs");
var _trackMjs = require("./render/dom/scroll/track.mjs");
var _indexMjs13 = require("./render/dom/viewport/index.mjs");
var _inertiaMjs = require("./animation/generators/inertia.mjs");
var _keyframesMjs = require("./animation/generators/keyframes.mjs");
var _staggerMjs = require("./animation/utils/stagger.mjs");
var _transformMjs = require("./utils/transform.mjs");
var _clampMjs = require("./utils/clamp.mjs");
var _indexMjs14 = require("./utils/mix/index.mjs");
var _pipeMjs = require("./utils/pipe.mjs");
var _progressMjs = require("./utils/progress.mjs");
var _wrapMjs = require("./utils/wrap.mjs");
var _syncTimeMjs = require("./frameloop/sync-time.mjs");
var _indexLegacyMjs = require("./frameloop/index-legacy.mjs");
var _anticipateMjs = require("./easing/anticipate.mjs");
var _backMjs = require("./easing/back.mjs");
var _circMjs = require("./easing/circ.mjs");
var _easeMjs = require("./easing/ease.mjs");
var _cubicBezierMjs = require("./easing/cubic-bezier.mjs");
var _stepsMjs = require("./easing/steps.mjs");
var _mirrorMjs = require("./easing/modifiers/mirror.mjs");
var _reverseMjs = require("./easing/modifiers/reverse.mjs");
var _distanceMjs = require("./utils/distance.mjs");
var _interpolateMjs = require("./utils/interpolate.mjs");
var _frameMjs = require("./frameloop/frame.mjs");
var _animationsMjs = require("./motion/features/animations.mjs");
var _modelsMjs = require("./projection/geometry/models.mjs");
var _deltaCalcMjs = require("./projection/geometry/delta-calc.mjs");
var _filterPropsMjs = require("./render/dom/utils/filter-props.mjs");
var _useVisualStateMjs = require("./motion/utils/use-visual-state.mjs");
var _addPointerEventMjs = require("./events/add-pointer-event.mjs");
var _eventInfoMjs = require("./events/event-info.mjs");
var _isMotionValueMjs = require("./value/utils/is-motion-value.mjs");
var _isBrowserMjs = require("./utils/is-browser.mjs");
var _useUnmountEffectMjs = require("./utils/use-unmount-effect.mjs");
var _useIsomorphicEffectMjs = require("./utils/use-isomorphic-effect.mjs");
var _useForceUpdateMjs = require("./utils/use-force-update.mjs");
"use client";

},{"./render/components/motion/proxy.mjs":"52Oxm","./render/components/m/proxy.mjs":false,"./components/AnimatePresence/index.mjs":false,"./components/MotionConfig/index.mjs":false,"./components/LazyMotion/index.mjs":false,"./components/LayoutGroup/index.mjs":false,"./render/dom/features-min.mjs":false,"./render/dom/features-animation.mjs":false,"./render/dom/features-max.mjs":false,"./value/use-motion-value.mjs":false,"./value/use-motion-template.mjs":false,"./value/utils/resolve-motion-value.mjs":false,"./value/use-transform.mjs":false,"./value/use-spring.mjs":false,"./value/use-velocity.mjs":false,"./value/use-scroll.mjs":false,"./value/scroll/use-element-scroll.mjs":false,"./value/scroll/use-viewport-scroll.mjs":false,"./value/use-time.mjs":false,"./value/use-will-change/index.mjs":false,"./utils/use-motion-value-event.mjs":false,"./utils/reduced-motion/use-reduced-motion.mjs":false,"./utils/reduced-motion/use-reduced-motion-config.mjs":false,"./animation/hooks/animation-controls.mjs":false,"./animation/hooks/use-animate.mjs":false,"./animation/hooks/use-animate-style.mjs":false,"./animation/hooks/use-animation.mjs":false,"./utils/use-animation-frame.mjs":false,"./animation/interfaces/visual-element.mjs":false,"./utils/use-cycle.mjs":false,"./motion/utils/valid-prop.mjs":false,"./components/AnimatePresence/use-presence.mjs":false,"./utils/use-in-view.mjs":false,"./gestures/drag/use-drag-controls.mjs":false,"./events/use-dom-event.mjs":false,"./motion/index.mjs":false,"./motion/utils/is-motion-component.mjs":false,"./motion/utils/unwrap-motion-component.mjs":false,"./render/VisualElement.mjs":false,"./projection/styles/scale-correction.mjs":false,"./utils/use-instant-transition.mjs":false,"./projection/use-instant-layout-transition.mjs":false,"./projection/use-reset-projection.mjs":false,"./render/html/utils/build-transform.mjs":false,"./render/store.mjs":false,"./animation/animators/MainThreadAnimation.mjs":false,"./value/types/color/index.mjs":false,"./value/types/complex/index.mjs":false,"./value/types/numbers/units.mjs":false,"./utils/GlobalConfig.mjs":false,"./animation/animators/AcceleratedAnimation.mjs":false,"./animation/optimized-appear/start.mjs":false,"./animation/optimized-appear/data-id.mjs":false,"./animation/generators/spring/index.mjs":false,"./animation/generators/spring/find.mjs":false,"./context/MotionContext/index.mjs":false,"./context/MotionConfigContext.mjs":false,"./context/PresenceContext.mjs":false,"./context/LayoutGroupContext.mjs":false,"./context/SwitchLayoutGroupContext.mjs":false,"./render/utils/flat-tree.mjs":false,"./context/DeprecatedLayoutGroupContext.mjs":false,"./animation/hooks/use-animated-state.mjs":false,"./value/use-inverted-scale.mjs":false,"./components/AnimateSharedLayout.mjs":false,"./utils/delay.mjs":false,"./components/Reorder/namespace.mjs":false,"motion-utils":"9SDPC","motion-dom":"8V8DE","./value/index.mjs":false,"./animation/animate/index.mjs":false,"./animation/animators/waapi/animate-style.mjs":false,"./render/dom/scroll/index.mjs":false,"./render/dom/scroll/track.mjs":false,"./render/dom/viewport/index.mjs":false,"./animation/generators/inertia.mjs":false,"./animation/generators/keyframes.mjs":false,"./animation/utils/stagger.mjs":false,"./utils/transform.mjs":false,"./utils/clamp.mjs":false,"./utils/mix/index.mjs":false,"./utils/pipe.mjs":false,"./utils/progress.mjs":false,"./utils/wrap.mjs":false,"./frameloop/sync-time.mjs":false,"./frameloop/index-legacy.mjs":false,"./easing/anticipate.mjs":false,"./easing/back.mjs":false,"./easing/circ.mjs":false,"./easing/ease.mjs":false,"./easing/cubic-bezier.mjs":false,"./easing/steps.mjs":false,"./easing/modifiers/mirror.mjs":false,"./easing/modifiers/reverse.mjs":false,"./utils/distance.mjs":false,"./utils/interpolate.mjs":false,"./frameloop/frame.mjs":false,"./motion/features/animations.mjs":false,"./projection/geometry/models.mjs":false,"./projection/geometry/delta-calc.mjs":false,"./render/dom/utils/filter-props.mjs":false,"./motion/utils/use-visual-state.mjs":false,"./events/add-pointer-event.mjs":false,"./events/event-info.mjs":false,"./value/utils/is-motion-value.mjs":false,"./utils/is-browser.mjs":false,"./utils/use-unmount-effect.mjs":false,"./utils/use-isomorphic-effect.mjs":false,"./utils/use-force-update.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52Oxm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "motion", ()=>motion);
var _createProxyMjs = require("../create-proxy.mjs");
var _createMjs = require("./create.mjs");
const motion = /*@__PURE__*/ (0, _createProxyMjs.createDOMMotionComponentProxy)((0, _createMjs.createMotionComponent));

},{"../create-proxy.mjs":"6p4N7","./create.mjs":"hUgWW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6p4N7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDOMMotionComponentProxy", ()=>createDOMMotionComponentProxy);
var _warnOnceMjs = require("../../utils/warn-once.mjs");
function createDOMMotionComponentProxy(componentFactory) {
    if (typeof Proxy === "undefined") return componentFactory;
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */ const componentCache = new Map();
    const deprecatedFactoryFunction = (...args)=>{
        (0, _warnOnceMjs.warnOnce)(false, "motion() is deprecated. Use motion.create() instead.");
        return componentFactory(...args);
    };
    return new Proxy(deprecatedFactoryFunction, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */ get: (_target, key)=>{
            if (key === "create") return componentFactory;
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */ if (!componentCache.has(key)) componentCache.set(key, componentFactory(key));
            return componentCache.get(key);
        }
    });
}

},{"../../utils/warn-once.mjs":"JIiQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JIiQV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warnOnce", ()=>warnOnce);
const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message)) return;
    console.warn(message);
    if (element) console.warn(element);
    warned.add(message);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hUgWW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMotionComponent", ()=>createMotionComponent);
var _animationsMjs = require("../../../motion/features/animations.mjs");
var _dragMjs = require("../../../motion/features/drag.mjs");
var _gesturesMjs = require("../../../motion/features/gestures.mjs");
var _layoutMjs = require("../../../motion/features/layout.mjs");
var _createFactoryMjs = require("../create-factory.mjs");
var _createVisualElementMjs = require("../../dom/create-visual-element.mjs");
const createMotionComponent = /*@__PURE__*/ (0, _createFactoryMjs.createMotionComponentFactory)({
    ...(0, _animationsMjs.animations),
    ...(0, _gesturesMjs.gestureAnimations),
    ...(0, _dragMjs.drag),
    ...(0, _layoutMjs.layout)
}, (0, _createVisualElementMjs.createDomVisualElement));

},{"../../../motion/features/animations.mjs":"c1lwU","../../../motion/features/drag.mjs":"fBUJ5","../../../motion/features/gestures.mjs":"h2ALs","../../../motion/features/layout.mjs":"6XGhA","../create-factory.mjs":"aIZPq","../../dom/create-visual-element.mjs":"WHCBp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1lwU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animations", ()=>animations);
var _indexMjs = require("./animation/index.mjs");
var _exitMjs = require("./animation/exit.mjs");
const animations = {
    animation: {
        Feature: (0, _indexMjs.AnimationFeature)
    },
    exit: {
        Feature: (0, _exitMjs.ExitAnimationFeature)
    }
};

},{"./animation/index.mjs":"2F0Qk","./animation/exit.mjs":"inv8k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2F0Qk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationFeature", ()=>AnimationFeature);
var _isAnimationControlsMjs = require("../../../animation/utils/is-animation-controls.mjs");
var _animationStateMjs = require("../../../render/utils/animation-state.mjs");
var _featureMjs = require("../Feature.mjs");
class AnimationFeature extends (0, _featureMjs.Feature) {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */ constructor(node){
        super(node);
        node.animationState || (node.animationState = (0, _animationStateMjs.createAnimationState)(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        if ((0, _isAnimationControlsMjs.isAnimationControls)(animate)) this.unmountControls = animate.subscribe(this.node);
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */ mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) this.updateAnimationControlsSubscription();
    }
    unmount() {
        var _a;
        this.node.animationState.reset();
        (_a = this.unmountControls) === null || _a === void 0 || _a.call(this);
    }
}

},{"../../../animation/utils/is-animation-controls.mjs":"3wAZE","../../../render/utils/animation-state.mjs":"f4EjM","../Feature.mjs":"lI7Ue","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3wAZE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAnimationControls", ()=>isAnimationControls);
function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4EjM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkVariantsDidChange", ()=>checkVariantsDidChange);
parcelHelpers.export(exports, "createAnimationState", ()=>createAnimationState);
var _isAnimationControlsMjs = require("../../animation/utils/is-animation-controls.mjs");
var _isKeyframesTargetMjs = require("../../animation/utils/is-keyframes-target.mjs");
var _shallowCompareMjs = require("../../utils/shallow-compare.mjs");
var _isVariantLabelMjs = require("./is-variant-label.mjs");
var _resolveDynamicVariantsMjs = require("./resolve-dynamic-variants.mjs");
var _variantPropsMjs = require("./variant-props.mjs");
var _visualElementMjs = require("../../animation/interfaces/visual-element.mjs");
var _getVariantContextMjs = require("./get-variant-context.mjs");
const reversePriorityOrder = [
    ...(0, _variantPropsMjs.variantPriorityOrder)
].reverse();
const numAnimationTypes = (0, _variantPropsMjs.variantPriorityOrder).length;
function animateList(visualElement) {
    return (animations)=>Promise.all(animations.map(({ animation, options })=>(0, _visualElementMjs.animateVisualElement)(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    let state = createState();
    let isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */ const buildResolvedTypeValues = (type)=>(acc, definition)=>{
            var _a;
            const resolved = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : undefined);
            if (resolved) {
                const { transition, transitionEnd, ...target } = resolved;
                acc = {
                    ...acc,
                    ...target,
                    ...transitionEnd
                };
            }
            return acc;
        };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */ function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */ function animateChanges(changedActiveType) {
        const { props } = visualElement;
        const context = (0, _getVariantContextMjs.getVariantContext)(visualElement.parent) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */ const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */ const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */ let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */ let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */ for(let i = 0; i < numAnimationTypes; i++){
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined ? props[type] : context[type];
            const propIsVariant = (0, _isVariantLabelMjs.isVariantLabel)(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */ const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false) removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */ let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */ if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) isInherited = false;
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */ typeState.protectedKeys = {
                ...encounteredKeys
            };
            // Check if we can skip analysing this prop early
            if (// If it isn't active and hasn't *just* been set as inactive
            !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
            !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
            (0, _isAnimationControlsMjs.isAnimationControls)(prop) || typeof prop === "boolean") continue;
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */ const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
            type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
            i > removedVariantIndex && propIsVariant;
            let handledRemovedValues = false;
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */ const definitionList = Array.isArray(prop) ? prop : [
                prop
            ];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */ let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
            if (activeDelta === false) resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */ const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues
            };
            const markToAnimate = (key)=>{
                shouldAnimateType = true;
                if (removedKeys.has(key)) {
                    handledRemovedValues = true;
                    removedKeys.delete(key);
                }
                typeState.needsAnimating[key] = true;
                const motionValue = visualElement.getValue(key);
                if (motionValue) motionValue.liveStyle = false;
            };
            for(const key in allKeys){
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key)) continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */ let valueHasChanged = false;
                if ((0, _isKeyframesTargetMjs.isKeyframesTarget)(next) && (0, _isKeyframesTargetMjs.isKeyframesTarget)(prev)) valueHasChanged = !(0, _shallowCompareMjs.shallowCompare)(next, prev);
                else valueHasChanged = next !== prev;
                if (valueHasChanged) {
                    if (next !== undefined && next !== null) // If next is defined and doesn't equal prev, it needs animating
                    markToAnimate(key);
                    else // If it's undefined, it's been removed.
                    removedKeys.add(key);
                } else if (next !== undefined && removedKeys.has(key)) /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */ markToAnimate(key);
                else /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */ typeState.protectedKeys[key] = true;
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */ typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */ if (typeState.isActive) encounteredKeys = {
                ...encounteredKeys,
                ...resolvedValues
            };
            if (isInitialRender && visualElement.blockInitialAnimation) shouldAnimateType = false;
            /**
             * If this is an inherited prop we want to skip this animation
             * unless the inherited variants haven't changed on this render.
             */ const willAnimateViaParent = isInherited && variantDidChange;
            const needsAnimating = !willAnimateViaParent || handledRemovedValues;
            if (shouldAnimateType && needsAnimating) animations.push(...definitionList.map((animation)=>({
                    animation: animation,
                    options: {
                        type
                    }
                })));
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */ if (removedKeys.size) {
            const fallbackAnimation = {};
            removedKeys.forEach((key)=>{
                const fallbackTarget = visualElement.getBaseTarget(key);
                const motionValue = visualElement.getValue(key);
                if (motionValue) motionValue.liveStyle = true;
                // @ts-expect-error - @mattgperry to figure if we should do something here
                fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
            });
            animations.push({
                animation: fallbackAnimation
            });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */ function setActive(type, isActive) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive) return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 || _a.forEach((child)=>{
            var _a;
            return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive);
        });
        state[type].isActive = isActive;
        const animations = animateChanges(type);
        for(const key in state)state[key].protectedKeys = {};
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: ()=>state,
        reset: ()=>{
            state = createState();
            isInitialRender = true;
        }
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") return next !== prev;
    else if (Array.isArray(next)) return !(0, _shallowCompareMjs.shallowCompare)(next, prev);
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState()
    };
}

},{"../../animation/utils/is-animation-controls.mjs":"3wAZE","../../animation/utils/is-keyframes-target.mjs":"sPTPk","../../utils/shallow-compare.mjs":"7y29z","./is-variant-label.mjs":"erxli","./resolve-dynamic-variants.mjs":"dSXph","./variant-props.mjs":"huf2R","../../animation/interfaces/visual-element.mjs":"e0aFv","./get-variant-context.mjs":"5KY29","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sPTPk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isKeyframesTarget", ()=>isKeyframesTarget);
const isKeyframesTarget = (v)=>{
    return Array.isArray(v);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7y29z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shallowCompare", ()=>shallowCompare);
function shallowCompare(next, prev) {
    if (!Array.isArray(prev)) return false;
    const prevLength = prev.length;
    if (prevLength !== next.length) return false;
    for(let i = 0; i < prevLength; i++){
        if (prev[i] !== next[i]) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"erxli":[function(require,module,exports,__globalThis) {
/**
 * Decides if the supplied variable is variant label
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVariantLabel", ()=>isVariantLabel);
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSXph":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariant", ()=>resolveVariant);
var _resolveVariantsMjs = require("./resolve-variants.mjs");
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return (0, _resolveVariantsMjs.resolveVariantFromProps)(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}

},{"./resolve-variants.mjs":"8MzkH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8MzkH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariantFromProps", ()=>resolveVariantFromProps);
function getValueState(visualElement) {
    const state = [
        {},
        {}
    ];
    visualElement === null || visualElement === void 0 || visualElement.values.forEach((value, key)=>{
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */ if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */ if (typeof definition === "string") definition = props.variants && props.variants[definition];
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */ if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"huf2R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "variantPriorityOrder", ()=>variantPriorityOrder);
parcelHelpers.export(exports, "variantProps", ()=>variantProps);
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
];
const variantProps = [
    "initial",
    ...variantPriorityOrder
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0aFv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateVisualElement", ()=>animateVisualElement);
var _resolveDynamicVariantsMjs = require("../../render/utils/resolve-dynamic-variants.mjs");
var _visualElementTargetMjs = require("./visual-element-target.mjs");
var _visualElementVariantMjs = require("./visual-element-variant.mjs");
function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant)=>(0, _visualElementVariantMjs.animateVariant)(visualElement, variant, options));
        animation = Promise.all(animations);
    } else if (typeof definition === "string") animation = (0, _visualElementVariantMjs.animateVariant)(visualElement, definition, options);
    else {
        const resolvedDefinition = typeof definition === "function" ? (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, definition, options.custom) : definition;
        animation = Promise.all((0, _visualElementTargetMjs.animateTarget)(visualElement, resolvedDefinition, options));
    }
    return animation.then(()=>{
        visualElement.notify("AnimationComplete", definition);
    });
}

},{"../../render/utils/resolve-dynamic-variants.mjs":"dSXph","./visual-element-target.mjs":"6SL9E","./visual-element-variant.mjs":"80mMV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6SL9E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateTarget", ()=>animateTarget);
var _transformMjs = require("../../render/html/utils/transform.mjs");
var _motionValueMjs = require("./motion-value.mjs");
var _settersMjs = require("../../render/utils/setters.mjs");
var _getValueTransitionMjs = require("../utils/get-value-transition.mjs");
var _getAppearIdMjs = require("../optimized-appear/get-appear-id.mjs");
var _addWillChangeMjs = require("../../value/use-will-change/add-will-change.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */ function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    var _a;
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride) transition = transitionOverride;
    const animations = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for(const key in target){
        const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
        const valueTarget = target[key];
        if (valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
        const valueTransition = {
            delay,
            ...(0, _getValueTransitionMjs.getValueTransition)(transition || {}, key)
        };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */ let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = (0, _getAppearIdMjs.getOptimisedAppearId)(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, (0, _frameMjs.frame));
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        (0, _addWillChangeMjs.addValueToWillChange)(visualElement, key);
        value.start((0, _motionValueMjs.animateMotionValue)(key, value, valueTarget, visualElement.shouldReduceMotion && (0, _transformMjs.transformProps).has(key) ? {
            type: false
        } : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) animations.push(animation);
    }
    if (transitionEnd) Promise.all(animations).then(()=>{
        (0, _frameMjs.frame).update(()=>{
            transitionEnd && (0, _settersMjs.setTarget)(visualElement, transitionEnd);
        });
    });
    return animations;
}

},{"../../render/html/utils/transform.mjs":"iSy8E","./motion-value.mjs":"gQYlj","../../render/utils/setters.mjs":"5AEB8","../utils/get-value-transition.mjs":"hygFb","../optimized-appear/get-appear-id.mjs":"hNfUl","../../value/use-will-change/add-will-change.mjs":"jI8P2","../../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSy8E":[function(require,module,exports,__globalThis) {
/**
 * Generate a list of every possible transform key.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformPropOrder", ()=>transformPropOrder);
parcelHelpers.export(exports, "transformProps", ()=>transformProps);
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
];
/**
 * A quick lookup for transform props.
 */ const transformProps = new Set(transformPropOrder);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQYlj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateMotionValue", ()=>animateMotionValue);
var _timeConversionMjs = require("../../utils/time-conversion.mjs");
var _defaultTransitionsMjs = require("../utils/default-transitions.mjs");
var _getValueTransitionMjs = require("../utils/get-value-transition.mjs");
var _globalConfigMjs = require("../../utils/GlobalConfig.mjs");
var _useInstantTransitionStateMjs = require("../../utils/use-instant-transition-state.mjs");
var _getFinalKeyframeMjs = require("../animators/waapi/utils/get-final-keyframe.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
var _acceleratedAnimationMjs = require("../animators/AcceleratedAnimation.mjs");
var _mainThreadAnimationMjs = require("../animators/MainThreadAnimation.mjs");
var _groupPlaybackControlsMjs = require("../GroupPlaybackControls.mjs");
var _isTransitionDefinedMjs = require("../utils/is-transition-defined.mjs");
const animateMotionValue = (name, value, target, transition = {}, element, isHandoff)=>(onComplete)=>{
        const valueTransition = (0, _getValueTransitionMjs.getValueTransition)(transition, name) || {};
        /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */ const delay = valueTransition.delay || transition.delay || 0;
        /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */ let { elapsed = 0 } = transition;
        elapsed = elapsed - (0, _timeConversionMjs.secondsToMilliseconds)(delay);
        let options = {
            keyframes: Array.isArray(target) ? target : [
                null,
                target
            ],
            ease: "easeOut",
            velocity: value.getVelocity(),
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v)=>{
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: ()=>{
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
            name,
            motionValue: value,
            element: isHandoff ? undefined : element
        };
        /**
     * If there's no transition defined for this value, we can generate
     * unqiue transition settings for this value.
     */ if (!(0, _isTransitionDefinedMjs.isTransitionDefined)(valueTransition)) options = {
            ...options,
            ...(0, _defaultTransitionsMjs.getDefaultTransition)(name, options)
        };
        /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */ if (options.duration) options.duration = (0, _timeConversionMjs.secondsToMilliseconds)(options.duration);
        if (options.repeatDelay) options.repeatDelay = (0, _timeConversionMjs.secondsToMilliseconds)(options.repeatDelay);
        if (options.from !== undefined) options.keyframes[0] = options.from;
        let shouldSkip = false;
        if (options.type === false || options.duration === 0 && !options.repeatDelay) {
            options.duration = 0;
            if (options.delay === 0) shouldSkip = true;
        }
        if ((0, _useInstantTransitionStateMjs.instantAnimationState).current || (0, _globalConfigMjs.MotionGlobalConfig).skipAnimations) {
            shouldSkip = true;
            options.duration = 0;
            options.delay = 0;
        }
        /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */ if (shouldSkip && !isHandoff && value.get() !== undefined) {
            const finalKeyframe = (0, _getFinalKeyframeMjs.getFinalKeyframe)(options.keyframes, valueTransition);
            if (finalKeyframe !== undefined) {
                (0, _frameMjs.frame).update(()=>{
                    options.onUpdate(finalKeyframe);
                    options.onComplete();
                });
                // We still want to return some animation controls here rather
                // than returning undefined
                return new (0, _groupPlaybackControlsMjs.GroupPlaybackControls)([]);
            }
        }
        /**
     * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */ if (!isHandoff && (0, _acceleratedAnimationMjs.AcceleratedAnimation).supports(options)) return new (0, _acceleratedAnimationMjs.AcceleratedAnimation)(options);
        else return new (0, _mainThreadAnimationMjs.MainThreadAnimation)(options);
    };

},{"../../utils/time-conversion.mjs":"gdr8V","../utils/default-transitions.mjs":"4yIKR","../utils/get-value-transition.mjs":"hygFb","../../utils/GlobalConfig.mjs":"e6NaD","../../utils/use-instant-transition-state.mjs":"acYRG","../animators/waapi/utils/get-final-keyframe.mjs":"jLZPp","../../frameloop/frame.mjs":"3xPo8","../animators/AcceleratedAnimation.mjs":"5UDch","../animators/MainThreadAnimation.mjs":"8xbKM","../GroupPlaybackControls.mjs":"fGvAY","../utils/is-transition-defined.mjs":"4N4s0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdr8V":[function(require,module,exports,__globalThis) {
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>millisecondsToSeconds);
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>secondsToMilliseconds);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yIKR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultTransition", ()=>getDefaultTransition);
var _transformMjs = require("../../render/html/utils/transform.mjs");
const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
};
const criticallyDampedSpring = (target)=>({
        type: "spring",
        stiffness: 550,
        damping: target === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    });
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */ const ease = {
    type: "keyframes",
    ease: [
        0.25,
        0.1,
        0.35,
        1
    ],
    duration: 0.3
};
const getDefaultTransition = (valueKey, { keyframes })=>{
    if (keyframes.length > 2) return keyframesTransition;
    else if ((0, _transformMjs.transformProps).has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
    return ease;
};

},{"../../render/html/utils/transform.mjs":"iSy8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hygFb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueTransition", ()=>getValueTransition);
function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e6NaD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionGlobalConfig", ()=>MotionGlobalConfig);
const MotionGlobalConfig = {
    skipAnimations: false,
    useManualTiming: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acYRG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instantAnimationState", ()=>instantAnimationState);
const instantAnimationState = {
    current: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLZPp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFinalKeyframe", ()=>getFinalKeyframe);
const isNotNull = (value)=>value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xPo8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelFrame", ()=>cancelFrame);
parcelHelpers.export(exports, "frame", ()=>frame);
parcelHelpers.export(exports, "frameData", ()=>frameData);
parcelHelpers.export(exports, "frameSteps", ()=>frameSteps);
var _motionUtils = require("motion-utils");
var _batcherMjs = require("./batcher.mjs");
const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = (0, _batcherMjs.createRenderBatcher)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : (0, _motionUtils.noop), true);

},{"motion-utils":"9SDPC","./batcher.mjs":"3fYwv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9SDPC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>(0, _errorsMjs.invariant));
parcelHelpers.export(exports, "warning", ()=>(0, _errorsMjs.warning));
parcelHelpers.export(exports, "noop", ()=>(0, _noopMjs.noop));
var _errorsMjs = require("./errors.mjs");
var _noopMjs = require("./noop.mjs");

},{"./errors.mjs":"lGnlO","./noop.mjs":"3AXm9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGnlO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var _noopMjs = require("./noop.mjs");
let warning = (0, _noopMjs.noop);
let invariant = (0, _noopMjs.noop);
warning = (check, message)=>{
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = (check, message)=>{
    if (!check) throw new Error(message);
};

},{"./noop.mjs":"3AXm9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AXm9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
const noop = (any)=>any;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fYwv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderBatcher", ()=>createRenderBatcher);
parcelHelpers.export(exports, "stepsOrder", ()=>stepsOrder);
var _globalConfigMjs = require("../utils/GlobalConfig.mjs");
var _renderStepMjs = require("./render-step.mjs");
const stepsOrder = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender"
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    const flagRunNextFrame = ()=>runNextFrame = true;
    const steps = stepsOrder.reduce((acc, key)=>{
        acc[key] = (0, _renderStepMjs.createRenderStep)(flagRunNextFrame);
        return acc;
    }, {});
    const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
    const processBatch = ()=>{
        const timestamp = (0, _globalConfigMjs.MotionGlobalConfig).useManualTiming ? state.timestamp : performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed ? 1000 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        read.process(state);
        resolveKeyframes.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = ()=>{
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) scheduleNextBatch(processBatch);
    };
    const schedule = stepsOrder.reduce((acc, key)=>{
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false)=>{
            if (!runNextFrame) wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process)=>{
        for(let i = 0; i < stepsOrder.length; i++)steps[stepsOrder[i]].cancel(process);
    };
    return {
        schedule,
        cancel,
        state,
        steps
    };
}

},{"../utils/GlobalConfig.mjs":"e6NaD","./render-step.mjs":"61ioC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61ioC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderStep", ()=>createRenderStep);
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */ let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */ let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */ const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */ schedule: (callback, keepAlive = false, immediate = false)=>{
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive) toKeepAlive.add(callback);
            if (!queue.has(callback)) queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */ cancel: (callback)=>{
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */ process: (frameData)=>{
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */ if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [
                nextFrame,
                thisFrame
            ];
            // Clear the next frame queue
            nextFrame.clear();
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        }
    };
    return step;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UDch":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AcceleratedAnimation", ()=>AcceleratedAnimation);
var _anticipateMjs = require("../../easing/anticipate.mjs");
var _backMjs = require("../../easing/back.mjs");
var _circMjs = require("../../easing/circ.mjs");
var _domkeyframesResolverMjs = require("../../render/dom/DOMKeyframesResolver.mjs");
var _motionUtils = require("motion-utils");
var _timeConversionMjs = require("../../utils/time-conversion.mjs");
var _isGeneratorMjs = require("../generators/utils/is-generator.mjs");
var _baseAnimationMjs = require("./BaseAnimation.mjs");
var _mainThreadAnimationMjs = require("./MainThreadAnimation.mjs");
var _acceleratedValuesMjs = require("./utils/accelerated-values.mjs");
var _indexMjs = require("./waapi/index.mjs");
var _easingMjs = require("./waapi/easing.mjs");
var _attachTimelineMjs = require("./waapi/utils/attach-timeline.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
var _supportsLinearEasingMjs = require("./waapi/utils/supports-linear-easing.mjs");
var _supportsWaapiMjs = require("./waapi/utils/supports-waapi.mjs");
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */ const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ const maxDuration = 20000;
/**
 * Check if an animation can run natively via WAAPI or requires pregenerated keyframes.
 * WAAPI doesn't support spring or function easings so we run these as JS animation before
 * handing off.
 */ function requiresPregeneratedKeyframes(options) {
    return (0, _isGeneratorMjs.isGenerator)(options.type) || options.type === "spring" || !(0, _easingMjs.isWaapiSupportedEasing)(options.ease);
}
function pregenerateKeyframes(keyframes, options) {
    /**
     * Create a main-thread animation to pregenerate keyframes.
     * We sample this at regular intervals to generate keyframes that we then
     * linearly interpolate between.
     */ const sampleAnimation = new (0, _mainThreadAnimationMjs.MainThreadAnimation)({
        ...options,
        keyframes,
        repeat: 0,
        delay: 0,
        isGenerator: true
    });
    let state = {
        done: false,
        value: keyframes[0]
    };
    const pregeneratedKeyframes = [];
    /**
     * Bail after 20 seconds of pre-generated keyframes as it's likely
     * we're heading for an infinite loop.
     */ let t = 0;
    while(!state.done && t < maxDuration){
        state = sampleAnimation.sample(t);
        pregeneratedKeyframes.push(state.value);
        t += sampleDelta;
    }
    return {
        times: undefined,
        keyframes: pregeneratedKeyframes,
        duration: t - sampleDelta,
        ease: "linear"
    };
}
const unsupportedEasingFunctions = {
    anticipate: (0, _anticipateMjs.anticipate),
    backInOut: (0, _backMjs.backInOut),
    circInOut: (0, _circMjs.circInOut)
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
class AcceleratedAnimation extends (0, _baseAnimationMjs.BaseAnimation) {
    constructor(options){
        super(options);
        const { name, motionValue, element, keyframes } = this.options;
        this.resolver = new (0, _domkeyframesResolverMjs.DOMKeyframesResolver)(keyframes, (resolvedKeyframes, finalKeyframe)=>this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    initPlayback(keyframes, finalKeyframe) {
        var _a;
        let { duration = 300, times, ease, type, motionValue, name, startTime } = this.options;
        /**
         * If element has since been unmounted, return false to indicate
         * the animation failed to initialised.
         */ if (!((_a = motionValue.owner) === null || _a === void 0 ? void 0 : _a.current)) return false;
        /**
         * If the user has provided an easing function name that isn't supported
         * by WAAPI (like "anticipate"), we need to provide the corressponding
         * function. This will later get converted to a linear() easing function.
         */ if (typeof ease === "string" && (0, _supportsLinearEasingMjs.supportsLinearEasing)() && isUnsupportedEase(ease)) ease = unsupportedEasingFunctions[ease];
        /**
         * If this animation needs pre-generated keyframes then generate.
         */ if (requiresPregeneratedKeyframes(this.options)) {
            const { onComplete, onUpdate, motionValue, element, ...options } = this.options;
            const pregeneratedAnimation = pregenerateKeyframes(keyframes, options);
            keyframes = pregeneratedAnimation.keyframes;
            // If this is a very short animation, ensure we have
            // at least two keyframes to animate between as older browsers
            // can't animate between a single keyframe.
            if (keyframes.length === 1) keyframes[1] = keyframes[0];
            duration = pregeneratedAnimation.duration;
            times = pregeneratedAnimation.times;
            ease = pregeneratedAnimation.ease;
            type = "keyframes";
        }
        const animation = (0, _indexMjs.startWaapiAnimation)(motionValue.owner.current, name, keyframes, {
            ...this.options,
            duration,
            times,
            ease
        });
        // Override the browser calculated startTime with one synchronised to other JS
        // and WAAPI animations starting this event loop.
        animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        if (this.pendingTimeline) {
            (0, _attachTimelineMjs.attachTimeline)(animation, this.pendingTimeline);
            this.pendingTimeline = undefined;
        } else /**
             * Prefer the `onfinish` prop as it's more widely supported than
             * the `finished` promise.
             *
             * Here, we synchronously set the provided MotionValue to the end
             * keyframe. If we didn't, when the WAAPI animation is finished it would
             * be removed from the element which would then revert to its old styles.
             */ animation.onfinish = ()=>{
            const { onComplete } = this.options;
            motionValue.set((0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
            onComplete && onComplete();
            this.cancel();
            this.resolveFinishedPromise();
        };
        return {
            animation,
            duration,
            times,
            type,
            ease,
            keyframes: keyframes
        };
    }
    get duration() {
        const { resolved } = this;
        if (!resolved) return 0;
        const { duration } = resolved;
        return (0, _timeConversionMjs.millisecondsToSeconds)(duration);
    }
    get time() {
        const { resolved } = this;
        if (!resolved) return 0;
        const { animation } = resolved;
        return (0, _timeConversionMjs.millisecondsToSeconds)(animation.currentTime || 0);
    }
    set time(newTime) {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.currentTime = (0, _timeConversionMjs.secondsToMilliseconds)(newTime);
    }
    get speed() {
        const { resolved } = this;
        if (!resolved) return 1;
        const { animation } = resolved;
        return animation.playbackRate;
    }
    set speed(newSpeed) {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.playbackRate = newSpeed;
    }
    get state() {
        const { resolved } = this;
        if (!resolved) return "idle";
        const { animation } = resolved;
        return animation.playState;
    }
    get startTime() {
        const { resolved } = this;
        if (!resolved) return null;
        const { animation } = resolved;
        // Coerce to number as TypeScript incorrectly types this
        // as CSSNumberish
        return animation.startTime;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */ attachTimeline(timeline) {
        if (!this._resolved) this.pendingTimeline = timeline;
        else {
            const { resolved } = this;
            if (!resolved) return 0, _motionUtils.noop;
            const { animation } = resolved;
            (0, _attachTimelineMjs.attachTimeline)(animation, timeline);
        }
        return 0, _motionUtils.noop;
    }
    play() {
        if (this.isStopped) return;
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        if (animation.playState === "finished") this.updateFinishedPromise();
        animation.play();
    }
    pause() {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.pause();
    }
    stop() {
        this.resolver.cancel();
        this.isStopped = true;
        if (this.state === "idle") return;
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        const { resolved } = this;
        if (!resolved) return;
        const { animation, keyframes, duration, type, ease, times } = resolved;
        if (animation.playState === "idle" || animation.playState === "finished") return;
        /**
         * WAAPI doesn't natively have any interruption capabilities.
         *
         * Rather than read commited styles back out of the DOM, we can
         * create a renderless JS animation and sample it twice to calculate
         * its current value, "previous" value, and therefore allow
         * Motion to calculate velocity for any subsequent animation.
         */ if (this.time) {
            const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
            const sampleAnimation = new (0, _mainThreadAnimationMjs.MainThreadAnimation)({
                ...options,
                keyframes,
                duration,
                type,
                ease,
                times,
                isGenerator: true
            });
            const sampleTime = (0, _timeConversionMjs.secondsToMilliseconds)(this.time);
            motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
        }
        const { onStop } = this.options;
        onStop && onStop();
        this.cancel();
    }
    complete() {
        const { resolved } = this;
        if (!resolved) return;
        resolved.animation.finish();
    }
    cancel() {
        const { resolved } = this;
        if (!resolved) return;
        resolved.animation.cancel();
    }
    static supports(options) {
        const { motionValue, name, repeatDelay, repeatType, damping, type } = options;
        return (0, _supportsWaapiMjs.supportsWaapi)() && name && (0, _acceleratedValuesMjs.acceleratedValues).has(name) && motionValue && motionValue.owner && motionValue.owner.current instanceof HTMLElement && /**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */ !motionValue.owner.getProps().onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
    }
}

},{"../../easing/anticipate.mjs":"1Nbn6","../../easing/back.mjs":"d5Nwb","../../easing/circ.mjs":"LdSua","../../render/dom/DOMKeyframesResolver.mjs":"8RcLh","motion-utils":"9SDPC","../../utils/time-conversion.mjs":"gdr8V","../generators/utils/is-generator.mjs":"6lzNM","./BaseAnimation.mjs":"bBJJ5","./MainThreadAnimation.mjs":"8xbKM","./utils/accelerated-values.mjs":"7amEM","./waapi/index.mjs":"br5tE","./waapi/easing.mjs":"2wybM","./waapi/utils/attach-timeline.mjs":"b1ejy","./waapi/utils/get-final-keyframe.mjs":"jLZPp","./waapi/utils/supports-linear-easing.mjs":"aqR7r","./waapi/utils/supports-waapi.mjs":"hmDTy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Nbn6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "anticipate", ()=>anticipate);
var _backMjs = require("./back.mjs");
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, _backMjs.backIn)(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

},{"./back.mjs":"d5Nwb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5Nwb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backIn", ()=>backIn);
parcelHelpers.export(exports, "backInOut", ()=>backInOut);
parcelHelpers.export(exports, "backOut", ()=>backOut);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
var _mirrorMjs = require("./modifiers/mirror.mjs");
var _reverseMjs = require("./modifiers/reverse.mjs");
const backOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, _reverseMjs.reverseEasing)(backOut);
const backInOut = /*@__PURE__*/ (0, _mirrorMjs.mirrorEasing)(backIn);

},{"./cubic-bezier.mjs":"hC5AC","./modifiers/mirror.mjs":"8JYdZ","./modifiers/reverse.mjs":"9dSeG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hC5AC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var _motionUtils = require("motion-utils");
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, _motionUtils.noop;
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

},{"motion-utils":"9SDPC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JYdZ":[function(require,module,exports,__globalThis) {
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mirrorEasing", ()=>mirrorEasing);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dSeG":[function(require,module,exports,__globalThis) {
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reverseEasing", ()=>reverseEasing);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"LdSua":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "circIn", ()=>circIn);
parcelHelpers.export(exports, "circInOut", ()=>circInOut);
parcelHelpers.export(exports, "circOut", ()=>circOut);
var _mirrorMjs = require("./modifiers/mirror.mjs");
var _reverseMjs = require("./modifiers/reverse.mjs");
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, _reverseMjs.reverseEasing)(circIn);
const circInOut = (0, _mirrorMjs.mirrorEasing)(circIn);

},{"./modifiers/mirror.mjs":"8JYdZ","./modifiers/reverse.mjs":"9dSeG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8RcLh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMKeyframesResolver", ()=>DOMKeyframesResolver);
var _isNoneMjs = require("../../animation/utils/is-none.mjs");
var _cssVariablesConversionMjs = require("./utils/css-variables-conversion.mjs");
var _isCssVariableMjs = require("./utils/is-css-variable.mjs");
var _unitConversionMjs = require("./utils/unit-conversion.mjs");
var _dimensionsMjs = require("./value-types/dimensions.mjs");
var _keyframesResolverMjs = require("../utils/KeyframesResolver.mjs");
var _makeNoneAnimatableMjs = require("../html/utils/make-none-animatable.mjs");
class DOMKeyframesResolver extends (0, _keyframesResolverMjs.KeyframeResolver) {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element){
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current) return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */ for(let i = 0; i < unresolvedKeyframes.length; i++){
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if ((0, _isCssVariableMjs.isCSSVariableToken)(keyframe)) {
                    const resolved = (0, _cssVariablesConversionMjs.getVariableValue)(keyframe, element.current);
                    if (resolved !== undefined) unresolvedKeyframes[i] = resolved;
                    if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */ this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */ if (!(0, _unitConversionMjs.positionalKeys).has(name) || unresolvedKeyframes.length !== 2) return;
        const [origin, target] = unresolvedKeyframes;
        const originType = (0, _dimensionsMjs.findDimensionValueType)(origin);
        const targetType = (0, _dimensionsMjs.findDimensionValueType)(target);
        /**
         * Either we don't recognise these value types or we can animate between them.
         */ if (originType === targetType) return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */ if ((0, _unitConversionMjs.isNumOrPxType)(originType) && (0, _unitConversionMjs.isNumOrPxType)(targetType)) for(let i = 0; i < unresolvedKeyframes.length; i++){
            const value = unresolvedKeyframes[i];
            if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
        }
        else /**
             * Else, the only way to resolve this is by measuring the element.
             */ this.needsMeasurement = true;
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for(let i = 0; i < unresolvedKeyframes.length; i++)if ((0, _isNoneMjs.isNone)(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
        if (noneKeyframeIndexes.length) (0, _makeNoneAnimatableMjs.makeNoneKeyframesAnimatable)(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current) return;
        if (name === "height") this.suspendedScrollY = window.pageYOffset;
        this.measuredOrigin = (0, _unitConversionMjs.positionalValues)[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
    measureEndState() {
        var _a;
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current) return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = (0, _unitConversionMjs.positionalValues)[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) this.finalKeyframe = finalKeyframe;
        // If we removed transform values, reapply them before the next render
        if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue])=>{
            element.getValue(unsetTransformName).set(unsetTransformValue);
        });
        this.resolveNoneKeyframes();
    }
}

},{"../../animation/utils/is-none.mjs":"hb2Jm","./utils/css-variables-conversion.mjs":"d2XUy","./utils/is-css-variable.mjs":"8qZz5","./utils/unit-conversion.mjs":"fhnP2","./value-types/dimensions.mjs":"3Yt0V","../utils/KeyframesResolver.mjs":"fsWvb","../html/utils/make-none-animatable.mjs":"fttVV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hb2Jm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNone", ()=>isNone);
var _isZeroValueStringMjs = require("../../utils/is-zero-value-string.mjs");
function isNone(value) {
    if (typeof value === "number") return value === 0;
    else if (value !== null) return value === "none" || value === "0" || (0, _isZeroValueStringMjs.isZeroValueString)(value);
    else return true;
}

},{"../../utils/is-zero-value-string.mjs":"45kz9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45kz9":[function(require,module,exports,__globalThis) {
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isZeroValueString", ()=>isZeroValueString);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2XUy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getVariableValue", ()=>getVariableValue);
parcelHelpers.export(exports, "parseCSSVariable", ()=>parseCSSVariable);
var _motionUtils = require("motion-utils");
var _isNumericalStringMjs = require("../../../utils/is-numerical-string.mjs");
var _isCssVariableMjs = require("./is-css-variable.mjs");
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */ const splitCSSVariableRegex = // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match) return [
        , 
    ];
    const [, token1, token2, fallback] = match;
    return [
        `--${token1 !== null && token1 !== void 0 ? token1 : token2}`,
        fallback
    ];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0, _motionUtils.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token) return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return (0, _isNumericalStringMjs.isNumericalString)(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0, _isCssVariableMjs.isCSSVariableToken)(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

},{"motion-utils":"9SDPC","../../../utils/is-numerical-string.mjs":"c9b9u","./is-css-variable.mjs":"8qZz5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9b9u":[function(require,module,exports,__globalThis) {
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumericalString", ()=>isNumericalString);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qZz5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCSSVariableName", ()=>isCSSVariableName);
parcelHelpers.export(exports, "isCSSVariableToken", ()=>isCSSVariableToken);
const checkStringStartsWith = (token)=>(key)=>typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value)=>{
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken) return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fhnP2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumOrPxType", ()=>isNumOrPxType);
parcelHelpers.export(exports, "positionalKeys", ()=>positionalKeys);
parcelHelpers.export(exports, "positionalValues", ()=>positionalValues);
parcelHelpers.export(exports, "removeNonTranslationalTransform", ()=>removeNonTranslationalTransform);
var _transformMjs = require("../../html/utils/transform.mjs");
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY"
]);
const isNumOrPxType = (v)=>v === (0, _indexMjs.number) || v === (0, _unitsMjs.px);
const getPosFromMatrix = (matrix, pos)=>parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3)=>(_bbox, { transform })=>{
        if (transform === "none" || !transform) return 0;
        const matrix3d = transform.match(/^matrix3d\((.+)\)$/u);
        if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
        else {
            const matrix = transform.match(/^matrix\((.+)\)$/u);
            if (matrix) return getPosFromMatrix(matrix[1], pos2);
            else return 0;
        }
    };
const transformKeys = new Set([
    "x",
    "y",
    "z"
]);
const nonTranslationalTransformKeys = (0, _transformMjs.transformPropOrder).filter((key)=>!transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key)=>{
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([
                key,
                value.get()
            ]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" })=>x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" })=>y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top })=>parseFloat(top),
    left: (_bbox, { left })=>parseFloat(left),
    bottom: ({ y }, { top })=>parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left })=>parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

},{"../../html/utils/transform.mjs":"iSy8E","../../../value/types/numbers/index.mjs":"bI9mf","../../../value/types/numbers/units.mjs":"lGBHA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bI9mf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alpha", ()=>alpha);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "scale", ()=>scale);
var _clampMjs = require("../../../utils/clamp.mjs");
const number = {
    test: (v)=>typeof v === "number",
    parse: parseFloat,
    transform: (v)=>v
};
const alpha = {
    ...number,
    transform: (v)=>(0, _clampMjs.clamp)(0, 1, v)
};
const scale = {
    ...number,
    default: 1
};

},{"../../../utils/clamp.mjs":"aZOh4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZOh4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGBHA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "percent", ()=>percent);
parcelHelpers.export(exports, "progressPercentage", ()=>progressPercentage);
parcelHelpers.export(exports, "px", ()=>px);
parcelHelpers.export(exports, "vh", ()=>vh);
parcelHelpers.export(exports, "vw", ()=>vw);
const createUnitType = (unit)=>({
        test: (v)=>typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
        parse: parseFloat,
        transform: (v)=>`${v}${unit}`
    });
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v)=>percent.parse(v) / 100,
    transform: (v)=>percent.transform(v * 100)
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Yt0V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dimensionValueTypes", ()=>dimensionValueTypes);
parcelHelpers.export(exports, "findDimensionValueType", ()=>findDimensionValueType);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
var _testMjs = require("./test.mjs");
var _typeAutoMjs = require("./type-auto.mjs");
/**
 * A list of value types commonly used for dimensions
 */ const dimensionValueTypes = [
    (0, _indexMjs.number),
    (0, _unitsMjs.px),
    (0, _unitsMjs.percent),
    (0, _unitsMjs.degrees),
    (0, _unitsMjs.vw),
    (0, _unitsMjs.vh),
    (0, _typeAutoMjs.auto)
];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */ const findDimensionValueType = (v)=>dimensionValueTypes.find((0, _testMjs.testValueType)(v));

},{"../../../value/types/numbers/index.mjs":"bI9mf","../../../value/types/numbers/units.mjs":"lGBHA","./test.mjs":"kQneZ","./type-auto.mjs":"fzm2b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kQneZ":[function(require,module,exports,__globalThis) {
/**
 * Tests a provided value against a ValueType
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testValueType", ()=>testValueType);
const testValueType = (v)=>(type)=>type.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fzm2b":[function(require,module,exports,__globalThis) {
/**
 * ValueType for "auto"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "auto", ()=>auto);
const auto = {
    test: (v)=>v === "auto",
    parse: (v)=>v
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsWvb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyframeResolver", ()=>KeyframeResolver);
parcelHelpers.export(exports, "flushKeyframeResolvers", ()=>flushKeyframeResolvers);
var _unitConversionMjs = require("../dom/utils/unit-conversion.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver)=>resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver)=>resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */ elementsToMeasure.forEach((element)=>{
            const removedTransforms = (0, _unitConversionMjs.removeNonTranslationalTransform)(element);
            if (!removedTransforms.length) return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver)=>resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element)=>{
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) restore.forEach(([key, value])=>{
                var _a;
                (_a = element.getValue(key)) === null || _a === void 0 || _a.set(value);
            });
        });
        // Read
        resolversToMeasure.forEach((resolver)=>resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver)=>{
            if (resolver.suspendedScrollY !== undefined) window.scrollTo(0, resolver.suspendedScrollY);
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver)=>resolver.complete());
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver)=>{
        resolver.readKeyframes();
        if (resolver.needsMeasurement) anyNeedsMeasurement = true;
    });
}
function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false){
        /**
         * Track whether this resolver has completed. Once complete, it never
         * needs to attempt keyframe resolution again.
         */ this.isComplete = false;
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */ this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */ this.needsMeasurement = false;
        /**
         * Track whether this resolver is currently scheduled to resolve
         * to allow it to be cancelled and resumed externally.
         */ this.isScheduled = false;
        this.unresolvedKeyframes = [
            ...unresolvedKeyframes
        ];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.isScheduled = true;
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                (0, _frameMjs.frame).read(readAllKeyframes);
                (0, _frameMjs.frame).resolveKeyframes(measureAllKeyframes);
            }
        } else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        /**
         * If a keyframe is null, we hydrate it either by reading it from
         * the instance, or propagating from previous keyframes.
         */ for(let i = 0; i < unresolvedKeyframes.length; i++)if (unresolvedKeyframes[i] === null) {
            /**
                 * If the first keyframe is null, we need to find its value by sampling the element
                 */ if (i === 0) {
                const currentValue = motionValue === null || motionValue === void 0 ? void 0 : motionValue.get();
                const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                if (currentValue !== undefined) unresolvedKeyframes[0] = currentValue;
                else if (element && name) {
                    const valueAsRead = element.readValue(name, finalKeyframe);
                    if (valueAsRead !== undefined && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
                }
                if (unresolvedKeyframes[0] === undefined) unresolvedKeyframes[0] = finalKeyframe;
                if (motionValue && currentValue === undefined) motionValue.set(unresolvedKeyframes[0]);
            } else unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
        }
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = true;
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
        toResolve.delete(this);
    }
    cancel() {
        if (!this.isComplete) {
            this.isScheduled = false;
            toResolve.delete(this);
        }
    }
    resume() {
        if (!this.isComplete) this.scheduleResolve();
    }
}

},{"../dom/utils/unit-conversion.mjs":"fhnP2","../../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fttVV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeNoneKeyframesAnimatable", ()=>makeNoneKeyframesAnimatable);
var _indexMjs = require("../../../value/types/complex/index.mjs");
var _animatableNoneMjs = require("../../dom/value-types/animatable-none.mjs");
/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */ const invalidTemplates = new Set([
    "auto",
    "none",
    "0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while(i < unresolvedKeyframes.length && !animatableTemplate){
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && (0, _indexMjs.analyseComplexValue)(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
        i++;
    }
    if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes)unresolvedKeyframes[noneIndex] = (0, _animatableNoneMjs.getAnimatableNone)(name, animatableTemplate);
}

},{"../../../value/types/complex/index.mjs":"lmoWV","../../dom/value-types/animatable-none.mjs":"imHSe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmoWV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analyseComplexValue", ()=>analyseComplexValue);
parcelHelpers.export(exports, "complex", ()=>complex);
var _indexMjs = require("../color/index.mjs");
var _colorRegexMjs = require("../utils/color-regex.mjs");
var _floatRegexMjs = require("../utils/float-regex.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
function test(v) {
    var _a, _b;
    return isNaN(v) && typeof v === "string" && (((_a = v.match((0, _floatRegexMjs.floatRegex))) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match((0, _colorRegexMjs.colorRegex))) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: []
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue)=>{
        if ((0, _indexMjs.color).test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push((0, _indexMjs.color).parse(parsedValue));
        } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        } else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return {
        values,
        split,
        indexes,
        types
    };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v)=>{
        let output = "";
        for(let i = 0; i < numSections; i++){
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) output += (0, _sanitizeMjs.sanitize)(v[i]);
                else if (type === COLOR_TOKEN) output += (0, _indexMjs.color).transform(v[i]);
                else output += v[i];
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v)=>typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone
};

},{"../color/index.mjs":"1nAma","../utils/color-regex.mjs":"dbDjf","../utils/float-regex.mjs":"XMjdC","../utils/sanitize.mjs":"acW7A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1nAma":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>color);
var _hexMjs = require("./hex.mjs");
var _hslaMjs = require("./hsla.mjs");
var _rgbaMjs = require("./rgba.mjs");
const color = {
    test: (v)=>(0, _rgbaMjs.rgba).test(v) || (0, _hexMjs.hex).test(v) || (0, _hslaMjs.hsla).test(v),
    parse: (v)=>{
        if ((0, _rgbaMjs.rgba).test(v)) return (0, _rgbaMjs.rgba).parse(v);
        else if ((0, _hslaMjs.hsla).test(v)) return (0, _hslaMjs.hsla).parse(v);
        else return (0, _hexMjs.hex).parse(v);
    },
    transform: (v)=>{
        return typeof v === "string" ? v : v.hasOwnProperty("red") ? (0, _rgbaMjs.rgba).transform(v) : (0, _hslaMjs.hsla).transform(v);
    }
};

},{"./hex.mjs":"5epZU","./hsla.mjs":"5FDku","./rgba.mjs":"4MXDV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5epZU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hex", ()=>hex);
var _rgbaMjs = require("./rgba.mjs");
var _utilsMjs = require("./utils.mjs");
function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
    // Or we have 3 characters, ie #F00
    } else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    };
}
const hex = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("#"),
    parse: parseHex,
    transform: (0, _rgbaMjs.rgba).transform
};

},{"./rgba.mjs":"4MXDV","./utils.mjs":"kSu8U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4MXDV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbUnit", ()=>rgbUnit);
parcelHelpers.export(exports, "rgba", ()=>rgba);
var _clampMjs = require("../../../utils/clamp.mjs");
var _indexMjs = require("../numbers/index.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
var _utilsMjs = require("./utils.mjs");
const clampRgbUnit = (v)=>(0, _clampMjs.clamp)(0, 255, v);
const rgbUnit = {
    ...(0, _indexMjs.number),
    transform: (v)=>Math.round(clampRgbUnit(v))
};
const rgba = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("rgb", "red"),
    parse: /*@__PURE__*/ (0, _utilsMjs.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 })=>"rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + (0, _sanitizeMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")"
};

},{"../../../utils/clamp.mjs":"aZOh4","../numbers/index.mjs":"bI9mf","../utils/sanitize.mjs":"acW7A","./utils.mjs":"kSu8U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acW7A":[function(require,module,exports,__globalThis) {
// If this number is a decimal, make it just five decimal places
// to avoid exponents
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sanitize", ()=>sanitize);
const sanitize = (v)=>Math.round(v * 100000) / 100000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSu8U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isColorString", ()=>isColorString);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
var _floatRegexMjs = require("../utils/float-regex.mjs");
var _isNullishMjs = require("../utils/is-nullish.mjs");
var _singleColorRegexMjs = require("../utils/single-color-regex.mjs");
/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */ const isColorString = (type, testProp)=>(v)=>{
        return Boolean(typeof v === "string" && (0, _singleColorRegexMjs.singleColorRegex).test(v) && v.startsWith(type) || testProp && !(0, _isNullishMjs.isNullish)(v) && Object.prototype.hasOwnProperty.call(v, testProp));
    };
const splitColor = (aName, bName, cName)=>(v)=>{
        if (typeof v !== "string") return v;
        const [a, b, c, alpha] = v.match((0, _floatRegexMjs.floatRegex));
        return {
            [aName]: parseFloat(a),
            [bName]: parseFloat(b),
            [cName]: parseFloat(c),
            alpha: alpha !== undefined ? parseFloat(alpha) : 1
        };
    };

},{"../utils/float-regex.mjs":"XMjdC","../utils/is-nullish.mjs":"32tbp","../utils/single-color-regex.mjs":"hkB7F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"XMjdC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "floatRegex", ()=>floatRegex);
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32tbp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNullish", ()=>isNullish);
function isNullish(v) {
    return v == null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkB7F":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "singleColorRegex", ()=>singleColorRegex);
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FDku":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsla", ()=>hsla);
var _indexMjs = require("../numbers/index.mjs");
var _unitsMjs = require("../numbers/units.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
var _utilsMjs = require("./utils.mjs");
const hsla = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("hsl", "hue"),
    parse: /*@__PURE__*/ (0, _utilsMjs.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 })=>{
        return "hsla(" + Math.round(hue) + ", " + (0, _unitsMjs.percent).transform((0, _sanitizeMjs.sanitize)(saturation)) + ", " + (0, _unitsMjs.percent).transform((0, _sanitizeMjs.sanitize)(lightness)) + ", " + (0, _sanitizeMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")";
    }
};

},{"../numbers/index.mjs":"bI9mf","../numbers/units.mjs":"lGBHA","../utils/sanitize.mjs":"acW7A","./utils.mjs":"kSu8U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbDjf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorRegex", ()=>colorRegex);
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"imHSe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnimatableNone", ()=>getAnimatableNone);
var _indexMjs = require("../../../value/types/complex/index.mjs");
var _filterMjs = require("../../../value/types/complex/filter.mjs");
var _defaultsMjs = require("./defaults.mjs");
function getAnimatableNone(key, value) {
    let defaultValueType = (0, _defaultsMjs.getDefaultValueType)(key);
    if (defaultValueType !== (0, _filterMjs.filter)) defaultValueType = (0, _indexMjs.complex);
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : undefined;
}

},{"../../../value/types/complex/index.mjs":"lmoWV","../../../value/types/complex/filter.mjs":"8VF6A","./defaults.mjs":"1Ajoh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8VF6A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>filter);
var _indexMjs = require("./index.mjs");
var _floatRegexMjs = require("../utils/float-regex.mjs");
/**
 * Properties that should default to 1 or 100%
 */ const maxDefaults = new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow") return v;
    const [number] = value.match((0, _floatRegexMjs.floatRegex)) || [];
    if (!number) return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value) defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ...(0, _indexMjs.complex),
    getAnimatableNone: (v)=>{
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
};

},{"./index.mjs":"lmoWV","../utils/float-regex.mjs":"XMjdC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ajoh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultValueTypes", ()=>defaultValueTypes);
parcelHelpers.export(exports, "getDefaultValueType", ()=>getDefaultValueType);
var _indexMjs = require("../../../value/types/color/index.mjs");
var _filterMjs = require("../../../value/types/complex/filter.mjs");
var _numberMjs = require("./number.mjs");
/**
 * A map of default value types for common values
 */ const defaultValueTypes = {
    ...(0, _numberMjs.numberValueTypes),
    color: // Color props
    (0, _indexMjs.color),
    backgroundColor: (0, _indexMjs.color),
    outlineColor: (0, _indexMjs.color),
    fill: (0, _indexMjs.color),
    stroke: (0, _indexMjs.color),
    // Border props
    borderColor: (0, _indexMjs.color),
    borderTopColor: (0, _indexMjs.color),
    borderRightColor: (0, _indexMjs.color),
    borderBottomColor: (0, _indexMjs.color),
    borderLeftColor: (0, _indexMjs.color),
    filter: (0, _filterMjs.filter),
    WebkitFilter: (0, _filterMjs.filter)
};
/**
 * Gets the default ValueType for the provided value key
 */ const getDefaultValueType = (key)=>defaultValueTypes[key];

},{"../../../value/types/color/index.mjs":"1nAma","../../../value/types/complex/filter.mjs":"8VF6A","./number.mjs":"biQiX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"biQiX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numberValueTypes", ()=>numberValueTypes);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
var _numberBrowserMjs = require("./number-browser.mjs");
var _transformMjs = require("./transform.mjs");
var _typeIntMjs = require("./type-int.mjs");
const numberValueTypes = {
    ...(0, _numberBrowserMjs.browserNumberValueTypes),
    ...(0, _transformMjs.transformValueTypes),
    zIndex: (0, _typeIntMjs.int),
    size: (0, _unitsMjs.px),
    // SVG
    fillOpacity: (0, _indexMjs.alpha),
    strokeOpacity: (0, _indexMjs.alpha),
    numOctaves: (0, _typeIntMjs.int)
};

},{"../../../value/types/numbers/index.mjs":"bI9mf","../../../value/types/numbers/units.mjs":"lGBHA","./number-browser.mjs":"cXyGP","./transform.mjs":"7MnFp","./type-int.mjs":"cWdiE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXyGP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "browserNumberValueTypes", ()=>browserNumberValueTypes);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const browserNumberValueTypes = {
    // Border props
    borderWidth: (0, _unitsMjs.px),
    borderTopWidth: (0, _unitsMjs.px),
    borderRightWidth: (0, _unitsMjs.px),
    borderBottomWidth: (0, _unitsMjs.px),
    borderLeftWidth: (0, _unitsMjs.px),
    borderRadius: (0, _unitsMjs.px),
    radius: (0, _unitsMjs.px),
    borderTopLeftRadius: (0, _unitsMjs.px),
    borderTopRightRadius: (0, _unitsMjs.px),
    borderBottomRightRadius: (0, _unitsMjs.px),
    borderBottomLeftRadius: (0, _unitsMjs.px),
    // Positioning props
    width: (0, _unitsMjs.px),
    maxWidth: (0, _unitsMjs.px),
    height: (0, _unitsMjs.px),
    maxHeight: (0, _unitsMjs.px),
    top: (0, _unitsMjs.px),
    right: (0, _unitsMjs.px),
    bottom: (0, _unitsMjs.px),
    left: (0, _unitsMjs.px),
    // Spacing props
    padding: (0, _unitsMjs.px),
    paddingTop: (0, _unitsMjs.px),
    paddingRight: (0, _unitsMjs.px),
    paddingBottom: (0, _unitsMjs.px),
    paddingLeft: (0, _unitsMjs.px),
    margin: (0, _unitsMjs.px),
    marginTop: (0, _unitsMjs.px),
    marginRight: (0, _unitsMjs.px),
    marginBottom: (0, _unitsMjs.px),
    marginLeft: (0, _unitsMjs.px),
    // Misc
    backgroundPositionX: (0, _unitsMjs.px),
    backgroundPositionY: (0, _unitsMjs.px)
};

},{"../../../value/types/numbers/units.mjs":"lGBHA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7MnFp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformValueTypes", ()=>transformValueTypes);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const transformValueTypes = {
    rotate: (0, _unitsMjs.degrees),
    rotateX: (0, _unitsMjs.degrees),
    rotateY: (0, _unitsMjs.degrees),
    rotateZ: (0, _unitsMjs.degrees),
    scale: (0, _indexMjs.scale),
    scaleX: (0, _indexMjs.scale),
    scaleY: (0, _indexMjs.scale),
    scaleZ: (0, _indexMjs.scale),
    skew: (0, _unitsMjs.degrees),
    skewX: (0, _unitsMjs.degrees),
    skewY: (0, _unitsMjs.degrees),
    distance: (0, _unitsMjs.px),
    translateX: (0, _unitsMjs.px),
    translateY: (0, _unitsMjs.px),
    translateZ: (0, _unitsMjs.px),
    x: (0, _unitsMjs.px),
    y: (0, _unitsMjs.px),
    z: (0, _unitsMjs.px),
    perspective: (0, _unitsMjs.px),
    transformPerspective: (0, _unitsMjs.px),
    opacity: (0, _indexMjs.alpha),
    originX: (0, _unitsMjs.progressPercentage),
    originY: (0, _unitsMjs.progressPercentage),
    originZ: (0, _unitsMjs.px)
};

},{"../../../value/types/numbers/index.mjs":"bI9mf","../../../value/types/numbers/units.mjs":"lGBHA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWdiE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "int", ()=>int);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
const int = {
    ...(0, _indexMjs.number),
    transform: Math.round
};

},{"../../../value/types/numbers/index.mjs":"bI9mf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6lzNM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isGenerator", ()=>isGenerator);
function isGenerator(type) {
    return typeof type === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBJJ5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseAnimation", ()=>BaseAnimation);
var _syncTimeMjs = require("../../frameloop/sync-time.mjs");
var _keyframesResolverMjs = require("../../render/utils/KeyframesResolver.mjs");
var _useInstantTransitionStateMjs = require("../../utils/use-instant-transition-state.mjs");
var _canAnimateMjs = require("./utils/can-animate.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */ const MAX_RESOLVE_DELAY = 40;
class BaseAnimation {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }){
        // Track whether the animation has been stopped. Stopped animations won't restart.
        this.isStopped = false;
        this.hasAttemptedResolve = false;
        this.createdAt = (0, _syncTimeMjs.time).now();
        this.options = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            ...options
        };
        this.updateFinishedPromise();
    }
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */ calcStartTime() {
        if (!this.resolvedAt) return this.createdAt;
        return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */ get resolved() {
        if (!this._resolved && !this.hasAttemptedResolve) (0, _keyframesResolverMjs.flushKeyframeResolvers)();
        return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */ onKeyframesResolved(keyframes, finalKeyframe) {
        this.resolvedAt = (0, _syncTimeMjs.time).now();
        this.hasAttemptedResolve = true;
        const { name, type, velocity, delay, onComplete, onUpdate, isGenerator } = this.options;
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */ if (!isGenerator && !(0, _canAnimateMjs.canAnimate)(keyframes, name, type, velocity)) {
            // Finish immediately
            if ((0, _useInstantTransitionStateMjs.instantAnimationState).current || !delay) {
                onUpdate === null || onUpdate === void 0 || onUpdate((0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete === null || onComplete === void 0 || onComplete();
                this.resolveFinishedPromise();
                return;
            } else this.options.duration = 0;
        }
        const resolvedAnimation = this.initPlayback(keyframes, finalKeyframe);
        if (resolvedAnimation === false) return;
        this._resolved = {
            keyframes,
            finalKeyframe,
            ...resolvedAnimation
        };
        this.onPostResolved();
    }
    onPostResolved() {}
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */ then(resolve, reject) {
        return this.currentFinishedPromise.then(resolve, reject);
    }
    flatten() {
        this.options.type = "keyframes";
        this.options.ease = "linear";
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((resolve)=>{
            this.resolveFinishedPromise = resolve;
        });
    }
}

},{"../../frameloop/sync-time.mjs":"7bjmD","../../render/utils/KeyframesResolver.mjs":"fsWvb","../../utils/use-instant-transition-state.mjs":"acYRG","./utils/can-animate.mjs":"hf97O","./waapi/utils/get-final-keyframe.mjs":"jLZPp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bjmD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
var _globalConfigMjs = require("../utils/GlobalConfig.mjs");
var _frameMjs = require("./frame.mjs");
let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */ const time = {
    now: ()=>{
        if (now === undefined) time.set((0, _frameMjs.frameData).isProcessing || (0, _globalConfigMjs.MotionGlobalConfig).useManualTiming ? (0, _frameMjs.frameData).timestamp : performance.now());
        return now;
    },
    set: (newTime)=>{
        now = newTime;
        queueMicrotask(clearTime);
    }
};

},{"../utils/GlobalConfig.mjs":"e6NaD","./frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hf97O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canAnimate", ()=>canAnimate);
var _motionUtils = require("motion-utils");
var _isGeneratorMjs = require("../../generators/utils/is-generator.mjs");
var _isAnimatableMjs = require("../../utils/is-animatable.mjs");
function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1) return true;
    for(let i = 0; i < keyframes.length; i++){
        if (keyframes[i] !== current) return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */ const originKeyframe = keyframes[0];
    if (originKeyframe === null) return false;
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */ if (name === "display" || name === "visibility") return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = (0, _isAnimatableMjs.isAnimatable)(originKeyframe, name);
    const isTargetAnimatable = (0, _isAnimatableMjs.isAnimatable)(targetKeyframe, name);
    (0, _motionUtils.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) return false;
    return hasKeyframesChanged(keyframes) || (type === "spring" || (0, _isGeneratorMjs.isGenerator)(type)) && velocity;
}

},{"motion-utils":"9SDPC","../../generators/utils/is-generator.mjs":"6lzNM","../../utils/is-animatable.mjs":"7YoDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YoDs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAnimatable", ()=>isAnimatable);
var _indexMjs = require("../../value/types/complex/index.mjs");
/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */ const isAnimatable = (value, name)=>{
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (name === "zIndex") return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value)) return true;
    if (typeof value === "string" && // It's animatable if we have a string
    ((0, _indexMjs.complex).test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(") // Unless it starts with "url("
    ) return true;
    return false;
};

},{"../../value/types/complex/index.mjs":"lmoWV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xbKM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainThreadAnimation", ()=>MainThreadAnimation);
parcelHelpers.export(exports, "animateValue", ()=>animateValue);
var _keyframesResolverMjs = require("../../render/utils/KeyframesResolver.mjs");
var _indexMjs = require("../generators/spring/index.mjs");
var _inertiaMjs = require("../generators/inertia.mjs");
var _keyframesMjs = require("../generators/keyframes.mjs");
var _baseAnimationMjs = require("./BaseAnimation.mjs");
var _pipeMjs = require("../../utils/pipe.mjs");
var _indexMjs1 = require("../../utils/mix/index.mjs");
var _calcDurationMjs = require("../generators/utils/calc-duration.mjs");
var _timeConversionMjs = require("../../utils/time-conversion.mjs");
var _clampMjs = require("../../utils/clamp.mjs");
var _motionUtils = require("motion-utils");
var _driverFrameloopMjs = require("./drivers/driver-frameloop.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
var _isGeneratorMjs = require("../generators/utils/is-generator.mjs");
const generators = {
    decay: (0, _inertiaMjs.inertia),
    inertia: (0, _inertiaMjs.inertia),
    tween: (0, _keyframesMjs.keyframes),
    keyframes: (0, _keyframesMjs.keyframes),
    spring: (0, _indexMjs.spring)
};
const percentToProgress = (percent)=>percent / 100;
/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */ class MainThreadAnimation extends (0, _baseAnimationMjs.BaseAnimation) {
    constructor(options){
        super(options);
        /**
         * The time at which the animation was paused.
         */ this.holdTime = null;
        /**
         * The time at which the animation was cancelled.
         */ this.cancelTime = null;
        /**
         * The current time of the animation.
         */ this.currentTime = 0;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */ this.playbackSpeed = 1;
        /**
         * The state of the animation to apply when the animation is resolved. This
         * allows calls to the public API to control the animation before it is resolved,
         * without us having to resolve it first.
         */ this.pendingPlayState = "running";
        /**
         * The time at which the animation was started.
         */ this.startTime = null;
        this.state = "idle";
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */ this.stop = ()=>{
            this.resolver.cancel();
            this.isStopped = true;
            if (this.state === "idle") return;
            this.teardown();
            const { onStop } = this.options;
            onStop && onStop();
        };
        const { name, motionValue, element, keyframes } = this.options;
        const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || (0, _keyframesResolverMjs.KeyframeResolver);
        const onResolved = (resolvedKeyframes, finalKeyframe)=>this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
        this.resolver = new KeyframeResolver$1(keyframes, onResolved, name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    flatten() {
        super.flatten();
        // If we've already resolved the animation, re-initialise it
        if (this._resolved) Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
    initPlayback(keyframes$1) {
        const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = this.options;
        const generatorFactory = (0, _isGeneratorMjs.isGenerator)(type) ? type : generators[type] || (0, _keyframesMjs.keyframes);
        /**
         * If our generator doesn't support mixing numbers, we need to replace keyframes with
         * [0, 100] and then make a function that maps that to the actual keyframes.
         *
         * 100 is chosen instead of 1 as it works nicer with spring animations.
         */ let mapPercentToKeyframes;
        let mirroredGenerator;
        if (generatorFactory !== (0, _keyframesMjs.keyframes) && typeof keyframes$1[0] !== "number") {
            (0, _motionUtils.invariant)(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
            mapPercentToKeyframes = (0, _pipeMjs.pipe)(percentToProgress, (0, _indexMjs1.mix)(keyframes$1[0], keyframes$1[1]));
            keyframes$1 = [
                0,
                100
            ];
        }
        const generator = generatorFactory({
            ...this.options,
            keyframes: keyframes$1
        });
        /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */ if (repeatType === "mirror") mirroredGenerator = generatorFactory({
            ...this.options,
            keyframes: [
                ...keyframes$1
            ].reverse(),
            velocity: -velocity
        });
        /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */ if (generator.calculatedDuration === null) generator.calculatedDuration = (0, _calcDurationMjs.calcGeneratorDuration)(generator);
        const { calculatedDuration } = generator;
        const resolvedDuration = calculatedDuration + repeatDelay;
        const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
        return {
            generator,
            mirroredGenerator,
            mapPercentToKeyframes,
            calculatedDuration,
            resolvedDuration,
            totalDuration
        };
    }
    onPostResolved() {
        const { autoplay = true } = this.options;
        this.play();
        if (this.pendingPlayState === "paused" || !autoplay) this.pause();
        else this.state = this.pendingPlayState;
    }
    tick(timestamp, sample = false) {
        const { resolved } = this;
        // If the animations has failed to resolve, return the final keyframe.
        if (!resolved) {
            const { keyframes } = this.options;
            return {
                done: true,
                value: keyframes[keyframes.length - 1]
            };
        }
        const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes, calculatedDuration, totalDuration, resolvedDuration } = resolved;
        if (this.startTime === null) return generator.next(0);
        const { delay, repeat, repeatType, repeatDelay, onUpdate } = this.options;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */ if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
        else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
        // Update currentTime
        if (sample) this.currentTime = timestamp;
        else if (this.holdTime !== null) this.currentTime = this.holdTime;
        else // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
        // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
        // example.
        this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
        // Rebase on delay
        const timeWithoutDelay = this.currentTime - delay * (this.speed >= 0 ? 1 : -1);
        const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
        this.currentTime = Math.max(timeWithoutDelay, 0);
        // If this animation has finished, set the current time  to the total duration.
        if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
        let elapsed = this.currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ if (!iterationProgress && progress >= 1) iterationProgress = 1;
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
                } else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
            }
            elapsed = (0, _clampMjs.clamp)(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */ const state = isInDelayPhase ? {
            done: false,
            value: keyframes[0]
        } : frameGenerator.next(elapsed);
        if (mapPercentToKeyframes) state.value = mapPercentToKeyframes(state.value);
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
        const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
        if (isAnimationFinished && finalKeyframe !== undefined) state.value = (0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe);
        if (onUpdate) onUpdate(state.value);
        if (isAnimationFinished) this.finish();
        return state;
    }
    get duration() {
        const { resolved } = this;
        return resolved ? (0, _timeConversionMjs.millisecondsToSeconds)(resolved.calculatedDuration) : 0;
    }
    get time() {
        return (0, _timeConversionMjs.millisecondsToSeconds)(this.currentTime);
    }
    set time(newTime) {
        newTime = (0, _timeConversionMjs.secondsToMilliseconds)(newTime);
        this.currentTime = newTime;
        if (this.holdTime !== null || this.speed === 0) this.holdTime = newTime;
        else if (this.driver) this.startTime = this.driver.now() - newTime / this.speed;
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(newSpeed) {
        const hasChanged = this.playbackSpeed !== newSpeed;
        this.playbackSpeed = newSpeed;
        if (hasChanged) this.time = (0, _timeConversionMjs.millisecondsToSeconds)(this.currentTime);
    }
    play() {
        if (!this.resolver.isScheduled) this.resolver.resume();
        if (!this._resolved) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped) return;
        const { driver = (0, _driverFrameloopMjs.frameloopDriver), onPlay, startTime } = this.options;
        if (!this.driver) this.driver = driver((timestamp)=>this.tick(timestamp));
        onPlay && onPlay();
        const now = this.driver.now();
        if (this.holdTime !== null) this.startTime = now - this.holdTime;
        else if (!this.startTime) this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        else if (this.state === "finished") this.startTime = now;
        if (this.state === "finished") this.updateFinishedPromise();
        this.cancelTime = this.startTime;
        this.holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */ this.state = "running";
        this.driver.start();
    }
    pause() {
        var _a;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        this.state = "paused";
        this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
    }
    complete() {
        if (this.state !== "running") this.play();
        this.pendingPlayState = this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.teardown();
        this.state = "finished";
        const { onComplete } = this.options;
        onComplete && onComplete();
    }
    cancel() {
        if (this.cancelTime !== null) this.tick(this.cancelTime);
        this.teardown();
        this.updateFinishedPromise();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        this.startTime = this.cancelTime = null;
        this.resolver.cancel();
    }
    stopDriver() {
        if (!this.driver) return;
        this.driver.stop();
        this.driver = undefined;
    }
    sample(time) {
        this.startTime = 0;
        return this.tick(time, true);
    }
}
// Legacy interface
function animateValue(options) {
    return new MainThreadAnimation(options);
}

},{"../../render/utils/KeyframesResolver.mjs":"fsWvb","../generators/spring/index.mjs":"aNeOI","../generators/inertia.mjs":"50UUJ","../generators/keyframes.mjs":"hjEq3","./BaseAnimation.mjs":"bBJJ5","../../utils/pipe.mjs":"jGo2b","../../utils/mix/index.mjs":"jMt8J","../generators/utils/calc-duration.mjs":"iTe1T","../../utils/time-conversion.mjs":"gdr8V","../../utils/clamp.mjs":"aZOh4","motion-utils":"9SDPC","./drivers/driver-frameloop.mjs":"73mjA","./waapi/utils/get-final-keyframe.mjs":"jLZPp","../generators/utils/is-generator.mjs":"6lzNM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aNeOI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _linearMjs = require("../../animators/waapi/utils/linear.mjs");
var _timeConversionMjs = require("../../../utils/time-conversion.mjs");
var _velocityMjs = require("../utils/velocity.mjs");
var _findMjs = require("./find.mjs");
var _calcDurationMjs = require("../utils/calc-duration.mjs");
var _clampMjs = require("../../../utils/clamp.mjs");
var _defaultsMjs = require("./defaults.mjs");
const durationKeys = [
    "duration",
    "bounce"
];
const physicsKeys = [
    "stiffness",
    "damping",
    "mass"
];
function isSpringType(options, keys) {
    return keys.some((key)=>options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: (0, _defaultsMjs.springDefaults).velocity,
        stiffness: (0, _defaultsMjs.springDefaults).stiffness,
        damping: (0, _defaultsMjs.springDefaults).damping,
        mass: (0, _defaultsMjs.springDefaults).mass,
        isResolvedFromDuration: false,
        ...options
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        if (options.visualDuration) {
            const visualDuration = options.visualDuration;
            const root = 2 * Math.PI / (visualDuration * 1.2);
            const stiffness = root * root;
            const damping = 2 * (0, _clampMjs.clamp)(0.05, 1, 1 - options.bounce) * Math.sqrt(stiffness);
            springOptions = {
                ...springOptions,
                mass: (0, _defaultsMjs.springDefaults).mass,
                stiffness,
                damping
            };
        } else {
            const derived = (0, _findMjs.findSpring)(options);
            springOptions = {
                ...springOptions,
                ...derived,
                mass: (0, _defaultsMjs.springDefaults).mass
            };
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring(optionsOrVisualDuration = (0, _defaultsMjs.springDefaults).visualDuration, bounce = (0, _defaultsMjs.springDefaults).bounce) {
    const options = typeof optionsOrVisualDuration !== "object" ? {
        visualDuration: optionsOrVisualDuration,
        keyframes: [
            0,
            1
        ],
        bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ const state = {
        done: false,
        value: origin
    };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
        ...options,
        velocity: -(0, _timeConversionMjs.millisecondsToSeconds)(options.velocity || 0)
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = (0, _timeConversionMjs.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */ const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? (0, _defaultsMjs.springDefaults).restSpeed.granular : (0, _defaultsMjs.springDefaults).restSpeed.default);
    restDelta || (restDelta = isGranularScale ? (0, _defaultsMjs.springDefaults).restDelta.granular : (0, _defaultsMjs.springDefaults).restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = (0, _findMjs.calcAngularFreq)(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
        };
    } else if (dampingRatio === 1) // Critically damped spring
    resolveSpring = (t)=>target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
        };
    }
    const generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t)=>{
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = 0.0;
                /**
                 * We only need to calculate velocity for under-damped springs
                 * as over- and critically-damped springs can't overshoot, so
                 * checking only for displacement is enough.
                 */ if (dampingRatio < 1) currentVelocity = t === 0 ? (0, _timeConversionMjs.secondsToMilliseconds)(initialVelocity) : (0, _velocityMjs.calcGeneratorVelocity)(resolveSpring, t, current);
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else state.done = t >= duration;
            state.value = state.done ? target : current;
            return state;
        },
        toString: ()=>{
            const calculatedDuration = Math.min((0, _calcDurationMjs.calcGeneratorDuration)(generator), (0, _calcDurationMjs.maxGeneratorDuration));
            const easing = (0, _linearMjs.generateLinearEasing)((progress)=>generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        }
    };
    return generator;
}

},{"../../animators/waapi/utils/linear.mjs":"ZlUVS","../../../utils/time-conversion.mjs":"gdr8V","../utils/velocity.mjs":"dfkbs","./find.mjs":"6HyEr","../utils/calc-duration.mjs":"iTe1T","../../../utils/clamp.mjs":"aZOh4","./defaults.mjs":"6HFcU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ZlUVS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateLinearEasing", ()=>generateLinearEasing);
var _progressMjs = require("../../../../utils/progress.mjs");
const generateLinearEasing = (easing, duration, resolution = 10 // as milliseconds
)=>{
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for(let i = 0; i < numPoints; i++)points += easing((0, _progressMjs.progress)(0, numPoints - 1, i)) + ", ";
    return `linear(${points.substring(0, points.length - 2)})`;
};

},{"../../../../utils/progress.mjs":"3vvIn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vvIn":[function(require,module,exports,__globalThis) {
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfkbs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorVelocity", ()=>calcGeneratorVelocity);
var _velocityPerSecondMjs = require("../../../utils/velocity-per-second.mjs");
const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0, _velocityPerSecondMjs.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}

},{"../../../utils/velocity-per-second.mjs":"1eGg6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eGg6":[function(require,module,exports,__globalThis) {
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "velocityPerSecond", ()=>velocityPerSecond);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HyEr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcAngularFreq", ()=>calcAngularFreq);
parcelHelpers.export(exports, "findSpring", ()=>findSpring);
var _motionUtils = require("motion-utils");
var _clampMjs = require("../../../utils/clamp.mjs");
var _timeConversionMjs = require("../../../utils/time-conversion.mjs");
var _defaultsMjs = require("./defaults.mjs");
const safeMin = 0.001;
function findSpring({ duration = (0, _defaultsMjs.springDefaults).duration, bounce = (0, _defaultsMjs.springDefaults).bounce, velocity = (0, _defaultsMjs.springDefaults).velocity, mass = (0, _defaultsMjs.springDefaults).mass }) {
    let envelope;
    let derivative;
    (0, _motionUtils.warning)(duration <= (0, _timeConversionMjs.secondsToMilliseconds)((0, _defaultsMjs.springDefaults).maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */ dampingRatio = (0, _clampMjs.clamp)((0, _defaultsMjs.springDefaults).minDamping, (0, _defaultsMjs.springDefaults).maxDamping, dampingRatio);
    duration = (0, _clampMjs.clamp)((0, _defaultsMjs.springDefaults).minDuration, (0, _defaultsMjs.springDefaults).maxDuration, (0, _timeConversionMjs.millisecondsToSeconds)(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */ envelope = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - a / b * c;
        };
        derivative = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
        };
    } else {
        /**
         * Critically-damped spring
         */ envelope = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0, _timeConversionMjs.secondsToMilliseconds)(duration);
    if (isNaN(undampedFreq)) return {
        stiffness: (0, _defaultsMjs.springDefaults).stiffness,
        damping: (0, _defaultsMjs.springDefaults).damping,
        duration
    };
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for(let i = 1; i < rootIterations; i++)result = result - envelope(result) / derivative(result);
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

},{"motion-utils":"9SDPC","../../../utils/clamp.mjs":"aZOh4","../../../utils/time-conversion.mjs":"gdr8V","./defaults.mjs":"6HFcU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HFcU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "springDefaults", ()=>springDefaults);
const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2
    },
    restDelta: {
        granular: 0.005,
        default: 0.5
    },
    // Limits
    minDuration: 0.01,
    maxDuration: 10.0,
    minDamping: 0.05,
    maxDamping: 1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTe1T":[function(require,module,exports,__globalThis) {
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorDuration", ()=>calcGeneratorDuration);
parcelHelpers.export(exports, "maxGeneratorDuration", ()=>maxGeneratorDuration);
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50UUJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inertia", ()=>inertia);
var _indexMjs = require("./spring/index.mjs");
var _velocityMjs = require("./utils/velocity.mjs");
function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin
    };
    const isOutOfBounds = (v)=>min !== undefined && v < min || max !== undefined && v > max;
    const nearestBoundary = (v)=>{
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */ if (target !== ideal) amplitude = target - origin;
    const calcDelta = (t)=>-amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t)=>target + calcDelta(t);
    const applyFriction = (t)=>{
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */ let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t)=>{
        if (!isOutOfBounds(state.value)) return;
        timeReachedBoundary = t;
        spring$1 = (0, _indexMjs.spring)({
            keyframes: [
                state.value,
                nearestBoundary(state.value)
            ],
            velocity: (0, _velocityMjs.calcGeneratorVelocity)(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t)=>{
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */ let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */ if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        }
    };
}

},{"./spring/index.mjs":"aNeOI","./utils/velocity.mjs":"dfkbs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjEq3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultEasing", ()=>defaultEasing);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
var _easeMjs = require("../../easing/ease.mjs");
var _isEasingArrayMjs = require("../../easing/utils/is-easing-array.mjs");
var _mapMjs = require("../../easing/utils/map.mjs");
var _interpolateMjs = require("../../utils/interpolate.mjs");
var _defaultMjs = require("../../utils/offsets/default.mjs");
var _timeMjs = require("../../utils/offsets/time.mjs");
function defaultEasing(values, easing) {
    return values.map(()=>easing || (0, _easeMjs.easeInOut)).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */ const easingFunctions = (0, _isEasingArrayMjs.isEasingArray)(ease) ? ease.map((0, _mapMjs.easingDefinitionToFunction)) : (0, _mapMjs.easingDefinitionToFunction)(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ const state = {
        done: false,
        value: keyframeValues[0]
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */ const absoluteTimes = (0, _timeMjs.convertOffsetToTimes)(// Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : (0, _defaultMjs.defaultOffset)(keyframeValues), duration);
    const mapTimeToKeyframe = (0, _interpolateMjs.interpolate)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
        calculatedDuration: duration,
        next: (t)=>{
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        }
    };
}

},{"../../easing/ease.mjs":"8Qwxb","../../easing/utils/is-easing-array.mjs":"i3ygY","../../easing/utils/map.mjs":"e97Gy","../../utils/interpolate.mjs":"d7x9H","../../utils/offsets/default.mjs":"7Njqq","../../utils/offsets/time.mjs":"2k776","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Qwxb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeIn", ()=>easeIn);
parcelHelpers.export(exports, "easeInOut", ()=>easeInOut);
parcelHelpers.export(exports, "easeOut", ()=>easeOut);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
const easeIn = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.42, 0, 0.58, 1);

},{"./cubic-bezier.mjs":"hC5AC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3ygY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingArray", ()=>isEasingArray);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e97Gy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easingDefinitionToFunction", ()=>easingDefinitionToFunction);
var _motionUtils = require("motion-utils");
var _cubicBezierMjs = require("../cubic-bezier.mjs");
var _easeMjs = require("../ease.mjs");
var _circMjs = require("../circ.mjs");
var _backMjs = require("../back.mjs");
var _anticipateMjs = require("../anticipate.mjs");
var _isBezierDefinitionMjs = require("./is-bezier-definition.mjs");
const easingLookup = {
    linear: (0, _motionUtils.noop),
    easeIn: (0, _easeMjs.easeIn),
    easeInOut: (0, _easeMjs.easeInOut),
    easeOut: (0, _easeMjs.easeOut),
    circIn: (0, _circMjs.circIn),
    circInOut: (0, _circMjs.circInOut),
    circOut: (0, _circMjs.circOut),
    backIn: (0, _backMjs.backIn),
    backInOut: (0, _backMjs.backInOut),
    backOut: (0, _backMjs.backOut),
    anticipate: (0, _anticipateMjs.anticipate)
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, _isBezierDefinitionMjs.isBezierDefinition)(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, _motionUtils.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return (0, _cubicBezierMjs.cubicBezier)(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
        // Else lookup from table
        (0, _motionUtils.invariant)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};

},{"motion-utils":"9SDPC","../cubic-bezier.mjs":"hC5AC","../ease.mjs":"8Qwxb","../circ.mjs":"LdSua","../back.mjs":"d5Nwb","../anticipate.mjs":"1Nbn6","./is-bezier-definition.mjs":"fV1CC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fV1CC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBezierDefinition", ()=>isBezierDefinition);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7x9H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _clampMjs = require("./clamp.mjs");
var _pipeMjs = require("./pipe.mjs");
var _progressMjs = require("./progress.mjs");
var _motionUtils = require("motion-utils");
var _indexMjs = require("./mix/index.mjs");
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || (0, _indexMjs.mix);
    const numMixers = output.length - 1;
    for(let i = 0; i < numMixers; i++){
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || (0, _motionUtils.noop) : ease;
            mixer = (0, _pipeMjs.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */ function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0, _motionUtils.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */ if (inputLength === 1) return ()=>output[0];
    if (inputLength === 2 && input[0] === input[1]) return ()=>output[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [
            ...input
        ].reverse();
        output = [
            ...output
        ].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v)=>{
        let i = 0;
        if (numMixers > 1) for(; i < input.length - 2; i++){
            if (v < input[i + 1]) break;
        }
        const progressInRange = (0, _progressMjs.progress)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp ? (v)=>interpolator((0, _clampMjs.clamp)(input[0], input[inputLength - 1], v)) : interpolator;
}

},{"./clamp.mjs":"aZOh4","./pipe.mjs":"jGo2b","./progress.mjs":"3vvIn","motion-utils":"9SDPC","./mix/index.mjs":"jMt8J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGo2b":[function(require,module,exports,__globalThis) {
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMt8J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
var _complexMjs = require("./complex.mjs");
var _numberMjs = require("./number.mjs");
function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") return (0, _numberMjs.mixNumber)(from, to, p);
    const mixer = (0, _complexMjs.getMixer)(from);
    return mixer(from, to);
}

},{"./complex.mjs":"2XFfN","./number.mjs":"2kavH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XFfN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMixer", ()=>getMixer);
parcelHelpers.export(exports, "mixArray", ()=>mixArray);
parcelHelpers.export(exports, "mixComplex", ()=>mixComplex);
parcelHelpers.export(exports, "mixObject", ()=>mixObject);
var _numberMjs = require("./number.mjs");
var _colorMjs = require("./color.mjs");
var _pipeMjs = require("../pipe.mjs");
var _motionUtils = require("motion-utils");
var _indexMjs = require("../../value/types/color/index.mjs");
var _indexMjs1 = require("../../value/types/complex/index.mjs");
var _isCssVariableMjs = require("../../render/dom/utils/is-css-variable.mjs");
var _visibilityMjs = require("./visibility.mjs");
var _immediateMjs = require("./immediate.mjs");
function mixNumber(a, b) {
    return (p)=>(0, _numberMjs.mixNumber)(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") return mixNumber;
    else if (typeof a === "string") return (0, _isCssVariableMjs.isCSSVariableToken)(a) ? (0, _immediateMjs.mixImmediate) : (0, _indexMjs.color).test(a) ? (0, _colorMjs.mixColor) : mixComplex;
    else if (Array.isArray(a)) return mixArray;
    else if (typeof a === "object") return (0, _indexMjs.color).test(a) ? (0, _colorMjs.mixColor) : mixObject;
    return 0, _immediateMjs.mixImmediate;
}
function mixArray(a, b) {
    const output = [
        ...a
    ];
    const numValues = output.length;
    const blendValue = a.map((v, i)=>getMixer(v)(v, b[i]));
    return (p)=>{
        for(let i = 0; i < numValues; i++)output[i] = blendValue[i](p);
        return output;
    };
}
function mixObject(a, b) {
    const output = {
        ...a,
        ...b
    };
    const blendValue = {};
    for(const key in output)if (a[key] !== undefined && b[key] !== undefined) blendValue[key] = getMixer(a[key])(a[key], b[key]);
    return (v)=>{
        for(const key in blendValue)output[key] = blendValue[key](v);
        return output;
    };
}
function matchOrder(origin, target) {
    var _a;
    const orderedOrigin = [];
    const pointers = {
        color: 0,
        var: 0,
        number: 0
    };
    for(let i = 0; i < target.values.length; i++){
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target)=>{
    const template = (0, _indexMjs1.complex).createTransformer(target);
    const originStats = (0, _indexMjs1.analyseComplexValue)(origin);
    const targetStats = (0, _indexMjs1.analyseComplexValue)(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((0, _visibilityMjs.invisibleValues).has(origin) && !targetStats.values.length || (0, _visibilityMjs.invisibleValues).has(target) && !originStats.values.length) return (0, _visibilityMjs.mixVisibility)(origin, target);
        return (0, _pipeMjs.pipe)(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
        (0, _motionUtils.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (0, _immediateMjs.mixImmediate)(origin, target);
    }
};

},{"./number.mjs":"2kavH","./color.mjs":"3zfnz","../pipe.mjs":"jGo2b","motion-utils":"9SDPC","../../value/types/color/index.mjs":"1nAma","../../value/types/complex/index.mjs":"lmoWV","../../render/dom/utils/is-css-variable.mjs":"8qZz5","./visibility.mjs":"i5oRf","./immediate.mjs":"acE0T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kavH":[function(require,module,exports,__globalThis) {
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixNumber", ()=>mixNumber);
const mixNumber = (from, to, progress)=>{
    return from + (to - from) * progress;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zfnz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixColor", ()=>mixColor);
parcelHelpers.export(exports, "mixLinearColor", ()=>mixLinearColor);
var _numberMjs = require("./number.mjs");
var _motionUtils = require("motion-utils");
var _hslaToRgbaMjs = require("../hsla-to-rgba.mjs");
var _hexMjs = require("../../value/types/color/hex.mjs");
var _rgbaMjs = require("../../value/types/color/rgba.mjs");
var _hslaMjs = require("../../value/types/color/hsla.mjs");
var _immediateMjs = require("./immediate.mjs");
// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v)=>{
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [
    (0, _hexMjs.hex),
    (0, _rgbaMjs.rgba),
    (0, _hslaMjs.hsla)
];
const getColorType = (v)=>colorTypes.find((type)=>type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0, _motionUtils.warning)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type)) return false;
    let model = type.parse(color);
    if (type === (0, _hslaMjs.hsla)) // TODO Remove this cast - needed since Motion's stricter typing
    model = (0, _hslaToRgbaMjs.hslaToRgba)(model);
    return model;
}
const mixColor = (from, to)=>{
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) return (0, _immediateMjs.mixImmediate)(from, to);
    const blended = {
        ...fromRGBA
    };
    return (v)=>{
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0, _numberMjs.mixNumber)(fromRGBA.alpha, toRGBA.alpha, v);
        return (0, _rgbaMjs.rgba).transform(blended);
    };
};

},{"./number.mjs":"2kavH","motion-utils":"9SDPC","../hsla-to-rgba.mjs":"4xZpQ","../../value/types/color/hex.mjs":"5epZU","../../value/types/color/rgba.mjs":"4MXDV","../../value/types/color/hsla.mjs":"5FDku","./immediate.mjs":"acE0T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xZpQ":[function(require,module,exports,__globalThis) {
// Adapted from https://gist.github.com/mjackson/5311256
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hslaToRgba", ()=>hslaToRgba);
function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) red = green = blue = lightness;
    else {
        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acE0T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixImmediate", ()=>mixImmediate);
function mixImmediate(a, b) {
    return (p)=>p > 0 ? b : a;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5oRf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invisibleValues", ()=>invisibleValues);
parcelHelpers.export(exports, "mixVisibility", ()=>mixVisibility);
const invisibleValues = new Set([
    "none",
    "hidden"
]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */ function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) return (p)=>p <= 0 ? origin : target;
    else return (p)=>p >= 1 ? target : origin;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Njqq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
var _fillMjs = require("./fill.mjs");
function defaultOffset(arr) {
    const offset = [
        0
    ];
    (0, _fillMjs.fillOffset)(offset, arr.length - 1);
    return offset;
}

},{"./fill.mjs":"i5hk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5hk9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillOffset", ()=>fillOffset);
var _numberMjs = require("../mix/number.mjs");
var _progressMjs = require("../progress.mjs");
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, _progressMjs.progress)(0, remaining, i);
        offset.push((0, _numberMjs.mixNumber)(min, 1, offsetProgress));
    }
}

},{"../mix/number.mjs":"2kavH","../progress.mjs":"3vvIn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2k776":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertOffsetToTimes", ()=>convertOffsetToTimes);
function convertOffsetToTimes(offset, duration) {
    return offset.map((o)=>o * duration);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73mjA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "frameloopDriver", ()=>frameloopDriver);
var _syncTimeMjs = require("../../../frameloop/sync-time.mjs");
var _frameMjs = require("../../../frameloop/frame.mjs");
const frameloopDriver = (update)=>{
    const passTimestamp = ({ timestamp })=>update(timestamp);
    return {
        start: ()=>(0, _frameMjs.frame).update(passTimestamp, true),
        stop: ()=>(0, _frameMjs.cancelFrame)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */ now: ()=>(0, _frameMjs.frameData).isProcessing ? (0, _frameMjs.frameData).timestamp : (0, _syncTimeMjs.time).now()
    };
};

},{"../../../frameloop/sync-time.mjs":"7bjmD","../../../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7amEM":[function(require,module,exports,__globalThis) {
/**
 * A list of values that can be hardware-accelerated.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "acceleratedValues", ()=>acceleratedValues);
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"br5tE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startWaapiAnimation", ()=>startWaapiAnimation);
var _easingMjs = require("./easing.mjs");
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeInOut", times } = {}) {
    const keyframeOptions = {
        [valueName]: keyframes
    };
    if (times) keyframeOptions.offset = times;
    const easing = (0, _easingMjs.mapEasingToNativeEasing)(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */ if (Array.isArray(easing)) keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal"
    });
}

},{"./easing.mjs":"2wybM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wybM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezierAsString", ()=>cubicBezierAsString);
parcelHelpers.export(exports, "isWaapiSupportedEasing", ()=>isWaapiSupportedEasing);
parcelHelpers.export(exports, "mapEasingToNativeEasing", ()=>mapEasingToNativeEasing);
parcelHelpers.export(exports, "supportedWaapiEasing", ()=>supportedWaapiEasing);
var _isBezierDefinitionMjs = require("../../../easing/utils/is-bezier-definition.mjs");
var _linearMjs = require("./utils/linear.mjs");
var _supportsLinearEasingMjs = require("./utils/supports-linear-easing.mjs");
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, _supportsLinearEasingMjs.supportsLinearEasing)() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || (0, _supportsLinearEasingMjs.supportsLinearEasing)()) || (0, _isBezierDefinitionMjs.isBezierDefinition)(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) return undefined;
    else if (typeof easing === "function" && (0, _supportsLinearEasingMjs.supportsLinearEasing)()) return (0, _linearMjs.generateLinearEasing)(easing, duration);
    else if ((0, _isBezierDefinitionMjs.isBezierDefinition)(easing)) return cubicBezierAsString(easing);
    else if (Array.isArray(easing)) return easing.map((segmentEasing)=>mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    else return supportedWaapiEasing[easing];
}

},{"../../../easing/utils/is-bezier-definition.mjs":"fV1CC","./utils/linear.mjs":"ZlUVS","./utils/supports-linear-easing.mjs":"aqR7r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqR7r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsLinearEasing", ()=>supportsLinearEasing);
var _memoSupportsMjs = require("./memo-supports.mjs");
const supportsLinearEasing = /*@__PURE__*/ (0, _memoSupportsMjs.memoSupports)(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");

},{"./memo-supports.mjs":"hxpCw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxpCw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memoSupports", ()=>memoSupports);
var _memoMjs = require("../../../../utils/memo.mjs");
var _supportsFlagsMjs = require("./supports-flags.mjs");
function memoSupports(callback, supportsFlag) {
    const memoized = (0, _memoMjs.memo)(callback);
    return ()=>{
        var _a;
        return (_a = (0, _supportsFlagsMjs.supportsFlags)[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
}

},{"../../../../utils/memo.mjs":"fPYS2","./supports-flags.mjs":"6lSgr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPYS2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memo", ()=>memo);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6lSgr":[function(require,module,exports,__globalThis) {
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsFlags", ()=>supportsFlags);
const supportsFlags = {
    linearEasing: undefined
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1ejy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachTimeline", ()=>attachTimeline);
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hmDTy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsWaapi", ()=>supportsWaapi);
var _memoMjs = require("../../../../utils/memo.mjs");
const supportsWaapi = /*@__PURE__*/ (0, _memoMjs.memo)(()=>Object.hasOwnProperty.call(Element.prototype, "animate"));

},{"../../../../utils/memo.mjs":"fPYS2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fGvAY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroupPlaybackControls", ()=>GroupPlaybackControls);
var _supportsMjs = require("../render/dom/scroll/supports.mjs");
class GroupPlaybackControls {
    constructor(animations){
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++)this.animations[i][propName] = newValue;
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation)=>{
            if ((0, _supportsMjs.supportsScrollTimeline)() && animation.attachTimeline) return animation.attachTimeline(timeline);
            else return fallback(animation);
        });
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++)max = Math.max(max, this.animations[i].duration);
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}

},{"../render/dom/scroll/supports.mjs":"ghApE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ghApE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsScrollTimeline", ()=>supportsScrollTimeline);
var _memoMjs = require("../../../utils/memo.mjs");
const supportsScrollTimeline = (0, _memoMjs.memo)(()=>window.ScrollTimeline !== undefined);

},{"../../../utils/memo.mjs":"fPYS2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4N4s0":[function(require,module,exports,__globalThis) {
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTransitionDefined", ()=>isTransitionDefined);
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5AEB8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTarget", ()=>setTarget);
var _resolveValueMjs = require("../../utils/resolve-value.mjs");
var _indexMjs = require("../../value/index.mjs");
var _resolveDynamicVariantsMjs = require("./resolve-dynamic-variants.mjs");
/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */ function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
    else visualElement.addValue(key, (0, _indexMjs.motionValue)(value));
}
function setTarget(visualElement, definition) {
    const resolved = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = {
        ...target,
        ...transitionEnd
    };
    for(const key in target){
        const value = (0, _resolveValueMjs.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}

},{"../../utils/resolve-value.mjs":"cPnbP","../../value/index.mjs":"he8bY","./resolve-dynamic-variants.mjs":"dSXph","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPnbP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCustomValue", ()=>isCustomValue);
parcelHelpers.export(exports, "resolveFinalValueInKeyframes", ()=>resolveFinalValueInKeyframes);
var _isKeyframesTargetMjs = require("../animation/utils/is-keyframes-target.mjs");
const isCustomValue = (v)=>{
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v)=>{
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0, _isKeyframesTargetMjs.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};

},{"../animation/utils/is-keyframes-target.mjs":"sPTPk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"he8bY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>MotionValue);
parcelHelpers.export(exports, "collectMotionValues", ()=>collectMotionValues);
parcelHelpers.export(exports, "motionValue", ()=>motionValue);
var _subscriptionManagerMjs = require("../utils/subscription-manager.mjs");
var _velocityPerSecondMjs = require("../utils/velocity-per-second.mjs");
var _warnOnceMjs = require("../utils/warn-once.mjs");
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */ const MAX_VELOCITY_DELTA = 30;
const isFloat = (value)=>{
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */ class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */ constructor(init, options = {}){
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */ this.version = "11.14.4";
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */ this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        this.updateAndNotify = (v, render = true)=>{
            const currentTime = (0, _syncTimeMjs.time).now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */ if (this.updatedAt !== currentTime) this.setPrevFrameValue();
            this.prev = this.current;
            this.setCurrent(v);
            // Update update subscribers
            if (this.current !== this.prev && this.events.change) this.events.change.notify(this.current);
            // Update render subscribers
            if (render && this.events.renderRequest) this.events.renderRequest.notify(this.current);
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    setCurrent(current) {
        this.current = current;
        this.updatedAt = (0, _syncTimeMjs.time).now();
        if (this.canTrackVelocity === null && current !== undefined) this.canTrackVelocity = isFloat(this.current);
    }
    setPrevFrameValue(prevFrameValue = this.current) {
        this.prevFrameValue = prevFrameValue;
        this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */ onChange(subscription) {
        (0, _warnOnceMjs.warnOnce)(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = new (0, _subscriptionManagerMjs.SubscriptionManager)();
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") return ()=>{
            unsubscribe();
            /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */ (0, _frameMjs.frame).read(()=>{
                if (!this.events.change.getSize()) this.stop();
            });
        };
        return unsubscribe;
    }
    clearListeners() {
        for(const eventManagers in this.events)this.events[eventManagers].clear();
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */ attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */ set(v, render = true) {
        if (!render || !this.passiveEffect) this.updateAndNotify(v, render);
        else this.passiveEffect(v, this.updateAndNotify);
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = undefined;
        this.prevFrameValue = prev;
        this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */ jump(v, endAnimation = true) {
        this.updateAndNotify(v);
        this.prev = v;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        endAnimation && this.stop();
        if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */ get() {
        if (collectMotionValues.current) collectMotionValues.current.push(this);
        return this.current;
    }
    /**
     * @public
     */ getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */ getVelocity() {
        const currentTime = (0, _syncTimeMjs.time).now();
        if (!this.canTrackVelocity || this.prevFrameValue === undefined || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
        const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
        // Casts because of parseFloat's poor typing
        return (0, _velocityPerSecondMjs.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */ start(startAnimation) {
        this.stop();
        return new Promise((resolve)=>{
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) this.events.animationStart.notify();
        }).then(()=>{
            if (this.events.animationComplete) this.events.animationComplete.notify();
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */ stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) this.events.animationCancel.notify();
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */ isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */ destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}

},{"../utils/subscription-manager.mjs":"fxDTo","../utils/velocity-per-second.mjs":"1eGg6","../utils/warn-once.mjs":"JIiQV","../frameloop/sync-time.mjs":"7bjmD","../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxDTo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscriptionManager", ()=>SubscriptionManager);
var _arrayMjs = require("./array.mjs");
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, _arrayMjs.addUniqueItem)(this.subscriptions, handler);
        return ()=>(0, _arrayMjs.removeItem)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        else for(let i = 0; i < numSubscriptions; i++){
            /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
            handler && handler(a, b, c);
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}

},{"./array.mjs":"fpJYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpJYa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>addUniqueItem);
parcelHelpers.export(exports, "moveItem", ()=>moveItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNfUl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptimisedAppearId", ()=>getOptimisedAppearId);
var _dataIdMjs = require("./data-id.mjs");
function getOptimisedAppearId(visualElement) {
    return visualElement.props[0, _dataIdMjs.optimizedAppearDataAttribute];
}

},{"./data-id.mjs":"4rpx1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rpx1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "optimizedAppearDataAttribute", ()=>optimizedAppearDataAttribute);
parcelHelpers.export(exports, "optimizedAppearDataId", ()=>optimizedAppearDataId);
var _camelToDashMjs = require("../../render/dom/utils/camel-to-dash.mjs");
const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + (0, _camelToDashMjs.camelToDash)(optimizedAppearDataId);

},{"../../render/dom/utils/camel-to-dash.mjs":"eUOx7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUOx7":[function(require,module,exports,__globalThis) {
/**
 * Convert camelCase to dash-case properties.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelToDash", ()=>camelToDash);
const camelToDash = (str)=>str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jI8P2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addValueToWillChange", ()=>addValueToWillChange);
var _isMjs = require("./is.mjs");
function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */ if ((0, _isMjs.isWillChangeMotionValue)(willChange)) return willChange.add(key);
}

},{"./is.mjs":"6vOmr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6vOmr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWillChangeMotionValue", ()=>isWillChangeMotionValue);
var _isMotionValueMjs = require("../utils/is-motion-value.mjs");
function isWillChangeMotionValue(value) {
    return Boolean((0, _isMotionValueMjs.isMotionValue)(value) && value.add);
}

},{"../utils/is-motion-value.mjs":"94AYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94AYa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMotionValue", ()=>isMotionValue);
const isMotionValue = (value)=>Boolean(value && value.getVelocity);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80mMV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateVariant", ()=>animateVariant);
parcelHelpers.export(exports, "sortByTreeOrder", ()=>sortByTreeOrder);
var _resolveDynamicVariantsMjs = require("../../render/utils/resolve-dynamic-variants.mjs");
var _visualElementTargetMjs = require("./visual-element-target.mjs");
function animateVariant(visualElement, variant, options = {}) {
    var _a;
    const resolved = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : undefined);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) transition = options.transitionOverride;
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */ const getAnimation = resolved ? ()=>Promise.all((0, _visualElementTargetMjs.animateTarget)(visualElement, resolved, options)) : ()=>Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */ const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0)=>{
        const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
        return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
    } : ()=>Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */ const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren" ? [
            getAnimation,
            getChildAnimations
        ] : [
            getChildAnimations,
            getAnimation
        ];
        return first().then(()=>last());
    } else return Promise.all([
        getAnimation(),
        getChildAnimations(options.delay)
    ]);
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1 ? (i = 0)=>i * staggerChildren : (i = 0)=>maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i)=>{
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delayChildren + generateStaggerDuration(i)
        }).then(()=>child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}

},{"../../render/utils/resolve-dynamic-variants.mjs":"dSXph","./visual-element-target.mjs":"6SL9E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5KY29":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getVariantContext", ()=>getVariantContext);
var _isVariantLabelMjs = require("./is-variant-label.mjs");
var _variantPropsMjs = require("./variant-props.mjs");
const numVariantProps = (0, _variantPropsMjs.variantProps).length;
function getVariantContext(visualElement) {
    if (!visualElement) return undefined;
    if (!visualElement.isControllingVariants) {
        const context = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
        if (visualElement.props.initial !== undefined) context.initial = visualElement.props.initial;
        return context;
    }
    const context = {};
    for(let i = 0; i < numVariantProps; i++){
        const name = (0, _variantPropsMjs.variantProps)[i];
        const prop = visualElement.props[name];
        if ((0, _isVariantLabelMjs.isVariantLabel)(prop) || prop === false) context[name] = prop;
    }
    return context;
}

},{"./is-variant-label.mjs":"erxli","./variant-props.mjs":"huf2R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lI7Ue":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Feature", ()=>Feature);
class Feature {
    constructor(node){
        this.isMounted = false;
        this.node = node;
    }
    update() {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"inv8k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExitAnimationFeature", ()=>ExitAnimationFeature);
var _featureMjs = require("../Feature.mjs");
let id = 0;
class ExitAnimationFeature extends (0, _featureMjs.Feature) {
    constructor(){
        super(...arguments);
        this.id = id++;
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent, onExitComplete } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) return;
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
        if (onExitComplete && !isPresent) exitAnimation.then(()=>onExitComplete(this.id));
    }
    mount() {
        const { register } = this.node.presenceContext || {};
        if (register) this.unmount = register(this.id);
    }
    unmount() {}
}

},{"../Feature.mjs":"lI7Ue","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBUJ5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drag", ()=>drag);
var _indexMjs = require("../../gestures/drag/index.mjs");
var _indexMjs1 = require("../../gestures/pan/index.mjs");
var _measureLayoutMjs = require("./layout/MeasureLayout.mjs");
var _htmlprojectionNodeMjs = require("../../projection/node/HTMLProjectionNode.mjs");
const drag = {
    pan: {
        Feature: (0, _indexMjs1.PanGesture)
    },
    drag: {
        Feature: (0, _indexMjs.DragGesture),
        ProjectionNode: (0, _htmlprojectionNodeMjs.HTMLProjectionNode),
        MeasureLayout: (0, _measureLayoutMjs.MeasureLayout)
    }
};

},{"../../gestures/drag/index.mjs":"Xa3NE","../../gestures/pan/index.mjs":"8CJyV","./layout/MeasureLayout.mjs":"kA9rP","../../projection/node/HTMLProjectionNode.mjs":"d4eCC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Xa3NE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragGesture", ()=>DragGesture);
var _featureMjs = require("../../motion/features/Feature.mjs");
var _motionUtils = require("motion-utils");
var _visualElementDragControlsMjs = require("./VisualElementDragControls.mjs");
class DragGesture extends (0, _featureMjs.Feature) {
    constructor(node){
        super(node);
        this.removeGroupControls = (0, _motionUtils.noop);
        this.removeListeners = (0, _motionUtils.noop);
        this.controls = new (0, _visualElementDragControlsMjs.VisualElementDragControls)(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
        this.removeListeners = this.controls.addListeners() || (0, _motionUtils.noop);
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
    }
}

},{"../../motion/features/Feature.mjs":"lI7Ue","motion-utils":"9SDPC","./VisualElementDragControls.mjs":"cUl58","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUl58":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VisualElementDragControls", ()=>VisualElementDragControls);
parcelHelpers.export(exports, "elementDragControls", ()=>elementDragControls);
var _motionUtils = require("motion-utils");
var _motionDom = require("motion-dom");
var _panSessionMjs = require("../pan/PanSession.mjs");
var _isRefObjectMjs = require("../../utils/is-ref-object.mjs");
var _addPointerEventMjs = require("../../events/add-pointer-event.mjs");
var _constraintsMjs = require("./utils/constraints.mjs");
var _modelsMjs = require("../../projection/geometry/models.mjs");
var _eachAxisMjs = require("../../projection/utils/each-axis.mjs");
var _measureMjs = require("../../projection/utils/measure.mjs");
var _eventInfoMjs = require("../../events/event-info.mjs");
var _conversionMjs = require("../../projection/geometry/conversion.mjs");
var _addDomEventMjs = require("../../events/add-dom-event.mjs");
var _deltaCalcMjs = require("../../projection/geometry/delta-calc.mjs");
var _numberMjs = require("../../utils/mix/number.mjs");
var _unitsMjs = require("../../value/types/numbers/units.mjs");
var _motionValueMjs = require("../../animation/interfaces/motion-value.mjs");
var _getContextWindowMjs = require("../../utils/get-context-window.mjs");
var _addWillChangeMjs = require("../../value/use-will-change/add-will-change.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const elementDragControls = new WeakMap();
/**
 *
 */ // let latestPointerEvent: PointerEvent
class VisualElementDragControls {
    constructor(visualElement){
        this.openDragLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = {
            x: 0,
            y: 0
        };
        /**
         * The permitted boundaries of travel, in pixels.
         */ this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */ this.elastic = (0, _modelsMjs.createBox)();
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */ const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false) return;
        const onSessionStart = (event)=>{
            const { dragSnapToOrigin } = this.getProps();
            // Stop or pause any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            dragSnapToOrigin ? this.pauseAnimation() : this.stopAnimation();
            if (snapToCursor) this.snapToCursor((0, _eventInfoMjs.extractEventInfo)(event).point);
        };
        const onStart = (event, info)=>{
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openDragLock) this.openDragLock();
                this.openDragLock = (0, _motionDom.setDragLock)(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openDragLock) return;
            }
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */ (0, _eachAxisMjs.eachAxis)((axis)=>{
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */ if ((0, _unitsMjs.percent).test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = (0, _deltaCalcMjs.calcLength)(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) (0, _frameMjs.frame).postRender(()=>onDragStart(event, info));
            (0, _addWillChangeMjs.addValueToWillChange)(this.visualElement, "transform");
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info)=>{
            // latestPointerEvent = event
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openDragLock) return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) onDirectionLock && onDirectionLock(this.currentDirection);
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */ this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */ onDrag && onDrag(event, info);
        };
        const onSessionEnd = (event, info)=>this.stop(event, info);
        const resumeAnimation = ()=>(0, _eachAxisMjs.eachAxis)((axis)=>{
                var _a;
                return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
            });
        const { dragSnapToOrigin } = this.getProps();
        this.panSession = new (0, _panSessionMjs.PanSession)(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
            resumeAnimation
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin,
            contextWindow: (0, _getContextWindowMjs.getContextWindow)(this.visualElement)
        });
    }
    stop(event, info) {
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging) return;
        const { velocity } = info;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) (0, _frameMjs.frame).postRender(()=>onDragEnd(event, info));
    }
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) projection.isAnimationBlocked = false;
        this.panSession && this.panSession.end();
        this.panSession = undefined;
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openDragLock) {
            this.openDragLock();
            this.openDragLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) next = (0, _constraintsMjs.applyConstraints)(next, this.constraints[axis], this.elastic[axis]);
        axisValue.set(next);
    }
    resolveConstraints() {
        var _a;
        const { dragConstraints, dragElastic } = this.getProps();
        const layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
        const prevConstraints = this.constraints;
        if (dragConstraints && (0, _isRefObjectMjs.isRefObject)(dragConstraints)) {
            if (!this.constraints) this.constraints = this.resolveRefConstraints();
        } else if (dragConstraints && layout) this.constraints = (0, _constraintsMjs.calcRelativeConstraints)(layout.layoutBox, dragConstraints);
        else this.constraints = false;
        this.elastic = (0, _constraintsMjs.resolveDragElastic)(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */ if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) (0, _eachAxisMjs.eachAxis)((axis)=>{
            if (this.constraints !== false && this.getAxisMotionValue(axis)) this.constraints[axis] = (0, _constraintsMjs.rebaseAxisConstraints)(layout.layoutBox[axis], this.constraints[axis]);
        });
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !(0, _isRefObjectMjs.isRefObject)(constraints)) return false;
        const constraintsElement = constraints.current;
        (0, _motionUtils.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout) return false;
        const constraintsBox = (0, _measureMjs.measurePageBox)(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = (0, _constraintsMjs.calcViewportConstraints)(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */ if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints((0, _conversionMjs.convertBoxToBoundingBox)(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) measuredConstraints = (0, _conversionMjs.convertBoundingBoxToBox)(userConstraints);
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = (0, _eachAxisMjs.eachAxis)((axis)=>{
            if (!shouldDrag(axis, drag, this.currentDirection)) return;
            let transition = constraints && constraints[axis] || {};
            if (dragSnapToOrigin) transition = {
                min: 0,
                max: 0
            };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */ const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        (0, _addWillChangeMjs.addValueToWillChange)(this.visualElement, axis);
        return axisValue.start((0, _motionValueMjs.animateMotionValue)(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
        (0, _eachAxisMjs.eachAxis)((axis)=>this.getAxisMotionValue(axis).stop());
    }
    pauseAnimation() {
        (0, _eachAxisMjs.eachAxis)((axis)=>{
            var _a;
            return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
        });
    }
    getAnimationState(axis) {
        var _a;
        return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */ getAxisMotionValue(axis) {
        const dragKey = `_drag${axis.toUpperCase()}`;
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
    }
    snapToCursor(point) {
        (0, _eachAxisMjs.eachAxis)((axis)=>{
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection)) return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                axisValue.set(point[axis] - (0, _numberMjs.mixNumber)(min, max, 0.5));
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */ scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!(0, _isRefObjectMjs.isRefObject)(dragConstraints) || !projection || !this.constraints) return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */ this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */ const boxProgress = {
            x: 0,
            y: 0
        };
        (0, _eachAxisMjs.eachAxis)((axis)=>{
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue && this.constraints !== false) {
                const latest = axisValue.get();
                boxProgress[axis] = (0, _constraintsMjs.calcOrigin)({
                    min: latest,
                    max: latest
                }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */ const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */ (0, _eachAxisMjs.eachAxis)((axis)=>{
            if (!shouldDrag(axis, drag, null)) return;
            /**
             * Calculate a new transform based on the previous box progress
             */ const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set((0, _numberMjs.mixNumber)(min, max, boxProgress[axis]));
        });
    }
    addListeners() {
        if (!this.visualElement.current) return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */ const stopPointerListener = (0, _addPointerEventMjs.addPointerEvent)(element, "pointerdown", (event)=>{
            const { drag, dragListener = true } = this.getProps();
            drag && dragListener && this.start(event);
        });
        const measureDragConstraints = ()=>{
            const { dragConstraints } = this.getProps();
            if ((0, _isRefObjectMjs.isRefObject)(dragConstraints) && dragConstraints.current) this.constraints = this.resolveRefConstraints();
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        (0, _frameMjs.frame).read(measureDragConstraints);
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */ const stopResizeListener = (0, _addDomEventMjs.addDomEvent)(window, "resize", ()=>this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */ const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged })=>{
            if (this.isDragging && hasLayoutChanged) {
                (0, _eachAxisMjs.eachAxis)((axis)=>{
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue) return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        });
        return ()=>{
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = (0, _constraintsMjs.defaultElastic), dragMomentum = true } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum
        };
    }
}
function shouldDrag(direction, drag, currentDirection) {
    return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */ function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) direction = "y";
    else if (Math.abs(offset.x) > lockThreshold) direction = "x";
    return direction;
}

},{"motion-utils":"9SDPC","motion-dom":"8V8DE","../pan/PanSession.mjs":"9FpwA","../../utils/is-ref-object.mjs":"hA3DA","../../events/add-pointer-event.mjs":"80iJi","./utils/constraints.mjs":"aLORA","../../projection/geometry/models.mjs":"8tocy","../../projection/utils/each-axis.mjs":"iO8nE","../../projection/utils/measure.mjs":"dfpR2","../../events/event-info.mjs":"4Spbd","../../projection/geometry/conversion.mjs":"hRulW","../../events/add-dom-event.mjs":"jAgCf","../../projection/geometry/delta-calc.mjs":"7r3CU","../../utils/mix/number.mjs":"2kavH","../../value/types/numbers/units.mjs":"lGBHA","../../animation/interfaces/motion-value.mjs":"gQYlj","../../utils/get-context-window.mjs":"1SW7X","../../value/use-will-change/add-will-change.mjs":"jI8P2","../../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8V8DE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hover", ()=>(0, _hoverMjs.hover));
parcelHelpers.export(exports, "press", ()=>(0, _indexMjs.press));
parcelHelpers.export(exports, "resolveElements", ()=>(0, _resolveElementsMjs.resolveElements));
parcelHelpers.export(exports, "isDragActive", ()=>(0, _isActiveMjs.isDragActive));
parcelHelpers.export(exports, "isDragging", ()=>(0, _isActiveMjs.isDragging));
parcelHelpers.export(exports, "setDragLock", ()=>(0, _setActiveMjs.setDragLock));
parcelHelpers.export(exports, "isPrimaryPointer", ()=>(0, _isPrimaryPointerMjs.isPrimaryPointer));
parcelHelpers.export(exports, "isNodeOrChild", ()=>(0, _isNodeOrChildMjs.isNodeOrChild));
var _hoverMjs = require("./gestures/hover.mjs");
var _indexMjs = require("./gestures/press/index.mjs");
var _resolveElementsMjs = require("./utils/resolve-elements.mjs");
var _isActiveMjs = require("./gestures/drag/state/is-active.mjs");
var _setActiveMjs = require("./gestures/drag/state/set-active.mjs");
var _isPrimaryPointerMjs = require("./gestures/utils/is-primary-pointer.mjs");
var _isNodeOrChildMjs = require("./gestures/utils/is-node-or-child.mjs");

},{"./gestures/hover.mjs":"iHUix","./gestures/press/index.mjs":"dH9sy","./utils/resolve-elements.mjs":"eqdTO","./gestures/drag/state/is-active.mjs":"k0wvo","./gestures/drag/state/set-active.mjs":"dGyio","./gestures/utils/is-primary-pointer.mjs":"iA9Xg","./gestures/utils/is-node-or-child.mjs":"7MdIu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHUix":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hover", ()=>hover);
var _isActiveMjs = require("./drag/state/is-active.mjs");
var _setupMjs = require("./utils/setup.mjs");
/**
 * Filter out events that are not pointer events, or are triggering
 * while a Motion gesture is active.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.pointerType === "touch" || (0, _isActiveMjs.isDragActive)()) return;
        callback(event);
    };
}
/**
 * Create a hover gesture. hover() is different to .addEventListener("pointerenter")
 * in that it has an easier syntax, filters out polyfilled touch events, interoperates
 * with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
 *
 * @public
 */ function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = (0, _setupMjs.setupGesture)(elementOrSelector, options);
    const onPointerEnter = filterEvents((enterEvent)=>{
        const { target } = enterEvent;
        const onHoverEnd = onHoverStart(enterEvent);
        if (!onHoverEnd || !target) return;
        const onPointerLeave = filterEvents((leaveEvent)=>{
            onHoverEnd(leaveEvent);
            target.removeEventListener("pointerleave", onPointerLeave);
        });
        target.addEventListener("pointerleave", onPointerLeave, eventOptions);
    });
    elements.forEach((element)=>{
        element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    });
    return cancel;
}

},{"./drag/state/is-active.mjs":"k0wvo","./utils/setup.mjs":"5dHkx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0wvo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDragActive", ()=>isDragActive);
parcelHelpers.export(exports, "isDragging", ()=>isDragging);
const isDragging = {
    x: false,
    y: false
};
function isDragActive() {
    return isDragging.x || isDragging.y;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5dHkx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupGesture", ()=>setupGesture);
var _resolveElementsMjs = require("../../utils/resolve-elements.mjs");
function setupGesture(elementOrSelector, options) {
    const elements = (0, _resolveElementsMjs.resolveElements)(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
        passive: true,
        ...options,
        signal: gestureAbortController.signal
    };
    const cancel = ()=>gestureAbortController.abort();
    return [
        elements,
        eventOptions,
        cancel
    ];
}

},{"../../utils/resolve-elements.mjs":"eqdTO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqdTO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveElements", ()=>resolveElements);
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof Element) return [
        elementOrSelector
    ];
    else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) // TODO: Refactor to utils package
        // invariant(
        //     Boolean(scope.current),
        //     "Scope provided, but no element detected."
        // )
        root = scope.current;
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dH9sy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "press", ()=>press);
var _isActiveMjs = require("../drag/state/is-active.mjs");
var _isPrimaryPointerMjs = require("../utils/is-primary-pointer.mjs");
var _setupMjs = require("../utils/setup.mjs");
var _keyboardMjs = require("./utils/keyboard.mjs");
var _isKeyboardAccessibleMjs = require("./utils/is-keyboard-accessible.mjs");
var _isNodeOrChildMjs = require("../utils/is-node-or-child.mjs");
var _stateMjs = require("./utils/state.mjs");
/**
 * Filter out events that are not primary pointer events, or are triggering
 * while a Motion gesture is active.
 */ function isValidPressEvent(event) {
    return (0, _isPrimaryPointerMjs.isPrimaryPointer)(event) && !(0, _isActiveMjs.isDragActive)();
}
/**
 * Create a press gesture.
 *
 * Press is different to `"pointerdown"`, `"pointerup"` in that it
 * automatically filters out secondary pointer events like right
 * click and multitouch.
 *
 * It also adds accessibility support for keyboards, where
 * an element with a press gesture will receive focus and
 *  trigger on Enter `"keydown"` and `"keyup"` events.
 *
 * This is different to a browser's `"click"` event, which does
 * respond to keyboards but only for the `"click"` itself, rather
 * than the press start and end/cancel. The element also needs
 * to be focusable for this to work, whereas a press gesture will
 * make an element focusable by default.
 *
 * @public
 */ function press(elementOrSelector, onPressStart, options = {}) {
    const [elements, eventOptions, cancelEvents] = (0, _setupMjs.setupGesture)(elementOrSelector, options);
    const startPress = (startEvent)=>{
        const element = startEvent.currentTarget;
        if (!isValidPressEvent(startEvent) || (0, _stateMjs.isPressing).has(element)) return;
        (0, _stateMjs.isPressing).add(element);
        const onPressEnd = onPressStart(startEvent);
        const onPointerEnd = (endEvent, success)=>{
            window.removeEventListener("pointerup", onPointerUp);
            window.removeEventListener("pointercancel", onPointerCancel);
            if (!isValidPressEvent(endEvent) || !(0, _stateMjs.isPressing).has(element)) return;
            (0, _stateMjs.isPressing).delete(element);
            if (onPressEnd) onPressEnd(endEvent, {
                success
            });
        };
        const onPointerUp = (upEvent)=>{
            onPointerEnd(upEvent, options.useGlobalTarget || (0, _isNodeOrChildMjs.isNodeOrChild)(element, upEvent.target));
        };
        const onPointerCancel = (cancelEvent)=>{
            onPointerEnd(cancelEvent, false);
        };
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    elements.forEach((element)=>{
        if (!(0, _isKeyboardAccessibleMjs.isElementKeyboardAccessible)(element)) element.tabIndex = 0;
        const target = options.useGlobalTarget ? window : element;
        target.addEventListener("pointerdown", startPress, eventOptions);
        element.addEventListener("focus", (event)=>(0, _keyboardMjs.enableKeyboardPress)(event, eventOptions), eventOptions);
    });
    return cancelEvents;
}

},{"../drag/state/is-active.mjs":"k0wvo","../utils/is-primary-pointer.mjs":"iA9Xg","../utils/setup.mjs":"5dHkx","./utils/keyboard.mjs":"aQ35B","./utils/is-keyboard-accessible.mjs":"h70wu","../utils/is-node-or-child.mjs":"7MdIu","./utils/state.mjs":"iPeeV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iA9Xg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPrimaryPointer", ()=>isPrimaryPointer);
const isPrimaryPointer = (event)=>{
    if (event.pointerType === "mouse") return typeof event.button !== "number" || event.button <= 0;
    else /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */ return event.isPrimary !== false;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQ35B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enableKeyboardPress", ()=>enableKeyboardPress);
var _stateMjs = require("./state.mjs");
/**
 * Filter out events that are not "Enter" keys.
 */ function filterEvents(callback) {
    return (event)=>{
        if (event.key !== "Enter") return;
        callback(event);
    };
}
function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, {
        isPrimary: true,
        bubbles: true
    }));
}
const enableKeyboardPress = (focusEvent, eventOptions)=>{
    const element = focusEvent.currentTarget;
    if (!element) return;
    const handleKeydown = filterEvents(()=>{
        if ((0, _stateMjs.isPressing).has(element)) return;
        firePointerEvent(element, "down");
        const handleKeyup = filterEvents(()=>{
            firePointerEvent(element, "up");
        });
        const handleBlur = ()=>firePointerEvent(element, "cancel");
        element.addEventListener("keyup", handleKeyup, eventOptions);
        element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    /**
     * Add an event listener that fires on blur to remove the keydown events.
     */ element.addEventListener("blur", ()=>element.removeEventListener("keydown", handleKeydown), eventOptions);
};

},{"./state.mjs":"iPeeV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPeeV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPressing", ()=>isPressing);
const isPressing = new WeakSet();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h70wu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElementKeyboardAccessible", ()=>isElementKeyboardAccessible);
const focusableElements = new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
]);
function isElementKeyboardAccessible(element) {
    return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7MdIu":[function(require,module,exports,__globalThis) {
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNodeOrChild", ()=>isNodeOrChild);
const isNodeOrChild = (parent, child)=>{
    if (!child) return false;
    else if (parent === child) return true;
    else return isNodeOrChild(parent, child.parentElement);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dGyio":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setDragLock", ()=>setDragLock);
var _isActiveMjs = require("./is-active.mjs");
function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
        if ((0, _isActiveMjs.isDragging)[axis]) return null;
        else {
            (0, _isActiveMjs.isDragging)[axis] = true;
            return ()=>{
                (0, _isActiveMjs.isDragging)[axis] = false;
            };
        }
    } else {
        if ((0, _isActiveMjs.isDragging).x || (0, _isActiveMjs.isDragging).y) return null;
        else {
            (0, _isActiveMjs.isDragging).x = (0, _isActiveMjs.isDragging).y = true;
            return ()=>{
                (0, _isActiveMjs.isDragging).x = (0, _isActiveMjs.isDragging).y = false;
            };
        }
    }
}

},{"./is-active.mjs":"k0wvo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FpwA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PanSession", ()=>PanSession);
var _eventInfoMjs = require("../../events/event-info.mjs");
var _timeConversionMjs = require("../../utils/time-conversion.mjs");
var _addPointerEventMjs = require("../../events/add-pointer-event.mjs");
var _pipeMjs = require("../../utils/pipe.mjs");
var _distanceMjs = require("../../utils/distance.mjs");
var _motionDom = require("motion-dom");
var _frameMjs = require("../../frameloop/frame.mjs");
/**
 * @internal
 */ class PanSession {
    constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}){
        /**
         * @internal
         */ this.startEvent = null;
        /**
         * @internal
         */ this.lastMoveEvent = null;
        /**
         * @internal
         */ this.lastMoveEventInfo = null;
        /**
         * @internal
         */ this.handlers = {};
        /**
         * @internal
         */ this.contextWindow = window;
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            const isDistancePastThreshold = (0, _distanceMjs.distance2D)(info.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold) return;
            const { point } = info;
            const { timestamp } = (0, _frameMjs.frameData);
            this.history.push({
                ...point,
                timestamp
            });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info)=>{
            this.lastMoveEvent = event;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            (0, _frameMjs.frame).update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info)=>{
            this.end();
            const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
            if (this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const panInfo = getPanInfo(event.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) onEnd(event, panInfo);
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!(0, _motionDom.isPrimaryPointer)(event)) return;
        this.dragSnapToOrigin = dragSnapToOrigin;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        this.contextWindow = contextWindow || window;
        const info = (0, _eventInfoMjs.extractEventInfo)(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = (0, _frameMjs.frameData);
        this.history = [
            {
                ...point,
                timestamp
            }
        ];
        const { onSessionStart } = handlers;
        onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = (0, _pipeMjs.pipe)((0, _addPointerEventMjs.addPointerEvent)(this.contextWindow, "pointermove", this.handlePointerMove), (0, _addPointerEventMjs.addPointerEvent)(this.contextWindow, "pointerup", this.handlePointerUp), (0, _addPointerEventMjs.addPointerEvent)(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        (0, _frameMjs.cancelFrame)(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? {
        point: transformPagePoint(info.point)
    } : info;
}
function subtractPoint(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity(history, 0.1)
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
    if (history.length < 2) return {
        x: 0,
        y: 0
    };
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while(i >= 0){
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp > (0, _timeConversionMjs.secondsToMilliseconds)(timeDelta)) break;
        i--;
    }
    if (!timestampedPoint) return {
        x: 0,
        y: 0
    };
    const time = (0, _timeConversionMjs.millisecondsToSeconds)(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) return {
        x: 0,
        y: 0
    };
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time
    };
    if (currentVelocity.x === Infinity) currentVelocity.x = 0;
    if (currentVelocity.y === Infinity) currentVelocity.y = 0;
    return currentVelocity;
}

},{"../../events/event-info.mjs":"4Spbd","../../utils/time-conversion.mjs":"gdr8V","../../events/add-pointer-event.mjs":"80iJi","../../utils/pipe.mjs":"jGo2b","../../utils/distance.mjs":"adpzX","motion-dom":"8V8DE","../../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Spbd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addPointerInfo", ()=>addPointerInfo);
parcelHelpers.export(exports, "extractEventInfo", ()=>extractEventInfo);
var _motionDom = require("motion-dom");
function extractEventInfo(event) {
    return {
        point: {
            x: event.pageX,
            y: event.pageY
        }
    };
}
const addPointerInfo = (handler)=>{
    return (event)=>(0, _motionDom.isPrimaryPointer)(event) && handler(event, extractEventInfo(event));
};

},{"motion-dom":"8V8DE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80iJi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addPointerEvent", ()=>addPointerEvent);
var _addDomEventMjs = require("./add-dom-event.mjs");
var _eventInfoMjs = require("./event-info.mjs");
function addPointerEvent(target, eventName, handler, options) {
    return (0, _addDomEventMjs.addDomEvent)(target, eventName, (0, _eventInfoMjs.addPointerInfo)(handler), options);
}

},{"./add-dom-event.mjs":"jAgCf","./event-info.mjs":"4Spbd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jAgCf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addDomEvent", ()=>addDomEvent);
function addDomEvent(target, eventName, handler, options = {
    passive: true
}) {
    target.addEventListener(eventName, handler, options);
    return ()=>target.removeEventListener(eventName, handler);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adpzX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "distance2D", ()=>distance2D);
const distance = (a, b)=>Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hA3DA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isRefObject", ()=>isRefObject);
function isRefObject(ref) {
    return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aLORA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyConstraints", ()=>applyConstraints);
parcelHelpers.export(exports, "calcOrigin", ()=>calcOrigin);
parcelHelpers.export(exports, "calcRelativeAxisConstraints", ()=>calcRelativeAxisConstraints);
parcelHelpers.export(exports, "calcRelativeConstraints", ()=>calcRelativeConstraints);
parcelHelpers.export(exports, "calcViewportAxisConstraints", ()=>calcViewportAxisConstraints);
parcelHelpers.export(exports, "calcViewportConstraints", ()=>calcViewportConstraints);
parcelHelpers.export(exports, "defaultElastic", ()=>defaultElastic);
parcelHelpers.export(exports, "rebaseAxisConstraints", ()=>rebaseAxisConstraints);
parcelHelpers.export(exports, "resolveAxisElastic", ()=>resolveAxisElastic);
parcelHelpers.export(exports, "resolveDragElastic", ()=>resolveDragElastic);
parcelHelpers.export(exports, "resolvePointElastic", ()=>resolvePointElastic);
var _progressMjs = require("../../../utils/progress.mjs");
var _deltaCalcMjs = require("../../../projection/geometry/delta-calc.mjs");
var _clampMjs = require("../../../utils/clamp.mjs");
var _numberMjs = require("../../../utils/mix/number.mjs");
/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */ function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) // If we have a min point defined, and this is outside of that, constrain
    point = elastic ? (0, _numberMjs.mixNumber)(min, point, elastic.min) : Math.max(point, min);
    else if (max !== undefined && point > max) // If we have a max point defined, and this is outside of that, constrain
    point = elastic ? (0, _numberMjs.mixNumber)(max, point, elastic.max) : Math.min(point, max);
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */ function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined ? axis.max + max - (axis.max - axis.min) : undefined
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */ function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */ function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) [min, max] = [
        max,
        min
    ];
    return {
        min,
        max
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */ function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */ function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = (0, _deltaCalcMjs.calcLength)(source);
    const targetLength = (0, _deltaCalcMjs.calcLength)(target);
    if (targetLength > sourceLength) origin = (0, _progressMjs.progress)(target.min, target.max - sourceLength, source.min);
    else if (sourceLength > targetLength) origin = (0, _progressMjs.progress)(source.min, source.max - targetLength, target.min);
    return (0, _clampMjs.clamp)(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */ function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) relativeConstraints.min = constraints.min - layout.min;
    if (constraints.max !== undefined) relativeConstraints.max = constraints.max - layout.min;
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */ function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) dragElastic = 0;
    else if (dragElastic === true) dragElastic = defaultElastic;
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel)
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

},{"../../../utils/progress.mjs":"3vvIn","../../../projection/geometry/delta-calc.mjs":"7r3CU","../../../utils/clamp.mjs":"aZOh4","../../../utils/mix/number.mjs":"2kavH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7r3CU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcAxisDelta", ()=>calcAxisDelta);
parcelHelpers.export(exports, "calcBoxDelta", ()=>calcBoxDelta);
parcelHelpers.export(exports, "calcLength", ()=>calcLength);
parcelHelpers.export(exports, "calcRelativeAxis", ()=>calcRelativeAxis);
parcelHelpers.export(exports, "calcRelativeAxisPosition", ()=>calcRelativeAxisPosition);
parcelHelpers.export(exports, "calcRelativeBox", ()=>calcRelativeBox);
parcelHelpers.export(exports, "calcRelativePosition", ()=>calcRelativePosition);
parcelHelpers.export(exports, "isNear", ()=>isNear);
var _numberMjs = require("../../utils/mix/number.mjs");
const SCALE_PRECISION = 0.0001;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = (0, _numberMjs.mixNumber)(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = (0, _numberMjs.mixNumber)(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) delta.scale = 1.0;
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) delta.translate = 0.0;
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

},{"../../utils/mix/number.mjs":"2kavH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tocy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAxis", ()=>createAxis);
parcelHelpers.export(exports, "createAxisDelta", ()=>createAxisDelta);
parcelHelpers.export(exports, "createBox", ()=>createBox);
parcelHelpers.export(exports, "createDelta", ()=>createDelta);
const createAxisDelta = ()=>({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    });
const createDelta = ()=>({
        x: createAxisDelta(),
        y: createAxisDelta()
    });
const createAxis = ()=>({
        min: 0,
        max: 0
    });
const createBox = ()=>({
        x: createAxis(),
        y: createAxis()
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iO8nE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eachAxis", ()=>eachAxis);
function eachAxis(callback) {
    return [
        callback("x"),
        callback("y")
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfpR2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "measurePageBox", ()=>measurePageBox);
parcelHelpers.export(exports, "measureViewportBox", ()=>measureViewportBox);
var _conversionMjs = require("../geometry/conversion.mjs");
var _deltaApplyMjs = require("../geometry/delta-apply.mjs");
function measureViewportBox(instance, transformPoint) {
    return (0, _conversionMjs.convertBoundingBoxToBox)((0, _conversionMjs.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        (0, _deltaApplyMjs.translateAxis)(viewportBox.x, scroll.offset.x);
        (0, _deltaApplyMjs.translateAxis)(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}

},{"../geometry/conversion.mjs":"hRulW","../geometry/delta-apply.mjs":"4QsuN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRulW":[function(require,module,exports,__globalThis) {
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertBoundingBoxToBox", ()=>convertBoundingBoxToBox);
parcelHelpers.export(exports, "convertBoxToBoundingBox", ()=>convertBoxToBoundingBox);
parcelHelpers.export(exports, "transformBoxPoints", ()=>transformBoxPoints);
function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
        x: {
            min: left,
            max: right
        },
        y: {
            min: top,
            max: bottom
        }
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return {
        top: y.min,
        right: x.max,
        bottom: y.max,
        left: x.min
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */ function transformBoxPoints(point, transformPoint) {
    if (!transformPoint) return point;
    const topLeft = transformPoint({
        x: point.left,
        y: point.top
    });
    const bottomRight = transformPoint({
        x: point.right,
        y: point.bottom
    });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QsuN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyAxisDelta", ()=>applyAxisDelta);
parcelHelpers.export(exports, "applyBoxDelta", ()=>applyBoxDelta);
parcelHelpers.export(exports, "applyPointDelta", ()=>applyPointDelta);
parcelHelpers.export(exports, "applyTreeDeltas", ()=>applyTreeDeltas);
parcelHelpers.export(exports, "scalePoint", ()=>scalePoint);
parcelHelpers.export(exports, "transformAxis", ()=>transformAxis);
parcelHelpers.export(exports, "transformBox", ()=>transformBox);
parcelHelpers.export(exports, "translateAxis", ()=>translateAxis);
var _numberMjs = require("../../utils/mix/number.mjs");
var _hasTransformMjs = require("../utils/has-transform.mjs");
/**
 * Scales a point based on a factor and an originPoint
 */ function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */ function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) point = scalePoint(point, boxScale, originPoint);
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */ function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */ function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */ function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength) return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for(let i = 0; i < treeLength; i++){
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */ const { visualElement } = node.options;
        if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
        if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) transformBox(box, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
        });
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0, _hasTransformMjs.hasTransform)(node.latestValues)) transformBox(box, node.latestValues);
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */ if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1.0;
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1.0;
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */ function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = (0, _numberMjs.mixNumber)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */ function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}

},{"../../utils/mix/number.mjs":"2kavH","../utils/has-transform.mjs":"ihgFW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ihgFW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "has2DTranslate", ()=>has2DTranslate);
parcelHelpers.export(exports, "hasScale", ()=>hasScale);
parcelHelpers.export(exports, "hasTransform", ()=>hasTransform);
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1SW7X":[function(require,module,exports,__globalThis) {
// Fixes https://github.com/motiondivision/motion/issues/2270
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContextWindow", ()=>getContextWindow);
const getContextWindow = ({ current })=>{
    return current ? current.ownerDocument.defaultView : null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CJyV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PanGesture", ()=>PanGesture);
var _panSessionMjs = require("./PanSession.mjs");
var _addPointerEventMjs = require("../../events/add-pointer-event.mjs");
var _featureMjs = require("../../motion/features/Feature.mjs");
var _motionUtils = require("motion-utils");
var _getContextWindowMjs = require("../../utils/get-context-window.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const asyncHandler = (handler)=>(event, info)=>{
        if (handler) (0, _frameMjs.frame).postRender(()=>handler(event, info));
    };
class PanGesture extends (0, _featureMjs.Feature) {
    constructor(){
        super(...arguments);
        this.removePointerDownListener = (0, _motionUtils.noop);
    }
    onPointerDown(pointerDownEvent) {
        this.session = new (0, _panSessionMjs.PanSession)(pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: (0, _getContextWindowMjs.getContextWindow)(this.node)
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: onPan,
            onEnd: (event, info)=>{
                delete this.session;
                if (onPanEnd) (0, _frameMjs.frame).postRender(()=>onPanEnd(event, info));
            }
        };
    }
    mount() {
        this.removePointerDownListener = (0, _addPointerEventMjs.addPointerEvent)(this.node.current, "pointerdown", (event)=>this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}

},{"./PanSession.mjs":"9FpwA","../../events/add-pointer-event.mjs":"80iJi","../../motion/features/Feature.mjs":"lI7Ue","motion-utils":"9SDPC","../../utils/get-context-window.mjs":"1SW7X","../../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kA9rP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MeasureLayout", ()=>MeasureLayout);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _usePresenceMjs = require("../../../components/AnimatePresence/use-presence.mjs");
var _layoutGroupContextMjs = require("../../../context/LayoutGroupContext.mjs");
var _switchLayoutGroupContextMjs = require("../../../context/SwitchLayoutGroupContext.mjs");
var _stateMjs = require("../../../projection/node/state.mjs");
var _scaleBorderRadiusMjs = require("../../../projection/styles/scale-border-radius.mjs");
var _scaleBoxShadowMjs = require("../../../projection/styles/scale-box-shadow.mjs");
var _scaleCorrectionMjs = require("../../../projection/styles/scale-correction.mjs");
var _microtaskMjs = require("../../../frameloop/microtask.mjs");
var _frameMjs = require("../../../frameloop/frame.mjs");
"use client";
class MeasureLayoutWithContext extends (0, _react.Component) {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */ componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        (0, _scaleCorrectionMjs.addScaleCorrector)(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup.group) layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) switchLayoutGroup.register(projection);
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", ()=>{
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                onExitComplete: ()=>this.safeToRemove()
            });
        }
        (0, _stateMjs.globalProjectionState).hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const projection = visualElement.projection;
        if (!projection) return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */ projection.isPresent = isPresent;
        if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === undefined) projection.willUpdate();
        else this.safeToRemove();
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) projection.promote();
            else if (!projection.relegate()) /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */ (0, _frameMjs.frame).postRender(()=>{
                const stack = projection.getStack();
                if (!stack || !stack.members.length) this.safeToRemove();
            });
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            (0, _microtaskMjs.microtask).postRender(()=>{
                if (!projection.currentAnimation && projection.isLead()) this.safeToRemove();
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = (0, _usePresenceMjs.usePresence)();
    const layoutGroup = (0, _react.useContext)((0, _layoutGroupContextMjs.LayoutGroupContext));
    return (0, _jsxRuntime.jsx)(MeasureLayoutWithContext, {
        ...props,
        layoutGroup: layoutGroup,
        switchLayoutGroup: (0, _react.useContext)((0, _switchLayoutGroupContextMjs.SwitchLayoutGroupContext)),
        isPresent: isPresent,
        safeToRemove: safeToRemove
    });
}
const defaultScaleCorrectors = {
    borderRadius: {
        ...(0, _scaleBorderRadiusMjs.correctBorderRadius),
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius"
        ]
    },
    borderTopLeftRadius: (0, _scaleBorderRadiusMjs.correctBorderRadius),
    borderTopRightRadius: (0, _scaleBorderRadiusMjs.correctBorderRadius),
    borderBottomLeftRadius: (0, _scaleBorderRadiusMjs.correctBorderRadius),
    borderBottomRightRadius: (0, _scaleBorderRadiusMjs.correctBorderRadius),
    boxShadow: (0, _scaleBoxShadowMjs.correctBoxShadow)
};

},{"react/jsx-runtime":"6AEwr","react":"21dqq","../../../components/AnimatePresence/use-presence.mjs":"5CDO8","../../../context/LayoutGroupContext.mjs":"dEA1W","../../../context/SwitchLayoutGroupContext.mjs":"7GP4u","../../../projection/node/state.mjs":"bSdze","../../../projection/styles/scale-border-radius.mjs":"jq5xT","../../../projection/styles/scale-box-shadow.mjs":"ib5vk","../../../projection/styles/scale-correction.mjs":"4Bydu","../../../frameloop/microtask.mjs":"kTgpT","../../../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6AEwr":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("c4c10cbba9862d5f");

},{"c4c10cbba9862d5f":"kujY4"}],"kujY4":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    'use strict';
    var React = require("593632ccebda0d3a");
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || '';
        return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case REACT_PROFILER_TYPE:
                return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || 'Memo';
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var assign = Object.assign;
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes('<anonymous>')) _frame = _frame.replace('<anonymous>', fn.displayName);
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return '';
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return '' + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV(type, config, maybeKey, source, self) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
        if (maybeKey !== undefined) {
            checkKeyStringCoercion(maybeKey);
            key = '' + maybeKey;
        }
        if (hasValidKey(config)) {
            checkKeyStringCoercion(config.key);
            key = '' + config.key;
        }
        if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
        for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
         // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    var didWarnAboutKeySpread = {};
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
            var children = props.children;
            if (children !== undefined) {
                if (isStaticChildren) {
                    if (isArray(children)) {
                        for(var i = 0; i < children.length; i++)validateChildKeys(children[i], type);
                        if (Object.freeze) Object.freeze(children);
                    } else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        }
        if (hasOwnProperty.call(props, 'key')) {
            var componentName = getComponentNameFromType(type);
            var keys = Object.keys(props).filter(function(k) {
                return k !== 'key';
            });
            var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';
            if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';
                error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                didWarnAboutKeySpread[componentName + beforeExample] = true;
            }
        }
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    } // These two functions exist to still get child warnings in dev
    // even with the prod transform. This means that jsxDEV is purely
    // opt-in behavior for better messages but that we won't stop
    // giving you warnings if you use production apis.
    function jsxWithValidationStatic(type, props, key) {
        return jsxWithValidation(type, props, key, true);
    }
    function jsxWithValidationDynamic(type, props, key) {
        return jsxWithValidation(type, props, key, false);
    }
    var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
    // for now we can ship identical prod functions
    var jsxs = jsxWithValidationStatic;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsx;
    exports.jsxs = jsxs;
})();

},{"593632ccebda0d3a":"21dqq"}],"5CDO8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPresent", ()=>isPresent);
parcelHelpers.export(exports, "useIsPresent", ()=>useIsPresent);
parcelHelpers.export(exports, "usePresence", ()=>usePresence);
var _react = require("react");
var _presenceContextMjs = require("../../context/PresenceContext.mjs");
/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */ function usePresence() {
    const context = (0, _react.useContext)((0, _presenceContextMjs.PresenceContext));
    if (context === null) return [
        true,
        null
    ];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = (0, _react.useId)();
    (0, _react.useEffect)(()=>register(id), []);
    const safeToRemove = (0, _react.useCallback)(()=>onExitComplete && onExitComplete(id), [
        id,
        onExitComplete
    ]);
    return !isPresent && onExitComplete ? [
        false,
        safeToRemove
    ] : [
        true
    ];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */ function useIsPresent() {
    return isPresent((0, _react.useContext)((0, _presenceContextMjs.PresenceContext)));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}

},{"react":"21dqq","../../context/PresenceContext.mjs":"7DzvZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7DzvZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PresenceContext", ()=>PresenceContext);
var _react = require("react");
"use client";
/**
 * @public
 */ const PresenceContext = (0, _react.createContext)(null);

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dEA1W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LayoutGroupContext", ()=>LayoutGroupContext);
var _react = require("react");
"use client";
const LayoutGroupContext = (0, _react.createContext)({});

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7GP4u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SwitchLayoutGroupContext", ()=>SwitchLayoutGroupContext);
var _react = require("react");
"use client";
/**
 * Internal, exported only for usage in Framer
 */ const SwitchLayoutGroupContext = (0, _react.createContext)({});

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSdze":[function(require,module,exports,__globalThis) {
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "globalProjectionState", ()=>globalProjectionState);
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */ hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */ hasEverUpdated: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jq5xT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "correctBorderRadius", ()=>correctBorderRadius);
parcelHelpers.export(exports, "pixelsToPercent", ()=>pixelsToPercent);
var _unitsMjs = require("../../value/types/numbers/units.mjs");
function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min) return 0;
    return pixels / (axis.max - axis.min) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */ const correctBorderRadius = {
    correct: (latest, node)=>{
        if (!node.target) return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */ if (typeof latest === "string") {
            if ((0, _unitsMjs.px).test(latest)) latest = parseFloat(latest);
            else return latest;
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */ const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    }
};

},{"../../value/types/numbers/units.mjs":"lGBHA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ib5vk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "correctBoxShadow", ()=>correctBoxShadow);
var _numberMjs = require("../../utils/mix/number.mjs");
var _indexMjs = require("../../value/types/complex/index.mjs");
const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta })=>{
        const original = latest;
        const shadow = (0, _indexMjs.complex).parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5) return original;
        const template = (0, _indexMjs.complex).createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */ const averageScale = (0, _numberMjs.mixNumber)(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
        return template(shadow);
    }
};

},{"../../utils/mix/number.mjs":"2kavH","../../value/types/complex/index.mjs":"lmoWV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Bydu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addScaleCorrector", ()=>addScaleCorrector);
parcelHelpers.export(exports, "scaleCorrectors", ()=>scaleCorrectors);
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kTgpT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelMicrotask", ()=>cancelMicrotask);
parcelHelpers.export(exports, "microtask", ()=>microtask);
var _batcherMjs = require("./batcher.mjs");
const { schedule: microtask, cancel: cancelMicrotask } = (0, _batcherMjs.createRenderBatcher)(queueMicrotask, false);

},{"./batcher.mjs":"3fYwv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4eCC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLProjectionNode", ()=>HTMLProjectionNode);
parcelHelpers.export(exports, "rootProjectionNode", ()=>rootProjectionNode);
var _createProjectionNodeMjs = require("./create-projection-node.mjs");
var _documentProjectionNodeMjs = require("./DocumentProjectionNode.mjs");
const rootProjectionNode = {
    current: undefined
};
const HTMLProjectionNode = (0, _createProjectionNodeMjs.createProjectionNode)({
    measureScroll: (instance)=>({
            x: instance.scrollLeft,
            y: instance.scrollTop
        }),
    defaultParent: ()=>{
        if (!rootProjectionNode.current) {
            const documentNode = new (0, _documentProjectionNodeMjs.DocumentProjectionNode)({});
            documentNode.mount(window);
            documentNode.setOptions({
                layoutScroll: true
            });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value)=>{
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance)=>Boolean(window.getComputedStyle(instance).position === "fixed")
});

},{"./create-projection-node.mjs":"dvkZl","./DocumentProjectionNode.mjs":"hOjWn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvkZl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cleanDirtyNodes", ()=>cleanDirtyNodes);
parcelHelpers.export(exports, "createProjectionNode", ()=>createProjectionNode);
parcelHelpers.export(exports, "mixAxis", ()=>mixAxis);
parcelHelpers.export(exports, "mixAxisDelta", ()=>mixAxisDelta);
parcelHelpers.export(exports, "mixBox", ()=>mixBox);
parcelHelpers.export(exports, "propagateDirtyNodes", ()=>propagateDirtyNodes);
var _subscriptionManagerMjs = require("../../utils/subscription-manager.mjs");
var _mixValuesMjs = require("../animation/mix-values.mjs");
var _copyMjs = require("../geometry/copy.mjs");
var _deltaApplyMjs = require("../geometry/delta-apply.mjs");
var _deltaCalcMjs = require("../geometry/delta-calc.mjs");
var _deltaRemoveMjs = require("../geometry/delta-remove.mjs");
var _getValueTransitionMjs = require("../../animation/utils/get-value-transition.mjs");
var _utilsMjs = require("../geometry/utils.mjs");
var _stackMjs = require("../shared/stack.mjs");
var _scaleCorrectionMjs = require("../styles/scale-correction.mjs");
var _transformMjs = require("../styles/transform.mjs");
var _eachAxisMjs = require("../utils/each-axis.mjs");
var _hasTransformMjs = require("../utils/has-transform.mjs");
var _flatTreeMjs = require("../../render/utils/flat-tree.mjs");
var _resolveMotionValueMjs = require("../../value/utils/resolve-motion-value.mjs");
var _stateMjs = require("./state.mjs");
var _delayMjs = require("../../utils/delay.mjs");
var _numberMjs = require("../../utils/mix/number.mjs");
var _isSvgElementMjs = require("../../render/dom/utils/is-svg-element.mjs");
var _singleValueMjs = require("../../animation/animate/single-value.mjs");
var _clampMjs = require("../../utils/clamp.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
var _motionUtils = require("motion-utils");
var _syncTimeMjs = require("../../frameloop/sync-time.mjs");
var _microtaskMjs = require("../../frameloop/microtask.mjs");
var _getAppearIdMjs = require("../../animation/optimized-appear/get-appear-id.mjs");
var _modelsMjs = require("../geometry/models.mjs");
const metrics = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
const isDebug = typeof window !== "undefined" && window.MotionDebug !== undefined;
const transformAxes = [
    "",
    "X",
    "Y",
    "Z"
];
const hiddenVisibility = {
    visibility: "hidden"
};
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */ const animationTarget = 1000;
let id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    // Record the distorting transform and then temporarily set it to 0
    if (latestValues[key]) {
        values[key] = latestValues[key];
        visualElement.setStaticValue(key, 0);
        if (sharedAnimationValues) sharedAnimationValues[key] = 0;
    }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode) return;
    const { visualElement } = projectionNode.options;
    if (!visualElement) return;
    const appearId = (0, _getAppearIdMjs.getOptimisedAppearId)(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
        const { layout, layoutId } = projectionNode.options;
        window.MotionCancelOptimisedAnimation(appearId, "transform", (0, _frameMjs.frame), !(layout || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(parent);
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()){
            /**
             * A unique ID generated for every projection node.
             */ this.id = id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */ this.animationId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */ this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */ this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */ this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */ this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */ this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */ this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */ this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */ this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */ this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */ this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */ this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */ this.shouldResetTransform = false;
            /**
             * Store whether this node has been checked for optimised appear animations. As
             * effects fire bottom-up, and we want to look up the tree for appear animations,
             * this makes sure we only check each path once, stopping at nodes that
             * have already been checked.
             */ this.hasCheckedOptimisedAppear = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */ this.treeScale = {
                x: 1,
                y: 1
            };
            /**
             *
             */ this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.scheduleUpdate = ()=>this.update();
            this.projectionUpdateScheduled = false;
            this.checkUpdateFailed = ()=>{
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */ this.updateProjection = ()=>{
                this.projectionUpdateScheduled = false;
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */ if (isDebug) metrics.totalNodes = metrics.resolvedTargetDeltas = metrics.recalculatedProjection = 0;
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                if (isDebug) window.MotionDebug.record(metrics);
            };
            /**
             * Frame calculations
             */ this.resolvedRelativeTargetAt = 0.0;
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */ // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [
                ...parent.path,
                parent
            ] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for(let i = 0; i < this.path.length; i++)this.path[i].shouldResetTransform = true;
            if (this.root === this) this.nodes = new (0, _flatTreeMjs.FlatTree)();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) this.eventHandlers.set(name, new (0, _subscriptionManagerMjs.SubscriptionManager)());
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */ mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = (0, _isSvgElementMjs.isSVGElement)(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) visualElement.mount(instance);
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (isLayoutDirty && (layout || layoutId)) this.isLayoutDirty = true;
            if (attachResizeListener) {
                let cancelDelay;
                const resizeUnblockUpdate = ()=>this.root.updateBlockedByResize = false;
                attachResizeListener(instance, ()=>{
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = (0, _delayMjs.delay)(resizeUnblockUpdate, 250);
                    if ((0, _stateMjs.globalProjectionState).hasAnimatedSinceResize) {
                        (0, _stateMjs.globalProjectionState).hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) this.root.registerSharedNode(layoutId, this);
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false && visualElement && (layoutId || layout)) this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout })=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = undefined;
                    this.relativeTarget = undefined;
                    return;
                }
                // TODO: Check here if an animation exists
                const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
                const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
                /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */ const targetChanged = !this.targetLayout || !(0, _utilsMjs.boxEqualsRounded)(this.targetLayout, newLayout) || hasRelativeTargetChanged;
                /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */ const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
                    if (this.resumeFrom) {
                        this.resumingFrom = this.resumeFrom;
                        this.resumingFrom.resumingFrom = undefined;
                    }
                    this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                    const animationOptions = {
                        ...(0, _getValueTransitionMjs.getValueTransition)(layoutTransition, "layout"),
                        onPlay: onLayoutAnimationStart,
                        onComplete: onLayoutAnimationComplete
                    };
                    if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
                        animationOptions.delay = 0;
                        animationOptions.type = false;
                    }
                    this.startAnimation(animationOptions);
                } else {
                    /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never commited to screen and look like a jumpy box.
                         */ if (!hasLayoutChanged) finishAnimation(this);
                    if (this.isLead() && this.options.onExitComplete) this.options.onExitComplete();
                }
                this.targetLayout = newLayout;
            });
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            (0, _frameMjs.cancelFrame)(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked()) return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetSkewAndRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            /**
             * If we're running optimised appear animations then these must be
             * cancelled before measuring the DOM. This is so we can measure
             * the true layout of the element rather than the WAAPI animation
             * which will be unaffected by the resetSkewAndRotate step.
             *
             * Note: This is a DOM write. Worst case scenario is this is sandwiched
             * between other snapshot reads which will cause unnecessary style recalculations.
             * This has to happen here though, as we don't yet know which nodes will need
             * snapshots in startUpdate(), but we only want to cancel optimised animations
             * if a layout animation measurement is actually going to be affected by them.
             */ if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(this);
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty) return;
            this.isLayoutDirty = true;
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                node.shouldResetTransform = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) node.willUpdate(false);
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout) return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating) this.nodes.forEach(clearIsLayoutDirty);
            this.isUpdating = false;
            /**
             * Write
             */ this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */ // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */ // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */ const now = (0, _syncTimeMjs.time).now();
            (0, _frameMjs.frameData).delta = (0, _clampMjs.clamp)(0, 1000 / 60, now - (0, _frameMjs.frameData).timestamp);
            (0, _frameMjs.frameData).timestamp = now;
            (0, _frameMjs.frameData).isProcessing = true;
            (0, _frameMjs.frameSteps).update.process((0, _frameMjs.frameData));
            (0, _frameMjs.frameSteps).preRender.process((0, _frameMjs.frameData));
            (0, _frameMjs.frameSteps).render.process((0, _frameMjs.frameData));
            (0, _frameMjs.frameData).isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                (0, _microtaskMjs.microtask).read(this.scheduleUpdate);
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            if (!this.projectionUpdateScheduled) {
                this.projectionUpdateScheduled = true;
                (0, _frameMjs.frame).preRender(this.updateProjection, false, true);
            }
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */ (0, _frameMjs.frame).postRender(()=>{
                if (this.isLayoutDirty) this.root.didUpdate();
                else this.root.checkUpdateFailed();
            });
        }
        /**
         * Update measurements
         */ updateSnapshot() {
            if (this.snapshot || !this.instance) return;
            this.snapshot = this.measure();
        }
        updateLayout() {
            if (!this.instance) return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) return;
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */ if (this.resumeFrom && !this.resumeFrom.instance) for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                node.updateScroll();
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutCorrected = (0, _modelsMjs.createBox)();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) needsMeasurement = false;
            if (needsMeasurement) {
                const isRoot = checkIsScrollRoot(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot,
                    offset: measureScroll(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : isRoot
                };
            }
        }
        resetTransform() {
            if (!resetTransform) return;
            const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
            const hasProjection = this.projectionDelta && !(0, _utilsMjs.isDeltaZero)(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested && (hasProjection || (0, _hasTransformMjs.hasTransform)(this.latestValues) || transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */ if (removeTransform) layoutBox = this.removeTransform(layoutBox);
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id
            };
        }
        measurePageBox() {
            var _a;
            const { visualElement } = this.options;
            if (!visualElement) return (0, _modelsMjs.createBox)();
            const box = visualElement.measureViewportBox();
            const wasInScrollRoot = ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
            if (!wasInScrollRoot) {
                // Remove viewport scroll to give page-relative coordinates
                const { scroll } = this.root;
                if (scroll) {
                    (0, _deltaApplyMjs.translateAxis)(box.x, scroll.offset.x);
                    (0, _deltaApplyMjs.translateAxis)(box.y, scroll.offset.y);
                }
            }
            return box;
        }
        removeElementScroll(box) {
            var _a;
            const boxWithoutScroll = (0, _modelsMjs.createBox)();
            (0, _copyMjs.copyBoxInto)(boxWithoutScroll, box);
            if ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) return boxWithoutScroll;
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */ for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */ if (scroll.wasRoot) (0, _copyMjs.copyBoxInto)(boxWithoutScroll, box);
                    (0, _deltaApplyMjs.translateAxis)(boxWithoutScroll.x, scroll.offset.x);
                    (0, _deltaApplyMjs.translateAxis)(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false) {
            const withTransforms = (0, _modelsMjs.createBox)();
            (0, _copyMjs.copyBoxInto)(withTransforms, box);
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) (0, _deltaApplyMjs.transformBox)(withTransforms, {
                    x: -node.scroll.offset.x,
                    y: -node.scroll.offset.y
                });
                if (!(0, _hasTransformMjs.hasTransform)(node.latestValues)) continue;
                (0, _deltaApplyMjs.transformBox)(withTransforms, node.latestValues);
            }
            if ((0, _hasTransformMjs.hasTransform)(this.latestValues)) (0, _deltaApplyMjs.transformBox)(withTransforms, this.latestValues);
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = (0, _modelsMjs.createBox)();
            (0, _copyMjs.copyBoxInto)(boxWithoutTransform, box);
            for(let i = 0; i < this.path.length; i++){
                const node = this.path[i];
                if (!node.instance) continue;
                if (!(0, _hasTransformMjs.hasTransform)(node.latestValues)) continue;
                (0, _hasTransformMjs.hasScale)(node.latestValues) && node.updateSnapshot();
                const sourceBox = (0, _modelsMjs.createBox)();
                const nodeBox = node.measurePageBox();
                (0, _copyMjs.copyBoxInto)(sourceBox, nodeBox);
                (0, _deltaRemoveMjs.removeBoxTransforms)(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
            }
            if ((0, _hasTransformMjs.hasTransform)(this.latestValues)) (0, _deltaRemoveMjs.removeBoxTransforms)(boxWithoutTransform, this.latestValues);
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent) return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */ if (this.relativeParent.resolvedRelativeTargetAt !== (0, _frameMjs.frameData).timestamp) this.relativeParent.resolveTargetDelta(true);
        }
        resolveTargetDelta(forceRecalculation = false) {
            var _a;
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */ const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */ const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
            if (canSkip) return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */ if (!this.layout || !(layout || layoutId)) return;
            this.resolvedRelativeTargetAt = (0, _frameMjs.frameData).timestamp;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */ if (!this.targetDelta && !this.relativeTarget) {
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = (0, _modelsMjs.createBox)();
                    this.relativeTargetOrigin = (0, _modelsMjs.createBox)();
                    (0, _deltaCalcMjs.calcRelativePosition)(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
                    (0, _copyMjs.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                } else this.relativeParent = this.relativeTarget = undefined;
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */ if (!this.relativeTarget && !this.targetDelta) return;
            /**
             * Lazy-init target data structure
             */ if (!this.target) {
                this.target = (0, _modelsMjs.createBox)();
                this.targetWithTransforms = (0, _modelsMjs.createBox)();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */ if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                (0, _deltaCalcMjs.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target);
            /**
                 * If we've only got a targetDelta, resolve it into a target
                 */ } else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) // TODO: This is creating a new object every frame
                this.target = this.applyTransform(this.layout.layoutBox);
                else (0, _copyMjs.copyBoxInto)(this.target, this.layout.layoutBox);
                (0, _deltaApplyMjs.applyBoxDelta)(this.target, this.targetDelta);
            } else /**
                 * If no target, use own layout as target
                 */ (0, _copyMjs.copyBoxInto)(this.target, this.layout.layoutBox);
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */ if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = (0, _modelsMjs.createBox)();
                    this.relativeTargetOrigin = (0, _modelsMjs.createBox)();
                    (0, _deltaCalcMjs.calcRelativePosition)(this.relativeTargetOrigin, this.target, relativeParent.target);
                    (0, _copyMjs.copyBoxInto)(this.relativeTarget, this.relativeTargetOrigin);
                } else this.relativeParent = this.relativeTarget = undefined;
            }
            /**
             * Increase debug counter for resolved target deltas
             */ if (isDebug) metrics.resolvedTargetDeltas++;
        }
        getClosestProjectingParent() {
            if (!this.parent || (0, _hasTransformMjs.hasScale)(this.parent.latestValues) || (0, _hasTransformMjs.has2DTranslate)(this.parent.latestValues)) return undefined;
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        calcProjection() {
            var _a;
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */ if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) canSkip = false;
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */ if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) canSkip = false;
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */ if (this.resolvedRelativeTargetAt === (0, _frameMjs.frameData).timestamp) canSkip = false;
            if (canSkip) return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */ this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
            if (!this.isTreeAnimating) this.targetDelta = this.relativeTarget = undefined;
            if (!this.layout || !(layout || layoutId)) return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */ (0, _copyMjs.copyBoxInto)(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */ const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */ (0, _deltaApplyMjs.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */ if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
                lead.targetWithTransforms = (0, _modelsMjs.createBox)();
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */ if (this.prevProjectionDelta) {
                    this.createProjectionDeltas();
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta || !this.prevProjectionDelta) this.createProjectionDeltas();
            else {
                (0, _copyMjs.copyAxisDeltaInto)(this.prevProjectionDelta.x, this.projectionDelta.x);
                (0, _copyMjs.copyAxisDeltaInto)(this.prevProjectionDelta.y, this.projectionDelta.y);
            }
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */ (0, _deltaCalcMjs.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !(0, _utilsMjs.axisDeltaEquals)(this.projectionDelta.x, this.prevProjectionDelta.x) || !(0, _utilsMjs.axisDeltaEquals)(this.projectionDelta.y, this.prevProjectionDelta.y)) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */ if (isDebug) metrics.recalculatedProjection++;
        }
        hide() {
            this.isVisible = false;
        // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
        // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            var _a;
            (_a = this.options.visualElement) === null || _a === void 0 || _a.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) this.resumingFrom = undefined;
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = (0, _modelsMjs.createDelta)();
            this.projectionDelta = (0, _modelsMjs.createDelta)();
            this.projectionDeltaWithTransform = (0, _modelsMjs.createDelta)();
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
            const mixedValues = {
                ...this.latestValues
            };
            const targetDelta = (0, _modelsMjs.createDelta)();
            if (!this.relativeParent || !this.relativeParent.options.layoutRoot) this.relativeTarget = this.relativeTargetOrigin = undefined;
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = (0, _modelsMjs.createBox)();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest)=>{
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                    (0, _deltaCalcMjs.calcRelativePosition)(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */ if (prevRelativeTarget && (0, _utilsMjs.boxEquals)(this.relativeTarget, prevRelativeTarget)) this.isProjectionDirty = false;
                    if (!prevRelativeTarget) prevRelativeTarget = (0, _modelsMjs.createBox)();
                    (0, _copyMjs.copyBoxInto)(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    (0, _mixValuesMjs.mixValues)(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation && this.currentAnimation.stop();
            if (this.resumingFrom && this.resumingFrom.currentAnimation) this.resumingFrom.currentAnimation.stop();
            if (this.pendingAnimation) {
                (0, _frameMjs.cancelFrame)(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */ this.pendingAnimation = (0, _frameMjs.frame).update(()=>{
                (0, _stateMjs.globalProjectionState).hasAnimatedSinceResize = true;
                this.currentAnimation = (0, _singleValueMjs.animateSingleValue)(0, animationTarget, {
                    ...options,
                    onUpdate: (latest)=>{
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onComplete: ()=>{
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    }
                });
                if (this.resumingFrom) this.resumingFrom.currentAnimation = this.currentAnimation;
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom = this.currentAnimation = this.animationValues = undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout) return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */ if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || (0, _modelsMjs.createBox)();
                const xLength = (0, _deltaCalcMjs.calcLength)(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = (0, _deltaCalcMjs.calcLength)(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            (0, _copyMjs.copyBoxInto)(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */ (0, _deltaApplyMjs.transformBox)(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */ (0, _deltaCalcMjs.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) this.sharedNodes.set(layoutId, new (0, _stackMjs.NodeStack)());
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : undefined
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
        }
        getPrevLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId) return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity } = {}) {
            const stack = this.getStack();
            if (stack) stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition) this.setOptions({
                transition
            });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) return stack.relegate(this);
            else return false;
        }
        resetSkewAndRotation() {
            const { visualElement } = this.options;
            if (!visualElement) return;
            // If there's no detected skew or rotation values, we can early return without a forced render.
            let hasDistortingTransform = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */ const { latestValues } = visualElement;
            if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) hasDistortingTransform = true;
            // If there's no distorting values, we don't need to do any more.
            if (!hasDistortingTransform) return;
            const resetValues = {};
            if (latestValues.z) resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
            // Check the skew and rotate value of all axes and reset to 0
            for(let i = 0; i < transformAxes.length; i++){
                resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
                resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
            }
            // Force a render of this element to apply the transform with all skews and rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for(const key in resetValues){
                visualElement.setStaticValue(key, resetValues[key]);
                if (this.animationValues) this.animationValues[key] = resetValues[key];
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        getProjectionStyles(styleProp) {
            var _a, _b;
            if (!this.instance || this.isSVG) return undefined;
            if (!this.isVisible) return hiddenVisibility;
            const styles = {
                visibility: ""
            };
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents = (0, _resolveMotionValueMjs.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
                return styles;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                const emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity = this.latestValues.opacity !== undefined ? this.latestValues.opacity : 1;
                    emptyStyles.pointerEvents = (0, _resolveMotionValueMjs.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
                }
                if (this.hasProjected && !(0, _hasTransformMjs.hasTransform)(this.latestValues)) {
                    emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = (0, _transformMjs.buildProjectionTransform)(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) styles.transform = transformTemplate(valuesToRender, styles.transform);
            const { x, y } = this.projectionDelta;
            styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */ styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
            else /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */ styles.opacity = lead === this ? valuesToRender.opacity !== undefined ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== undefined ? valuesToRender.opacityExit : 0;
            /**
             * Apply scale correction
             */ for(const key in 0, _scaleCorrectionMjs.scaleCorrectors){
                if (valuesToRender[key] === undefined) continue;
                const { correct, applyTo } = (0, _scaleCorrectionMjs.scaleCorrectors)[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */ const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for(let i = 0; i < num; i++)styles[applyTo[i]] = corrected;
                } else styles[key] = corrected;
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */ if (this.options.layoutId) styles.pointerEvents = lead === this ? (0, _resolveMotionValueMjs.resolveMotionValue)(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
            return styles;
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node)=>{
                var _a;
                return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
            });
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a;
    const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") (0, _eachAxisMjs.eachAxis)((axis)=>{
            const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
            const length = (0, _deltaCalcMjs.calcLength)(axisSnapshot);
            axisSnapshot.min = layout[axis].min;
            axisSnapshot.max = axisSnapshot.min + length;
        });
        else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) (0, _eachAxisMjs.eachAxis)((axis)=>{
            const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
            const length = (0, _deltaCalcMjs.calcLength)(layout[axis]);
            axisSnapshot.max = axisSnapshot.min + length;
            /**
                 * Ensure relative target gets resized and rerendererd
                 */ if (node.relativeTarget && !node.currentAnimation) {
                node.isProjectionDirty = true;
                node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
            }
        });
        const layoutDelta = (0, _modelsMjs.createDelta)();
        (0, _deltaCalcMjs.calcBoxDelta)(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = (0, _modelsMjs.createDelta)();
        if (isShared) (0, _deltaCalcMjs.calcBoxDelta)(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        else (0, _deltaCalcMjs.calcBoxDelta)(visualDelta, layout, snapshot.layoutBox);
        const hasLayoutChanged = !(0, _utilsMjs.isDeltaZero)(layoutDelta);
        let hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */ if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const relativeSnapshot = (0, _modelsMjs.createBox)();
                    (0, _deltaCalcMjs.calcRelativePosition)(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    const relativeLayout = (0, _modelsMjs.createBox)();
                    (0, _deltaCalcMjs.calcRelativePosition)(relativeLayout, layout, parentLayout.layoutBox);
                    if (!(0, _utilsMjs.boxEqualsRounded)(relativeSnapshot, relativeLayout)) hasRelativeTargetChanged = true;
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeTargetChanged
        });
    } else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */ node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */ if (isDebug) metrics.totalNodes++;
    if (!node.parent) return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */ if (!node.isProjecting()) node.isProjectionDirty = node.parent.isProjectionDirty;
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */ node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) visualElement.notify("BeforeLayoutMeasure");
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = (0, _numberMjs.mixNumber)(delta.translate, 0, p);
    output.scale = (0, _numberMjs.mixNumber)(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = (0, _numberMjs.mixNumber)(from.min, to.min, p);
    output.max = (0, _numberMjs.mixNumber)(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== undefined;
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [
        0.4,
        0,
        0.1,
        1
    ]
};
const userAgentContains = (string)=>typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */ const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : (0, _motionUtils.noop);
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return animationType === "position" || animationType === "preserve-aspect" && !(0, _deltaCalcMjs.isNear)((0, _utilsMjs.aspectRatio)(snapshot), (0, _utilsMjs.aspectRatio)(layout), 0.2);
}
function checkNodeWasScrollRoot(node) {
    var _a;
    return node !== node.root && ((_a = node.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot);
}

},{"../../utils/subscription-manager.mjs":"fxDTo","../animation/mix-values.mjs":"6AWvl","../geometry/copy.mjs":"f206V","../geometry/delta-apply.mjs":"4QsuN","../geometry/delta-calc.mjs":"7r3CU","../geometry/delta-remove.mjs":"dXKkI","../../animation/utils/get-value-transition.mjs":"hygFb","../geometry/utils.mjs":"8NduD","../shared/stack.mjs":"gegN0","../styles/scale-correction.mjs":"4Bydu","../styles/transform.mjs":"g4dqh","../utils/each-axis.mjs":"iO8nE","../utils/has-transform.mjs":"ihgFW","../../render/utils/flat-tree.mjs":"cinYO","../../value/utils/resolve-motion-value.mjs":"2waBq","./state.mjs":"bSdze","../../utils/delay.mjs":"bbpYv","../../utils/mix/number.mjs":"2kavH","../../render/dom/utils/is-svg-element.mjs":"4r61T","../../animation/animate/single-value.mjs":"2XvCV","../../utils/clamp.mjs":"aZOh4","../../frameloop/frame.mjs":"3xPo8","motion-utils":"9SDPC","../../frameloop/sync-time.mjs":"7bjmD","../../frameloop/microtask.mjs":"kTgpT","../../animation/optimized-appear/get-appear-id.mjs":"hNfUl","../geometry/models.mjs":"8tocy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6AWvl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixValues", ()=>mixValues);
var _circMjs = require("../../easing/circ.mjs");
var _progressMjs = require("../../utils/progress.mjs");
var _numberMjs = require("../../utils/mix/number.mjs");
var _motionUtils = require("motion-utils");
var _unitsMjs = require("../../value/types/numbers/units.mjs");
const borders = [
    "TopLeft",
    "TopRight",
    "BottomLeft",
    "BottomRight"
];
const numBorders = borders.length;
const asNumber = (value)=>typeof value === "string" ? parseFloat(value) : value;
const isPx = (value)=>typeof value === "number" || (0, _unitsMjs.px).test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = (0, _numberMjs.mixNumber)(0, // TODO Reinstate this if only child
        lead.opacity !== undefined ? lead.opacity : 1, easeCrossfadeIn(progress));
        target.opacityExit = (0, _numberMjs.mixNumber)(follow.opacity !== undefined ? follow.opacity : 1, 0, easeCrossfadeOut(progress));
    } else if (isOnlyMember) target.opacity = (0, _numberMjs.mixNumber)(follow.opacity !== undefined ? follow.opacity : 1, lead.opacity !== undefined ? lead.opacity : 1, progress);
    /**
     * Mix border radius
     */ for(let i = 0; i < numBorders; i++){
        const borderLabel = `border${borders[i]}Radius`;
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined) continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max((0, _numberMjs.mixNumber)(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if ((0, _unitsMjs.percent).test(leadRadius) || (0, _unitsMjs.percent).test(followRadius)) target[borderLabel] += "%";
        } else target[borderLabel] = leadRadius;
    }
    /**
     * Mix rotation
     */ if (follow.rotate || lead.rotate) target.rotate = (0, _numberMjs.mixNumber)(follow.rotate || 0, lead.rotate || 0, progress);
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined ? values[radiusName] : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const easeCrossfadeIn = /*@__PURE__*/ compress(0, 0.5, (0, _circMjs.circOut));
const easeCrossfadeOut = /*@__PURE__*/ compress(0.5, 0.95, (0, _motionUtils.noop));
function compress(min, max, easing) {
    return (p)=>{
        // Could replace ifs with clamp
        if (p < min) return 0;
        if (p > max) return 1;
        return easing((0, _progressMjs.progress)(min, max, p));
    };
}

},{"../../easing/circ.mjs":"LdSua","../../utils/progress.mjs":"3vvIn","../../utils/mix/number.mjs":"2kavH","motion-utils":"9SDPC","../../value/types/numbers/units.mjs":"lGBHA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f206V":[function(require,module,exports,__globalThis) {
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copyAxisDeltaInto", ()=>copyAxisDeltaInto);
parcelHelpers.export(exports, "copyAxisInto", ()=>copyAxisInto);
parcelHelpers.export(exports, "copyBoxInto", ()=>copyBoxInto);
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}
/**
 * Reset a delta to the provided origin box.
 *
 * This is a mutative operation.
 */ function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXKkI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeAxisDelta", ()=>removeAxisDelta);
parcelHelpers.export(exports, "removeAxisTransforms", ()=>removeAxisTransforms);
parcelHelpers.export(exports, "removeBoxTransforms", ()=>removeBoxTransforms);
parcelHelpers.export(exports, "removePointDelta", ()=>removePointDelta);
var _numberMjs = require("../../utils/mix/number.mjs");
var _unitsMjs = require("../../value/types/numbers/units.mjs");
var _deltaApplyMjs = require("./delta-apply.mjs");
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */ function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = (0, _deltaApplyMjs.scalePoint)(point, 1 / scale, originPoint);
    if (boxScale !== undefined) point = (0, _deltaApplyMjs.scalePoint)(point, 1 / boxScale, originPoint);
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */ function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if ((0, _unitsMjs.percent).test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = (0, _numberMjs.mixNumber)(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number") return;
    let originPoint = (0, _numberMjs.mixNumber)(originAxis.min, originAxis.max, origin);
    if (axis === originAxis) originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */ function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */ const xKeys = [
    "x",
    "scaleX",
    "originX"
];
const yKeys = [
    "y",
    "scaleY",
    "originY"
];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */ function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}

},{"../../utils/mix/number.mjs":"2kavH","../../value/types/numbers/units.mjs":"lGBHA","./delta-apply.mjs":"4QsuN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8NduD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aspectRatio", ()=>aspectRatio);
parcelHelpers.export(exports, "axisDeltaEquals", ()=>axisDeltaEquals);
parcelHelpers.export(exports, "axisEquals", ()=>axisEquals);
parcelHelpers.export(exports, "axisEqualsRounded", ()=>axisEqualsRounded);
parcelHelpers.export(exports, "boxEquals", ()=>boxEquals);
parcelHelpers.export(exports, "boxEqualsRounded", ()=>boxEqualsRounded);
parcelHelpers.export(exports, "isDeltaZero", ()=>isDeltaZero);
var _deltaCalcMjs = require("./delta-calc.mjs");
function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
    return (0, _deltaCalcMjs.calcLength)(box.x) / (0, _deltaCalcMjs.calcLength)(box.y);
}
function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

},{"./delta-calc.mjs":"7r3CU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gegN0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NodeStack", ()=>NodeStack);
var _arrayMjs = require("../../utils/array.mjs");
class NodeStack {
    constructor(){
        this.members = [];
    }
    add(node) {
        (0, _arrayMjs.addUniqueItem)(this.members, node);
        node.scheduleRender();
    }
    remove(node) {
        (0, _arrayMjs.removeItem)(this.members, node);
        if (node === this.prevLead) this.prevLead = undefined;
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) this.promote(prevLead);
        }
    }
    relegate(node) {
        const indexOfNode = this.members.findIndex((member)=>node === member);
        if (indexOfNode === 0) return false;
        /**
         * Find the next projection node that is present
         */ let prevLead;
        for(let i = indexOfNode; i >= 0; i--){
            const member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        } else return false;
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead) return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) node.resumeFrom.preserveOpacity = true;
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
            }
            if (node.root && node.root.isUpdating) node.isLayoutDirty = true;
            const { crossfade } = node.options;
            if (crossfade === false) prevLead.hide();
        /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */ }
    }
    exitAnimationComplete() {
        this.members.forEach((node)=>{
            const { options, resumingFrom } = node;
            options.onExitComplete && options.onExitComplete();
            if (resumingFrom) resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
        });
    }
    scheduleRender() {
        this.members.forEach((node)=>{
            node.instance && node.scheduleRender(false);
        });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */ removeLeadSnapshot() {
        if (this.lead && this.lead.snapshot) this.lead.snapshot = undefined;
    }
}

},{"../../utils/array.mjs":"fpJYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4dqh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildProjectionTransform", ()=>buildProjectionTransform);
function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */ const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
    if (xTranslate || yTranslate || zTranslate) transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */ if (treeScale.x !== 1 || treeScale.y !== 1) transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    if (latestTransform) {
        const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
        if (transformPerspective) transform = `perspective(${transformPerspective}px) ${transform}`;
        if (rotate) transform += `rotate(${rotate}deg) `;
        if (rotateX) transform += `rotateX(${rotateX}deg) `;
        if (rotateY) transform += `rotateY(${rotateY}deg) `;
        if (skewX) transform += `skewX(${skewX}deg) `;
        if (skewY) transform += `skewY(${skewY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */ const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) transform += `scale(${elementScaleX}, ${elementScaleY})`;
    return transform || "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cinYO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FlatTree", ()=>FlatTree);
var _arrayMjs = require("../../utils/array.mjs");
var _compareByDepthMjs = require("./compare-by-depth.mjs");
class FlatTree {
    constructor(){
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        (0, _arrayMjs.addUniqueItem)(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        (0, _arrayMjs.removeItem)(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort((0, _compareByDepthMjs.compareByDepth));
        this.isDirty = false;
        this.children.forEach(callback);
    }
}

},{"../../utils/array.mjs":"fpJYa","./compare-by-depth.mjs":"ju6Jl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ju6Jl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareByDepth", ()=>compareByDepth);
const compareByDepth = (a, b)=>a.depth - b.depth;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2waBq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveMotionValue", ()=>resolveMotionValue);
var _resolveValueMjs = require("../../utils/resolve-value.mjs");
var _isMotionValueMjs = require("./is-motion-value.mjs");
/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */ function resolveMotionValue(value) {
    const unwrappedValue = (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value;
    return (0, _resolveValueMjs.isCustomValue)(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

},{"../../utils/resolve-value.mjs":"cPnbP","./is-motion-value.mjs":"94AYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbpYv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "delayInSeconds", ()=>delayInSeconds);
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _timeConversionMjs = require("./time-conversion.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
/**
 * Timeout defined in ms
 */ function delay(callback, timeout) {
    const start = (0, _syncTimeMjs.time).now();
    const checkElapsed = ({ timestamp })=>{
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            (0, _frameMjs.cancelFrame)(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    (0, _frameMjs.frame).read(checkElapsed, true);
    return ()=>(0, _frameMjs.cancelFrame)(checkElapsed);
}
function delayInSeconds(callback, timeout) {
    return delay(callback, (0, _timeConversionMjs.secondsToMilliseconds)(timeout));
}

},{"../frameloop/sync-time.mjs":"7bjmD","./time-conversion.mjs":"gdr8V","../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4r61T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGElement", ()=>isSVGElement);
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XvCV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSingleValue", ()=>animateSingleValue);
var _motionValueMjs = require("../interfaces/motion-value.mjs");
var _indexMjs = require("../../value/index.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0, _isMotionValueMjs.isMotionValue)(value) ? value : (0, _indexMjs.motionValue)(value);
    motionValue$1.start((0, _motionValueMjs.animateMotionValue)("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}

},{"../interfaces/motion-value.mjs":"gQYlj","../../value/index.mjs":"he8bY","../../value/utils/is-motion-value.mjs":"94AYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hOjWn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DocumentProjectionNode", ()=>DocumentProjectionNode);
var _createProjectionNodeMjs = require("./create-projection-node.mjs");
var _addDomEventMjs = require("../../events/add-dom-event.mjs");
const DocumentProjectionNode = (0, _createProjectionNodeMjs.createProjectionNode)({
    attachResizeListener: (ref, notify)=>(0, _addDomEventMjs.addDomEvent)(ref, "resize", notify),
    measureScroll: ()=>({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
    checkIsScrollRoot: ()=>true
});

},{"./create-projection-node.mjs":"dvkZl","../../events/add-dom-event.mjs":"jAgCf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2ALs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gestureAnimations", ()=>gestureAnimations);
var _hoverMjs = require("../../gestures/hover.mjs");
var _focusMjs = require("../../gestures/focus.mjs");
var _pressMjs = require("../../gestures/press.mjs");
var _indexMjs = require("./viewport/index.mjs");
const gestureAnimations = {
    inView: {
        Feature: (0, _indexMjs.InViewFeature)
    },
    tap: {
        Feature: (0, _pressMjs.PressGesture)
    },
    focus: {
        Feature: (0, _focusMjs.FocusGesture)
    },
    hover: {
        Feature: (0, _hoverMjs.HoverGesture)
    }
};

},{"../../gestures/hover.mjs":"45i9b","../../gestures/focus.mjs":"lF48W","../../gestures/press.mjs":"f9WQy","./viewport/index.mjs":"lrrdM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45i9b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HoverGesture", ()=>HoverGesture);
var _featureMjs = require("../motion/features/Feature.mjs");
var _motionDom = require("motion-dom");
var _eventInfoMjs = require("../events/event-info.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) node.animationState.setActive("whileHover", lifecycle === "Start");
    const eventName = "onHover" + lifecycle;
    const callback = props[eventName];
    if (callback) (0, _frameMjs.frame).postRender(()=>callback(event, (0, _eventInfoMjs.extractEventInfo)(event)));
}
class HoverGesture extends (0, _featureMjs.Feature) {
    mount() {
        const { current } = this.node;
        if (!current) return;
        this.unmount = (0, _motionDom.hover)(current, (startEvent)=>{
            handleHoverEvent(this.node, startEvent, "Start");
            return (endEvent)=>handleHoverEvent(this.node, endEvent, "End");
        });
    }
    unmount() {}
}

},{"../motion/features/Feature.mjs":"lI7Ue","motion-dom":"8V8DE","../events/event-info.mjs":"4Spbd","../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lF48W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FocusGesture", ()=>FocusGesture);
var _addDomEventMjs = require("../events/add-dom-event.mjs");
var _featureMjs = require("../motion/features/Feature.mjs");
var _pipeMjs = require("../utils/pipe.mjs");
class FocusGesture extends (0, _featureMjs.Feature) {
    constructor(){
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */ try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        } catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState) return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState) return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = (0, _pipeMjs.pipe)((0, _addDomEventMjs.addDomEvent)(this.node.current, "focus", ()=>this.onFocus()), (0, _addDomEventMjs.addDomEvent)(this.node.current, "blur", ()=>this.onBlur()));
    }
    unmount() {}
}

},{"../events/add-dom-event.mjs":"jAgCf","../motion/features/Feature.mjs":"lI7Ue","../utils/pipe.mjs":"jGo2b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9WQy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PressGesture", ()=>PressGesture);
var _featureMjs = require("../motion/features/Feature.mjs");
var _motionDom = require("motion-dom");
var _eventInfoMjs = require("../events/event-info.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileTap) node.animationState.setActive("whileTap", lifecycle === "Start");
    const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
    const callback = props[eventName];
    if (callback) (0, _frameMjs.frame).postRender(()=>callback(event, (0, _eventInfoMjs.extractEventInfo)(event)));
}
class PressGesture extends (0, _featureMjs.Feature) {
    mount() {
        const { current } = this.node;
        if (!current) return;
        this.unmount = (0, _motionDom.press)(current, (startEvent)=>{
            handlePressEvent(this.node, startEvent, "Start");
            return (endEvent, { success })=>handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
        }, {
            useGlobalTarget: this.node.props.globalTapTarget
        });
    }
    unmount() {}
}

},{"../motion/features/Feature.mjs":"lI7Ue","motion-dom":"8V8DE","../events/event-info.mjs":"4Spbd","../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lrrdM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InViewFeature", ()=>InViewFeature);
var _featureMjs = require("../Feature.mjs");
var _observersMjs = require("./observers.mjs");
const thresholdNames = {
    some: 0,
    all: 1
};
class InViewFeature extends (0, _featureMjs.Feature) {
    constructor(){
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.unmount();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount]
        };
        const onIntersectionUpdate = (entry)=>{
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */ if (this.isInView === isIntersecting) return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */ if (once && !isIntersecting && this.hasEnteredView) return;
            else if (isIntersecting) this.hasEnteredView = true;
            if (this.node.animationState) this.node.animationState.setActive("whileInView", isIntersecting);
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */ const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        return (0, _observersMjs.observeIntersection)(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined") return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = [
            "amount",
            "margin",
            "root"
        ].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) this.startObserver();
    }
    unmount() {}
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name)=>viewport[name] !== prevViewport[name];
}

},{"../Feature.mjs":"lI7Ue","./observers.mjs":"esyQ3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esyQ3":[function(require,module,exports,__globalThis) {
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeIntersection", ()=>observeIntersection);
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */ const observers = new WeakMap();
const fireObserverCallback = (entry)=>{
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries)=>{
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */ if (!observers.has(lookupRoot)) observers.set(lookupRoot, {});
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */ if (!rootObservers[key]) rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
        root,
        ...options
    });
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return ()=>{
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6XGhA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "layout", ()=>layout);
var _htmlprojectionNodeMjs = require("../../projection/node/HTMLProjectionNode.mjs");
var _measureLayoutMjs = require("./layout/MeasureLayout.mjs");
const layout = {
    layout: {
        ProjectionNode: (0, _htmlprojectionNodeMjs.HTMLProjectionNode),
        MeasureLayout: (0, _measureLayoutMjs.MeasureLayout)
    }
};

},{"../../projection/node/HTMLProjectionNode.mjs":"d4eCC","./layout/MeasureLayout.mjs":"kA9rP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIZPq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMotionComponentFactory", ()=>createMotionComponentFactory);
var _indexMjs = require("../../motion/index.mjs");
var _isSvgComponentMjs = require("../dom/utils/is-svg-component.mjs");
var _configMotionMjs = require("../svg/config-motion.mjs");
var _configMotionMjs1 = require("../html/config-motion.mjs");
var _useRenderMjs = require("../dom/use-render.mjs");
function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
    return function createMotionComponent(Component, { forwardMotionProps } = {
        forwardMotionProps: false
    }) {
        const baseConfig = (0, _isSvgComponentMjs.isSVGComponent)(Component) ? (0, _configMotionMjs.svgMotionConfig) : (0, _configMotionMjs1.htmlMotionConfig);
        const config = {
            ...baseConfig,
            preloadedFeatures,
            useRender: (0, _useRenderMjs.createUseRender)(forwardMotionProps),
            createVisualElement,
            Component
        };
        return (0, _indexMjs.createRendererMotionComponent)(config);
    };
}

},{"../../motion/index.mjs":"iexSD","../dom/utils/is-svg-component.mjs":"hnK2P","../svg/config-motion.mjs":"fAKfy","../html/config-motion.mjs":"bqr1f","../dom/use-render.mjs":"7Sb9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iexSD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRendererMotionComponent", ()=>createRendererMotionComponent);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _motionConfigContextMjs = require("../context/MotionConfigContext.mjs");
var _indexMjs = require("../context/MotionContext/index.mjs");
var _useVisualElementMjs = require("./utils/use-visual-element.mjs");
var _useMotionRefMjs = require("./utils/use-motion-ref.mjs");
var _createMjs = require("../context/MotionContext/create.mjs");
var _loadFeaturesMjs = require("./features/load-features.mjs");
var _isBrowserMjs = require("../utils/is-browser.mjs");
var _layoutGroupContextMjs = require("../context/LayoutGroupContext.mjs");
var _lazyContextMjs = require("../context/LazyContext.mjs");
var _symbolMjs = require("./utils/symbol.mjs");
var _motionUtils = require("motion-utils");
var _definitionsMjs = require("./features/definitions.mjs");
"use client";
/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */ function createRendererMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component }) {
    preloadedFeatures && (0, _loadFeaturesMjs.loadFeatures)(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */ let MeasureLayout;
        const configAndProps = {
            ...(0, _react.useContext)((0, _motionConfigContextMjs.MotionConfigContext)),
            ...props,
            layoutId: useLayoutId(props)
        };
        const { isStatic } = configAndProps;
        const context = (0, _createMjs.useCreateMotionContext)(props);
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && (0, _isBrowserMjs.isBrowser)) {
            useStrictMode(configAndProps, preloadedFeatures);
            const layoutProjection = getProjectionFunctionality(configAndProps);
            MeasureLayout = layoutProjection.MeasureLayout;
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */ context.visualElement = (0, _useVisualElementMjs.useVisualElement)(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */ return (0, _jsxRuntime.jsxs)((0, _indexMjs.MotionContext).Provider, {
            value: context,
            children: [
                MeasureLayout && context.visualElement ? (0, _jsxRuntime.jsx)(MeasureLayout, {
                    visualElement: context.visualElement,
                    ...configAndProps
                }) : null,
                useRender(Component, props, (0, _useMotionRefMjs.useMotionRef)(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)
            ]
        });
    }
    const ForwardRefMotionComponent = (0, _react.forwardRef)(MotionComponent);
    ForwardRefMotionComponent[0, _symbolMjs.motionComponentSymbol] = Component;
    return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = (0, _react.useContext)((0, _layoutGroupContextMjs.LayoutGroupContext)).id;
    return layoutGroupId && layoutId !== undefined ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
    const isStrict = (0, _react.useContext)((0, _lazyContextMjs.LazyContext)).strict;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */ if (preloadedFeatures && isStrict) {
        const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
        configAndProps.ignoreStrict ? (0, _motionUtils.warning)(false, strictMessage) : (0, _motionUtils.invariant)(false, strictMessage);
    }
}
function getProjectionFunctionality(props) {
    const { drag, layout } = (0, _definitionsMjs.featureDefinitions);
    if (!drag && !layout) return {};
    const combined = {
        ...drag,
        ...layout
    };
    return {
        MeasureLayout: (drag === null || drag === void 0 ? void 0 : drag.isEnabled(props)) || (layout === null || layout === void 0 ? void 0 : layout.isEnabled(props)) ? combined.MeasureLayout : undefined,
        ProjectionNode: combined.ProjectionNode
    };
}

},{"react/jsx-runtime":"6AEwr","react":"21dqq","../context/MotionConfigContext.mjs":"8MLRw","../context/MotionContext/index.mjs":"3aBYo","./utils/use-visual-element.mjs":"jpZGy","./utils/use-motion-ref.mjs":"dSaJF","../context/MotionContext/create.mjs":"e5BOK","./features/load-features.mjs":"5V8E4","../utils/is-browser.mjs":"1XAMO","../context/LayoutGroupContext.mjs":"dEA1W","../context/LazyContext.mjs":"3dClU","./utils/symbol.mjs":"11WZZ","motion-utils":"9SDPC","./features/definitions.mjs":"2lmsj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8MLRw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionConfigContext", ()=>MotionConfigContext);
var _react = require("react");
"use client";
/**
 * @public
 */ const MotionConfigContext = (0, _react.createContext)({
    transformPagePoint: (p)=>p,
    isStatic: false,
    reducedMotion: "never"
});

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3aBYo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionContext", ()=>MotionContext);
var _react = require("react");
"use client";
const MotionContext = (0, _react.createContext)({});

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpZGy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useVisualElement", ()=>useVisualElement);
var _react = require("react");
var _presenceContextMjs = require("../../context/PresenceContext.mjs");
var _indexMjs = require("../../context/MotionContext/index.mjs");
var _useIsomorphicEffectMjs = require("../../utils/use-isomorphic-effect.mjs");
var _lazyContextMjs = require("../../context/LazyContext.mjs");
var _motionConfigContextMjs = require("../../context/MotionConfigContext.mjs");
var _dataIdMjs = require("../../animation/optimized-appear/data-id.mjs");
var _microtaskMjs = require("../../frameloop/microtask.mjs");
var _isRefObjectMjs = require("../../utils/is-ref-object.mjs");
var _switchLayoutGroupContextMjs = require("../../context/SwitchLayoutGroupContext.mjs");
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor) {
    var _a, _b;
    const { visualElement: parent } = (0, _react.useContext)((0, _indexMjs.MotionContext));
    const lazyContext = (0, _react.useContext)((0, _lazyContextMjs.LazyContext));
    const presenceContext = (0, _react.useContext)((0, _presenceContextMjs.PresenceContext));
    const reducedMotionConfig = (0, _react.useContext)((0, _motionConfigContextMjs.MotionConfigContext)).reducedMotion;
    const visualElementRef = (0, _react.useRef)(null);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */ createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) visualElementRef.current = createVisualElement(Component, {
        visualState,
        parent,
        props,
        presenceContext,
        blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
        reducedMotionConfig
    });
    const visualElement = visualElementRef.current;
    /**
     * Load Motion gesture and animation features. These are rendered as renderless
     * components so each feature can optionally make use of React lifecycle methods.
     */ const initialLayoutGroupConfig = (0, _react.useContext)((0, _switchLayoutGroupContextMjs.SwitchLayoutGroupContext));
    if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    const isMounted = (0, _react.useRef)(false);
    (0, _react.useInsertionEffect)(()=>{
        /**
         * Check the component has already mounted before calling
         * `update` unnecessarily. This ensures we skip the initial update.
         */ if (visualElement && isMounted.current) visualElement.update(props, presenceContext);
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */ const optimisedAppearId = props[0, _dataIdMjs.optimizedAppearDataAttribute];
    const wantsHandoff = (0, _react.useRef)(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) === null || _b === void 0 ? void 0 : _b.call(window, optimisedAppearId)));
    (0, _useIsomorphicEffectMjs.useIsomorphicLayoutEffect)(()=>{
        if (!visualElement) return;
        isMounted.current = true;
        window.MotionIsMounted = true;
        visualElement.updateFeatures();
        (0, _microtaskMjs.microtask).render(visualElement.render);
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situtation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */ if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
    });
    (0, _react.useEffect)(()=>{
        if (!visualElement) return;
        if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
        if (wantsHandoff.current) {
            // This ensures all future calls to animateChanges() in this component will run in useEffect
            queueMicrotask(()=>{
                var _a;
                (_a = window.MotionHandoffMarkAsComplete) === null || _a === void 0 || _a.call(window, optimisedAppearId);
            });
            wantsHandoff.current = false;
        }
    });
    return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? undefined : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag) || dragConstraints && (0, _isRefObjectMjs.isRefObject)(dragConstraints),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */ animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig,
        layoutScroll,
        layoutRoot
    });
}
function getClosestProjectingNode(visualElement) {
    if (!visualElement) return undefined;
    return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}

},{"react":"21dqq","../../context/PresenceContext.mjs":"7DzvZ","../../context/MotionContext/index.mjs":"3aBYo","../../utils/use-isomorphic-effect.mjs":"5Yog2","../../context/LazyContext.mjs":"3dClU","../../context/MotionConfigContext.mjs":"8MLRw","../../animation/optimized-appear/data-id.mjs":"4rpx1","../../frameloop/microtask.mjs":"kTgpT","../../utils/is-ref-object.mjs":"hA3DA","../../context/SwitchLayoutGroupContext.mjs":"7GP4u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Yog2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useIsomorphicLayoutEffect", ()=>useIsomorphicLayoutEffect);
var _react = require("react");
var _isBrowserMjs = require("./is-browser.mjs");
const useIsomorphicLayoutEffect = (0, _isBrowserMjs.isBrowser) ? (0, _react.useLayoutEffect) : (0, _react.useEffect);

},{"react":"21dqq","./is-browser.mjs":"1XAMO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XAMO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
const isBrowser = typeof window !== "undefined";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dClU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LazyContext", ()=>LazyContext);
var _react = require("react");
"use client";
const LazyContext = (0, _react.createContext)({
    strict: false
});

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSaJF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMotionRef", ()=>useMotionRef);
var _react = require("react");
var _isRefObjectMjs = require("../../utils/is-ref-object.mjs");
/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */ function useMotionRef(visualState, visualElement, externalRef) {
    return (0, _react.useCallback)((instance)=>{
        instance && visualState.mount && visualState.mount(instance);
        if (visualElement) {
            if (instance) visualElement.mount(instance);
            else visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") externalRef(instance);
            else if ((0, _isRefObjectMjs.isRefObject)(externalRef)) externalRef.current = instance;
        }
    }, /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */ [
        visualElement
    ]);
}

},{"react":"21dqq","../../utils/is-ref-object.mjs":"hA3DA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5BOK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useCreateMotionContext", ()=>useCreateMotionContext);
var _react = require("react");
var _indexMjs = require("./index.mjs");
var _utilsMjs = require("./utils.mjs");
function useCreateMotionContext(props) {
    const { initial, animate } = (0, _utilsMjs.getCurrentTreeVariants)(props, (0, _react.useContext)((0, _indexMjs.MotionContext)));
    return (0, _react.useMemo)(()=>({
            initial,
            animate
        }), [
        variantLabelsAsDependency(initial),
        variantLabelsAsDependency(animate)
    ]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}

},{"react":"21dqq","./index.mjs":"3aBYo","./utils.mjs":"i5uJb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5uJb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCurrentTreeVariants", ()=>getCurrentTreeVariants);
var _isVariantLabelMjs = require("../../render/utils/is-variant-label.mjs");
var _isControllingVariantsMjs = require("../../render/utils/is-controlling-variants.mjs");
function getCurrentTreeVariants(props, context) {
    if ((0, _isControllingVariantsMjs.isControllingVariants)(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || (0, _isVariantLabelMjs.isVariantLabel)(initial) ? initial : undefined,
            animate: (0, _isVariantLabelMjs.isVariantLabel)(animate) ? animate : undefined
        };
    }
    return props.inherit !== false ? context : {};
}

},{"../../render/utils/is-variant-label.mjs":"erxli","../../render/utils/is-controlling-variants.mjs":"i9jG9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9jG9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isControllingVariants", ()=>isControllingVariants);
parcelHelpers.export(exports, "isVariantNode", ()=>isVariantNode);
var _isAnimationControlsMjs = require("../../animation/utils/is-animation-controls.mjs");
var _isVariantLabelMjs = require("./is-variant-label.mjs");
var _variantPropsMjs = require("./variant-props.mjs");
function isControllingVariants(props) {
    return (0, _isAnimationControlsMjs.isAnimationControls)(props.animate) || (0, _variantPropsMjs.variantProps).some((name)=>(0, _isVariantLabelMjs.isVariantLabel)(props[name]));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}

},{"../../animation/utils/is-animation-controls.mjs":"3wAZE","./is-variant-label.mjs":"erxli","./variant-props.mjs":"huf2R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5V8E4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadFeatures", ()=>loadFeatures);
var _definitionsMjs = require("./definitions.mjs");
function loadFeatures(features) {
    for(const key in features)(0, _definitionsMjs.featureDefinitions)[key] = {
        ...(0, _definitionsMjs.featureDefinitions)[key],
        ...features[key]
    };
}

},{"./definitions.mjs":"2lmsj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lmsj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "featureDefinitions", ()=>featureDefinitions);
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag"
    ],
    exit: [
        "exit"
    ],
    drag: [
        "drag",
        "dragControls"
    ],
    focus: [
        "whileFocus"
    ],
    hover: [
        "whileHover",
        "onHoverStart",
        "onHoverEnd"
    ],
    tap: [
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel"
    ],
    pan: [
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd"
    ],
    inView: [
        "whileInView",
        "onViewportEnter",
        "onViewportLeave"
    ],
    layout: [
        "layout",
        "layoutId"
    ]
};
const featureDefinitions = {};
for(const key in featureProps)featureDefinitions[key] = {
    isEnabled: (props)=>featureProps[key].some((name)=>!!props[name])
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11WZZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "motionComponentSymbol", ()=>motionComponentSymbol);
const motionComponentSymbol = Symbol.for("motionComponentSymbol");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnK2P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGComponent", ()=>isSVGComponent);
var _lowercaseElementsMjs = require("../../svg/lowercase-elements.mjs");
function isSVGComponent(Component) {
    if (/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */ typeof Component !== "string" || /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */ Component.includes("-")) return false;
    else if (/**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */ (0, _lowercaseElementsMjs.lowercaseSVGElements).indexOf(Component) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */ /[A-Z]/u.test(Component)) return true;
    return false;
}

},{"../../svg/lowercase-elements.mjs":"4UtXq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UtXq":[function(require,module,exports,__globalThis) {
/**
 * We keep these listed separately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lowercaseSVGElements", ()=>lowercaseSVGElements);
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAKfy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svgMotionConfig", ()=>svgMotionConfig);
var _renderMjs = require("./utils/render.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
var _useVisualStateMjs = require("../../motion/utils/use-visual-state.mjs");
var _createRenderStateMjs = require("./utils/create-render-state.mjs");
var _buildAttrsMjs = require("./utils/build-attrs.mjs");
var _isSvgTagMjs = require("./utils/is-svg-tag.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const svgMotionConfig = {
    useVisualState: (0, _useVisualStateMjs.makeUseVisualState)({
        scrapeMotionValuesFromProps: (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps),
        createRenderState: (0, _createRenderStateMjs.createSvgRenderState),
        onMount: (props, instance, { renderState, latestValues })=>{
            (0, _frameMjs.frame).read(()=>{
                try {
                    renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
                } catch (e) {
                    // Most likely trying to measure an unrendered element under Firefox
                    renderState.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                }
            });
            (0, _frameMjs.frame).render(()=>{
                (0, _buildAttrsMjs.buildSVGAttrs)(renderState, latestValues, (0, _isSvgTagMjs.isSVGTag)(instance.tagName), props.transformTemplate);
                (0, _renderMjs.renderSVG)(instance, renderState);
            });
        }
    })
};

},{"./utils/render.mjs":"iuDSF","./utils/scrape-motion-values.mjs":"bGUYu","../../motion/utils/use-visual-state.mjs":"bYE4p","./utils/create-render-state.mjs":"bM46q","./utils/build-attrs.mjs":"lDaMj","./utils/is-svg-tag.mjs":"iLrl0","../../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iuDSF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSVG", ()=>renderSVG);
var _camelToDashMjs = require("../../dom/utils/camel-to-dash.mjs");
var _renderMjs = require("../../html/utils/render.mjs");
var _camelCaseAttrsMjs = require("./camel-case-attrs.mjs");
function renderSVG(element, renderState, _styleProp, projection) {
    (0, _renderMjs.renderHTML)(element, renderState, undefined, projection);
    for(const key in renderState.attrs)element.setAttribute(!(0, _camelCaseAttrsMjs.camelCaseAttributes).has(key) ? (0, _camelToDashMjs.camelToDash)(key) : key, renderState.attrs[key]);
}

},{"../../dom/utils/camel-to-dash.mjs":"eUOx7","../../html/utils/render.mjs":"jRfU5","./camel-case-attrs.mjs":"aH7Xw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRfU5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHTML", ()=>renderHTML);
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for(const key in vars)element.style.setProperty(key, vars[key]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aH7Xw":[function(require,module,exports,__globalThis) {
/**
 * A set of attribute names that are always read/written as camel case.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelCaseAttributes", ()=>camelCaseAttributes);
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGUYu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrapeMotionValuesFromProps", ()=>scrapeMotionValuesFromProps);
var _isMotionValueMjs = require("../../../value/utils/is-motion-value.mjs");
var _scrapeMotionValuesMjs = require("../../html/utils/scrape-motion-values.mjs");
var _transformMjs = require("../../html/utils/transform.mjs");
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    for(const key in props)if ((0, _isMotionValueMjs.isMotionValue)(props[key]) || (0, _isMotionValueMjs.isMotionValue)(prevProps[key])) {
        const targetKey = (0, _transformMjs.transformPropOrder).indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
    }
    return newValues;
}

},{"../../../value/utils/is-motion-value.mjs":"94AYa","../../html/utils/scrape-motion-values.mjs":"fCzyn","../../html/utils/transform.mjs":"iSy8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCzyn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrapeMotionValuesFromProps", ()=>scrapeMotionValuesFromProps);
var _isForcedMotionValueMjs = require("../../../motion/utils/is-forced-motion-value.mjs");
var _isMotionValueMjs = require("../../../value/utils/is-motion-value.mjs");
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var _a;
    const { style } = props;
    const newValues = {};
    for(const key in style)if ((0, _isMotionValueMjs.isMotionValue)(style[key]) || prevProps.style && (0, _isMotionValueMjs.isMotionValue)(prevProps.style[key]) || (0, _isForcedMotionValueMjs.isForcedMotionValue)(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== undefined) newValues[key] = style[key];
    return newValues;
}

},{"../../../motion/utils/is-forced-motion-value.mjs":"lWFg7","../../../value/utils/is-motion-value.mjs":"94AYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lWFg7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isForcedMotionValue", ()=>isForcedMotionValue);
var _scaleCorrectionMjs = require("../../projection/styles/scale-correction.mjs");
var _transformMjs = require("../../render/html/utils/transform.mjs");
function isForcedMotionValue(key, { layout, layoutId }) {
    return (0, _transformMjs.transformProps).has(key) || key.startsWith("origin") || (layout || layoutId !== undefined) && (!!(0, _scaleCorrectionMjs.scaleCorrectors)[key] || key === "opacity");
}

},{"../../projection/styles/scale-correction.mjs":"4Bydu","../../render/html/utils/transform.mjs":"iSy8E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYE4p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeUseVisualState", ()=>makeUseVisualState);
var _react = require("react");
var _isAnimationControlsMjs = require("../../animation/utils/is-animation-controls.mjs");
var _presenceContextMjs = require("../../context/PresenceContext.mjs");
var _resolveVariantsMjs = require("../../render/utils/resolve-variants.mjs");
var _useConstantMjs = require("../../utils/use-constant.mjs");
var _resolveMotionValueMjs = require("../../value/utils/resolve-motion-value.mjs");
var _indexMjs = require("../../context/MotionContext/index.mjs");
var _isControllingVariantsMjs = require("../../render/utils/is-controlling-variants.mjs");
function makeState({ scrapeMotionValuesFromProps, createRenderState, onMount }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState()
    };
    if (onMount) state.mount = (instance)=>onMount(props, instance, state);
    return state;
}
const makeUseVisualState = (config)=>(props, isStatic)=>{
        const context = (0, _react.useContext)((0, _indexMjs.MotionContext));
        const presenceContext = (0, _react.useContext)((0, _presenceContextMjs.PresenceContext));
        const make = ()=>makeState(config, props, context, presenceContext);
        return isStatic ? make() : (0, _useConstantMjs.useConstant)(make);
    };
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for(const key in motionValues)values[key] = (0, _resolveMotionValueMjs.resolveMotionValue)(motionValues[key]);
    let { initial, animate } = props;
    const isControllingVariants$1 = (0, _isControllingVariantsMjs.isControllingVariants)(props);
    const isVariantNode$1 = (0, _isControllingVariantsMjs.isVariantNode)(props);
    if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
        if (initial === undefined) initial = context.initial;
        if (animate === undefined) animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !(0, _isAnimationControlsMjs.isAnimationControls)(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [
            variantToSet
        ];
        for(let i = 0; i < list.length; i++){
            const resolved = (0, _resolveVariantsMjs.resolveVariantFromProps)(props, list[i]);
            if (resolved) {
                const { transitionEnd, transition, ...target } = resolved;
                for(const key in target){
                    let valueTarget = target[key];
                    if (Array.isArray(valueTarget)) {
                        /**
                         * Take final keyframe if the initial animation is blocked because
                         * we want to initialise at the end of that blocked animation.
                         */ const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
                        valueTarget = valueTarget[index];
                    }
                    if (valueTarget !== null) values[key] = valueTarget;
                }
                for(const key in transitionEnd)values[key] = transitionEnd[key];
            }
        }
    }
    return values;
}

},{"react":"21dqq","../../animation/utils/is-animation-controls.mjs":"3wAZE","../../context/PresenceContext.mjs":"7DzvZ","../../render/utils/resolve-variants.mjs":"8MzkH","../../utils/use-constant.mjs":"gAAJI","../../value/utils/resolve-motion-value.mjs":"2waBq","../../context/MotionContext/index.mjs":"3aBYo","../../render/utils/is-controlling-variants.mjs":"i9jG9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAAJI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useConstant", ()=>useConstant);
var _react = require("react");
/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */ function useConstant(init) {
    const ref = (0, _react.useRef)(null);
    if (ref.current === null) ref.current = init();
    return ref.current;
}

},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bM46q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSvgRenderState", ()=>createSvgRenderState);
var _createRenderStateMjs = require("../../html/utils/create-render-state.mjs");
const createSvgRenderState = ()=>({
        ...(0, _createRenderStateMjs.createHtmlRenderState)(),
        attrs: {}
    });

},{"../../html/utils/create-render-state.mjs":"fH0Wg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fH0Wg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHtmlRenderState", ()=>createHtmlRenderState);
const createHtmlRenderState = ()=>({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDaMj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSVGAttrs", ()=>buildSVGAttrs);
var _buildStylesMjs = require("../../html/utils/build-styles.mjs");
var _transformOriginMjs = require("./transform-origin.mjs");
var _pathMjs = require("./path.mjs");
/**
 * Build SVG visual attrbutes, like cx and style.transform
 */ function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, // This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate) {
    (0, _buildStylesMjs.buildHTMLStyles)(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */ if (isSVGTag) {
        if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */ if (attrs.transform) {
        if (dimensions) style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions && (originX !== undefined || originY !== undefined || style.transform)) style.transformOrigin = (0, _transformOriginMjs.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined) attrs.x = attrX;
    if (attrY !== undefined) attrs.y = attrY;
    if (attrScale !== undefined) attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) (0, _pathMjs.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
}

},{"../../html/utils/build-styles.mjs":"2ABzU","./transform-origin.mjs":"hcFr3","./path.mjs":"akvM2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ABzU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHTMLStyles", ()=>buildHTMLStyles);
var _buildTransformMjs = require("./build-transform.mjs");
var _isCssVariableMjs = require("../../dom/utils/is-css-variable.mjs");
var _transformMjs = require("./transform.mjs");
var _getAsTypeMjs = require("../../dom/value-types/get-as-type.mjs");
var _numberMjs = require("../../dom/value-types/number.mjs");
function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */ for(const key in latestValues){
        const value = latestValues[key];
        if ((0, _transformMjs.transformProps).has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        } else if ((0, _isCssVariableMjs.isCSSVariableName)(key)) {
            vars[key] = value;
            continue;
        } else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = (0, _getAsTypeMjs.getValueAsType)(value, (0, _numberMjs.numberValueTypes)[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] = valueAsType;
            } else style[key] = valueAsType;
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) style.transform = (0, _buildTransformMjs.buildTransform)(latestValues, state.transform, transformTemplate);
        else if (style.transform) /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */ style.transform = "none";
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */ if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}

},{"./build-transform.mjs":"exDqb","../../dom/utils/is-css-variable.mjs":"8qZz5","./transform.mjs":"iSy8E","../../dom/value-types/get-as-type.mjs":"cv0EP","../../dom/value-types/number.mjs":"biQiX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exDqb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTransform", ()=>buildTransform);
var _transformMjs = require("./transform.mjs");
var _getAsTypeMjs = require("../../dom/value-types/get-as-type.mjs");
var _numberMjs = require("../../dom/value-types/number.mjs");
const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
const numTransforms = (0, _transformMjs.transformPropOrder).length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */ function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */ for(let i = 0; i < numTransforms; i++){
        const key = (0, _transformMjs.transformPropOrder)[i];
        const value = latestValues[key];
        if (value === undefined) continue;
        let valueIsDefault = true;
        if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        else valueIsDefault = parseFloat(value) === 0;
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = (0, _getAsTypeMjs.getValueAsType)(value, (0, _numberMjs.numberValueTypes)[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) transform[key] = valueAsType;
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    else if (transformIsDefault) transformString = "none";
    return transformString;
}

},{"./transform.mjs":"iSy8E","../../dom/value-types/get-as-type.mjs":"cv0EP","../../dom/value-types/number.mjs":"biQiX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cv0EP":[function(require,module,exports,__globalThis) {
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueAsType", ()=>getValueAsType);
const getValueAsType = (value, type)=>{
    return type && typeof value === "number" ? type.transform(value) : value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcFr3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcSVGTransformOrigin", ()=>calcSVGTransformOrigin);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
function calcOrigin(origin, offset, size) {
    return typeof origin === "string" ? origin : (0, _unitsMjs.px).transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */ function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}

},{"../../../value/types/numbers/units.mjs":"lGBHA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"akvM2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSVGPath", ()=>buildSVGPath);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */ function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = (0, _unitsMjs.px).transform(-offset);
    // Build the dash array
    const pathLength = (0, _unitsMjs.px).transform(length);
    const pathSpacing = (0, _unitsMjs.px).transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

},{"../../../value/types/numbers/units.mjs":"lGBHA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iLrl0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
const isSVGTag = (tag)=>typeof tag === "string" && tag.toLowerCase() === "svg";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqr1f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlMotionConfig", ()=>htmlMotionConfig);
var _useVisualStateMjs = require("../../motion/utils/use-visual-state.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
var _createRenderStateMjs = require("./utils/create-render-state.mjs");
const htmlMotionConfig = {
    useVisualState: (0, _useVisualStateMjs.makeUseVisualState)({
        scrapeMotionValuesFromProps: (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps),
        createRenderState: (0, _createRenderStateMjs.createHtmlRenderState)
    })
};

},{"../../motion/utils/use-visual-state.mjs":"bYE4p","./utils/scrape-motion-values.mjs":"fCzyn","./utils/create-render-state.mjs":"fH0Wg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Sb9b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createUseRender", ()=>createUseRender);
var _react = require("react");
var _usePropsMjs = require("../html/use-props.mjs");
var _filterPropsMjs = require("./utils/filter-props.mjs");
var _isSvgComponentMjs = require("./utils/is-svg-component.mjs");
var _usePropsMjs1 = require("../svg/use-props.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
function createUseRender(forwardMotionProps = false) {
    const useRender = (Component, props, ref, { latestValues }, isStatic)=>{
        const useVisualProps = (0, _isSvgComponentMjs.isSVGComponent)(Component) ? (0, _usePropsMjs1.useSVGProps) : (0, _usePropsMjs.useHTMLProps);
        const visualProps = useVisualProps(props, latestValues, isStatic, Component);
        const filteredProps = (0, _filterPropsMjs.filterProps)(props, typeof Component === "string", forwardMotionProps);
        const elementProps = Component !== (0, _react.Fragment) ? {
            ...filteredProps,
            ...visualProps,
            ref
        } : {};
        /**
         * If component has been handed a motion value as its child,
         * memoise its initial value and render that. Subsequent updates
         * will be handled by the onChange handler
         */ const { children } = props;
        const renderedChildren = (0, _react.useMemo)(()=>(0, _isMotionValueMjs.isMotionValue)(children) ? children.get() : children, [
            children
        ]);
        return (0, _react.createElement)(Component, {
            ...elementProps,
            children: renderedChildren
        });
    };
    return useRender;
}

},{"react":"21dqq","../html/use-props.mjs":"2D388","./utils/filter-props.mjs":"juMO1","./utils/is-svg-component.mjs":"hnK2P","../svg/use-props.mjs":"eKOGX","../../value/utils/is-motion-value.mjs":"94AYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2D388":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "copyRawValuesOnly", ()=>copyRawValuesOnly);
parcelHelpers.export(exports, "useHTMLProps", ()=>useHTMLProps);
var _react = require("react");
var _isForcedMotionValueMjs = require("../../motion/utils/is-forced-motion-value.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
var _buildStylesMjs = require("./utils/build-styles.mjs");
var _createRenderStateMjs = require("./utils/create-render-state.mjs");
function copyRawValuesOnly(target, source, props) {
    for(const key in source)if (!(0, _isMotionValueMjs.isMotionValue)(source[key]) && !(0, _isForcedMotionValueMjs.isForcedMotionValue)(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate }, visualState) {
    return (0, _react.useMemo)(()=>{
        const state = (0, _createRenderStateMjs.createHtmlRenderState)();
        (0, _buildStylesMjs.buildHTMLStyles)(state, visualState, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [
        visualState
    ]);
}
function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */ copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
}
function useHTMLProps(props, visualState) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
        // Disable scrolling on the draggable direction
        style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
    htmlProps.style = style;
    return htmlProps;
}

},{"react":"21dqq","../../motion/utils/is-forced-motion-value.mjs":"lWFg7","../../value/utils/is-motion-value.mjs":"94AYa","./utils/build-styles.mjs":"2ABzU","./utils/create-render-state.mjs":"fH0Wg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juMO1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filterProps", ()=>filterProps);
parcelHelpers.export(exports, "loadExternalIsValidProp", ()=>loadExternalIsValidProp);
var _validPropMjs = require("../../../motion/utils/valid-prop.mjs");
let shouldForward = (key)=>!(0, _validPropMjs.isValidMotionProp)(key);
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp) return;
    // Explicitly filter our events
    shouldForward = (key)=>key.startsWith("on") ? !(0, _validPropMjs.isValidMotionProp)(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */ try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */ loadExternalIsValidProp(require("125f13913be7321c").default);
} catch (_a) {
// We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for(const key in props){
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */ if (key === "values" && typeof props.values === "object") continue;
        if (shouldForward(key) || forwardMotionProps === true && (0, _validPropMjs.isValidMotionProp)(key) || !isDom && !(0, _validPropMjs.isValidMotionProp)(key) || // If trying to use native HTML drag events, forward drag listeners
        props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
    }
    return filteredProps;
}

},{"../../../motion/utils/valid-prop.mjs":"9bBA6","125f13913be7321c":"@emotion/is-prop-valid","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bBA6":[function(require,module,exports,__globalThis) {
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidMotionProp", ()=>isValidMotionProp);
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport"
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */ function isValidMotionProp(key) {
    return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKOGX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSVGProps", ()=>useSVGProps);
var _react = require("react");
var _usePropsMjs = require("../html/use-props.mjs");
var _buildAttrsMjs = require("./utils/build-attrs.mjs");
var _createRenderStateMjs = require("./utils/create-render-state.mjs");
var _isSvgTagMjs = require("./utils/is-svg-tag.mjs");
function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = (0, _react.useMemo)(()=>{
        const state = (0, _createRenderStateMjs.createSvgRenderState)();
        (0, _buildAttrsMjs.buildSVGAttrs)(state, visualState, (0, _isSvgTagMjs.isSVGTag)(Component), props.transformTemplate);
        return {
            ...state.attrs,
            style: {
                ...state.style
            }
        };
    }, [
        visualState
    ]);
    if (props.style) {
        const rawStyles = {};
        (0, _usePropsMjs.copyRawValuesOnly)(rawStyles, props.style, props);
        visualProps.style = {
            ...rawStyles,
            ...visualProps.style
        };
    }
    return visualProps;
}

},{"react":"21dqq","../html/use-props.mjs":"2D388","./utils/build-attrs.mjs":"lDaMj","./utils/create-render-state.mjs":"bM46q","./utils/is-svg-tag.mjs":"iLrl0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WHCBp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDomVisualElement", ()=>createDomVisualElement);
var _react = require("react");
var _htmlvisualElementMjs = require("../html/HTMLVisualElement.mjs");
var _svgvisualElementMjs = require("../svg/SVGVisualElement.mjs");
var _isSvgComponentMjs = require("./utils/is-svg-component.mjs");
const createDomVisualElement = (Component, options)=>{
    return (0, _isSvgComponentMjs.isSVGComponent)(Component) ? new (0, _svgvisualElementMjs.SVGVisualElement)(options) : new (0, _htmlvisualElementMjs.HTMLVisualElement)(options, {
        allowProjection: Component !== (0, _react.Fragment)
    });
};

},{"react":"21dqq","../html/HTMLVisualElement.mjs":"3a21f","../svg/SVGVisualElement.mjs":"7bI6y","./utils/is-svg-component.mjs":"hnK2P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3a21f":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLVisualElement", ()=>HTMLVisualElement);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
var _buildStylesMjs = require("./utils/build-styles.mjs");
var _isCssVariableMjs = require("../dom/utils/is-css-variable.mjs");
var _transformMjs = require("./utils/transform.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
var _renderMjs = require("./utils/render.mjs");
var _defaultsMjs = require("../dom/value-types/defaults.mjs");
var _measureMjs = require("../../projection/utils/measure.mjs");
var _domvisualElementMjs = require("../dom/DOMVisualElement.mjs");
function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends (0, _domvisualElementMjs.DOMVisualElement) {
    constructor(){
        super(...arguments);
        this.type = "html";
        this.renderInstance = (0, _renderMjs.renderHTML);
    }
    readValueFromInstance(instance, key) {
        if ((0, _transformMjs.transformProps).has(key)) {
            const defaultType = (0, _defaultsMjs.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        } else {
            const computedStyle = getComputedStyle(instance);
            const value = ((0, _isCssVariableMjs.isCSSVariableName)(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return (0, _measureMjs.measureViewportBox)(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        (0, _buildStylesMjs.buildHTMLStyles)(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
}

},{"./utils/build-styles.mjs":"2ABzU","../dom/utils/is-css-variable.mjs":"8qZz5","./utils/transform.mjs":"iSy8E","./utils/scrape-motion-values.mjs":"fCzyn","./utils/render.mjs":"jRfU5","../dom/value-types/defaults.mjs":"1Ajoh","../../projection/utils/measure.mjs":"dfpR2","../dom/DOMVisualElement.mjs":"lT6ej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lT6ej":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMVisualElement", ()=>DOMVisualElement);
var _visualElementMjs = require("../VisualElement.mjs");
var _domkeyframesResolverMjs = require("./DOMKeyframesResolver.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
class DOMVisualElement extends (0, _visualElementMjs.VisualElement) {
    constructor(){
        super(...arguments);
        this.KeyframeResolver = (0, _domkeyframesResolverMjs.DOMKeyframesResolver);
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */ return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style ? props.style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if ((0, _isMotionValueMjs.isMotionValue)(children)) this.childSubscription = children.on("change", (latest)=>{
            if (this.current) this.current.textContent = `${latest}`;
        });
    }
}

},{"../VisualElement.mjs":"3YJr4","./DOMKeyframesResolver.mjs":"8RcLh","../../value/utils/is-motion-value.mjs":"94AYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3YJr4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VisualElement", ()=>VisualElement);
var _indexMjs = require("../utils/reduced-motion/index.mjs");
var _stateMjs = require("../utils/reduced-motion/state.mjs");
var _subscriptionManagerMjs = require("../utils/subscription-manager.mjs");
var _indexMjs1 = require("../value/index.mjs");
var _isMotionValueMjs = require("../value/utils/is-motion-value.mjs");
var _transformMjs = require("./html/utils/transform.mjs");
var _isControllingVariantsMjs = require("./utils/is-controlling-variants.mjs");
var _motionValuesMjs = require("./utils/motion-values.mjs");
var _resolveVariantsMjs = require("./utils/resolve-variants.mjs");
var _warnOnceMjs = require("../utils/warn-once.mjs");
var _definitionsMjs = require("../motion/features/definitions.mjs");
var _storeMjs = require("./store.mjs");
var _keyframesResolverMjs = require("./utils/KeyframesResolver.mjs");
var _isNumericalStringMjs = require("../utils/is-numerical-string.mjs");
var _isZeroValueStringMjs = require("../utils/is-zero-value-string.mjs");
var _findMjs = require("./dom/value-types/find.mjs");
var _indexMjs2 = require("../value/types/complex/index.mjs");
var _animatableNoneMjs = require("./dom/value-types/animatable-none.mjs");
var _modelsMjs = require("../projection/geometry/models.mjs");
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
];
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */ class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */ scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}){
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */ this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */ this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */ this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */ this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */ this.values = new Map();
        this.KeyframeResolver = (0, _keyframesResolverMjs.KeyframeResolver);
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */ this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */ this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */ this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */ this.propEventSubscriptions = {};
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues);
        this.render = ()=>{
            if (!this.current) return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = ()=>{
            const now = (0, _syncTimeMjs.time).now();
            if (this.renderScheduledAt < now) {
                this.renderScheduledAt = now;
                (0, _frameMjs.frame).render(this.render, false, true);
            }
        };
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = {
            ...latestValues
        };
        this.initialValues = props.initial ? {
            ...latestValues
        } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = (0, _isControllingVariantsMjs.isControllingVariants)(props);
        this.isVariantNode = (0, _isControllingVariantsMjs.isVariantNode)(props);
        if (this.isVariantNode) this.variantChildren = new Set();
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */ const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
        for(const key in initialMotionValues){
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0, _isMotionValueMjs.isMotionValue)(value)) value.set(latestValues[key], false);
        }
    }
    mount(instance) {
        this.current = instance;
        (0, _storeMjs.visualElementStore).set(instance, this);
        if (this.projection && !this.projection.instance) this.projection.mount(instance);
        if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
        this.values.forEach((value, key)=>this.bindToMotionValue(key, value));
        if (!(0, _stateMjs.hasReducedMotionListener).current) (0, _indexMjs.initPrefersReducedMotion)();
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : (0, _stateMjs.prefersReducedMotion).current;
        (0, _warnOnceMjs.warnOnce)(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
        if (this.parent) this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        (0, _storeMjs.visualElementStore).delete(this.current);
        this.projection && this.projection.unmount();
        (0, _frameMjs.cancelFrame)(this.notifyUpdate);
        (0, _frameMjs.cancelFrame)(this.render);
        this.valueSubscriptions.forEach((remove)=>remove());
        this.valueSubscriptions.clear();
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for(const key in this.events)this.events[key].clear();
        for(const key in this.features){
            const feature = this.features[key];
            if (feature) {
                feature.unmount();
                feature.isMounted = false;
            }
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
        const valueIsTransform = (0, _transformMjs.transformProps).has(key);
        const removeOnChange = value.on("change", (latestValue)=>{
            this.latestValues[key] = latestValue;
            this.props.onUpdate && (0, _frameMjs.frame).preRender(this.notifyUpdate);
            if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        let removeSyncCheck;
        if (window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
        this.valueSubscriptions.set(key, ()=>{
            removeOnChange();
            removeOnRenderRequest();
            if (removeSyncCheck) removeSyncCheck();
            if (value.owner) value.stop();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */ if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
        let key = "animation";
        for(key in 0, _definitionsMjs.featureDefinitions){
            const featureDefinition = (0, _definitionsMjs.featureDefinitions)[key];
            if (!featureDefinition) continue;
            const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
            /**
             * If this feature is enabled but not active, make a new instance.
             */ if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
            /**
             * If we have a feature, mount or update it.
             */ if (this.features[key]) {
                const feature = this.features[key];
                if (feature.isMounted) feature.update();
                else {
                    feature.mount();
                    feature.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */ measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, _modelsMjs.createBox)();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */ update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */ for(let i = 0; i < propEventHandlers.length; i++){
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listenerName = "on" + key;
            const listener = props[listenerName];
            if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
        }
        this.prevMotionValues = (0, _motionValuesMjs.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
        if (this.handleChildMotionValue) this.handleChildMotionValue();
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */ getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */ getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : undefined;
    }
    /**
     * Add a child visual element to our set of children.
     */ addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
            return ()=>closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */ addValue(key, value) {
        // Remove existing value if it exists
        const existingValue = this.values.get(key);
        if (value !== existingValue) {
            if (existingValue) this.removeValue(key);
            this.bindToMotionValue(key, value);
            this.values.set(key, value);
            this.latestValues[key] = value.get();
        }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */ removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */ hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) return this.props.values[key];
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0, _indexMjs1.motionValue)(defaultValue === null ? undefined : defaultValue, {
                owner: this
            });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */ readValue(key, target) {
        var _a;
        let value = this.latestValues[key] !== undefined || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
        if (value !== undefined && value !== null) {
            if (typeof value === "string" && ((0, _isNumericalStringMjs.isNumericalString)(value) || (0, _isZeroValueStringMjs.isZeroValueString)(value))) // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
            else if (!(0, _findMjs.findValueType)(value) && (0, _indexMjs2.complex).test(target)) value = (0, _animatableNoneMjs.getAnimatableNone)(key, target);
            this.setBaseTarget(key, (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value);
        }
        return (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */ setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */ getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        let valueFromInitial;
        if (typeof initial === "string" || typeof initial === "object") {
            const variant = (0, _resolveVariantsMjs.resolveVariantFromProps)(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
            if (variant) valueFromInitial = variant[key];
        }
        /**
         * If this value still exists in the current initial variant, read that.
         */ if (initial && valueFromInitial !== undefined) return valueFromInitial;
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */ const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !(0, _isMotionValueMjs.isMotionValue)(target)) return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */ return this.initialValues[key] !== undefined && valueFromInitial === undefined ? undefined : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = new (0, _subscriptionManagerMjs.SubscriptionManager)();
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) this.events[eventName].notify(...args);
    }
}

},{"../utils/reduced-motion/index.mjs":"6cOfX","../utils/reduced-motion/state.mjs":"bxW6Y","../utils/subscription-manager.mjs":"fxDTo","../value/index.mjs":"he8bY","../value/utils/is-motion-value.mjs":"94AYa","./html/utils/transform.mjs":"iSy8E","./utils/is-controlling-variants.mjs":"i9jG9","./utils/motion-values.mjs":"kyRQN","./utils/resolve-variants.mjs":"8MzkH","../utils/warn-once.mjs":"JIiQV","../motion/features/definitions.mjs":"2lmsj","./store.mjs":"aGZeB","./utils/KeyframesResolver.mjs":"fsWvb","../utils/is-numerical-string.mjs":"c9b9u","../utils/is-zero-value-string.mjs":"45kz9","./dom/value-types/find.mjs":"3gWgl","../value/types/complex/index.mjs":"lmoWV","./dom/value-types/animatable-none.mjs":"imHSe","../projection/geometry/models.mjs":"8tocy","../frameloop/sync-time.mjs":"7bjmD","../frameloop/frame.mjs":"3xPo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6cOfX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPrefersReducedMotion", ()=>initPrefersReducedMotion);
var _isBrowserMjs = require("../is-browser.mjs");
var _stateMjs = require("./state.mjs");
function initPrefersReducedMotion() {
    (0, _stateMjs.hasReducedMotionListener).current = true;
    if (!(0, _isBrowserMjs.isBrowser)) return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = ()=>(0, _stateMjs.prefersReducedMotion).current = motionMediaQuery.matches;
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    } else (0, _stateMjs.prefersReducedMotion).current = false;
}

},{"../is-browser.mjs":"1XAMO","./state.mjs":"bxW6Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxW6Y":[function(require,module,exports,__globalThis) {
// Does this device prefer reduced motion? Returns `null` server-side.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasReducedMotionListener", ()=>hasReducedMotionListener);
parcelHelpers.export(exports, "prefersReducedMotion", ()=>prefersReducedMotion);
const prefersReducedMotion = {
    current: null
};
const hasReducedMotionListener = {
    current: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kyRQN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateMotionValuesFromProps", ()=>updateMotionValuesFromProps);
var _warnOnceMjs = require("../../utils/warn-once.mjs");
var _indexMjs = require("../../value/index.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
function updateMotionValuesFromProps(element, next, prev) {
    for(const key in next){
        const nextValue = next[key];
        const prevValue = prev[key];
        if ((0, _isMotionValueMjs.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */ element.addValue(key, nextValue);
            (0, _warnOnceMjs.warnOnce)(nextValue.version === "11.14.4", `Attempting to mix Motion versions ${nextValue.version} with 11.14.4 may not work as expected.`);
        } else if ((0, _isMotionValueMjs.isMotionValue)(prevValue)) /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */ element.addValue(key, (0, _indexMjs.motionValue)(nextValue, {
            owner: element
        }));
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */ if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) existingValue.jump(nextValue);
                else if (!existingValue.hasAnimated) existingValue.set(nextValue);
            } else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0, _indexMjs.motionValue)(latestValue !== undefined ? latestValue : nextValue, {
                    owner: element
                }));
            }
        }
    }
    // Handle removed values
    for(const key in prev)if (next[key] === undefined) element.removeValue(key);
    return next;
}

},{"../../utils/warn-once.mjs":"JIiQV","../../value/index.mjs":"he8bY","../../value/utils/is-motion-value.mjs":"94AYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGZeB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "visualElementStore", ()=>visualElementStore);
const visualElementStore = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gWgl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findValueType", ()=>findValueType);
var _indexMjs = require("../../../value/types/color/index.mjs");
var _indexMjs1 = require("../../../value/types/complex/index.mjs");
var _dimensionsMjs = require("./dimensions.mjs");
var _testMjs = require("./test.mjs");
/**
 * A list of all ValueTypes
 */ const valueTypes = [
    ...(0, _dimensionsMjs.dimensionValueTypes),
    (0, _indexMjs.color),
    (0, _indexMjs1.complex)
];
/**
 * Tests a value against the list of ValueTypes
 */ const findValueType = (v)=>valueTypes.find((0, _testMjs.testValueType)(v));

},{"../../../value/types/color/index.mjs":"1nAma","../../../value/types/complex/index.mjs":"lmoWV","./dimensions.mjs":"3Yt0V","./test.mjs":"kQneZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bI6y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SVGVisualElement", ()=>SVGVisualElement);
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
var _domvisualElementMjs = require("../dom/DOMVisualElement.mjs");
var _buildAttrsMjs = require("./utils/build-attrs.mjs");
var _camelToDashMjs = require("../dom/utils/camel-to-dash.mjs");
var _camelCaseAttrsMjs = require("./utils/camel-case-attrs.mjs");
var _transformMjs = require("../html/utils/transform.mjs");
var _renderMjs = require("./utils/render.mjs");
var _defaultsMjs = require("../dom/value-types/defaults.mjs");
var _modelsMjs = require("../../projection/geometry/models.mjs");
var _isSvgTagMjs = require("./utils/is-svg-tag.mjs");
class SVGVisualElement extends (0, _domvisualElementMjs.DOMVisualElement) {
    constructor(){
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = (0, _modelsMjs.createBox);
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if ((0, _transformMjs.transformProps).has(key)) {
            const defaultType = (0, _defaultsMjs.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !(0, _camelCaseAttrsMjs.camelCaseAttributes).has(key) ? (0, _camelToDashMjs.camelToDash)(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
        (0, _buildAttrsMjs.buildSVGAttrs)(renderState, latestValues, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0, _renderMjs.renderSVG)(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = (0, _isSvgTagMjs.isSVGTag)(instance.tagName);
        super.mount(instance);
    }
}

},{"./utils/scrape-motion-values.mjs":"bGUYu","../dom/DOMVisualElement.mjs":"lT6ej","./utils/build-attrs.mjs":"lDaMj","../dom/utils/camel-to-dash.mjs":"eUOx7","./utils/camel-case-attrs.mjs":"aH7Xw","../html/utils/transform.mjs":"iSy8E","./utils/render.mjs":"iuDSF","../dom/value-types/defaults.mjs":"1Ajoh","../../projection/geometry/models.mjs":"8tocy","./utils/is-svg-tag.mjs":"iLrl0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aQL8O","5Vs3g"], null, "parcelRequire94c2")

//# sourceMappingURL=About.bd13eb0f.js.map
