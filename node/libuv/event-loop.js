setImmediate(() => {
    console.log('[阶段三 immediate] immediate 回调1')
})

setImmediate(() => {
    console.log('[阶段三 immediate] immediate 回调2')
})

setImmediate(() => {
    console.log('[阶段三 immediate] immediate 回调3')
})

setTimeout(() => {
    console.log('[阶段一 immediate] 延时器 回调1')
}, 0)

setTimeout(() => {
    console.log('[阶段一 immediate] 延时器 回调2')
    process.nextTick(() => {
        console.log('【待切入下一阶段】 nextTikc 回调2')
    })
})
setTimeout(() => {
    console.log('[阶段一 immediate] 延时器 回调3')
})
setTimeout(() => {
    console.log('[阶段一 immediate] 延时器 回调3')
})


process.nextTick(() => {
    console.log('【待切入下一阶段】 nextTikc 回调1')
})

process.nextTick(() => {
    console.log('【待切入下一阶段】 nextTikc 回调2')
})

process.nextTick(() => {
    console.log('【待切入下一阶段】 nextTikc 回调3')
    process.nextTick(() => {
        console.log('【待切入下一阶段】 nextTikc 回调4')
    })
})

