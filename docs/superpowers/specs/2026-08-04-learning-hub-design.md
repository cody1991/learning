# Learning Hub 站点设计

日期：2026-08-04  
仓库：https://github.com/cody1991/learning  
状态：待用户确认后进入实现计划

## 1. 目标

把本仓库的学习笔记做成可浏览的静态站，作为长期学习入口。

- **读者**：自己为主，公开无妨（GitHub Pages）
- **内容深度**：各 track 的 Markdown 全量渲染 + **全局进度** + **全站搜索**
- **视觉**：书房 / 编辑部气质（非赛博仪表盘、非奶油衬线网红风）
- **真相来源**：继续只维护仓库根下各 track 的 `.md`；站点构建时读取，不维护第二套文案

## 2. 非目标（v1）

- 登录 / 账号
- 在网页上勾选进度并写回 Git
- 评论、社交、多语言切换
- 企业 Udemy SSO 嵌入
- 腾讯 OA Pages（本需求明确要 GitHub Pages）

## 3. 信息架构

| 路由 | 内容来源 |
|------|----------|
| `/` | 站点首页：书名感标题 + 5 条学习线入口（第一门一句话 + 链到 track） |
| `/tracks/<slug>/` | `<slug>/README.md` |
| `/tracks/<slug>/<doc>/` | 同目录下其它 md（`path`、`comparison`、`routine`、`resources`、`01-*.md`、`enterprise-udemy.md` 等） |
| `/progress` | 构建时解析各 README（及可选 `01-*.md`）中的 `- [ ]` / `- [x]`，汇总进度 |
| 搜索 UI | Pagefind（构建后静态索引） |

**Track 列表（v1 写死元数据 + 扫目录校验）**

| slug | 显示名 | 第一门（展示用，与 README 一致） |
|------|--------|----------------------------------|
| `microsoft-ai-courses` | Microsoft AI | Generative AI → Agents |
| `data-engineering` | Data Engineering | DE101 → Zoomcamp |
| `english-speaking-listening` | English | BBC 6 Minute + 跟读 |
| `ai-infra` | AI Infra | DMLS |
| `unreal-engine` | Unreal Engine | Epic C++ Quick Start |

**排除不入库的路径**：`.cursor/`、`docs/superpowers/`、`site/` 自身、`node_modules/`。

相对链接：站点内 md→md 尽量重写成站点路由；外链 `http(s)` 保持新标签打开。

## 4. 技术选型

- **框架**：Astro（静态输出）
- **内容**：Astro Content Layer / glob 读取仓库根 track 目录的 Markdown（`site` 为子项目时用相对路径 `../<track>/**/*.md`）
- **Markdown**：GFM（表格、勾选框、代码块）
- **搜索**：Pagefind（build 后对 `dist` 建索引）
- **部署**：GitHub Actions → GitHub Pages  
  - base path：`/learning/`（仓库名 `learning`，用户页为 `https://cody1991.github.io/learning/`）
  - Astro `site` + `base` 配置与之对齐
- **包管理**：在 `site/` 下独立 `package.json`（不污染笔记根目录的心智）

## 5. 视觉方向

**概念**：私人书房书架 —— 安静、可读、长期打开不累。

- 背景：暖灰纸色（避免纯白刺眼，也避开常见奶油+#F4F1EA+赤陶套路）
- 文字：近墨黑；强调色用一条沉稳的墨绿或藏青（二选一，实现时定死 CSS 变量）
- 字体：有辨识度的衬线作标题 + 清晰人文无衬线作正文（不用 Inter/Roboto/系统默认堆）；代码/课号用等宽
- 动效：进页轻微 stagger；hover 克制；不做霓虹/glow
- 首页：一屏一个完整构图（书名 + 一句说明 + 学习线列表），不做仪表盘式 stat 条

## 6. 进度页规则

- 扫描：`*/README.md`，以及带进度列表的 `01-*.md` 等（实现时可先 README，再扩展）
- 统计：未勾选 `[ ]` vs 已勾选 `[x]` / `[X]`
- 展示：按 track 分组进度条或分数；链回对应页面
- 说明文案：进度来自笔记勾选；改 md 后重新部署才更新（v1 诚实说明）

## 7. 仓库布局

```text
learning/                    # 笔记根（现有 track 不变）
├── ai-infra/ …
├── site/                    # Astro 应用
│   ├── package.json
│   ├── astro.config.mjs
│   ├── src/pages/ …
│   └── public/ …
├── docs/superpowers/specs/  # 本设计与后续计划
└── .github/workflows/pages.yml
```

根目录可补极简 `README.md`：说明笔记结构 + 站点本地启动 + Pages URL（实现阶段写）。

## 8. 成功标准

1. 本地 `site` 下 `npm run build` 成功，预览可点开全部 track 文档
2. `/progress` 数字与当前 md 勾选一致
3. 搜索能命中课名/关键词（如「Quick Start」「Zoomcamp」）
4. push 到 `master` 后 Actions 部署，公开 URL 可打开
5. 视觉一眼是书房站，不是通用 AI 模板紫渐变

## 9. 风险与对策

| 风险 | 对策 |
|------|------|
| GitHub Pages base path 资源 404 | Astro `base: '/learning/'` + 相对资源 |
| md 相对链接断 | 构建时重写或文档约定优先用绝对 https |
| `.cursor` 误发布 | content 配置显式只 include 五个 track |
| 勾选解析漏文件 | progress 页注明扫描范围；后续再扩 |

## 10. 实现顺序（概要）

1. Scaffold `site/` + 书房全局样式 + 首页  
2. Track 列表与 md 渲染路由  
3. Progress 解析页  
4. Pagefind  
5. Actions + Pages 开启说明  
6. 根 README 补站点入口  

详细任务拆分见确认本 spec 后的 `docs/superpowers/plans/` 计划文件。
