# 为什么这样推荐

整理自对话调研（2026-08）。

## 一句话区别

| 课程 | 一句话 |
|------|--------|
| **Generative AI for Beginners** | 用 LLM 做应用（Prompt、聊天、RAG、Function Calling） |
| **AI Agents for Beginners** | 让模型自己规划并调用工具（Agent 专项） |
| **MCP for Beginners**（可选） | 工具协议专项，做 MCP 时再开 |

关系：**Generative AI 是地基，Agents 建在地基上。**

---

## 适不适合「Agent 工具 / Skills」

- **Generative AI** → 打基础（Prompt、Function Calling、RAG）
- **AI Agents** → 最对口（Tool Use、Planning、Multi-Agent、MCP、Memory）
- **MCP** → 写协议/server 时加餐

写 **Cursor Skills**（`SKILL.md`）时：课给概念；具体写法对照 Cursor skill 规范动手。

---

## 难度 / 教学模式

| 课程 | 难度 | 模式 |
|------|------|------|
| Generative AI | ★★☆ | 文字 + 短视频 + Python/TS |
| AI Agents | ★★★ | 文字 + 短视频 + Python（环境偏 Azure/Foundry） |
| MCP | ★★★ | 文字 + 多语言示例 |

典型节奏：短视频 → 读 README → 跑代码。

---

## 推荐路径

1. Generative AI 挑课：`04–05` Prompt、`11` Function Calling、`15` RAG（直链见 [02](./02-generative-ai-for-beginners.md)）
2. AI Agents：Tool Use、Planning、Multi-Agent、MCP、Context / Memory（直链见 [03](./03-ai-agents-for-beginners.md)）
3. 边学边写一个实际 Skill 或工具巩固
