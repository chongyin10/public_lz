// 地图管理
import AppMap from '@/page/components/maps/AppMap';
// test管理
import TestView from '@/page/components/test/TestView';
// 基本管理
import User from '@/page/components/system/base/User';
import UserGroup from '@/page/components/system/base/UserGroup';
import PowerGroup from '@/page/components/system/base/PowerGroup';
import Power from '@/page/components/system/base/Power';
// 日志管理
import LogsCheck from '@/page/components/system/logs/LogsCheck';
import LogsMonitor from '@/page/components/system/logs/LogsMonitor';

/**
 * view视图注册器
 */
export default [
    {
        id: 'e7de2210fbb189afcd8da67d1dc2f007',
        Component: User,
        register: 'user',
        title: '用户管理'
    },
    {
        id: 'dafc5c6ae071a0bca3f592ae92d5cdd8',
        Component: UserGroup,
        register: 'usergroup',
        title: '用户组管理'
    },
    {
        id: '53e0b0d73965b27a0fde35f67c726688',
        Component: Power,
        register: 'power',
        title: '权限管理'
    },
    {
        id: '51944be02956228b6baea12eba7a022a',
        Component: PowerGroup,
        register: 'powergroup',
        title: '权限组管理'
    },
    {
        id: '42cf9e98e9fcf05c2dbf04c37fdee758',
        Component: LogsCheck,
        register: 'logscheck',
        title: '日志查看'
    },
    {
        id: '0f67c5c9888969b4223c9b989a4d4722',
        Component: LogsMonitor,
        register: 'logsmonitor',
        title: '日志监听'
    },
    {
        id: '0c5572a2ac8f819b3bd489128808b9b0',
        Component: TestView,
        register: 'test',
        title: '测试管理'
    },
    {
        id: '905cc4a40fbce168b8c1dcd3622a3a93',
        Component: AppMap,
        register: 'appmap',
        title: '地图管理'
    }
]