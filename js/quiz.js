(function (global) {
  "use strict";

  var state = {
    mode: "final",
    view: "intro",
    currentIndex: 0,
    reviewIndex: 0,
    answers: {},
    message: ""
  };

  function toArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function getQuiz(mode) {
    var quiz = global.AppData && global.AppData.quiz;
    if (!quiz) return { questions: [], targetQuestionCount: 20, passScore: 80 };
    if (mode === "module") return { questions: toArray(quiz.modules), targetQuestionCount: 0, passScore: 80 };
    return quiz.final || { questions: [], targetQuestionCount: 20, passScore: 80 };
  }

  function getVerifiedQuestions(mode) {
    return toArray(getQuiz(mode || state.mode).questions).filter(function (question) {
      return question && question.verificationStatus === "verified";
    });
  }

  function getState() {
    return {
      mode: state.mode,
      view: state.view,
      currentIndex: state.currentIndex,
      reviewIndex: state.reviewIndex,
      answers: Object.assign({}, state.answers),
      message: state.message
    };
  }

  function start(mode) {
    var questions = getVerifiedQuestions(mode || "final");
    state.mode = mode || "final";
    state.currentIndex = 0;
    state.reviewIndex = 0;
    state.answers = {};
    state.message = questions.length ? "" : "目前尚無可用的已驗證題目，無法開始計分測驗。";
    state.view = questions.length ? "question" : "intro";
    return getState();
  }

  function selectAnswer(optionId) {
    var question = getVerifiedQuestions()[state.currentIndex];
    if (!question || !optionId) return getState();
    state.answers[question.id] = optionId;
    state.message = "";
    return getState();
  }

  function goTo(index) {
    var questions = getVerifiedQuestions();
    if (!questions.length) return getState();
    state.currentIndex = Math.max(0, Math.min(index, questions.length - 1));
    state.view = "question";
    state.message = "";
    return getState();
  }

  function getFirstUnansweredIndex() {
    var questions = getVerifiedQuestions();
    for (var index = 0; index < questions.length; index += 1) {
      if (!state.answers[questions[index].id]) return index;
    }
    return -1;
  }

  function requestSubmit() {
    var questions = getVerifiedQuestions();
    var firstUnanswered = getFirstUnansweredIndex();
    if (!questions.length) {
      state.message = "目前尚無可用的已驗證題目，無法提交測驗。";
      return { canSubmit: false, firstUnanswered: -1 };
    }
    if (firstUnanswered !== -1) {
      state.currentIndex = firstUnanswered;
      state.view = "question";
      state.message = "尚有 " + (questions.length - Object.keys(state.answers).length) + " 題未完成，請完成所有題目後再提交測驗。";
      return { canSubmit: false, firstUnanswered: firstUnanswered };
    }
    state.view = "confirm";
    state.message = "";
    return { canSubmit: true, firstUnanswered: -1 };
  }

  function getResult() {
    var quiz = getQuiz(state.mode);
    var questions = getVerifiedQuestions();
    var correct = questions.filter(function (question) {
      return state.answers[question.id] === question.correctAnswer;
    }).length;
    var score = questions.length ? Math.round((correct / questions.length) * 100) : 0;
    return {
      questionCount: questions.length,
      correct: correct,
      score: score,
      passScore: quiz.passScore || 80,
      passed: questions.length > 0 && score >= (quiz.passScore || 80)
    };
  }

  function confirmSubmit() {
    if (getFirstUnansweredIndex() !== -1) return requestSubmit();
    state.view = "result";
    state.message = "";
    return getResult();
  }

  function returnToCheck() {
    state.view = "question";
    state.message = "";
    return getState();
  }

  function startReview(index) {
    state.reviewIndex = typeof index === "number" ? index : 0;
    state.view = "review";
    return getState();
  }

  function goToReview(index) {
    var questions = getVerifiedQuestions();
    state.reviewIndex = Math.max(0, Math.min(index, questions.length - 1));
    return getState();
  }

  function returnToResult() {
    state.view = "result";
    return getState();
  }

  function retake() {
    return start(state.mode);
  }

  function reset() {
    state.mode = "final";
    state.view = "intro";
    state.currentIndex = 0;
    state.reviewIndex = 0;
    state.answers = {};
    state.message = "";
    return getState();
  }

  global.AppQuiz = {
    getState: getState,
    getQuiz: getQuiz,
    getVerifiedQuestions: getVerifiedQuestions,
    start: start,
    selectAnswer: selectAnswer,
    goTo: goTo,
    requestSubmit: requestSubmit,
    confirmSubmit: confirmSubmit,
    returnToCheck: returnToCheck,
    getResult: getResult,
    startReview: startReview,
    goToReview: goToReview,
    returnToResult: returnToResult,
    retake: retake,
    reset: reset
  };
})(window);
