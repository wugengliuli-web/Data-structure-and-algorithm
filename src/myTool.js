import { 
    getDateType 
} from './lib/index'
class myTool {
    /**
     * 数组去重方法
     * @param {需要去重的数组 array} array 
     * @param {是否含有引用类型,默认含有true boolean} hasObject
     * @returns {去重后新的数组 array}
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
     * @param {需要索引的对象 object} obj
     * @param {取值的内容 string} index
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

    /**
     * 数组的扁平化
     * @param {需要扁平化的数组 array} array 
     * @returns {扁平化之后的数组 array}
     */
    static flat(array) {
        let type = getDateType(array)
        //如果不是数组返回undefined
        if(type !== 'Array') return void 0
        else {
            //如果内部存在数组,就展开一次
            while(array.some(item => Array.isArray(item))){
                array = [].concat(...array);
            }
            return array;
        }
    }

    /**
     * 产生[min, max]范围内的随机整数
     * @param {最小值 number} min 
     * @param {最大值 number} max
     * @returns {返回一个随机数 number} 
     */
    static randomInt(min, max) {
        //如果不是数字类型返回undefined
        if(typeof min !== 'number' || typeof max !== 'number') return 0
        min = Math.ceil(min) //上取整
        max = Math.floor(max) //下取整
        if(min > max) return 0
        else if(min === max) return min
        else {
            //缺陷 min max出现的次数远远小于中间数字的次数
            /*let range = max - min
            return min + Math.round(Math.random() * range)
            */
            return parseInt(Math.random()*(max-min+1)+min,10);
        }
    }

    /**
     * 产生[min, max)的随机数
     * @param {最小值 number} min 
     * @param {最大值 number} max
     * @param {四舍五入保留几位小数,默认保留一位 number} len
     * @returns {返回一个随机数 number} 
     */
    static random(min, max, len=1) {
        if(typeof min !== 'number' || typeof max !== 'number' || typeof len !== 'number') return 0
        //对len向下取整
        len = Math.floor(len)
        //最大保留10位小数
        if(len > 10) len = 10
        let ran = max - min
        return (Math.random() * ran + min).toFixed(len)
    }

    /**
     * 生成一个随机数组成的数组
     * @param {数组的X轴 number} x 
     * @param {数组的Y轴 number} y 
     * @param {随机数的最小值 number} min 
     * @param {随机数的最大值 number} max
     * @returns {数组 array} 
     */
    static randomIntArray(x, y, min=0, max=1) {
        if(typeof x !== 'number' || typeof y !== 'number') return []
        if(min > max) {
            min = 0
            max = 1
        }
        if(x === 0 || y === 0) return []
        else {
            let arr = []
            for(let i=0;i<y;i++) {
                arr.push([])
                for(let j=0;j<x;j++) {
                    arr[i].push(this.randomInt(min, max))
                }
            }
            return arr
        }
    }

    /**
     * 数组乱序
     * @param {数组 array} array 
     * @returns {返回乱序后的数组 array}
     */
    static arrayScrambling(array) {
        if(getDateType(array) !== 'Array') return []
        return [...array].sort(() => (Math.random() - 0.5))
    }

    /**
     * 数组排序
     * @param {需要排序的数组 array} array 
     * @param {升序还是降序, true 升序 false 降序 boolean} order 
     * @returns {排序后的新数组 array}
     */
    static arraySort(array, order=true) {
        if(getDateType(array) !== 'Array') return []
        if(order) return [...array].sort((a,b) => a-b)
        else return [...array].sort((a,b) => b-a)
    }

    /**
     * 寻找第K大的数
     * @param {寻找的数组 array} array
     * @param {第k大,默认寻找最大的 number} k
     * @returns {找到的数字 number}
     */
    static findK(array, k=1) {
        if(getDateType(array) !== 'Array' || typeof k !== 'number') return void 0
        if(k > array.length) return 0
        let arr = [...array]
        //过滤掉不是number类型的值
        arr = arr.filter(item => typeof item === 'number')
        let max
        let index
        while(k > 0) {
            k--
            max = Math.max(...arr)
            index = arr.indexOf(max)
            arr.splice(index, 1)
        }
        return max
    }

    /**
     * 冒泡排序
     * @param {*} arr 
     */
    static bubbleSort(arr) {
        let newArr = arr.filter(item => typeof item === 'number')
        for(let i = 0; i < newArr.length; i++) {
            for(let j = i; j< newArr.length; j++) {
                if(newArr[i] > newArr[j]) {
                    [ newArr[i], newArr[j] ] = [ newArr[j], newArr[i] ]
                }
            }
        }
        return newArr
    }

    /**
     * 插入排序
     * @param {*} arr 
     */
    static insertSort(arr) {
        let newArr = arr.filter(item => typeof item === 'number')
        let ans = []
        newArr.forEach((item, i) => {
            //如果在ans中存在大于当前元素，就插入，否则插入最后一个
            let index;
            ans.some((v, i) => {
                if(v > item) {
                    index = i
                    return true
                }
            })
            if(index || index === 0) {
                ans.splice(index, 0, item)
            } else {
                ans.push(item)
            }
        })
        return ans
    }

    /**
     * 快速排序
     * @param {*} arr 
     */
    static quickSort(arr) {
        let newArr = arr.filter(item => typeof item === 'number')
        return loop(newArr)
        function loop(arr) {
            if(arr.length <= 1) return arr
            //取得中间数
            let middle = Math.floor(arr.length/2)
            let middleVal = arr.splice(middle, 1)[0]
            let left = []
            let right = []
            arr.forEach(item => {
                //如果大于中间数放在右边，小于放在左边
                item >= middleVal ? right.push(item) : left.push(item)
            })
            return [...loop(left), middleVal, ...loop(right)]
        }
    }
}

export default myTool