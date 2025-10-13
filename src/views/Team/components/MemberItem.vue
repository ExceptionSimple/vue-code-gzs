<script setup>
</script>

<template>
  <div class="item">
    <div class="top">
      <div class="avatar">
        <img src="@/assets/avatar.jpg" alt="" />
      </div>
      <div class="right">
        <div class="name">陶智坤</div>
        <div class="tag">工作室·室长</div>
        <div class="grade">大二</div>
      </div>
    </div>
    <div class="bottom line-ellipsis">
      <el-tag effect="light" round>Java</el-tag>
      <el-tag effect="light" round>Java</el-tag>
      <el-tag effect="light" round>Java</el-tag>
      <el-tag effect="light" round>Java</el-tag>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .5s ease;
  border: 1px solid #ccc;
}
.item:hover {
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, .13);
  border-color: transparent;
}
.item .top {
  display: flex;
}
.item .avatar {
  width: 60px;
  height: 60px;
  border-radius: 100px;
  overflow: hidden;
}
.item .right {
  margin-left: 10px;
}
.item .right .name {
  font-size: 20px;
  font-weight: 700;
}
.item .right .tag {
  font-size: 14px;
  color: var(--theme-color);
}
.item .right .grade {
  font-size: 14px;
  color: var(--normal-text);
}
.item .bottom {
  margin-top: 15px;
  color: var(--normal-text);
  height: 25px;
  overflow: hidden;
  white-space: nowrap;
}
.item .bottom .el-tag {
  margin-right: 5px;
}
</style>
