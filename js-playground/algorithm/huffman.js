/**
 * 哈夫曼树节点
 */
class Node {
    constructor(val = {}, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
/**
 * 定义与原理：
 * - 节点的路径长度
 * 从根节点到该节点的路径上的连接数
 * - 树的路径长度
 * 树中每个叶子节点的路径长度之和
 * - 节点的带权路径长度
 * 节点的路径长度与节点权值的乘积
 * - 树的带权路径长度
 * WPL(Weighted Parh Length) 是树中所有叶子节点的带权路径长度之和
 * 
 * 名词解释：
 * - 定长编码
 * 像 ASCII 编码
 * - 变长编码
 * 单个编码的长度不一致，可以根据整体出现的频率来调节
 * - 前缀码
 * 所谓的前缀码，就是没有任何码字是其他码字的前缀
 */
class Huffman {

    constructor(str) {
        // 编解码字符串
        this.str = str;
        // 节点队列
        this.queue = [];
        // 跟结点
        this.root = new Node();
        // 字符与出现次数映射表
        this.map = {};
        // 编码结果
        this.code = '';
        // 字符与编码映射表
        this.codeMap = {};
    }

    calculateTimes(str = this.str) {
        const map = this.map;
        for (let i = 0; i < str.length; i++) {
            const item = str[i];
            if (map[item]) {
                map[item]++
            } else {
                map[item] = 1;
            }
        };
        return map;
    }

    sort(map = this.map) {
        for (let item in map) {
            const node = new Node({
                str: item,
                weight: map[item]
            })
            this.queue.push(node)
        }
        return this.queue.sort((a, b) => a.val.weight - b.val.weight);
    }

    makeTree() {
        while (this.queue.length > 1) {
            const n1 = this.queue.shift();
            const n2 = this.queue.shift();
            const node = new Node({
                str: null,
                weight: n1.val.weight + n2.val.weight
            });
            node.left = n1;
            node.right = n2;
            this.queue.push(node);
            // 这里偷懒了，队列因为用的数组，直接排序了，复杂度会很高，应该用链表
            this.queue.sort((a, b) => a.val.weight - b.val.weight)
        }
        this.root = this.queue[0];
        return this.root;
    }

    traverseTree(tree, code = '') {
        const that = this
        if (tree.left) {
            that.traverseTree(tree.left, code + '0');
        } else {
            that.codeMap[tree.val.str] = code;
        }

        if (tree.right) {
            that.traverseTree(tree.right, code + '1');
        } else {
            that.codeMap[tree.val.str] = code;
        }
    }

    printf() {
        console.log(`编码字符: ${this.str}`);
        // console.log(`字符与编码映射表: ${JSON.stringify(this.codeMap)}`);
        console.log(`编码结果: ${this.code}`);
        console.log(`编码字符站位: ${this.str.length * 8}`);
        console.log(`编码结果站位: ${this.code.length}`);
        console.log(`压缩后占原来内存的: ${this.code.length / (this.str.length * 8) * 100}%`);
    }

    encode() {
        // 统计出现次数
        this.calculateTimes()
        // 根据权重排序
        this.sort();
        // 构建哈夫曼树
        this.makeTree();
        // 遍历哈夫曼树
        this.traverseTree(this.root)
        // 获取编码表
        const codeMap = this.codeMap;
        const str = this.str;
        let index = 0;
        while (index < str.length) {
            this.code += codeMap[str[index]];
            index++;
        }
        this.printf();
        return this.code
    }
}
const str = 'hello, huffman, you are the best'
const huffman = new Huffman(str);
huffman.encode(str)
