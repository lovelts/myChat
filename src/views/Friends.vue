<template>
  <div class="friend_content">
    <div class="friend-top">
      <van-search v-model="value" shape="round" placeholder="搜索好友" />
      <van-cell title="发现新朋友" is-link url="/" />
    </div>
    <div class="friend_list">
      <van-tabs v-model="activeName" sticky animated @click="changeTabs">
        <van-tab
          v-for="(item, index) in tabsName"
          :key="index"
          :name="item.name"
          :title="item.title"
        >
          <van-swipe-cell
            v-for="index in 19"
            :key="index"
            class="my_card"
            :before-close="beforeClose"
          >
            <van-card
              class="my_card goods-card"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <template #right>
              <van-button
                square
                type="danger"
                text="删除"
                class="delete-button"
              />
            </template>
          </van-swipe-cell>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
// import { Dialog } from "vant";
export default {
  name: "Friends",
    methods: {
    // position 为关闭时点击的位置
    beforeClose({ position }) {
      console.log(this)
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          return true;
        case 'right':
        
            this.$dialog
              .confirm({
                message: '确定删除吗？',
              })
      }
    },
  },
  setup() {
    const tabsName = [
      {
        title: "好友",
        name: "/friends",
      },
      {
        title: "群聊",
        name: "/friends/groupChat",
      },
      {
        title: "即时",
        name: "/friends/atOnce",
      },
    ];
    console.log(this)
    const changeTabs = (e) => {
      console.log(e);
    };
 
    return {
      changeTabs,
      tabsName,
    };
  },
};
</script>
<style lang="css" scoped>
.friend_content {
  width: 100%;
  margin-bottom: 50px;
}
.friend-top {
  margin-bottom: 20px;
}
.goods-card {
  margin: 0;
  border-bottom: 1px solid rgb(247, 247, 247);
  background-color: white;
}
.my_card {
  height: 65px;
}

.my_card >>> .van-card__header {
  height: 55px;
}
.my_card >>> .van-card__thumb {
  height: 55px;
  width: auto;
}
.my_card >>> img {
  box-sizing: border-box;
  width: 50px !important;
  height: 50px !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 2px solid rgb(223, 221, 221);
}
.my_card >>> .van-card__content {
  height: 40px !important;
  min-height: 40px !important;
}
.my_card >>> .van-card__desc {
  margin-top: 4px;
  color: rgb(169, 169, 169) !important;
}
.my_card >>> .van-card__title {
  margin-top: 7px;
  font-size: 16px;
  color: black !important;
  /* font-weight: 600!important; */
}
.delete-button {
  height: 100% !important;
}
</style>