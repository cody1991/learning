# AI Infra

先搞懂它是什么，再按「概念 → 生产 ML → LLM serving」学。  
**独立线**；不必和 Agent / DE 绑进度。

## 这是什么

AI Infra = 让模型在生产里跑得起来的层：**算力、训练/推理服务、调度、网关、监控、成本**。  
不是写 Prompt / Agent 编排本身，也不是纯数据分析。

| 层 | 典型内容 |
|----|----------|
| 硬件/集群 | GPU、K8s 调度 |
| 训练 | 分布式训练、实验追踪、checkpoint |
| 推理 | vLLM 等 serving、量化、吞吐/延迟 |
| 平台 | API 网关、观测、评测/CI（LLMOps） |

入门默认偏 **推理 + 平台（上线）**；训练集群以后按需。

## 最短清单

| # | 资源 | 链接 | 角色 |
|---|------|------|------|
| 1 | Chip Huyen《Designing Machine Learning Systems》笔记仓 | https://github.com/chiphuyen/dmls-book | **概念地图** |
| 2 | Made With ML | https://madewithml.com/ · https://github.com/GokuMohandas/Made-With-ML | **免费生产向实战** |
| 3a | DeepLearning.AI LLMOps | https://www.deeplearning.ai/courses/llmops | **短课：流水线** |
| 3b | Efficiently Serving LLMs | https://www.deeplearning.ai/courses/efficiently-serving-llms | **短课：推理 serving** |
| 3c | Fast & Efficient LLM Inference with vLLM | https://www.deeplearning.ai/courses/fast-and-efficient-llm-inference-with-vllm | **短课：vLLM** |

细节：[comparison.md](./comparison.md) · [path.md](./path.md) · [resources.md](./resources.md)

企业 Udemy 查课：https://tencent.udemy.com/organization/home/ （流程见项目 skill `tencent-udemy-search`）

主线仍是上表免费资源。企业过关加餐见 [resources.md](./resources.md)。

## 进度

- [ ] 读完「这是什么」+ comparison 里和 Agent/DE 的区别
- [ ] dmls-book / 原书：建立端到端系统图
- [ ] Made With ML：跟一条 deploy 路径
- [ ] 短课至少完成 LLMOps **或** Serving / vLLM 之一
- [ ] （可选）本地或云上起一个最小 vLLM / 开源推理 demo

## 原则

- 先地图，再工具；别一上来只背组件名
- 企业站有相关课就用企业站；没有就走上方免费清单
