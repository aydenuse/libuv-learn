'use strict';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const v1 = new TreeNode(1);
const v2 = new TreeNode(2);
const v3 = new TreeNode(3);
const v5 = new TreeNode(5);
const v6 = new TreeNode(6);
const v7 = new TreeNode(7);
const v8 = new TreeNode(8);
const v9 = new TreeNode(9);
const v11 = new TreeNode(11);
const v12 = new TreeNode(12);
const v13 = new TreeNode(13);
const v20 = new TreeNode(20);
const v15 = new TreeNode(15);

v3.left = v9;
v3.right = v2;
v2.left = v1;
v2.right = v7;
v7.right = v9

function maxDepth(root) {

    if (!root) return 0;
    let depth = 0;
    let queue = [root];
    while (queue.length) {
        const temp = [];
        for (let node of queue) {
            node.left && temp.push(node.left);
            node.right && temp.push(node.right);
        }
        queue = temp;
        depth++;
    }
    return depth;
    
}

console.log(maxDepth(v3))
