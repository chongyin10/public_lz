-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        8.0.20 - MySQL Community Server - GPL
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 koa.api 结构
CREATE TABLE IF NOT EXISTS `api` (
  `id` int NOT NULL,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '接口名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '接口地址',
  `itemid` int DEFAULT NULL,
  `type` int DEFAULT NULL COMMENT '类型：0：查询；1：新增；2：修改；3：删除',
  `createTime` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='接口表';

-- 正在导出表  koa.api 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `api` DISABLE KEYS */;
INSERT INTO `api` (`id`, `code`, `name`, `path`, `itemid`, `type`, `createTime`) VALUES
	(1, '1', '获取所有用户信息', '/users/getUserAll', 6, 0, '2020-07-10'),
	(2, '2', '新增用户信息', '/users/addUser', 6, 1, '2020-07-10'),
	(3, '3', '删除用户信息', '/users/delUser', 6, 3, '2020-07-10'),
	(4, '4', '更新用户信息', '/users/updateUser', 6, 4, '2020-07-10');
/*!40000 ALTER TABLE `api` ENABLE KEYS */;

-- 导出  表 koa.item 结构
CREATE TABLE IF NOT EXISTS `item` (
  `id` int NOT NULL,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '业务code',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '名称',
  `weight` int DEFAULT NULL COMMENT '权重',
  `level` int DEFAULT NULL COMMENT '级别：0：根，1：一级目录，2：二级目录，3：三级目录',
  `autoType` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '0：系统添加菜单，1：手动录入菜单',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `register` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '注册：必须和前端新view形成唯一性',
  `enable` int DEFAULT NULL COMMENT '是否启用：0：启用；1：禁用',
  `menuItem` int DEFAULT NULL COMMENT '上级目录id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  koa.item 的数据：~12 rows (大约)
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` (`id`, `code`, `name`, `weight`, `level`, `autoType`, `url`, `register`, `enable`, `menuItem`) VALUES
	(1, '1', '系统管理', 0, 0, '0', '/system', 'system', 0, 0),
	(2, '2', '地图管理', 2, 0, '0', '/maps', 'appmap', 0, 0),
	(3, '3', 'Test管理', 1, 0, '0', '/tests', 'tests', 0, 0),
	(4, '4', '基本管理', 3, 1, '0', NULL, 'base', 0, 1),
	(5, '5', '日志管理', 4, 1, '0', NULL, 'logs', 0, 1),
	(6, '6', '用户管理', 5, 2, '0', '/system/user', 'user', 0, 4),
	(7, '7', '用户组管理', 6, 2, '0', '/system/userGroup', 'usergroup', 0, 4),
	(8, '8', '权限管理', 7, 2, '0', '/system/power', 'power', 0, 4),
	(9, '9', '权限组管理', 8, 2, '0', '/system/powerGroup', 'powergroup', 0, 4),
	(10, '10', '日志查看', 9, 2, '0', '/system/logsCheck', 'logscheck', 0, 5),
	(11, '11', '日志监听', 10, 2, '0', '/system/logsMonitor', 'logsmonitor', 0, 5),
	(12, '12', '测试管理', 11, 1, '0', '', 'testM', 0, 3),
	(13, '13', 'AI测试', 13, 2, '0', '/tests/test', 'test', 0, 12);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;

-- 导出  表 koa.test 结构
CREATE TABLE IF NOT EXISTS `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  koa.test 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
	(1, 'chongyin', '2020-06-29 16:22:53', '2020-06-29 16:22:54');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;

-- 导出  表 koa.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `loginTime` date DEFAULT NULL COMMENT '最后一次登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  koa.user 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `password`, `code`, `loginTime`) VALUES
	(1, 'chongyin', '1', '1', '2020-07-09');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
