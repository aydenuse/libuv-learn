
function Huffman(str) {
    // 需要编码的字符串
    this.str = str;
    // 键和频率映射表
    this.keyCountMap = null;
    // 编码和键的映射表
    this.codeKeyMap = {};
    // 键和编码的映射表
    this.keyCodeMap = {};
    // 哈夫曼树节点列表
    this.nodeList = null;
    // 哈夫曼树根节点
    this.root = null;
    // 哈夫曼编码后的01序列
    this.code = null;
}
Huffman.prototype.cal = function cal() {
    str = this.str;
    var map = {};
    var i = 0;
    while (str[i]) {
        map[str[i]] ? map[str[i]]++ : (map[str[i]] = 1);
        i++;
    }
    this.keyCountMap = map;
}

Huffman.prototype.sort = function sort() {
    let map = this.keyCountMap;
    var result = [];
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            var obj = {
                key: key,
                val: map[key]
            };
            result.push(new Node(null, null, obj));
        }
    }
    this.nodeList = result.sort(function (x, y) { return x.data.val > y.data.val });
    console.log(this.nodeList)
}
function Node(left, right, data) {
    this.left = left;
    this.right = right;
    this.data = data;
}
Huffman.prototype.makeTree = function makeTree() {
    var i = 0;
    var parentNode;
    var table = this.nodeList;
    while (table.length > 1) {
        parentNode = new Node(table[i], table[i + 1], { key: null, val: table[i]['data'].val + table[i + 1]['data'].val });
        table.splice(i, 2);
        table.unshift(parentNode);
        table.sort(function (x, y) { return x.data.val > y.data.val });
    }
    this.root = table[0] || new Node();
    console.log(table)
    return this.root;
}

Huffman.prototype.traversal = function traversal(tree, code) {
    if (tree.left !== null) {
        traversal.call(this, tree.left, code + '0');
    } else {
        this.keyCodeMap[tree.data.key] = code;
    }
    if (tree.right !== null) {
        traversal.call(this, tree.right, code + '1');
    } else {
        this.keyCodeMap[tree.data.key] = code;
    }

}

Huffman.prototype.encode = function encode() {
    this.cal();
    this.sort();
    var root = this.makeTree();
    this.traversal(root, '');
    var ret = this.keyCodeMap;
    console.log(ret)
    var i = 0;
    var result = '';
    var str = this.str;
    while (str[i]) {
        result += ret[str[i++]];
    }
    this.code = result;
    console.log('encode:' + result);
    return result
}
Huffman.prototype.reverseMap = function reverseMap() {
    var ret = this.keyCodeMap;
    var result = {};
    for (key in ret) {
        if (ret.hasOwnProperty(key)) {
            result[ret[key]] = key;
        }
    }
    this.codeKeyMap = result;
    console.log(123,result)
    return result;
}
Huffman.prototype.decode = function decode() {
    var i = 0;
    var result = '';
    var data = '';
    var map = this.reverseMap();
    var str = this.code;
    console.log(111, str)
    while (str) {
        result += str[i++];
        if (result in map) {
            data += map[result];
            str = str.replace(new RegExp("^" + result), '');
            result = '';
            i = 0;
        }
    }
    console.log("decode:" + data)
}
Huffman.prototype.encodeBase64 = function () {
    try {
        var base64 = btoa(this.code);
        return base64;
    } catch (e) {
        return '';
    }
}

var str = 'ew qew qd ef 24 gf ewr getElementsByTagName';
var huffman = new Huffman(str)
huffman.encode(str)
huffman.decode();
huffman.encodeBase64();
