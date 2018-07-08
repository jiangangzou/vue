<template>
  <div id="app">
    <!-- vue 内置组件 -->
   <transition name="router-fade">
     <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
     </keep-alive>
   </transition>
   <transition name="router-fade">
    <router-view v-if="!$route.meta.keepalive"></router-view>
   </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
 @import './style/common';
 /* 进入的那一瞬间 */
 /* .router-fade-enter-active 会在进入整个过程里 */
.router-fade-leave-active,
 .router-fade-enter-active {
  transition:  opacity .3s;
 }
 .router-fade-enter, .router-fade-leave {
   opacity: 0;
 }
</style>
