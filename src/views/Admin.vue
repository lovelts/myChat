<template>
  <NavBar />
  <div class="home">
  </div>
  <TarBar />
</template>
<script>
import TarBar from "../components/TabBar";
import NavBar from "../components/NavBar";
export default {
  name: "Admin",
  components: {
    TarBar,
    NavBar,
  },
  methods: {
    // position 为关闭时点击的位置
    beforeClose({ position }) {
      switch (position) {
        case "left":
        case "cell":
        case "outside":
          return true;
        case "right":
          return new Promise((resolve) => {
            console.log(this)
            console.log(resolve)
            // this.$dialog
            //   .confirm({
            //     message: "确定删除吗？",
            //   })
            //   .then(resolve);
          });
      }
    },
  },
};
</script>
