/*
 * @Author: mfxhb
 * @Date: 2022-11-28 15:04:00
 * @LastEditTime: 2022-11-28 15:18:15
 * @Description:
 */
// 组件
import XhbSimplenav from "./nav/xhb-simplenav/xhb-simplenav.vue";
import { App } from "vue";

const Components = [
  {
    name: "XhbSimplenav",
    component: XhbSimplenav,
  },
];

// 类型
interface SimplenavType {
  navItem: {
    label: string;
    value: string;
  }[];
}

// 方法
const installXhbComponents = {
  install(app: App) {
    for (let k = 0, len = Components.length; k < len; k++) {
      const item = Components[k];
      app.component(item.name, item.component);
    }
  },
};

export { installXhbComponents, SimplenavType };
