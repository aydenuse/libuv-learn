
'use strict';
const num = [3, 2, 7, 6, 5, 1, 4, 8];
function quickSort3(arr, left = 0, right = arr.length - 1) {
    // 将[left,right]存入数组中，类似于递归入栈
    let list = [[left, right]]; 
    // 若 list 不为空，循环弹出 list 最后一个数组进行快排
    while (list.length) {
        // 弹出 list 末尾。(也可用 list.shift() 取出 list 第一个数组，但在数据量较大时，这种方式效率较低)
        let now = list.pop(); 
        // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
        if (now[0] >= now[1]) {
            continue;
        }
        // 以下与递归方法相同，请参考上面的递归详解
        let [l, r] = [now[0], now[1]];
        let target = arr[now[0]];
        while (l < r) {
            while (l < r && arr[r] >= target) {
                r--;
            }
            arr[l] = arr[r];
            while (l < r && arr[l] < target) {
                l++;
            }
            arr[r] = arr[l]
        }
        arr[l] = target;
        // 将flag左边数组作为待排序数组，只需将左右指针放入list即可
        list.push([now[0], l - 1]);
        // 将flag右边数组作为待排序数组，只需将左右指针放入list即可
        list.push([l + 1, now[1]]);
    }
    console.log(arr)
    return arr
}





quickSort3(num)


