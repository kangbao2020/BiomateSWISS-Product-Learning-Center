(function (global) {
  "use strict";
  global.AppData = global.AppData || {};
  global.AppData.quiz = {
    modules: [],
    final: { id: "final", questions: [], verificationStatus: "pending" }
  };
})(window);
