(function (global) {
  "use strict";

  var routes = {
    "/home": { title: "首頁", description: "學習中心入口內容將於後續 Sprint 建置。" },
    "/learn": { title: "學習中心", description: "學習模組清單與進度功能將於後續 Sprint 建置。" },
    "/learn/module-01": { title: "學習模組 01", description: "認識 BiomateSWISS 植體系統。" },
    "/learn/module-02": { title: "學習模組 02", description: "理解 PDL® 雷射表面技術。" },
    "/learn/module-03": { title: "學習模組 03", description: "PDL® 為什麼重要？" },
    "/learn/module-04": { title: "學習模組 04", description: "技術背後的研究證據。" },
    "/learn/module-05": { title: "學習模組 05", description: "認識植體設計。" },
    "/learn/module-06": { title: "學習模組 06", description: "正確使用產品系統。" },
    "/knowledge": { title: "產品知識庫", description: "知識分類與搜尋功能將於後續 Sprint 建置。" },
    "/research": { title: "研究證據", description: "研究資料呈現與來源驗證流程將於後續 Sprint 建置。" },
    "/quiz": { title: "學習測驗", description: "完成學習後可進行 Final Quiz。" },
    "/quiz/final": { title: "學習測驗", description: "期末測驗介面與作答邏輯將於後續 Sprint 建置。" },
    "/search": { title: "搜尋", description: "搜尋功能將於後續 Sprint 建置。" }
  };

  function isKnownPath(path) {
    return Boolean(routes[path] || /^\/knowledge\/[^/]+$/.test(path) || /^\/research\/[^/]+$/.test(path));
  }

  function getPath() {
    var path = global.location.hash.replace(/^#/, "").split("?")[0];
    return isKnownPath(path) ? path : "/home";
  }

  function getRoute() {
    var path = getPath();
    if (routes[path]) return routes[path];
    if (/^\/knowledge\//.test(path)) return { title: "產品知識", description: "產品知識庫條目。" };
    return { title: "研究證據", description: "研究證據條目。" };
  }
  function onChange(listener) {
    global.addEventListener("hashchange", listener);
  }

  global.AppRouter = { routes: routes, getPath: getPath, getRoute: getRoute, isKnownPath: isKnownPath, onChange: onChange };
})(window);
