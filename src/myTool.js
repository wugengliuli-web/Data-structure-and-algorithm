import { 
    getDateType 
} from './lib/index'
class myTool {
    /**
     * 数组去重方法
     * @param {需要去重的数组 Array} array 
     * @param {是否含有引用类型,默认含有true Boolean} hasObject
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
        let type = getDateType(obj)
        //如果不是对象或者字符串,直接返回
        if(
            (type !== 'Object')
            ||
            (typeof index !== 'string')
        ) {
            return defaultValue
        } else {
            index = index.split('.')
            let ans = obj
            for(let item of index) {
                //判断是不是对象
                if(type === 'Object') {
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
                } else {
                    return defaultValue
                }
            }
            return ans
        } 
    }

    /**
     * 变量深拷贝的方法
     * @param {需要克隆的变量 any} oldSource
     * @returns {拷贝后的变量 any} 
     */
    static clone(oldSource) {
        let newSource
        //对变量进行类型判断
        //如果为null undefined string number boolean,直接返回
        if(
            (typeof oldSource === null)
            ||
            (typeof oldSource !== 'object')
        ) {
            newSource = oldSource
            return newSource
        } else {
            let type = getDateType(oldSource)
            //如果为对象
            if(type === 'Object') {
                newSource = JSON.parse(JSON.stringify(oldSource))
                return newSource
            } else if(type === 'Array') {
                //如果为数组
                newSource = [...oldSource]
                return newSource
            } else if(type === 'Function') {
                newSource = oldSource
                return newSource
            } else if(type === 'Date') {
                newSource = new Date(oldSource.getTime())
                return newSource
            } else {
                //如果为正则表达式
                let attrs = ''
                if (oldSource.global) attrs += 'g'
                if (oldSource.ignoreCase) attrs += 'i'
                if (oldSource.multiline) attrs += 'm'
                let newSource = new RegExp(oldSource, attrs)
                newSource.lastIndex = oldSource.lastIndex
                return newSource
            }
        }
    }
}

export default myTool