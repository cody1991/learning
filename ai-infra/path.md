# 学习路径

## 直链速查

- dmls-book：https://github.com/chiphuyen/dmls-book  
- Made With ML：https://madewithml.com/ · https://github.com/GokuMohandas/Made-With-ML  
- LLMOps：https://www.deeplearning.ai/courses/llmops  
- Serving LLMs：https://www.deeplearning.ai/courses/efficiently-serving-llms  
- vLLM 短课：https://www.deeplearning.ai/courses/fast-and-efficient-llm-inference-with-vllm  
- vLLM 项目：https://github.com/vllm-project/vllm  
- 企业加餐（已质检）：https://tencent.udemy.com/course/generative-and-agentic-ai-in-production/  

---

## 1. 建立地图（约 1～2 周碎片）

1. 浏览 [dmls-book](https://github.com/chiphuyen/dmls-book) 章节摘要（有书更好）  
2. 能用自己的话画出：数据 → 训练/微调 → 部署 → 监控 → 再迭代  

自检：能否解释「训练集群」和「推理服务」不是一回事。

## 2. 走通一条生产向路径

跟 [Made With ML](https://madewithml.com/)：开发 → 部署 → 迭代（按站点当前大纲）。  
目标：亲手碰一次「模型相关代码怎么进可重复流程」，不必一次求深。

## 3. 碰 LLM 时代的 Infra 切口（短课二选一或都上）

| 若你更关心… | 上 |
|-------------|----|
| 流水线 / 微调部署习惯 | https://www.deeplearning.ai/courses/llmops |
| 推理延迟、缓存、多用户 serving | https://www.deeplearning.ai/courses/efficiently-serving-llms |
| 开源引擎动手 | https://www.deeplearning.ai/courses/fast-and-efficient-llm-inference-with-vllm |

## 4. 可选动手

- 读 https://github.com/vllm-project/vllm 文档，能的话起最小 OpenAI-compatible 服务  
- 中文补充：https://github.com/liguodongiot/llm-action  

## 5. 企业加餐（可选）

[AI Engineer Production Track](https://tencent.udemy.com/course/generative-and-agentic-ai-in-production/) — LLM/Agent **应用上线**（Vercel→云、FastAPI 等），偏产品工程，不替代 1–3 的 Infra 地图。

## 学习笔记

（概念卡点、跟课笔记）
