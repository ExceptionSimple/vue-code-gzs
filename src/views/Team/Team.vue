<script setup>
import TeacherGroup from './components/TeacherGroup.vue';
import MemberGroup from './components/MemberGroup.vue';

</script>

<template>
  <div class="header">
    <div class="icon">
      <span class="iconfont">&#xe600;</span>
    </div>
    <div class="title">我们的团队</div>
    <div class="sub-title">由经验丰富的导师和充满激情的学生组成的技术团队</div>
  </div>
  <teacher-group class="container" />
  <member-group class="container" style="margin: 50px auto;" />
</template>

<style scoped>
.header {
  text-align: center;
  padding: 80px 0;
}
.header .icon {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 10px;
  padding: 10px;
  background-image: var(--gradient-primary);
}
.header .iconfont {
  font-size: 37px;
}
.header .title {
  font-weight: 700;
  font-size: .8rem;
  background-image: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 15px 0;
}
.header .sub-title {
  color: var(--normal-text);
  font-size: .3rem;
}
</style>
