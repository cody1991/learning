# 学习路径（企业搜不到 Ulibarri 时）

## 直链速查

- C++ Quick Start：https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-cpp-quick-start  
- Programming with C++：https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-with-cplusplus-in-unreal-engine  
- Epic Learning：https://dev.epicgames.com/community/unreal-engine/learning  
- Lyra：https://dev.epicgames.com/community/learning/courses/Yj3/unreal-engine-lyra-sample-game  
- 企业站搜课：https://tencent.udemy.com/ （关键词见 [enterprise-udemy.md](./enterprise-udemy.md)）  
- （可选）Ulibarri 公开课：https://www.udemy.com/course/unreal-engine-5-the-ultimate-game-developer-course/  

---

## 0. 环境

1. Epic Launcher 安装 **UE 5.8**  
2. 装好 VS / Xcode（C++ 游戏开发工作负载）  
3. 新建 **C++** 项目（Third Person 模板即可）

## 1. 官方 Quick Start（必做）

按文档做完一遍：  
https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-cpp-quick-start  

目标：会建 C++ 类、编译、回编辑器测 Actor。

## 2. 文档主线（按主题啃，配合小实验）

从这里进：  
https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-with-cplusplus-in-unreal-engine  

建议顺序（自己在项目里各做一个小实验）：

| 阶段 | 主题 | 你要会的 |
|------|------|----------|
| A | Gameplay classes / Actor / Component | 反射、`UCLASS`/`UPROPERTY`/`UFUNCTION` |
| B | 输入（Enhanced Input） | 角色移动、镜头 |
| C | 碰撞 / 重叠 / 定时器 / 委托 | 基础交互 |
| D | UI（UMG）一点 | 血条/简单 HUD（可后置） |
| E | 看 Lyra 目录 | 大项目怎么拆模块 |

卡 API 查：https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-5-8-release-notes  

## 3. Epic Learning 视频（免费加餐）

https://dev.epicgames.com/community/unreal-engine/learning  

筛选：**Programming & Scripting** / C++ / Unreal Engine 5。  
当「视频讲解」，仍以自己工程练习为准。

## 4. 企业 Udemy（质检过关才跟）

打开 https://tencent.udemy.com/ ，见 [enterprise-udemy.md](./enterprise-udemy.md)。  

- **进阶候选（有基础后）**：[Advanced Action RPG / Vince Petrelli](https://tencent.udemy.com/course/unreal-engine-5-advanced-action-rpg/)（GAS C++）  
- **不当入门主课**：C++ Arsenal（大半零基础 C++）、蓝图课、百科式「Complete Guide」  
- 仍没有合适课 → 继续 1–3；或申请加购 Ulibarri  
 

## 5. 巩固

自开小项目（任意题材）：玩法 **C++**，蓝图只绑资源/调参。

## 和 AI 协作

改 `.h/.cpp`；要求遵守 UE 反射与内存习惯；少改蓝图图。

## 学习笔记

（章节、企业站搜到的课名、5.8 差异）
