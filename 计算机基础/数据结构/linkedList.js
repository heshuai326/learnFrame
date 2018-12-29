/**
 * 链表：存储有序的元素集合，链表中的元素在内存中并不是连续方式的
 *      每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（数据域+指针域）
 * */

function LinkedList() {
    const Node = function(element) {
        this.element = element // 数据
        this.next = null // 指针
    }

    let length = 0
    let head = null

    // 添加元素
    this.append = function(element) {
        const node = new Node(element)
        const current = 0

        // 列表中第一个节点
        if (head === null) { 
            head = node
        } else {
            current = head

            // 循环找到最后一项
            while (current.next) {
                current = current.next
            }

            // 找到最后一项，将其next赋值为node，建立链接
            current.next = node
        }
        length++
        
    }

    this.insert = function(position, element) {

    }

    // 移除元素
    this.removeAt = function(position) {
        // 检查越界值
        if (position>-1 && position<length) {
            let current = head
            let previous = null
            let index = 0

            // 移除第一项
            if (position === 0) {
                head = current.next 
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                // 将previous与current的下一项链接起来
                previous.next = current.next
            }
            length--
            return current.element

        } else {
            return null
        } 
    }

    this.indexOf = function() {

    }

    this.isEmpty = function() {

    }

    this.size = function() {

    }

    this.toString = function() {

    }

    this.print = function() {

    }
}