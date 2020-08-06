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

-- 导出  表 lz.api 结构
CREATE TABLE IF NOT EXISTS `api` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '接口名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '接口地址',
  `type` int DEFAULT NULL COMMENT '类型：0：查询；1：新增；2：修改；3：删除',
  `system` int DEFAULT NULL COMMENT '是否系统Api:  1：是，0：否',
  `moduleid` int DEFAULT NULL,
  `createTime` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`) USING BTREE,
  UNIQUE KEY `path` (`path`),
  KEY `FK_api_module` (`moduleid`),
  CONSTRAINT `FK_api_module` FOREIGN KEY (`moduleid`) REFERENCES `module` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='接口表';

-- 正在导出表  lz.api 的数据：~12 rows (大约)
/*!40000 ALTER TABLE `api` DISABLE KEYS */;
INSERT INTO `api` (`id`, `code`, `name`, `path`, `type`, `system`, `moduleid`, `createTime`) VALUES
	(1, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtt1', '获取所有用户信息', '/system/getUserAll', 0, 0, 6, '2020-07-10'),
	(2, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtt2', '新增用户信息', '/system/addUser', 1, 0, 6, '2020-07-10'),
	(3, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtt3', '删除用户信息', '/system/delUser', 3, 0, 6, '2020-07-10'),
	(4, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtt4', '更新用户信息', '/system/updateUser', 4, 0, 6, '2020-07-10'),
	(5, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtt5', '获取api所有信息', '/system/getApiList', 0, 1, 12, '2020-07-28'),
	(6, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtt6', '添加api信息', '/system/addApi', 1, 1, 12, '2020-07-30'),
	(7, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtt7', '删除api信息', '/system/delApi', 3, 1, 12, '2020-07-30'),
	(8, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtt8', '更新api信息', '/system/updateApi', 4, 1, 12, '2020-07-30'),
	(9, '16h4cYRNMBHeX5vP4g2BE14rNsrXLhq1', '根据id获取用户信息', '/system/getUserById', 2, 0, 6, '2020-07-31'),
	(20, '16h4cYRNMBHeX5vP4g2BE14rNsrXLhqa', '获取系统表结构', '/system/getTableAll', 0, 0, 14, '2020-07-30'),
	(21, 'OPEcd5qRwy8xdBd4cc24RmEQB7aWaIGR', '获取单个Api结果集', '/system/getApiById', 2, 0, 12, '2020-07-31'),
	(23, 'iWtXIMeL4MeIwlSdsUCMpigEO7SU2bDc', '获取Test所有值', '/system/getTest', 2, 0, NULL, '2020-07-31');
/*!40000 ALTER TABLE `api` ENABLE KEYS */;

-- 导出  表 lz.dictionary 结构
CREATE TABLE IF NOT EXISTS `dictionary` (
  `id` int NOT NULL,
  `type` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='数据字典';

-- 正在导出表  lz.dictionary 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `dictionary` DISABLE KEYS */;
INSERT INTO `dictionary` (`id`, `type`) VALUES
	(1, 1);
/*!40000 ALTER TABLE `dictionary` ENABLE KEYS */;

-- 导出  表 lz.information_schema.columns 结构
CREATE TABLE IF NOT EXISTS `information_schema.columns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `table_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `column_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `column_type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `column_comment` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  lz.information_schema.columns 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `information_schema.columns` DISABLE KEYS */;
/*!40000 ALTER TABLE `information_schema.columns` ENABLE KEYS */;

-- 导出  表 lz.module 结构
CREATE TABLE IF NOT EXISTS `module` (
  `id` int NOT NULL,
  `rid` int DEFAULT NULL,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `weight` int DEFAULT '0' COMMENT '权重',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '路径',
  `level` int DEFAULT NULL COMMENT '级别',
  `identification` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '标识',
  `createTime` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rid` (`rid`),
  CONSTRAINT `rid` FOREIGN KEY (`rid`) REFERENCES `module` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='模块表';

