<template>
  <div class="div_wrapper">
    <div class="login">
      <div><span>用户：</span><input type="text" /></div>
      <div><span>密码：</span><input type="password" /></div>
      <button class="submit" @click="submit()" :disabled="dis">
        {{ comText }}
      </button>
    </div>
    <slide-verify
      ref="slideblock"
      @fulfilled="onFulfilled"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
      :accuracy="accuracy"
      :slider-text="text"
      :l='30'
      :w='400'
      :h='250'
      v-if="isShow"
    ></slide-verify>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dis: false,
      countDown: 5,
      msg: "",
      text: "向右滑",
      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 5,
      isShow:true,
    };
  },
  created() {},
  methods: {
    async submit() {
      let obj = await axios.get("http://127.0.0.1:5000/goods/goods_list");
      console.log(obj);
      this.dis = true;
      let timer = setInterval(() => {
        this.countDown--;
        if (this.countDown == 0) {
          clearInterval(timer);
          this.dis = false;
          this.countDown = 5;
        }
      }, 1000);
    },
    async onSuccess() {
      console.log("验证通过");
      this.msg = "验证通过";
      let obj = await axios.get("http://127.0.0.1:5000/goods/goods_list");
      console.log(obj)
      this.isShow=false
    },
    onFail() {
      console.log("验证不通过");
      this.msg = "验证不通过";
    },
    onRefresh() {
      console.log("点击了刷新小图标");
      this.msg = "";
    },
    onFulfilled() {
      console.log("刷新成功啦！");
    },
    
  },
  computed: {
    comText() {
      if (this.countDown == 5 || this.countDown == 0) {
        return "登录";
      } else {
        return "还剩" + this.countDown + "s";
      }
    },
  },
};
</script>

<style lang='less' scoped>
.div_wrapper {
  width: 300px;
  .login {
    > div {
      display: flex;
      // justify-content: space-between;
      > span {
        flex: 0 0 60px;
      }
      > input {
        flex: 1;
      }
    }
    .submit {
      width: 100%;
      text-align: center;
      background-color: #fff;
      border: none;
    }
  }
}
</style>