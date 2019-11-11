# 我的工具库
**数组去重**

* 数组去重方法
* @param {需要去重的数组 Array} array 
* @param {是否含有引用类型,默认含有true Boolean} hasObject
* @returns {去重后新的数组 Array}

使用 myTool.removeRepeat(array, true)

**对象的取值**
* 用于对象的取值
* @param {需要索引的对象 Object} obj
* @param {取值的内容 String} index
* @param {如果是undefined,或者没找到,则返回的值,默认undefined any} defaultValue
* @returns {如果值存在,返回取到的值,否则返回默认值 any}

使用myTool.objectIndex(obj, 'a.q.b.p.a', 9)

**深拷贝**

* 变量深拷贝的方法
* @param {需要克隆的变量 any} oldSource
* @returns {拷贝后的变量 any} 

使用 let newObj = myTool.clone(obj)
