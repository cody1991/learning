# 为什么这样推荐

## AI Infra 不是什么

| 容易混成 | 实际更接近 |
|----------|------------|
| 只会调 ChatGPT / 写 Agent | 应用层；Infra 是底下「怎么托管模型」 |
| 经典深度学习课（只训练 notebook） | 缺部署、监控、成本 |
| 纯数据工程 | 有重叠（特征/数据管道），但 Infra 还含推理服务与 GPU |

## 最短清单理由

| 资源 | 为什么 |
|------|--------|
| Designing ML Systems（Chip Huyen）+ [dmls-book](https://github.com/chiphuyen/dmls-book) | 把「数据→训练→部署→监控」讲成一张图，适合完全不懂 Infra 的人 |
| [Made With ML](https://madewithml.com/) | 免费、偏生产，能动手走通迭代 |
| DL.AI 短课 LLMOps / Serving / vLLM | 几小时摸到「上线、serving」在干什么，负担小 |

## 进阶（知道方向后再开）

| 资源 | 链接 | 何时 |
|------|------|------|
| vLLM | https://github.com/vllm-project/vllm | 要自己起推理服务 |
| llm-action（中文） | https://github.com/liguodongiot/llm-action | 想看工程化中文笔记 |
| LiteLLM | https://github.com/BerriAI/litellm | 多模型网关 / 路由 |
| Langfuse | https://github.com/langfuse/langfuse | LLM 观测 |

## 不优先（入门阶段）

- 一上来只啃分布式训练论文  
- 同时开很多 observability 产品对比  
- 把 Agent 框架课当成 Infra 主线  
