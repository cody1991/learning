---
name: tencent-udemy-search
description: >-
  Finds and evaluates courses on Tencent enterprise Udemy Business
  (tencent.udemy.com / organization home). Use when the user mentions
  tencent.udemy.com, 企业 Udemy, 腾讯 Udemy, Udemy Business, organization/home,
  or needs to check whether a public Udemy course exists in the company catalog.
---

# Tencent Udemy search

Help the user find courses on **enterprise Udemy**, which is **not** the full public Udemy catalog.

## Canonical URLs

- Organization home：https://tencent.udemy.com/organization/home/  
- Site root：https://tencent.udemy.com/  
- Public Udemy（对照用，课不一定在企业库）：https://www.udemy.com/  

## Critical facts

1. **企业目录 ⊂ 公开站**。公开站有课 ≠ 企业能学；搜不到很常见。  
2. Agent **通常无法登录**企业站代搜。默认输出：**搜索词清单 + 筛选标准 + 若无结果时的备选（免费/申请加购）**。  
3. 用户贴回企业站课名/链接后，再帮他判断是否值得跟、如何写入对应学习文件夹。  
4. 推荐付费公开课时，**同时**给出企业站搜索词，并说明可能不在库。

## Workflow

### 1. Confirm topic & constraints

- Topic（UE C++ / AI Infra / DE / 英语…）  
- Must-have keywords（如必须 C++、必须 LLM serving）  
- Hard excludes（如不要纯蓝图）

### 2. Give search queries to paste

Always give **5～10 条**可复制搜索词（英文为主，可附中文）。  
模式：`主题 + 技术约束`、`工具名`、`常见出版方/讲师`。

### 3. Give selection criteria

短表：要什么 / 不要什么（看标题、大纲、是否含动手、更新年份）。

### 4. Tell user what to do on the site

1. 打开 https://tencent.udemy.com/organization/home/  
2. 用站内搜索逐条试关键词  
3. 打开大纲确认技术栈  
4. 把 **课名 + 企业站 URL**（或截图要点）发回聊天  

### 5. If nothing found

按顺序建议：

1. 换近义词再搜一轮（见下方主题词库）  
2. 走该主题学习文件夹里的 **免费主线**  
3. **申请加购**：把公开课 URL 交给管理员 / content request（许多 Udemy Business 支持）  
4. 不要假装企业库里「应该有」某门网红课  

### 6. Persist when useful

- 记入对应 track 的 `resources.md`「企业站实际课」表  
- UE 主题可同步 `unreal-engine/enterprise-udemy.md` 笔记区  
- AI Infra → `ai-infra/resources.md`  

Do not cross-link unrelated learning tracks in README 正文 beyond necessary.

## Topic query packs

### Unreal Engine（C++）

Search：

- `Unreal Engine 5 C++`  
- `Unreal C++`  
- `UE5 C++`  
- `Unreal Engine Multiplayer`  
- `GameDev.tv Unreal`  
- `Stephen Ulibarri` / `Druid Mechanics`  

Prefer：大纲含 C++ / Visual Studio / Character / Enhanced Input。  
Avoid：纯 Blueprint / 只做关卡美术。  
Public fallback：https://www.udemy.com/course/unreal-engine-5-the-ultimate-game-developer-course/  

### AI Infra / MLOps / LLM serving

Search：

- `MLOps`  
- `LLMOps`  
- `Machine Learning Operations`  
- `LLM inference` / `model serving`  
- `vLLM`  
- `Kubernetes GPU` / `ML platform`  
- `Designing Machine Learning Systems`（若有书/课包装）  

Prefer：部署、监控、serving、pipeline；不仅是「调 API 做聊天应用」。  
Avoid：纯 Prompt 入门、纯算法数学课冒充 Infra。  
Free fallback：见 `ai-infra/` 最短清单。  

### Data Engineering

Search：

- `Data Engineering`  
- `dbt`  
- `Apache Airflow`  
- `Spark`  
- `Kafka data`  

### English speaking / listening

Search：

- `English speaking`  
- `Business English conversation`  
- `IELTS listening`（仅当目标是考试）  
- Prefer：会话/发音；Avoid：只背单词词表课当口语主线  

### Generative AI / Agents（若要用企业站补）

Search：

- `Generative AI`  
- `LLM`  
- `AI Agents`  
- `LangChain`  
- `Prompt Engineering`  

Note：与 `microsoft-ai-courses/` 免费 GitHub 课可并存；企业视频当加餐。

## Response template (chat)

```markdown
## 企业 Udemy 怎么搜
入口：https://tencent.udemy.com/organization/home/

### 请复制搜索
- `...`
- `...`

### 怎么判断值不值得跟
| 要 | 不要 |
|----|------|

### 若搜不到
1. …
2. 免费主线：<具体 URL>
3. 申请加购公开课：<公开 URL>

把搜到的课名/链接发我，我帮你看是否适合进 <topic>/resources.md。
```

## Anti-patterns

- 只丢公开 Udemy 链接，假装企业一定能看  
- 让用户「随便搜 Unreal」而无约束词  
- 在未登录企业站时声称「库里有/没有某某课」  
- 为企业库强推纯蓝图课充当 C++ 主线  