-- 正在导出表  lz.module 的数据：~12 rows (大约)
/*!40000 ALTER TABLE `module` DISABLE KEYS */;
INSERT INTO `module` (`id`, `rid`, `code`, `name`, `weight`, `url`, `level`, `identification`, `createTime`) VALUES
	(1, NULL, '1', '系统管理', 0, '/system', 1, 'system', '2020-07-16'),
	(2, NULL, '2', '新闻管理', 1, '/news', 1, 'news', '2020-07-16'),
	(3, 1, '3', '基本管理', 3, '', 2, 'base', '2020-07-16'),
	(4, 1, '4', '日志管理', 4, '', 2, 'logs', '2020-07-16'),
	(6, 3, '6', '用户管理', 6, '/system/user', 3, 'user', '2020-07-16'),
	(7, 3, '7', '用户组管理', 7, '/system/userGroup', 3, 'userGroup', '2020-07-16'),
	(8, 3, '8', '权限管理', 8, '/system/power', 3, 'power', '2020-07-16'),
	(9, 3, '9', '权限组管理', 9, '/system/powerGroup', 3, 'powerGroup', '2020-07-16'),
	(10, 4, '10', '日志查看', 10, '/logs/logsCat', 3, 'logsCat', '2020-07-16'),
	(11, 1, '11', 'API管理', 3, '', 2, 'api', '2020-07-28'),
	(12, 11, '12', '接口管理', 4, '/system/api', 3, 'interface', '2020-07-28'),
	(13, 11, '13', '模块管理', 6, '/system/module', 3, 'module', '2020-07-29'),
	(14, 11, '14', '表管理', 5, '/system/table', 3, 'table', '2020-07-30');
/*!40000 ALTER TABLE `module` ENABLE KEYS */;

-- 导出  表 lz.type 结构
CREATE TABLE IF NOT EXISTS `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- 正在导出表  lz.type 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
/*!40000 ALTER TABLE `type` ENABLE KEYS */;

-- 导出  表 lz.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` int DEFAULT '0' COMMENT '登录状态：0 未登录； 1 已登录',
  `lastTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_password` (`name`,`password`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户表';

-- 正在导出表  lz.user 的数据：~10 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `code`, `name`, `password`, `status`, `lastTime`) VALUES
	(113, 'ZBSsTPJxPzSBLIr0JCNyykXurZ8CKvDv', 'system', '1', 0, '2020-08-06 10:09:49'),
	(114, 'RqMWuptYMcCwNv9sz4JdCTBmjB3srtta', 'a', 'a', 0, '2020-07-28 15:25:55'),
	(115, 'osgxgKQwORc1gdxRytvkpXfFSb18SEMs', 'aaaaa', 'bbbb', 0, '2020-07-28 15:25:55'),
	(116, 'Br9Xhxutr91UsJRYVwBSbV0BCymDgEew', 'c', 'c', 0, '2020-07-29 11:01:51'),
	(117, '7RzwuWCF3W8DNlJuudHJmlL2mEyRpg9I', 'd', 'd', 0, '2020-07-29 11:01:51'),
	(185, 'vy5Ni6yJaVzIoJfF5Y9sFTQEV7MEVfOd', 'aaa', 'aa', 0, '2020-07-29 17:22:22'),
	(186, 'YNhOgexUssyoiUT7eV8BZwkWW1875WOK', 'bb', 'bb', 0, '2020-07-29 17:22:22'),
	(187, 'Is4Qo7A9oIBVnAJhrm4d3QN7i6J5QyLV', 'cc', 'cc', 0, '2020-07-29 17:22:22'),
	(188, 'Z8amJ93vGr35DFewfmqOziWFlmLxBVkv', 'dd', 'dd', 0, '2020-07-29 17:22:22'),
	(211, 'LhiCU7KQA0ms9r2AGeX8Aw6y37fOhTiA', 'mmm', 'mm', 1, '2020-07-31 15:54:05');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 导出  表 lz.usergroup 结构
CREATE TABLE IF NOT EXISTS `usergroup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createData` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户组表';

-- 正在导出表  lz.usergroup 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `usergroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `usergroup` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
