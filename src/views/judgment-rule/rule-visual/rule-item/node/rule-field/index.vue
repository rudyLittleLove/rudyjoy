<script lang="ts" setup>
import { computed } from 'vue'
import { Plus, CopyDocument, DeleteFilled } from '@element-plus/icons-vue'
import style from './index.module.scss'
import { RULE_MODE } from '../../../../constants'

const props = withDefaults(
  defineProps<{
    propPrefix: any
    index?: number
    mode?: RULE_MODE
    isRoot?: boolean
  }>(),
  {
    index: 0,
    mode: RULE_MODE.EDIT,
  },
)
const emits = defineEmits(['add', 'remove', 'copy'])
const disabled = computed(() => {
  return props.mode === RULE_MODE.PREVIEW
})

const valueModel = defineModel<string>()

</script>

<template>
  <div :class="style['rule-field-row']">
    <el-icon class="move-icon"><MoreFilled /></el-icon>
    <el-input
      v-model="valueModel"
    />
    <el-button :disabled="disabled" @click="emits('add')">
      <el-icon><Plus /></el-icon>
    </el-button>
    <el-button :disabled="disabled" @click="emits('copy')">
      <el-icon><CopyDocument /></el-icon>
    </el-button>

    <el-popconfirm v-if="!props.isRoot" title="确认删除？" :disabled="disabled" @confirm="emits('remove')">
      <template #reference>
        <el-button :disabled="disabled">
          <el-icon><DeleteFilled /></el-icon>
        </el-button>
      </template>
    </el-popconfirm>
  </div>
</template>
