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
  },
  {
    id: "2609.03591", title: "Scaling Bimanual Household Manipulation from 1,500 hours of Demonstrations to On-Policy Corrections",
    authors: "Xu et al.",
    url: "https://arxiv.org/abs/2609.03591",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-03", added_at: "2026-09-06",
    category: "collection",
    tags: ["双臂家务", "大规模数据集", "on-policy修正", "数据闭环"],
    summary: "发布 1500 小时双臂家务演示数据，再用真机 on-policy 纠错做微调，把『采集—部署—修正』串成闭环的大规模实操，双臂泛化瓶颈的正面回答。"
  },
  {
    id: "2609.03927", title: "Toward Unified Robot Learning: Bridging Representation, Vision-Language-Action, and World Models",
    authors: "Mehta et al.",
    url: "https://arxiv.org/abs/2609.03927",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-03", added_at: "2026-09-06",
    category: "model",
    tags: ["VLA", "世界模型", "表征学习", "综述"],
    summary: "综述表示学习、VLA 与世界模型三条路线如何走向统一机器人学习，梳理把感知—动作—后果预测整合进单一模型的趋势、分歧与待解问题。"
  },
  {
    id: "2609.03557", title: "Building Pretraining Data for World Models: An Unreal Engine-Based Pipeline for Action-Conditioned Video Generation",
    authors: "Wang et al.",
    url: "https://arxiv.org/abs/2609.03557",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-03", added_at: "2026-09-06",
    category: "processing",
    tags: ["仿真数据", "世界模型", "Unreal Engine", "视频生成"],
    summary: "用 Unreal Engine 搭合成数据管线，批量产出动作条件视频，给世界模型预训练补上真实世界难以成对标注『动作—画面变化』的训练数据。"
  },
  {
    id: "2609.04193", title: "GIFT: Guided Intermediate Feature Training via Action-Oriented Structural Supervision for Robotic Manipulation",
    authors: "Zheng et al.",
    url: "https://arxiv.org/abs/2609.04193",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-03", added_at: "2026-09-06",
    category: "model",
    tags: ["VLA", "特征训练", "结构监督", "操作策略"],
    summary: "指出预训练视觉/世界模型特征夹带大量与控制无关的冗余，用动作导向结构监督引导中间特征训练，让操作策略学得更准、更省数据。"
  },
  {
    id: "2609.03715", title: "MINERVA: How Small Can a Manipulation Policy Be and Still Solve LIBERO?",
    authors: "Sendai, Matsushima & Iwasawa",
    url: "https://arxiv.org/abs/2609.03715",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-03", added_at: "2026-09-06",
    category: "model",
    tags: ["VLA", "轻量化", "LIBERO", "容量下限"],
    summary: "追问操作策略到底需要多大模型：在 LIBERO 上用刻意紧凑的 visuomotor 策略逼近大 VLA 成绩，给训练部署成本与蒸馏提供下限参考。"
  },
  {
    id: "2609.03276", title: "R2S-Eval: Robot Evaluation with Real-to-Sim Calibration via Vision-Language Models",
    authors: "Wang et al.",
    url: "https://arxiv.org/abs/2609.03276",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-03", added_at: "2026-09-06",
    category: "processing",
    tags: ["策略评测", "sim2real", "VLM校准", "数据质控"],
    summary: "用 VLM 做 real-to-sim 校准，把繁琐的真机评测搬进仿真、自动补拍差异，让策略评估更省人力更可复现，补上数据闭环的质控环节。"
  },
  {
    id: "2026_09_05_830069", title: "机器人链条上，数采赛道正热闹",
    authors: "观察者网",
    url: "https://www.guancha.cn/economy/2026_09_05_830069.shtml",
    source: "cn", lang: "cn",
    pub_date: "2026-09-05", added_at: "2026-09-06",
    category: "collection",
    tags: ["数据采集产业", "数据工厂", "真机采集", "无本体采集"],
    summary: "梳理数采五路大军格局：智元真机数据工厂、觅蜂无本体采集、宇树 G1-D 全栈、京东千万小时中心——谁能把高质量数据成本打下来谁握话语权。"
  },
  {
    id: "20260906A00AAH00", title: "Google 开发者大会观察：具身智能下半场，开源人体数据建标准",
    authors: "腾讯新闻",
    url: "https://new.qq.com/rain/a/20260906A00AAH00",
    source: "cn", lang: "cn",
    pub_date: "2026-09-06", added_at: "2026-09-06",
    category: "format",
    tags: ["人体运动数据", "HiPHI", "跨机型复用", "数据标准"],
    summary: "诺亦腾开源 617.5 小时高精度人体运动数据集 HiPHI，为动作建结构化语言：人类数据不随机器人硬件迭代作废、可跨机型复用，走『开源建标杆』路线。"
  },
  {
    id: "70000021_3066a9b299c36652", title: "具身智能技术路线「暗战」",
    authors: "腾讯新闻（WRC 2026 报道）",
    url: "https://so.html5.qq.com/page/real/search_news?docid=70000021_3066a9b299c36652",
    source: "cn", lang: "cn",
    pub_date: "2026-09-06", added_at: "2026-09-06",
    category: "model",
    tags: ["NeuroVLA", "世界模型", "类脑架构", "技术路线"],
    summary: "WRC 2026 技术路线观察：类脑 NeuroVLA、统一表征 Pelican-Unify、自进化 L4E/E4L 同台竞争，行业共识从『谁是大脑终极路线』转向如何增强系统化能力。"
  }
];
