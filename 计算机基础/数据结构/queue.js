/**
 * 队列：先进先出
 */


 function Queue() {
    const items = []

    // 添加元素
    this.enquene = function(element) {
        items.push(element)
    }

    // 删除元素
    this.dequeue = function() {
        return items.shift()
    }


    this.front = function() {
        return items[0]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.clear = function() {
        items = []
    }

    this.size = function() {
        return items.length
    }


    this.print = function() {
        console.log(items.toString())
    }
 }

const queue = new Queue()

queue.enquene('heshuai1')
queue.enquene('heshuai2')

// queue.print()

/**
 * 优先队列
 * 1. 设置优先级，然后在正确的位置添加元素
 * 2. 用入列操作添加元素，然后按照优先级一出他们
 */

function PriorityQueue() {
    const items = []

    function QueueElement(element, priority) {
        this.element = element // 元素值
        this.priority = priority // 优先级
    }

    this.enqueue = function(element, priority) {
        const queueElement = new QueueElement(element, priority)

        if (this.isEmpty()) {
            items.push(queueElement)
        } else {
            let added = false
            for (let i=0; i<items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            } 

            if (!added) {
                items.push(queueElement)
            }
        }

      
    }


    this.isEmpty = function() {
        return items.length === 0
    }

    this.clear = function() {
        items = []
    }

    this.size = function() {
        return items.length
    }


    this.print = function() {
        items.forEach((v)=>{
            console.log(v)
        })
    }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('heshuai1', 1)
priorityQueue.enqueue('heshuai2', 2)
priorityQueue.enqueue('heshuai3', 0)
priorityQueue.print()