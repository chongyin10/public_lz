import User from '@/page/components/system/user';
import UserGroup from '@/page/components/system/userGroup';
import Power from '@/page/components/system/power';
import PowerGroup from '@/page/components/system/powerGroup';
/**
 * 参数注解：[path:路径，name: 别名，component: 组件，auth: 是否使用拦截器拦截]
 */
export default [
    { path: "/system/user", name: "user", component: User },
    { path: "/system/userGroup", name: "userGroup", component: UserGroup },
    { path: "/system/power", name: "power", component: Power },
    { path: "/system/powerGroup", name: "powerGroup", component: PowerGroup },
]