<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o"> 主页 </van-tabbar-item>
    <van-tabbar-item replace to="/friends" icon="friends-o">好友 </van-tabbar-item>
    <van-tabbar-item replace to="/dynamic" icon="setting-o"> 动态 </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TarBar",
  setup() {
    const active = ref(0);
    const onChange = (index) => {
      if (index === 0) {
        console.log(index);
      }
    };
    return {
      active,
      onChange,
    };
  },
};
</script>