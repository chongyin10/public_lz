
/**
 * 获取当前api接口集合
 * @param apis 
 * @param moudleId 
 */
export function getApiUtils(apis: any[], moudleId: Number, type: Number) {
    let newApi: any = [];
    for (let api of apis) {
        if (api["moduleid"] == moudleId && api["type"] == type) {
            newApi.push(api);
        }
    }
    return newApi;
}

/**
 * 自动生成uuid
 * @param len 指定长度
 * @param radix 指定基数 
 */
export function uuid(len?: any, radix?: any) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}

/**
 * 判断是否存在空格
 * @param data 数据值
 */
export function dataTrim(data: any) {
    for (let key in data) {
        if (data[key] && data[key] != '') {
            data[key] = data[key].toString().trim();
        } else {
            data[key] = undefined;
        }
    }
    return data
}