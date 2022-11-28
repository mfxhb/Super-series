<!--
 * @Author: mfxhb
 * @Date: 2022-11-23 11:55:47
 * @LastEditTime: 2022-11-28 15:07:49
 * @Description: 简陋的导航
-->
<template>
  <nav
    class="xhb-mainnav"
    :style="{
      height: height + 'px',
      minHeight: height + 'px',
      width: width ? width + 'px' : '100%',
      padding: padding,
      backgroundColor: backgroundColor,
    }"
  >
    <div ref="mainnav" class="xhb-mainnav-container">
      <div class="mainnav-item logo">{{ logo }}</div>
      <div
        :class="{ 'active-item': currentNav === item.value }"
        class="mainnav-item"
        v-for="item in navlist"
        :key="item.value"
        @click="navClick(item)"
      >
        {{ item.label || "UNDIFINED!" }}
      </div>
    </div>
    <!-- 扩展 -->
    <div @click="isShowList = true" class="mainnav-extends">
      <div class="_icon">>></div>
      <div
        v-show="isShowList"
        class="extends-content"
        :style="{
          backgroundColor: backgroundColor,
        }"
      >
        <div
          @click.stop="navClick(item)"
          class="content-list-item"
          v-for="item in navlist"
          :key="item.value"
          :class="{ 'active-item': currentNav === item.value }"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
// qk props属性
interface NavItem {
  label: string;
  value: string;
}
interface Props {
  height?: number;
  width?: number;
  padding?: string;
  backgroundColor?: string;
  logo?: string;
  navlist: NavItem[];
}
withDefaults(defineProps<Props>(), {
  backgroundColor: "#fff",
  height: 60,
  logo: "mfxhb",
  padding: "0px 0px 0px 10px",
});
// qk 变量
const currentNav = ref<string>("");
const mainnav = ref();
const isShowList = ref<boolean>(false);
const emit = defineEmits<{
  (e: "change", value: string): void;
}>();
// qk 方法
function navClick(item: NavItem) {
  currentNav.value = item.value;
  isShowList.value = false;
  emit("change", item.value || "");
}
</script>

<style scoped lang="scss">
// qk 主题色
$xhb-color-1: #00965e;
$xhb-color-1-hover: #008050;
$xhb-color-dark: #737373;
$xhb-color-dark-hover: #282c30;
$xhb-color-light: #f2faf7;
$mainnav-extends-width: 50px;

.xhb-mainnav {
  z-index: 999;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.075) !important;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mainnav-extends {
    user-select: none;
    width: $mainnav-extends-width;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      background-color: transparent;
    }
    ._icon {
      &:hover {
        color: $xhb-color-dark-hover;
      }
      &:active {
        text-decoration: underline;

        color: $xhb-color-1;
        text-decoration-thickness: 3px;
      }
    }

    .extends-content {
      position: absolute;
      top: 90%;
      padding: 10px 5px;
      right: 20px;
      border: 1px solid $xhb-color-dark-hover;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      max-height: 200px;
      overflow: auto;
      .content-list-item {
        padding: 16px 20px;
        border-radius: 3px;
        font-weight: 700;

        &:hover {
          background-color: #e9ecef;
          color: $xhb-color-1-hover;
        }
      }

      .active-item {
        color: $xhb-color-light;
        background-color: $xhb-color-1-hover;
      }
    }
  }
  .xhb-mainnav-container {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow: hidden;
    .mainnav-item {
      height: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 3px;
      justify-content: center;
      align-items: center;
      color: $xhb-color-dark;
      font-weight: 700;
      user-select: none;
      font-size: 20px;
      &:not(.logo) {
        &:hover {
          color: $xhb-color-dark-hover;
          background-color: rgba(0, 0, 0, 0.1);
        }
        &:active {
          text-decoration: underline;
          color: $xhb-color-1;
          background-color: transparent;
          text-decoration-thickness: 3px;
        }
      }
    }
    .active-item {
      color: $xhb-color-1 !important;
      background-color: transparent !important;
    }
    .logo {
      font-size: 30px;
      font-weight: 700;
      color: black;
    }
  }
}
</style>
