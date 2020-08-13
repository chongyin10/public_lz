按照目前最近的公司项目中应用的技术栈，也自己空余时间搭建ts+sequelize搭建的一个学习架构，
安装镜像cnpm
1. webapp 简单的前端脚手架，应用基本技术：typeScript + React + Redux+Router
2. system 简单的后端微服务架构(无事务)，应用基本技术：nodejs(koa) + typeScript-sequlize
3. 数据库：mysql, 建议用命令窗口执行，用工具存在编码转换问题存在的可能；
4. myApp taro脚手架，官网地址：https://taro-docs.jd.com/taro/docs/README, 具体使用参考官方API文档

目前架构不完善, 正在扩展基础。后期计划，node将作为中间层集成Redis等，业务层Model交给java交互(技术选型springmvc、spring、mybatis)，尝试serverless
