/**
 * 判断类型的函数
 * @param {需要判断类型的变量 any} date
 * @returns {类型 String} 
 */

function getDateType(date) {
    return Object.prototype.toString.call(date).slice(8, -1)
}

export default getDateType