<template>
    <div class="container">
        <span></span>
    </div>
</template>

<script setup lang="ts">
import gwm from 'gwm';
gwm.creation({
    txt: '暖心专属',
    mode: 'svg',
    watch: true,
    fontSize: 12,
    width: 120,
    height: 120,
    color: '#ccc', //字体颜色
    font: 'pingfang', //字体
    css: {
        'z-index': 99999,
        'pointer-events': 'none'
    }, //自定义样式，这里因为项目需要添加在顶层的图层，
    alpha: 0.6,
    angle: -15
});
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-size: 2rem;
    font-weight: bold;
}

.container span {
    background: linear-gradient(
        90deg,
        #ffc0cb,
        #ff69b4,
        #ff1493,
        #c71585,
        #8b008b,
        #4b0082,
        #00f,
        #0000cd,
        #00008b,
        #000080,
        #191970,
        #000080,
        #00008b,
        #0000cd,
        #00f,
        #4b0082,
        #8b008b,
        #c71585,
        #ff1493,
        #ff69b4,
        #ffc0cb
    );
    background-size: 400% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 15s linear infinite;
}
</style>
