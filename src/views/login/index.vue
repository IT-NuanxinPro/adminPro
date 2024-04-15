<template>
    <div>login</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
console.log(userStore);
</script>
