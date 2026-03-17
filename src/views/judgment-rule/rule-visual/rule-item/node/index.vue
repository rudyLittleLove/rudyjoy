<script lang="ts" setup>
import { computed, inject, ref, watch } from 'vue'
import { RULE_MODE } from '../../../constants'
import { CaretBottom, CopyDocument, DeleteFilled, Plus } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import style from './index.module.scss'
import RuleField from './rule-field/index.vue'
import { useRoute } from 'vue-router'

const props = withDefaults(
  defineProps<{
    mode?: RULE_MODE
    level: number
    index: number
    isRoot?: boolean
  }>(),
  {
    data: () => ({}),
    mode: RULE_MODE.EDIT,
  },
)

// 添加联合条件，删除联合条件
const emits = defineEmits(['add', 'remove', 'copy', 'move'])

const setDragData: any = inject('setDragData')
const getDragData: any = inject('getDragData')

const route = useRoute()
const disabled = computed(() => {
  return props.mode === RULE_MODE.PREVIEW || route.name === 'JudgmentRulePreview'
})

const ruleData = defineModel<any>('data')
const isRuleGroup = computed(() => {
  return !!ruleData.value?.ruleGroupList?.length
})

const command = computed(() => {
  if (isRuleGroup.value) {
    return ruleData.value?.ruleListAndor
  }
  return ruleData.value?.ruleGroupAndor
})
function commandChangeHandle(val: 'And' | 'Or') {
  if (isRuleGroup.value) {
    ruleData.value.ruleListAndor = val
  } else {
    ruleData.value.ruleGroupAndor = val
  }
}

function dragstartHandle(e: any) {
  if (!isRuleGroup.value) {
    e.preventDefault()
  } else {
    setDragData('draggingDom', e.currentTarget)
    setDragData('draggingData', ruleData.value)
    setDragData('draggingLevel', props.level)
    setDragData('draggingIndex', props.index)
    setDragData('removeHandle', removeRuleHandle)
  }
}
function dragoverHandle(e: any) {
  // 判断可拖入位置
  if (ruleData.value !== getDragData('draggingData') && isRuleGroup.value) {
    const { height } = e.currentTarget.getBoundingClientRect()
    const dir = height / 2 > e.offsetY + height / 2.7 ? 'prev' : 'next'
    // 判断相同层级数据下，相邻节点拖拽 是否允许拖入判断
    if (props.level === getDragData('draggingLevel')) {
      if (
        (dir === 'prev' && props.index - getDragData('draggingIndex') === 1)
        || (dir === 'next' && getDragData('draggingIndex') - props.index === 1)
      ) {
        setDragData('dir', null)
        return
      }
    }
    e.preventDefault()
    setDragData('dropDom', e.currentTarget)
    setDragData('dropData', ruleData.value)
    setDragData('dropHandle', dropHandle)
    setDragData('dir', dir)
  } else {
    setDragData('dir', null)
  }
}

// 拖拽结束后，插入最后匹配到的可放置位置
function dragendHandle() {
  if (getDragData('dir')) {
    getDragData('dropHandle')?.()
  }
  setDragData('dir', null)
}

// 拖拽完成触发 删除拖拽元素，插入至新位置
function dropHandle() {
  // 不存在可拖方向时，不执行切换节点
  if (getDragData('dir')) {
    getDragData('removeHandle')?.()
    const data = getDragData('draggingData')
    emits('move', data, getDragData('dir'))
  }
  setDragData('dir', null)
}

function addRuleHandle() {
  emits('add')
}

function copyRuleHandle(data?: any) {
  emits('copy', data)
}

function removeRuleHandle() {
  if (props.isRoot) {
    ElMessage.warning('根节点不允许删除')
    return
  }
  emits('remove')
}

function commandHandle(val: string) {
  switch (val) {
    case 'rule':
      // addHandle();
      emits('add', 'rule')
      break
    case 'condition':
      emits('add', 'condition')
      break
    case 'remove':
      emits('remove')
      break
    // case 'group':
    //   emits('add', 'group');
    //   break;
    default:
  }
  // command.value = val;
}
</script>

<template>
  <div
    :class="[style['node-box'], isRuleGroup ? style['rule-group'] : '']"
    :draggable="!disabled"
    @dragstart="dragstartHandle"
    @dragover="dragoverHandle"
    @dragend="dragendHandle"
    @drop="dropHandle"
  >
    <el-popover
      v-if="!isRuleGroup"
      placement="top-start"
      trigger="hover"
      :show-arrow="false"
      :offset="4"
      width="28"
      :disabled="disabled"
      :popper-class="style['operation-popper']"
    >
      <template #reference>
        <el-select
          :model-value="command"
          class="index-select"
          :class="command"
          :suffix-icon="CaretBottom"
          :offset="4"
          :popper-class="style['index-select-popper']"
          :disabled="disabled"
          @change="commandChangeHandle"
        >
          <el-option value="Or" label="或者" />
          <el-option value="And" label="并且" />
        </el-select>
      </template>
      <el-dropdown placement="right-start" :offset="4" :disabled="disabled" :show-arrow="false" :popper-class="style['dorpdown-popper']" @command="commandHandle">
        <el-button type="text" style="height: 18px;">
          <el-icon><Plus /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rule">
              添加规则
            </el-dropdown-item>
            <!-- <el-dropdown-item v-if="!isRuleGroup" command="group">添加规则组</el-dropdown-item> -->
            <el-dropdown-item command="condition">
              添加规则组
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-button v-if="!props.isRoot" class="copy-icon" type="text" @click="copyRuleHandle">
        <!-- <SvgIcon icon-name="icon_dam_copy1" /> -->
        <el-icon><CopyDocument /></el-icon>
      </el-button>
      <el-popconfirm v-if="!props.isRoot" title="确认删除？" @confirm="commandHandle('remove')">
        <template #reference>
          <el-button class="remove-icon" type="text">
            <!-- <SvgIcon icon-name="icon_dam_delete" /> -->
            <el-icon><DeleteFilled /></el-icon>
          </el-button>
        </template>
      </el-popconfirm>
    </el-popover>
    <template v-if="isRuleGroup">
      <RuleField
        v-for="(item, i) in ruleData.ruleGroupList"
        :key="item.id"
        v-model="item.value"
        :prop-prefix="`rules.${i}`"
        :index="+i"
        :mode="props.mode"
        :is-root="props.isRoot"
        @add="addRuleHandle"
        @copy="copyRuleHandle"
        @remove="removeRuleHandle"
      />
    </template>
  </div>
</template>
