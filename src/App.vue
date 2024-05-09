<template>
    <el-config-provider :locale="locale">
        <router-view></router-view>
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
const locale = zhCn;
</script>

<style lang="css">
#app {
    height: 100vh;
}
</style>
