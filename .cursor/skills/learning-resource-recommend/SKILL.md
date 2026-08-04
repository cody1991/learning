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

### 3. Recommend (chat first)

Keep the reply short:

1. **One-line verdict** (what to do / what to skip)
2. **Short table**: 2–4 candidates max, with role (主线 / 打基础 / 索引 / 跳过)
3. **Narrow default**: usually **1 primary + 1 official/reference**, or **2–3 daily habit items** for language
4. Teaching format if relevant (文字 / 视频 / 实战)
5. Offer folder only if useful:「要的话可以单独建 `topic/`」

**Always include concrete URLs** for primary picks (course page, docs, GitHub). Avoid「去某某站搜索课名」unless no stable URL exists — then say so.

**Quality > novelty > completeness.** Prefer one excellent path over a long list.

### 4. Persist folder (when user agrees or says continue)

Create a **sibling** directory under the repo root (not nested under another track).

Rules:

- **Independent tracks**: no cross-links between topic folders; no「和 XX 线的关系」sections
- **Do not commit** unless the user asks
- Reuse the folder shape below; omit unused files
- `README.md` / `resources.md` / `path.md` must contain **clickable links** for the shortlist (same URLs as in chat)
- `path.md` should outline how to follow the primary course (phases or sections), not only「打开课然后自己学」

### 5. Aftercare

- Progress checkboxes in `README.md`
- If user corrects process (e.g. remove cross-links), update folder **and** this skill if the preference is durable

## Folder layout

```text
<topic-slug>/
├── README.md           # goal, shortlist, progress checkboxes
├── comparison.md       # why these, why not others, difficulty/format
├── resources.md        # optional: links only
├── path.md             # optional: ordered steps (tech courses)
├── routine.md          # optional: daily habit (language / practice)
└── 01-*.md, 02-*.md…   # optional: one file per major resource
```

Slug: lowercase kebab-case (`data-engineering`, `unreal-engine`).

Templates: see [folder-template.md](folder-template.md).

## Existing tracks (do not merge)

| Folder | Focus |
|--------|--------|
| `microsoft-ai-courses/` | Agent / GenAI / Skills-oriented MS courses |
| `data-engineering/` | DE101 → Zoomcamp → Handbook |
| `english-speaking-listening/` | NL life, listening + low-pressure speaking |
| `unreal-engine/` | UE 5.8 + C++; default free Epic path if enterprise Udemy lacks Ulibarri |
| `ai-infra/` | What AI Infra is; DMLS + Made With ML + DL.AI serving/LLMOps |

New topics get a **new** top-level folder.

## Related skill

When the user has **Tencent enterprise Udemy** (`tencent.udemy.com`, 企业 Udemy) or a paid course may be missing from the company catalog, follow `.cursor/skills/tencent-udemy-search/SKILL.md` (search queries + request-content fallback). Do not assume public Udemy courses are available there.

## Anti-patterns

- Dumping 10+ undifferentiated links
- Cross-linking unrelated learning tracks
- Forcing Blueprint/visual workflows when user prefers code + AI
- Creating the folder before the user wants it (unless they said 继续/建文件夹/单独的)
- Mixing「推荐」with unsolicited git commit/push
- Writing「见下方 / 仓库内某处 / 去站内搜索」without a concrete URL for primary items
- Priority lesson lists without deep links to lesson folders (for multi-lesson courses)
