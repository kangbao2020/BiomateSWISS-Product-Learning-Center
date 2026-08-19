(function (global) {
  "use strict";

  var navigation = [
    { href: "#/home", label: "首頁", path: "/home" },
    { href: "#/learn", label: "學習中心", path: "/learn" },
    { href: "#/knowledge", label: "產品知識庫", path: "/knowledge" },
    { href: "#/research", label: "研究證據", path: "/research" },
    { href: "#/quiz", label: "學習測驗", path: "/quiz" }
  ];
  var backToTopBound = false;
  var backToTopThreshold = 320;
  var learningProgressResetPending = false;
  var learningProgressResetMessage = '';

  function renderNavigation(activePath) {
    return navigation.map(function (item) {
      var current = item.path === activePath ? ' aria-current="page"' : "";
      return '<a class="site-nav__link" href="' + item.href + '"' + current + ">" + item.label + "</a>";
    }).join("");
  }

  function renderBackToTop() {
    return '<button id="back-to-top" class="back-to-top" type="button" aria-label="回到頂端" aria-hidden="true">↑ 回到頂端</button>';
  }

  function updateBackToTop() {
    var button = document.getElementById('back-to-top');
    if (!button) return;
    var scrollPosition = global.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0;
    var isVisible = scrollPosition > backToTopThreshold;
    button.classList.toggle('is-visible', isVisible);
    button.setAttribute('aria-hidden', String(!isVisible));
  }

  function initialiseBackToTop() {
    var button = document.getElementById('back-to-top');
    if (button) {
      button.addEventListener('click', function () {
        global.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    if (!backToTopBound) {
      global.addEventListener('scroll', updateBackToTop, { passive: true });
      backToTopBound = true;
    }
    updateBackToTop();
  }

  function getLearningProgress() {
    return global.AppStorage ? global.AppStorage.getLearningProgress() : {
      completedModules: [], lastVisitedModule: null, quizBestScore: null, quizPassed: false
    };
  }

  function getCompletedModuleIds(progress) {
    var moduleIds = toArray(global.AppData && global.AppData.modules).map(function (module) { return module.id; });
    return toArray(progress.completedModules).filter(function (moduleId) { return moduleIds.indexOf(moduleId) !== -1; });
  }

  function getModuleProgressStatus(module, progress) {
    if (getCompletedModuleIds(progress).indexOf(module.id) !== -1) return '已完成';
    if (progress.lastVisitedModule === module.id) return '學習中';
    return '尚未開始';
  }

  function getNextLearningModule(progress) {
    var completedModules = getCompletedModuleIds(progress);
    return toArray(global.AppData && global.AppData.modules).filter(function (module) {
      return completedModules.indexOf(module.id) === -1;
    })[0] || null;
  }

  function getOverallProgress(progress) {
    var moduleCount = toArray(global.AppData && global.AppData.modules).length || 6;
    return global.AppStorage ? global.AppStorage.getOverallProgress(moduleCount) : 0;
  }

  function getQuizProgressLabel(progress) {
    if (progress.quizPassed) return progress.quizBestScore === null ? '已通過' : '已通過（最佳 ' + progress.quizBestScore + ' 分）';
    return progress.quizBestScore === null ? '尚未完成' : '尚未通過（最佳 ' + progress.quizBestScore + ' 分）';
  }

  function renderModuleCard(module, progress) {
    var status = getModuleProgressStatus(module, progress || getLearningProgress());
    var cta = status === '已完成' ? '重新查看' : (status === '學習中' ? '繼續學習' : '開始學習');
    return '<article class="module-card module-card--' + (status === '已完成' ? 'completed' : status === '學習中' ? 'active' : 'not-started') + '">' +
      '<div class="module-card__meta"><span class="module-card__number">Module ' + module.number + '</span><span class="badge">' + module.category + '</span></div>' +
      '<h3 class="module-card__title">' + module.title + '</h3>' +
      '<p class="module-card__description">' + module.summary + '</p>' +
      '<div class="module-card__footer"><span class="module-card__status">' + status + '</span><a class="button button--outline button--small" href="' + module.href + '">' + cta + '</a></div>' +
    '</article>';
  }

  function renderResearchCard(research) {
    return '<article class="research-card">' +
      '<p class="research-card__label">' + escapeHTML(research.category || '研究主題') + '</p>' +
      '<h3 class="research-card__title">' + research.title + '</h3>' +
      (research.titleZh ? '<p class="research-card__title-zh">' + escapeHTML(research.titleZh) + '</p>' : '') +
      '<p class="research-card__question">' + escapeHTML(research.researchQuestion || research.question) + '</p>' +
      (research.overview ? '<p class="research-card__overview">' + escapeHTML(research.overview) + '</p>' : '') +
      '<div class="research-card__footer"><span class="badge badge--' + (research.verificationStatus || 'pending') + '">' + verificationLabel(research.verificationStatus) + '</span><a class="text-link" href="#/research/' + encodeURIComponent(research.id) + '">查看研究證據</a></div>' +
    '</article>';
  }

  function renderHome() {
    var progress = getLearningProgress();
    var moduleData = toArray(global.AppData && global.AppData.modules);
    var completedCount = getCompletedModuleIds(progress).length;
    var overallProgress = getOverallProgress(progress);
    var nextModule = getNextLearningModule(progress);
    var modules = moduleData.map(function (module) { return renderModuleCard(module, progress); }).join('');
    var research = toArray(global.AppData && global.AppData.research).slice(0, 3).map(renderResearchCard).join('');
    var continueContent = nextModule ?
      '<div><p class="section-eyebrow">Continue Learning</p><h2>' + (completedCount ? '繼續你的學習旅程' : '開始你的學習旅程') + '</h2><p class="continue-card__module">Module ' + nextModule.number + '</p><h3>' + nextModule.title + '</h3><p>' + nextModule.summary + '</p></div><a class="button" href="' + nextModule.href + '">' + (completedCount ? '繼續 Module ' : '開始 Module ') + nextModule.number + '</a>' :
      '<div><p class="section-eyebrow">Continue Learning</p><h2>已完成全部學習模組</h2><p>六個 Learning Modules 已完成，建議前往 Final Quiz 檢視學習成果。</p></div><a class="button" href="#/quiz">前往學習測驗</a>';

    return '<main id="app-main" class="home" tabindex="-1">' +
      '<section class="hero"><div class="container hero__grid">' +
        '<div class="hero__content">' +
          '<p class="section-eyebrow">BiomateSWISS 產品學習中心</p>' +
          '<h1 class="hero__title">BiomateSWISS<br />產品學習中心</h1>' +
          '<p class="hero__subtitle">系統化學習產品、PDL® 技術、研究證據與正確產品使用方式。</p>' +
          '<p class="hero__description">從產品基礎到研究證據，建立完整的 BiomateSWISS 產品知識，並可隨時查找工作中需要的資訊。</p>' +
          '<div class="hero__actions"><a class="button" href="#/learn">開始學習</a><a class="button button--outline" href="#/search">搜尋產品知識</a></div>' +
        '</div>' +
        '<aside class="learning-overview" aria-label="學習總覽">' +
          '<p class="learning-overview__eyebrow">Learning Overview</p>' +
          '<h2 class="learning-overview__title">開始建立產品知識</h2>' +
          '<dl class="overview-stats"><div><dt>學習模組</dt><dd>6 個</dd></div><div><dt>Final Quiz</dt><dd>20 題</dd></div><div><dt>及格標準</dt><dd>80 分</dd></div></dl>' +
          '<div class="overview-progress"><div class="overview-progress__label"><span>Learning progress</span><strong>' + completedCount + ' / ' + moduleData.length + ' Modules</strong></div><div class="progress-bar" aria-label="學習進度 ' + overallProgress + '%"><div class="progress-bar__value" style="width: ' + overallProgress + '%"></div></div><strong class="overview-progress__percent">' + overallProgress + '%</strong></div>' +
        '</aside>' +
      '</div></section>' +

      '<section class="home-section home-section--search"><div class="container"><div class="section-heading"><p class="section-eyebrow">Quick Search</p><h2>快速查找產品知識</h2><p>工作中需要查詢產品、技術、研究或使用資訊時，可直接搜尋相關內容。</p></div>' +
        '<form class="quick-search" action="#/search" method="get"><label class="sr-only" for="home-search">產品知識搜尋</label><input id="home-search" name="q" type="search" placeholder="輸入想查詢的產品、技術或問題" /><button class="button button--secondary" type="submit">搜尋</button></form>' +
        '<div class="quick-keywords" aria-label="快速關鍵字"><span>常用關鍵字</span><a href="#/search?q=PDL%C2%AE">PDL®</a><a href="#/search?q=%E6%A4%8D%E9%AB%94%E8%A8%AD%E8%A8%88">植體設計</a><a href="#/search?q=Torque">Torque</a><a href="#/search?q=%E7%A0%94%E7%A9%B6%E8%AD%89%E6%93%9A">研究證據</a></div>' +
      '</div></section>' +

      '<section class="home-section"><div class="container"><div class="continue-card">' + continueContent + '</div></div></section>' +

      '<section class="home-section home-section--surface"><div class="container"><div class="section-heading section-heading--row"><div><p class="section-eyebrow">Learning Modules</p><h2>學習模組</h2><p>依照建議順序完成六個模組，逐步建立完整產品知識。</p></div><a class="text-link" href="#/learn">前往學習中心</a></div><div class="module-grid">' + modules + '</div></div></section>' +

      '<section class="home-section"><div class="container">' + renderLearningProgressPanel(progress) + '</div></section>' +

      '<section class="home-section home-section--surface"><div class="container"><div class="section-heading section-heading--row"><div><p class="section-eyebrow">Research Evidence</p><h2>研究證據</h2><p>從表面結構、細胞反應到骨整合與臨床研究，了解技術背後的研究依據。</p></div><a class="text-link" href="#/research">查看所有研究證據</a></div><div class="research-grid">' + research + '</div></div></section>' +
      '<footer class="site-footer"><div class="container"><p>BiomateSWISS Product Learning Center</p><p>產品資訊與研究資料須依來源驗證流程確認。</p></div></footer>' +
    '</main>';
  }

  function getModule(moduleId) {
    return toArray(global.AppData && global.AppData.modules).filter(function (module) { return module.id === moduleId; })[0];
  }

  function toArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function renderLearningProgressPanel(progress, options) {
    var showResetControl = options && options.showResetControl;
    var moduleData = toArray(global.AppData && global.AppData.modules);
    var completedCount = getCompletedModuleIds(progress).length;
    var overallProgress = getOverallProgress(progress);
    var actions = showResetControl ?
      '<div class="progress-panel__actions"><a class="button button--outline" href="#/quiz">前往學習測驗</a><button class="button button--critical" type="button" data-learning-progress-action="request-reset">重設學習紀錄</button></div>' :
      '<a class="button button--outline" href="#/quiz">前往學習測驗</a>';
    return '<div class="progress-panel"><div class="progress-panel__heading"><p class="section-eyebrow">Learning Progress</p><h2>學習進度</h2><p>完成模組與 Final Quiz 後，進度會儲存在此裝置的瀏覽器中。</p></div><dl class="progress-summary"><div><dt>已完成模組</dt><dd>' + completedCount + ' / ' + moduleData.length + '</dd></div><div><dt>Final Quiz</dt><dd>' + getQuizProgressLabel(progress) + '</dd></div><div><dt>總體進度</dt><dd>' + overallProgress + '%</dd></div></dl>' + actions + '</div>';
  }

  function renderLearningProgressResetFeedback() {
    if (learningProgressResetPending) {
      return '<section class="learning-progress-reset" role="alertdialog" aria-labelledby="reset-progress-title"><div><p class="section-eyebrow">Reset Learning Progress</p><h2 id="reset-progress-title">重設學習紀錄？</h2><p>此操作將清除目前瀏覽器中的模組完成狀態、學習位置、Final Quiz 最佳成績與通過紀錄。</p><p>此操作無法復原。</p></div><div class="learning-progress-reset__actions"><button class="button button--outline" type="button" data-learning-progress-action="cancel-reset">取消</button><button class="button button--critical" type="button" data-learning-progress-action="confirm-reset">確認重設</button></div></section>';
    }
    if (learningProgressResetMessage) return '<p class="learning-progress-reset__message" role="status">' + learningProgressResetMessage + '</p>';
    return '';
  }

  function renderLearningCenter() {
    var progress = getLearningProgress();
    var modules = toArray(global.AppData && global.AppData.modules).map(function (module) {
      return renderModuleCard(module, progress);
    }).join('');
    return '<main id="app-main" class="learning-center" tabindex="-1"><div class="container"><header class="learning-center__header"><p class="section-eyebrow">Learning Center</p><h1>學習中心</h1><p>依建議順序完成六個模組，建立 BiomateSWISS 產品知識基礎。</p></header>' + renderLearningProgressPanel(progress, { showResetControl: true }) + renderLearningProgressResetFeedback() + '<section class="learning-center__modules"><div class="section-heading"><p class="section-eyebrow">Learning Modules</p><h2>學習模組</h2><p>模組可自由開啟，完成狀態由學習者於各模組頁面手動標記。</p></div><div class="module-grid">' + modules + '</div></section></div></main>';
  }

  function escapeHTML(value) {
    return String(value || '').replace(/[&<>"']/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
    });
  }

  function getHashQuery(name) {
    var queryString = global.location.hash.split('?')[1] || '';
    var pair = queryString.split('&').filter(function (item) { return item.split('=')[0] === name; })[0];
    if (!pair) return '';
    try { return decodeURIComponent(pair.split('=').slice(1).join('=').replace(/\+/g, ' ')); }
    catch (error) { return ''; }
  }

  function verificationLabel(status) {
    return status === 'verified' ? '已驗證' : '待驗證';
  }

  function renderKnowledgeCard(knowledge) {
    var terms = toArray(knowledge.relatedTerms).slice(0, 3).map(function (term) {
      return '<span class="knowledge-card__term">' + escapeHTML(term) + '</span>';
    }).join('');
    return '<article class="knowledge-card">' +
      '<div class="knowledge-card__meta"><span class="badge">' + escapeHTML(knowledge.category) + '</span><span class="badge badge--' + knowledge.verificationStatus + '">' + verificationLabel(knowledge.verificationStatus) + '</span></div>' +
      '<h3 class="knowledge-card__title">' + escapeHTML(knowledge.title) + '</h3>' +
      '<p class="knowledge-card__question">' + escapeHTML(knowledge.question) + '</p>' +
      '<p class="knowledge-card__description">' + escapeHTML(knowledge.summary) + '</p>' +
      '<div class="knowledge-card__terms">' + terms + '</div>' +
      '<a class="text-link knowledge-card__link" href="#/knowledge/' + encodeURIComponent(knowledge.id) + '">查看知識</a>' +
    '</article>';
  }

  function renderKnowledgeCards(items) {
    var knowledge = toArray(items);
    if (!knowledge.length) return '<p class="knowledge-empty">目前此分類尚無知識條目。</p>';
    return knowledge.map(renderKnowledgeCard).join('');
  }

  function renderKnowledgeSearchForm(id, query) {
    return '<form id="' + id + '" class="knowledge-search-form" data-knowledge-search>' +
      '<label class="sr-only" for="' + id + '-input">搜尋產品知識</label>' +
      '<input id="' + id + '-input" data-search-input type="search" value="' + escapeHTML(query) + '" placeholder="輸入產品、技術或想了解的問題" />' +
      '<button class="button button--secondary" type="submit">搜尋</button>' +
    '</form>';
  }

  function renderKnowledgeBase() {
    var categories = ['全部', '產品系統', '表面技術', '植體設計', '使用流程', '研究證據'];
    var categoryButtons = categories.map(function (category) {
      var active = category === '全部' ? ' is-active' : '';
      return '<button type="button" class="knowledge-filter' + active + '" data-knowledge-category="' + category + '" aria-pressed="' + (category === '全部') + '">' + category + '</button>';
    }).join('');
    return '<main id="app-main" class="knowledge-page" tabindex="-1"><div class="container">' +
      '<header class="knowledge-page__header"><p class="section-eyebrow">Knowledge Base</p><h1>產品知識庫</h1><p>快速查找 BiomateSWISS 產品、技術、研究與使用相關知識。</p>' + renderKnowledgeSearchForm('knowledge-search', '') + '</header>' +
      '<div class="knowledge-filter-bar" aria-label="知識分類">' + categoryButtons + '</div>' +
      '<div id="knowledge-grid" class="knowledge-grid">' + renderKnowledgeCards(global.AppSearch.filterKnowledge('全部')) + '</div>' +
    '</div></main>';
  }

  function renderSearchResults() {
    var query = getHashQuery('q').trim();
    var results = global.AppSearch.searchKnowledge(query);
    var resultContent;
    if (!query) {
      resultContent = '<section class="search-empty"><h2>請輸入搜尋關鍵字</h2><p>可輸入產品、技術或想了解的問題，以查找知識庫內容。</p><a class="button button--outline" href="#/knowledge">查看所有產品知識</a></section>';
    } else if (!results.length) {
      resultContent = '<section class="search-empty"><h2>找不到相關知識</h2><p>目前知識庫中沒有找到與「' + escapeHTML(query) + '」相關的內容。</p><a class="button button--outline" href="#/knowledge">查看所有產品知識</a><p class="search-empty__note">若此資訊涉及精確產品規格或臨床使用方式，請確認正式產品資料或 IFU。</p></section>';
    } else {
      resultContent = '<p class="search-results__count">找到 ' + results.length + ' 筆相關知識</p><div class="knowledge-grid">' + renderKnowledgeCards(results) + '</div>';
    }
    return '<main id="app-main" class="knowledge-page search-results" tabindex="-1"><div class="container">' +
      '<header class="knowledge-page__header"><p class="section-eyebrow">Search</p><h1>搜尋結果</h1>' + (query ? '<p>搜尋「' + escapeHTML(query) + '」</p>' : '<p>搜尋產品知識</p>') + renderKnowledgeSearchForm('search-results-form', query) + '</header>' + resultContent +
    '</div></main>';
  }

  function renderRelatedModules(moduleIds) {
    var modules = toArray(moduleIds).map(function (moduleId) { return getModule(moduleId); }).filter(Boolean);
    if (!modules.length) return '<p class="knowledge-detail__pending">尚未設定相關學習模組。</p>';
    return '<div class="related-module-list">' + modules.map(function (module) {
      return '<a href="' + module.href + '"><span>Module ' + escapeHTML(module.number) + '</span><strong>' + escapeHTML(module.title) + '</strong><b>前往學習 Module ' + escapeHTML(module.number) + ' →</b></a>';
    }).join('') + '</div>';
  }

  function renderRelatedKnowledge(knowledgeIds) {
    var items = toArray(knowledgeIds).map(function (knowledgeId) { return global.AppSearch.getKnowledgeById(knowledgeId); }).filter(Boolean);
    if (!items.length) return '<p class="knowledge-detail__pending">尚無相關知識條目。</p>';
    return '<ul class="related-knowledge-list">' + items.map(function (item) {
      return '<li><a href="#/knowledge/' + encodeURIComponent(item.id) + '">' + escapeHTML(item.title) + ' →</a></li>';
    }).join('') + '</ul>';
  }

  function renderKnowledgeDetail(knowledgeId) {
    var knowledge = global.AppSearch.getKnowledgeById(knowledgeId);
    if (!knowledge) {
      return '<main id="app-main" class="page" tabindex="-1"><div class="container"><div class="page__inner"><h1 class="page__title">找不到知識條目</h1><p class="page__description">此知識條目可能不存在或已移除。</p><a class="button button--outline" href="#/knowledge">返回產品知識庫</a></div></div></main>';
    }
    var facts = toArray(knowledge.keyFacts);
    var terms = toArray(knowledge.relatedTerms);
    var sources = toArray(knowledge.sources);
    var quickAnswer = knowledge.quickAnswer ? '<p>' + escapeHTML(knowledge.quickAnswer) + '</p>' : '<p class="knowledge-detail__pending">此項目目前僅提供高層次摘要；完整回答須待正式產品資料或 IFU 驗證。</p>';
    var factsContent = facts.length ? '<ul>' + facts.map(function (fact) { return '<li>' + escapeHTML(fact) + '</li>'; }).join('') + '</ul>' : '<p class="knowledge-detail__pending">尚無可公開的已驗證重點資訊。</p>';
    var sourceContent = sources.length ? '<ul class="knowledge-source-list">' + sources.map(function (source) {
      return '<li><span>' + escapeHTML(source.title) + '</span><span class="badge badge--' + source.verificationStatus + '">' + verificationLabel(source.verificationStatus) + '</span></li>';
    }).join('') + '</ul>' : '<p class="knowledge-detail__pending">尚未提供可公開的來源資料。</p>';
    return '<main id="app-main" class="knowledge-detail" tabindex="-1"><div class="container"><div class="knowledge-detail__content">' +
      '<nav class="breadcrumb" aria-label="麵包屑"><a href="#/home">首頁</a><span>/</span><a href="#/knowledge">產品知識庫</a><span>/</span><span aria-current="page">' + escapeHTML(knowledge.title) + '</span></nav>' +
      '<header class="knowledge-detail__header"><div><span class="badge">' + escapeHTML(knowledge.category) + '</span><h1>' + escapeHTML(knowledge.title) + '</h1><p>' + escapeHTML(knowledge.question) + '</p></div><span class="badge badge--' + knowledge.verificationStatus + '">' + verificationLabel(knowledge.verificationStatus) + '</span></header>' +
      '<section class="quick-answer"><p class="section-eyebrow">Quick Answer</p><h2>快速回答</h2>' + quickAnswer + '</section>' +
      '<section class="knowledge-detail__section"><h2>重點資訊</h2>' + factsContent + '</section>' +
      '<section class="knowledge-detail__section"><h2>相關概念</h2><div class="knowledge-detail__terms">' + terms.map(function (term) { return '<span>' + escapeHTML(term) + '</span>'; }).join('') + '</div></section>' +
      '<section class="knowledge-detail__section"><h2>相關學習模組</h2>' + renderRelatedModules(knowledge.relatedModules) + '</section>' +
      '<section class="source-box knowledge-detail__section"><h2>來源</h2>' + sourceContent + '<p>精確產品與臨床資料須完成來源驗證後才可使用。</p></section>' +
      '<section class="knowledge-detail__section"><h2>相關知識</h2>' + renderRelatedKnowledge(knowledge.relatedKnowledge) + '</section>' +
    '</div></div></main>';
  }

  function getResearchById(id) {
    return toArray(global.AppData && global.AppData.research).filter(function (research) { return research.id === id; })[0];
  }

  function renderResearchCards(items) {
    var research = toArray(items);
    if (!research.length) return '<p class="research-empty">目前此分類尚無研究主題。</p>';
    return research.map(renderResearchCard).join('');
  }

  function renderResearchLibrary() {
    var categories = ['全部', '表面與細胞附著', '血管新生', '骨組織變化', '表面技術'];
    var buttons = categories.map(function (category) {
      var isAll = category === '全部';
      return '<button type="button" class="research-filter' + (isAll ? ' is-active' : '') + '" data-research-category="' + category + '" aria-pressed="' + isAll + '">' + category + '</button>';
    }).join('');
    return '<main id="app-main" class="research-page" tabindex="-1"><div class="container">' +
      '<header class="research-page__header"><p class="section-eyebrow">Research Library</p><h1>研究證據</h1><p>從表面結構、生物反應到骨整合，系統化整理 BiomateSWISS 產品與 PDL® 技術的相關研究資料。</p></header>' +
      '<div class="research-filter-bar" aria-label="研究分類">' + buttons + '</div>' +
      '<div id="research-grid" class="research-library-grid">' + renderResearchCards(toArray(global.AppData && global.AppData.research)) + '</div>' +
    '</div></main>';
  }

  function renderResearchEvidenceSummary(research) {
    if (research.verificationStatus === 'verified' && research.evidenceSummary) return '<p>' + escapeHTML(research.evidenceSummary) + '</p>';
    return '<p class="research-detail__pending">相關研究主題的詳細內容尚待來源確認。精確研究結果與數據須完成來源驗證後才可使用。</p>';
  }

  function renderResearchObservations(research) {
    var observations = toArray(research.observations);
    if (!observations.length) return '<p class="research-detail__pending">目前尚無可公開的已驗證研究觀察。</p>';
    return '<ul>' + observations.map(function (observation) { return '<li>' + escapeHTML(observation) + '</li>'; }).join('') + '</ul>';
  }

  function renderResearchSources(sources) {
    var items = toArray(sources);
    if (!items.length) return '<p class="research-detail__pending">尚未提供可公開的來源資料。</p>';
    return '<ul class="research-source-list">' + items.map(function (source) {
      return '<li><span>' + escapeHTML(source.title) + '</span><span class="badge badge--' + (source.verificationStatus || 'pending') + '">' + verificationLabel(source.verificationStatus) + '</span></li>';
    }).join('') + '</ul>';
  }

  function renderResearchInterpretation(research) {
    var limitations = toArray(research.limitations);
    var limitationList = limitations.length ? '<ul>' + limitations.map(function (limitation) { return '<li>' + escapeHTML(limitation) + '</li>'; }).join('') + '</ul>' : '';
    return limitationList + '<p>研究結果應依研究設計、樣本、追蹤期間或研究限制進行解讀，不應將單一研究結果直接推論為所有臨床情境的結論。</p>';
  }

  function renderResearchDetail(researchId) {
    var research = getResearchById(researchId);
    if (!research) {
      return '<main id="app-main" class="page" tabindex="-1"><div class="container"><div class="page__inner"><h1 class="page__title">找不到研究條目</h1><p class="page__description">此研究條目可能不存在或已移除。</p><a class="button button--outline" href="#/research">返回研究證據</a></div></div></main>';
    }
    return '<main id="app-main" class="research-detail" tabindex="-1"><div class="container"><div class="research-detail__content">' +
      '<nav class="breadcrumb" aria-label="麵包屑"><a href="#/home">首頁</a><span>/</span><a href="#/research">研究證據</a><span>/</span><span aria-current="page">' + escapeHTML(research.title) + '</span></nav>' +
      '<header class="research-detail__header"><div><span class="badge">' + escapeHTML(research.category) + '</span><h1>' + escapeHTML(research.title) + '</h1><p>' + escapeHTML(research.titleZh) + '</p></div><span class="badge badge--' + (research.verificationStatus || 'pending') + '">' + verificationLabel(research.verificationStatus) + '</span></header>' +
      '<section class="research-detail__section research-question"><p class="section-eyebrow">Research Question</p><h2>研究問題</h2><p>' + escapeHTML(research.researchQuestion) + '</p></section>' +
      '<section class="research-detail__section"><h2>研究概覽</h2><p>' + escapeHTML(research.overview) + '</p></section>' +
      '<section class="research-detail__section"><h2>研究觀察重點</h2>' + renderResearchObservations(research) + '</section>' +
      '<section class="research-detail__section why-it-matters"><p class="section-eyebrow">Why It Matters</p><h2>為什麼值得理解？</h2><p>此主題有助於建立技術與研究資料的閱讀脈絡，不應解讀為產品優勢、臨床結果或使用建議。</p></section>' +
      '<section class="research-detail__section evidence-summary"><p class="section-eyebrow">Evidence Summary</p><h2>證據摘要</h2>' + renderResearchEvidenceSummary(research) + '</section>' +
      '<section class="research-detail__section interpretation-note"><p class="section-eyebrow">Interpretation Note</p><h2>解讀注意事項</h2>' + renderResearchInterpretation(research) + '</section>' +
      '<section class="research-detail__section"><h2>相關知識</h2>' + renderRelatedKnowledge(research.relatedKnowledge) + '</section>' +
      '<section class="research-detail__section"><h2>相關學習模組</h2>' + renderRelatedModules(research.relatedModules) + '</section>' +
      '<section class="source-box research-detail__section"><h2>資料來源</h2>' + renderResearchSources(research.sources) + '<p>精確研究內容須完成來源驗證後才可使用。</p></section>' +
    '</div></div></main>';
  }

  function renderQuizNavigator(questions, state) {
    return '<nav class="quiz-navigator" aria-label="題目導覽">' + questions.map(function (question, index) {
      var classes = 'quiz-navigator__item';
      if (index === state.currentIndex) classes += ' is-current';
      if (state.answers[question.id]) classes += ' is-answered';
      return '<button type="button" class="' + classes + '" data-quiz-go="' + index + '" aria-label="前往第 ' + (index + 1) + ' 題">' + (index + 1) + '</button>';
    }).join('') + '</nav>';
  }

  function renderQuizIntro(quiz, verifiedQuestions) {
    var isAvailable = verifiedQuestions.length > 0;
    return '<main id="app-main" class="quiz-page" tabindex="-1"><div class="container"><section class="quiz-intro">' +
      '<p class="section-eyebrow">Learning Assessment</p><h1>學習測驗</h1><p class="quiz-intro__description">完成六個 Learning Modules 後作答。</p>' +
      '<dl class="quiz-intro__meta"><div><dt>題數</dt><dd>20 題</dd></div><div><dt>題型</dt><dd>單選題</dd></div><div><dt>及格標準</dt><dd>' + escapeHTML(quiz.passScore || 80) + ' 分</dd></div></dl>' +
      '<div class="quiz-intro__availability"><span class="badge badge--' + (isAvailable ? 'verified' : 'pending') + '">' + (isAvailable ? '可計分題目已就緒' : '題庫待驗證') + '</span><p>' + (isAvailable ? '目前可計分題目：' : '目前可計分的已驗證題目：') + '<strong>' + verifiedQuestions.length + ' 題</strong></p>' +
      (isAvailable ? '<p>本次測驗將依目前已驗證題目計分，不以未驗證題目作為成績依據。</p>' : '<p>目前尚無可用的已驗證題目，無法開始計分測驗。題目、答案與解說完成來源驗證後才會納入正式測驗。</p>') + '</div>' +
      '<button class="button" type="button" data-quiz-action="start"' + (isAvailable ? '' : ' disabled') + '>開始測驗</button>' +
    '</section></div></main>';
  }

  function renderQuizQuestion(quiz, questions, state) {
    var current = questions[state.currentIndex];
    if (!current) return renderQuizIntro(quiz, questions);
    var options = toArray(current.options).map(function (option) {
      var selected = state.answers[current.id] === option.id;
      return '<button type="button" class="quiz-option' + (selected ? ' is-selected' : '') + '" data-quiz-option="' + escapeHTML(option.id) + '" aria-pressed="' + selected + '"><span>' + escapeHTML(option.id) + '</span><strong>' + escapeHTML(option.text) + '</strong></button>';
    }).join('');
    var isLast = state.currentIndex === questions.length - 1;
    return '<main id="app-main" class="quiz-page" tabindex="-1"><div class="container"><div class="quiz-layout">' +
      '<aside class="quiz-sidebar"><p>題目導覽</p>' + renderQuizNavigator(questions, state) + '</aside>' +
      '<section class="quiz-question-card"><div class="quiz-question-card__meta"><span>QUESTION ' + String(state.currentIndex + 1).padStart(2, '0') + ' / ' + questions.length + '</span><strong>' + (state.currentIndex + 1) + ' / ' + questions.length + '</strong></div>' +
      '<div class="progress-bar" aria-label="測驗進度"><div class="progress-bar__value" style="width: ' + (((state.currentIndex + 1) / questions.length) * 100) + '%"></div></div>' +
      '<h1>' + escapeHTML(current.question) + '</h1><div class="quiz-options">' + options + '</div>' +
      (state.message ? '<p class="quiz-message" role="alert">' + escapeHTML(state.message) + '</p>' : '') +
      '<div class="quiz-question-card__actions"><button class="button button--outline" type="button" data-quiz-action="previous"' + (state.currentIndex === 0 ? ' disabled' : '') + '>← 上一題</button>' +
      (isLast ? '<button class="button" type="button" data-quiz-action="submit">提交測驗</button>' : '<button class="button" type="button" data-quiz-action="next">下一題 →</button>') + '</div>' +
    '</section></div></div></main>';
  }

  function renderQuizConfirmation() {
    return '<main id="app-main" class="quiz-page" tabindex="-1"><div class="container"><section class="quiz-confirmation"><p class="section-eyebrow">Submit Quiz</p><h1>確定提交本次測驗嗎？</h1><p>提交後將顯示成績與答題結果。</p><div><button class="button button--outline" type="button" data-quiz-action="return-check">返回檢查</button><button class="button" type="button" data-quiz-action="confirm-submit">確認提交</button></div></section></div></main>';
  }

  function renderQuizResult(questions) {
    var result = global.AppQuiz.getResult();
    var resultTitle = result.passed ? '通過學習測驗' : '尚未通過學習測驗';
    var incorrectModules = questions.filter(function (question) {
      return result.questionCount && global.AppQuiz.getState().answers[question.id] !== question.correctAnswer;
    }).reduce(function (moduleIds, question) {
      return moduleIds.concat(Array.isArray(question.relatedModule) ? question.relatedModule : [question.relatedModule]);
    }, []).filter(Boolean).filter(function (value, index, array) { return array.indexOf(value) === index; });
    return '<main id="app-main" class="quiz-page" tabindex="-1"><div class="container"><section class="quiz-result">' +
      '<p class="section-eyebrow">Quiz Result</p><p class="quiz-result__score">' + result.score + ' 分</p><h1>' + resultTitle + '</h1><p>答對 ' + result.correct + ' / ' + result.questionCount + ' 題</p><p>及格標準 ' + result.passScore + ' 分</p>' +
      (!result.passed ? '<p class="quiz-result__recommendation">建議複習相關學習模組後再次挑戰。</p>' : '') +
      (incorrectModules.length ? '<div class="quiz-result__related"><h2>建議複習</h2>' + renderRelatedModules(incorrectModules) + '</div>' : '') +
      '<div class="quiz-result__actions"><button class="button button--outline" type="button" data-quiz-action="review">查看答題結果</button><button class="button" type="button" data-quiz-action="retake">重新測驗</button></div>' +
    '</section></div></main>';
  }

  function renderQuizReview(questions, state) {
    var question = questions[state.reviewIndex];
    if (!question) return renderQuizResult(questions);
    var selectedAnswer = toArray(question.options).filter(function (option) { return option.id === state.answers[question.id]; })[0];
    var correctAnswer = toArray(question.options).filter(function (option) { return option.id === question.correctAnswer; })[0];
    var source = typeof question.source === 'string' ? question.source : question.source && question.source.title;
    return '<main id="app-main" class="quiz-page" tabindex="-1"><div class="container"><section class="quiz-review">' +
      '<p class="section-eyebrow">Answer Review</p><p class="quiz-review__meta">Question ' + (state.reviewIndex + 1) + ' / ' + questions.length + '</p><h1>' + escapeHTML(question.question) + '</h1>' +
      '<dl><div><dt>你的答案</dt><dd>' + escapeHTML(selectedAnswer ? selectedAnswer.text : '未作答') + '</dd></div><div><dt>正確答案</dt><dd>' + escapeHTML(correctAnswer ? correctAnswer.text : '待驗證') + '</dd></div><div><dt>Explanation</dt><dd>' + escapeHTML(question.explanation || '詳細解說待來源驗證。') + '</dd></div><div><dt>相關學習模組</dt><dd>' + renderRelatedModules(Array.isArray(question.relatedModule) ? question.relatedModule : (question.relatedModule ? [question.relatedModule] : [])) + '</dd></div><div><dt>來源</dt><dd>' + escapeHTML(source || '待來源驗證') + '</dd></div></dl>' +
      '<div class="quiz-review__actions"><button class="button button--outline" type="button" data-quiz-action="review-previous"' + (state.reviewIndex === 0 ? ' disabled' : '') + '>← 上一題</button><button class="button button--outline" type="button" data-quiz-action="review-next"' + (state.reviewIndex === questions.length - 1 ? ' disabled' : '') + '>下一題 →</button><button class="button" type="button" data-quiz-action="result">返回成績</button></div>' +
    '</section></div></main>';
  }

  function renderQuiz() {
    var quiz = global.AppQuiz.getQuiz('final');
    var questions = global.AppQuiz.getVerifiedQuestions('final');
    var state = global.AppQuiz.getState();
    if (state.view === 'question') return renderQuizQuestion(quiz, questions, state);
    if (state.view === 'confirm') return renderQuizConfirmation();
    if (state.view === 'result') return renderQuizResult(questions);
    if (state.view === 'review') return renderQuizReview(questions, state);
    return renderQuizIntro(quiz, questions);
  }

  function getModuleNavigation(module) {
    var modules = toArray(global.AppData && global.AppData.modules);
    var index = modules.indexOf(module);
    var previous = module.previousModule || (index > 0 ? {
      label: modules[index - 1].title,
      href: modules[index - 1].href
    } : { label: "返回學習中心", href: "#/learn" });
    var next = module.nextModule || (index >= 0 && index < modules.length - 1 ? {
      id: modules[index + 1].id,
      label: modules[index + 1].title,
      href: modules[index + 1].href
    } : { label: "前往學習測驗", href: "#/quiz/final" });
    return { previous: previous, next: next };
  }

  function renderPreviousNext(navigation) {
    var nextModuleNumber = navigation.next.id ? 'Module ' + navigation.next.id.replace('module-', '') : '';
    return '<nav class="previous-next" aria-label="模組前後導覽">' +
      '<a class="previous-next__link" href="' + navigation.previous.href + '">← ' + navigation.previous.label + '</a>' +
      '<a class="previous-next__link previous-next__link--next" href="' + navigation.next.href + '"><span>' + nextModuleNumber + '</span>' + navigation.next.label + ' →</a>' +
    '</nav>';
  }

  function renderBilingualTerm(term) {
    var terms = {
      'Surface': ['表面技術', 'Surface'],
      'Implant Design': ['植體設計', 'Implant Design'],
      'Prosthetic System': ['贋復系統', 'Prosthetic System'],
      'Surgical Workflow': ['手術流程', 'Surgical Workflow'],
      'Implant System': ['植體系統', 'Implant System'],
      'Fixture': ['植體本體', 'Fixture'],
      'Abutment': ['基台', 'Abutment'],
      'Prosthetic Parts': ['贋復零件', 'Prosthetic Parts'],
      'Surgical Instruments': ['手術器械', 'Surgical Instruments'],
      'Connection': ['連接結構', 'Connection'],
      'Prosthetic Restoration': ['贋復重建', 'Prosthetic Restoration'],
      'Planning': ['治療規劃', 'Planning'],
      'Site Preparation': ['部位準備', 'Site Preparation'],
      'Implant Placement': ['植體置放', 'Implant Placement'],
      'Prosthetic Workflow': ['贋復流程', 'Prosthetic Workflow'],
      'Fixture Surface': ['植體本體表面', 'Fixture Surface'],
      'PDL® Surface Technology': ['PDL® 表面技術', 'PDL® Surface Technology'],
      'Module 02': ['模組 02', 'Module 02']
    };
    var label = terms[term] || [term, term];
    return '<span class="concept-flow__primary">' + label[0] + '</span><span class="concept-flow__secondary">' + label[1] + '</span>';
  }

  function renderFlow(items, className) {
    var flowItems = toArray(items);
    return '<div class="concept-flow ' + (className || '') + '">' + flowItems.map(function (item, index) {
      var connector = index < flowItems.length - 1 ? '<span class="concept-flow__connector" aria-hidden="true">↓</span>' : '';
      return '<div class="concept-flow__item">' + renderBilingualTerm(item) + '</div>' + connector;
    }).join('') + '</div>';
  }

  function renderVisualExplanation(type) {
    if (type === 'system-overview') {
      return '<div class="visual-explanation"><p class="visual-explanation__title">' + renderBilingualTerm('Implant System') + '</p><div class="system-overview"><span>' + renderBilingualTerm('Fixture') + '</span><span>' + renderBilingualTerm('Abutment') + '</span><span>' + renderBilingualTerm('Prosthetic Parts') + '</span><span>' + renderBilingualTerm('Surgical Instruments') + '</span></div></div>';
    }
    if (type === 'abutment-flow') return '<div class="visual-explanation">' + renderFlow(['Fixture', 'Connection', 'Abutment', 'Prosthetic Restoration'], 'concept-flow--vertical') + '</div>';
    if (type === 'workflow') return '<div class="visual-explanation">' + renderFlow(['Planning', 'Site Preparation', 'Implant Placement', 'Prosthetic Workflow'], 'concept-flow--vertical') + '</div>';
    if (type === 'pdl-bridge') return '<div class="visual-explanation">' + renderFlow(['Implant System', 'Fixture Surface', 'PDL® Surface Technology', 'Module 02'], 'concept-flow--vertical') + '</div>';
    return '';
  }

  function renderLearningSection(section, index) {
    var comparison = '';
    if (toArray(section.comparison).length) {
      comparison = '<div class="comparison-grid">' + toArray(section.comparison).map(function (item) {
        return '<div class="comparison-card"><h4>' + item.title + '</h4><p>' + item.description + '</p><span class="badge badge--' + item.verificationStatus + '">' + (item.verificationStatus === 'verified' ? '已驗證' : '待驗證') + '</span></div>';
      }).join('') + '</div>';
    }
    return '<section id="' + section.id + '" class="learning-section"><p class="learning-section__index">0' + (index + 2) + '</p><h2>' + section.title + '</h2><p>' + section.content + '</p>' + renderVisualExplanation(section.visual) + comparison + '</section>';
  }

  function renderModuleSidebar(module, progressPercent) {
    var links = toArray(module.lessonNavigation).map(function (item, index) {
      return '<button type="button" class="module-sidebar__link" data-scroll-target="' + item.id + '"><span>' + String(index + 1).padStart(2, '0') + '</span>' + item.label + '</button>';
    }).join('');
    return '<aside class="module-sidebar">' +
      '<div class="module-sidebar__summary"><p>MODULE ' + module.number + '</p><strong>' + module.title + '</strong><span>學習進度 <b>' + progressPercent + '%</b></span></div>' +
      '<button class="module-sidebar__toggle" type="button" aria-expanded="false">本課內容 <span aria-hidden="true">⌄</span></button>' +
      '<nav class="module-sidebar__nav" aria-label="本課內容"><p>本課內容</p>' + links + '</nav>' +
    '</aside>';
  }

  function renderModule(moduleId) {
    var module = getModule(moduleId);
    if (!module) return '';
    var objectives = toArray(module.objectives);
    var sections = toArray(module.sections);
    var mentalModel = toArray(module.mentalModel);
    var research = toArray(module.research);
    var takeaways = toArray(module.takeaways);
    var sources = toArray(module.sources);
    var navigation = getModuleNavigation(module);
    var isCompleted = getCompletedModuleIds(getLearningProgress()).indexOf(module.id) !== -1;
    var moduleProgress = isCompleted ? 100 : 0;

    if (!sections.length) {
      return '<main id="app-main" class="page" tabindex="-1"><div class="container"><div class="page__inner"><p class="page__eyebrow">MODULE ' + module.number + '｜' + module.category + '</p><h1 class="page__title">' + module.title + '</h1><p class="page__description">' + module.description + '</p><section class="card page__placeholder"><h2 class="card__title">內容準備中</h2><p class="card__body">本 Module 的完整學習內容將於後續階段建立。</p></section>' + renderModuleCompletion(module.id, isCompleted) + renderPreviousNext(navigation) + '</div></div></main>';
    }

    var researchCards = research.map(function (researchId) {
      var research = global.AppData.research.filter(function (item) { return item.id === researchId; })[0];
      return research ? renderResearchCard(research) : '';
    }).join('');
    var sourceItems = sources.map(function (source) {
      var label = source.verificationStatus === 'verified' ? '已驗證' : '待驗證';
      return '<li><span>' + source.title + '</span><span class="badge badge--' + source.verificationStatus + '">' + label + '</span></li>';
    }).join('');

    return '<main id="app-main" class="module-page" tabindex="-1">' +
      '<div class="container"><nav class="breadcrumb" aria-label="麵包屑"><a href="#/home">首頁</a><span>/</span><a href="#/learn">學習中心</a><span>/</span><span aria-current="page">Module ' + module.number + '</span></nav>' +
        '<header class="module-header"><div><p class="section-eyebrow">MODULE ' + module.number + '｜' + module.category + '</p><h1>' + module.title + '</h1><p>' + module.description + '</p></div><div class="module-header__progress"><span>學習進度</span><strong>' + moduleProgress + '%</strong><div class="progress-bar" aria-label="學習進度 ' + moduleProgress + '%"><div class="progress-bar__value" style="width: ' + moduleProgress + '%"></div></div></div></header>' +
        '<div class="module-layout">' + renderModuleSidebar(module, moduleProgress) +
          '<article class="module-content">' +
            '<section id="objectives" class="objective-card"><p class="section-eyebrow">Learning Objective</p><h2>完成本 Module 後，學習者應能：</h2><ul>' + objectives.map(function (objective) { return '<li>' + objective + '</li>'; }).join('') + '</ul></section>' +
            '<section class="key-concept"><p class="section-eyebrow">Key Concept</p><h2>以系統觀點建立理解框架</h2>' + renderFlow(mentalModel, 'concept-flow--horizontal') + '</section>' +
            sections.map(renderLearningSection).join('') +
            '<section class="why-it-matters"><p class="section-eyebrow">Why It Matters</p><h2>為什麼這很重要？</h2><p>' + module.whyItMatters + '</p></section>' +
            '<section class="module-research"><p class="section-eyebrow">Research Evidence</p><h2>相關研究證據</h2><p>以下為後續研究資料延伸入口，不於本課呈現研究結論或數據。</p><div class="research-grid research-grid--module">' + researchCards + '</div></section>' +
            '<section id="takeaways" class="key-takeaway"><p class="section-eyebrow">Key Takeaway</p><h2>重點整理</h2>' + renderFlow(takeaways, 'concept-flow--horizontal') + '</section>' +
            '<section id="sources" class="source-box module-sources"><h2>來源</h2><ul>' + sourceItems + '</ul><p>精確產品與臨床資料須完成來源驗證後才可使用。</p></section>' +
            renderModuleCompletion(module.id, isCompleted) +
            renderPreviousNext(navigation) +
          '</article>' +
        '</div></div></main>';
  }

  function renderModuleCompletion(moduleId, isCompleted) {
    return '<section class="module-completion"><div><p class="section-eyebrow">Learning Progress</p><h2>' + (isCompleted ? '本 Module 已完成' : '完成本 Module 後再標記') + '</h2><p>' + (isCompleted ? '已記錄完成狀態，可隨時重新查看本課內容。' : '完成閱讀後，請手動標記為已完成。') + '</p></div><button class="button" type="button" data-module-complete="' + moduleId + '"' + (isCompleted ? ' disabled' : '') + '>' + (isCompleted ? '✓ 本 Module 已完成' : '完成本模組') + '</button></section>';
  }

  global.renderModule = renderModule;

  function render() {
    var route = global.AppRouter.getRoute();
    var activePath = global.AppRouter.getPath();
    document.title = route.title + "｜BiomateSWISS Product Learning Center";
    var header =
      '<header class="site-header">' +
        '<div class="container site-header__inner">' +
          '<a class="brand" href="#/home" aria-label="BiomateSWISS Product Learning Center 首頁"><span>BiomateSWISS Product Learning Center</span><small>BiomateSWISS 產品學習中心</small></a>' +
          '<nav class="site-nav" aria-label="主要導覽">' + renderNavigation(activePath) + "</nav>" +
        "</div>" +
      "</header>";
    var fallback =
      '<main id="app-main" class="page" tabindex="-1">' +
        '<div class="container"><div class="page__inner">' +
          '<p class="page__eyebrow">Sprint 3｜UI Prototype &amp; Front-End Development</p>' +
          '<h1 class="page__title">' + route.title + "</h1>" +
          '<p class="page__description">' + route.description + "</p>" +
          '<section class="card page__placeholder" aria-label="建置狀態">' +
            '<h2 class="card__title">基礎架構已就緒</h2>' +
            '<p class="card__body">此頁目前僅提供應用程式外殼、導覽與路由基礎，尚未載入產品或臨床內容。</p>' +
          "</section>" +
        "</div></div>" +
      "</main>";
    var moduleMatch = activePath.match(/^\/learn\/(module-\d{2})$/);
    var knowledgeMatch = activePath.match(/^\/knowledge\/([^/]+)$/);
    var researchMatch = activePath.match(/^\/research\/([^/]+)$/);
    var page = fallback;
    if (activePath !== '/learn') {
      learningProgressResetPending = false;
      learningProgressResetMessage = '';
    }
    if (activePath === "/home") page = renderHome();
    else if (activePath === "/learn") page = renderLearningCenter();
    else if (moduleMatch) {
      if (global.AppStorage) global.AppStorage.setLastVisitedModule(moduleMatch[1]);
      page = renderModule(moduleMatch[1]);
    }
    else if (activePath === "/knowledge") page = renderKnowledgeBase();
    else if (knowledgeMatch) page = renderKnowledgeDetail(knowledgeMatch[1]);
    else if (activePath === "/research") page = renderResearchLibrary();
    else if (researchMatch) page = renderResearchDetail(researchMatch[1]);
    else if (activePath === "/quiz" || activePath === "/quiz/final") page = renderQuiz();
    else if (activePath === "/search") page = renderSearchResults();
    document.getElementById("app").innerHTML = header + page + renderBackToTop();
    initialiseBackToTop();

    var searchForm = document.querySelector(".quick-search");
    if (searchForm) {
      searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var query = document.getElementById("home-search").value.trim();
        global.location.hash = "/search" + (query ? "?q=" + encodeURIComponent(query) : "");
      });
    }

    document.querySelectorAll('[data-knowledge-search]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var input = form.querySelector('[data-search-input]');
        var query = input ? input.value.trim() : '';
        global.location.hash = '/search' + (query ? '?q=' + encodeURIComponent(query) : '');
      });
    });

    var knowledgeFilters = document.querySelectorAll('[data-knowledge-category]');
    knowledgeFilters.forEach(function (button) {
      button.addEventListener('click', function () {
        var category = button.getAttribute('data-knowledge-category');
        var grid = document.getElementById('knowledge-grid');
        if (grid) grid.innerHTML = renderKnowledgeCards(global.AppSearch.filterKnowledge(category));
        knowledgeFilters.forEach(function (filter) {
          var isActive = filter === button;
          filter.classList.toggle('is-active', isActive);
          filter.setAttribute('aria-pressed', String(isActive));
        });
      });
    });

    var researchFilters = document.querySelectorAll('[data-research-category]');
    researchFilters.forEach(function (button) {
      button.addEventListener('click', function () {
        var category = button.getAttribute('data-research-category');
        var research = toArray(global.AppData && global.AppData.research);
        var filtered = category === '全部' ? research : research.filter(function (item) { return item.category === category; });
        var grid = document.getElementById('research-grid');
        if (grid) grid.innerHTML = renderResearchCards(filtered);
        researchFilters.forEach(function (filter) {
          var isActive = filter === button;
          filter.classList.toggle('is-active', isActive);
          filter.setAttribute('aria-pressed', String(isActive));
        });
      });
    });

    document.querySelectorAll('[data-quiz-option]').forEach(function (button) {
      button.addEventListener('click', function () {
        global.AppQuiz.selectAnswer(button.getAttribute('data-quiz-option'));
        render();
      });
    });

    document.querySelectorAll('[data-module-complete]').forEach(function (button) {
      button.addEventListener('click', function () {
        var moduleId = button.getAttribute('data-module-complete');
        if (global.AppStorage && getModule(moduleId)) global.AppStorage.markModuleCompleted(moduleId);
        render();
      });
    });

    document.querySelectorAll('[data-learning-progress-action]').forEach(function (button) {
      button.addEventListener('click', function () {
        var action = button.getAttribute('data-learning-progress-action');
        if (action === 'request-reset') {
          learningProgressResetPending = true;
          learningProgressResetMessage = '';
        } else if (action === 'cancel-reset') {
          learningProgressResetPending = false;
        } else if (action === 'confirm-reset') {
          if (global.AppStorage) global.AppStorage.resetLearningProgress();
          if (global.AppQuiz && typeof global.AppQuiz.reset === 'function') global.AppQuiz.reset();
          learningProgressResetPending = false;
          learningProgressResetMessage = '學習紀錄已重設。';
        }
        render();
      });
    });

    document.querySelectorAll('[data-quiz-go]').forEach(function (button) {
      button.addEventListener('click', function () {
        global.AppQuiz.goTo(Number(button.getAttribute('data-quiz-go')));
        render();
      });
    });

    document.querySelectorAll('[data-quiz-action]').forEach(function (button) {
      button.addEventListener('click', function () {
        var state = global.AppQuiz.getState();
        var action = button.getAttribute('data-quiz-action');
        if (action === 'start') global.AppQuiz.start('final');
        else if (action === 'previous') global.AppQuiz.goTo(state.currentIndex - 1);
        else if (action === 'next') global.AppQuiz.goTo(state.currentIndex + 1);
        else if (action === 'submit') global.AppQuiz.requestSubmit();
        else if (action === 'return-check') global.AppQuiz.returnToCheck();
        else if (action === 'confirm-submit') {
          var result = global.AppQuiz.confirmSubmit();
          if (global.AppStorage && result && typeof result.score === 'number') global.AppStorage.recordQuizResult(result.score, result.passed);
        }
        else if (action === 'review') global.AppQuiz.startReview(0);
        else if (action === 'review-previous') global.AppQuiz.goToReview(state.reviewIndex - 1);
        else if (action === 'review-next') global.AppQuiz.goToReview(state.reviewIndex + 1);
        else if (action === 'result') global.AppQuiz.returnToResult();
        else if (action === 'retake') global.AppQuiz.retake();
        render();
      });
    });

    document.querySelectorAll('[data-scroll-target]').forEach(function (button) {
      button.addEventListener('click', function () {
        var target = document.getElementById(button.getAttribute('data-scroll-target'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    var sidebarToggle = document.querySelector('.module-sidebar__toggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function () {
        var sidebar = sidebarToggle.closest('.module-sidebar');
        var isOpen = sidebar.classList.toggle('is-open');
        sidebarToggle.setAttribute('aria-expanded', String(isOpen));
      });
    }
  }

  global.AppRouter.onChange(render);
  if (!global.location.hash || !global.AppRouter.isKnownPath(global.location.hash.replace(/^#/, "").split("?")[0])) global.location.hash = "/home";
  render();
})(window);
