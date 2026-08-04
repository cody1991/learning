# Learning

个人学习笔记仓库 + [Learning Hub](https://cody1991.github.io/learning/) 静态站。

## 学习线

每条线是仓库根下独立目录。含 `README.md` + `track.json` 的目录会自动出现在站点首页。

| 目录 | 说明 |
|------|------|
| `microsoft-ai-courses/` | GenAI → Agents |
| `data-engineering/` | DE101 → Zoomcamp |
| `english-speaking-listening/` | 精听 + 低压力口语 |
| `ai-infra/` | DMLS → Made With ML → serving |
| `unreal-engine/` | UE 5.8 C++ |

**实操代码**：本仓 [`labs/`](./labs/)（跟课 clone / venv；与各 track 笔记分开，集中管理）。

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
