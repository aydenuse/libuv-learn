

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const v3 = new TreeNode(3);
const v9 = new TreeNode(9);
const v2 = new TreeNode(2);
const v1 = new TreeNode(1);
const v7 = new TreeNode(7);

v3.left = v9;
v3.right = v2;
v2.left = v1;
v2.right = v7

/**
 * 层序遍历
 */
const bfs = (root) => {
    if (!root) {
        return [];
    };
    const res = [];
    const queue = [root];
    while (queue.length) {
        let temp = [];
        for (let i = queue.length; i > 0; i--) {
            const node = queue.shift();
            temp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(temp);
    }
    return res;
}

console.log(bfs(v3))