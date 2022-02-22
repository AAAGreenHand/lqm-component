<template>
  <div>
    <button @click="handleClick">
      <slot />
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
