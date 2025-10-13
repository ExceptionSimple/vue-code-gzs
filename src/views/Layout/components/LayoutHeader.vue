<script setup>
// import { ref } from 'vue'
// import { Search } from '@element-plus/icons-vue'

// const search = ref('')

</script>

<template>
  <div class="header">
    <div class="container" style="display: flex; justify-content: space-between;">
      <div class="logo">智慧代码工作室</div>
      <ul>
        <li><RouterLink to="/index">首页</RouterLink></li>
        <li><RouterLink to="/team">团队</RouterLink></li>
        <li><RouterLink to="/activities">活动</RouterLink></li>
        <li><RouterLink to="/AboutMe">关于我们</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.active {
  color: skyblue;
}
.header {
  height: 50px;
  line-height: 50px;
  background: var(--header-bg);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);;
  padding: 5px 0;
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

</style>
