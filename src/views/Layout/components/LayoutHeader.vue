<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isFixed = ref(false)
const scrollThreshold = 60 // 滚动多少像素后固定

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  isFixed.value = scrollTop > scrollThreshold
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div :class="['header', { 'fixled': isFixed }]">
    <div class="container" style="display: flex; justify-content: space-between;">
      <div class="logo">智慧代码工作室</div>
      <ul>
        <li><RouterLink to="/index">首页</RouterLink></li>
        <li><RouterLink to="/team">团队</RouterLink></li>
        <li><RouterLink to="/activities">活动</RouterLink></li>
        <li><RouterLink to="/cooperative_enterprises">合作企业</RouterLink></li>
        <li><RouterLink to="/AboutMe">关于我们</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.active {
  color: skyblue;
}
.header.fixled {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 50px;
  left: 0;
}
.header {
  height: 50px;
  line-height: 50px;
  background: var(--header-bg);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);;
  padding: 5px 0;
  background-color: var(--header-bg-color);
}
.header a {
  text-align: center;
  transition: color 0.2s;
  color: var(--normal-text);
}
.header ul {
  /* display: flex; */
}
.header li {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 5px 10px;
  font-size: 16px;
}
.header li:hover {
  background-color: var(--nav-hover);
}
.header li:hover a {
  color: #409eff;
}

.header .logo {
  font-size: 16px;
}

</style>
