<template>
    <div class="user-content">
        <el-form :inline="true" class="search-form" :model="searchData">
            <el-form-item label="用户名称" prop="nickName">
                <el-input v-model="searchData.nickName" placeholder="请输入用户名称"></el-input>
            </el-form-item>

            <el-form-item label="用户角色" prop="role">
                <el-select v-model="searchData.role" style="width: 180px">
                    <el-option label="全部" :value="0" />
                    <el-option
                        v-for="item in roleWithAuthList"
                        :key="item.roleId"
                        :label="item.roleName"
                        :value="item.roleId"
                    />
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="handleSearchUser">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table
            :data="userList"
            border
            style="width: 100%"
            :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
        >
            <el-table-column prop="id" label="编号" width="180" />
            <el-table-column prop="nickName" label="用户昵称" width="180" />
            <el-table-column prop="role" label="用户角色">
                <template #default="scope">
                    <el-button v-for="item in scope.row.role" :key="item.role" type="primary" size="small">
                        {{ item.roleName }}
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column prop="role" label="操作">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="handleEditUser(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog v-model="editVisible" title="编辑用户" width="30%" :close-on-click-modal="false">
            <el-form :model="editInfo" label-width="100px">
                <el-form-item label="用户昵称">
                    <el-input v-model="editInfo.nickName"></el-input>
                </el-form-item>
                <el-form-item label="用户角色">
                    <el-select v-model="editInfo.role" multiple style="width: 180px">
                        <el-option
                            v-for="item in roleWithAuthList"
                            :key="item.roleId"
                            :label="item.roleName"
                            :value="item.roleId"
                        />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="editVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleEditUserSubmit">修改</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { getUserList } from '@/api/user';
import { getRoleList } from '@/api/role';

// 角色接口
interface IRole {
    role: number; // 角色id
    roleName: string; // 角色名称
}

interface IUser {
    id: number;
    userName: string;
    nickName: string;
    role: IRole[];
}

interface IRoleWithAuth {
    roleId: number;
    roleName: string;
    authority: [];
}

interface IQueryUser {
    nickName: string;
    role: number;
}

interface IUserEdit {
    id: number;
    nickName: string;
    role: number[];
    userName: string;
}

const searchData = ref<IQueryUser>({
    role: 0,
    nickName: ''
});

// 用户列表
const userList = ref<IUser[]>([]);

// 角色列表
const roleWithAuthList = ref<IRoleWithAuth[]>([]);

const editVisible = ref(false);

const editInfo = reactive<IUserEdit>({
    id: 0,
    nickName: '',
    role: [],
    userName: ''
});

// 查询
const handleSearchUser = () => {
    let res: IUser[] = [];
    if (searchData.value.nickName || searchData.value.role) {
        if (searchData.value.nickName) {
            res = userList.value.filter((item) => item.nickName.includes(searchData.value.nickName));
        }
        if (searchData.value.role) {
            res = searchData.value.nickName ? res : userList.value;
            res = res.filter((item) => item.role.find((role) => role.role === searchData.value.role));
        }
    } else {
        res = userList.value;
    }
    userList.value = res;
};

watch([() => searchData.value.nickName, () => searchData.value.role], () => {
    if (searchData.value.nickName === '' || searchData.value.role === 0) {
        getUserListData();
    }
});

onMounted(() => {
    getUserListData();
    getRoleListData();
});

const getUserListData = () => {
    return getUserList().then((res) => {
        userList.value = res.data;
    });
};

const getRoleListData = () => {
    return getRoleList().then((res) => {
        roleWithAuthList.value = res.data;
    });
};

const handleEditUser = (row: IUser) => {
    editVisible.value = true;
    console.log(row);

    Object.assign(editInfo, {
        ...row,
        role: row.role.map((item) => item.role)
    });
    console.log(editInfo, 'editInfo');
};

const handleEditUserSubmit = () => {
    editVisible.value = false;
    let obj: IUser = userList.value.find((item) => item.id === editInfo.id)!;
    obj.nickName = editInfo.nickName;
    obj.role = [];
    roleWithAuthList.value.forEach((item) => {
        if (editInfo.role.find((role) => role === item.roleId)) {
            obj.role.push({
                role: item.roleId, // 角色id
                roleName: item.roleName // 角色名称
            });
        }
    });
};
</script>

<style lang="less" scoped>
.search-form {
    padding: 10px 0 0 10px;
}
</style>
