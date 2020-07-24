/**
 * 
 * @param success 
 * @param message 
 * @param data 
 */
export function resultUtils(success: any, message: any, data?: any) {
    return { success, msg: message, data }
}