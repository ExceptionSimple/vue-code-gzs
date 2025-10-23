<script setup>
const props = defineProps({
  data: { type: Object, default: {} }
})

if(props.data.direction)
  props.data.direction = props.data.direction.split(',')
else
  props.data.direction = []
</script>

<template>
  <div class="enterprises-item">
    <div class="cover">
      <img :src="data.logo" alt="" />
    </div>
    <div class="info">
      <div class="title">{{ data.name }}</div>
      <div class="desc two-line-ellipsis">{{ data.introduce }}</div>
      <div class="tags">
        <el-tag effect="light" round v-for="item in data.direction">{{ item }}</el-tag>
      </div>
    </div>
  </div>
</template>

<style scoped>
.enterprises-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  /* max-height: 200px; */
  max-width: 800px;
  margin: 0 auto 20px;
  transition: all .5s ease;
  border-radius: 10px;
  /* border: 1px solid #ccc; */
  border-left: 5px solid var(--theme-color);
  border-right: 5px solid var(--theme-color);
}

.enterprises-item:hover {
  transform: translateY(-15px);
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, .13);
  /* border-color: transparent; */
}
.enterprises-item .cover {
  flex: .3;
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  overflow: hidden;
}
.enterprises-item .cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.enterprises-item .info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.enterprises-item .title {
  font-size: 0.4rem;
  font-weight: 700;
}
.enterprises-item .desc {
  margin-top: 10px;
  font-size: .2rem;
  color: var(--normal-text);
}
.enterprises-item .tags {
  margin-top: 10px;
}
.enterprises-item .tags .el-tag {
  margin-right: 5px;
}
</style>
