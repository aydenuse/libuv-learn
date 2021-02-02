

const fibonacci = (n) => {
    const queue = [0, 1, 1];
    let index = queue.length;
    if (n < index) {
        return queue[n]
    }
    while(n >= index) {
        queue.shift();
        queue.push((queue[0] + queue[1]) % 1000000007);
        index++
    }
    return queue.pop();
};