
/**
 * 登录拦截器
 * @param param0 
 */
export function loginInterceptor({ login, location, history }: any) {
    return login && login.length > 0 ? history.replace('/') : history.replace('/login')
}