// @ts-check
/*
 * @Author: mfxhb
 * @Date: 2022-11-18 09:27:54
 * @LastEditTime: 2022-11-19 10:56:31
 * @Description:超级扳手-uni
 */
/**
 * todo 获取手机的大概高度
 * @return {Promise<{height:number}>}
 */
export function getSysHeight() {
  return new Promise((resolve, reject) => {
    function getClineHeight() {
      // @ts-ignore
      const { platform, statusBarHeight } = uni.getSystemInfoSync();
      const system = platform; // ios  android
      if (system == "ios") {
        // ios 顶栏大概44
        return 44 + statusBarHeight;
      } else if (system == "android") {
        // 安卓顶栏大概48
        return 48 + statusBarHeight;
      } else {
        return 0;
      }
    }
    // @ts-ignore
    uni.getSystemInfo({
      success: ({ windowHeight }) => {
        // @ts-ignore
        const height = windowHeight - uni.upx2px(80) - getClineHeight();
        resolve({ height });
      },
      fail: (e) => {
        console.log("获取失败Superwrench-uni=>");
        reject(e);
      },
    });
  });
}
