(function (global) {
  "use strict";

  function toArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function normalise(value) {
    return String(value || "").trim().replace(/\s+/g, " ").toLocaleLowerCase();
  }

  function getKnowledge() {
    return toArray(global.AppData && global.AppData.knowledge);
  }

  function includesQuery(value, query) {
    return normalise(value).indexOf(query) !== -1;
  }

  function scoreKnowledge(item, query) {
    if (!query) return 0;
    var score = 0;
    if (includesQuery(item.title, query)) score += 100;
    if (includesQuery(item.question, query)) score += 80;
    if (toArray(item.relatedTerms).some(function (term) { return includesQuery(term, query); })) score += 60;
    if (includesQuery(item.summary, query)) score += 40;
    if (includesQuery(item.category, query)) score += 20;
    return score;
  }

  function rankResults(results, query) {
    var normalisedQuery = normalise(query);
    return toArray(results).map(function (item, index) {
      return { item: item, score: scoreKnowledge(item, normalisedQuery), index: index };
    }).sort(function (left, right) {
      return right.score - left.score || left.index - right.index;
    }).map(function (result) { return result.item; });
  }

  function searchKnowledge(query) {
    var normalisedQuery = normalise(query);
    var knowledge = getKnowledge();
    if (!normalisedQuery) return knowledge;
    return rankResults(knowledge.filter(function (item) {
      return scoreKnowledge(item, normalisedQuery) > 0;
    }), normalisedQuery);
  }

  function filterKnowledge(category) {
    if (!category || category === "全部") return getKnowledge();
    return getKnowledge().filter(function (item) { return item.category === category; });
  }

  function getKnowledgeById(id) {
    return getKnowledge().filter(function (item) { return item.id === id; })[0];
  }

  global.AppSearch = {
    searchKnowledge: searchKnowledge,
    filterKnowledge: filterKnowledge,
    rankResults: rankResults,
    getKnowledgeById: getKnowledgeById,
    normalise: normalise
  };
})(window);
