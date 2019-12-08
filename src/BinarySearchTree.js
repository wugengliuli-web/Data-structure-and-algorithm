//二叉搜索树节点
class BinarySearchTreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

//插入节点递归函数
function insertNodeLoop(node, newNode) {
    //如果当前节点大于新插入的节点
    if(node.val > newNode.val) {
        //如果坐节点为null
        if(node.left === null) {
            node.left = newNode
        } else {
            //如果不为null，递归执行
            insertNodeLoop(node.left, newNode)
        }
    } else {
        //如果当前节点小于新插入的节点
        if(node.right === null) {
            node.right = newNode
        } else {
            insertNodeLoop(node.right, newNode)
        }
    }
}


//先序遍历递归函数
function preOrderTraversalLoop(node, ans) {
    //如果不为null
    if(node !== null) {
        //插入结果数组
        ans.push(node.val)
        //如果左右节点不为null分别递归
        if(node.left !== null) {
            [node.val].concat(preOrderTraversalLoop(node.left, ans))
        }
        if(node.right !== null) {
            [node.val].concat(preOrderTraversalLoop(node.right, ans))
        }
    }
}

//中序遍历递归函数
function inOrderTraversalLoop(node, ans) {
    //如果节点不为空
    if(node !== null) {
        //如果左节点不为空
        if(node.left !== null) {
            inOrderTraversalLoop(node.left, ans)
        }
        ans.push(node.val)
        if(node.right !== null) {
            inOrderTraversalLoop(node.right, ans)
        }
    }
}

//后序遍历递归函数
function postOrderTraversalLoop(node, ans) {
    if(node !== null) {
        if(node.left !== null) {
            postOrderTraversalLoop(node.left, ans)
        }
        if(node.right !== null) {
            postOrderTraversalLoop(node.right, ans)
        }
        ans.push(node.val)
    }
}


function searchLoop(node, key) {
    if(node === null) {
        return null
    } else {
        //如果节点大于key向左查找，小于key向右查找，等于就返回
        if(node.val > key) {
            return searchLoop(node.left, key)
        } else if(node.val < key) {
            return searchLoop(node.right, key)
        } else {
            return node
        }
    }
}

//二叉搜索树
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    //插入一个新节点
    insert(key) {
        //创建节点
        let node = new BinarySearchTreeNode(key)
        //如果根节点为null,就赋值根节点
        if(this.root === null) {
            this.root = node
        } else {
            //如果不是根节点，就执行递归
            insertNodeLoop(this.root, node)
        }
    }
    //搜索一个节点
    search(key) {
        return searchLoop(this.root, key)
    }
    //先序遍历
    preOrderTraversal() {
        let ans = []
        preOrderTraversalLoop(this.root, ans)
        return ans
    }
    //中序遍历
    inOrderTraversal() {
        let ans = []
        inOrderTraversalLoop(this.root, ans)
        return ans
    }
    //后序遍历
    postOrderTraversal() {
        let ans = []
        postOrderTraversalLoop(this.root, ans)
        return ans
    }
    //寻找最小值
    min() {
        if(this.root == null) return null
        let root = this.root
        while(root.left !== null) {
            root = root.left
        }
        return root.val
    }
    //寻找最大值
    max() {
        if(this.root == null) return null
        let root = this.root
        while(root.right !== null) {
            root = root.right
        }
        return root.val
    }
    //移除一个节点
    remove(key) {
        //如果根节点为null 返回false 代表未删除成功
        if(this.root === null) return false
        let current = this.root
        let parent = null
        let isLeftChild = true  //判断是否是左孩子节点
        //如果当前节点的val 不等于key
        while(current.val !== key) {
            //如果当前节点大于key,向左走，否则向右走
            if(current.val > key) {
                parent = current
                current = current.left
                isLeftChild = true
            } else {
                parent = current
                current = current.right
                isLeftChild = false
            }
            //如果已经到了最底部，返回false，未成功
            if(current === null) return false
        }

        //如果被删除节点左右都为null，直接删除节点
        if(current.left === null && current.right === null) {
            //如果是根节点
            if(current === this.root) {
                this.root = null
            } else {
                if(isLeftChild) {
                    parent.left = null
                } else {
                    parent.right = null
                }
            }
        } else if(current.left !== null && current.right !== null) {
            //如果左右都不为null
            
        } else if(current.left !== null) {
            //如果左不为null
            if(current === this.root) {
                this.root = this.root.left
            } else {
                if(isLeftChild) {
                    parent.left = current.left
                } else {
                    parent.right = current.left
                }
            }
        } else {
            //如果右不为null
            if(current === this.root) {
                this.root = this.root.right
            } else {
                if(isLeftChild) {
                    parent.left = current.right
                } else {
                    parent.right = current.right
                }
            }
        }
        //返回true代表删除成功
        return true
    }
}

export default BinarySearchTree