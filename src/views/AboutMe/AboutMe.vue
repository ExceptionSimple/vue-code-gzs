<script setup>
import AwardWinningWall from './components/AwardWinningWall.vue';
import AboutMeInfo from './components/AboutMeInfo.vue';
</script>

<template>
  <div class="header">
    <div class="icon">
      <span class="iconfont">&#xe600;</span>
    </div>
    <div class="title">关于我们</div>
    <div class="sub-title">致力于培养优秀程序员，推动校园技术文化发展</div>
  </div>
  <div class="we-story">
    <h2 class="title">我们的故事</h2>
    <div class="text">
      代码工作室成立于2020年，由一群热爱编程的学生创建。我们的初衷是为校园中热爱技术的同学们提供一个学习、交流和成长的平台。<br />
      四年来，我们从最初的十几个人发展到现在拥有100多名活跃成员的技术社团。我们举办了数十场技术讲座、工作坊和竞赛活动，培养了一批又一批优秀的程序员。 <br />
      我们相信，技术改变世界，而教育改变未来。在这里，无论你是编程新手还是技术达人，都能找到属于自己的位置，与志同道合的伙伴一起追求技术梦想。
    </div>
  </div>
  <AwardWinningWall style="margin-top: 50px;" />
  <AboutMeInfo style="margin-top: 50px; margin-bottom: 100px;" />
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
  font-size: .6rem;
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
.we-story {
  text-align: center;
}
.we-story .title {
  font-size: .4rem;
  margin-bottom: 20px;
}
.we-story .text {
  color: var(--normal-text);
  line-height: 30px;
  font-size: .25rem;
}
</style>
