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

## 新电脑快速上手（GenAI）

笔记仓里**没有**课程源码；换机器按下面拉齐即可。

```bash
# 1. clone / pull 本笔记仓
git clone https://github.com/cody1991/learning.git
cd learning

# 2. 拉课程源码
./labs/bootstrap.sh genai

# 3. Python 环境
cd labs/microsoft-generative-ai-for-beginners
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt   # 若无则按 00-course-setup 装

# 4. 配置密钥（勿提交）
cp .env.copy .env
# 编辑 .env，至少：
#   OPENAI_API_KEY='你的网关 Key'
#   OPENAI_BASE_URL='https://litellm.ai.levelinfinite.com/v1'
#   OPENAI_CHAT_MODEL='gpt-4o-mini'

# 5. 冒烟（官方样本默认写死 gpt-5-mini 时，先改成 gpt-4o-mini 或读 OPENAI_CHAT_MODEL）
python 06-text-generation-apps/python/oai-app.py
```

说明：

- `.env` / `.venv` / 课程目录都不进 git，必须每台机器自己建
- SDK 会读 `OPENAI_BASE_URL`；若终端里残留旧 `OPENAI_API_KEY`，先 `unset OPENAI_API_KEY`，或样本里用 `load_dotenv(override=True)`
- 中文课：`translations/zh-CN/<课号>-*/README.md`
- 笔记进度仍在 `microsoft-ai-courses/`，不在 labs

## Git 说明

- `labs/` 目录在本仓内管理
- `.venv`、`.env` 等已被忽略
- 上游课程源码默认**不提交**（体积大、应跟 upstream）；本地用 `bootstrap.sh` 拉齐。若你坚持把某课源码也 commit，从 `.gitignore` 去掉对应行即可。
