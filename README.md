# 具身智能数据工作台

单文件 HTML + 数据文件 + Git 双机同步的个人工作台。三大模块：

- **数据知识库**：18 张预填卡片，覆盖采集方式 / 数据处理 / 格式标准 / 工具链四大类（含 ARX 双臂、D405、LeRobot、π0 等你的语境）
- **论文自动流**：每日 08:30 自动收录具身智能领域最新论文与文章，去重、写摘要、自动入库
- **我的积累**：你的私人数据工程师日志（采集经验、踩坑、想法）

## 文件结构

```
embodied-workspace/
  index.html          # 工作台主页面（浏览器打开即用）
  data/
    knowledge.js      # 知识库数据（人工维护，勿被自动任务覆盖）
    papers.js         # 论文流数据（每日自动任务写入，按 arXiv id / URL 去重）
  README.md           # 本文件
```

## 本地使用

直接双击 `index.html` 用任意现代浏览器打开即可（Edge / Chrome / Firefox），不依赖任何外部网络或服务端。

## 跨电脑同步（推荐）

### 第一步：建 GitHub 私有仓库（5 分钟）

1. 用浏览器登 GitHub → New repository
2. 仓库名建议 `embodied-data-workspace`
3. 选 **Private**（私有）
4. 不要勾选「Initialize with README」（本地已有）
5. 创建后 GitHub 会给你一个 SSH 远程地址，形如：
   `git@github.com:liyang666-dve/embodied-data-workspace.git`

### 第二步：关联远程并推送（在「家里」电脑执行一次）

PowerShell 或 Git Bash：

```
cd "C:\Users\李扬\Desktop\数据系统\embodied-workspace"
git remote add origin git@github.com:liyang666-dve/embodied-data-workspace.git
git push -u origin main
```

扬哥的 SSH key 已在 `D:\ssh\`（参考现有 sync.ps1 配置）；如果 push 失败需要先把 SSH key 加到 GitHub 账户。

### 第三步：在「公司」电脑拉取

先把仓库拉到公司电脑的合适目录（如 `~/Desktop/数据系统/embodied-workspace`），然后：

```
cd <目录>
git clone git@github.com:liyang666-dve/embodied-data-workspace.git
```

之后任意电脑上修改后，习惯：

```
git add .
git commit -m "xxx"
git push
```

另一台电脑：

```
git pull
```

## 每日论文自动收集

- 每天 08:30，WorkBuddy 的定时任务 `具身智能论文每日自动收集` 自动执行：
  - 检索近 48 小时 arXiv + 中文站点具身智能领域论文/文章
  - 与现有论文去重
  - 追加到 `data/papers.js`
  - 自动 git commit；远程存在则 push
- 需要至少一台电脑在设定时间开机并运行 WorkBuddy（建议家里电脑）
- 数据文件变化后，另一台电脑执行 `git pull` 即同步

## 私人数据 vs 共享数据

| 类型 | 存储位置 | 跨电脑 |
|------|---------|--------|
| 知识库内容 | `data/knowledge.js` | 共享（随仓库） |
| 论文流 | `data/papers.js` | 共享（随仓库） |
| 已读 / 收藏状态 | 浏览器 localStorage | 每台电脑独立 |
| 我的积累笔记 | 浏览器 localStorage | 每台电脑独立 |
| 笔记/状态备份 | 浏览器「导出备份」按钮 → JSON 文件 | 可手动 commit 到仓库或独立备份 |

换电脑或清缓存前先点页面右上角「导出备份」。

## 关闭定时任务

如果某段时间不想跑定时任务：到 WorkBuddy 设置里找到 `具身智能论文每日自动收集`，点暂停。再次开启即可恢复。

## 修改知识库

`data/knowledge.js` 是人工维护的。直接编辑该文件（或喊 AI 帮你改），保持每条卡片结构与现有风格相符，然后：

```
git add data/knowledge.js
git commit -m "docs: update knowledge card kxx"
git push
```

## 隐私说明

仓库内容只对仓库协作者可见（私有仓库）。页面对任何人只要拿到链接都能打开——但默认没有链接，所有访问需要先 clone 仓库。所以默认是安全的。导出备份 JSON 含本地数据，请妥善保存。