# AI Agents for Beginners

- 仓库：https://github.com/microsoft/ai-agents-for-beginners
- 中文：仓库内 `translations/zh-CN/`
- 规模：约 7.1 万 star（2026-08）
- 体量：18 课
- 状态：**主线课程 — Generative AI 扫盲后进入**

## 是什么

Agent 专项：用例、框架、设计模式、Tool Use、Agentic RAG、Planning、Multi-Agent、MCP/A2A、Context、Memory、生产与安全等。  
代码：主要 **Python**，偏 **Microsoft Agent Framework + Foundry**（部分示例支持其它 OpenAI 兼容提供商）。

## 教学模式

- 主：每课 README 长文
- 辅：多数课有 YouTube 短视频（后几课有的还没有）
- 动手：`code_samples` 里的 Python 示例

「读懂」相对容易；「跑通全部代码」可能卡在 Azure / Foundry 环境。

## 难度

★★★ — 概念中等偏上，工程/环境门槛高于 Generative AI。

## 建议优先课（面向 Agent 工具 / Skills）

| 课 | 主题 | 为什么看 |
|----|------|----------|
| 01 | Intro & Use Cases | 什么时候该用 Agent |
| 03 | Design Patterns | 整体地图 |
| 04 | Tool Use | **写工具最相关** |
| 07 | Planning | 多步任务怎么拆 |
| 08 | Multi-Agent | 多角色协作 |
| 11 | Agentic Protocols (MCP, A2A…) | **工具协议** |
| 12 | Context Engineering | 和 Skills 上下文设计很像 |
| 13 | Memory | 有状态 Agent |

其余课（信任、生产、浏览器 Agent、部署、安全）按需要补。

## 进度

- [ ] 01 Intro
- [ ] 03 Design Patterns
- [ ] 04 Tool Use
- [ ] 07 Planning
- [ ] 08 Multi-Agent
- [ ] 11 MCP / Protocols
- [ ] 12 Context Engineering
- [ ] 13 Memory
- [ ] （可选）其它课

## 学习笔记

（跟课过程中往下记）

## 和 Cursor Skills 的衔接

学完概念后，动手方向可以是：
- 写一个项目/个人 `SKILL.md`（触发条件、步骤、领域知识）
- 或做一个可被 Agent 调用的工具 / MCP server

课内框架偏微软生态；概念可迁移，具体 API 不必死磕。
