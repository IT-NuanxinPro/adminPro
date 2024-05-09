// import { get } from '@/http/request';

// export const getProjectList = async (data?: any) => {
//     return get({}, '/projects', data);
// };

import service from '@/http/request';

// 角色列表接口
export function getProjectList() {
    return service({
        url: '/projects',
        method: 'get'
    });
}
