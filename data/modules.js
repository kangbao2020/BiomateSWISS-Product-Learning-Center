(function (global) {
  "use strict";
  global.AppData = global.AppData || {};
  global.AppData.modules = [
    {
      id: "module-01",
      number: "01",
      category: "Product Foundation",
      title: "認識 BiomateSWISS 植體系統",
      summary: "從完整植體產品系統架構開始，建立各組成項目的學習脈絡。",
      status: "開始學習",
      cta: "開始學習",
      description: "從完整植體產品系統的角度，建立 BiomateSWISS 植體系統的基本架構概念。",
      objectives: [
        "建立 BiomateSWISS 植體系統的基本架構概念。",
        "認識 Biomate 與 Biomate Plus 兩個植體系統。",
        "理解植體本體（Fixture）、基台（Abutment）、贋復零件與手術器械在整體系統中的角色。",
        "了解 PDL® 表面技術與植體系統的關聯。",
        "建立後續學習產品設計、表面技術、研究證據與正確使用方式所需要的基礎架構。"
      ],
      mentalModel: ["Surface", "Implant Design", "Prosthetic System", "Surgical Workflow"],
      lessonNavigation: [
        { id: "objectives", label: "學習目標" },
        { id: "system-overview", label: "植體系統概覽" },
        { id: "biomate-comparison", label: "Biomate 與 Biomate Plus" },
        { id: "fixture", label: "植體本體" },
        { id: "abutment", label: "基台" },
        { id: "prosthetic-parts", label: "贋復零件" },
        { id: "surgical-instruments", label: "手術器械" },
        { id: "pdl-role", label: "PDL® 的角色" },
        { id: "takeaways", label: "重點整理" },
        { id: "sources", label: "來源" }
      ],
      sections: [
        {
          id: "system-overview",
          title: "植體系統概覽",
          content: "認識植體產品時，不應只把注意力放在植體本體（Implant Fixture）本身。BiomateSWISS 的產品與教育資料涵蓋 Implant Fixture、Abutment & Screw、Prosthetic Parts、Surgical Instruments、Surface Treatment、Implant Design 與 Surgical Protocol；本學習中心以表面技術、植體設計、贋復系統與手術流程建立整體理解架構。",
          visual: "system-overview"
        },
        {
          id: "biomate-comparison",
          title: "Biomate 與 Biomate Plus",
          content: "BiomateSWISS 產品資料包含 Biomate Implant System 與 Biomate Plus Implant System。兩者具有不同的植體設計概念與設計特徵；本課先建立兩者為不同 Implant Systems 的概念，詳細 Fixture Design 與產品規格將於後續產品設計內容進一步學習。",
          comparison: [
            { title: "Biomate", description: "BiomateSWISS 產品資料所涵蓋的植體系統。", verificationStatus: "verified" },
            { title: "Biomate Plus", description: "BiomateSWISS 產品資料所涵蓋、具不同設計概念與特徵的植體系統。", verificationStatus: "verified" }
          ]
        },
        {
          id: "fixture",
          title: "植體本體（Fixture）",
          content: "Fixture 是 Implant System 中重要的核心產品。BiomateSWISS 的產品資料分別提供 Biomate 與 Biomate Plus Fixture 的設計與產品資訊；理解 Fixture 時，需涵蓋 Implant body design、Thread design、Connection design、Root form 與 Surface treatment。不同 Implant System 具有自己的 Fixture Design，兩個系統的 Fixture 資訊不得直接互換。"
        },
        {
          id: "abutment",
          title: "基台（Abutment）",
          content: "BiomateSWISS Guidance 將 Abutment & Screw 列為重要產品內容。Abutment 是植體系統後續贋復階段的重要組成；本課建立「Fixture → Abutment → Prosthetic Restoration」的基本系統概念，不展開個別零件規格。",
          visual: "abutment-flow"
        },
        {
          id: "prosthetic-parts",
          title: "贋復零件",
          content: "完整 Implant System 除 Fixture 與 Abutment 外，也包含支援後續贋復流程的 Prosthetic Parts。本課建立「Implant → Abutment → Screw → Prosthetic Parts」的產品關係概念；具體零件、Catalog Number 與 Compatibility 不在本課展開。"
        },
        {
          id: "surgical-instruments",
          title: "手術器械",
          content: "BiomateSWISS Guidance 包含 Surgical Instruments 與 Surgical Protocol 資訊。本課僅建立 Implant Product 與 Surgical Workflow 相互關聯的概念；詳細器械使用方式、操作參數與手術程序將於後續內容依授權資料說明。",
          visual: "workflow"
        },
        {
          id: "pdl-role",
          title: "PDL® 在產品系統中的角色",
          content: "Precision Dimension Laser（PDL®）是 BiomateSWISS 植體表面處理相關技術，亦為植體表面技術的重要組成。本課僅建立 PDL® 與植體系統的關聯；Micro-channel、Micro/Nano Structure、Oxide Layer、詳細生物反應與詳細研究結果將於後續 Modules 說明。",
          visual: "pdl-bridge"
        }
      ],
      whyItMatters: "本學習中心以表面技術、植體設計、贋復系統與手術流程四個面向建立產品系統的 Mental Model：理解植體表面的技術與特徵、Fixture 本身的設計、Fixture／Abutment／Screw／Prosthetic Parts 的產品關係，以及產品與正確 Surgical Instruments／Protocol 的關聯。此為 Learning Center Educational Framework，不是官方產品分類。",
      research: ["research-surface-cell-adhesion", "research-angiogenesis"],
      takeaways: ["完整植體產品系統", "Biomate 與 Biomate Plus", "產品組成與手術流程", "PDL® 表面技術"],
      sources: [
        { title: "2026_BiomateSWISS_The_Guidance_AI-RAG", verificationStatus: "verified" },
        { title: "2026英文版PDL_Research_Manual_AI-RAG", verificationStatus: "verified" }
      ],
      previousModule: { label: "返回學習中心", href: "#/learn" },
      nextModule: { id: "module-02", label: "理解 PDL® 雷射表面技術", href: "#/learn/module-02" },
      href: "#/learn/module-01",
      verificationStatus: "verified"
    },
    {
      id: "module-02",
      number: "02",
      category: "表面技術",
      title: "理解 PDL® 雷射表面技術",
      summary: "理解 PDL® 雷射表面處理與植體表面結構的基本概念。",
      status: "尚未開始",
      cta: "開始學習",
      description: "認識 PDL® 雷射表面處理技術、表面特徵與氧化層的關聯，建立進入生物反應（Biological Response）學習前的表面技術基礎。",
      objectives: [
        "說明 PDL® 的正式名稱與基本技術概念。",
        "理解 PDL® 如何透過雷射處理植體鈦表面。",
        "認識 PDL® 植體表面的微通道（Micro-channel）、微／奈米結構（Micro/Nano Structure）與三維表面結構（3D Surface Architecture）。",
        "理解 PDL® 植體表面與氧化層（Oxide Layer）的關係。",
        "區分表面結構特徵與生物反應／臨床結果，避免直接將兩者畫上等號。",
        "建立進入 Module 03 生物反應前所需要的表面技術基礎。"
      ],
      mentalModel: ["PDL® 雷射表面處理", "表面結構＋氧化層", "生物反應（Module 03）", "研究證據（Module 04）"],
      lessonNavigation: [
        { id: "objectives", label: "學習目標" },
        { id: "what-is-pdl", label: "什麼是 PDL®？" },
        { id: "laser-surface-architecture", label: "雷射處理與表面結構" },
        { id: "micro-channel", label: "微通道" },
        { id: "micro-nano-structure", label: "微／奈米結構" },
        { id: "three-dimensional-surface", label: "三維表面結構" },
        { id: "oxide-layer", label: "氧化層" },
        { id: "pdl-vs-sla", label: "PDL® 與 SLA" },
        { id: "takeaways", label: "重點整理" },
        { id: "sources", label: "來源" }
      ],
      sections: [
        {
          id: "what-is-pdl",
          title: "什麼是 PDL®？",
          content: "PDL® 是 Precision Dimension Laser。在 BiomateSWISS 的產品與研究資料中，PDL® 被描述為應用於植體表面的雷射表面處理技術。PDL® 利用雷射能量處理鈦表面，形成具有微米與奈米尺度特徵的表面結構，並伴隨氧化鈦層（Titanium Oxide Layer）的形成。核心概念是「PDL®＝雷射表面處理技術（Laser Surface Treatment Technology）」。"
        },
        {
          id: "laser-surface-architecture",
          title: "從雷射處理到表面結構",
          content: "PDL® 雷射表面處理（Laser Surface Treatment）作用於鈦表面後，可從表面結構（Surface Architecture）理解其結構特徵：表面具有微通道結構（Micro-channel Structure）、微米與奈米尺度的結構特徵，以及具有微／奈米特徵的三維孔洞／線性孔洞結構（Three-Dimensional Pore／Linear Pore Structure）。PDL® 可形成具有微通道、微／奈米與三維特徵的植體表面結構。"
        },
        {
          id: "micro-channel",
          title: "微通道（Micro-channel）",
          content: "微通道是 PDL® 表面結構的重要特徵。進階技術資訊（Advanced Technical Information）：微通道深度（Micro-channel Depth）為 45 μm。45 μm 僅指微通道深度，不得與氧化層厚度混淆；此數值不作為必須背誦的核心學習要求。"
        },
        {
          id: "micro-nano-structure",
          title: "微／奈米結構（Micro/Nano Structure）",
          content: "PDL® 表面不只具有微米尺度結構。已驗證來源描述包括微通道（Micro-channels）、微米尺度軌跡（Micron-scale tracks）、奈米結構（Nano structures）與微奈米整合結構（Micro-Nano integrated structure）；因此 PDL® 表面應從微米與奈米兩個尺度理解。本節不展開生物反應。"
        },
        {
          id: "three-dimensional-surface",
          title: "三維表面結構（3D Surface Architecture）",
          content: "已驗證來源使用微奈米複合三維孔洞（micro-nano complex 3D pore）及微奈米混合三維線性孔洞結構（micro-nano hybrid three-dimensional linear pore structures）描述表面特徵。本學習中心以「微／奈米＋三維表面結構」作教育性整理，並非新增的官方技術名稱或商標。"
        },
        {
          id: "oxide-layer",
          title: "氧化層（Oxide Layer）",
          content: "PDL® 雷射表面處理與氧化鈦層的形成相關。進階技術資訊：上方／脊部區域（Upper／Ridge Area）的氧化層厚度約為 110 nm；通道內部／底部區域（Inner Channel／Bottom Area）的氧化層厚度約為 45 nm。請清楚區分：45 μm 是微通道深度，45 nm 是通道內部／底部區域的氧化層厚度；兩者不得混用。"
        },
        {
          id: "pdl-vs-sla",
          title: "PDL® 與 SLA",
          content: "PDL® 與 SLA 採用不同的表面處理（Surface Processing），並形成不同的表面結構。本課的核心訊息是先理解「不同」，不要直接推論「誰比較好」；本課不將兩者比較延伸為癒合、骨整合或臨床結果的優劣結論。"
        }
      ],
      whyItMatters: "表面特徵（Surface Feature）不等於臨床結果（Clinical Outcome）。應依序理解表面特徵 → 生物反應 → 研究證據 → 臨床解讀；Module 02 主要處理表面特徵／表面技術，不將表面特徵直接轉換成生物學益處或臨床結果。Module 02 回答「PDL® 植體表面是什麼？」；Module 03 將接續探討這樣的表面結構與生物反應有何關係。PDL® Research Manual 涵蓋細胞黏附、細胞導引、前成骨細胞反應、礦化、血管新生與骨整合等研究領域，本課不展開其研究結果。",
      research: ["research-surface-cell-adhesion", "research-angiogenesis"],
      takeaways: ["PDL® 雷射表面處理", "表面結構＋氧化層", "微通道深度 ≠ 氧化層厚度", "表面特徵 ≠ 臨床結果"],
      sources: [
        { title: "2026英文版PDL_Research_Manual_AI-RAG", verificationStatus: "verified" },
        { title: "2026_BiomateSWISS_The_Guidance_AI-RAG", verificationStatus: "verified" }
      ],
      previousModule: { id: "module-01", label: "認識 BiomateSWISS 植體系統", href: "#/learn/module-01" },
      nextModule: { id: "module-03", label: "PDL® 為什麼重要？", href: "#/learn/module-03" },
      href: "#/learn/module-02",
      verificationStatus: "verified"
    },
    {
      id: "module-03",
      number: "03",
      category: "生物反應",
      title: "PDL® 為什麼重要？",
      summary: "從觀察到的生物反應研究，建立 PDL® 植體表面的證據地圖。",
      status: "尚未開始",
      cta: "開始學習",
      description: "認識 PDL® 植體表面相關的生物反應研究，並區分體外試驗（In Vitro）／實驗性證據、動物試驗證據與臨床結果。",
      objectives: [
        "理解為什麼研究 PDL® 植體表面時，需要進一步觀察生物反應。",
        "認識與 PDL® 植體表面相關的細胞黏附（Cell Adhesion）與細胞導引（Cell Guidance）研究。",
        "認識前成骨細胞增殖（Pre-osteoblast Proliferation）、成熟／成骨反應（Osteogenic Response）與礦化（Mineralization）等研究主題。",
        "了解 PDL® 植體表面相關研究也涵蓋間質幹細胞（Mesenchymal Stem Cells, MSCs）與血管新生反應（Angiogenic Response）。",
        "區分體外試驗／實驗性生物學證據與臨床結果。",
        "理解生物反應證據與骨整合研究之間的關係。"
      ],
      mentalModel: ["PDL® 表面結構", "觀察到的生物反應", "與骨整合的關聯", "臨床解讀需要獨立證據"],
      lessonNavigation: [
        { id: "objectives", label: "學習目標" },
        { id: "surface-to-biological-response", label: "表面結構與生物反應" },
        { id: "cell-adhesion", label: "細胞黏附" },
        { id: "cell-guidance", label: "細胞導引" },
        { id: "pre-osteoblast-proliferation", label: "前成骨細胞增殖" },
        { id: "maturation-osteogenic-response", label: "成熟與成骨反應" },
        { id: "mineralization", label: "礦化" },
        { id: "msc-response", label: "間質幹細胞反應" },
        { id: "angiogenic-response", label: "血管新生反應" },
        { id: "osseointegration-relevance", label: "與骨整合的關聯" },
        { id: "evidence-level", label: "證據層級" },
        { id: "bridge-to-module-04", label: "銜接 Module 04" },
        { id: "takeaways", label: "重點整理" },
        { id: "sources", label: "來源" }
      ],
      sections: [
        {
          id: "surface-to-biological-response",
          title: "從表面結構進入生物反應",
          content: "Module 02 已建立「PDL® 雷射表面處理 → 表面結構＋氧化層」的概念；Module 03 接續探討細胞與生物環境如何回應這樣的表面。2026 PDL® Research Manual 收錄細胞黏附、細胞導引、前成骨細胞反應、成骨反應、礦化、間質幹細胞反應、血管新生反應與骨整合相關研究，協助建立生物反應知識地圖。"
        },
        {
          id: "cell-adhesion",
          title: "細胞黏附（Cell Adhesion）",
          content: "證據層級（Evidence Level）：體外試驗（In Vitro）／實驗性證據（Experimental Evidence）。PDL® Research Manual 收錄雷射修飾鈦表面（laser-modified titanium surface）與成骨細胞相關細胞、間質幹細胞等細胞之黏附反應研究；部分研究描述增強細胞黏附／黏附潛能（enhanced cell adhesion／adhesion potential）。正式理解為：PDL® 植體表面已有體外試驗／實驗性證據研究其與細胞黏附的關係，不代表人體中必然產生更好的骨細胞黏附。"
        },
        {
          id: "cell-guidance",
          title: "細胞導引（Cell Guidance）",
          content: "證據層級：體外試驗（In Vitro）。研究觀察包括定向延伸（aligned elongation）、定向移動（directional movement），以及與微通道／線性孔洞結構方向相關的排列特徵；比較研究亦描述 PDL® 與 SLA 表面呈現不同的細胞遷移模式（Cell Migration Pattern）。正式理解為：PDL® 表面結構已有體外試驗證據顯示與定向細胞導引（directional cell guidance）相關，不應改寫為臨床優越性宣稱。"
        },
        {
          id: "pre-osteoblast-proliferation",
          title: "前成骨細胞增殖（Pre-osteoblast Proliferation）",
          content: "證據層級：體外試驗（In Vitro）。2026 PDL® Research Manual 收錄與前成骨細胞增殖相關的研究；正式理解為 PDL® 植體表面有與前成骨細胞增殖相關的體外試驗證據。增殖不等於骨形成，也不等於臨床骨整合。"
        },
        {
          id: "maturation-osteogenic-response",
          title: "成熟與成骨反應（Osteogenic Response）",
          content: "證據層級：主要為體外試驗（In Vitro）。研究不只觀察細胞是否增加，也進一步觀察成熟（maturation）、成骨相關標記（osteogenic markers）、基因表現（gene expression），以及蛋白質表現／分泌（protein expression／secretion）等與成骨反應相關的變化；研究方法可包括 qPCR、Western blot 與成骨相關標記評估（Osteogenic Marker evaluation）。這些觀察不得改寫為人體臨床骨形成結果。"
        },
        {
          id: "mineralization",
          title: "礦化（Mineralization）",
          content: "證據層級：體外試驗（In Vitro）。相關研究可使用茜素紅 S 染色（Alizarin Red S staining）等方法觀察細胞外礦化（Extracellular Mineralization）／鈣化（Calcification）。正式理解為：PDL® 雷射形成的微通道表面已有與細胞外礦化／鈣化相關的體外試驗證據；細胞外礦化不等於已證實人體新生骨形成。"
        },
        {
          id: "msc-response",
          title: "間質幹細胞反應（MSC Response）",
          content: "證據層級：實驗性證據（Experimental Evidence）。2026 PDL® Research Manual 包含間質幹細胞（Mesenchymal Stem Cells, MSCs）相關研究，並描述雷射處理表面（laser-treated surface）與間質幹細胞黏附／反應的關係。間質幹細胞反應是 PDL® 植體表面相關研究中的另一個生物學證據領域；不建立 PDL® → 更多間質幹細胞 → 更多成骨細胞的已驗證因果路徑。"
        },
        {
          id: "angiogenic-response",
          title: "血管新生反應（Angiogenic Response）",
          content: "證據層級：實驗性／體外試驗相關證據（Experimental／In Vitro-related）。研究內容涉及牙齦來源間質幹細胞（gingiva-derived mesenchymal stem cells）、細胞外囊泡（extracellular vesicles）、血管新生相關因子（angiogenic factors）、內皮細胞（endothelial cells）與血管新生潛能（angiogenic potential），亦包含 CCN1、EDIL3 等研究觀察。正式理解為：PDL®／雷射修飾鈦表面已有實驗性研究探討其與血管新生反應／血管新生潛能的關係；不代表植入人體後一定產生更多新生血管。"
        },
        {
          id: "osseointegration-relevance",
          title: "與骨整合的關聯（Osseointegration Relevance）",
          content: "骨整合（Osseointegration）是 2026 PDL® Research Manual 的重要研究與討論主題，資料亦涵蓋體外試驗／實驗性、動物與臨床相關證據等不同脈絡。細胞交互作用（Cell Interaction）、成骨反應、礦化與血管新生反應等研究，提供理解植體表面與骨整合研究的不同證據層次；良好的細胞反應不必然帶來良好的臨床骨整合。"
        },
        {
          id: "evidence-level",
          title: "證據層級（Evidence Level）：體外試驗、動物與臨床",
          content: "體外試驗（In Vitro）／實驗性、動物與臨床是不同證據層級。體外試驗／實驗性證據回答細胞或實驗環境中觀察到什麼，例如細胞黏附、細胞導引、前成骨細胞增殖、成骨相關標記、礦化與血管新生潛能；動物試驗可涵蓋骨整合相關研究與骨－植體接觸（Bone-to-Implant Contact, BIC）等研究特定終點，但不得直接等同人體臨床結果。臨床研究才能進一步回答實際患者中觀察到什麼。核心原則：In Vitro ≠ Animal ≠ Clinical。"
        },
        {
          id: "bridge-to-module-04",
          title: "銜接 Module 04｜技術背後的研究證據",
          content: "Module 03 回答哪些生物反應曾被研究；Module 04 將進一步以研究層級檢視研究機構、研究問題（Research Question）、研究模型（Study Model）、比較對象（Comparator）、證據層級、研究觀察與研究限制，以及證據可支持的程度。本課不提前呈現個別研究的詳細結果或臨床結論。"
        }
      ],
      whyItMatters: "本學習中心採用的教育用證據架構（Educational Evidence Framework）為：PDL® 表面結構 → 觀察到的生物反應（細胞交互作用、成骨反應、間質幹細胞／血管新生反應）→ 與骨整合的關聯 → 臨床解讀需要獨立的臨床證據。這不是 BiomateSWISS 官方定義的固定生物學因果路徑；它的目的在於避免把不同生物學終點或低層級證據直接推論為臨床結果。",
      research: ["research-surface-cell-adhesion", "research-angiogenesis"],
      takeaways: ["觀察到的生物反應", "不同生物學終點", "In Vitro ≠ Animal ≠ Clinical", "臨床解讀需要獨立證據"],
      sources: [
        { title: "2026英文版PDL_Research_Manual_AI-RAG", verificationStatus: "verified" },
        { title: "2026_BiomateSWISS_The_Guidance_AI-RAG", verificationStatus: "verified" }
      ],
      previousModule: { id: "module-02", label: "理解 PDL® 雷射表面技術", href: "#/learn/module-02" },
      nextModule: { id: "module-04", label: "技術背後的研究證據", href: "#/learn/module-04" },
      href: "#/learn/module-03",
      verificationStatus: "verified"
    },
    {
      id: "module-04",
      number: "04",
      category: "研究證據",
      title: "技術背後的研究證據",
      summary: "學習判讀研究模型、證據層級、研究觀察與可支持的結論。",
      status: "尚未開始",
      cta: "開始學習",
      description: "從體外試驗、動物試驗與臨床研究的案例，建立研究證據的判讀能力，避免將單一研究結果直接轉換為普遍產品宣稱。",
      objectives: [
        "理解研究證據不能只看結果，還要了解研究模型與證據層級。",
        "區分體外試驗（In Vitro）、動物試驗（Animal）與臨床研究（Clinical）。",
        "分辨研究觀察（Observation）與研究解讀（Interpretation）。",
        "理解單一研究結果不能直接轉換成普遍產品宣稱。",
        "透過三個 PDL® 相關研究案例，練習判讀不同層級的證據。",
        "知道何時應進一步進入 Research Library 查看完整研究資訊。"
      ],
      mentalModel: ["研究問題", "研究模型", "證據層級", "研究觀察", "研究限制", "可以支持什麼？"],
      lessonNavigation: [
        { id: "how-to-read-evidence", label: "如何判讀研究證據" },
        { id: "evidence-levels", label: "三種證據層級" },
        { id: "case-mineralization", label: "案例 1：體外礦化" },
        { id: "case-thread-design", label: "案例 2：動物螺紋設計" },
        { id: "case-marginal-bone-loss", label: "案例 3：臨床邊緣骨流失" },
        { id: "observation-interpretation", label: "研究觀察與研究解讀" },
        { id: "evidence-map", label: "研究證據地圖" },
        { id: "pending-research", label: "待驗證研究" },
        { id: "takeaways", label: "重點整理" },
        { id: "sources", label: "來源" }
      ],
      sections: [
        {
          id: "how-to-read-evidence",
          title: "不要只問「研究結果是什麼？」",
          content: "判讀研究時，應依序確認研究問題（Research Question）、研究模型（Study Model）、比較對象（Comparator）、證據層級（Evidence Level）、研究觀察（Observation）與研究限制（Limitation），再決定可以支持什麼結論。核心訊息：先確認證據，再決定可以說到哪裡。"
        },
        {
          id: "evidence-levels",
          title: "三種重要證據層級",
          content: "體外試驗（In Vitro）主要在實驗室環境中觀察細胞、材料、表面與生物反應，可回答該實驗條件下觀察到什麼，不能直接回答患者一定得到什麼臨床結果。動物試驗（Animal）可進一步觀察生物體內的組織反應、骨－植體接觸與骨整合相關反應，但動物試驗證據不等於人體臨床證據。臨床研究（Clinical）提供實際患者中的研究資訊，仍需確認研究族群、樣本、比較對象、追蹤時間、終點、研究設計與研究限制；臨床研究不等於所有患者都一定得到相同結果。"
        },
        {
          id: "case-mineralization",
          title: "案例 1｜體外試驗怎麼讀？礦化研究（Mineralization）",
          content: "研究「Titanium Surfaces with a Laser-Produced Microchannel Structure Enhance Pre-Osteoblast Proliferation, Maturation, and Extracellular Mineralization In Vitro」的機構脈絡為 National Taiwan University，研究模型為前成骨細胞體外培養，比較對象包括 laser-treated surface、pure titanium 與 SLA-treated surface。證據層級為體外試驗；研究使用茜素紅 S 染色（Alizarin Red S staining）等方法觀察細胞外礦化（Extracellular Mineralization）相關變化。可說雷射形成的微通道表面與前成骨細胞反應及細胞外礦化之間存在體外試驗證據；體外礦化不等於人體臨床骨整合。"
        },
        {
          id: "case-thread-design",
          title: "案例 2｜動物試驗怎麼讀？螺紋設計研究（Thread Design）",
          content: "研究「Influence of Thread Design on Dental Implant Osseointegration Assayed Using the Lan-Yu Mini-Pig Model」的機構脈絡為 Taipei Medical University，研究問題為不同植體螺紋設計是否影響骨整合相關結果，研究模型為蘭嶼小型豬模型（Lan-Yu Mini-Pig Model），證據層級為動物試驗。來源在該研究條件下描述 trapezoidal thread 與 0.8 mm pitch。可說不同螺紋設計與骨整合相關結果之間存在動物研究觀察；0.8 mm 並非人體植體最佳螺紋間距的臨床建議。"
        },
        {
          id: "case-marginal-bone-loss",
          title: "案例 3｜臨床研究怎麼讀？邊緣骨流失研究（Marginal Bone Loss）",
          content: "研究「Effect of Different Implant Surface Treatments on Bony Changes around Mandibular Implants for Completely Edentulous Patients: A Split-Mouth Comparative Study」的機構脈絡為 Cairo University，研究模型為完全無牙患者的分口比較臨床研究（Split-mouth Comparative Study），比較對象為 Laser vs SLA，證據層級為臨床研究。來源報告的觀察值為：6 個月 SLA 0.580、Laser 0.096；9 個月 SLA 0.954、Laser 0.127；12 個月 SLA 1.031、Laser 0.183。可說該分口比較研究在特定完全無牙患者與研究條件下，觀察到 Laser 與 SLA 組之間的邊緣骨變化差異；此研究特定臨床結果不等於普遍產品宣稱。"
        },
        {
          id: "observation-interpretation",
          title: "研究觀察不等於研究解讀",
          content: "研究觀察（Observation）之後才是研究解讀（Interpretation），再來才是臨床結論（Clinical Conclusion）；每往下一層，都需要相對應證據支持。不同表面之間存在細胞遷移模式（Cell Migration Pattern）差異，不能直接變成「PDL® 一定有更好的臨床骨整合」。同樣地，有 Citation 不代表整段所有文字都獲得相同程度支持；閱讀研究內容時應回到研究實際測量了什麼。"
        },
        {
          id: "evidence-map",
          title: "PDL® 研究證據地圖",
          content: "目前可建立的研究地圖包括：表面／材料的表面潔淨度（Surface Cleanliness）；微生物的生物膜（Biofilm）；細胞交互作用的細胞黏附與細胞導引；成骨相關反應的礦化；血管新生（Angiogenesis）；臨床的邊緣骨流失；以及動物試驗的螺紋設計。此區塊的目的在建立研究地圖，而非呈現所有研究細節；完整資訊仍應至 Research Library 查閱。"
        },
        {
          id: "pending-research",
          title: "待驗證研究｜早期穩定性（Early Stability）",
          content: "來源描述包含 PDL vs RBM、eight-week ISQ pattern 與 earlier／more stable osseointegration，但目前指定來源不足以完整確認研究族群、研究模型、樣本數、研究設計、ISQ protocol 與正式期刊引用。因此本主題的 Verification Status 為 pending。資訊不足時，標記 pending，不猜測、不補寫；不得將其升級為臨床證據、已驗證臨床結果、加速癒合、較早骨整合或較佳早期負重結果。"
        }
      ],
      whyItMatters: "五條核心規則：體外試驗（In Vitro）≠ 動物試驗（Animal）≠ 臨床研究（Clinical）；研究觀察 ≠ 研究解讀；單一研究（Single Study）≠ 普遍產品結論（Universal Product Claim）；有 Citation ≠ 整段所有敘述都獲得相同程度支持；Source Claim ≠ Product Learning Center Automatically Published Claim。另一個判讀流程為 Source → Claim → Evidence → Verification Status → Publish Decision。",
      research: ["research-surface-cell-adhesion", "research-angiogenesis", "research-marginal-bone-loss"],
      takeaways: ["先確認研究證據", "不同證據層級回答不同問題", "研究觀察 ≠ 普遍產品宣稱", "Evidence 不足時標記 pending"],
      sources: [
        { title: "2026英文版PDL_Research_Manual_AI-RAG", verificationStatus: "verified" },
        { title: "2026_BiomateSWISS_The_Guidance_AI-RAG", verificationStatus: "verified" }
      ],
      previousModule: { id: "module-03", label: "PDL® 為什麼重要？", href: "#/learn/module-03" },
      nextModule: { id: "module-05", label: "認識植體設計", href: "#/learn/module-05" },
      href: "#/learn/module-04",
      verificationStatus: "verified"
    },
    {
      id: "module-05",
      number: "05",
      category: "植體設計",
      title: "認識植體設計",
      summary: "從平台、螺紋、連接與幾何設計，建立植體設計的理解架構。",
      status: "尚未開始",
      cta: "開始學習",
      description: "認識 Biomate 與 Biomate Plus 的設計概念，並區分設計事實、設計原理、研究觀察與臨床結果。",
      objectives: [
        "理解植體設計不是單一外觀，而是由多個設計元素共同構成。",
        "認識 Biomate 與 Biomate Plus 的主要設計概念。",
        "理解平台轉移、螺紋、內部連接、植體幾何與自攻等設計。",
        "區分設計事實（Design Fact）與臨床結果（Clinical Outcome）。",
        "知道精確尺寸、相容性與臨床操作資訊應回到正式產品資料或使用說明查詢。",
        "理解 Module 05 的設計與 Module 06 的正確使用之間的差異。"
      ],
      mentalModel: ["產品系統", "設計特徵", "設計原理", "相關研究", "正確解讀"],
      lessonNavigation: [
        { id: "understanding-implant-design", label: "理解植體設計" },
        { id: "biomate-systems", label: "Biomate 與 Biomate Plus" },
        { id: "platform-switching", label: "平台轉移設計" },
        { id: "thread-design", label: "螺紋設計" },
        { id: "internal-connection", label: "內部連接設計" },
        { id: "sd-rd-connection", label: "SD／RD 連接系統" },
        { id: "fixture-geometry", label: "植體幾何設計" },
        { id: "arced-root", label: "弧形根部設計" },
        { id: "self-tapping", label: "自攻設計" },
        { id: "exact-specifications", label: "精確規格的查詢方式" },
        { id: "design-clinical-boundary", label: "設計特徵與臨床結果" },
        { id: "module-06-boundary", label: "銜接 Module 06" },
        { id: "takeaways", label: "重點整理" },
        { id: "sources", label: "來源" }
      ],
      sections: [
        {
          id: "understanding-implant-design",
          title: "理解植體設計",
          content: "植體設計不是單一外觀，而是表面設計（Surface Design）、植體幾何設計（Fixture Geometry）、螺紋設計（Thread Design）與連接設計（Connection Design）共同形成的產品系統。PDL® 表面技術已於 Module 02、03 說明；本課主要聚焦於植體本體、螺紋、連接與幾何設計。"
        },
        {
          id: "biomate-systems",
          title: "Biomate 與 Biomate Plus",
          content: "BiomateSWISS Product System 包含 Biomate 與 Biomate Plus；兩者具有不同的產品設計與幾何特徵。本課從平台設計、螺紋設計、內部連接、植體本體幾何、根部設計與自攻相關設計理解差異，不要求記憶所有直徑、長度或相容性。完整精確規格應回 Knowledge Base／Product Reference 查詢。"
        },
        {
          id: "platform-switching",
          title: "平台轉移設計（Platform Switching）",
          content: "Biomate 與 Biomate Plus 均具有平台轉移設計。Biomate Plus 已確認的進階產品設計資訊包括 0.3 mm Platform Switch Design 與 0.7 mm Vertical Machined Surface，但不作為必須背誦的內容。平台轉移是與植體－基台介面（implant–abutment interface）相關的設計概念；來源將其與 crest bone stability 的設計考量連結，但設計原理不等於保證性的臨床結果。"
        },
        {
          id: "thread-design",
          title: "螺紋設計（Thread Design）",
          content: "螺紋設計包含螺紋輪廓（Thread Profile）、螺紋間距（Thread Pitch）與幾何形式（Geometry）。已驗證設計事實為梯形螺紋（Trapezoidal Thread）；產品資料描述相關螺紋幾何與 0.8 mm thread parameter。Module 04 的 Lan-Yu Mini-Pig 動物研究則在研究條件下使用 0.8 mm pitch trapezoidal thread。產品設計情境與動物研究情境不可混為人體最佳螺紋間距；動物試驗證據不等於人體臨床建議。"
        },
        {
          id: "internal-connection",
          title: "內部連接設計（Internal Connection）",
          content: "已驗證的內部連接設計包括內六角連接（Internal Hexagon）與 10° 莫氏錐度（10° Morse Taper）。內六角連接與抗旋轉功能相關；10° 莫氏錐度與植體－基台連接的設計理念有關。連接設計是植體－基台介面的機械設計，不應延伸為不會鬆脫、沒有微動、預防骨流失或預防所有機械性併發症的保證。"
        },
        {
          id: "sd-rd-connection",
          title: "SD／RD 連接系統",
          content: "Biomate Implant System 已確認存在 SD 與 RD 兩種內部連接區分，來源亦列有 SD 2.0 Hex 與 RD 2.5 Hex。本課僅建立 Biomate 的 Internal Connection 並非所有 Fixture 完全相同，而存在 SD／RD 系統區分的概念；精確直徑對應、Fixture－Abutment 相容性與完整對照表，均應回 Knowledge Base／Product Reference 查詢。"
        },
        {
          id: "fixture-geometry",
          title: "植體幾何設計（Fixture Geometry）",
          content: "已驗證的植體幾何設計包括牙根形設計（Root Form Design）與錐形幾何設計（Tapered Geometry）。Fixture Geometry 是植體本體從頸部、Body 到根端形成的整體幾何設計。本課不將特定幾何設計描述為總是更好、臨床最佳，或適用於特定骨質；臨床選擇留待 Module 06。"
        },
        {
          id: "arced-root",
          title: "弧形根部設計（Arced Root Design）",
          content: "Arced Root Design 是已驗證的設計事實。植體根端形狀本身也是 Fixture Geometry 的一部分；本課僅建立其設計概念，不將其轉換為避免下齒槽神經損傷、上顎竇損傷或其他安全結果的普遍臨床事實。"
        },
        {
          id: "self-tapping",
          title: "自攻設計（Self-Tapping Design）",
          content: "Self-Tapping Design 是已驗證的 Thread／Fixture Design Feature。本課僅說明其屬於螺紋／植體本體設計特徵，不將其簡化為任何骨質條件都不需要額外骨床準備，也不包含骨質選擇、鑽孔、攻牙、沉頭鑽或其他手術準備指示。"
        },
        {
          id: "exact-specifications",
          title: "精確規格應該怎麼看？",
          content: "產品資料包含直徑、長度、平台尺寸、螺紋間距、連接尺寸與頭部幾何。Learning Module 用於理解設計概念、產品差異與設計面向；Knowledge Base／Product Reference 用於查詢精確直徑、精確長度、精確相容性、平台尺寸與產品規格。精確規格非常重要，但不應只依記憶使用，也不在本課建立完整型錄規格表。部分精確規格仍需回 Original PDF／Product Reference 完成視覺驗證。"
        },
        {
          id: "design-clinical-boundary",
          title: "設計特徵不等於臨床結果",
          content: "應依序理解設計特徵（Design Feature）→ 設計原理（Design Rationale）→ 研究觀察（Research Observation）→ 臨床結果（Clinical Outcome）。不能將設計特徵直接推論為臨床結果：Platform Switching 不等於預防骨流失；Arced Root 不等於預防神經損傷；Self-Tapping 不等於保證初期穩定性；Thread Design 不等於最佳骨－植體接觸或最佳應力分布。"
        },
        {
          id: "module-06-boundary",
          title: "Module 05 與 Module 06 的界線",
          content: "Module 05 回答產品是怎麼設計的；Module 06 回答產品系統應如何正確使用。因此骨質選擇、Drill Sequence、RPM、Torque、Tap、Countersink、Profile Drill、手術準備、植體置放、臨床選擇與臨床建議均不在本課範圍，應回 Module 06 與正式 Protocol 查詢。"
        }
      ],
      whyItMatters: "Module 05 的理解架構為產品系統 → 設計特徵 → 設計原理 → 相關研究 → 正確解讀。請保留：設計事實（Design Fact）≠ 設計原理 ≠ 研究觀察 ≠ 臨床結果。10° 莫氏錐度屬於 Connection Design；10° Head／Flared Geometry 屬於 Fixture Geometry，兩者不是同一個參數。Exact 10° Flared Head + diameter mapping、Biomate exact 0.3／0.4 mm diameter mapping、3 mm 的設計語意，以及 exact SD／RD compatibility 均仍為 pending，未完成視覺驗證前不得推論。",
      research: ["research-marginal-bone-loss"],
      takeaways: ["多個設計元素共同形成植體系統", "Biomate 與 Biomate Plus 是不同設計系統", "10° Morse Taper ≠ 10° Head Geometry", "設計特徵 ≠ 臨床結果"],
      sources: [
        { title: "2026_BiomateSWISS_The_Guidance_AI-RAG", verificationStatus: "verified" },
        { title: "2026英文版PDL_Research_Manual_AI-RAG", verificationStatus: "verified" }
      ],
      previousModule: { id: "module-04", label: "技術背後的研究證據", href: "#/learn/module-04" },
      nextModule: { id: "module-06", label: "正確使用產品系統", href: "#/learn/module-06" },
      href: "#/learn/module-05",
      verificationStatus: "verified"
    },
    {
      id: "module-06",
      number: "06",
      category: "Clinical Protocol",
      title: "正確使用產品系統",
      summary: "建立產品操作規範的判讀能力：確認系統、對應器械、查證參數，且不自行推論。",
      status: "尚未開始",
      cta: "開始學習",
      description: "理解 BiomateSWISS Product Protocol 的正式規範與適用條件；本課不是手術手冊，也不提供個別患者的治療決策。",
      objectives: [
        "理解 Biomate 與 Biomate Plus 的操作流程並非完全相同。",
        "理解骨質條件（Bone Condition）是 Protocol 判斷的重要變數。",
        "認識初始鑽針（Initial Drill）、最終鑽針（Final Drill）、沉頭鑽（Countersink）、輪廓鑽（Profile Drill）與攻牙器／骨攻（Tap）的角色。",
        "理解不同器械的操作參數不能互相套用。",
        "知道 Drill Sequence 與 Fixture Diameter 之間存在正式對應關係。",
        "理解精確操作資訊必須回最新正式 Guidance／IFU／Product Documentation 確認。",
        "區分正式操作規範（Official Protocol Fact）與個別患者臨床決策（Patient-specific Clinical Decision）。"
      ],
      mentalModel: ["確認 Product System", "確認 Bone Condition", "確認 Fixture／Instrument", "遵循正式 Drill Sequence", "確認 Exact Operating Parameter", "特殊條件回 Official Protocol", "不自行推論 Clinical Decision"],
      lessonNavigation: [
        { id: "protocol-first", label: "先理解 Protocol" },
        { id: "product-system", label: "確認產品系統" },
        { id: "bone-condition", label: "骨質條件" },
        { id: "drill-sequence", label: "理解 Drill Sequence" },
        { id: "initial-final-drill", label: "Initial／Final Drill" },
        { id: "biomate-countersink", label: "Biomate：Countersink" },
        { id: "biomate-plus-profile-drill", label: "Biomate Plus：Profile Drill" },
        { id: "tap", label: "Tap" },
        { id: "parameter-context", label: "操作參數的情境" },
        { id: "fixture-warning", label: "Fixture 置入警示" },
        { id: "special-conditions", label: "特殊情況" },
        { id: "protocol-clinical-boundary", label: "Protocol 與臨床決策" },
        { id: "official-documentation", label: "回正式文件確認" },
        { id: "takeaways", label: "重點整理" },
        { id: "sources", label: "來源" }
      ],
      sections: [
        {
          id: "protocol-first",
          title: "先理解操作規範（Protocol），而不是先背數字",
          content: "本課建立的判讀流程為：確認產品系統 → 確認骨質條件（Bone Condition）→ 確認 Fixture／Instrument → 依正式 Drill Sequence 操作 → 確認對應操作參數。RPM、Torque 或 Diameter 不能脫離器械與使用情境單獨記憶；例如 35 Ncm 不可被理解為 BiomateSWISS 的通用參數。相同單位不代表相同 Protocol。"
        },
        {
          id: "product-system",
          title: "確認產品系統",
          content: "BiomateSWISS Implant System 包含 Biomate 與 Biomate Plus；兩套系統的手術準備（Surgical Preparation）並不完全相同。Biomate 的皮質骨準備器械為沉頭鑽（Countersink）；Biomate Plus 的皮質骨準備器械為輪廓鑽（Profile Drill）。Biomate Protocol 不等於 Biomate Plus Protocol；Countersink 與 Profile Drill 不可視為可任意互換的器械。"
        },
        {
          id: "bone-condition",
          title: "骨質條件（Bone Condition）",
          content: "Official Guidance 使用 D1、D2、D3、D4 作為 Protocol Decision Variable。Bone Condition 可能影響 Bone Preparation、Drill Selection、Cortical Preparation、Tap 使用與 Protocol Selection。本課不建立 D1–D4 的完整操作程序或決策矩陣；完整 D1–D4 Decision Matrix 仍為 pending，不能由此推論個案的完整處置。"
        },
        {
          id: "drill-sequence",
          title: "理解鑽孔流程（Drill Sequence）",
          content: "本課的 Learning Model 為：初始鑽針（Initial Drill）→ 最終鑽針（Final Drill）→ 依 Product System／Bone Condition 進行必要的皮質骨準備（Cortical Preparation）→ 必要時依正式 Protocol 使用攻牙器／骨攻（Tap）。這是理解器械角色的模型，不是所有臨床情況都可直接套用的完整手術順序；正式操作仍須依 Fixture Diameter、Product System、Bone Condition 與 Official Protocol 確認。"
        },
        {
          id: "initial-final-drill",
          title: "初始鑽針（Initial Drill）與最終鑽針（Final Drill）",
          content: "Initial Drill 用於建立初始 osteotomy；Final Drill 依預定 Fixture Diameter 進一步完成骨床準備。Fixture Diameter 與 Final Drill 存在正式 Mapping。經 Supporting Product Documentation 交叉確認，Initial／Final Drill 的操作情境為 1,200 rpm、20 Ncm 與給水／沖洗（Irrigation）；此數值只適用於上述鑽針操作情境，不是 BiomateSWISS 的一般操作參數。"
        },
        {
          id: "biomate-countersink",
          title: "Biomate：沉頭鑽（Countersink）",
          content: "Countersink 是 Biomate System 的 cortical preparation instrument。經跨來源確認，其操作情境為 1,200 rpm、20 Ncm 與給水／沖洗（Irrigation），且 Fixture Diameter 與對應 Countersink 存在正式 Mapping。本課不建立完整 Mapping Table；是否使用 Countersink 仍須依 Bone Condition、Fixture 與 Official Protocol 確認，不能推論所有 Biomate 都一定使用 Countersink。"
        },
        {
          id: "biomate-plus-profile-drill",
          title: "Biomate Plus：輪廓鑽（Profile Drill）",
          content: "Profile Drill 是 Biomate Plus System 的 cortical preparation instrument。經跨來源確認，其操作情境為 1,200 rpm、20 Ncm 與給水／沖洗（Irrigation），且 Fixture Diameter 與對應 Profile Drill 存在正式 Mapping。本課不建立完整 Mapping Table；是否使用 Profile Drill 仍須依 Bone Condition、Fixture 與 Official Protocol 確認，不能推論所有 Biomate Plus 都一定使用 Profile Drill。"
        },
        {
          id: "tap",
          title: "攻牙器／骨攻（Tap）",
          content: "Tap 用於植體置入前的預螺紋形成。來源支持 Tap 與高密度骨／D1 context 有正式關聯；其操作情境為 20 rpm、35 Ncm。Tap 的參數與 Initial／Final Drill、Countersink、Profile Drill 的 1,200 rpm、20 Ncm、Irrigation 情境不同，兩者不得互相套用。35 Ncm 在此僅指 Tap 的操作情境，不可延伸為 Fixture Placement Torque 或任何其他器械的參數。"
        },
        {
          id: "parameter-context",
          title: "操作參數必須對應器械與情境",
          content: "Initial Drill、Final Drill、Countersink 與 Profile Drill 的已確認操作情境均為 1,200 rpm／20 Ncm／Irrigation；Tap 的已確認操作情境為 20 rpm／35 Ncm。這些都是 context-bound parameters，而非「BiomateSWISS standard torque」或「BiomateSWISS standard RPM」。Fixture Placement Exact Torque（P-06-01）與 Abutment Screw Exact Torque（P-06-02）仍有來源衝突或擷取歧義，均為 pending，故本課不發布精確數值；兩者即使同為 Ncm，也不可互相替代。"
        },
        {
          id: "fixture-warning",
          title: "Fixture 無法依 Protocol 完全旋入時",
          content: "若 Fixture 無法依正式 Protocol 完全旋入，不得透過自行增加力量強迫置入。應重新確認 osteotomy、Preparation Depth、Hole Dimension，以及是否需要依正式 Protocol 使用 Tap。教育重點是：遇到阻力時，不應自行超越正式 Protocol 限制；本課不據此提出任何患者別的手術建議。"
        },
        {
          id: "special-conditions",
          title: "特殊情況：拔牙窩與立即負載",
          content: "Official Guidance 包含即刻拔牙／拔牙窩（Immediate Extraction／Extraction Socket）與立即負載（Immediate Loading）相關主題。Extraction Socket Condition 可能影響 Final Drill、Countersink 與 Preparation Decision，但精確 Decision Logic、尺寸門檻或略過器械規則均為 pending。本課亦不建立 Torque → Immediate Loading 的決策規則；是否進行立即負載涉及 Patient Condition、Clinical Evaluation、Study Context 與 Treatment Decision，不能簡化為一般化 Protocol。"
        },
        {
          id: "protocol-clinical-boundary",
          title: "正式操作規範不等於個別患者臨床決策",
          content: "應依序理解：正式操作規範（Official Protocol Fact）→ 操作條件（Protocol Condition）→ 個別患者臨床決策（Patient-specific Clinical Decision）。Product Learning Center 可以教育正式文件規範什麼，以及該規範適用的操作條件；不得替使用者判斷某位患者應採取何種治療。Protocol Literacy 不等於 Clinical Decision Support。"
        },
        {
          id: "official-documentation",
          title: "什麼資訊一定要回正式文件？",
          content: "Exact Fixture Diameter、Exact Drill Mapping、Complete Drill Sequence、D1–D4 Exact Decision Matrix、Fixture Placement Torque、Abutment Screw Torque、Compatibility、Extraction Socket Exact Decision 與 Patient-specific Treatment Selection，不得只靠記憶。實際操作時應回最新正式 Guidance／IFU／Product Documentation 確認；若不同文件存在差異，不得自行選擇看似合理的數值，應先確認最新正式版本。"
        }
      ],
      whyItMatters: "本課的簡要 Mental Model 是：確認 → 對應 → 執行 → 查證 → 不猜。2026_BiomateSWISS_The_Guidance_AI-RAG 是 Primary Project Source；Biomate Master Kit－手術器械說明 & 不同骨質應用方式，2024 V0.01 僅作為 Supporting Product Documentation 與 cross-source corroboration，不是 Latest IFU、2026 Primary Authority 或 Latest Official Protocol。",
      research: [],
      takeaways: ["Biomate 與 Biomate Plus 的操作流程並不完全相同", "Bone Condition 是影響 Protocol 的重要變數", "Biomate 對應 Countersink；Biomate Plus 對應 Profile Drill", "各器械的角色與操作參數不能互相套用", "Fixture Diameter 與器械存在正式 Mapping，不應任意選擇", "Fixture 無法依 Protocol 完全旋入時，不應自行增加力量強迫置入", "Fixture Placement Torque 與 Abutment Screw Torque 仍有來源衝突，不發布精確數值", "Extraction Socket 與 Immediate Loading 不能簡化為一般化 Clinical Rule", "Product Learning Center 教 Protocol Literacy，不替個別患者做 Clinical Decision", "認清系統、遵循流程、確認參數、絕不猜測。"],
      sources: [
        { title: "2026_BiomateSWISS_The_Guidance_AI-RAG（Primary Project Source）", verificationStatus: "verified" },
        { title: "Biomate Master Kit－手術器械說明 & 不同骨質應用方式，2024 V0.01（Supporting Product Documentation；cross-source corroboration）", verificationStatus: "verified" }
      ],
      previousModule: { id: "module-05", label: "認識植體設計", href: "#/learn/module-05" },
      nextModule: null,
      href: "#/learn/module-06",
      verificationStatus: "verified"
    }
  ];
})(window);
