<template>
  <div class="login_box">
    <div class="logo">
      <van-image
        round
        width="6rem"
        height="6rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value1"
        name="pattern"
        placeholder="正则校验"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="value2"
        name="validator"
        placeholder="函数校验"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <div style="margin: 16px">
        <van-button round type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="footer">footer</div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Login",
  setup() {
    const username = ref("");
    const password = ref("");
    function onSubmit(values) {
      console.log(values);
    }
    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<style lang="css">
.logo {
    text-align: center;
    margin-top: 4rem;
}
.login_box {
  position: relative;
  padding: 30px;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgb(236, 236, 236);
}
.van-cell,
van-field {
  border-radius: 25px;
  margin-top: 20px;
}
.van-button {
  width: 60px;
  height: 60px !important;
  border-radius: 50% !important;
  margin-left: calc(50% - 30px) !important;
}
.footer {
  position: absolute;
  bottom: 30px;
}
</style>