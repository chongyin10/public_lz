import Test from '@/page/components/test';
import Login from '@/page/components/login';
import App from '@/page/components';

/**
 * 参数注解：[path:路径，name: 别名，component: 组件，auth: 是否使用拦截器拦截]
 */
export default [
    { path: "/", name: "App", component: App, auth: true },
    { path: "/test", name: "Test", component: Test, auth: true },
    { path: "/login", name: "Login", component: Login, auth: false },
]