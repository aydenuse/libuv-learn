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

/**
 *               3
 *             /  \
 *            9    2
 *                  \
 *                   7 
 *                  / \
 *                1    8
 */

// 前序遍历, 根 左 右;
// 中序遍历, 左 根 右;
// 后序遍历, 左 右 根；

v3.left = v9;
v3.right = v2;
v2.right = v7;
v7.left = v1;
v7.right = v8;


function prodrderTraversal(root) {

}

function inTraversal(root) {
    const stack = [];
    const res = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;

}
console.log(inTraversal(v3))

function postorderTraversal(root) {

} 
