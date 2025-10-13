<script setup>
</script>

<template>
  <div class="item">
    <div class="top">
      <div class="avatar">
        <img src="@/assets/avatar.jpg" alt="" />
      </div>
      <div class="right">
        <div class="name">俞文静</div>
        <div class="tag">指导老师</div>
      </div>
      <div class="research-direction">
        <el-tag effect="light">语音识别</el-tag>
      </div>
    </div>
    <div class="bottom">
      <div class="desc">在计算机领域...</div>
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
.item .bottom {
  margin-top: 15px;
  color: var(--normal-text);
  font-size: 16px;
}

.item .research-direction {
  flex: 1;
  margin-left: 20px;
}
.item .research-direction .title {
  font-size: 20px;
  font-weight: 700;
}
</style>
