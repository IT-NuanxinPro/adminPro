// import { get } from '@/http/request';

// // 角色列表接口
// export const getRoleList = async (data?: any) => {
//     return get({}, '/getRoleList', data);
// };

import service from '@/http/request';

// 角色列表接口
export function getRoleList() {
    return service({
        url: '/getRoleList',
        method: 'get'
    });
}
