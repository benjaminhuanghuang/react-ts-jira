# React17+React Hook+TS4 最佳实践 仿 Jira 企业级项目 (2021)
https://coding.imooc.com/class/482.html?mc_marking=bb86c9071ed9b7cf12612a2a85203372&mc_channel=hk

第1章 课程介绍(了解本课程必看) 试看
介绍了整个课程的背景知识、能解决什么问题、学完后你将得到什么 ，以及学习方法与 学习前提。

共 1 节 (12分钟) 收起列表

 1-1 课程导学 (11:06)试看

 
第2章 项目起航：项目初始化与配置
本章我们将会⽤Create-React-App初始化项⽬。并配置eslint检验代码质量，prettier检 验代码格式，commitlint检验提交信息，使得⼯程规范化。最后会配置⼀个优秀的后端 Mock⽅案，JSON SERVER 第三、四章使⽤Mock，从第五章开始连接真实服务器。...

共 4 节 (28分钟) 收起列表

 2-1 用 Create React App 初始化项目 (07:16)
 2-2 配置 eslint、 prettier 和 commitlint 规范工程 (08:56)
 2-3 对比常见 Mock 方案 配置 JSON SERVER (10:53)
 2-4 【注意了】大家不用再手动引入 React 了
 
第3章 React 与 Hook 应用：实现项目列表
本章专注于React，⾸先我们会使⽤React的基础知识：组件、JSX、列表渲染实现⼯程 列表⻚⾯，让⼤家可以回顾React基础知识的使⽤。然后学习⽤状态提升共享组件状态。 最后学习⽤⾃定义Hook抽象代码，并实现第⼀个⾃定义Hook-useDebounce。...

共 3 节 (51分钟) 收起列表

 3-1 用 JSX 列表渲染开发工程列表页面 (10:47)
 3-2 用状态提升分享组件状态，完成工程列表页面 (20:22)
 3-3 学习自定义Hook - 用useDebounce减少工程搜索请求频率 (19:49)

第4章 TS 应用：JS神助攻 - 强类型 试看
本章专注于TS，首先我们会回顾第三章中的JSX代码，发现由于JS天然弱类型带来的脆 弱性。然后⽤TSX改造第三章的JSX代码，增强类型约束，在真实场景中体会TS的优越 性。然后实践TS的进阶知识-泛型，最后通过⼀个作业练习加强⼤家对Hook、TS和泛型 的理解。...

共 6 节 (69分钟) 收起列表

 4-1 为什么我们需要TS - 真实场景学习 TS 的必要性 (13:48)试看
 4-2 将项目列表页面JS改造成TS，增强类型，减少Bug (16:09)
 4-3 TS知识梳理、总结与提高 (21:10)
 4-4 学习泛型，用泛型增强useDebounce类型灵活性 (07:25)
 4-5 作业练习 - 用 Hook + TS + TS泛型实现useArray (05:52)
 4-6 作业解答 - ⽤ Hook + TS + TS泛型实现useArray (03:41)
 
第5章 JWT、用户认证与异步请求 试看
本章会安装使⽤本课程专属开发者⼯具，连接服务器。还会使⽤JWT实现⽤⼾登录注册 功能，并会抽象出⼀个通⽤异步请求Hook，学会使⽤Context保存全局⽤⼾信息状态。在实现功能的过程中将会应⽤TS的更多⾼级类型知识。

共 9 节 (101分钟) 展开列表
 5-1 用React表单、TS的类型继承和鸭子类型实现登录表单 (18:54)
 5-2 连接真实服务端 - 专属开发者⼯具介绍与安装 (08:20)
 5-3 来自讲师的重要提示：5-2 补充 (00:37)
 5-4 JWT原理与auth-provider实现 (07:51)
 5-5 用useContext存储全局用户信息 (13:49)
 5-6 用useAuth切换登录与非登录状态 (06:04)
 5-7 用fetch抽象通用HTTP请求方法，增强通用性 (13:15)
 5-8 用useHttp管理JWT和登录状态，保持登录状态 (10:04)试看
 5-9 TS的联合类型、Partial和Omit介绍 (13:28)
 5-10 TS的Utility Types-Pick、Exclude、Partial和Omit实现 (08:58)

