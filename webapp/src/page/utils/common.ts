
/**
 * 
 * @param params 
 */
export function pathnameParser(pathname: any): void {
    let _patchItem: any = [];
    let pathNameArrs = pathname.split('\/');
    pathNameArrs.forEach((item: any): any => {
        if (item && item !== '' && item != " ") {
            _patchItem.push(item)
        }
    });
    if (_patchItem.length === 0) {
        window.sessionStorage.setItem("itemOpenKey", "null");
        window.sessionStorage.setItem("subItemOpenKey", "null");
        window.sessionStorage.setItem("chiItemOpenKey", "null");
    } else if (_patchItem.length === 1) {
        window.sessionStorage.setItem("chiItemOpenKey", "null");
    } else if (_patchItem.length === 2) {
        // window.sessionStorage.setItem("subItemOpenKey", "null");
    }
}

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