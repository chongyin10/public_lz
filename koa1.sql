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

-- 导出  表 koa.item 结构
CREATE TABLE IF NOT EXISTS `item` (
  `id` int NOT NULL,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '业务code',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '名称',
  `weight` int DEFAULT NULL COMMENT '权重',
  `level` int DEFAULT NULL COMMENT '级别：0：根，1：一级目录，2：二级目录，3：三级目录',
  `autoType` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '0：系统添加菜单，1：手动录入菜单',
  `url` varchar(255) DEFAULT NULL,
  `enable` int DEFAULT NULL COMMENT '是否启用：0：启用；1：禁用',
  `menuItem` int DEFAULT NULL COMMENT '上级目录id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  koa.item 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` (`id`, `code`, `name`, `weight`, `level`, `autoType`, `url`, `enable`, `menuItem`) VALUES
	(1, '1', '系统管理', 0, 0, '0', '/system', 0, 0),
	(2, '2', '地图管理', 1, 0, '0', '/maps', 0, 0),
	(3, '3', 'Test管理', 2, 0, '0', '/tests', 0, 0),
	(4, '4', '基本管理', 3, 1, '0', NULL, 0, 1),
	(5, '5', '日志管理', 4, 1, '0', NULL, 0, 1),
	(6, '6', '用户管理', 5, 2, '0', '/system/user', 0, 4),
	(7, '7', '用户组管理', 6, 2, '0', '/system/userGroup', 0, 4),
	(8, '8', '权限管理', 7, 2, '0', '/system/power', 0, 4),
	(9, '9', '权限组管理', 8, 2, '0', '/system/powerGroup', 0, 4),
	(10, '10', '日志查看', 9, 2, '0', '/system/logsCheck', 0, 5),
	(11, '11', '日志监听', 10, 2, '0', '/system/logsMonitor', 0, 5);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
