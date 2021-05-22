/*
 * @Author: yuan.zhou
 * @Date: 2021-05-15 12:33:56
 * @Descripton: 函数、方法、构造函数
 * @LastEditTime: 2021-05-17 23:24:04
 */
/* 1-函数调用 */
const foo = function(str) {
    console.log('hello ' + str);
}
foo('zoe')

/* 2-方法调用（对象的属性恰好是函数） */
const PersonClass = {
    userName: 'zoe',
    getUserName: function() {
        console.log(this.userName);
    }
} 
PersonClass.getUserName();

/* 3-构造函数调用 */
const Shooes = function( price, color ) {
    this.price = price;
    this.color = color;
    console.log({
        price: this.price,
        color: this.color,
    });
}
let nike = new Shooes('1200', 'nike')
