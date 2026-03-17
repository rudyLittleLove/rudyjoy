<!-- 业务监控详情 -->
<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import style from './index.module.scss'
import RuleVisual from './rule-visual/index.vue'
import ScaleOperation from './scale-operation/index.vue'
import { RULE_MODE } from './constants'

const activeMode = ref<RULE_MODE>(RULE_MODE.EDIT)
const wrapRef: any = useTemplateRef<typeof RuleVisual>('RuleVisualRef')
</script>

<template>
  <div :class="style['judgment-rule']"> 
    <div class="operation-group">
      <ScaleOperation :graph="wrapRef" />
    </div>
    <RuleVisual
      ref="RuleVisualRef"
      :mode="activeMode"
    />
  </div>
</template>
