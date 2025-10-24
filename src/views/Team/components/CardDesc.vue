<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { findByIdAPI as findTeacherById } from '@/api/teacher'
import { findByIdAPI as findStudentById } from '@/api/student'

const props = defineProps({
  hide: { type: Boolean, default: true },
  type: { type: String, default: 'TEACHER' },
  id: { type: Number, default: null }
})
const emit = defineEmits(['close'])

const cardDescRef = ref(null)

const handleClickOutside = (e) => {
  if(cardDescRef.value && !cardDescRef.value.contains(e.target)) {
    emit('close')
  }
}

const data = ref({})

const findById = (id) => {
  if(props.type === 'TEACHER') {
    findTeacherById(id).then(resp => {
      if(resp.code !== 1) return
      data.value = resp.data
      data.value.direction = data.value.direction.split(",")
    })
  } else if(props.type === 'STUDENT') {
    findStudentById(id).then(resp => {
      if(resp.code !== 1) return
      data.value = resp.data
      data.value.direction = data.value.direction.split(",")
    })
  }
}

watch(
  () => props.hide,
  (hidden) => {
    if(!hidden)
      document.addEventListener('click', handleClickOutside)
    else
      document.removeEventListener('click', handleClickOutside)
  },
  { immediate: true }
)
watch(
  () => props.id,
  (id) => {
    if(id == null) return
    findById(id)
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
  <div :class="['card-desc', { 'active': !hide }]">
    <div :class="['top', { 'active': !hide }]" ref="cardDescRef">
      <div class="avatar">
        <img :src="data.avatar" alt="">
      </div>
      <div class="info">
        <div class="name">{{ data.name }}</div>
        <div class="title">{{ data.title }}</div>
        <div class="tags">
          <el-tag effect="light" v-for="item in data.direction">{{ item }}</el-tag>
        </div>
        <div class="introduce">
          {{ data.introduce }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-desc {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0, .2);
  z-index: 10000;
  opacity: 0;
  pointer-events: none;
}
.card-desc.active {
  opacity: 1;
  pointer-events: unset;
}
.card-desc .top {
  width: 6rem;
  padding: .2667rem;
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
.card-desc .top.active {
  opacity: 1;
  transform: translate(-50%, -50%) rotateY(360deg);
  pointer-events: auto;
}
.card-desc .top {
  display: grid;
  gap: 20px;
  grid-template-columns: 150px auto;
}
.card-desc .top .avatar {
  width: 2rem;
  height: 2.6667rem;
}
.card-desc .top .name {
  font-size: .33rem;
  font-weight: 700;
}
.card-desc .top .title {
  margin-top: 10px;
  font-size: 0.26rem;
  color: var(--theme-color);
}
.card-desc .top .el-tag {
  margin-top: 5px;
  margin-right: 5px;
}
.card-desc .introduce {
  color: var(--normal-text);
  font-size: 14px;
  margin-top: 20px;
}

</style>
