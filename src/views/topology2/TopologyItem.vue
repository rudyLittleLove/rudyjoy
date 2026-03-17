<template lang="pug">
div.topology-item-wrap
  div.topology-card-column.card-column
    div.topology-card( @mousedown.stop)
      .header {{treeData.label}}
      el-icon( :size="20" @click="expandChange" color="#ffffff" :class="{loading: isLoading }")
        i-ep-CirclePlusFilled( v-if="!treeData.expand")
        i-ep-RemoveFilled( v-else)
      .body {{treeData.content}}
  transition( :duration="300" name="scale" @after-leave="actionChange")
    div.topology-card-column.next-column( v-show="treeData.expand" v-if="treeData.children && treeData.children.length" :class="{ 'child-only-one': treeData.children.length === 1 }")
      TopologyItem( v-for="(item, i) in treeData.children" :data="item" :key="i")
</template>

<script lang="ts">
import { ref, reactive, defineComponent, inject, nextTick } from 'vue'
interface TreeNode {
  label: string;
  content: string;
  children?: TreeNode[];
  expand: boolean;
}

export default defineComponent({
  name: 'TopologyItem',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const actionChange = inject<any>('action-change')

    const isLoading = ref<boolean>(false)
    const treeData = reactive<TreeNode>({
      label: props.data.label,
      content: props.data.content,
      children: props.data.children || [],
      expand: props.data.expand
    })

    const str = '今天天天气真正好，我和小明抢银行。我抢金他抢银，不止谁拨了110。我跑得快，他跑得慢，他被抓到了警察局。我在家里吃馒头，他在牢里吃拳头，我在家里数金币，他在牢里等枪毙。我的金币数完了，他的小命没有了。今天天天气真正好，我和小明抢银行。我抢金他抢银，不止谁拨了110。我跑得快，他跑得慢，他被抓到了警察局。我在家里吃馒头，他在牢里吃拳头，我在家里数金币，他在牢里等枪毙。我的金币数完了，他的小命没有了。'
    const expandChange = () => {
      treeData.expand = !treeData.expand
      if(treeData.expand && !treeData.children?.length){
        treeData.children = []
        isLoading.value = true
        setTimeout(() => {
          treeData.children = Array.from(new Array(Math.ceil(Math.random() * 3))).map((v, i) => {
            return {
              label: `随机目录${Date.now()}`,
              content: str.slice(0, Math.ceil(Math.random() * str.length)),
              expand: false,
              children: []
            }
          })
          isLoading.value = false

          nextTick(() => {
            actionChange()
          })
        }, 1500 * Math.random())
      } else if(treeData.expand){
        nextTick(() => {
          actionChange()
        })
      }
    }

    return {
      actionChange,
      isLoading,
      treeData,
      expandChange
    }
  }
})
</script>

<style lang="stylus" scoped>
.topology-item-wrap {
  display: flex;
  flex-wrap: nowrap;
  & + .topology-item-wrap {
    margin-top: 20px;
  }
  .topology-card-column {
    pointer-events: none;
    &.card-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 20px;
    }
    &.next-column {
      // padding-left: 120px;
      padding-left: 100px;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &::before { 
        content: '';
        position: absolute;
        top: 50%;
        left: 0px;
        width 40px;
        border-bottom: 1px solid #ffffff;
      }
      &.child-only-one {
        > .topology-item-wrap { 
          &:nth-of-type(1) {
            & > .card-column {
              & > .topology-card {
                &::before {
                  content: '';
                  pointer-events: none;
                  position: absolute;
                  top: 50%;
                  border-bottom: 1px solid #ffffff;
                  left: -100px;
                  width: 100px;
                }
              }
            }
          }
        }
      }
      &:not(.child-only-one) {
        > .topology-item-wrap { 
          &:nth-of-type(1) {
            & > .card-column {
              & > .topology-card {
                &::before {
                  content: '';
                  pointer-events: none;
                  position: absolute;
                  width: 60px;
                  height: 5px;
                  top: 50%;
                  left: -60px;
                  border-top: 1px solid #ffffff;
                  border-left: 1px solid #ffffff;
                  border-top-left-radius: 5px;
                }
                &::after {
                  content: '';
                  pointer-events: none;
                  position: absolute;
                  top: calc(-99999px + 50% + 3px);
                  left: -60px;
                  height: 99999px;
                  border-left: 1px solid var(--bg-color);
                  z-index: 1;
                  border-bottom-right-radius: 5px;
                }
              }
            }
          }
        }
      }
      &:not(.child-only-one) {
        > .topology-item-wrap { 
          &:last-of-type { 
            & > .topology-card-column {
              & > .topology-card {
                &::before {
                  content: '';
                  pointer-events: none;
                  position: absolute;
                  top: calc(-99999px + 50%);
                  left: -60px;
                  width: 60px;
                  height: 99999px;
                  border-left: 1px solid #ffffff;
                  border-bottom: 1px solid #ffffff;
                  border-bottom-left-radius: 5px;
                }
              }
            }
          }
        }
      }
      .topology-item-wrap {
        & + .topology-item-wrap {
          > .topology-card-column > .topology-card {
            &::before {
              content: '';
              pointer-events: none;
              position: absolute;
              bottom: 50%;
              left: -60px;
              width: 60px;
              border-bottom: 1px solid #ffffff;
            }
          }
        }
      }
    }
  }
  .topology-card {
    pointer-events: auto;
    position: relative;
    cursor: default;
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 3px 3px rgba(255, 255, 255, .1);
    .header {
      padding: 10px;
      background-color: orange;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      border-radius: 5px 5px 0 0;
      & + .el-icon {
        float: right;
        margin-right: -20px;
        // margin-top: -10px;
        cursor: pointer;
        position: absolute;
        right: -0;
        top: 50%;
        transform: translateY(-50%);
        &.loading::after {
          content: '';
          pointer-events: none;
          display: block;
          position: absolute;
          box-sizing: border-box;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          left: -2px;
          top: -2px;
          border-left: 2px solid #ffffff;
          border-bottom: 1px solid #ffffff;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: rotating 1s linear infinite;
        }
      }
    }
    .body {
      padding: 10px;
      background-color: #ffffff;
      border-radius: 0 0 5px 5px;
      min-height: 40px;
    }
  }

  .scale-enter-active, .scale-leave-active {
    transform-origin: 0 50%;
    transition: transform .3s linear;
  }
  .scale-leave-to, .scale-enter-from {
    transform: scale(0);
  }
  .scale-enter-to, .scale-leave-from {
    transform: scale(1);
  }
}
</style>