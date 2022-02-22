<template>
  <div>
    <button @click="handleClick">
      <slot />
      <div>Yeah</div>
    </button>
  </div>
</template>
<script>
export default {
  name: "LgButton",
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.$emit("click", e);
    },
  },
};
</script>
