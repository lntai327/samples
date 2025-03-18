
// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredWasm` is a JS function that takes a module name matching a
  //   wasm file produced by the dart2wasm compiler and returns the bytes to
  //   load the module. These bytes can be in either a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  async instantiate(additionalImports, {loadDeferredWasm} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + js;
    }

    // Converts a Dart List to a JS array. Any Dart objects will be converted, but
    // this will be cheap for JSValues.
    function arrayFromDartList(constructor, list) {
      const exports = dartInstance.exports;
      const read = exports.$listRead;
      const length = exports.$listLength(list);
      const array = new constructor(length);
      for (let i = 0; i < length; i++) {
        array[i] = read(list, i);
      }
      return array;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {

      _1: (x0,x1,x2) => x0.set(x1,x2),
      _2: (x0,x1,x2) => x0.set(x1,x2),
      _6: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._6(f,arguments.length,x0) }),
      _7: x0 => new window.FinalizationRegistry(x0),
      _8: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _9: (x0,x1) => x0.unregister(x1),
      _10: (x0,x1,x2) => x0.slice(x1,x2),
      _11: (x0,x1) => x0.decode(x1),
      _12: (x0,x1) => x0.segment(x1),
      _13: () => new TextDecoder(),
      _14: x0 => x0.buffer,
      _15: x0 => x0.wasmMemory,
      _16: () => globalThis.window._flutter_skwasmInstance,
      _17: x0 => x0.rasterStartMilliseconds,
      _18: x0 => x0.rasterEndMilliseconds,
      _19: x0 => x0.imageBitmaps,
      _192: x0 => x0.select(),
      _193: (x0,x1) => x0.append(x1),
      _194: x0 => x0.remove(),
      _197: x0 => x0.unlock(),
      _202: x0 => x0.getReader(),
      _211: x0 => new MutationObserver(x0),
      _222: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _223: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _226: x0 => new ResizeObserver(x0),
      _229: (x0,x1) => new Intl.Segmenter(x0,x1),
      _230: x0 => x0.next(),
      _231: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _316: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._316(f,arguments.length,x0) }),
      _317: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._317(f,arguments.length,x0) }),
      _318: (x0,x1) => ({addView: x0,removeView: x1}),
      _319: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._319(f,arguments.length,x0) }),
      _320: f => finalizeWrapper(f, function() { return dartInstance.exports._320(f,arguments.length) }),
      _321: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _322: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._322(f,arguments.length,x0) }),
      _323: x0 => ({runApp: x0}),
      _324: x0 => new Uint8Array(x0),
      _326: x0 => x0.preventDefault(),
      _327: x0 => x0.stopPropagation(),
      _328: (x0,x1) => x0.addListener(x1),
      _329: (x0,x1) => x0.removeListener(x1),
      _330: (x0,x1) => x0.prepend(x1),
      _331: x0 => x0.remove(),
      _332: x0 => x0.disconnect(),
      _333: (x0,x1) => x0.addListener(x1),
      _334: (x0,x1) => x0.removeListener(x1),
      _335: x0 => x0.blur(),
      _336: (x0,x1) => x0.append(x1),
      _337: x0 => x0.remove(),
      _338: x0 => x0.stopPropagation(),
      _342: x0 => x0.preventDefault(),
      _343: (x0,x1) => x0.append(x1),
      _344: x0 => x0.remove(),
      _345: x0 => x0.preventDefault(),
      _350: (x0,x1) => x0.removeChild(x1),
      _351: (x0,x1) => x0.appendChild(x1),
      _352: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _353: (x0,x1) => x0.appendChild(x1),
      _354: (x0,x1) => x0.transferFromImageBitmap(x1),
      _355: (x0,x1) => x0.appendChild(x1),
      _356: (x0,x1) => x0.append(x1),
      _357: (x0,x1) => x0.append(x1),
      _358: (x0,x1) => x0.append(x1),
      _359: x0 => x0.remove(),
      _360: x0 => x0.remove(),
      _361: x0 => x0.remove(),
      _362: (x0,x1) => x0.appendChild(x1),
      _363: (x0,x1) => x0.appendChild(x1),
      _364: x0 => x0.remove(),
      _365: (x0,x1) => x0.append(x1),
      _366: (x0,x1) => x0.append(x1),
      _367: x0 => x0.remove(),
      _368: (x0,x1) => x0.append(x1),
      _369: (x0,x1) => x0.append(x1),
      _370: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _371: (x0,x1) => x0.append(x1),
      _372: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _373: x0 => x0.remove(),
      _374: (x0,x1) => x0.append(x1),
      _375: x0 => x0.remove(),
      _376: (x0,x1) => x0.append(x1),
      _377: x0 => x0.remove(),
      _378: x0 => x0.remove(),
      _379: x0 => x0.getBoundingClientRect(),
      _380: x0 => x0.remove(),
      _393: (x0,x1) => x0.append(x1),
      _394: x0 => x0.remove(),
      _395: (x0,x1) => x0.append(x1),
      _396: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _397: x0 => x0.preventDefault(),
      _398: x0 => x0.preventDefault(),
      _399: x0 => x0.preventDefault(),
      _400: x0 => x0.preventDefault(),
      _401: (x0,x1) => x0.observe(x1),
      _402: x0 => x0.disconnect(),
      _403: (x0,x1) => x0.appendChild(x1),
      _404: (x0,x1) => x0.appendChild(x1),
      _405: (x0,x1) => x0.appendChild(x1),
      _406: (x0,x1) => x0.append(x1),
      _407: x0 => x0.remove(),
      _408: (x0,x1) => x0.append(x1),
      _409: (x0,x1) => x0.append(x1),
      _410: (x0,x1) => x0.appendChild(x1),
      _411: (x0,x1) => x0.append(x1),
      _412: x0 => x0.remove(),
      _413: (x0,x1) => x0.append(x1),
      _414: x0 => x0.remove(),
      _418: (x0,x1) => x0.appendChild(x1),
      _419: x0 => x0.remove(),
      _978: () => globalThis.window.flutterConfiguration,
      _979: x0 => x0.assetBase,
      _984: x0 => x0.debugShowSemanticsNodes,
      _985: x0 => x0.hostElement,
      _986: x0 => x0.multiViewEnabled,
      _987: x0 => x0.nonce,
      _989: x0 => x0.fontFallbackBaseUrl,
      _995: x0 => x0.console,
      _996: x0 => x0.devicePixelRatio,
      _997: x0 => x0.document,
      _998: x0 => x0.history,
      _999: x0 => x0.innerHeight,
      _1000: x0 => x0.innerWidth,
      _1001: x0 => x0.location,
      _1002: x0 => x0.navigator,
      _1003: x0 => x0.visualViewport,
      _1004: x0 => x0.performance,
      _1007: (x0,x1) => x0.dispatchEvent(x1),
      _1008: (x0,x1) => x0.matchMedia(x1),
      _1010: (x0,x1) => x0.getComputedStyle(x1),
      _1011: x0 => x0.screen,
      _1012: (x0,x1) => x0.requestAnimationFrame(x1),
      _1013: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1013(f,arguments.length,x0) }),
      _1018: (x0,x1) => x0.warn(x1),
      _1020: (x0,x1) => x0.debug(x1),
      _1021: () => globalThis.window,
      _1022: () => globalThis.Intl,
      _1023: () => globalThis.Symbol,
      _1026: x0 => x0.clipboard,
      _1027: x0 => x0.maxTouchPoints,
      _1028: x0 => x0.vendor,
      _1029: x0 => x0.language,
      _1030: x0 => x0.platform,
      _1031: x0 => x0.userAgent,
      _1032: x0 => x0.languages,
      _1033: x0 => x0.documentElement,
      _1034: (x0,x1) => x0.querySelector(x1),
      _1038: (x0,x1) => x0.createElement(x1),
      _1039: (x0,x1) => x0.execCommand(x1),
      _1042: (x0,x1) => x0.createTextNode(x1),
      _1043: (x0,x1) => x0.createEvent(x1),
      _1047: x0 => x0.head,
      _1048: x0 => x0.body,
      _1049: (x0,x1) => x0.title = x1,
      _1052: x0 => x0.activeElement,
      _1054: x0 => x0.visibilityState,
      _1056: x0 => x0.hasFocus(),
      _1057: () => globalThis.document,
      _1058: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1059: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1062: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1062(f,arguments.length,x0) }),
      _1063: x0 => x0.target,
      _1065: x0 => x0.timeStamp,
      _1066: x0 => x0.type,
      _1068: x0 => x0.preventDefault(),
      _1070: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _1077: x0 => x0.firstChild,
      _1082: x0 => x0.parentElement,
      _1084: x0 => x0.parentNode,
      _1088: (x0,x1) => x0.removeChild(x1),
      _1089: (x0,x1) => x0.removeChild(x1),
      _1090: x0 => x0.isConnected,
      _1091: (x0,x1) => x0.textContent = x1,
      _1095: (x0,x1) => x0.contains(x1),
      _1101: x0 => x0.firstElementChild,
      _1103: x0 => x0.nextElementSibling,
      _1104: x0 => x0.clientHeight,
      _1105: x0 => x0.clientWidth,
      _1106: x0 => x0.offsetHeight,
      _1107: x0 => x0.offsetWidth,
      _1108: x0 => x0.id,
      _1109: (x0,x1) => x0.id = x1,
      _1112: (x0,x1) => x0.spellcheck = x1,
      _1113: x0 => x0.tagName,
      _1114: x0 => x0.style,
      _1115: (x0,x1) => x0.append(x1),
      _1117: (x0,x1) => x0.getAttribute(x1),
      _1118: x0 => x0.getBoundingClientRect(),
      _1121: (x0,x1) => x0.closest(x1),
      _1124: (x0,x1) => x0.querySelectorAll(x1),
      _1126: x0 => x0.remove(),
      _1127: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _1128: (x0,x1) => x0.removeAttribute(x1),
      _1129: (x0,x1) => x0.tabIndex = x1,
      _1132: (x0,x1) => x0.focus(x1),
      _1133: x0 => x0.scrollTop,
      _1134: (x0,x1) => x0.scrollTop = x1,
      _1135: x0 => x0.scrollLeft,
      _1136: (x0,x1) => x0.scrollLeft = x1,
      _1137: x0 => x0.classList,
      _1138: (x0,x1) => x0.className = x1,
      _1144: (x0,x1) => x0.getElementsByClassName(x1),
      _1146: x0 => x0.click(),
      _1147: (x0,x1) => x0.hasAttribute(x1),
      _1150: (x0,x1) => x0.attachShadow(x1),
      _1155: (x0,x1) => x0.getPropertyValue(x1),
      _1157: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _1159: (x0,x1) => x0.removeProperty(x1),
      _1161: x0 => x0.offsetLeft,
      _1162: x0 => x0.offsetTop,
      _1163: x0 => x0.offsetParent,
      _1165: (x0,x1) => x0.name = x1,
      _1166: x0 => x0.content,
      _1167: (x0,x1) => x0.content = x1,
      _1185: (x0,x1) => x0.nonce = x1,
      _1191: x0 => x0.now(),
      _1193: (x0,x1) => x0.width = x1,
      _1195: (x0,x1) => x0.height = x1,
      _1199: (x0,x1) => x0.getContext(x1),
      _1275: (x0,x1) => x0.fetch(x1),
      _1276: x0 => x0.status,
      _1278: x0 => x0.body,
      _1279: x0 => x0.arrayBuffer(),
      _1285: x0 => x0.read(),
      _1286: x0 => x0.value,
      _1287: x0 => x0.done,
      _1290: x0 => x0.x,
      _1291: x0 => x0.y,
      _1294: x0 => x0.top,
      _1295: x0 => x0.right,
      _1296: x0 => x0.bottom,
      _1297: x0 => x0.left,
      _1306: x0 => x0.height,
      _1307: x0 => x0.width,
      _1308: (x0,x1) => x0.value = x1,
      _1310: (x0,x1) => x0.placeholder = x1,
      _1311: (x0,x1) => x0.name = x1,
      _1312: x0 => x0.selectionDirection,
      _1313: x0 => x0.selectionStart,
      _1314: x0 => x0.selectionEnd,
      _1317: x0 => x0.value,
      _1319: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1322: x0 => x0.readText(),
      _1323: (x0,x1) => x0.writeText(x1),
      _1324: x0 => x0.altKey,
      _1325: x0 => x0.code,
      _1326: x0 => x0.ctrlKey,
      _1327: x0 => x0.key,
      _1328: x0 => x0.keyCode,
      _1329: x0 => x0.location,
      _1330: x0 => x0.metaKey,
      _1331: x0 => x0.repeat,
      _1332: x0 => x0.shiftKey,
      _1333: x0 => x0.isComposing,
      _1334: (x0,x1) => x0.getModifierState(x1),
      _1336: x0 => x0.state,
      _1337: (x0,x1) => x0.go(x1),
      _1339: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _1341: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _1342: x0 => x0.pathname,
      _1343: x0 => x0.search,
      _1344: x0 => x0.hash,
      _1348: x0 => x0.state,
      _1356: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1356(f,arguments.length,x0,x1) }),
      _1358: (x0,x1,x2) => x0.observe(x1,x2),
      _1361: x0 => x0.attributeName,
      _1362: x0 => x0.type,
      _1363: x0 => x0.matches,
      _1366: x0 => x0.matches,
      _1368: x0 => x0.relatedTarget,
      _1369: x0 => x0.clientX,
      _1370: x0 => x0.clientY,
      _1371: x0 => x0.offsetX,
      _1372: x0 => x0.offsetY,
      _1375: x0 => x0.button,
      _1376: x0 => x0.buttons,
      _1377: x0 => x0.ctrlKey,
      _1378: (x0,x1) => x0.getModifierState(x1),
      _1381: x0 => x0.pointerId,
      _1382: x0 => x0.pointerType,
      _1383: x0 => x0.pressure,
      _1384: x0 => x0.tiltX,
      _1385: x0 => x0.tiltY,
      _1386: x0 => x0.getCoalescedEvents(),
      _1388: x0 => x0.deltaX,
      _1389: x0 => x0.deltaY,
      _1390: x0 => x0.wheelDeltaX,
      _1391: x0 => x0.wheelDeltaY,
      _1392: x0 => x0.deltaMode,
      _1398: x0 => x0.changedTouches,
      _1400: x0 => x0.clientX,
      _1401: x0 => x0.clientY,
      _1403: x0 => x0.data,
      _1406: (x0,x1) => x0.disabled = x1,
      _1407: (x0,x1) => x0.type = x1,
      _1408: (x0,x1) => x0.max = x1,
      _1409: (x0,x1) => x0.min = x1,
      _1410: (x0,x1) => x0.value = x1,
      _1411: x0 => x0.value,
      _1412: x0 => x0.disabled,
      _1413: (x0,x1) => x0.disabled = x1,
      _1414: (x0,x1) => x0.placeholder = x1,
      _1415: (x0,x1) => x0.name = x1,
      _1416: (x0,x1) => x0.autocomplete = x1,
      _1417: x0 => x0.selectionDirection,
      _1418: x0 => x0.selectionStart,
      _1419: x0 => x0.selectionEnd,
      _1423: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1428: (x0,x1) => x0.add(x1),
      _1432: (x0,x1) => x0.noValidate = x1,
      _1433: (x0,x1) => x0.method = x1,
      _1434: (x0,x1) => x0.action = x1,
      _1459: x0 => x0.orientation,
      _1460: x0 => x0.width,
      _1461: x0 => x0.height,
      _1462: (x0,x1) => x0.lock(x1),
      _1478: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1478(f,arguments.length,x0,x1) }),
      _1489: x0 => x0.length,
      _1491: (x0,x1) => x0.item(x1),
      _1492: x0 => x0.length,
      _1493: (x0,x1) => x0.item(x1),
      _1494: x0 => x0.iterator,
      _1495: x0 => x0.Segmenter,
      _1496: x0 => x0.v8BreakIterator,
      _1499: x0 => x0.done,
      _1500: x0 => x0.value,
      _1501: x0 => x0.index,
      _1505: (x0,x1) => x0.adoptText(x1),
      _1506: x0 => x0.first(),
      _1507: x0 => x0.next(),
      _1508: x0 => x0.current(),
      _1522: x0 => x0.hostElement,
      _1523: x0 => x0.viewConstraints,
      _1525: x0 => x0.maxHeight,
      _1526: x0 => x0.maxWidth,
      _1527: x0 => x0.minHeight,
      _1528: x0 => x0.minWidth,
      _1529: x0 => x0.loader,
      _1530: () => globalThis._flutter,
      _1531: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1532: (x0,x1,x2) => x0.call(x1,x2),
      _1533: f => finalizeWrapper(f, function(x0,x1) { return dartInstance.exports._1533(f,arguments.length,x0,x1) }),
      _1534: x0 => new Promise(x0),
      _1537: x0 => x0.length,
      _1622: x0 => x0.onAdd(),
      _1623: (x0,x1) => x0.clearMarkers(x1),
      _1624: x0 => x0.onRemove(),
      _1629: (x0,x1) => new google.maps.Map(x0,x1),
      _1634: x0 => x0.close(),
      _1635: (x0,x1,x2) => x0.open(x1,x2),
      _1636: x0 => new google.maps.InfoWindow(x0),
      _1637: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1637(f,arguments.length,x0) }),
      _1638: x0 => new google.maps.Marker(x0),
      _1639: (x0,x1,x2) => x0.set(x1,x2),
      _1641: (x0,x1) => new google.maps.Size(x0,x1),
      _1642: (x0,x1) => x0.createElement(x1),
      _1644: x0 => new Blob(x0),
      _1653: () => ({}),
      _1654: (x0,x1) => new google.maps.LatLng(x0,x1),
      _1655: () => ({}),
      _1656: (x0,x1) => x0.appendChild(x1),
      _1657: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1657(f,arguments.length,x0) }),
      _1658: x0 => ({createHTML: x0}),
      _1659: (x0,x1,x2) => x0.createPolicy(x1,x2),
      _1660: (x0,x1) => x0.createHTML(x1),
      _1661: (x0,x1) => x0.appendChild(x1),
      _1662: () => ({}),
      _1663: (x0,x1) => new google.maps.Point(x0,x1),
      _1664: x0 => globalThis.URL.createObjectURL(x0),
      _1665: () => ({}),
      _1666: x0 => globalThis.URL.createObjectURL(x0),
      _1667: () => ({}),
      _1673: (x0,x1) => x0.panTo(x1),
      _1674: (x0,x1) => x0.panTo(x1),
      _1675: (x0,x1) => x0.panTo(x1),
      _1676: (x0,x1) => new google.maps.LatLngBounds(x0,x1),
      _1677: (x0,x1,x2) => x0.fitBounds(x1,x2),
      _1678: (x0,x1,x2) => x0.panBy(x1,x2),
      _1679: (x0,x1) => x0.panTo(x1),
      _1680: (x0,x1) => new google.maps.Point(x0,x1),
      _1691: () => new Array(),
      _1692: x0 => new Array(x0),
      _1694: x0 => x0.length,
      _1696: (x0,x1) => x0[x1],
      _1697: (x0,x1,x2) => x0[x1] = x2,
      _1700: (x0,x1,x2) => new DataView(x0,x1,x2),
      _1702: x0 => new Int8Array(x0),
      _1703: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _1704: x0 => new Uint8Array(x0),
      _1712: x0 => new Int32Array(x0),
      _1714: x0 => new Uint32Array(x0),
      _1716: x0 => new Float32Array(x0),
      _1718: x0 => new Float64Array(x0),
      _1750: (decoder, codeUnits) => decoder.decode(codeUnits),
      _1751: () => new TextDecoder("utf-8", {fatal: true}),
      _1752: () => new TextDecoder("utf-8", {fatal: false}),
      _1753: x0 => new WeakRef(x0),
      _1754: x0 => x0.deref(),
      _1760: Date.now,
      _1762: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _1763: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _1764: () => {
        let stackString = new Error().stack.toString();
        let frames = stackString.split('\n');
        let drop = 2;
        if (frames[0] === 'Error') {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _1765: () => typeof dartUseDateNowForTicks !== "undefined",
      _1766: () => 1000 * performance.now(),
      _1767: () => Date.now(),
      _1768: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _1769: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _1770: () => new WeakMap(),
      _1771: (map, o) => map.get(o),
      _1772: (map, o, v) => map.set(o, v),
      _1773: () => globalThis.WeakRef,
      _1784: s => JSON.stringify(s),
      _1785: s => printToConsole(s),
      _1786: a => a.join(''),
      _1789: (s, t) => s.split(t),
      _1790: s => s.toLowerCase(),
      _1791: s => s.toUpperCase(),
      _1792: s => s.trim(),
      _1793: s => s.trimLeft(),
      _1794: s => s.trimRight(),
      _1796: (s, p, i) => s.indexOf(p, i),
      _1797: (s, p, i) => s.lastIndexOf(p, i),
      _1799: Object.is,
      _1800: s => s.toUpperCase(),
      _1801: s => s.toLowerCase(),
      _1802: (a, i) => a.push(i),
      _1806: a => a.pop(),
      _1807: (a, i) => a.splice(i, 1),
      _1809: (a, s) => a.join(s),
      _1810: (a, s, e) => a.slice(s, e),
      _1812: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _1813: a => a.length,
      _1815: (a, i) => a[i],
      _1816: (a, i, v) => a[i] = v,
      _1818: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _1819: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _1820: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _1821: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _1822: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _1823: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _1824: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _1825: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _1827: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _1828: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _1829: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _1830: (t, s) => t.set(s),
      _1831: l => new DataView(new ArrayBuffer(l)),
      _1832: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _1834: o => o.buffer,
      _1835: o => o.byteOffset,
      _1836: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _1837: (b, o) => new DataView(b, o),
      _1838: (b, o, l) => new DataView(b, o, l),
      _1839: Function.prototype.call.bind(DataView.prototype.getUint8),
      _1840: Function.prototype.call.bind(DataView.prototype.setUint8),
      _1841: Function.prototype.call.bind(DataView.prototype.getInt8),
      _1842: Function.prototype.call.bind(DataView.prototype.setInt8),
      _1843: Function.prototype.call.bind(DataView.prototype.getUint16),
      _1844: Function.prototype.call.bind(DataView.prototype.setUint16),
      _1845: Function.prototype.call.bind(DataView.prototype.getInt16),
      _1846: Function.prototype.call.bind(DataView.prototype.setInt16),
      _1847: Function.prototype.call.bind(DataView.prototype.getUint32),
      _1848: Function.prototype.call.bind(DataView.prototype.setUint32),
      _1849: Function.prototype.call.bind(DataView.prototype.getInt32),
      _1850: Function.prototype.call.bind(DataView.prototype.setInt32),
      _1853: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _1854: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _1855: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _1856: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _1857: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _1858: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _1871: (o, t) => o instanceof t,
      _1873: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1873(f,arguments.length,x0) }),
      _1874: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._1874(f,arguments.length,x0) }),
      _1875: o => Object.keys(o),
      _1876: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _1877: (handle) => clearTimeout(handle),
      _1878: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _1879: (handle) => clearInterval(handle),
      _1880: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _1881: () => Date.now(),
      _2358: x0 => x0.getBounds(),
      _2359: x0 => x0.getCenter(),
      _2366: x0 => x0.getHeading(),
      _2371: x0 => x0.getProjection(),
      _2375: x0 => x0.getTilt(),
      _2378: x0 => x0.getZoom(),
      _2385: (x0,x1) => x0.setHeading(x1),
      _2389: (x0,x1) => x0.setOptions(x1),
      _2394: (x0,x1) => x0.setTilt(x1),
      _2398: (x0,x1) => x0.setZoom(x1),
      _2399: f => finalizeWrapper(f, function() { return dartInstance.exports._2399(f,arguments.length) }),
      _2400: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _2401: x0 => x0.remove(),
      _2405: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2405(f,arguments.length,x0) }),
      _2406: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _2407: x0 => x0.remove(),
      _2426: f => finalizeWrapper(f, function() { return dartInstance.exports._2426(f,arguments.length) }),
      _2427: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _2428: x0 => x0.remove(),
      _2453: f => finalizeWrapper(f, function() { return dartInstance.exports._2453(f,arguments.length) }),
      _2454: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _2455: x0 => x0.remove(),
      _2462: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._2462(f,arguments.length,x0) }),
      _2463: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _2464: x0 => x0.remove(),
      _2465: x0 => x0.latLng,
      _2507: x0 => x0.latLng,
      _2517: (x0,x1) => x0.center = x1,
      _2536: (x0,x1) => x0.fullscreenControl = x1,
      _2540: (x0,x1) => x0.gestureHandling = x1,
      _2549: (x0,x1) => x0.mapId = x1,
      _2552: (x0,x1) => x0.mapTypeControl = x1,
      _2556: (x0,x1) => x0.mapTypeId = x1,
      _2558: (x0,x1) => x0.maxZoom = x1,
      _2560: (x0,x1) => x0.minZoom = x1,
      _2571: x0 => x0.rotateControl,
      _2572: (x0,x1) => x0.rotateControl = x1,
      _2584: (x0,x1) => x0.streetViewControl = x1,
      _2587: (x0,x1) => x0.styles = x1,
      _2589: (x0,x1) => x0.tilt = x1,
      _2594: (x0,x1) => x0.zoom = x1,
      _2596: (x0,x1) => x0.zoomControl = x1,
      _2604: () => globalThis.google.maps.MapTypeId.HYBRID,
      _2605: () => globalThis.google.maps.MapTypeId.ROADMAP,
      _2606: () => globalThis.google.maps.MapTypeId.SATELLITE,
      _2607: () => globalThis.google.maps.MapTypeId.TERRAIN,
      _2612: (x0,x1) => x0.stylers = x1,
      _2613: (x0,x1) => x0.elementType = x1,
      _2615: (x0,x1) => x0.featureType = x1,
      _2721: f => finalizeWrapper(f, function(x0,x1,x2) { return dartInstance.exports._2721(f,arguments.length,x0,x1,x2) }),
      _2722: (x0,x1,x2) => ({map: x0,markers: x1,onClusterClick: x2}),
      _2736: x0 => new markerClusterer.MarkerClusterer(x0),
      _3453: x0 => x0.lat(),
      _3454: x0 => x0.lng(),
      _3484: x0 => x0.getNorthEast(),
      _3485: x0 => x0.getSouthWest(),
      _3535: x0 => x0.x,
      _3537: x0 => x0.y,
      _4495: (x0,x1) => x0.setContent(x1),
      _4538: x0 => x0.content,
      _4539: (x0,x1) => x0.content = x1,
      _4555: (x0,x1) => x0.zIndex = x1,
      _4631: (x0,x1,x2) => x0.fromLatLngToPoint(x1,x2),
      _4632: (x0,x1) => x0.fromLatLngToPoint(x1),
      _4634: (x0,x1,x2) => x0.fromPointToLatLng(x1,x2),
      _4667: (x0,x1) => x0.url = x1,
      _4669: (x0,x1) => x0.anchor = x1,
      _4675: (x0,x1) => x0.scaledSize = x1,
      _4677: (x0,x1) => x0.size = x1,
      _4685: x0 => x0.getMap(),
      _4703: (x0,x1) => x0.setMap(x1),
      _4707: (x0,x1) => x0.setOptions(x1),
      _4708: (x0,x1) => x0.setPosition(x1),
      _4712: (x0,x1) => x0.setVisible(x1),
      _4717: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._4717(f,arguments.length,x0) }),
      _4718: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _4719: x0 => x0.remove(),
      _4732: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._4732(f,arguments.length,x0) }),
      _4733: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _4734: x0 => x0.remove(),
      _4735: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._4735(f,arguments.length,x0) }),
      _4736: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _4737: x0 => x0.remove(),
      _4741: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._4741(f,arguments.length,x0) }),
      _4742: (x0,x1,x2) => globalThis.google.maps.event.addListener(x0,x1,x2),
      _4743: x0 => x0.remove(),
      _4807: (x0,x1) => x0.draggable = x1,
      _4809: (x0,x1) => x0.icon = x1,
      _4815: (x0,x1) => x0.opacity = x1,
      _4819: (x0,x1) => x0.position = x1,
      _4823: (x0,x1) => x0.title = x1,
      _4825: (x0,x1) => x0.visible = x1,
      _4827: (x0,x1) => x0.zIndex = x1,
      _4896: f => finalizeWrapper(f, function(x0) { return dartInstance.exports._4896(f,arguments.length,x0) }),
      _4897: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _4898: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _4904: x0 => x0.trustedTypes,
      _4905: (x0,x1) => x0.innerHTML = x1,
      _4906: (x0,x1) => x0.innerHTML = x1,
      _4963: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _4964: (x0,x1) => x0.exec(x1),
      _4965: (x0,x1) => x0.test(x1),
      _4966: (x0,x1) => x0.exec(x1),
      _4967: (x0,x1) => x0.exec(x1),
      _4968: x0 => x0.pop(),
      _4970: o => o === undefined,
      _4989: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _4991: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _4992: o => o instanceof RegExp,
      _4993: (l, r) => l === r,
      _4994: o => o,
      _4995: o => o,
      _4996: o => o,
      _4997: b => !!b,
      _4998: o => o.length,
      _5001: (o, i) => o[i],
      _5002: f => f.dartFunction,
      _5003: l => arrayFromDartList(Int8Array, l),
      _5004: l => arrayFromDartList(Uint8Array, l),
      _5005: l => arrayFromDartList(Uint8ClampedArray, l),
      _5006: l => arrayFromDartList(Int16Array, l),
      _5007: l => arrayFromDartList(Uint16Array, l),
      _5008: l => arrayFromDartList(Int32Array, l),
      _5009: l => arrayFromDartList(Uint32Array, l),
      _5010: l => arrayFromDartList(Float32Array, l),
      _5011: l => arrayFromDartList(Float64Array, l),
      _5012: x0 => new ArrayBuffer(x0),
      _5013: (data, length) => {
        const getValue = dartInstance.exports.$byteDataGetUint8;
        const view = new DataView(new ArrayBuffer(length));
        for (let i = 0; i < length; i++) {
          view.setUint8(i, getValue(data, i));
        }
        return view;
      },
      _5014: l => arrayFromDartList(Array, l),
      _5015: () => ({}),
      _5016: () => [],
      _5017: l => new Array(l),
      _5018: () => globalThis,
      _5019: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _5020: (o, p) => p in o,
      _5021: (o, p) => o[p],
      _5022: (o, p, v) => o[p] = v,
      _5023: (o, m, a) => o[m].apply(o, a),
      _5025: o => String(o),
      _5026: (p, s, f) => p.then(s, f),
      _5027: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        return 17;
      },
      _5028: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _5029: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _5032: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _5033: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _5034: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _5035: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _5036: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _5037: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _5038: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _5041: x0 => x0.index,
      _5042: x0 => x0.groups,
      _5046: x0 => x0.flags,
      _5047: x0 => x0.multiline,
      _5048: x0 => x0.ignoreCase,
      _5049: x0 => x0.unicode,
      _5050: x0 => x0.dotAll,
      _5051: (x0,x1) => x0.lastIndex = x1,
      _5053: (o, p) => o[p],
      _5056: x0 => x0.random(),
      _5057: x0 => x0.random(),
      _5058: (x0,x1) => x0.getRandomValues(x1),
      _5059: () => globalThis.crypto,
      _5061: () => globalThis.Math,
      _5063: Function.prototype.call.bind(Number.prototype.toString),
      _5064: (d, digits) => d.toFixed(digits),
      _5285: (x0,x1) => x0.innerText = x1,
      _5295: x0 => x0.style,
      _5316: (x0,x1) => x0.onclick = x1,
      _5727: (x0,x1) => x0.src = x1,
      _5738: x0 => x0.width,
      _5740: x0 => x0.height,
      _7027: () => globalThis.window,
      _7355: x0 => x0.trustedTypes,
      _9810: () => globalThis.document,
      _10254: (x0,x1) => x0.id = x1,
      _10256: (x0,x1) => x0.className = x1,
      _14964: (x0,x1) => x0.height = x1,
      _15654: (x0,x1) => x0.width = x1,
      _16790: (x0,x1,x2,x3,x4,x5,x6,x7) => ({hue: x0,lightness: x1,saturation: x2,gamma: x3,invert_lightness: x4,visibility: x5,color: x6,weight: x7}),

    };

    const baseImports = {
      dart2wasm: dart2wasm,


      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
    };

    const deferredLibraryHelper = {
      "loadModule": async (moduleName) => {
        if (!loadDeferredWasm) {
          throw "No implementation of loadDeferredWasm provided.";
        }
        const source = await Promise.resolve(loadDeferredWasm(moduleName));
        const module = await ((source instanceof Response)
            ? WebAssembly.compileStreaming(source, this.builtins)
            : WebAssembly.compile(source, this.builtins));
        return await WebAssembly.instantiate(module, {
          ...baseImports,
          ...additionalImports,
          "wasm:js-string": jsStringPolyfill,
          "module0": dartInstance.exports,
        });
      },
    };

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      "deferredLibraryHelper": deferredLibraryHelper,
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}

