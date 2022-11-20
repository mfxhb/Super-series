/*
 * @Author: mfxhb
 * @Date: 2022-11-20 17:45:41
 * @LastEditTime: 2022-11-20 17:57:53
 * @Description: api
 */

/**
 * @param {string} url 路径
 */
export function testApi(url) {
  return new Promise((r, e) => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => r(res))
      .catch((error) => e(error));
  });
}
