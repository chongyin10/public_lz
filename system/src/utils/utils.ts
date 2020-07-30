/**
 * 
 * @param success 
 * @param message 
 * @param data 
 */
export async function resultUtils(success: boolean, message: any, data?: any) {
    return await { success, msg: message, data }
}