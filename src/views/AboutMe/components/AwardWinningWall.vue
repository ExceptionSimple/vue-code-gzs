<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const awardTrackRef = ref(null)
let scrollTimer = null

onMounted(async () => {
  await nextTick()
  const track = awardTrackRef.value
  if (!track) return

  // 克隆内容一份，形成连续滚动效果
  const clone = track.cloneNode(true)
  track.parentNode.appendChild(clone)
  // clone.classList.add('clone') // 方便调试时识别（识别是否是复制的）

  const container = track.parentNode
  let scrollLeft = 0
  const speed = 0.8 // 滚动速度（数值越大越快）

  scrollTimer = setInterval(() => {
    scrollLeft += speed
    if (scrollLeft >= track.scrollWidth) {
      // 回到开头
      scrollLeft = 0
    }
    container.scrollLeft = scrollLeft
  }, 16) // ~60fps
})

onBeforeUnmount(() => {
  if (scrollTimer) clearInterval(scrollTimer)
})
</script>

<template>
  <div class="award-winning-wall">
    <div class="header">
      <h2 class="title">荣誉奖项</h2>
      <div class="sub-title">每一份荣誉都代表着我们的努力与成就</div>
    </div>
    <div class="scroll-container container">
      <div class="awards-track" ref="awardTrackRef">
        <div class="item" v-for="x in 20" :key="x">
          <img src="@/assets/1.jpg" alt="xxxx" />
          <div class="mark">
            <p>获奖名称：xxxx大赛</p>
            <p>获奖成员：张三、李四、王五</p>
            <p><span class="iconfont">&#xe680;</span> 2025年10月13日</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header .title {
  font-size: .4rem;
  margin-bottom: 20px;
  text-align: center;
}
.header .sub-title {
  color: var(--normal-text);
  font-size: .3rem;
  text-align: center;
  margin-bottom: 30px;
}

.scroll-container {
  overflow-x: hidden;
  white-space: nowrap;
  position: relative;
}

.awards-track {
  display: inline-block;
  white-space: nowrap;
}

.award-winning-wall .item {
  display: inline-block;
  width: 320px;
  height: 225px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ccc;
  position: relative;
  margin-right: 10px;
}

.award-winning-wall .item .mark {
  position: absolute;
  inset: 0;
  background-color: rgba(0,0,0, .8);
  color: white;
  padding: 10px;
  border-radius: 10px;
  line-height: 25px;
  display: none;
  cursor: pointer;
  font-size: .3rem;
}
.award-winning-wall .item:hover .mark {
  display: block;
}
</style>
