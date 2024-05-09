<template>
    <div class="header">
        <div class="flex-center" style="gap: 3px">
            <i-ep-ElementPlus></i-ep-ElementPlus>
            <span>暖心管理系统</span>
        </div>
        <div class="flex-grow"></div>
        <div class="flex-center m05 color-dark-black" style="gap: 3px"><i-ep-user></i-ep-user>{{ userName }}</div>
        <div class="flex-center m05 color-dark-black setting" @click="handerSetting">
            <i-ep-setting></i-ep-setting>
        </div>
    </div>
    <el-drawer v-model="showSetting" :show-close="false" :with-header="false" size="300">
        <div class="setting-header">
            <h2>项目配置</h2>
            <i-ep-close @click="handerClose"></i-ep-close>
        </div>
        <div class="flex-center">
            <el-button type="primary" @click="logout">退出</el-button>
        </div>
    </el-drawer>
</template>

<script setup lang="ts">
import { useUserStoreHook } from '@/store/user';
const userStore = useUserStoreHook();
const userName = userStore.username;

let showSetting = ref(false);
const router = useRouter();
const handerSetting = () => {
    showSetting.value = true;
};
const handerClose = () => {
    showSetting.value = false;
};
const logout = () => {
    sessionStorage.removeItem('userInfo');
    router.push('/login');
};
</script>

<style scoped lang="less">
.header {
    display: flex;
    padding: 0 15px;
    width: 100%;
    height: 60px;
    box-shadow: 0 0 20px rgb(195 223 252 / 40%);
}

.setting {
    cursor: pointer;
}

.setting-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    color: var(--dawei-color-dark-black);
}
</style>
