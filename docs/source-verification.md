# Source Verification｜資料來源驗證規範

所有精確產品與臨床資料，包含 Torque、Drill Sequence、Diameter、Length、Catalog Number 與 Clinical Procedure，均不得在未確認前對外呈現為事實。

## 狀態欄位

- `pending`：尚未由授權產品資料、型錄、IFU、臨床流程或研究來源完成核對。
- `verified`：已完成來源核對，可依內容治理流程發布。

## 資料原則

- 未驗證欄位應維持 `null`、空陣列或空值，不得推測填入。
- 每筆已驗證資料後續應補上可追溯的來源識別與驗證日期。
- Local Storage 僅保存不具個人識別性的學習狀態，不保存姓名、電子郵件或其他個人資料。
