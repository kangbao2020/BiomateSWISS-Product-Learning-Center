(function (global) {
  "use strict";
  global.AppData = global.AppData || {};
  global.AppData.research = [
    {
      id: "surface-cell-adhesion",
      title: "Surface & Cell Adhesion",
      question: "PDL® 表面如何影響細胞附著？",
      source: null,
      publicationYear: null,
      url: null,
      verificationStatus: "pending"
    },
    {
      id: "angiogenesis",
      title: "Angiogenesis",
      question: "表面結構與血管新生之間有什麼關係？",
      source: null,
      publicationYear: null,
      url: null,
      verificationStatus: "pending"
    },
    {
      id: "marginal-bone-loss",
      title: "Marginal Bone Loss",
      question: "研究如何觀察植體周圍骨變化？",
      source: null,
      publicationYear: null,
      url: null,
      verificationStatus: "pending"
    }
  ];

  global.AppData.research = [
    {
      id: "research-surface-cell-adhesion",
      category: "表面與細胞附著",
      title: "Surface & Cell Adhesion",
      titleZh: "表面與細胞附著",
      researchQuestion: "PDL® 表面如何影響細胞附著？",
      overview: "此主題提供表面與細胞附著關係的研究閱讀入口，協助建立後續資料查閱脈絡。",
      evidenceSummary: null,
      observations: [],
      limitations: [],
      relatedKnowledge: ["kb-pdl-overview", "kb-fixture"],
      relatedModules: ["module-02", "module-04"],
      sources: [{ title: "2026 PDL® Research Manual", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "research-angiogenesis",
      category: "血管新生",
      title: "Angiogenesis",
      titleZh: "血管新生",
      researchQuestion: "表面結構與血管新生之間有什麼關係？",
      overview: "此主題作為閱讀表面結構與血管新生相關研究資料的入口。",
      evidenceSummary: null,
      observations: [],
      limitations: [],
      relatedKnowledge: ["kb-pdl-overview", "kb-pdl-research-topics"],
      relatedModules: ["module-02", "module-04"],
      sources: [{ title: "2026 PDL® Research Manual", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "research-marginal-bone-loss",
      category: "骨組織變化",
      title: "Marginal Bone Loss",
      titleZh: "邊緣骨流失",
      researchQuestion: "研究如何觀察植體周圍骨變化？",
      overview: "此主題提供植體周圍骨變化研究的閱讀入口，不呈現未驗證的結果或數據。",
      evidenceSummary: null,
      observations: [],
      limitations: [],
      relatedKnowledge: ["kb-pdl-research-topics", "kb-implant-system"],
      relatedModules: ["module-04"],
      sources: [{ title: "2026 PDL® Research Manual", verificationStatus: "pending" }],
      verificationStatus: "pending"
    },
    {
      id: "research-pdl-surface",
      category: "表面技術",
      title: "PDL® Surface Research",
      titleZh: "PDL® 表面技術研究",
      researchQuestion: "哪些研究主題可作為理解 PDL® 表面技術的延伸入口？",
      overview: "本條目整理 PDL® 表面技術相關研究的閱讀方向，詳細內容仍須依來源驗證。",
      evidenceSummary: null,
      observations: [],
      limitations: [],
      relatedKnowledge: ["kb-pdl-overview", "kb-pdl-microchannel", "kb-pdl-research-topics"],
      relatedModules: ["module-02", "module-04"],
      sources: [{ title: "2026 PDL® Research Manual", verificationStatus: "pending" }],
      verificationStatus: "pending"
    }
  ];
})(window);
