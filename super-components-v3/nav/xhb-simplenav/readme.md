# 简陋的导航

### 关联

```
vue3 ts scss normalize.css(影响不大)
```

### 思路

```
参考思否
1. 最外层是一个自适应父级宽度的mainnav-conainer
2. 内部是向左浮动的mainnav-item
3. 鼠标移入单项中显示单个mainav-itemd的背景跟下划线还有文字颜色加深
4. 鼠标点击后将文字颜色固定成加深的某个颜色模式
5. 屏幕宽度变小后显示更多图表来展示列表
```

### 属性

```
1. height?:number 高度
2. width?:number 宽度
3. backgroundColor?:string 背景色
4. navlist:NavItem[] 导航配置列表
5. logo?:string logo
```

