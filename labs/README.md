# labs — 本仓库内的实操区

笔记（各 track 的 md）与**跟课代码**分开管理，但都在本仓：

```text
learning/
├── microsoft-ai-courses/   # 笔记
├── labs/                   # 实操（本目录）
│   ├── README.md
│   ├── bootstrap.sh        # 按需 clone 课程
│   └── microsoft-generative-ai-for-beginners/
└── site/                   # Learning Hub
```

| 放 `labs/` | 放各 `<track>/` |
|------------|-----------------|
| 课程 clone、venv、notebook 练习 | 路径、进度勾选、概念笔记 |
| `.env`（勿提交） | Learning Hub 展示的内容 |

## 已有课程

| 目录 | 笔记 | 上游 |
|------|------|------|
| `microsoft-generative-ai-for-beginners/` | `microsoft-ai-courses/` | https://github.com/microsoft/generative-ai-for-beginners |

## 新增实操课

```bash
# 方式 1：脚本
./labs/bootstrap.sh microsoft-generative-ai-for-beginners

# 方式 2：手动
cd labs
git clone --depth 1 <upstream-url> <course-slug>
```

在对应 track 笔记里写上 `labs/<course-slug>/` 路径。

## GenAI

```bash
cd labs/microsoft-generative-ai-for-beginners
python3 -m venv .venv
source .venv/bin/activate
# 按 00-course-setup 配置 .env（API Key），不要提交
```

## Git 说明

- `labs/` 目录在本仓内管理
- `.venv`、`.env` 等已被忽略
- 上游课程源码默认**不提交**（体积大、应跟 upstream）；本地用 `bootstrap.sh` 拉齐。若你坚持把某课源码也 commit，从 `.gitignore` 去掉对应行即可。
