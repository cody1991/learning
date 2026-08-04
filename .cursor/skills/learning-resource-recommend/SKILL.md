---
name: learning-resource-recommend
description: >-
  Recommends learning resources and creates independent topic note folders under
  this learning repo. Use when the user asks for 推荐/教程/课程/学习路径, compares
  learning materials, or wants a new subject folder like the existing
  microsoft-ai-courses, data-engineering, english-speaking-listening, or
  unreal-engine tracks.
---

# Learning resource recommend

Recommend high-quality learning resources, then optionally persist them as an **independent** topic folder in this repo.

## When this applies

- User asks what to learn / which course / tutorial quality
- User wants a shortlist narrowed to their goal or level
- User says to「继续」「建文件夹」「单独的」after a recommendation

## Workflow

### 1. Clarify (only what's missing)

Ask briefly if unknown:

- **Goal**: job skill, side project, exam, daily habit, etc.
- **Constraints**: language (C++/Python…), version (e.g. UE 5.8), free vs paid, time
- **Level / blockers**: e.g.「能听播客但不敢说」; skip genre locks if user says「没限制，质量高就好」

Do not over-ask. Infer from chat when possible.

### 2. Research

- Prefer current, maintained sources (official docs, high-star courses, active cohorts)
- Use web/GitHub research tools when recommending from the internet (agent-reach / `gh` / docs fetch)
- Note version skew honestly (e.g. best course is 5.4-recorded, target runtime is 5.8)
- **Quality gate before recommending any Udemy / enterprise catalog hit**:
  - Inspect curriculum depth (project chapters, not keyword-stuffed weekly surveys)
  - Read low-star reviews for patterns: AI-generated, PPT-reading, no live coding, refund rage
  - Prefer ≥~4.5 with substantive sample size **and** concrete positive craft signals (GAS, labs, shipping)
  - **In-catalog ≠ recommend.** If enterprise has a weak course, say so in chat and keep free/official primary
  - **「我的学习 / 继续学习 / 已开始」≠ quality.** Ignore enrollment progress when ranking; recommend only what passes the quality gate
  - Reject / demote: 「Zero to Hero / Complete Guide」mega-surveys, cert dump courses as mainline, beginner C++ pads sold as UE courses
  - **Persist only keepers.** Do not write rejected/skipped courses into folder notes; chat can mention skips briefly

### 3. Recommend (chat first)

Keep the reply short:

1. **One-line verdict** (what to do)
2. **Short table**: 2–4 **keepers** max, with role (主线 / 打基础 / 索引 / 加餐) — no「跳过」rows in the table
3. **Narrow default**: usually **1 primary + 1 official/reference**, or **2–3 daily habit items** for language
4. Teaching format if relevant (文字 / 视频 / 实战)
5. Offer folder only if useful:「要的话可以单独建 `topic/`」
6. If something was considered and rejected, one short clause in chat is enough — **do not list rejects in the persisted shortlist**

**Always include concrete URLs** for primary picks (course page, docs, GitHub). Avoid「去某某站搜索课名」unless no stable URL exists — then say so.

**Quality > novelty > completeness.** Prefer one excellent path over a long list. Never pad shortlists with mediocre enterprise fills.

### 4. Persist folder (when user agrees or says continue)

Create a **sibling** directory under the repo root (not nested under another track).

Rules:

- Create a **sibling** directory under the repo root (not nested under another track)
- **Always create `track.json`** so Learning Hub (`site/`) picks up the new course without code changes
- **Independent tracks**: no cross-links between topic folders; no「和 XX 线的关系」sections
- **Do not commit** unless the user asks
- Reuse the folder shape below; **omit files that don't fit the track type**（见下方对照表）
- `README.md` 最短清单必须含 **可点直链**；有 `path.md` / `resources.md` 时里面的主资源同样要有直链
- `path.md`（若存在）应写出阶段步骤，不只写「打开课自己学」
- **Only recommended / optional keepers** go into markdown tables; no「不推荐 / 跳过 / 水课」entries
- After creating a track, mention：站点下次 build 会自动出现在首页；本地可在 `site/` 跑 `npm run dev`

### 5. Aftercare

