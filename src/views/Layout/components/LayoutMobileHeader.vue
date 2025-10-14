<script setup>
import { onMounted, ref } from 'vue'
import router from '@/router'
import { Menu } from '@element-plus/icons-vue'

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const isAsideActive = ref(false)
const asideRef = ref(null)

const handleClickOutside = (event) => {
  let flag = asideRef.value != null && asideRef.value.$el.contains(event.target)
  if(!flag) {
    isAsideActive.value = false
    document.removeEventListener('click', handleClickOutside)
  }
}

const showAside = () => {
  isAsideActive.value = true
  document.addEventListener('click', handleClickOutside)
}


</script>

<template>
  <el-header>
    <el-icon @click.stop="showAside"><Menu /></el-icon>
    <div class="logo">智慧代码工作室</div>
  </el-header>
  <el-aside ref="asideRef" :class="{ active: isAsideActive }">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="0" @click="$router.push('/index')">首页</el-menu-item>
      <el-menu-item index="1" @click="$router.push('/team')">团队</el-menu-item>
      <el-menu-item index="2" @click="$router.push('/activities')">活动</el-menu-item>
      <el-menu-item index="3" @click="$router.push('/cooperative_enterprises')">合作企业</el-menu-item>
      <el-menu-item index="4" @click="$router.push('/aboutMe')">关于我们</el-menu-item>
    </el-menu>
  </el-aside>
  <div class="mark" v-if="isAsideActive"></div>
</template>

<style scoped>
.mark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0, .3);
  z-index: 99;
}
.el-header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-header .el-icon {
  font-size: 25px;
  color: var(--normal-text);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.el-aside {
  background-color: var(--bg-color);
  position: fixed;
  width: 300px;
  top: 0;
  /* right: 10px; */
  bottom: 0;
  left: -400px;
  z-index: 999;
  transition: left .3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.el-aside.active {
  left: 0;
}
.el-menu {
  height: 100%;
  background-color: var(--bg-color);
}
.el-menu li {
  background-color: var(--bg-color);
}

.logo {
  font-size: 16px;
}


</style>

<style>
.el-menu li,
.el-menu .el-sub-menu__title,
.el-menu .el-icon {
  color: var(--normal-text);
}
.el-menu-item.is-active {
  background-color: transparent;
}
.el-sub-menu__title:hover,
.el-menu-item:hover {
  background-color: transparent;
}
</style>
