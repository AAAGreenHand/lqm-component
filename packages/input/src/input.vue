<template>
  <div>
    <input :type="type" :value="value" @input="handleInput" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  name: "LgInput",
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
      const _findParent = (parent) => {
        while (parent) {
          if (parent.$options.name === "LgFormItem") {
            break;
          } else {
            parent = parent.$parent;
          }
        }
        return parent;
      };
      const parent = _findParent(this.$parent);
      parent && parent.$emit("validate");
    },
  },
};
</script>
