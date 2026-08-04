# Learning

个人学习笔记仓库 + [Learning Hub](https://cody1991.github.io/learning/) 静态站。

## 学习线

每条线是仓库根下独立目录。含 `README.md` + `track.json` 的目录会自动出现在站点首页。

| 目录 | 说明 |
|------|------|
| `microsoft-ai-courses/` | GenAI → Agents |
| `data-engineering/` | DE101 → Zoomcamp |
| `english-speaking-listening/` | 精听 + 跟读 |
| `ai-infra/` | DMLS → Made With ML → serving |
| `unreal-engine/` | UE 5.8 C++：官方 Quick Start → Climbing → Action RPG |
| `dutch-language/` | 荷兰语生活向：learndutch.org |
| `personal-finance/` | 理财常识：Nibud → Bogleheads → 行为书 |

**实操代码**：本仓 [`labs/`](./labs/)（跟课 clone / venv；与各 track 笔记分开，集中管理）。

## 接下来怎么学（当前）

清单已过一轮质检；执行时 **英语/荷语可每天一点，技术一次主攻一条**；理财按 path 碎片推进即可。

| 线 | 状态 | 下一步 |
|----|------|--------|
| GenAI | labs 环境已通；01 未读完 | 暂停 OK；回来：中文 01 → 04/11/15 → Agents |
| 英语 | 路径清楚 | 每天 [BBC 6 Minute](https://www.bbc.co.uk/learningenglish/english/features/6-minute-english)（文稿 + 跟读） |
| 荷兰语 | 新开线 | [learndutch.org](https://www.learndutch.org/) 每天 15–20 分钟 |
| AI Infra | 路径合理 | 读 `ai-infra/README`「这是什么」→ DMLS 地图 / DL.AI 短课 |
| DE | 路径合理 | DE101 → Zoomcamp |
| UE C++ | 企业课已复核 | 官方 [C++ Quick Start](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-cpp-quick-start) → 文档小练 → Climbing → Action RPG |
| 理财常识 | 新开线 | [Nibud](https://www.nibud.nl/) 做预算 → [Bogleheads Getting started](https://www.bogleheads.org/wiki/Getting_started) |

陪读约定见 `.cursor/skills/learning-coach/`。

## 新增一条学习线

1. 新建 `<slug>/`（kebab-case）
2. 必写：`track.json`、`README.md`、`comparison.md`
3. 按需：`path.md` / `routine.md` / `resources.md` / `01-*.md`
4. **不必改** `site/` 代码；push 后 Pages 构建即收录

`track.json` 示例：

```json
{
  "title": "短标题",
  "summary": "一句话定位",
  "firstCourse": "第一门课/第一步",
  "order": 10
}
```

约定详见 `.cursor/skills/learning-resource-recommend/`。

## 本地预览站点

需要 Node ≥ 22。

```bash
cd site
npm install
npm run dev
```

构建（含搜索索引）：

```bash
cd site
npm run build
npm run preview
```

## GitHub Pages

- 工作流：`.github/workflows/pages.yml`
- 首次需在仓库 Settings → Pages → Source 选 **GitHub Actions**
- 公开地址：https://cody1991.github.io/learning/
