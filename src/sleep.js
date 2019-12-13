//实现sleep 及等待

//promise实现
export let sleepToPromise = time => {
    return new Promise(res => {
        setTimeout(res, time)
    })
}

//generator实现
export function *sleepGenerator(time) {
    yield new Promise(res => {
        setTimeout(res, time)
    })
}

//async实现
export async function sleepAsync(time, fn) {
    await new Promise(res => {
        setTimeout(res, time)
    })
    return fn()
}