<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  hide: { type: Boolean, default: true }
})
const emit = defineEmits(['close'])

const cardDescRef = ref(null)

const handleClickOutside = (e) => {
  if(cardDescRef.value && !cardDescRef.value.contains(e.target)) {
    emit('close')
  }
}

watch(
  () => props.hide,
  (hidden) => {
    console.log('watch', hidden)
    if(!hidden)
      document.addEventListener('click', handleClickOutside)
    else
      document.removeEventListener('click', handleClickOutside)
  },
  { immediate: true }
)

// onMounted(() => {
//   document.addEventListener('click', handleClickOutside)
// })
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div :class="['card-desc', { 'active': !hide }]" ref="cardDescRef">
    <div class="top">
      <div class="avatar">
        <img src="@/assets/1.png" alt="">
      </div>
      <div class="info">
        <div class="name">张修博</div>
        <div class="title">指导老师</div>
        <div class="tags">
          <el-tag effect="light">语音识别</el-tag>
          <el-tag effect="light">自动驾驶</el-tag>
        </div>
      </div>
    </div>
    <div class="introduce">
      在计算机人工智能领域中是位超级无敌巨佬！！！实力与颜值双双在线！！！
    </div>
  </div>
</template>

<style scoped>
.card-desc {
  width: 450px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(0deg);
  transform-origin: center;
  background: linear-gradient(145deg, #ffffff, #f5f5f7);
  transition: transform 0.6s ease, opacity 0.3s ease;
  opacity: 0;
  pointer-events: none; /* 防止隐藏时可点 */
}
.card-desc.active {
  opacity: 1;
  transform: translate(-50%, -50%) rotateY(360deg);
  pointer-events: auto;
}
.card-desc .top {
  display: flex;
  gap: 20px;
}
.card-desc .top .avatar {
  width: 150px;
  height: 200px;
}
.card-desc .top .name {
  font-size: 25px;
  font-weight: 700;
}
.card-desc .top .title {
  margin-top: 10px;
  font-size: 20px;
  color: var(--theme-color);
}
.card-desc .top .tags {
  margin-top: 10px;
}

.card-desc .top .el-tag {
  margin-top: 5px;
  margin-right: 5px;
}
.card-desc .introduce {
  color: var(--normal-text);
  font-size: 18px;
  margin-top: 20px;
}

</style>
