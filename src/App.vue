<template lang="pug">
el-config-provider( :locale="locale")
  router-view
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const locale:any = ref({})
import(`element-plus/es/locale/lang/zh-cn`).then((res) => {
  locale.value = res.default
})
</script>
