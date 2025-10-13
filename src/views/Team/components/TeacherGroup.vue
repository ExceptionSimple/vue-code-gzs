<script setup>
</script>

<template>
  <div class="teacher-group">
    <div class="header">
      <h2> <span class="iconfont">&#xe607;</span> 指导老师</h2>
      <el-button>查看所有老师</el-button>
    </div>
    <div class="item-group">
      <div class="item" v-for="x in 2" :key="x">
        <div class="top">
          <div class="avatar">
            <img src="@/assets/avatar.jpg" alt="" />
          </div>
          <div class="right">
            <div class="name">俞文静</div>
            <div class="tag">指导老师</div>
          </div>
        </div>
        <div class="bottom">
          <div class="desc">在计算机领域...</div>
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
  box-shadow: 0 0 20px 3px rgba(0,0,0, 0.13);
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
}
.item-group .item .top {
  display: flex;
}
.item .avatar {
  width: 50px;
  height: 50px;
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
.item .bottom {
  margin-top: 15px;
  color: var(--normal-text);
}

</style>
