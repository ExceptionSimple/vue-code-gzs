<script setup>
const props = defineProps({
  data: { type: Object, default: {} }
})

if(props.data.direction)
  props.data.direction = props.data.direction.split(',')
else
  props.data.direction = []

const switchGrade = (grade) => {
  switch(grade) {
    case 1: return '大一'
    case 2: return '大二'
    case 3: return '大三'
    case 4: return '大四'
    default: return '已毕业'
  }
}
</script>

<template>
  <div class="item">
    <div class="top">
      <div class="avatar">
        <img src="@/assets/avatar.jpg" alt="" />
      </div>
      <div class="right">
        <div class="name">{{ data.name }}</div>
        <div class="tag">{{ data.title }}</div>
        <div class="grade">{{ switchGrade(data.grade) }}</div>
      </div>
    </div>
    <div class="bottom line-ellipsis">
      <el-tag effect="light" round v-for="item in data.direction">{{ item }}</el-tag>
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
  overflow: hidden;
  white-space: nowrap;
}
.item .bottom .el-tag {
  margin-right: 5px;
}
</style>
