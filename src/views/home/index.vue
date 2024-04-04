<template>
  <div class="container">
    <span>hello 暖心</span>
  </div>
</template>

<script setup lang="ts">
import gwm from 'gwm'
gwm.creation({
  txt: '暖心专属',
  mode: 'svg',
  watch: true,
  fontSize: 12,
  width: 120,
  height: 120,
  color: '#ccc',  //字体颜色
  font: 'pingfang', //字体
  css: {
    'z-index': 99999,
    'pointer-events': 'none',
  },//自定义样式，这里因为项目需要添加在顶层的图层，
  alpha: 0.6,
  angle: -15,
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container span{
  background: linear-gradient(90deg, #FFC0CB, #FF69B4, #FF1493, #C71585, #8B008B, #4B0082, #0000FF, #0000CD, #00008B, #000080, #191970, #000080, #00008B, #0000CD, #0000FF, #4B0082, #8B008B, #C71585, #FF1493, #FF69B4, #FFC0CB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 100%;
  animation: gradient 15s linear infinite;
}
</style>
