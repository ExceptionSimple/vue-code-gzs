<script setup>
</script>

<template>
  <div class="enterprises-item">
    <div class="cover">
      <img src="@/assets/avatar.jpg" alt="" />
    </div>
    <div class="info">
      <div class="title">xxx有限公司</div>
      <div class="desc">提供前沿技术支持与项目合作机会，共同推进技术创新发展。与工作室建立深度战略合作关系，在技术研发、人才培养、项目孵化等多个领域展开全方位合作。</div>
      <div class="tags">
        <el-tag effect="light" round>Java</el-tag>
        <el-tag effect="light" round>Agent</el-tag>
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
.enterprises-item .info {
  flex: 1;
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
