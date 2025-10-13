<script setup>
</script>

<template>
  <div class="teacher-group">
    <div class="header">
      <h2> <span class="iconfont">&#xe600;</span> 工作室成员</h2>
      <el-button>查看所有成员</el-button>
    </div>
    <div class="item-group">
      <div class="item" v-for="x in 4" :key="x">
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
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}
.header .el-button {
  background-color: transparent;
}
.header .iconfont {
  font-size: 20px;
  color: var(--theme-color);
}

.item-group {
  display: flex;
  margin-top: 20px;
}
.item-group .item {
  flex: 1;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .5s ease;
  border: 1px solid #ccc;
}
.item-group .item:hover {
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, .13);
  border-color: transparent;
}
.item-group .item .top {
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
