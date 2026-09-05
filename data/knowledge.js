// 具身智能数据工作台 · 知识库数据
// 每日自动任务只更新 papers.js，本文件由人工/专家维护，勿被自动任务覆盖
window.WB_K = [
  {
    id: "k01", cat: "collection", title: "遥操作采集 Teleoperation",
    tags: ["遥操作", "双臂", "主从控制", "ARX"],
    summary: "人通过主从设备示范动作逐条录数据，是双臂精细操作的主力采集方式。",
    detail: [
      "主从映射两种主流：位置-姿态映射（position-orientation）与关节空间映射；双臂平台多用前者，手感更直觉",
      "硬件形态：同构主臂（ARX/ALOHA 方案，精度高）与异构外设（VR 手柄/SpaceMouse/力反馈，更轻便）",
      "频率与延迟：采集控制频率需一致（常见 30-50Hz），高延迟会破坏图像与动作的时间对齐",
      "每条记录应落：语言指令、operator 标识、device_config、成功率标记——失败样本与成功样本同样有价值",
      "你的场景：ARX 双臂遥操作已跑通，把 device_config / operator / difficulty 写进 meta 是第一步"
    ].join("\n")
  },
  {
    id: "k02", cat: "collection", title: "手持 / 手抓采集",
    tags: ["手持", "UMI", "低成本"],
    summary: "把示教夹爪当道具手持演示，动作由手内传感器或视频恢复，是成本最低、量上得最快的采集范式。",
    detail: [
      "代表方案：UMI（GoPro + 手内夹爪 + 视觉 SLAM 从视频恢复动作）",
      "优点：不需要机器人本体就能采，数据量爆发快，天然覆盖多样任务与场景",
      "难点：动作恢复精度有限；策略部署时要做好『数据夹爪』与真实夹爪的对齐",
      "定位：手持采集量大价低，遥操作精细准——两条腿走路最稳"
    ].join("\n")
  },
  {
    id: "k03", cat: "collection", title: "穿戴式 / Ego 采集",
    tags: ["Ego", "穿戴", "第一视角"],
    summary: "操作者戴第一视角相机+IMU 采集『人怎么做』，用于学习人体/手部先验与视觉表征。",
    detail: [
      "设备：头戴 GoPro / AR 眼镜、腕部 IMU、数据手套",
      "用途：做人形与上肢先验、预训练视觉表征、行为克隆的额外监督信号",
      "注意：Ego 视角与机器人第三视角的坐标对齐（头眼/手眼标定）",
      "参考生态：EgoDex、Ego4D"
    ].join("\n")
  },
  {
    id: "k04", cat: "collection", title: "自动化采集与自主探索",
    tags: ["自动化", "自探索", "数据平台"],
    summary: "让机器人用脚本/策略自己动、流水线批量执行并自动判成败，摆脱『人肉录数据』的瓶颈。",
    detail: [
      "形态：预编程轨迹+随机扰动、策略自探索（self-exploration）、失败后自动重试补录",
      "关键组件：自动成败判定（夹爪力/视觉检查/LLM 判官）、场景自动重置、任务队列调度",
      "收益：24 小时无人值守、数据口径一致、可直接对接数据飞轮",
      "延伸：把这套做成平台能力（采集任务下发→自动验收→入库），就是你『数据系统负责人』的核心武器"
    ].join("\n")
  },
  {
    id: "k05", cat: "collection", title: "仿真合成数据与 sim2real",
    tags: ["仿真", "sim2real", "合成数据"],
    summary: "在仿真域合成海量带标签数据再迁移真机，是低成本扩大数据规模的天花板方案。",
    detail: [
      "工具：Isaac Lab / MuJoCo / Sapien / Genesis",
      "红利：仿真里 RGBD/位姿/语义标签几乎免费，适合预训练与评测",
      "迁移难点：域随机化、视觉域差、物理真实性——需要真机小样做校验",
      "主流路线：真机精采 + 仿真海量混合训练（π0 也是 Open X 大数据 + 真机数据结合）"
    ].join("\n")
  },
  {
    id: "k06", cat: "processing", title: "数据清洗与质量筛选",
    tags: ["清洗", "筛选", "质检"],
    summary: "从原始轨迹里挑出『能学的』：过滤失败、抖动与错位帧，并去重。",
    detail: [
      "清洗维度：任务是否完成、轨迹质量（速度突变/抖动）、图像清晰度/遮挡、时间戳是否对齐",
      "自动化手段：成功率预测器（Success Classifier）、LLM/多模态模型批量打分",
      "工程做法：自动粗筛 → 人工抽查小样 → 反推修正规则，形成质量门禁",
      "失败样本别全扔：失败-恢复（failure-recovery）片段对训练有独特价值"
    ].join("\n")
  },
  {
    id: "k07", cat: "processing", title: "语言指令标注与增强",
    tags: ["语言指令", "标注", "LLM"],
    summary: "为轨迹配任务描述并做改写/多语言增强，直接决定 VLA 的指令泛化能力。",
    detail: [
      "基础：操作者口述或脚本填 language_instruction",
      "增强：LLM 改写同义多样描述（每段 2-5 条）、补背景与约束信息",
      "一致性：同一任务统一术语表，避免『拿起/抓取/夹取』混用让模型混淆",
      "进阶：多模态 LLM 自动给视频打指令，人工抽检兜底"
    ].join("\n")
  },
  {
    id: "k08", cat: "processing", title: "数据增强与轨迹重放",
    tags: ["增强", "重放"],
    summary: "不重录就扩数据的技巧：视角/表观增强与轨迹重放，但必须保真。",
    detail: [
      "视觉增强：裁剪、颜色扰动、光照变化、背景替换（cutout）提升泛化",
      "几何增强：镜像翻转——注意左右臂/手性需同步翻转动作通道",
      "轨迹层面：时间重采样与微扰动重放要谨慎，改变动作分布可能伤害策略",
      "原则：一切增强不得改变任务语义（保真优先）"
    ].join("\n")
  },
  {
    id: "k09", cat: "processing", title: "格式转换与多源融合",
    tags: ["标准化", "转换"],
    summary: "把多来源数据（不同机器人/相机/格式）统一成一套 schema，是规模化训练的前提。",
    detail: [
      "目标：统一到 LeRobot / RLDS / Open X 规范 + 公司扩展字段",
      "映射难点：动作空间（关节 vs 末端 EEF）、相机内外参、采集频率、坐标系",
      "工程化：定义『中间格式 + 转换器』，而不是为每个新数据源手写脚本",
      "转换后必须跑一致性校验：抽帧对比、动作重放、统计分布体检"
    ].join("\n")
  },
  {
    id: "k10", cat: "processing", title: "数据质量评估与版本管理",
    tags: ["质量评估", "版本", "DVC"],
    summary: "数据也是资产：可量化、可追溯、可版本化，才能支撑飞轮持续迭代。",
    detail: [
      "质量指标：任务成功率、场景/物体覆盖度、多样性（embedding 距离）、轨迹长度分布",
      "版本管理：数据集即代码——git/dvc 管 meta 与 schema 变更，训练实验绑定数据版本",
      "采样策略：按难度分层采样，避免简单任务占多数导致的分布失衡",
      "每轮清洗/增强都该留变更记录，方便回溯『哪个版本让模型涨了多少点』"
    ].join("\n")
  },
  {
    id: "k11", cat: "format", title: "LeRobot 数据集格式",
    tags: ["LeRobot", "HDF5", "parquet", "标准"],
    summary: "Hugging Face LeRobot 是当前最流行的开源数据标准，公司直接复用，无需自造 schema。",
    detail: [
      "早期版本（v0.1x、ACT 教程时代）：每集一个 .hdf5，内含 observation.images.{相机名} 视频数据集 + action/state 时间序列",
      "v1.x 起的 folder 结构：meta/info.json + meta/tasks.jsonl（任务定义）+ data/chunk-*/episode_*.parquet（动作/状态/时间戳/帧索引）+ videos/chunk-*/*.mp4",
      "你印象中的『HDF5 + parquet + meta JSON』正是新旧两代格式的混合体",
      "公司扩展字段放在 meta：language_instruction / object / operator / device_config / difficulty / success_flag",
      "工具：lerobot dataset-info / visualize / dataset-viewer 直接检查数据"
    ].join("\n")
  },
  {
    id: "k12", cat: "format", title: "Open X-Embodiment 与 RLDS",
    tags: ["OpenX", "RLDS", "预训练"],
    summary: "跨 21 机构、22 种机器人的开放数据集与 RLDS 生态，是 VLA 预训练的数据基石。",
    detail: [
      "Open X-Embodiment：约 50 万+ episode，统一为 EEF 动作空间（平移+旋转+夹爪），训练出 RT-1-X / RT-2-X",
      "RLDS（TensorFlow）：把异构数据源包装成统一的 trajectory 流，自带 replay buffer 语义",
      "价值：接入它等于站在『机器人数据最大公约数』上，可与自家数据混合微调",
      "启示：公司数据即使小，只要 schema 兼容生态，就能借生态红利"
    ].join("\n")
  },
  {
    id: "k13", cat: "format", title: "传感器标定与坐标系",
    tags: ["标定", "D405", "坐标系"],
    summary: "多相机/RGBD 与机器人之间的外参对齐，是一切『数据可用』的前提。",
    detail: [
      "手眼关系：eye-in-hand（相机装臂上，如 D405 装夹爪旁）vs eye-to-hand（全局相机）",
      "工具：easy_handeye（ROS）、张氏棋盘格、Charuco 标定板",
      "产出：相机到基座/EEF 的变换矩阵 T，采集时统一写进 meta",
      "多相机同步：硬件触发或软件时间戳对齐——错 1 帧就是图像与动作错位"
    ].join("\n")
  },
  {
    id: "k14", cat: "format", title: "meta 信息与任务描述设计",
    tags: ["meta", "schema", "数据设计"],
    summary: "数据的『说明书』设计决定后续检索、筛选与训练体验，schema 必须先行。",
    detail: [
      "每段数据都应能回答：谁（operator）用什么（device_config）做了啥（instruction）结果如何（success_flag）",
      "加难度/物体维度字段，支撑分层采样与课程式训练",
      "meta 用 JSON/YAML 随仓库版本化；改 schema 必须写迁移脚本",
      "你的 collector 包（start/end/validate + YAML meta）已把最小闭环落地——这就是数据工程师思维的雏形"
    ].join("\n")
  },
  {
    id: "k15", cat: "tools", title: "LeRobot 工具链",
    tags: ["LeRobot", "SDK", "工具链"],
    summary: "从采集、看数据到训练一体的命令行生态，适合作为公司数据中台的存储底座。",
    detail: [
      "采集：可对接遥操作/脚本直写数据集（或自研采集器写同一 schema）",
      "检查：dataset-info / visualize / dataset-viewer 查看轨迹、相机流与动作曲线",
      "训练：ACT / Diffusion Policy 训练脚本现成，--dataset 指向自家数据即可开跑",
      "升级路径：以 LeRobot 做『存储层』，上面叠公司采集自动化与质量门禁"
    ].join("\n")
  },
  {
    id: "k16", cat: "tools", title: "模型对数据的要求：ACT / DP / π0.5",
    tags: ["ACT", "DiffusionPolicy", "VLA", "π0"],
    summary: "不同算法对数据口径要求不同，按模型反向优化采集与清洗策略。",
    detail: [
      "ACT：动作平滑、时序对齐敏感；chunk 预测偏好完整任务轨迹，别把数据切太碎",
      "Diffusion Policy：对多模态动作分布友好，数据『多样性』比『数量』更敏感",
      "π0 / VLA（flow matching 系）：吃语言指令对齐、多视角视频、50Hz 级动作；要求量大但干净、指令描述统一",
      "共性铁律：相机标定好、成功与失败都保留、语言指令术语统一"
    ].join("\n")
  },
  {
    id: "k17", cat: "tools", title: "外挂记录器：零 SDK 依赖采集",
    tags: ["外挂采集", "元数据", "最小闭环"],
    summary: "不依赖算法同事给权限的起步路线：在现有采集脚本外面包一层元数据记录器。",
    detail: [
      "思路：包装/监听现成采集程序，同步记录 operator/device/instruction/时间戳，输出 YAML/JSON meta",
      "与图像动作流解耦：只补 meta、不侵入主链路，零 SDK / 零 ROS 依赖",
      "配套 validate：缺帧、时间戳乱、meta 缺失，在入库前报警",
      "这就是你能独立跑通、快速证明价值的最小原型（collector 包路线）"
    ].join("\n")
  },
  {
    id: "k18", cat: "tools", title: "数据飞轮与增量微调闭环",
    tags: ["数据飞轮", "闭环", "LoRA"],
    summary: "deploy→fail→collect→fine-tune→re-deploy：让真实失败自动变成新数据，模型越用越好。",
    detail: [
      "触发：线上失败率超阈值 → 自动抓取失败现场片段与对应指令",
      "处理：筛选 → 补标 → 清洗 → （LoRA）增量微调，成本远低于全量重训",
      "验收：回测集 + 线上 A/B，量化『新增数据的边际价值』",
      "关键指标：闭环周期（多久把一次失败变成一次提升）、每条数据的边际收益",
      "落地第一步：先把『失败 → 入库』这条最小链路打通，再谈全自动化"
    ].join("\n")
  },
  {
    id: "k19", cat: "collection", title: "手持 UMI 数据：形态与处理流",
    tags: ["UMI", "手持", "数据形态", "INGEST"],
    summary: "采集产物 = 手持夹爪+GoPro 视频 + 夹爪位姿轨迹；处理目标 = 把『夹爪位姿』按 EEF 约定变成机械臂可执行动作。",
    detail: [
      "怎么采：手持示教夹爪（内带 GoPro/采集相机）像『抓』一样演示任务，随走随录，无需机器人本体",
      "产物形态：每 demo 一段第一视角视频 + 夹爪 6D 位姿轨迹（UMI 官方由手内 SLAM/运动恢复估计）+ 夹爪开合信号 + 相机内参",
      "为什么能直接给机械臂用：以『夹爪』为物理接口——数据里夹爪位姿 = 策略输出，部署时通过手爪外参把夹爪位姿映射到机械臂 EEF",
      "怎么处理：抽帧/时间戳对齐 → 视频按帧与位姿序列统一 → 写成标准数据集（列约定带 gripper 前缀，规避关节型 QC 误报）→ 清洗/校验 → 交付训练",
      "注意点：动作精度受 SLAM/标定影响；部署端『数据夹爪』与真实夹爪的尺寸/坐标系要对齐（参考 UMI 官方策略部署流程）",
      "本项目 INGEST 已提供 umi 适配器（gripper_pose 8D 动作通道），可用合成样例跑通全流程"
    ].join("\n")
  },
  {
    id: "k20", cat: "collection", title: "Ego 穿戴数据：形态与处理流",
    tags: ["Ego", "穿戴", "数据形态", "重定向"],
    summary: "采集产物 = 第一视角视频 + IMU（人的操作）；它不能直接当机器人动作，先做容器标准化，动作通道等重定向接入。",
    detail: [
      "怎么采：操作者戴头戴相机/AR 眼镜 + 腕部 IMU 等，在真实生活场景『人怎么做事』就怎么采，成本极低、场景无限",
      "产物形态：头戴视频流 + IMU（加速度/角速度）+ 时间戳；部分方案附加人手/手部关键点或夹爪位姿",
      "用途分两路：① 预训练/表征：喂视觉编码器学『任务长什么样』；② 直接行为学习：需要把人的手部动作重定向（retarget）到机器人动作空间——这是研究级环节",
      "怎么处理：视频+IMU 时间轴对齐 → 容器标准化（先能进数据管线的统一数据集）→ 动作通道按实际可获得的夹爪/手部轨迹接入或标记 retarget_pending",
      "与 UMI 的区别：UMI 自带『夹爪物理接口』所以动作天然可迁移；纯 Ego 无人手外设时没有可直接迁移的动作",
      "本项目 INGEST 的 ego 适配器目前输出『视频+IMU+meta 的标准集』并显式标记动作待重定向，不会假装能训练"
    ].join("\n")
  },
  {
    id: "k21", cat: "collection", title: "遥操作数据：形态与处理流",
    tags: ["遥操作", "robodeploy", "数据形态", "ARX"],
    summary: "采集产物 = 关节动作流 + 多相机视频（robodeploy 直接写 LeRobot v2.1）；是最『干净』的源——动作天生就是机器人可执行空间。",
    detail: [
      "怎么采：操作者用主臂/VR/示教器操作机器人执行任务，机器人关节命令流被直接记录",
      "产物形态：LeRobot v2.1 标准目录（meta/info+episodes + data/chunk-*/episode_*.parquet + videos/chunk-*/相机/*.mp4），动作是 14 维关节角（左右各 7）",
      "为什么最省事：动作空间=机器人自身关节空间，无转换/重定向损耗；这也是公司当前主力数据",
      "怎么处理：走既有 innov-dataprep 01 盘点→02 时间戳审计→03 清洗（关节限位/跳变/卡死可查）→合并→转 v3.0→校验→打包→登记",
      "注意点：采集时 operator/device_config/meta 要随采随记（外挂记录器思路），清洗依赖的关节 QC 只对这类关节数据完全生效",
      "本项目 INGEST 对遥操作源 = 直通（已是标准 v2.1，仅补 source_meta 溯源标记）"
    ].join("\n")
  },
  {
    id: "k22", cat: "collection", title: "仿真数据：形态与处理流",
    tags: ["仿真", "sim2real", "数据形态", "合成数据"],
    summary: "采集产物 = 渲染视频 + 引擎可输出的完整状态（关节/位姿/深度/分割标签）；动作是 ground-truth，转换零损耗，量大价低。",
    detail: [
      "怎么采：Isaac Lab / MuJoCo / Genesis 等仿真引擎里批量跑任务策略/脚本，自动导出轨迹与渲染",
      "产物形态：每 episode 渲染视频（可多相机/深度/语义图）+ 轨迹文件（关节角或 EEF 位姿，全有 ground truth）+ 场景/任务描述",
      "为什么转换零损耗：仿真直接给关节或 EEF 真值，不需要动作恢复或重定向；深度/分割/位姿标签是真实数据拿不到的免费午餐",
      "怎么处理：导出轨迹 → 统一标准集（关节列口径与遥操作一致，可共用清洗 QC）→ 与真机数据混合训练（当前主流：真机精采 + 仿真海量）",
      "注意点：视觉域差与物理真实性——必须用真机小样校验（sim2real gap 主要风险在这，不在数据格式）",
      "本项目 INGEST 的 sim 适配器把『render 视频 + 关节轨迹 csv』转成与遥操作同口径的关节型 v2.1 数据集"
    ].join("\n")
  },
  {
    id: "k23", cat: "processing", title: "去手处理：抹掉画面里的人手/手臂",
    tags: ["去手", "隐私", "预处理", "MediaPipe", "inpainting"],
    summary: "UMI 手持/ego 第一视角几乎必有人手入镜——不抹掉，模型会学到『人手=动作』，部署到没手的真机就失效；这也是开源数据集的隐私底线。",
    detail: [
      "为什么：VLA/扩散策略从画面学动作时，人手是强干扰特征（且是『错误』特征——真机没有手）；开源/分享前还必须考虑操作者隐私",
      "业界套路两段式：① 找手 = 检测+分割出人手区域（MediaPipe Hands / HaMeR / SAM2/3）② 填背景 = mask 区修复（LaMa 单帧 / E2FGVI / ProPainter 视频级时间一致）",
      "轻档（CPU 可跑，本项目已落地 pipe/10_hand_remove.py）：MediaPipe 检测 → 手掌框 + 手腕沿手臂方向延伸盖板 → 模糊或涂暗。定位『够用+快』，防学到人手足够",
      "重档（GPU，预留接口）：mask 序列交给 E2FGVI/ProPainter 做真实补背景，画面干净可对外发布——需公司 3090 + 部署外部仓库",
      "怎么选：只防模型学到手→轻档；要画面干净/开源发布→重档；人手换机械臂/灵巧手（H2R、HandEdit 路线）是重活，属动作重定向范畴",
      "用法：python pipe/10_hand_remove.py --input <数据集>（检测不到手的视频自动原样拷贝不重编码）；真实验证请用含手视频，可先 --video 单个快速试"
    ].join("\n")
  }
];
