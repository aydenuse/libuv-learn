一些基础：

1. Linux 基础：

   1. 内核态和用户态，参考：零拷贝技术
   2. 文件描述符（windows 句柄）
   3. socket、unix 域，（windows 管道、命名管道）

2. C/C++ 基础，参考：菜鸟教程

   1. 基本语法，指针，结构体，宏
   2. 如何编译，make，cmake，CMakelist.txt 都是些什么？
   3. CMakelist.txt 语法

libuv 线程池同步原理：

1. 互斥锁（mutex lock） 线程同步原理，线程初始化过程中会初始化一个全局的互斥锁
2. 文件读写锁
3. 信号量
4. 条件变量
5. 屏障

#### Run
##### 2021-01-28

* [x] 为什么结构体都要 typedef 一下？

```c
// 因为声明变量要这样：
struct 结构体名 变量名
// 所以
typedef struct uv_loop_s uv_loop_t;
uv_loop_t *loop = uv_default_loop();
// 等价于
struct uv_loop_s *loop = uv_default_loop();
```

typedef 这样的形式可以少写个 "struct"，`_s` 和 `_t` 分别是 `struct` 和 `typedef` 的缩写，不是必须，约定俗成而已。

* [ ] 命名 `__` 作为连接的和 `_` 作为连接的有什么区别？
* [ ] 代码

```c++
void uv__signal_close(uv_signal_t* handle){
   // 这里执行的是什么逻辑呢
   uv__signal_stop(handle); 
}

void uv__make_close_pending(uv_handle_t* handle) {
   // 下一个 close = 这个 loop 的 
   handle->next_closing = handle->loop->closing_handles;
   handle->loop->closing_handles = handle;
}


```
