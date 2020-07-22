
/**
 * 时间格式化
 * 用法：let date = new Date()
 * 调用：dateFormat("YYYY-mm-dd HH:MM", date)
 * 结果：2019-06-06 19:45`
 * @param fmt 
 * @param date 
 */
export function dateFormat(fmt: any, date: any) {
    let ret: any;
    let opt: any = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    }
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt
}