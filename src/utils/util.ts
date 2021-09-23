/**
 * 数组是否包含所需值，如果存在返回下标索引值
 * 否则返回-1
 * @param pred: 检测函数
 * @return number
 */
export const arrayFindIndex = function (arr: [], pred: (item: any) => boolean) {
  for (let i = 0; i !== arr.length; i++) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

/**
 * 数组是否包含所需值，如果存在返回对应值
 * 否在返回 undefined
 * @param pred: 检测函数
 * @return item | undefined
 */
export const arrayFind = function (arr: [], pred: () => boolean) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};
