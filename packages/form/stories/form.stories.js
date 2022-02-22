import LgForm from "../index.js";
import LgFormItem from "../../formItem/index.js";
import LgButton from "../../button/index.js";
import LgInput from "../../input/index.js";

export default {
  title: "LgForm",
  component: LgForm,
};

export const login = () => ({
  components: {
    LgForm,
    LgFormItem,
    LgButton,
    LgInput,
  },
  template: `
    <lg-form ref="form" :model="user" :rules="rules">
        <lg-form-item label="用户名" prop="username">
            <lg-input v-model="user.username" placeholder="请输入用户名"/>
        </lg-form-item>
        <lg-form-item label="密码" prop="password">
            <lg-input v-model="user.password" type="password" placeholder="请输入用户名"/>
        </lg-form-item>
        <lg-form-item>
            <lg-button type="primary" @click="login">登陆</lg-button>
        </lg-form-item>
    </lg-form>
  `,
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("验证成功");
        } else {
          alert("验证失败");
        }
      });
    },
  },
});
