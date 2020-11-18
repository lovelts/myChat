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
    <van-form validate-first @submit="onSubmit">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="username"
        name="username"
        id="username"
        class="input"
        placeholder="请输入账号"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="password"
        name="password"
        id="pwd"
        class="input"
        placeholder="请输入密码"
        :rules="[{ validator, message: '请输入正确内容' }]"
      />
      <div style="margin: 16px; margin-top: 45px">
        <van-button round type="primary" native-type="submit">
          <svg
            t="1604538217317"
            class="icon"
            viewBox="0 0 1000 1000"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6282"
            width="32"
            height="32"
          >
            <path
              d="M630.688 880.688l312.5-312.5c24.406-24.406 24.406-63.969 0-88.376l-312.5-312.5c-24.406-24.406-63.969-24.406-88.376 0-24.406 24.406-24.406 63.969 0 88.376l205.813 205.813h-599.125c-34.531 0-62.5 27.969-62.5 62.5s27.969 62.5 62.5 62.5h599.125l-205.813 205.813c-12.188 12.219-18.313 28.188-18.313 44.188s6.095 32 18.313 44.188c24.406 24.406 63.969 24.406 88.376 0z"
              p-id="6283"
              fill="#31eedb"
            ></path>
          </svg>
        </van-button>
      </div>
    </van-form>
    <div class="footer">
      <div class="footer_context">
        <span>忘记密码</span>
        <span> | </span>
        <span>用户注册</span>
      </div>
    </div>
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

<style lang="css" scoped>
.logo {
  text-align: center;
  margin-top: 4rem;
}
.login_box {
  width: 100%;
  position: relative;
  padding: 30px;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
}
.van-cell,
van-field {
  height: 50px;
  border-radius: 30px;
  margin-top: 15px;
  background-color: rgb(245, 244, 244) !important;
}
.login_box >>> .van-field__control {
  height: 30px !important;

}
.van-button {
  width: 65px;
  height: 65px !important;
  border-radius: 50% !important;
  margin-left: calc(50% - 30px) !important;
}
.login_box .footer {
  height: 50px;
  position: absolute;
  bottom: 40px;
  text-align: center;
  width: 84%;
}
.footer .footer_context span {
  display: inline-block;
  text-align: center;
  width: 25%;
  font-size: 13px;
  color: rgb(197, 195, 195);
}
.footer .footer_context span:first-child {
  text-align: left;
  color: rgb(109, 108, 108);
}
.footer .footer_context span:last-child {
  text-align: right;
  color: rgb(109, 108, 108);
}

</style>