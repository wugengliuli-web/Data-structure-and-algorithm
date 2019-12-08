import LinkList from './src/LinkList'

let linkList = new LinkList()

linkList.append(5)
linkList.append(5)
linkList.append(6)
linkList.append(7)
linkList.append(8)
linkList.append(9)
linkList.append(10)
console.log(linkList.unshift(10))
console.log(linkList)