- Progress checkboxes in `README.md`
- If user corrects process (e.g. remove cross-links, don't persist rejects), update folder **and** this skill if the preference is durable

## Folder layout

```text
<topic-slug>/
├── track.json          # 必有：站点目录元数据（见下）
├── README.md           # 必有：目标、最短清单（含直链）、进度勾选
├── comparison.md       # 必有：为什么选这些（过关资源对比）
├── path.md             # 技术线：按阶段怎么学（有序步骤 + 直链）
├── routine.md          # 习惯线：每日/每周怎么练（语言等）
├── resources.md        # 链接较多时：纯链接表（可选；短清单可只放在 README）
├── 01-*.md, 02-*.md…   # 多门「跟课笔记」时：一门一文件（可选）
└── <topic-extra>.md    # 少数主题特例（如 UE 的 enterprise-udemy.md）
```

Slug: lowercase kebab-case（`data-engineering`, `unreal-engine`）。

### track.json（站点自动发现 — 新建线必写）

Learning Hub（`site/`）会扫描仓库根下「含 `README.md` + `track.json`」的目录并生成首页卡片 / 路由。**新建 track 时必须同时写入 `track.json`，不必改 Astro 代码。**

```json
{
  "title": "Short display name",
  "summary": "One-line what this track is for",
  "firstCourse": "What to open first",
  "order": 10
}
```

| 字段 | 含义 |
|------|------|
| `title` | 首页卡片标题 |
| `summary` | 一句话定位 |
| `firstCourse` | 「第一门」展示文案（与 README 一致） |
| `order` | 排序（小的在前）；新线用比现有最大 order 更大的整数 |

排除目录（不会当 track）：`site`、`docs`、`.cursor`、`.github`、`node_modules`。

### 什么时候用哪个文件

| 文件 | 何时要 | 例子 |
|------|--------|------|
| `track.json` | **每条线都要**（进 Learning Hub） | 所有 track |
| `README.md` | **每条线都要** | 所有 track |
| `comparison.md` | **每条线都要** | 所有 track |
| `path.md` | 技术课、有「第几步做什么」 | ai-infra / DE / UE |
| `routine.md` | 习惯/低压力练习，不是一门课串起来 | english |
| `resources.md` | 链接多、不想把 README 撑爆 | ai-infra / UE / english |
| `01-*.md`… | **多门独立资源**且要各自进度/笔记 | DE、microsoft-ai |
| 特例文件 | 仅该主题需要的补充 | `unreal-engine/enterprise-udemy.md` |

**刻意不统一的部分**：语言线没有 `path.md`（用 `routine.md`）；单课/短清单线可以没有 `01-*.md`；没有企业课的线不必造 `enterprise-*.md`。

**必须统一的部分**：`track.json` + `README` 最短清单可点直链；技术线步骤在 `path.md`；笔记不写已否决的课；勾选进度写在 README / 分课笔记里供 `/progress` 汇总。

Templates: see [folder-template.md](folder-template.md).

## Existing tracks (do not merge)

| Folder | Focus |
|--------|--------|
| `microsoft-ai-courses/` | Agent / GenAI / Skills（GenAI → Agents；MCP 可选） |
| `data-engineering/` | DE101 → Zoomcamp → Handbook |
| `english-speaking-listening/` | NL life, listening + low-pressure speaking |
| `unreal-engine/` | UE 5.8 + C++; Epic Quick Start first; enterprise Advanced RPG as advanced |
| `ai-infra/` | DMLS + Made With ML + DL.AI serving/LLMOps; enterprise Production Track optional |

New topics get a **new** top-level folder.

## Related skill

When the user has **Tencent enterprise Udemy** (`tencent.udemy.com`, 企业 Udemy) or a paid course may be missing from the company catalog, follow `.cursor/skills/tencent-udemy-search/SKILL.md`.

**Default there**: open the site in the browser → user completes SSO → agent searches the catalog. Do not assume public Udemy courses are available; do not claim catalog contents while logged out.

## Anti-patterns

- Dumping 10+ undifferentiated links
- Cross-linking unrelated learning tracks
- Forcing Blueprint/visual workflows when user prefers code + AI
- Creating the folder before the user wants it (unless they said 继续/建文件夹/单独的)
- Mixing「推荐」with unsolicited git commit/push
- Writing「见下方 / 仓库内某处 / 去站内搜索」without a concrete URL for primary items
- Priority lesson lists without deep links to lesson folders (for multi-lesson courses)
- Persisting rejected / 「不推荐」courses into track markdown
- Creating a new track **without `track.json`**（站点发现不到）
- Hand-editing `site/` just to register a new course（应靠约定自动发现）
