
/**
 *  公共通用
 */
export interface App {
    itemList?: [];
}

export type IApp = App[] | undefined

/**
 * 菜单栏定义pojo
 */
export interface Meuns {
    id?: number;
    code?: string;
    name?: string;
    weight?: number;
    level?: number;
    autoType?: number;
    url?: string;
    enable?: number;
    menuItem?: number;
    register?: string;
}

export type IMenu = Meuns[] | undefined
