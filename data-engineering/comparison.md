# DE 资源对比

整理自对话（2026-08）。与微软 AI Beginners 系列无对等「DE for Beginners」。

## 一句话区别

| 资源 | 一句话 |
|------|--------|
| **DE101** | 零基础友好的 DE 入门书：讲 why + 动手，工具覆盖核心栈 |
| **Zoomcamp** | 免费 9 周实战营：从零搭生产向数据管道 |
| **Handbook** | 超全链接库：学到哪查到哪，不替代课程 |

---

## 难度 / 模式

| 资源 | 难度 | 教学模式 |
|------|------|----------|
| DE101 | ★★☆ | 在线书 + 可执行代码 + 练习 |
| Zoomcamp | ★★★ | 视频 + 作业 + 项目（社区 cohort） |
| Handbook | — | 目录/链接，自学索引 |

---

## 怎么选

- **几乎零 DE 概念** → 先 DE101，再 Zoomcamp  
- **已会 SQL/Python，想直接实战** → 可直接 Zoomcamp  
- **工具太多不知道学啥** → 打开 Handbook 当地图  

不建议：Handbook 当「从第一页读到最后」的主教材。

---

## 和 Agent 线的关系

| 线 | 文件夹 | 目标 |
|----|--------|------|
| Agent / Skills | `../microsoft-ai-courses/` | 智能体、工具、MCP |
| Data Engineering | 本目录 | 数据管道、仓、调度 |

两条线独立；不要并行开太多，选一条当主线即可。

---

## 核心技能栈（学完 Zoomcamp 大致会碰到）

- SQL、Python  
- Docker / 基础设施入门（Zoomcamp 还有 Terraform + 云）  
- 批处理 & 流（Spark、Kafka 等）  
- 转换层：dbt  
- 编排：Airflow（DE101）/ 课内编排实践（Zoomcamp）  
- 数据建模与仓表设计意识  
