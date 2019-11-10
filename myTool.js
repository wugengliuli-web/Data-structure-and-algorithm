class myTool {
    /**
     * 数组去重方法
     * @param {需要去重的数组 Array} array 
     * @param {是否含有引用类型,默认含有 Boolean} hasObject
     * @returns {去重后新的数组 Array}
     */
    static removeRepeat(array, hasObject=true) {
        //如果不是一个数组,返回undefined
        if(!Array.isArray(array)) return void 0
        //如果只包含基本类型
        if(!hasObject) {
            return [...new Set(array)]
        } else {
            let obj = {}
            let newArray = []  //返回的新数组
            array.forEach(item => {
                let s = JSON.stringify(item)
                //如果不在对象中，则插入新数组
                if(!(s in obj)) {
                    newArray.push(item)
                    obj[s] = true
                }
            })
            return newArray
        }
    }

    /**
     * 用于对象的取值
     * @param {需要索引的对象 Object} obj
     * @param {取值的内容 String} index
     * @param {如果是undefined,或者没找到,则返回的值,默认undefined any} defaultValue
     * @returns {如果值存在,返回取到的值,否则返回默认值 any}
     */
    static objectIndex(obj, index, defaultValue = void 0) {
        //如果不是对象或者字符串,直接返回
        if(
            (Object.prototype.toString.call(obj) !== '[object Object]')
            ||
            (typeof index !== 'string')
        ) {
            return defaultValue
        } else {
            index = index.split('.')
            let ans = obj
            for(let item of index) {
                //如果值存在就继续往下读取,并对除了undefined的几个为false的情况进行兼容
                if(
                    (ans[item])
                    ||
                    (Number.isNaN(ans[item]))
                    ||
                    (ans[item] === '')
                    ||
                    (ans[item] === 0)
                    ||
                    (ans[item] === false)
                    ||
                    (ans[item] === 0.0)
                    ||
                    (ans[item] === null)
                ) {
                    ans = ans[item]
                } else {
                    return defaultValue
                }
            }
            return ans
        } 
    }
}