/**
 * 栈是一种先进后出原则的有序集合。
 * 新添加的火待删除的元素都保存在栈的末尾，称为栈顶，另一端就叫栈底
 * 
 */

 function Stack() {
    const item = []

    // 入栈
    this.push = function(element) {
        item.push(element)
    }

    // 出栈
    this.pop = function() {
        return items.pop()
    }

    // 栈顶的一个元素
    this.peek = function() {
        return item[item.length-1]
    }

    this.isEmpty = function() {
        return item.length === 0
    }
  }