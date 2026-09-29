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
  },
  {
    id: "2609.05324", title: "RoboSPA: Can VLA Models Go Beyond Simple Scenes and Short-Horizon Tasks?",
    authors: "Fan et al.",
    url: "https://arxiv.org/abs/2609.05324",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-04", added_at: "2026-09-07",
    category: "processing",
    tags: ["VLA诊断", "评测基准", "难度分级", "空间推理"],
    summary: "发布含 52.7 万条轨迹的大规模操作数据集与诊断基准 RoboSPA：280 个难度递进任务变体，用细粒度指标暴露 VLA 在复杂空间关系与长时程规划上的短板。"
  },
  {
    id: "2609.05178", title: "LIBERO-RECOVER: Beyond Task Success Towards Failure Recovery in Robotic Manipulation Models",
    authors: "Liu et al.",
    url: "https://arxiv.org/abs/2609.05178",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-04", added_at: "2026-09-07",
    category: "processing",
    tags: ["失败恢复", "评测基准", "LIBERO", "数据闭环"],
    summary: "收集 SOTA 模型真实执行失败，构建 1000+ 四级恢复场景基准，把评测从『任务能不能成』转向『失败后会不会自救』，直指 benchmark 与真实可靠性的鸿沟。"
  },
  {
    id: "2609.05369", title: "Towards Neuro-Symbolic Procedural Reasoning for Long-Horizon Vision-Language-Action Manipulation",
    authors: "Chavan et al.",
    url: "https://arxiv.org/abs/2609.05369",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-04", added_at: "2026-09-07",
    category: "model",
    tags: ["VLA", "长时程", "神经符号", "任务图"],
    summary: "给 VLA 外挂显式任务图与多模态过程记忆，并用遥操作视频的伪注视标注引导微调，让长时程任务的顺序执行、条件分支与目标校验更可靠。"
  },
  {
    id: "2609.04893", title: "Reasoning Without Inference Cost: Latent Semantic Scaffolding for Robot VLA Policies",
    authors: "Li et al.",
    url: "https://arxiv.org/abs/2609.04893",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-04", added_at: "2026-09-07",
    category: "model",
    tags: ["VLA", "预训练", "因果推理", "零开销"],
    summary: "在人类演示预训练里加辅助损失，把动作 token 对齐到物理推理文本，部署时丢掉投影头、推理零额外开销，让 VLA 学会『为什么动』并更好迁移到新任务。"
  },
  {
    id: "202609073866521685", title: "机器人数据喷涌，但危险的信号也出现了",
    authors: "东方财富",
    url: "https://finance.eastmoney.com/a/202609073866521685.html",
    source: "cn", lang: "cn",
    pub_date: "2026-09-07", added_at: "2026-09-07",
    category: "collection",
    tags: ["无本体采集", "数据产业", "京东宿迁", "风险警示"],
    summary: "觅蜂无本体数据破百万小时、京东宿迁剑指千万小时采集社区，但部分数采项目失利警示：真金白银可能押错路线，数据供给放量与方向风险并存。"
  },
  {
    id: "20260907A03AGU00", title: "成立三年，这家中国公司缘何与英伟达“同列”",
    authors: "腾讯新闻",
    url: "https://new.qq.com/rain/a/20260907A03AGU00",
    source: "cn", lang: "cn",
    pub_date: "2026-09-07", added_at: "2026-09-07",
    category: "format",
    tags: ["开源数据集", "数据标准", "Ego数据", "持续学习"],
    summary: "光轮智能开源十万小时全模态人类行为数据集 EgoSuite-Open100K，并配套仿真评测与真机反馈平台，以『开源建标准』统一采集口径、标注规范与格式。"
  },
  {
    id: "70000021_3226a9e376c95852", title: "行业分歧声中，探访机器人数采场：谁在采？为谁采？如何采？",
    authors: "南方都市报（N视频）",
    url: "https://so.html5.qq.com/page/real/search_news?docid=70000021_3226a9e376c95852",
    source: "cn", lang: "cn",
    pub_date: "2026-09-07", added_at: "2026-09-07",
    category: "collection",
    tags: ["数采场", "无本体采集", "质检", "众包"],
    summary: "实地探访北京人形数据基地：数采员 8 小时产出约 3.5 小时有效数据，回流数据走自动化质检加人工抽检，样板基地与外部众包并行扩规模。"
  },
  {
    id: "20260907A0C80I00", title: "全栈自研下，众擎机器人如何推进产业化？",
    authors: "腾讯新闻",
    url: "https://new.qq.com/rain/a/20260907A0C80I00",
    source: "cn", lang: "cn",
    pub_date: "2026-09-07", added_at: "2026-09-08",
    category: "collection",
    tags: ["数据飞轮", "真机回流", "人形机器人", "VLA"],
    summary: "众擎全栈自研跑通数据飞轮：SE01/PM01/T800 的真机与仿真运动数据集反哺 EngineAI Awaken 大脑，WAM 与 VLA 融合驱动部署数据回流再训练。"
  },
  {
    id: "70000021_3206a9d4dc105252", title: "具身大脑打响“百模大战”：百万小时之后，数据仍然不够",
    authors: "腾讯新闻",
    url: "https://so.html5.qq.com/page/real/search_news?docid=70000021_3206a9d4dc105252",
    source: "cn", lang: "cn",
    pub_date: "2026-09-07", added_at: "2026-09-08",
    category: "collection",
    tags: ["数据质量", "数据分层", "回流数据", "VLA"],
    summary: "具身大脑百模大战下的数据反思：1 万小时里 9000 小时高度重复就难增新信息，银河通用将数据拆互联网/人类/合成/遥操/回流五层，比拼从规模转向质量分层。"
  },
  {
    id: "70000021_5366a9f53bf38452", title: "通用机器人，正在从一种身体变成一种架构",
    authors: "腾讯新闻",
    url: "https://so.html5.qq.com/page/real/search_news?docid=70000021_5366a9f53bf38452",
    source: "cn", lang: "cn",
    pub_date: "2026-09-07", added_at: "2026-09-08",
    category: "format",
    tags: ["跨本体", "统一表达", "VLA", "开源"],
    summary: "跨本体能力复用成主线：蚂蚁灵波 LingBot-VLA 2.0 用 55 维规范表达容纳 20 种构型、CrossFormer 以 90 万轨迹跨 20 本体共训一套权重，换身体不必清零重学。"
  },
  {
    id: "2609.26520", title: "MATE: Multi-Agent Virtual Teleoperation Platform for Humanoid Collaboration Data Collection",
    authors: "Yu et al.",
    url: "https://arxiv.org/abs/2609.26520",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-22", added_at: "2026-09-26",
    category: "collection",
    tags: ["虚拟遥操作", "多智能体协作", "人形数据采集", "免场地"],
    summary: "多智能体虚拟遥操作平台 MATE：多名异地操作员在同一物理仿真环境里同时操控全身人形机器人，省掉多台真机与专用场地，规模化采集协作型全身操作数据。"
  },
  {
    id: "2609.28314", title: "TANDEM: Task and Motion Planning with As-Needed Demonstrations for Efficient Vision-Language-Action Model Fine-tuning",
    authors: "Sahoo et al.",
    url: "https://arxiv.org/abs/2609.28314",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-23", added_at: "2026-09-26",
    category: "collection",
    tags: ["按需演示", "TAMP 规划", "遥操作成本", "微调效率"],
    summary: "指出人工遥操作大量时间浪费在机器人已会的动作上：TANDEM 把任务与运动规划当默认执行者，只在规划器力不能及处按需请人示范，压缩长时程任务采集成本。"
  },
  {
    id: "2609.28429", title: "Watch, Recall, Act: Always-On Robots in Concurrent Embodied Streams",
    authors: "Yi et al.",
    url: "https://arxiv.org/abs/2609.28429",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-23", added_at: "2026-09-26",
    category: "model",
    tags: ["流式策略", "π0.5 骨干", "双臂并发", "长时记忆"],
    summary: "面向永不重置的实时数据流：ARMS 在 π0.5 骨干上挂三个轻量模块，让机器人同时盯住远处线索、回想自己很久以前的动作，并在双臂并发下按指令到达与失效行动。"
  },
  {
    id: "2609.26672", title: "Imperfection for Precision: Upcycling Imperfect Data for High-Precision Robotic Manipulation",
    authors: "Wei et al.",
    url: "https://arxiv.org/abs/2609.26672",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-22", added_at: "2026-09-26",
    category: "processing",
    tags: ["数据上循环", "低精度数据", "flow-matching", "高精度操作"],
    summary: "把两类原本要丢弃的数据救回来：目标任务的低精度数据加不匹配任务的高精度数据，按 flow-matching 轨迹分段控制各自贡献位置，少采遥操作也能做高精度操作。"
  },
  {
    id: "2609.27734", title: "InfiNoVA: Infinite Novel View Augmentation for Viewpoint Invariant Robot Policies",
    authors: "Gottam, Rueckert & Dave",
    url: "https://arxiv.org/abs/2609.27734",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-23", added_at: "2026-09-26",
    category: "processing",
    tags: ["视角增强", "3D 高斯", "新视角合成", "相机位姿"],
    summary: "把同步多相机演示重建成时变 3D 高斯表征，从任意采样相机位姿渲染几何一致的新观测，用一份采集数据换稠密视角覆盖，治 VLA 换个机位就掉点的毛病。"
  },
  {
    id: "2609.25562", title: "IndustrialVLA-Bench: A Traceable Multi-Axis Evaluation of Open Robot Policy Models",
    authors: "Wang et al.",
    url: "https://arxiv.org/abs/2609.25562",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-22", added_at: "2026-09-26",
    category: "processing",
    tags: ["统一评测", "VLA vs WAM", "可追溯报告", "部署成本"],
    summary: "把六个已发布的 VLA 与世界动作模型放进同一报告口径：干净能力、鲁棒性、语言敏感度与部署成本分开评，让两条技术路线的取舍第一次变得可比。"
  },
  {
    id: "2609.26292", title: "RoboTwin-Phys: Do WAMs and VLAs Understand the Physical World?",
    authors: "Zhang et al.",
    url: "https://arxiv.org/abs/2609.26292",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-22", added_at: "2026-09-26",
    category: "processing",
    tags: ["物理多样性", "仿真基准", "质量与摩擦", "泛化测试"],
    summary: "现有仿真基准大多只变外观与布局、物理参数固定：RoboTwin-Phys 让 13 项物理属性（质量、摩擦、关节动力学）连续变化，专门暴露 WAM/VLA 对物理世界的理解短板。"
  },
  {
    id: "2609.28865", title: "Direction-Scale Decomposition in Action Representation: Rethinking What to Tokenize for Vision-Language-Action Models",
    authors: "Duan et al.",
    url: "https://arxiv.org/abs/2609.28865",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-24", added_at: "2026-09-26",
    category: "format",
    tags: ["动作表征", "离散 token", "方向尺度分解", "归一化"],
    summary: "离散动作 token 的表示方式长期被忽视：DSD 把平移与旋转增量先拆成方向与尺度再 token 化，让 token 不再随执行速度与数据集归一化漂移，跨演示共享几何结构。"
  },
  {
    id: "2609.25820", title: "Beyond Reconstruction Error: Analytical and Data-Driven Action Tokenization for Autoregressive Vision-Language-Action Models",
    authors: "Yang et al.",
    url: "https://arxiv.org/abs/2609.25820",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-22", added_at: "2026-09-26",
    category: "format",
    tags: ["动作 token 化", "表征对比", "率失真", "闭环控制"],
    summary: "重建误差低不等于控制得好：统一 token 化接口下对比解析、线性与非线性动作表征，3500 次 LIBERO rollout 显示排名随评价标准翻转，PCA 重建更准却序列更难预测。"
  },
  {
    id: "2609.29850", title: "BeyondRetarget: Learning Executable Humanoid Motions Directly from Monocular Video",
    authors: "Xiong et al.",
    url: "https://arxiv.org/abs/2609.29850",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-24", added_at: "2026-09-26",
    category: "format",
    tags: ["单目视频", "动作重定向", "人形机器人", "可执行动作"],
    summary: "绕开先建人体表征再重定向的老管线：直接从单目视频学人形机器人可执行的动作，避免人类与机器人运动机构、关节自由度差异导致误差逐级放大。"
  },
  {
    id: "2609.30092", title: "Self-Adaptive VLA for Robust Robot Deployment",
    authors: "Zhang et al.",
    url: "https://arxiv.org/abs/2609.30092",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-24", added_at: "2026-09-26",
    category: "model",
    tags: ["部署自适应", "硬件漂移", "后训练", "自回放"],
    summary: "针对磨损与标定误差导致的硬件漂移：先用刻意注入漂移的 rollout 做后训练，让 VLA 把自身回放当上下文在线自适应，免去每次部署都要重新现场标定。"
  },
  {
    id: "20260925_L7MBM59P", title: "具身智能不缺数据，缺的是一条产线",
    authors: "第一财经（网易转载）",
    url: "https://www.163.com/dy/article/L7MBM59P0519DDQ2.html",
    source: "cn", lang: "cn",
    pub_date: "2026-09-25", added_at: "2026-09-26",
    category: "processing",
    tags: ["数据产线", "数据闭环", "训练闭环", "阿里云"],
    summary: "阿里云云栖大会观点：卡点不在数据量而在缺一条工业化数据产线——时间对齐、Episode 分段、质检准入全自动，让数据闭环与训练闭环同转，迭代从周级压到日级。"
  },
  {
    id: "20260925_7689495712379241002", title: "给机器人攒「经验」：上海这家企业探索物理 AI 众包数采",
    authors: "上观新闻",
    url: "https://www.toutiao.com/article/7689495712379241002",
    source: "cn", lang: "cn",
    pub_date: "2026-09-25", added_at: "2026-09-26",
    category: "collection",
    tags: ["众包采集", "MEgo 设备", "无本体数据", "原子动作"],
    summary: "上观新闻探访觅蜂科技众包数采平台觅蜂派：MEgo 头戴设备多视角记录真实操作，长程动作拆成 120 多种原子动作，内测一个月注册 2 万人、提交 1.3 万份采集任务。"
  },
  {
    id: "20260925_4475087", title: "未来智造局｜具身智能数据加速「上量」，如何定义「好数据」？",
    authors: "新华财经",
    url: "https://m.cnfin.com/gs-lb//zixun/20260925/4475087_1.html",
    source: "cn", lang: "cn",
    pub_date: "2026-09-25", added_at: "2026-09-26",
    category: "format",
    tags: ["无本体数据", "UMI", "Ego 数据", "数据标准"],
    summary: "新华财经：觅蜂无本体数据破百万小时、穹彻自采 UMI 超 10 万小时，行业进入上量期，但真机 8 小时仅出 1 小时有效数据的低效仍在，好数据标准与本体适配仍待定义。"
  },
  {
    id: "2609.27160", title: "Fine Wrist Control as a Marker of Surgical Teleoperation Expertise",
    authors: "Gale et al.",
    url: "https://arxiv.org/abs/2609.27160",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-22", added_at: "2026-09-27",
    category: "collection",
    tags: ["遥操作", "操作者技能", "腕部运动", "采集质量"],
    summary: "用运动追踪对比 27 名新手与 9 名专家的遥操作生物力学：难动作时专家更稳地锁定腕部、肩肘仍留足活动范围且完成更快，说明操作者技能本身是可量化的采集质量变量。"
  },
  {
    id: "2609.25630", title: "PAKT: Physically-Aligned Kinesthetic Teaching for Reinforcement Learning",
    authors: "Johannsmeier & Narang, NVIDIA",
    url: "https://arxiv.org/abs/2609.25630",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-22", added_at: "2026-09-27",
    category: "collection",
    tags: ["动觉示教", "接触密集任务", "物理约束", "示教接口"],
    summary: "接触密集工业操作里遥操作不够用：PAKT 改用工业界更常见的动觉示教，并把操作者拖动的轨迹约束到机器人物理可复现范围内，让现场工人直接手把手教策略。"
  },
  {
    id: "2609.26313", title: "SafeLoop: Risk-Aware Rollback for Vision-Language-Action Manipulation",
    authors: "Lou et al.",
    url: "https://arxiv.org/abs/2609.26313",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-22", added_at: "2026-09-27",
    category: "processing",
    tags: ["失败恢复", "风险预测", "回滚", "非侵入外挂"],
    summary: "给 VLA 外挂一层不改参数的闭环安全网：从视觉与本体感觉预测碰撞/掉物概率与剩余时间，据此选择继续执行、存安全检查点或关节空间回退，把不可逆失败挡在发生之前。"
  },
  {
    id: "20260926A032RN00", title: "华为腾讯阿里都盯上的生意：不造机器人，却想控制所有机器人？",
    authors: "腾讯新闻",
    url: "https://news.qq.com/rain/a/20260926A032RN00",
    source: "cn", lang: "cn",
    pub_date: "2026-09-26", added_at: "2026-09-27",
    category: "model",
    tags: ["技术路线", "世界模型", "VLA", "数据量级"],
    summary: "拆解具身大脑三条主流路线的取舍与混搭：端到端 VLA 起步快但依赖训练分布，世界模型需千万小时级真实交互数据，而截至 2026 年初全球合规可用仅 50 万小时。"
  },
  {
    id: "20260926A03SJH00", title: "给机器人当老师，都教什么课？",
    authors: "腾讯新闻（财米油盐）",
    url: "https://news.qq.com/rain/a/20260926A03SJH00",
    source: "cn", lang: "cn",
    pub_date: "2026-09-26", added_at: "2026-09-27",
    category: "collection",
    tags: ["采集员职业", "训练场", "无本体采集", "真机遥操"],
    summary: "「具身智能机器人应用技术员」入列国家新职业：北京亦庄基地采集员 8 小时产出 4-5 小时有效数据；信通院报告指千万小时需求与数十万至百万小时供给存在量级差。"
  },
  {
    id: "20260926_1081029800", title: "让普通人给机器人喂数据：众包数采是门好生意吗？",
    authors: "红星新闻（搜狐转载）",
    url: "https://www.sohu.com/a/1081029800_121925623",
    source: "cn", lang: "cn",
    pub_date: "2026-09-26", added_at: "2026-09-27",
    category: "collection",
    tags: ["众包采集", "商业模式", "数据分级", "隐私边界"],
    summary: "红星新闻追问众包数采的账怎么算：Figure Index 已按质量时长付费试水，觅蜂派开放普通人接单；过去一年新增 106 家集中式数采中心、84 家运营，但多数未形成稳定商业闭环。"
  },
  {
    id: "20260927_L7PSDKIQ0511C4AA", title: "融1000万就想做具身智能数据？对话觅蜂 CEO 姚卯青",
    authors: "网易",
    url: "https://www.163.com/dy/article/L7PSDKIQ0511C4AA.html",
    source: "cn", lang: "cn",
    pub_date: "2026-09-27", added_at: "2026-09-27",
    category: "collection",
    tags: ["数据获取曲线", "场景丰富度", "行业分工", "Ego 数据"],
    summary: "觅蜂 CEO 谈为何转向众包：百万小时已满足不了 2026 年底的需求，必须开启数据获取第二增长曲线；叠衣服数据早已泛滥，场景丰富度与专业技能才是下一个瓶颈。"
  },
  {
    id: "20260927A08E5P00", title: "把摄像头戴在人头上，能解决机器人「数据荒」吗？",
    authors: "观察者网（腾讯新闻）",
    url: "https://news.qq.com/rain/a/20260927A08E5P00",
    source: "cn", lang: "cn",
    pub_date: "2026-09-27", added_at: "2026-09-28",
    category: "collection",
    tags: ["头戴设备", "众包采集", "EgoScale", "降本路径"],
    summary: "复盘数采路线三次降本：真机遥操单小时 500-1000 元，UMI 夹爪降门槛，EgoScale 用 2 万小时人类第一视角视频预训练、4 小时真机微调做到 88% 成功率。"
  },
  {
    id: "20260927_A1790413232034", title: "觅蜂科技推出物理 AI 数据众包平台「觅蜂派」",
    authors: "证券日报",
    url: "http://www.zqrb.cn/gscy/qiyexinxi/2026-09-27/A1790413232034.html",
    source: "cn", lang: "cn",
    pub_date: "2026-09-27", added_at: "2026-09-28",
    category: "collection",
    tags: ["众包平台", "MEgo 设备", "原子动作", "场景联盟"],
    summary: "觅蜂派发布：覆盖 22 类场景、5000 多个任务、5 万个真实环境，长程任务拆成 120 多种原子动作分级交付，并联合 50 余家企业组建场景数据联盟。"
  },
  {
    id: "20260927_162d6782c06704zfga", title: "从 Computer-Use 到 Robot-Use：一套接口让 VLM 直接「玩转」真实机器人",
    authors: "机器之心（新加坡国立大学 Show Lab）",
    url: "https://k.sina.com.cn/article_5953189932_162d6782c06704zfga.html",
    source: "cn", lang: "cn",
    pub_date: "2026-09-27", added_at: "2026-09-28",
    category: "model",
    tags: ["VLM Agent", "工具调用", "免适配", "跨本体"],
    summary: "把机器人操作抽象成 click/type 式工具接口，让 frontier VLM 免训练直接操控真机，绕开传统 VLA 逐本体适配与规划执行脱节两个老问题。"
  },
  {
    id: "20260927_162dab0450670bdo7e", title: "CoRL 2026：0 条带力数据预训练，上海交大团队让 VLA 学会力",
    authors: "机器之心（上海交大卢策吾、汶川团队）",
    url: "https://k.sina.cn/article_5953466437_162dab0450670bdo7e.html",
    source: "cn", lang: "cn",
    pub_date: "2026-09-27", added_at: "2026-09-28",
    category: "model",
    tags: ["力感知", "后训练", "接触密集", "模态稀缺"],
    summary: "力数据采集贵且难规模化：LIFT 保留纯视觉预训练知识，仅用 20-30 条在线带力数据做后训练注入反应式力，叠毛巾 73.3→84.2、插书 36.7→58.3。"
  },
  {
    id: "20260928_initirzi8832973", title: "索辰科技联合美梦空间发布 Physical-WAM 与物理漂移评测基准",
    authors: "新浪财经（财联社）",
    url: "https://finance.sina.com.cn/roll/2026-09-28/doc-initirzi8832973.shtml",
    source: "cn", lang: "cn",
    pub_date: "2026-09-28", added_at: "2026-09-28",
    category: "model",
    tags: ["世界动作模型", "物理评测", "开源基准", "物理漂移"],
    summary: "VLA 遇空间偏移与时序外推成功率断崖下跌：Physical-WAM 把摩擦、质量、重心编码成物理 token，配套 RoboTwin-Phys 基准做固定种子配对评测，代码数据榜单开源。"
  },
  {
    id: "2609.30735", title: "Praxis: Distilling Physical Interaction Priors from Egocentric Videos for Generalizable Whole-Body Manipulation",
    authors: "He et al.",
    url: "https://arxiv.org/abs/2609.30735",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-25", added_at: "2026-09-29",
    category: "collection",
    tags: ["Ego视频", "全身操作", "交互先验", "少样本泛化"],
    summary: "从单次第一视角视频里蒸馏物理交互先验，叠加闭环姿态校准与在线感知，让移动人形在物体位姿与接触条件变化下仍保住精准手物交互。"
  },
  {
    id: "2609.30842", title: "Impedance Cloning: Learning Equilibrium Point Parameters for Contact-Rich Manipulation",
    authors: "Takahashi et al.",
    url: "https://arxiv.org/abs/2609.30842",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-25", added_at: "2026-09-29",
    category: "format",
    tags: ["阻抗克隆", "平衡点参数", "接触密集", "无传感器提取"],
    summary: "不模仿可观测轨迹而模仿产生动作的生物力学先验：从双臂遥操作示教中用粒子滤波免力传感器提取刚度与平衡点，表面几何一变仍能稳住。"
  },
  {
    id: "2609.31225", title: "Imp-ACT: Adaptive Impedance Control and Action Chunking with Transformers to Learn Contact-Rich Manipulation from Demonstrations",
    authors: "Zanetti et al.",
    url: "https://arxiv.org/abs/2609.31225",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-25", added_at: "2026-09-29",
    category: "collection",
    tags: ["阻抗调制", "示教采集", "动作分块", "接触密集"],
    summary: "把方向相关的笛卡尔刚度调制直接做进示教采集环节：遥操作时自整定阻抗控制器沿运动方向调刚度，并随视觉观测一起记录，免人工选刚度。"
  },
  {
    id: "2609.31418", title: "CognitiveReality: Robot-Agnostic Semantic Gaussian Mapping with an LLM Agent for Immersive Collaborative VR Teleoperation",
    authors: "Kozlov et al.",
    url: "https://arxiv.org/abs/2609.31418",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-25", added_at: "2026-09-29",
    category: "collection",
    tags: ["VR遥操作", "语义高斯建图", "机器人无关", "语言指令"],
    summary: "把机器人 RGB-D 流变成带语义索引的实时高斯-TSDF 地图，VR 操作员与语言 Agent 共享：一套建图程序靠配置适配任意平台，语音指点即转机器人动作。"
  },
  {
    id: "2609.31048", title: "Kintsugi-VLA: Turning Failed Robot Rollouts into Recovery Data through Interventional Recoverability",
    authors: "Snegirev et al.",
    url: "https://arxiv.org/abs/2609.31048",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-25", added_at: "2026-09-29",
    category: "processing",
    tags: ["失败数据复用", "恢复数据", "仿真分支", "可恢复性"],
    summary: "指出仿真管线把失败 rollout 直接丢掉太浪费：借精确状态还原与分支，把失败轨迹转成定向合成的恢复数据，并用干预可恢复性挑出最值得留的状态。"
  },
  {
    id: "2609.30868", title: "VLaRL: Augmenting Vision-Language-Action Models with Simulation-Trained Latent-Conditioned Residual RL",
    authors: "Saito et al.",
    url: "https://arxiv.org/abs/2609.30868",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-25", added_at: "2026-09-29",
    category: "processing",
    tags: ["残差RL", "仿真训练", "冻结VLA", "潜空间对齐"],
    summary: "冻结 VLA 只训残差策略修正接触误差，且全部在仿真里训好再直接上真机：用 VLA 潜空间而非像素对齐绕开 sim2real 视觉差距，免真机 RL。"
  },
  {
    id: "2609.30833", title: "Fast Plans, Faithful Actions: Closing the Planning-Execution Gap in Hierarchical Vision-Language-Action Models",
    authors: "Xie et al.",
    url: "https://arxiv.org/abs/2609.30833",
    source: "arxiv", lang: "en",
    pub_date: "2026-09-25", added_at: "2026-09-29",
    category: "model",
    tags: ["分层VLA", "π0.5", "规划执行鸿沟", "推理加速"],
    summary: "拆解 π0.5 式分层 VLA 发现两处失效：waypoint 规划要 57 次昂贵 VLM 前向、且规划结果对动作生成几乎无贡献，作者分别从解码与执行两端把链路接上。"
  },
  {
    id: "20260928A04O4G00", title: "从真机到世界模型，具身智能正在补一条看不见的数据产线",
    authors: "腾讯新闻",
    url: "https://news.qq.com/rain/a/20260928A04O4G00",
    source: "cn", lang: "cn",
    pub_date: "2026-09-28", added_at: "2026-09-29",
    category: "processing",
    tags: ["数据产线", "数据飞轮", "数据工程化", "云栖大会"],
    summary: "云栖大会具身论坛判断：数据时长正在失去意义、模型增益才是计价单位，行业从「找数据」进入「造数据、管数据、用反馈再生产数据」阶段。"
  },
  {
    id: "20260928A06QLE00", title: "千万小时缺口下的突围：谁在为中国具身智能「喂」数据？",
    authors: "腾讯新闻",
    url: "https://news.qq.com/rain/a/20260928A06QLE00",
    source: "cn", lang: "cn",
    pub_date: "2026-09-28", added_at: "2026-09-29",
    category: "collection",
    tags: ["千万小时缺口", "训练场重资产", "场景壁垒", "长尾技能"],
    summary: "信通院数据：全国已建成超 70 家具身训练场、46 家在建，但仅部署百台人形本体成本就达数千万；觅蜂称合规场景数据仅约 100 万小时，缺口超 99%。"
  },
  {
    id: "20260928_initktny2919210", title: "从数据到智能，再到进化：Agent 正在重写 AI 基础设施",
    authors: "新浪科技",
    url: "https://tech.sina.cn/2026-09-28/detail-initktny2919210.d.html",
    source: "cn", lang: "cn",
    pub_date: "2026-09-28", added_at: "2026-09-29",
    category: "processing",
    tags: ["数据处理工序", "版本迭代", "LeRobot格式", "全模态引擎"],
    summary: "穹彻吕峻称具身数据从采集到训练要过几十道处理、一次版本迭代短则两周长则一月；阿里云称新管线让处理耗时降 40%，PB 级原始数据直出 LeRobot/RLDS。"
  },
  {
    id: "20260928_citnews222290", title: "量产前夜，机器人衍生赛道先火了",
    authors: "惊蛰研究所（中文科技资讯）",
    url: "https://www.citnews.com.cn/news/222290",
    source: "cn", lang: "cn",
    pub_date: "2026-09-28", added_at: "2026-09-29",
    category: "collection",
    tags: ["数据农场", "场景复刻", "数据交付", "衍生服务"],
    summary: "具身数据农场成独立生意：北京人形创新中心 5000 平米复刻 30 多场景、月产约 1.5 万小时并对外交付，基础重复动作数据价值被仿真稀释。"
  }
];
