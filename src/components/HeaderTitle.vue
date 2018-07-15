<template>
<div class="headerTitle">
  <div class="title">
    {{header.title}}
  </div>
  <div class="subTitle">
    {{header.subTitle}}
  </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
$titleSize: 50px;
.headerTitle {
  > .title {
    font-size: $titleSize;
  }
  > .subTitle {
    font-size: $titleSize/2;
  }
}
</style>
