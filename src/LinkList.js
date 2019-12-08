
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class LinkList {
    constructor() {
        this.root = null
        this.size = 0
    }
    //插入节点
    append(val) {
        //如果根节点不存在
        if(this.root === null) {
            this.root = new Node(val)
        } else {
            let head = this.root
            while(head.next) {
                head = head.next
            }
            head.next = new Node(val)
        }
        this.size++
    }
    //查询节点,不存在返回undefined
    find(val) {
        let ans = []
        let head = this.root
        val = JSON.stringify(val)
        let i = 0
        while(head) {
            if(JSON.stringify(head.val) === val) {
                ans.push({
                    node: head,
                    index: i
                })
            }
            i++
            head = head.next
        }
        return ans.length === 0 ? undefined : ans.length === 1? ans[0]:ans
    }
    //删除节点 传入索引,成功返回删除节点的值 失败返回false
    delNode(index) {
        if(index > this.size - 1 || index < 0) {
            return false
        } else {
            let val = this.get(index)
            //如果删除是头节点
            if(index === 0) {
                this.root = this.root.next
            } else if(index === this.size - 1) {
                //如果删除的是尾节点
                let head = this.root
                while(head.next.next) {
                    head = head.next
                }
                head.next = null
            } else {
                let head = this.root
                while(index > 1) {
                    head = head.next
                    index--
                }
                head.next = head.next.next
            }
            this.size--
            return val
        }
    }
    //查询索引
    indexOf(val) {
        let i = 0
        val = JSON.stringify(val)
        let head = this.root
        while(head) {
            if(JSON.stringify(head.val) === val) {
                return i
            }
            i++
            head = head.next
        }
        return -1
    }
    //获取节点的val
    get(index) {
        if(index < 0 || index > this.size - 1) {
            return null
        } else {
            let head = this.root
            while(index > 0) {
                head = head.next
                index--
            }
            return head.val
        }
    }
    //修改链表的元素,成功返回true，失败返回false
    upDate(index,val) {
        if(index > this.size - 1 || index < 0) {
            return false
        } else {
            let head = this.root
            while(index > 0) {
                head = head.next
                index--
            }
            head.val = val
            return true
        }
    }
    //返回链表的长度
    size() {
        return this.size
    }
    isEmpty() {
        return this.size === 0
    }
    //移除链表的尾部并返回元素
    pop() {
        if(this.isEmpty()) return false
        return this.delNode(this.size - 1)
    }
    //栈顶插入元素
    unshift(val) {
        let node = new Node(val)
        let head = this.root
        this.root = node
        this.root.next = head
        this.size++
    }
    //获取栈顶元素
    shift() {
        return this.isEmpty() ? null : this.root.val
    }
}

export default LinkList