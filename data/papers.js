// 具身智能数据工作台 · 论文自动流数据
// 本文件由「每日自动收集任务」维护：每天检索新论文 → 按 id 去重 → 追加新条目
// 初始种子为 6 篇具身智能领域经典论文（真实论文，可直接阅读）
window.WB_P = [
  {
    id: "2212.06817", title: "RT-1: Robotics Transformer for Real-World Control at Scale",
    authors: "Brohan et al., Google",
    url: "https://arxiv.org/abs/2212.06817",
    source: "arxiv", lang: "en",
    pub_date: "2022-12-13", added_at: "2026-08-28",
    category: "model",
    tags: ["VLA", "Transformer", "规模化"],
    summary: "首个大规模真实机器人操作 Transformer：13 台机器人在办公厨房收集 13 万条 episode，验证『数据规模 = 任务泛化』，机器人 VLA 的起点。"
  },
  {
    id: "2401.02117", title: "Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation",
    authors: "Zhao et al., Stanford",
    url: "https://arxiv.org/abs/2401.02117",
    source: "arxiv", lang: "en",
    pub_date: "2024-01-04", added_at: "2026-09-04",
    category: "collection",
    tags: ["遥操作", "双臂", "ACT", "低成本"],
    summary: "全身遥操作 + 低成本双臂移动平台：单个任务仅 50 条演示即可把成功率提至 90%，ACT 训练的代表性工作。"
  },
  {
    id: "2404.08751", title: "UMI: Universal Manipulation Interface — In-The-Wild Robot Teaching Without In-The-Wild Robots",
    authors: "Chi et al., Columbia & Stanford",
    url: "https://arxiv.org/abs/2404.08751",
    source: "arxiv", lang: "en",
    pub_date: "2024-04-12", added_at: "2026-09-05",
    category: "collection",
    tags: ["手持", "低成本", "SLAM"],
    summary: "手持夹爪 + GoPro 在非结构化环境采集，SLAM 从视频恢复动作，策略直接部署到真实夹爪——低成本规模化采集的标杆。"
  },
  {
    id: "2310.08864", title: "Open X-Embodiment: Robotic Learning Datasets and RT-X Models",
    authors: "Open X-Embodiment Collaboration",
    url: "https://arxiv.org/abs/2310.08864",
    source: "arxiv", lang: "en",
    pub_date: "2023-10-13", added_at: "2026-09-05",
    category: "format",
    tags: ["OpenX", "跨本体", "预训练", "标准"],
    summary: "21 个机构、22 种机器人、约 50 万条 episode 的跨本体数据集与统一格式，训练出 RT-1-X / RT-2-X，证明数据规模红利可跨平台迁移。"
  },
  {
    id: "2410.24164", title: "π0: A Vision-Language-Action Flow Model for General Robot Control",
    authors: "Black et al., Physical Intelligence",
    url: "https://arxiv.org/abs/2410.24164",
    source: "arxiv", lang: "en",
    pub_date: "2024-10-16", added_at: "2026-09-05",
    category: "model",
    tags: ["VLA", "双臂", "flow-matching", "语言指令"],
    summary: "Physical Intelligence 的通用 VLA 基座：flow matching 动作专家 + 语言视觉骨干，在家务级双臂任务上达到 SOTA——公司 π0.5 训练即出自这一系列。"
  },
  {
    id: "2403.12945", title: "DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset",
    authors: "Khazatsky et al., Stanford & Google",
    url: "https://arxiv.org/abs/2403.12945",
    source: "arxiv", lang: "en",
    pub_date: "2024-03-19", added_at: "2026-09-05",
    category: "collection",
    tags: ["大规模", "遥操作", "成功率清洗"],
    summary: "分布式遥操作数据集：约 7.6 万 episode、564 场景、86 任务，配套成功率预测器做数据清洗，展示大规模真实数据管线该怎么搭。"
  }
];
