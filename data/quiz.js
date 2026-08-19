(function (global) {
  "use strict";

  global.AppData = global.AppData || {};
  global.AppData.quiz = {
    final: {
      id: "final",
      mode: "final",
      targetQuestionCount: 20,
      passScore: 80,
      questions: [
        {
          id: "q01",
          knowledgeArea: "Product System",
          moduleId: "module-01",
          question: "下列哪一組最符合目前 Product Learning Center 對 BiomateSWISS 植體系統的整體理解架構？",
          options: [{ id: "A", text: "Fixture + Marketing + Pricing + Distribution" }, { id: "B", text: "Surface + Implant Design + Prosthetic System + Surgical Workflow" }, { id: "C", text: "Implant + Sales + Research + Promotion" }, { id: "D", text: "Surface + Packaging + Logistics + Training" }],
          correctAnswer: "B",
          explanation: "Training Content 將 BiomateSWISS 植體系統建立為 Surface、Implant Design、Prosthetic System 與 Surgical Workflow 四個相互關聯的面向。",
          relatedModule: "module-01",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q02",
          knowledgeArea: "Product System",
          moduleId: "module-01",
          question: "在植體系統架構中，基台（Abutment）主要位於哪一個關係中？",
          options: [{ id: "A", text: "Fixture 與後續贋復修復之間" }, { id: "B", text: "Drill 與 Fixture Surface 之間" }, { id: "C", text: "Surface Treatment 與 Bone Condition 之間" }, { id: "D", text: "Research Evidence 與 Surgical Instruments 之間" }],
          correctAnswer: "A",
          explanation: "Module 01 建立的理解流程為 Fixture → Connection → Abutment → Prosthetic Restoration，因此基台是植體本體與後續贋復流程的重要連接角色。",
          relatedModule: "module-01",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q03",
          knowledgeArea: "Product System",
          moduleId: "module-01",
          question: "Learning Module 與 Knowledge Base 的主要差異為何？",
          options: [{ id: "A", text: "Learning Module 用來查 Catalog Number，Knowledge Base 用來考試" }, { id: "B", text: "Learning Module 強調系統化理解，Knowledge Base 強調工作中的快速查詢" }, { id: "C", text: "兩者功能完全相同" }, { id: "D", text: "Knowledge Base 只能查研究資料" }],
          correctAnswer: "B",
          explanation: "專案正式把 Learn 與 Search / Lookup 定義成不同使用情境：Learning Module 負責建立理解脈絡，Knowledge Base 負責快速查詢。",
          relatedModule: "module-01",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q04",
          knowledgeArea: "Product System",
          moduleId: "module-01",
          question: "下列哪一項屬於植體系統主要組成的學習範圍？",
          options: [{ id: "A", text: "Fixture、Abutment、Prosthetic Parts、Surgical Instruments" }, { id: "B", text: "CRM、ERP、MES、SCM" }, { id: "C", text: "SEO、SEM、EDM、Social Media" }, { id: "D", text: "Price、Promotion、Place、Product" }],
          correctAnswer: "A",
          explanation: "Module 01 的產品系統內容包含植體本體（Fixture）、基台（Abutment）、贋復零件及手術器械。",
          relatedModule: "module-01",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q05",
          knowledgeArea: "PDL Technology",
          moduleId: "module-02",
          question: "PDL® 的英文全名為何？",
          options: [{ id: "A", text: "Precision Dental Loading" }, { id: "B", text: "Precision Dimension Laser" }, { id: "C", text: "Primary Design Layer" }, { id: "D", text: "Prosthetic Digital Link" }],
          correctAnswer: "B",
          explanation: "本網站專有名詞規格定義 PDL® 第一次出現時使用「PDL®（Precision Dimension Laser）」。",
          relatedModule: "module-02",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q06",
          knowledgeArea: "PDL Technology",
          moduleId: "module-02",
          question: "下列哪一組最符合 Module 02 對 PDL® 表面技術的核心理解順序？",
          options: [{ id: "A", text: "Laser → Microchannel → Micro-Nano Structure → Oxide Layer" }, { id: "B", text: "Abutment → Screw → Crown → Impression" }, { id: "C", text: "Bone → Torque → Price → Catalog" }, { id: "D", text: "Cell → Marketing → Sales → Research" }],
          correctAnswer: "A",
          explanation: "Module 02 的核心 Mental Model 為 PDL® Laser → Microchannel → Micro-Nano Structure → Oxide Layer。",
          relatedModule: "module-02",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q07",
          knowledgeArea: "PDL Technology",
          moduleId: "module-02",
          question: "PDL® 雷射處理後的表面結構，來源文件主要描述為哪一種形式？",
          options: [{ id: "A", text: "完全光滑且沒有結構" }, { id: "B", text: "微通道與微奈米整合結構" }, { id: "C", text: "只有單一巨觀凹槽" }, { id: "D", text: "塑膠表面塗層" }],
          correctAnswer: "B",
          explanation: "PDL® Research Manual 描述雷射處理形成 micro-channels、nano-structures，以及 micro-nano integrated structure。",
          relatedModule: "module-02",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q08",
          knowledgeArea: "PDL Technology",
          moduleId: "module-02",
          question: "下列哪一項最適合描述 PDL® 表面研究中「Microchannel」的學習重點？",
          options: [{ id: "A", text: "只是產品外觀裝飾" }, { id: "B", text: "是理解細胞導引與表面結構的重要概念" }, { id: "C", text: "只用來辨認產品包裝" }, { id: "D", text: "與表面生物反應無關" }],
          correctAnswer: "B",
          explanation: "Research Manual 描述雷射形成的線性微通道可與細胞方向性移動及細胞導引研究相關聯。",
          relatedModule: "module-02",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q09",
          knowledgeArea: "Biological / Research",
          moduleId: "module-03",
          question: "Module 03 的 Biological Response Chain 中，哪一項屬於 PDL® 表面之後的重要生物反應概念？",
          options: [{ id: "A", text: "Cell Adhesion" }, { id: "B", text: "Catalog Number" }, { id: "C", text: "Product Pricing" }, { id: "D", text: "Distribution Channel" }],
          correctAnswer: "A",
          explanation: "Module 03 的核心 Biological Response Chain 從 PDL® Surface 延伸至 Cell Adhesion、Cell Guidance、Osteoblast response、Mineralization、Angiogenesis 與 Osseointegration。",
          relatedModule: "module-03",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q10",
          knowledgeArea: "Biological / Research",
          moduleId: "module-03",
          question: "PDL® 與 SLA 表面的細胞移動研究中，PDL® 表面上的細胞主要呈現什麼特徵？",
          options: [{ id: "A", text: "完全停止移動" }, { id: "B", text: "沿微通道呈方向性排列與移動" }, { id: "C", text: "只向遠離植體的方向移動" }, { id: "D", text: "與 SLA 完全相同" }],
          correctAnswer: "B",
          explanation: "Research Manual 記載 time-lapse microscopy 觀察到 PDL® 表面上的細胞沿 micro-channel 結構呈現 aligned elongation 與 directional movement；SLA 表面則較為隨機分散。",
          relatedModule: ["module-03", "module-04"],
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q11",
          knowledgeArea: "Biological / Research",
          moduleId: "module-04",
          question: "下列哪一項最符合 National Taiwan University 相關研究所觀察的方向？",
          options: [{ id: "A", text: "Pre-osteoblast proliferation 與 extracellular mineralization" }, { id: "B", text: "產品售價" }, { id: "C", text: "包裝設計" }, { id: "D", text: "經銷商數量" }],
          correctAnswer: "A",
          explanation: "Research Manual 中 National Taiwan University 相關研究報告包含 pre-osteoblast proliferation、osteogenic markers 與 extracellular mineralization。",
          relatedModule: "module-04",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q12",
          knowledgeArea: "Biological / Research",
          moduleId: "module-04",
          question: "關於 In Vitro 研究，下列哪一種解讀方式較正確？",
          options: [{ id: "A", text: "In Vitro 結果可以直接保證所有患者的 Clinical Outcome" }, { id: "B", text: "In Vitro 結果可以作為生物反應的研究證據，但不可直接等同臨床結果" }, { id: "C", text: "In Vitro 完全沒有任何研究價值" }, { id: "D", text: "In Vitro 等同於十年以上臨床追蹤" }],
          correctAnswer: "B",
          explanation: "本專案的 Content Safety Rule 明確要求 In Vitro 不等於 Clinical Outcome，例如 Day 18 Mineralization 不可以解讀成 18 天臨床完成 Osseointegration。",
          relatedModule: "module-04",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q13",
          knowledgeArea: "Implant Design",
          moduleId: "module-05",
          question: "Module 05 的 Implant Design Mental Model 由哪三個面向組成？",
          options: [{ id: "A", text: "Surface Design + Fixture Geometry + Connection Design" }, { id: "B", text: "Marketing + Sales + Distribution" }, { id: "C", text: "Torque + Price + Catalog" }, { id: "D", text: "Research + Advertising + Branding" }],
          correctAnswer: "A",
          explanation: "Module 05 將植體設計整理為 Surface Design、Fixture Geometry 與 Connection Design 三個核心面向。",
          relatedModule: "module-05",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q14",
          knowledgeArea: "Implant Design",
          moduleId: "module-05",
          question: "下列哪一項是 Module 05 所列出的植體連接設計概念？",
          options: [{ id: "A", text: "Internal Hexagon" }, { id: "B", text: "QR Code" }, { id: "C", text: "USB-C" }, { id: "D", text: "Magnetic Connector" }],
          correctAnswer: "A",
          explanation: "Module 05 明確包含 Internal Hexagon 與 10° Morse Taper 等 connection design 主題；Guidance 亦將 Internal Hexagon 與 10° Morse Taper 列為設計內容。 ",
          relatedModule: "module-05",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q15",
          knowledgeArea: "Implant Design",
          moduleId: "module-05",
          question: "Guidance 對 Internal Hex Design 的主要功能描述為何？",
          options: [{ id: "A", text: "協助避免基台旋轉並增加連接穩定性" }, { id: "B", text: "用來調整包裝顏色" }, { id: "C", text: "用來增加植體長度" }, { id: "D", text: "用來標示價格" }],
          correctAnswer: "A",
          explanation: "Guidance 的 Internal Hex Design 說明指出其目的包含避免 abutment rotation，並提升 fixture 與 abutment connection 的穩定性。",
          relatedModule: "module-05",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q16",
          knowledgeArea: "Implant Design",
          moduleId: "module-05",
          question: "Biomate / Biomate Plus 的 Arced Root Design 在 Guidance 中主要強調哪一項設計目的？",
          options: [{ id: "A", text: "避免尖銳底部對重要解剖結構造成刺激或傷害" }, { id: "B", text: "增加包裝容量" }, { id: "C", text: "方便產品貼標" }, { id: "D", text: "增加基台顏色選擇" }],
          correctAnswer: "A",
          explanation: "Guidance 說明 arced bottom / arced root design 的目的之一，是避免對骨骼、神經或鄰近重要結構造成刺激或傷害。",
          relatedModule: "module-05",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q17",
          knowledgeArea: "Protocol",
          moduleId: "module-06",
          question: "Module 06 的 Correct Protocol Use 邏輯，第一步應先考量什麼？",
          options: [{ id: "A", text: "Bone Condition" }, { id: "B", text: "Product Logo" }, { id: "C", text: "Sales Price" }, { id: "D", text: "Social Media Content" }],
          correctAnswer: "A",
          explanation: "Module 06 的核心操作邏輯從 Bone Condition 開始，再進入 Correct Implant System、Correct Instrument、Correct Preparation、Controlled Torque 與 Correct Protocol。",
          relatedModule: "module-06",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q18",
          knowledgeArea: "Protocol",
          moduleId: "module-06",
          question: "若題目涉及 Torque、Drill Sequence、Diameter 或 Clinical Procedure，而 Markdown 內容存在疑義，正確處理方式為何？",
          options: [{ id: "A", text: "由 AI 推測最合理答案" }, { id: "B", text: "依一般網路知識回答" }, { id: "C", text: "回原始 PDF 或最新正式 IFU 驗證" }, { id: "D", text: "隨機選一個答案" }],
          correctAnswer: "C",
          explanation: "專案 Source of Truth Rule 明確要求，涉及 Torque、Drill Sequence、Diameter、Length、Tap、Countersink、Profile Drill、Warning 或 Clinical Procedure 等精確內容，若 Markdown 有疑義，必須回原始 PDF / 最新正式 IFU。",
          relatedModule: "module-06",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q19",
          knowledgeArea: "Protocol",
          moduleId: "module-06",
          question: "關於 Immediate Implant Evidence，下列哪一項最符合本專案的 Content Safety Rule？",
          options: [{ id: "A", text: "有 Immediate Implant Evidence 就代表所有患者都適合 Immediate Loading" }, { id: "B", text: "Immediate Implant Evidence 不應直接解讀成所有患者都可以 Immediate Loading" }, { id: "C", text: "Immediate Implant 與 Immediate Loading 完全相同" }, { id: "D", text: "不需要考慮 Patient Condition" }],
          correctAnswer: "B",
          explanation: "本專案明確規定 Immediate Implant Evidence 不等於所有患者都可以 Immediate Loading。",
          relatedModule: "module-06",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        },
        {
          id: "q20",
          knowledgeArea: "Protocol",
          moduleId: "module-06",
          question: "在正式產品學習平台中，對未完成來源驗證的精確 Clinical / Product Data，最適合的做法為何？",
          options: [{ id: "A", text: "先當成正式答案使用" }, { id: "B", text: "顯示 pending 並在正式使用前完成來源驗證" }, { id: "C", text: "刪除所有來源資訊" }, { id: "D", text: "由使用者自己猜" }],
          correctAnswer: "B",
          explanation: "本專案從 Module、Knowledge、Research 到 Quiz 都使用 verified / pending 邏輯；尤其高風險精確資訊必須在正式使用前完成 Source Verification。Guidance 本身也特別提醒 dimensions、torque、drill sequence、compatibility 等資訊應回原始 PDF 核對。",
          relatedModule: "module-06",
          source: "Final Quiz Verified Dataset v1.0",
          verificationStatus: "verified"
        }
      ],
      verificationStatus: "pending"
    },
    modules: []
  };
})(window);
