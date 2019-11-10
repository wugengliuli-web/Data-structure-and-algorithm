# 我的工具库
**数组去重**

* 数组去重方法
* @param {需要去重的数组 Array} array 
* @param {是否含有引用类型,默认含有true Boolean} hasObject
* @returns {去重后新的数组 Array}

使用 myTool.removeRepeat(array, true)

```
let arr = [
    {name: 'xiaoming'},
    {name: 'xiaoming'},
    {name: 'xiaoming'},
    [1,2,3],
    [1,2,3],
    [1],
    [5,5],
    [5,5],
    1,
    1,
    5
]

let newArr = myTool.removeRepeat(arr, true)

console.log(newArr)

[
    {name: "xiaoming"},
    [1, 2, 3],
    [1],
    [5, 5],
    1,
    5
]
```

**对象的取值**
用于对象的取值
* @param {需要索引的对象 Object} obj
* @param {取值的内容 String} index
* @param {如果是undefined,或者没找到,则返回的值,默认undefined any} defaultValue
* @returns {如果值存在,返回取到的值,否则返回默认值 any}

使用myTool.objectIndex(obj, 'a.q.b.p.a', 9)

```
let obj = {
    a: {
        b: {
            c: {
                d: 5,
                e: {
                    f: void 0,
                    t: null,
                    g: ''
                },
                p: {

                }
            }
        }
    }
}
console.log(myTool.objectIndex(obj, 'a.b.c.d', 9))
```