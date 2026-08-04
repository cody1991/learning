# Generative AI for Beginners

- 仓库：https://github.com/microsoft/generative-ai-for-beginners
- 中文 README：https://github.com/microsoft/generative-ai-for-beginners/blob/main/translations/zh-CN/README.md
- 规模：约 11.6 万 star（2026-08）
- 体量：21 课
- 状态：**打基础 — 可以全看**；赶进度再优先下面核心课
- **本地实操**：[`labs/microsoft-generative-ai-for-beginners/`](../labs/microsoft-generative-ai-for-beginners/)（本仓集中目录）

## 是什么

用 LLM 做应用的入门课：Prompt、聊天、搜索/RAG、图片生成、Function Calling、微调等。  
代码：**Python + TypeScript**；可接 Azure OpenAI / OpenAI / Foundry 等。

## 教学模式

- 主：每课 README 长文
- 辅：短视频导读（多数课有链接）
- 动手：代码样本 + notebook sandbox

## 难度

★★☆ — 三门里最友好。会一点 Python 或 TS 即可。

## 核心课直链（全看时按仓库 00→21；赶进度先这几门）

| 课 | 主题 | 直链 |
|----|------|------|
| 00 | Course Setup | https://github.com/microsoft/generative-ai-for-beginners/tree/main/00-course-setup |
| 04 | Prompt Fundamentals | https://github.com/microsoft/generative-ai-for-beginners/tree/main/04-prompt-engineering-fundamentals |
| 05 | Advanced Prompts | https://github.com/microsoft/generative-ai-for-beginners/tree/main/05-advanced-prompts |
| 11 | Function Calling | https://github.com/microsoft/generative-ai-for-beginners/tree/main/11-integrating-with-function-calling |
| 15 | RAG | https://github.com/microsoft/generative-ai-for-beginners/tree/main/15-rag-and-vector-databases |

课表总览：https://github.com/microsoft/generative-ai-for-beginners#️-lessons  

时间紧可后补：图像、Low Code、微调、各厂商模型介绍（19–21）。

## 进度

- [x] 本地实操目录已就绪（`labs/microsoft-generative-ai-for-beginners`）
- [x] 环境：LiteLLM + `gpt-4o-mini`；Key 已通；样本改 `load_dotenv(override=True)`，避免终端旧 `OPENAI_API_KEY` 盖住 `.env`
- [ ] 第 01 课：Introduction to GenAI（读 README + 可选视频）
- [ ] （推荐全看）按仓库课表跟完，或至少完成 04 / 05 / 11 / 15
- [ ] 进入 AI Agents 主线

## 学习笔记

### 01 Introduction（要点）

- GenAI：用自然语言 prompt 生成文本/图像等内容
- LLM 工作流：tokenizer → 预测下一 token → 概率分布 + temperature（非确定性）
- 常见用法：摘要、创作、问答、补全、解释/生成代码
- 局限：不完美、会幻觉、不可盲目当真相；需要人审改
- 知识检测答案：选 3（同 prompt 也可能不同；适合出初稿再改）

作业（可选）：写约 300 字「梦中 AI 创业」：Problem / How I would use AI / Impact
