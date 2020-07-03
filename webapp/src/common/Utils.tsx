

/**
 * 数组中移除null和undefined值
 */

export const removeNullAndUndefined = function (arrs: []): [] {
    let _newArrs: [] = [];
    arrs.forEach((item) => {
        if (item !== "" && item != undefined) {
            _newArrs.push(item)
        }
    })
    return _newArrs
}