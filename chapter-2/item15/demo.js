/*
 * @Author: yuan.zhou
 * @Date: 2021-05-15 12:33:56
 * @Descripton: 函数提升
 * @LastEditTime: 2021-05-22 23:22:46
 */
function getAttr() {
    return 'outer'
}

/* 函数命名存在函数提升的问题 */
function f1(flag) {
  let res = [];
  if(flag) {
    function getAttr() {
        return 'inner'
    }
    res.push(getAttr())
  }
  console.log({getAttr});
  res.push(getAttr())
  return res;
}
// console.log(f1(true));  // 
// console.log(f1(false)); // getAttr is not defind

/* 采用表达式命名的方式解决函数提升问题 */
function f2(flag) {
    let res = [];
    let getAttr_copy = getAttr;
    if(flag) {
        getAttr_copy = function() {
            return 'inner';
        }
        res.push(getAttr_copy());
    }
    res.push(getAttr_copy());
    return res;
}
// console.log(f2(true)); // ['inner', 'inner']
// console.log(f2(false)); // ['outer']