import { createFromIconfontCN } from '@ant-design/icons';

const icon = require('./iconfont'); // 引入的inconfont文件

const SuperIcon = createFromIconfontCN({
    scriptUrl: [
        icon
    ],
});

export default SuperIcon;
