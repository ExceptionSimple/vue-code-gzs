<script setup>
</script>

<template>
  <div class="recent-activities">
    <div class="header">
      <h2>近期活动</h2>
      <div>精彩不断，等你参与</div>
    </div>
    <div class="activities-group">
      <div class="item" v-for="x in 3" :key="x">
        <h3>算法训练营</h3>
        <el-tag type="primary" effect="plain" round>培训</el-tag>
        <div>2025年11月11日</div>
      </div>
    </div>
    <el-button>查看更多活动</el-button>
  </div>
</template>

<style scoped>
.recent-activities {
  padding: 5rem;
  /* --gradient-hero-blue: linear-gradient(135deg, hsl(217 91% 60% / .15) 0%, hsl(217 100% 65% / .1) 100%); */
  /* --gradient-hero-solid: linear-gradient(135deg, #4093FF 0%, #6BA8FF 100%); */
  /* background-color: var(--theme-color); */
  /* background-image: var(--gradient-hero-solid); */
  --gradient-hero: linear-gradient(135deg, hsl(217 91% 60% / .1) 0%, hsl(268 85% 65% / .1) 100%);
  background-image: var(--gradient-hero);
  box-sizing: border-box;
}
.recent-activities .header {
  text-align: center;
}
.recent-activities .header h2 {
  margin-bottom: 20px;
  font-size: 30px;
}
.recent-activities .header div {
  margin-bottom: 20px;
  color: var(--normal-text);
}

.recent-activities .activities-group {
  display: flex;
  justify-content: space-between;
}
.activities-group .item {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
}
.activities-group .item .el-tag {
  margin: 15px 0;
}

.recent-activities .el-button {
  margin-top: 20px;
  margin-right: 10px;
  float: right;
  width: 116px;
  background: transparent;
  color: var(--normal-text);
  border: 1px solid var(--normal-text);
}
</style>
