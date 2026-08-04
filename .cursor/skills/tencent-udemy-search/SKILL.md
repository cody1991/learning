---
name: tencent-udemy-search
description: >-
  Finds and evaluates courses on Tencent enterprise Udemy Business
  (tencent.udemy.com / organization home) with user-assisted SSO login.
  Use when the user mentions tencent.udemy.com, 企业 Udemy, 腾讯 Udemy,
  Udemy Business, organization/home, 配合登录, or wants the agent to search
  the company catalog (after they log in).
---

# Tencent Udemy search

在 **企业 Udemy** 查课并评估。企业目录 **≠** 公开 https://www.udemy.com/ 全量。

默认模式：**用户配合登录 → Agent 用浏览器搜课 → 写入学习笔记**。  
不要默认改成「只丢关键词让用户自己搜」；只有用户明确说自己搜、或浏览器不可用时才降级。

## Canonical URLs

- Organization home：https://tencent.udemy.com/organization/home/  
- Site root：https://tencent.udemy.com/  
- Public Udemy（对照）：https://www.udemy.com/  

## Critical facts

1. 未登录会跳到公司 **SSO / Identity Portal**；Agent **不能替用户输密码或过 MFA**。  
2. 登录必须由用户在 Cursor 浏览器（或用户指定的已登录会话）里完成。  
3. 登录成功后，Agent **可以**继续：搜索、打开课页、读大纲、对比是否值得跟。  
4. 公开站有课 ≠ 企业库有；未登录前 **禁止**声称「库里有/没有某某课」。  
5. 推荐公开付费课时：给出公开 URL + 说明要进企业站验证；并主动走本 skill 的登录协作流程（若用户愿意）。

## Workflow（登录协作 — 主路径）

### 0. Confirm topic

- Topic（UE C++ / AI Infra / DE / 英语 / GenAI…）  
- Must-have / hard excludes  
- 准备好该主题的搜索词包（见下方）

### 1. Open enterprise Udemy in browser

1. 用浏览器工具打开：https://tencent.udemy.com/organization/home/  
   - 需要用户看见并操作登录时：navigate 使用可见标签（`position: "active"` 或用户要求的 side）  
2. `browser_snapshot`（或截图）确认状态：  
   - **已在 organization home / 能看到搜索框** → 跳到步骤 3  
   - **SSO / Identity Portal / 登录页** → 步骤 2  

### 2. Hand off login to the user（停住，别瞎点）

明确告诉用户（可原样用）：

> 企业 Udemy 需要你登录。请在我打开的浏览器窗口完成 SSO（账号/扫码/MFA）。  
> 登录成功并看到 organization 首页或课程库后，回复「登录好了」或「继续」。  
> 我不会替你输入密码。

然后 **等待用户确认**。不要循环盲点登录按钮；不要索要密码。

用户确认后：再 snapshot，确认已离开 IdP、进入 `tencent.udemy.com` 业务页，再继续。

### 3. Search in the logged-in session

1. 用站内搜索，按主题词包 **逐条**搜（先高信号词）  
2. 记录：课名、讲师、企业站 URL、是否含目标技术栈  
3. 打开 1～3 门候选课的大纲页，核对「要/不要」标准；**同时读评论区低分评**（找「念 PPT / 无实操 / AI 生成」等模式）  
4. 聊天里可简短说「看过某某，质量不过关已跳过」——**不要把不推荐的课写进笔记**  
5. **在库 ≠ 推荐。** 没有过关课 → 指向该主题免费/官方主线；有过关课才落盘  

### 4. If catalog has nothing suitable（含「有课但全是水课」）

1. 换近义词再搜一轮  
2. 指向对应学习文件夹的 **免费主线**（具体 URL）  
3. 建议 **申请加购**公开课（把公开 URL 给管理员 / content request）  
4. 不要编造企业库结果；也不要把水课当成「有了就够」  
5. 笔记里**不写**被否决的课名/链接（聊天说过即可）  

### 5. Persist（只写过关的）

- **只写入**「推荐跟」或「可选加餐（已过质检）」的课：课名 + 企业 URL + 角色（主课 / 进阶 / 加餐）  
- **不写入**：不推荐、跳过、水课、仅因在库出现的课  
- 目标课不在库（如 Ulibarri）：可写一句「不在库 + 公开 URL / 申请加购」，不要附带一堆否决课列表  
- UE → `unreal-engine/enterprise-udemy.md`  
- AI Infra → `ai-infra/resources.md`  

## Fallback（用户不愿用浏览器协作时）

才降级为：

1. 给出 5～10 条可复制搜索词 + 筛选表  
2. 请用户自己打开 https://tencent.udemy.com/organization/home/ 搜  
3. 用户贴回课名/链接后，再评估并落盘  

## Topic query packs

### Unreal Engine（C++）

- `Unreal Engine 5 C++` · `Unreal C++` · `UE5 C++`  
- `Unreal Engine Multiplayer` · `GameDev.tv Unreal`  
- `Stephen Ulibarri` / `Druid Mechanics`  
- Prefer：C++ / VS / Character / Enhanced Input  
- Avoid：纯 Blueprint  
- Public fallback：https://www.udemy.com/course/unreal-engine-5-the-ultimate-game-developer-course/  

### AI Infra / MLOps / LLM serving

- `MLOps` · `LLMOps` · `Machine Learning Operations`  
- `LLM inference` · `model serving` · `vLLM`  
- `Kubernetes GPU` · `ML platform`  
- Prefer：部署/监控/serving；Avoid：纯 Prompt 入门冒充 Infra  
- Free fallback：`ai-infra/` 最短清单  

### Data Engineering

- `Data Engineering` · `dbt` · `Apache Airflow` · `Spark` · `Kafka data`  

### English speaking / listening

- `English speaking` · `Business English conversation`  
- Prefer：会话/发音；Avoid：只背单词当口语主线  

### Generative AI / Agents

- `Generative AI` · `LLM` · `AI Agents` · `LangChain` · `Prompt Engineering`  

## Chat templates

### A. 开始协作登录

```markdown
我来打开企业 Udemy。请在弹出的浏览器里完成公司 SSO 登录。
入口：https://tencent.udemy.com/organization/home/

登录好并看到课程首页后，回复「登录好了」。
本次要搜的主题：<topic>
优先关键词：<keywords>
```

### B. 搜完汇报

```markdown
## 企业库结果（<topic>）
| 课名 | 链接 | 结论 |
|------|------|------|
| … | https://tencent.udemy.com/... | 推荐跟 / 加餐 |

已跳过（聊天提及即可，不落盘）：…
### 建议
- 主课：…
- 若都不合适：免费主线 … / 申请加购 …
```

## Anti-patterns

- 未登录就断言库里有没有某课  
- 替用户输入密码 / 绕过 MFA  
- 在 SSO 页反复自动点击却不交接给用户  
- 只丢公开 Udemy 链接假装企业一定能看  
- 登录协作可用时，却只丢关键词让用户自己搜（除非用户要求）  
- 为企业库强推纯蓝图课充当 C++ 主线  
- **只因「在库里 / 标题对口」就标推荐**，不看大纲深度与低分评  
- 把百科式 Zero-to-Hero、认证刷题课写成主线  
- **用「我的学习 / 继续学习 / 已开始」当推荐理由**——那只说明点过，不说明好  
- **把不推荐的课写入 `resources.md` / `enterprise-udemy.md`**（否决理由只留在聊天）  
