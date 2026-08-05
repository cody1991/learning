# 学习路径

## 直链速查

- 仓库：https://github.com/bojieli/ai-agent-book
- 在线：https://bojieli.github.io/ai-agent-book/
- PDF：https://github.com/bojieli/ai-agent-book/releases/download/latest/AI-Agents-in-Depth-zh-CN.pdf
- 学习建议：https://github.com/bojieli/ai-agent-book/blob/main/docs/zh-CN/LEARNING.md
- 第 1 章正文：https://github.com/bojieli/ai-agent-book/blob/main/book/chapter1.md
- 第 2 章正文：https://github.com/bojieli/ai-agent-book/blob/main/book/chapter2.md
- chapter1 实验：https://github.com/bojieli/ai-agent-book/blob/main/chapter1/README.md
- chapter2 实验：https://github.com/bojieli/ai-agent-book/blob/main/chapter2/README.md

---

## 1. 定调（半天内）

1. 读 [学习建议](https://github.com/bojieli/ai-agent-book/blob/main/docs/zh-CN/LEARNING.md)：三大支柱 + 难度分级  
2. 记下核心公式：**Agent = LLM + 上下文 + 工具**

自检：能否用「大脑 / 眼睛 / 手脚」解释一个你用过的 Agent（如 Cursor）。

## 2. 基础 + 上下文（主线优先）

1. 读 [第 1 章](https://github.com/bojieli/ai-agent-book/blob/main/book/chapter1.md)，按 [chapter1/README](https://github.com/bojieli/ai-agent-book/blob/main/chapter1/README.md) 跑实验  
2. 读 [第 2 章](https://github.com/bojieli/ai-agent-book/blob/main/book/chapter2.md)（KV Cache 原理可先只记结论），跑 chapter2 实验  

环境：仓库根目录 `uv sync --locked --extra ch1`（再换 `ch2`…）；配置 `.env` 见仓库 `.env.example`。

## 3. 构建向（按需）

| 若你更关心… | 章 | 代码入口 |
|-------------|----|----------|
| 记忆 / RAG | 3 | https://github.com/bojieli/ai-agent-book/tree/main/chapter3 |
| 工具 / MCP | 4 | https://github.com/bojieli/ai-agent-book/tree/main/chapter4 |
| Coding Agent | 5 | https://github.com/bojieli/ai-agent-book/tree/main/chapter5 |

## 4. 评估与进化（工程闭环）

1. 第 6 章评估：https://github.com/bojieli/ai-agent-book/blob/main/book/chapter6.md  
2. 有训练背景再开第 7–8 章；否则可先只读结论与图  

## 5. 选读

- 多模态 / 实时：第 9 章  
- 多 Agent：第 10 章  

## 学习笔记

（卡点、实验改动、可复用设计原则）
