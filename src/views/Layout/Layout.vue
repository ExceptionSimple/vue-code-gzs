<script setup>
import { ref } from 'vue';

import LayoutHeader from './components/LayoutHeader.vue';
import LayoutMobileHeader from './components/LayoutMobileHeader.vue';

const width = window.screen.width
let mobileHeaderVisible = ref(false)

if(width <= 768) {
  mobileHeaderVisible.value = true
}

</script>

<template>
  <layout-header v-if="!mobileHeaderVisible" />
  <layout-mobile-header v-else />
  <RouterView />
  <el-footer>
    <div class="container">
      <p>Copyright © 2025-2025 广州软件学院·智慧代码工作室 版权所有</p>
      <a href="https://beian.miit.gov.cn/" target="_blank">ICP备案/许可证号：xxxx号</a>
    </div>
  </el-footer>
</template>

<style scoped>
.el-footer {
  margin-top: 20px;
  background: var(--bg-color);
  padding: 30px 0;
  height: unset;
}
.el-footer .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  line-height: 22px;
}
.el-footer a,
.el-footer span,
.el-footer p {
  color: var(--normal-text);
  font-size: 14px;
  transition: color 0.3s;
}
.el-footer a:hover {
  color: var(--theme-color);
}
</style>
