/*
 * @Author: yuan.zhou
 * @Date: 2021-05-15 12:33:55
 * @Descripton: 立即执行函数
 * 立即执行函数这里体现解决的问题是作用域变量的问题，而在es6中引入的let、const关键字，解决了js中没有块级作用域这个问题
 * @LastEditTime: 2021-05-16 22:16:43
 */
/*  */
const wrapElements = function(a) {
  let res = [];
  for( let i = 0, n = a.length; i < n; i++) {
    res[i] = function() { return a[i] };
  }
  return res
}

/* let wrapEd = wrapElements([10,20,30]);
console.log({wrapEd});
let ff = wrapEd[0];
console.log({ff}, ff()); */


// 新的函数才会产生新的作用域,JavaScript的循环没有新的作用域产生。

// 测试使用的数组
var testArr = [1, 2, 3];

// @1 不使用闭包的情况下我们使用的是的引用
function generateFunc(arr) {
    var result = [];
    var n = arr.length;
    for(var i = 0; i < n; i++) {
        result[i] = function() {
            return arr[i];
        }
    }
    return result;
}
// @1 产生新的函数
var g1 = generateFunc(testArr);
// 此时的i已经变成了3
console.log(g1[0]()); // undefined
console.log(g1[1]()); // undefined
console.log(g1[2]()); // undefined

// @2 使用闭包方式一
function generateFunc1(arr) {
    var result = [];
    var n = arr.length;
    for(var i = 0; i < n; i++) {
        (function(j) {
            result[j] = function() {
                return arr[j];
            }
        })(i)
    }
    return result;
}
// @2 产生新的函数
var g2 = generateFunc1(testArr);
console.log(g2[0]()); // 1
console.log(g2[1]()); // 2
console.log(g2[2]()); // 3

// @3 使用闭包方式二
function generateFunc2(arr) {
    var result = [];
    var n = arr.length;
    for(var i = 0; i < n; i++) {
        (function() {
            result[i] = function() {
                return arr[i];
            }
        })()
    }
    return result;
}
// @3 产生新的函数
var g3 = generateFunc1(testArr);
console.log(g3[0]()); // 1
console.log(g3[1]()); // 2
console.log(g3[2]()); // 3