第6章 CSS 其实很简单 - 用 CSS-in-JS 添加样式
CSS 是很多同学头疼的技术，本章将会分析传统CSS难以掌握的原因，以及为什么CSS- in-JS可以帮助⼤家更有效地掌握CSS，并会安装使⽤antd组件库，⽤Grid和Flexbox布 局⻚⾯，最后优化⻚⾯其他样式。

共 7 节 (91分钟) 收起列表

 6-1 安装与使用 antd 组件库 (18:34)
 6-2 为什么我们需要CSS-in-JS方案 -通过传统CSS缺陷学习CSS-in-JS必要性 (08:27)
 6-3 最受欢迎的CSS-in-JS方案 - Emotion的安装与使用 (15:52)
 6-4 用Grid和Flexbox布局优化项目列表页面 (17:57)
 6-5 用CSS-in-JS状态工程创建自定义组件：Row组件实现 (07:47)
 6-6 完善项目列表页面样式 (10:27)
 6-7 清除前面课程留下的警告信息 (11:00)
 
第7章 用户体验优化 - 加载中和错误状态处理
加载中和错误状态处理是对⽤⼾体验⾮常重要⼀环，本章我们将处理登录注册和项⽬列表 ⻚⾯，并抽象出⼀个通⽤的处理异步操作的Hook-useAsync。最后将学习使⽤React 的⾼级特性 - Error Boundaries 来捕捉渲染错误。

共 5 节 (65分钟) 收起列表

 7-1 给页面添加Loading和Error状态，增加页面友好性 (10:10)
 7-2 用高级 Hook-useAsync统一处理Loading和Error状态 (13:38)
 7-3 登录注册页面Loading和Error状态处理，与Event Loop详解 (20:10)
 7-4 用useAsync获取用户信息 (06:33)
 7-5 实现Error Boundaries，捕获边界错误 (14:17)

第8章 Hook，路由，与 URL 状态管理
在本章首先会实现管理文档标题的 hook - useDocumentTitle，在实现它的过程中将学习Hook的高阶知识 — 闭包与Hook，并学习useRef的使用情境与方法。 然后会讲解React Router6的使⽤，以及如何实现 useUrlQueryParam 来对 URL 进⾏状态管理。在实现 useUrlQueryParam 的过程中，将引出如何避免Hook无限循环与 ...

共 7 节 (93分钟) 收起列表

 8-1 ⽤useRef实现useDocumentTitle - useRef与Hook 闭包详解（上） (13:37)
 8-2 ⽤useRef实现useDocumentTitle - useRef与Hook 闭包详解（下） (12:51)
 8-3 添加项目列表和项目详情路由 (14:03)
 8-4 添加看板和任务组路由 (07:46)
 8-5 初步实现 useUrlQueryParam 管理 URL 参数状态 (11:58)
 8-6 用useMemo解决依赖循环问题 - Hook的依赖问题详解 (20:59)
 8-7 完成URL状态管理与JS中的 iterator讲解 (11:44)
第9章 用户选择器与项目编辑功能
在本章首先会封装一个id选择器，然后使用id选择器封装一个用户选择器。然后会实现 useEditProject 来编辑并刷新项目。在这个过程中我们将会学习包括useState懒初始化、保存函数状态等知识。

共 5 节 (75分钟) 收起列表

 9-1 实现id-select.tsx解决id类型 难题 (13:56)
 9-2 抽象user-select组件选择用户 (10:53)
 9-3 用 useEditProject 编辑项目 (17:52)
 9-4 编辑后刷新-useState的懒初始化与保存函数状态 (21:57)
 9-5 完成编辑后刷新功能 (10:07)
第10章 深入React 状态管理与Redux机制
本章我们将一起深入研究React中的状态管理，包括状态提升、composition component、useReducer应用、redux设计理念、react-redux等机制，并将涉及到HoC、Render Props等知识点应用。

第11章 任务看板页面
本章结合前⾯的综合知识开发任务看板⻚⾯，包括任务/看板列表、任务/看板编辑、任 务/看板拖拽等功能。

第12章 任务组页面
本章结合前⾯的综合知识开发任务组⻚⾯，包含任务组列表、任务列表、任务组删除等功 能。

第13章 自动化测试
本章从单元测试、集成测试以及e2e测试三个⽅⾯，综合讲解⾃动化测试的重要性，以及 如何为项⽬ 添加完善的⾃动化测试。

第14章 课程结束
总结回顾整个课程。