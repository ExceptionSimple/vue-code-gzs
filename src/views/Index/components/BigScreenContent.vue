<script lang="ts" setup>
import { TypedComponent, type TypedOptions } from "typed-vue3";

const options1: TypedOptions = {
  strings: ["智慧代码工作室"],
  typeSpeed: 80,
  // loop: true,
  onComplete(self) {
    const titleCursor = document.querySelector('.type1 .typed-cursor');
    if (titleCursor) {
      (titleCursor as HTMLElement).style.opacity = '0';
    }
  }
};
const options2: TypedOptions = {
  strings: ["在这里，用代码改变世界，与志同道合的伙伴一起成长"],
  typeSpeed: 60,
  // loop: true,
  onComplete(self) {
    const titleCursor = document.querySelector('.type2 .typed-cursor');
    if (titleCursor) {
      (titleCursor as HTMLElement).style.opacity = '0';
    }
  }
};

</script>

<template>

  <div class="big-screen">
    <!-- <div class="container">
      <h1></h1>
      <div class="sub-title">在这里，用代码改变世界，与志同道合的伙伴一起成长</div>
    </div> -->
    <TypedComponent :options="options1" class="type1">
      <!-- <span class="typing" /> -->
      <h1 class="typing"></h1>
      <!-- <div class="sub-title"></div> -->
    </TypedComponent>
    <TypedComponent :options="options2" class="type2">
      <!-- <span class="typing" /> -->
      <!-- <h1 class="typing"></h1> -->
      <div class="sub-title typing"></div>
    </TypedComponent>
  </div>
</template>

<style scoped>
.big-screen {
  height: 6.66666rem;
  /* background: linear-gradient(to bottom, #f0f6ff, #4093ff); */
  --gradient-hero: linear-gradient(135deg, hsl(217 91% 60% / .1) 0%, hsl(268 85% 65% / .1) 100%);
  background-image: var(--gradient-hero);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.big-screen h1 {
  display: inline-block;
  font-size: .8rem;
  color: var(--theme-color);
}
.big-screen .sub-title {
  margin-top: 15px;
  display: inline-block;
  font-size: .3rem;
  color: var(--normal-text);
}
</style>

<style>
.big-screen .type1 .typed-cursor {
  font-size: .8rem;
}
.big-screen .type2 .typed-cursor {
  font-size: .3rem;
}
</style>
