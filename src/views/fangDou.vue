<template>
  <div class="div_wrapper">
    <div class="login_form">
      <p class="users">
        <span>用户：</span><input type="text" value="users" />
      </p>
      <p class="pwd">
        <span>密码：</span><input type="password" value="pwd" />
      </p>
      <button class="submit" @click="submit" :disabled="dis">
        {{ subText }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: "",
      pwd: "",
      dis: false,
      countdown: 5,
    };
  },
  created() {
    this.isSend = true;
  },
  methods: {
    async submit() {
      if (this.isSend == false) return   ;
      this.isSend = false;
      let getData = await axios.get("http://127.0.0.1:5000/goods/goods_list");
      console.log(getData);
      setTimeout(() => {
        this.isSend = true;
      }, 3000);
    },
  },
  computed: {
    subText() {
      if (this.countdown == 0 || this.countdown == 5) {
        return "登录";
      } else {
        return "还剩" + this.countdown + "s";
      }
    },
  },
};
</script>

<style lang='less' scoped>
.div_wrapper {
  .login_form {
    width: 310px;
    height: 214px;
    // overflow: hidden;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: teal;
    overflow: hidden;
    .users,
    .pwd {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > span {
        flex: 0 0 50px;
      }
      > input {
        flex: 1;
      }
    }
    .submit {
      width: 100%;
      background-color: #fff;
      border: none;
    }
    .slider {
      position: absolute;
      width: 100%;
      // height: 100%;
      height: 214px;
      top: 0;
      left: 0;
    }
  }
}
</style>