import ApiDao from '../dao/ApiDao';
import { resultUtils } from '../utils/utils';

export default class ApiService {

    /**
     * 
     */
    async getApiAll() {
        const apiDao = new ApiDao();
        try {
            return await apiDao.getApiAll();
        } catch (error) {
            throw new Error(error)
        }
    }

    /**
     * 分页获取数据
     * @param data 
     * @param page 
     */
    async getApiList(data: any, page: number) {
        const apiDao = new ApiDao();
        try {
            let resultObj: any = await apiDao.getApiList(data, page);
            let result = resultUtils(true, '获取列表成功', resultObj);
            return result;
        } catch (error) {
            return resultUtils(false, '获取列表失败', [])
        }
    }

    /**
     * 添加api
     * @param data 
     * @param page 
     */
    async addApi(data: any, page: number) {
        const apiDao = new ApiDao();
        try {
            await apiDao.addApi(data);
            let result: any = await apiDao.getApiList({}, page);
            return await resultUtils(true, '新增成功', result);
        } catch (error) {
            return await resultUtils(false, '已存在api，不可重复添加', [])
        }
    }

    /**
     * 删除操作
     * @param id 
     * @param page
     */
    async delApi(id: Number, page: Number) {
        const apiDao = new ApiDao();
        try {
            let api = await apiDao.getApiByIdAndSystem(Number(id), 1);
            if (api == null) {
                let result = await apiDao.delApi(id);
                if (result === 1) {
                    let apiList: any = await apiDao.getApiList({}, Number(page));
                    let { pageCount, list }: any = apiList;
                    apiList.limit = Number(page);
                    if (list.length == 0 && pageCount > 0 && page > 0) {  // 说明此处存在数据，只是当前分页查询时，无法显示正常数据，需处理
                        apiList = await apiDao.getApiList({}, Number(page) - 1); // 查询前一页数据
                        apiList.limit = Number(page) - 1;
                    }
                    return await resultUtils(true, '注册api成功', apiList);
                } else {
                    return await resultUtils(true, '注册api失败', []);
                }
            } else {
                return await resultUtils(true, '初始化api无法注册', [])
            }

        } catch (error) {
            return await resultUtils(false, '系统内部错误，无法注册', [])
        }
    }

    /**
     * 
     * @param id 
     * @param system 
     */
    async getApiByIdAndSystem(id: number, system: number) {
        const apiDao = new ApiDao();
        try {
            return await apiDao.getApiByIdAndSystem(id, system);
        } catch (error) {
            return []
        }

    }

    /**
     * 根据主键获取数据
     * @param id 
     */
    async getApiById(id: number) {
        const apiDao = new ApiDao();
        try {
            let result = await apiDao.getApiById(id);
            if (result) {
                return await resultUtils(true, '成功', { list: result });
            } else {
                return await resultUtils(true, '失败', []);
            }
        } catch (error) {
            return await resultUtils(true, 'system获取失败', []);
        }
    }

    /**
     * 修改数据
     * @param data 
     * @param id 
     */
    async updateApi(data: any, id: number, page: number) {
        const apiDao = new ApiDao();
        let apiList: any = [];
        try {
            let result = await apiDao.updateApi(data, id);
            console.log('@result:', result)
            if (!result) {
                apiList = await apiDao.getApiList({}, Number(page));
                return await resultUtils(true, '修改api成功', apiList);
            } else {
                return await resultUtils(true, '修改api失败', apiList);
            }
        } catch (error) {
            return await resultUtils(false, '系统内部错误', apiList)
        }
    }
}