/*
 * @Author: your name
 * @Date: 2019-10-15 09:56:22
 * @LastEditTime: 2019-11-07 16:43:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /stc_fe/src/utils/request.ts
 */
import originAxios from 'axios';
import { message, Spin } from 'antd';
import qs from 'qs';
import ReactDOM from 'react-dom';
import * as React from 'react';

const axios = originAxios.create({
    timeout: 20000
});

axios.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/**
 * 显示loadding
 */
function showLoadding() {
    var dom = document.createElement("div");
    dom.setAttribute("id", 'loadding');
    document.body.appendChild(dom);
    ReactDOM.render(<Spin tip='加载中......' size="large" />, dom)
}
/**
 * 隐藏loadding
 */
function hideLoadding() {
    document.body.removeChild(document.getElementById('loadding') || new Element)
}

axios.interceptors.request.use(function (config) {
    showLoadding()
    if (config.method === 'post') {
        let data = qs.parse(config.data)
        config.data = qs.stringify({
            ...data,
        })
    } else if (config.method === 'get') {
        config.params = {
            ...config.params,
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error);
})

axios.interceptors.response.use(
    function (response) {
        let { data, msg, success } = response.data;
        let result: any = '';
        if (success && success === true) {
            result = data;
            message.success(msg);
        } else if (success === false) {
            result = data;
            message.error(msg);
        } else if (typeof (success) === 'undefined') {
            success = false;  // 兼容老写法
            result = response.data;
        }
        // hideLoadding();
        setTimeout(hideLoadding, 500);
        return result
    },
    function (error) {
        hideLoadding();
        message.error('系统错误，请联系运维！');
        return Promise.reject(error);
    }
)

export function get(url: string, data: any) {
    return axios.get(process.env.http_api + url, {
        params: data
    })
}

// By default, axios serializes JavaScript objects to JSON.
export function post(url: string, data: any) {
    return axios({
        method: 'post',
        url: process.env.http_api + url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data),
        withCredentials: true,
    })
}

export function put(url: string, data: any) {
    return axios({
        method: 'put',
        url,
        data
    });
}
export function del(url: string, data: any) {
    return axios({
        method: 'delete',
        url: `${process.env.http_api + url}/${data && data.id}`,
        withCredentials: true
    });
}

export default axios;
