# 学习路径

## 0. 环境

1. 安装 **Unreal Engine 5.8**（Epic Launcher）
2. 装好 C++ 工具链（Windows 常用 Visual Studio，勾选游戏/C++ 相关工作负载）
3. 新建 C++ 项目（Third Person 模板即可，题材不限）

## 1. 主课（唯一跟练课）

- 课程：Stephen Ulibarri《UE5 C++ The Ultimate Developer Course》
- 代码：https://github.com/DruidMech/UE5_TheUltimateDeveloperCourse
- 做法：按章节做，**自己敲**；编译不过先查课 Q&A / 5.8 文档

版本不一致时：

1. 看编译器报错  
2. 搜 5.8 文档或 Release Notes  
3. 再改 API，不要整段换成蓝图绕过  

## 2. 官方 Sample（并行浏览，不跟视频）

- 在 Launcher 下载 **Lyra**（或当前推荐的官方 Game Sample）
- 目的：看目录、模块、GAS/UI/输入怎么组织  
- 不要试图「从第一行抄到最后」

## 3. 巩固

主课核心玩法段结束后，自开小项目（任何题材）：

- 例如：简单交互关卡、工具编辑器小插件、一个小敌人 AI  
- 规则仍是：**玩法 C++**，蓝图只绑资源和调参  

## 和 AI 协作（可选习惯）

- 让 AI 写/改 `.h/.cpp`，并要求遵守 `UCLASS` / `UPROPERTY` / `UFUNCTION`、避免错误内存管理  
- 蓝图：人工在编辑器里点；少贴截图让 AI「改蓝图」

## 学习笔记

（跟课章节、5.8 API 差异、自己项目点子往下记）
