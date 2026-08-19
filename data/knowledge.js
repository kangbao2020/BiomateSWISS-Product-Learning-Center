(function (global) {
  "use strict";

  global.AppData = global.AppData || {};
  global.AppData.knowledge = [
    {
      id: "kb-implant-system",
      category: "產品系統",
      title: "BiomateSWISS 植體系統是什麼？",
      question: "如何從系統架構認識 BiomateSWISS 植體系統？",
      summary: "以系統架構方式認識植體本體、基台、贋復零件與手術器械之間的關係。",
      keyFacts: ["本項目用於建立產品系統的整體理解框架。", "精確產品規格與適用資訊待來源驗證。"],
      relatedTerms: ["BiomateSWISS", "植體系統", "Implant System", "Fixture", "Abutment"],
      relatedModules: ["module-01"],
      relatedKnowledge: ["kb-fixture", "kb-abutment", "kb-surgical-instruments"],
      sources: [{ title: "2026 BiomateSWISS The Guidance", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "kb-fixture",
      category: "產品系統",
      title: "植體本體（Fixture）是什麼？",
      question: "植體本體在產品系統中的角色是什麼？",
      summary: "植體本體是用來理解表面技術、植體設計與後續系統流程關係的核心項目。",
      keyFacts: ["本知識項目聚焦於系統角色，不提供尺寸或型號資訊。", "精確產品資料待來源驗證。"],
      relatedTerms: ["植體本體", "Fixture", "Implant Fixture", "植體"],
      relatedModules: ["module-01"],
      relatedKnowledge: ["kb-implant-system", "kb-abutment", "kb-pdl-overview"],
      sources: [{ title: "2026 BiomateSWISS The Guidance", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "kb-abutment",
      category: "產品系統",
      title: "基台（Abutment）是什麼？",
      question: "基台在植體系統中扮演什麼角色？",
      summary: "基台用於理解植體本體與後續贋復流程之間的系統連接關係。",
      keyFacts: ["本項目僅說明系統角色，不提供個別零件規格。", "精確產品資料待來源驗證。"],
      relatedTerms: ["基台", "Abutment", "連接結構", "Connection"],
      relatedModules: ["module-01"],
      relatedKnowledge: ["kb-implant-system", "kb-fixture"],
      sources: [{ title: "2026 BiomateSWISS The Guidance", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "kb-pdl-overview",
      category: "表面技術",
      title: "PDL® 是什麼？",
      question: "PDL® 在產品系統中代表什麼概念？",
      summary: "PDL®（Precision Dimension Laser）是連結植體本體表面技術與後續學習模組的概念主題。",
      keyFacts: ["本項目僅提供概念入口，詳細技術內容將於 Module 02 延伸。", "精確技術資訊待來源驗證。"],
      relatedTerms: ["PDL", "PDL®", "Precision Dimension Laser", "表面", "Surface"],
      relatedModules: ["module-02", "module-03"],
      relatedKnowledge: ["kb-pdl-microchannel", "kb-pdl-research-topics", "kb-fixture"],
      sources: [{ title: "2026 PDL® Research Manual", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "kb-pdl-microchannel",
      category: "表面技術",
      title: "PDL® Microchannel 是什麼？",
      question: "PDL® Microchannel 屬於哪一類知識主題？",
      summary: "PDL® Microchannel 為表面技術相關的知識主題；精確定義與產品資訊待正式資料確認。",
      keyFacts: [],
      relatedTerms: ["PDL", "PDL®", "Microchannel", "微通道", "表面技術"],
      relatedModules: ["module-02"],
      relatedKnowledge: ["kb-pdl-overview", "kb-pdl-research-topics"],
      sources: [{ title: "2026 PDL® Research Manual", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "kb-implant-design",
      category: "植體設計",
      title: "植體設計包含哪些重要概念？",
      question: "如何建立植體設計的基礎理解？",
      summary: "植體設計是產品系統中的學習主題，本項目提供概念入口，不包含精確規格。",
      keyFacts: ["設計概念應與產品系統及後續學習內容一併理解。", "精確設計資訊待來源驗證。"],
      relatedTerms: ["植體設計", "Implant Design", "設計", "Design"],
      relatedModules: ["module-05"],
      relatedKnowledge: ["kb-implant-system", "kb-fixture"],
      sources: [],
      verificationStatus: "pending"
    },
    {
      id: "kb-surgical-instruments",
      category: "使用流程",
      title: "Surgical Instruments 在流程中的角色？",
      question: "手術器械在產品系統流程中如何被理解？",
      summary: "手術器械對應規劃、部位準備、植體置放與後續贋復流程的系統角色。",
      keyFacts: ["本項目不包含 Drill Sequence、RPM、Torque 或其他操作參數。", "精確使用資訊待來源驗證。"],
      relatedTerms: ["Surgical Instruments", "手術器械", "手術流程", "Surgical Workflow", "流程"],
      relatedModules: ["module-01", "module-06"],
      relatedKnowledge: ["kb-implant-system", "kb-fixture"],
      sources: [{ title: "2026 BiomateSWISS The Guidance", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "kb-pdl-research-topics",
      category: "研究證據",
      title: "PDL® 有哪些相關研究主題？",
      question: "哪些研究主題可作為 PDL® 的延伸閱讀入口？",
      summary: "可從表面與細胞附著、血管新生及植體周圍骨變化等主題進一步閱讀研究資料。",
      keyFacts: ["本項目只提供研究主題入口，不呈現研究結論或統計數據。", "各研究資料需依來源完成驗證。"],
      relatedTerms: ["PDL", "PDL®", "研究證據", "Research Evidence", "Surface", "Angiogenesis"],
      relatedModules: ["module-04"],
      relatedKnowledge: ["kb-pdl-overview", "kb-pdl-microchannel"],
      sources: [{ title: "2026 PDL® Research Manual", verificationStatus: "pending" }],
      verificationStatus: "pending"
    }
  ];
})(window);
