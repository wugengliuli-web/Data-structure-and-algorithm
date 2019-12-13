//模拟new操作运算符
// new 操作做的事情
// 1. 创建一个新对象
// 2. 链接prototype
// 3. 绑定函数调用的this
// 4. 如果存在Object类型的返回值，则返回返回值
export function myNew(fn) {
    if(typeof fn !== 'function') {
        throw '必须是一个函数类型'
    }
    //创建一个新对象,将构造函数的prototype链接到新对象的__proto__上
    let newObj = Object.create(fn.prototype)
    //将arguments变为数组并去掉第一个函数参数
    let newArg = [].splice.call(arguments, 1)
    //获取函数返回值并绑定this，将fn内部的this修改为newObj中的this，并传递参数进行值的添加
    let fnResult = fn.call(newObj, ...newArg)
    //如果返回值为对象并且不为null，返回返回值
    if(typeof fnResult === 'object' && fnResult) {
        return fnResult
    } else {
        return newObj
    }
}

Function.prototype.myCall = function(context) {
    //如果传递为null undefined 空字符串等就变为window
    context = context || window
    context.fn = this
    //获取参数
    let args = Array.from(arguments)
    args.shift()
    let result
    if(args.length !== 0) {
        result = context.fn(...args)
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}


Function.prototype.myApply = function(context) {
    context = context || window
    context.fn = this
    let args = Array.from(arguments)[1] || []
    let result
    if(args.length !== 0) {
        result = context.fn(...args)
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

//利用reduce实现map
Array.prototype.myMap = function(callBack) {
    let array = this
    return array.reduce((prve, cur, index) => {
        prve.push(callBack(cur, index, array))
        return prve
    }, [])
}