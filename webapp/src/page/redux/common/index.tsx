import { IApp, IMenu, Meuns } from '@/page/interface/app';

/**
 * 初始化item中key值
 * @param param 
 */
export function getDefItemOpenKey(args: IMenu): string {
    let _id: string = "0";
    if (args && args.length > 0) {
        for( let i = 0; i < args.length; i++) {
            if ( i === 0 ) {
                _id = String(args[i]["id"]);
            }
        }
    } else {
        _id = "1";
    }
    return _id;
}