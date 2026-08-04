# 学习路径（含主课章节走向）

## 直链速查

- 主课：https://www.udemy.com/course/unreal-engine-5-the-ultimate-game-developer-course/
- 代码：https://github.com/DruidMech/UE5_TheUltimateDeveloperCourse
- 5.8 文档入口：https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-with-cplusplus-in-unreal-engine
- Lyra：https://dev.epicgames.com/community/learning/courses/Yj3/unreal-engine-lyra-sample-game

---

## 0. 环境

1. Epic Launcher 安装 **Unreal Engine 5.8**
2. 安装 C++ 工具链（Windows：Visual Studio，勾选游戏开发/C++）
3. 打开主课；需要时 clone 配套仓对照（工程名多为 `Slash`）

---

## 1. 主课怎么跟（唯一跟练课）

按 Udemy 课纲走（Action-RPG / Open World，C++ 从零搭）。大致阶段：

| 阶段 | 课里大致内容 | 你要拿到的能力 |
|------|----------------|----------------|
| A. 编辑器与 Open World | 关卡、Open World、书签/截图等 | 会开工程、逛世界、导入环境 |
| B. C++ 与调试基础 | 向量、C++ 概念、Debug 函数 | 能写/读简单 UE C++，会打日志调试 |
| C. Actor / Item | Item、旋转等交互物 | `AActor`、Tick、组件直觉 |
| D. Pawn / 飞行等 | Bird 等示例 | Pawn、输入、在 Open World 里动起来 |
| E. Character | `ACharacter`、Enhanced Input、Camera / SpringArm（Echo） | 第三人称角色与输入 |
| F. Animation | AnimBP、Anim Instance C++、跳跃等 | 动画与 C++ 桥接 |
| G. 内容与战斗向 | Quixel/资产、近战武器、可破坏物、敌人/生物、地牢 Packed Level 等 | 把玩法系统往完整原型推 |

课页宣传点（方便你对照进度）：Open World、Quixel、地形、地牢、武器近战、可破坏掉宝、多种敌人、AnimBP Templates 等。

**跟课规则**

- 自己敲代码；卡编译 → 课 Q&A → [5.8 Release Notes](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-5-8-release-notes) / C++ 文档
- 课内若仍是旧 Input，按课内 Enhanced Input 补充讲座走；与 5.8 冲突以官方文档为准
- 不要用「改成蓝图」绕过 C++ 报错

---

## 2. 官方 Sample（并行浏览，不跟视频逐行抄）

- 下载 **Lyra**，看模块拆分、输入、UI、GAS 等组织方式  
- 介绍：https://dev.epicgames.com/community/learning/courses/Yj3/unreal-engine-lyra-sample-game  

---

## 3. 巩固

主课核心（至少到 Character + Animation + 一套战斗/敌人）结束后，自开小项目任意题材：

- 玩法逻辑 **C++**；蓝图只绑资源/调参  

---

## 和 AI 协作

- 改 `.h/.cpp`，要求 `UCLASS` / `UPROPERTY` / `UFUNCTION`、注意 UE 内存与 GC  
- 少贴蓝图截图让 AI「改图」

## 学习笔记

（章节进度、5.8 API 差异、自己项目点子）
