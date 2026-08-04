# 三门课对比

整理自对话调研（2026-08）。

## 一句话区别

| 课程 | 一句话 |
|------|--------|
| **AI for Beginners** | 搞懂 AI 怎么工作（神经网络、CV、NLP 原理） |
| **Generative AI for Beginners** | 用 LLM 做应用（Prompt、聊天、RAG、Function Calling） |
| **AI Agents for Beginners** | 让模型自己规划并调用工具（Agent 专项） |

关系：**Generative AI 是地基，Agents 建在地基上。**  
官方也建议：没做过 GenAI 的，先看 Generative AI，再进 Agents。

---

## 适不适合「Agent 工具 / Skills」

- **AI for Beginners** → 不太适合。几乎不碰 Agent 编排、工具调用、Skills。
- **Generative AI** → 适合打基础（尤其 Prompt、Function Calling、RAG）。
- **AI Agents** → 最对口（Tool Use、Planning、Multi-Agent、MCP、Memory）。

写 **Cursor Skills**（`SKILL.md`）时：
- 这些课给的是「Agent 怎么思考」的概念
- 具体写法还要对照 Cursor 的 skill 规范动手

---

## 难度

| 课程 | 相对难度 | 卡点 |
|------|----------|------|
| Generative AI | ★★☆ 最友好 | API、Prompt、搭应用；概念新但代码浅 |
| AI Agents | ★★★ 中等偏上 | 抽象概念多；环境偏 Azure / Foundry |
| AI for Beginners | ★★★★ 最累 | 训练代码、跨度长、有数学感 |

名字都带 Beginners，但「入门」不是同一件事。

---

## 教学模式

三门都是 **文字为主**，不是纯视频课。

| 课程 | 主载体 | 视频 | 动手 |
|------|--------|------|------|
| Generative AI | README 长文 | 每课短视频导读（多数有，少数 Coming Soon） | Python / TS + notebook |
| AI Agents | README 长文 | 多数课有 YouTube 短视频（后几课有的还没有） | Python 示例 |
| AI for Beginners | README + Jupyter | 基本无系统视频课 | Notebook + Lab + Quiz |

典型节奏（GenAI / Agents）：看几分钟视频 → 读 README → 跑代码。

---

## 推荐路径（面向 Agent / Skills）

1. Generative AI 挑课：`04–05` Prompt、`11` Function Calling、`15` RAG（不必 21 课全啃）
2. 进入 AI Agents，优先：Tool Use、Planning、Multi-Agent、Agentic Protocols (MCP)、Context / Memory
3. 边学边写一个实际 Skill 或工具巩固
