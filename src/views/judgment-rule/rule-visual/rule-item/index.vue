<script lang="ts" setup>
import { ref, computed, useTemplateRef, inject } from 'vue'
import { RULE_MODE } from '../../constants'
import { cloneDeep } from 'lodash-es'
import { setKey } from '../utils'
import style from './index.module.scss'
import CanvasNode from './node/index.vue'
import { ElMessage } from 'element-plus'
import { MoreFilled, SemiSelect } from '@element-plus/icons-vue'
import RuleItem from './node/index.vue'

const props = withDefaults(
  defineProps<{
    mode?: RULE_MODE
    isRoot?: boolean
    level: number // 当前节点所在层级
    index: number // 当前节点所在层级 顺序
  }>(),
  {
    data: () => ({}),
    mode: RULE_MODE.EDIT,
  },
)
const emits = defineEmits(['add', 'remove'])
const setDragLineStyle: any = inject('setDragLineStyle')
const setDragData: any = inject('setDragData')
const getDragData: any = inject('getDragData')

// 获取规则最大层级
const getLevelNum = inject('getLevelNum', () => 0)

const ruleRef: any = useTemplateRef<HTMLDivElement>('ruleRef')
const nodeData = defineModel<any>('nodeData')
const parentData = defineModel<any>('parent')

const expanded = ref(true)
// const isRuleGroup = computed(() => {
//   return !!nodeData.value?.ruleGroupList?.length;
// });

const isRuleGroup = computed(() => {
  return !!nodeData.value?.ruleGroupList?.length
})

// 赋值规则与联合条件
function copyHandle() {
  if (parentData.value.children.length >= 20) {
    ElMessage.warning('不能超过20条')
    return
  }

  const ruleData = setKey(cloneDeep(nodeData.value))
  parentData.value.children.push(ruleData)
  // const index = parentData.value.children.indexOf(nodeData.value);
  // parentData.value.children.splice(index + 1, 0, ruleData);
}

// 移动节点数据 插入至当前节点 前，后
function moveHandle(data: any, dir: 'prev' | 'next') {
  const ruleData = setKey(cloneDeep(data))
  const index = parentData.value.children.indexOf(nodeData.value)
  const targetIndex = dir === 'next' ? index + 1 : index
  parentData.value.children.splice(targetIndex, 0, ruleData)
}

// 添加联合条件
function addHandle(type?: 'rule' | 'condition') {
  if (getLevelNum() >= 6 && type === 'condition' && !nodeData.value.children.filter((v: any) => v.children?.length).length) {
    ElMessage.warning('最多五层规则')
    return
  }

  const ruleData = {
    key: `${Date.now() + Math.random()}`,
    parentRuleGroupId: null,
    ruleGroupId: null,
    ruleListAndor: 'And',
    ruleGroupAndor: null,
    children: null,
    ruleGroupList: [
      {
        pointId: null,
        pointName: '',
        attrType: null,
        value: '',
        dataType: '',
        compareOperator: null,
        thresholdType: 'CONSTANT',
        thresholdValue: '',
      },
    ],
  }
  const groupData = {
    key: `${Date.now() + Math.random()}`,
    parentRuleGroupId: null,
    ruleGroupId: null,
    ruleListAndor: null,
    ruleGroupAndor: 'And',
    children: [ruleData],
    ruleGroupList: null,
  }
  switch (type) {
    case 'condition':
      if (nodeData.value?.children?.length >= 20) {
        ElMessage.warning('不能超过20条')
        return
      }
      nodeData.value.children.push(groupData)
      break
    case 'rule':
      if (nodeData.value?.children?.length >= 20) {
        ElMessage.warning('不能超过20条')
        return
      }

      nodeData.value.children.push(ruleData)
      break
    default:
      if (parentData.value?.children?.length >= 20) {
        ElMessage.warning('不能超过20条')
        return
      }
      parentData.value.children.splice(parentData.value?.children?.indexOf(nodeData.value) + 1, 0, ruleData)
  }
}

// 删除联调条件
function removeHandle(childData?: any) {
  if (!parentData.value) {
    emits('remove')
    return
  }
  const index = parentData.value.children.indexOf(nodeData.value)
  if (parentData.value.children.length <= 1) {
    emits('remove')
  } else {
    if (childData) {
      parentData.value.children.splice(index, 1, childData)
    } else {
      parentData.value.children.splice(index, 1)
    }
    if (parentData.value.children.length === 1 && !parentData.value.children[0]?.ruleGroupList?.length) {
      emits('remove', parentData.value.children[0])
    }
  }
}

function dragoverHandle(e: any) {
  const position = e.currentTarget.getBoundingClientRect()
  const height = position?.height
  setDragData('dir', 'inner')
  setDragData('dropHandle', dropHandle)

  setDragLineStyle(`top: ${position.y + height / 2}px; left: ${position.x}px; width: ${position.width}px`)
}
function dropHandle() {
  getDragData('removeHandle')?.()
  const data = getDragData('draggingData')
  nodeData.value.children.push(data)

  setDragData('dir', null)
}

defineExpose({
  dom: ruleRef,
})
</script>

<template>
  <div ref="ruleRef" :class="style['rule-item']" class="rule-item">
    <div class="rule-card-column" :class="{ 'more-children': nodeData?.children?.length > 1 }">
      <div class="rule-card" @mousedown.stop>
        <CanvasNode
          v-model:data="nodeData"
          :level="props.level"
          :index="props.index"
          :mode="props.mode"
          :is-root="isRoot"
          @add="addHandle"
          @copy="copyHandle"
          @move="moveHandle"
          @remove="removeHandle"
        />
      </div>
    </div>
    <!-- 展开下一级数据 -->
    <!-- :class="[loading ? 'loading' : '']" -->
    <div v-if="!isRuleGroup" class="top-left-line" />
    <em v-if="!isRuleGroup" class="expand-icon" @click="expanded = !expanded">
      <el-icon v-if="expanded" size="10"><SemiSelect /></el-icon>
      <template v-else>
        <span v-if="nodeData.children.length < 100" class="text-number">{{ nodeData.children.length }}</span>
        <el-icon v-else><MoreFilled /></el-icon>
      </template>
    </em>
    <transition :duration="300" name="scale-left-top">
      <div v-if="nodeData?.children?.length" v-show="expanded" class="rule-card-column column-wrap">
        <template v-for="(item, i) in nodeData.children" :key="item.key">
          <RuleItem
            v-model:node-data="nodeData.children[i]"
            v-model:parent="nodeData"
            :is-root="isRoot && nodeData.children.length === 1"
            :mode="props.mode"
            :index="i"
            :level="props.level + 1"
            @remove="removeHandle"
          />
        </template>
      </div>
    </transition>
    <div v-if="!expanded" class="simulate-node" @dragover="dragoverHandle" @drop="dropHandle" />
  </div>
</template>
