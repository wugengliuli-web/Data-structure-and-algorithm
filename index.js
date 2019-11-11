import myTool from './src/myTool'
let obj = {
    a: {
        b: {
            c: {
                d: 5,
                e: {
                    f: void 0,
                    t: null,
                    g: [1,2,3]
                },
                p: {

                }
            }
        }
    }
}


let p = myTool.clone(obj)
obj.a = 5
console.log(obj, p)