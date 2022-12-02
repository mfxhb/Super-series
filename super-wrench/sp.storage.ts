/*
 * @Author: mfxhb
 * @Date: 2022-12-02 10:56:10
 * @LastEditTime: 2022-12-02 11:23:08
 * @Description:
 * 存储
 * 1. 存储数据时,可选择性传入一个有效时长,默认不设置
 * 2. 如果设置了有效时长,会格外存储一个跟数据键名一致并添加了后缀的的一个新存储字段
 * 如: username:admin 那么额外会存储一个 username_expiry:到期时间 的字段
 * 获取
 * 1. 先查看缓存中当前键名是否设置了到期时间
 * 2. 如果设置了到期时间,当前时间如果大于到期时间(已过期)直接返回默认值,或者false
 * 3. 没有过期则正常返回
 */

const postfix = "_expiry"; // 缓存有效期后缀

const storage = {
  /**
   * time 有效时间长(单位秒)
   */
  set(key: string, value: any, time: string = "0") {
    uni.setStorageSync(key, value);
    const seconds = parseInt(time);
    if (seconds > 0) {
      let maturitytimeTimestamp = new Date().getTime();
      // 通过有效时间长计算出到期时间
      // 到期时间(将时间戳除以1000将单位转为秒,这样就跟有效时间长单位一致了)
      maturitytimeTimestamp = maturitytimeTimestamp / 1000 + seconds;
      uni.setStorageSync(key + postfix, maturitytimeTimestamp + "");
    } else {
      //如果有效时间长没有设置,需要将存储的到期时间删掉
      uni.removeStorageSync(key + postfix);
    }
  },
  get(key: string, def: any) {
    // 是否设置了到期时间
    const maturitytime = parseInt(uni.getStorageSync(key + postfix));
    if (maturitytime) {
      // 如果设置了到期时间,当前时间如果大于到期时间(已过期)直接返回默认值,或者false
      if (maturitytime < new Date().getTime() / 1000) {
        if (def) {
          return def;
        } else {
          return false;
        }
      }
    } else {
      //没有过期则正常返回
      const res = uni.getStorageSync(key);
      if (res) {
        return res;
      }
      if (def == undefined || def == "") {
        def = false;
      }
      return def;
    }
  },
  remove(key: string) {
    uni.removeStorageSync(key);
    uni.removeStorageSync(key + postfix);
  },
  clear() {
    uni.clearStorageSync();
  },
};

export { storage };
