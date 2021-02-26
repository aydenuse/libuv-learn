'use strict';

const Node = function (data) {
    this.data = data;
    this.next = null;
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);




class LinkList {

    constructor() {
        this.head = new Node('head');
        this.size = this._getSize();
        this.lastNode = this._getLastNode();
    }

    printf() {
        let arr = [];
        let node = this.head;
        while (node) {
            arr.push(node.data);
            node = node.next;
        }
        console.log(arr.join('->'))
    }

    _getSize() {
        let count = 0;
        let node = this.head;
        while (node) {
            console.log(123, node)
            node = node.next;
            count++;
        }
        console.log(count)
        return count;
    }

    _getLastNode() {
        const lastNode = this.head;
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
        return lastNode;

    }

    clear() {
        this.head = new Node('head');
    }

    find(item) {
        let currentNode = this.head;
        while (currentNode.data !== item) {
            currentNode = currentNode.next;
        }
        currentNode = currentNode ? currentNode : null;
        return currentNode;
    }

    insert(data, target) {
        let currentNode = this.find(target);
        const nextNode = currentNode.next;
        const newNode = new Node(data);
        currentNode.next = newNode;
        newNode.next = nextNode;
        return newNode;
    }


}


const linklList = new LinkList();

linklList.insert(n1)

linklList.insert(1, 4)
console.log(linklList)

