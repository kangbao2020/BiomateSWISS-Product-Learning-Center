(function (global) {
  "use strict";

  var LEARNING_PROGRESS_KEY = "biomateswissLearningProgress";

  function getDefaultLearningProgress() {
    return {
      completedModules: [],
      lastVisitedModule: null,
      quizBestScore: null,
      quizPassed: false
    };
  }

  function normaliseLearningProgress(value) {
    var fallback = getDefaultLearningProgress();
    if (!value || typeof value !== "object" || Array.isArray(value)) return fallback;

    var completedModules = Array.isArray(value.completedModules) ? value.completedModules.filter(function (moduleId, index, items) {
      return typeof moduleId === "string" && moduleId.trim() && items.indexOf(moduleId) === index;
    }) : [];
    var quizBestScore = typeof value.quizBestScore === "number" && isFinite(value.quizBestScore)
      ? Math.max(0, Math.min(100, Math.round(value.quizBestScore)))
      : null;

    return {
      completedModules: completedModules,
      lastVisitedModule: typeof value.lastVisitedModule === "string" && value.lastVisitedModule.trim() ? value.lastVisitedModule : null,
      quizBestScore: quizBestScore,
      quizPassed: value.quizPassed === true
    };
  }

  function readLearningProgress() {
    try {
      var stored = global.localStorage.getItem(LEARNING_PROGRESS_KEY);
      return stored ? normaliseLearningProgress(JSON.parse(stored)) : getDefaultLearningProgress();
    } catch (error) {
      return getDefaultLearningProgress();
    }
  }

  function setLearningProgress(value) {
    var progress = normaliseLearningProgress(value);
    try {
      global.localStorage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(progress));
    } catch (error) {
      // 儲存空間不可用時仍回傳正規化後的狀態，避免影響目前頁面操作。
    }
    return progress;
  }

  function markModuleCompleted(moduleId) {
    var progress = readLearningProgress();
    if (typeof moduleId === "string" && moduleId.trim() && progress.completedModules.indexOf(moduleId) === -1) {
      progress.completedModules.push(moduleId);
    }
    return setLearningProgress(progress);
  }

  function setLastVisitedModule(moduleId) {
    var progress = readLearningProgress();
    progress.lastVisitedModule = typeof moduleId === "string" && moduleId.trim() ? moduleId : null;
    return setLearningProgress(progress);
  }

  function recordQuizResult(score, passed) {
    var progress = readLearningProgress();
    var numericScore = typeof score === "number" && isFinite(score) ? Math.max(0, Math.min(100, Math.round(score))) : null;
    if (numericScore !== null && (progress.quizBestScore === null || numericScore > progress.quizBestScore)) {
      progress.quizBestScore = numericScore;
    }
    progress.quizPassed = progress.quizPassed || passed === true;
    return setLearningProgress(progress);
  }

  function resetLearningProgress() {
    return setLearningProgress(getDefaultLearningProgress());
  }

  function getOverallProgress(moduleCount) {
    var progress = readLearningProgress();
    var count = typeof moduleCount === "number" && moduleCount > 0 ? moduleCount : 6;
    var completedCount = progress.completedModules.length;
    var moduleProgress = Math.min(completedCount, count) * (75 / count);
    var quizProgress = progress.quizPassed ? 25 : 0;
    return Math.max(0, Math.min(100, Math.round(moduleProgress + quizProgress)));
  }

  global.AppStorage = {
    key: LEARNING_PROGRESS_KEY,
    getDefaultLearningProgress: getDefaultLearningProgress,
    getLearningProgress: readLearningProgress,
    setLearningProgress: setLearningProgress,
    markModuleCompleted: markModuleCompleted,
    setLastVisitedModule: setLastVisitedModule,
    recordQuizResult: recordQuizResult,
    resetLearningProgress: resetLearningProgress,
    getOverallProgress: getOverallProgress
  };
})(window);
