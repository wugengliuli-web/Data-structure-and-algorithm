import myTool from './src/myTool'

let arr = [1,2,3,[1,2,3,[1,2,3]], {name: 'aa'}]

console.log(myTool.flat(arr))
console.log(arr)