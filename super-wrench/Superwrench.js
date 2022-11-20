// @ts-check
/*
 * @Author: mfxhb
 * @Date: 2022-11-17 10:40:45
 * @LastEditTime: 2022-11-19 18:20:05
 * @Description: 超级扳手
 */

/**
 * todo 判断数组里面的变量是否有空值,有返回true,否则false
 * 空值表现:null undifined [] {} ""
 * @param {any[]} variables 变量数组
 * @return {boolean} 是否有空值
 */
export function theyIsNull(variables) {
  if (!Array.isArray(variables)) {
    throw Error("传值错误::Superwrench theyIsNull");
  }
  let check = false;
  for (let k = 0, len = variables.length; k < len; k++) {
    const item = variables[k];
    if (item === 0) {
      continue;
    } else if (
      !item ||
      JSON.stringify(item) === "{}" ||
      JSON.stringify(item) === "[]"
    ) {
      check = true;
      break;
    }
  }
  return check;
}

/**
 * todo 深度复制
 * @param {any} variable 变量
 * @return {any} 返回一个深度复制的变量
 */
export function depthCopy(variable) {
  try {
    const newVariable = JSON.parse(JSON.stringify(variable));
    return newVariable;
  } catch (error) {
    console.log(error);
    throw Error("复制失败Superwrench depthCopy");
  }
}

/**
 * todo 获取数组中的最大最小值
 * @param {number[]} arrays
 * @return {{max:number,min:number}} max最大值min最小值
 */
export function thyMaxMin(arrays) {
  let min = 0;
  let max = 0;
  for (let k = 0, len = arrays.length; k < len; k++) {
    const item = arrays[k];
    if (k === 0) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
  }
  return {
    min,
    max,
  };
}

/**
 * todo 时间格式CST转GMT格式
 * @param {string} timestr CST格式的时间
 * @return {{year:number,month:number,day:number,hours:number,minute:number,second:number}|string} year 年份,month 月份,day 日,hours 时,minute 分,second 秒
 */
export function timeCSTtoGMT(timestr) {
  if (null == timestr || "" == timestr) {
    return "";
  }
  let dateStr = timestr.trim().split(" ");
  let strGMT =
    dateStr[0] +
    " " +
    dateStr[1] +
    " " +
    dateStr[2] +
    " " +
    dateStr[5] +
    " " +
    dateStr[3] +
    " GMT+0800";
  let date = new Date(Date.parse(strGMT));
  let year = date.getFullYear();
  /**
   * @type {string|number}
   */
  let month, day, hours, minute, second;
  month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  day = date.getDate();
  day = day < 10 ? "0" + day : day;
  hours = date.getHours();
  minute = date.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  second = date.getSeconds();
  second = second < 10 ? "0" + second : second;
  month = Number(month);
  day = Number(day);
  minute = Number(minute);
  second = Number(second);
  return {
    year,
    month,
    day,
    hours,
    minute,
    second,
  };
}
