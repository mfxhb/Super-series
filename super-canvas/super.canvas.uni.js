/*
 * @Author: mfxhb
 * @Date: 2022-11-19 16:43:37
 * @LastEditTime: 2022-11-20 17:47:17
 * @Description: canvas-uni
 */
/**
 * todo 创建一个填充的图片背景
 * @param {CanvasContext} ctx 画布实例
 */
export function fillImage(ctx, img, w, h) {
  ctx.ctx.save();
  ctx.drawImage(img, 0, 0, w, h);
  ctx.restore();
}

/**
 * todo 创建一个旋转过90°的文字
 * @param {CanvasContext} ctx 画布实例
 * @param {string} text 文字内容
 * @param {string} text 文字内容
 * @param {number} x x轴位置
 * @param {number} y y轴位置
 * @param {{color?:string,offsetX?:number,offsetY?:number}} extends_ 扩展配置
 */
export function addtext(ctx, text, x, y, extends_) {
  const { color, offsetX, offsetY } = Object.assign(
    {
      color: "#10ac84",
      offsetX: 5,
      offsetY: -25,
    },
    extends_ || {}
  );
  ctx.save();
  ctx.setFillStyle(color);
  ctx.font = "bold 16px cursive";
  ctx.translate(x, y);
  ctx.rotate((90 * Math.PI) / 180);
  ctx.fillText(text, 0 + offsetY, 0 + offsetX);
  ctx.restore();
}
