/*
 * @Author: yuan.zhou
 * @Date: 2021-05-15 12:33:55
 * @Descripton: 闭包 
 * @LastEditTime: 2021-05-16 21:40:14
 */
/* 闭包实现变量/方法的私有性 */
function Container() {
    var store = [];
    return {
        getItem: function(index) {
            return store[index];
        },
        addItem: function(obj) {
            var index = store.push(obj);
            return index - 1;

        },
        length: function() {
            return store.length;
        }
    }
}

var c = Container();
console.log(c.length()); // 0
var index1 = c.addItem({name: 'dreamapple'});
var index2 = c.addItem({age: '22'});
console.log({index1, index2}); // 0
console.log(c.length()); // 1
console.log(c.getItem(index1)); // Object {name: "dreamapple"}
console.log(c.getItem(index2)); // Object {name: "dreamapple"}


/* 闭包的作用 */
/*1- 通过闭包实现函数柯里化 */
const add = function( a ) {
  return function( b ) {
      return function( c ) {
          return a+b+c
      }
  }
}
// console.log(add(1)(2)(3));

let arr = [].push(1,2)
console.log({arr});
