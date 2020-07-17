import ModuleDao from '../dao/ModuleDao';

export default class ModuleService {
    /**
     * 
     */
    async getModuleAll() {
        const moduleDao = new ModuleDao();
        try {
            let module = await moduleDao.getModuleAll();
            let objModule: any = [];
            for (let i = 0; i < module.length; i++) {
                if (module[i]["rid"] === null && module[i]["level"] === 1) {
                    objModule.push(module[i]); // 根类模块
                }
            }
            for (let j = 0; j < objModule.length; j++) {
                let chiModule: any = [];
                for (let x = 0; x < module.length; x++) {
                    if (objModule[j]["id"] === module[x]["rid"] && module[x]["level"] === 2) {
                        chiModule.push(module[x])
                    }
                }
                objModule[j].children = chiModule// 一类模块
            }
            for (let m = 0; m < objModule.length; m++) {
                let subChildren = objModule[m].children;
                for (let s = 0; s < subChildren.length; s++) {
                    let subModule: any = [];
                    for (let n = 0; n < module.length; n++) {
                        if (subChildren[s]["id"] === module[n]['rid'] && module[n]["level"] === 3) {
                            subModule.push(module[n]);
                        }
                    }
                    subChildren[s].children = subModule;
                }
            }
            return objModule;
        } catch (error) {
            throw new Error(error)
        }
    }
}