<script setup>
</script>

<template>
  <div class="coming-soon">
    <div class="header">
      <h2> <span class="iconfont">&#xf0fd;</span> 即将开始</h2>
    </div>
    <div class="activities-group">
      <div class="item">
        <div class="top">
          <el-tag effect="light" round>培训</el-tag>
          <el-tag effect="light" round>报名中</el-tag>
        </div>
        <div class="middle">
          <h3 class="title">算法训练营</h3>
          <div class="desc">深入了解算法...</div>
        </div>
        <ul>
          <li><span class="iconfont">&#xe620;</span> 2025年10月13日</li>
          <li><span class="iconfont">&#xe680;</span> 14:00 - 17:00 </li>
          <li><span class="iconfont">&#xe790;</span> SII-415 </li>
          <li><span class="iconfont">&#xe65b;</span> 已报名 23 人 </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  margin-bottom: 30px;
}
.header .el-button {
  background-color: transparent;
}
.header .iconfont {
  font-size: 20px;
  color: var(--theme-color);
}
.item {
  padding: 20px;
  background-color: #fff;
  max-width: 300px;
  cursor: pointer;
  transition: all .5s ease;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.item:hover {
  transform: translateY(-15px);
  box-shadow: 0 0 20px 3px rgba(0,0,0, .13);
  border-color: transparent;
}
.item .top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.item .middle .desc {
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  color: var(--normal-text);
  font-size: 14px;
}
.item .iconfont {
  color: var(--theme-color);
}
</style>
