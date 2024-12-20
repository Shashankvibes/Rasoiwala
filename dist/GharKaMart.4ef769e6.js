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

},{"f11b6b8f6a1f6f0b":"786KC","f490fb404efab291":"1dldy"}],"fTec1":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bee672bb4ef769e6";
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

},{}],"b8XUx":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$3716 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3716.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const GharKaMart = ()=>{
    const categories = [
        {
            name: "Fruits & Vegetables",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pM2cVm5aP1LOpQmwK2y41Ohv81XUmeds5g&s"
        },
        {
            name: "Dairy & Bakery",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kshRrqL695uhLvxoecsJcWJ9FlBPj3Y-wQ&s"
        },
        {
            name: "Snacks & Beverages",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiZlFWsbxynzv0yRpog_iV3p0aiH-i8bnDw&s"
        },
        {
            name: "Household Essentials",
            img: "data:image/jpeg;base64,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"
        },
        {
            name: "Personal Care",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUW14IqCacxZB21EyOdgr3UmJ74Z1G0S4-w&s"
        },
        {
            name: "Spices & Condiments",
            img: "https://hmhub.in/wp-content/uploads/2019/09/1440x960-spices.jpg"
        }
    ];
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "mart-container",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "hero",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "hero-content",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            children: "Welcome to GharKaMart"
                        }, void 0, false, {
                            fileName: "src/components/GharKaMart.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            children: "Your trusted partner for all household needs!"
                        }, void 0, false, {
                            fileName: "src/components/GharKaMart.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "cta-button",
                            children: "Shop Now"
                        }, void 0, false, {
                            fileName: "src/components/GharKaMart.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/GharKaMart.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/GharKaMart.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
                className: "categories",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        children: "Shop by Categories"
                    }, void 0, false, {
                        fileName: "src/components/GharKaMart.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "category-grid",
                        children: categories.map((category, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "category-card",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "category-image",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            src: category.img,
                                            alt: category.name
                                        }, void 0, false, {
                                            fileName: "src/components/GharKaMart.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/GharKaMart.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "src/components/GharKaMart.jsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, index, true, {
                                fileName: "src/components/GharKaMart.jsx",
                                lineNumber: 36,
                                columnNumber: 48
                            }, undefined))
                    }, void 0, false, {
                        fileName: "src/components/GharKaMart.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/GharKaMart.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("footer", {
                className: "mart-footer",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    children: "\xa9 2024 GharKaMart | Made with \u2764\uFE0F for your home"
                }, void 0, false, {
                    fileName: "src/components/GharKaMart.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/GharKaMart.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/GharKaMart.jsx",
        lineNumber: 22,
        columnNumber: 10
    }, undefined);
};
_c = GharKaMart;
exports.default = GharKaMart;
var _c;
$RefreshReg$(_c, "GharKaMart");

  $parcel$ReactRefreshHelpers$3716.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["aQL8O","fTec1"], null, "parcelRequire94c2")

//# sourceMappingURL=GharKaMart.4ef769e6.js.map
