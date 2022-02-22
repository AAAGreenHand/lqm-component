import LgInput from "../index.js";

export default {
  title: "LgInput",
  component: LgInput,
};

export const Text = () => ({
  props: {},
  components: { LgInput },
  template: `<lg-input v-model="value"/>`,
  data() {
    return {
      value: "admin",
    };
  },
});

export const password = () => ({
  props: {},
  components: { LgInput },
  template: `<lg-input v-model="value" :type="type"/>`,
  data() {
    return {
      value: "123456",
      type: "password",
    };
  },
});
