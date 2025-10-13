<script setup>
</script>

<template>
  <div class="about-me-info">
    <div class="header">
      <h2 class="title">联系我们</h2>
    </div>
    <div class="info-group">
      <div class="item">
        <div class="icon">
          <span class="iconfont">&#xe790;</span>
        </div>
        <div class="info">
          <h3 class="title">地址</h3>
          <p>SII-415</p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <span class="iconfont">&#xe883;</span>
        </div>
        <div class="info">
          <h3 class="title">公众号</h3>
          <p>智慧代码工作坊</p>
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
.info-group {
  width: 6.66666rem;
  margin: 0 auto;
}
.item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.item .icon {
  width: 50px;
  height: 50px;
  background-image: var(--gradient-primary);
  color: white;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
}
.item .iconfont {
  font-size: 25px;
}
.info .title {
  font-size: 18px;
}
.info p {
  font-size: 16px;
  color: var(--normal-text);
  margin-top: 5px;
}
</style>
