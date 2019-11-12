# 我的工具库
**数组去重**
* @param {需要去重的数组 Array} array 
* @param {是否含有引用类型,默认含有true Boolean} hasObject
* @returns {去重后新的数组 Array}
使用 
removeRepeat(array, hasObject=true)

**对象的取值**
* @param {需要索引的对象 Object} obj
* @param {取值的内容 String} index
* @param {如果是undefined,或者没找到,则返回的值,默认undefined any} defaultValue
* @returns {如果值存在,返回取到的值,否则返回默认值 any}
objectIndex(obj, index, defaultValue = void 0)

**深拷贝**
* @param {需要克隆的变量 any} oldSource
* @returns {拷贝后的变量 any} 
clone(oldSource)

**数组扁平化**
* @param {需要扁平化的数组 Array} array 
* @returns {扁平化之后的数组 Array}
flat(array)

**产生[min, max]范围内的随机整数**
* @param {最小值 number} min 
* @param {最大值 number} max
* @returns {返回一个随机数 number} 
randomInt(min, max)

**产生[min, max)的随机数**
* @param {最小值 number} min 
* @param {最大值 number} max
* @param {四舍五入保留几位小数,默认保留一位 number} len
* @returns {返回一个随机数 number} 
random(min, max, len=1)

**生成一个随机数组成的数组**
* @param {数组的X轴 number} x 
* @param {数组的Y轴 number} y 
* @param {随机数的最小值 number} min 
* @param {随机数的最大值 number} max
* @returns {数组 array} 
randomIntArray(x, y, min=0, max=1)

**数组乱序**
* @param {数组 array} array 
* @returns {返回乱序后的数组 array}
arrayScrambling(array)

**数组排序**
* @param {需要排序的数组 array} array 
* @param {升序还是降序, true 升序 false 降序 boolean} order 
* @returns {排序后的新数组 array}
arraySort(array, order=true)

**寻找第K大的数**
* @param {寻找的数组 array} array
* @param {第k大,默认寻找最大的 number} k
* @returns {找到的数字 number}
findK(array, k=1)