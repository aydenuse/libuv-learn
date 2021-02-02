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

---
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

---
* [x]  为什么使用 `do while(0)`
```c++
#define uv__handle_ref(h)                                                     \
  do {                                                                        \
    if (((h)->flags & UV_HANDLE_REF) != 0) break;                             \
    (h)->flags |= UV_HANDLE_REF;                                              \
    if (((h)->flags & UV_HANDLE_CLOSING) != 0) break;                         \
    if (((h)->flags & UV_HANDLE_ACTIVE) != 0) uv__active_handle_add(h);       \
  }                                                                           \
  while (0)
``` 
`do while` 是为了避免在使用宏定义的时候造成语句歧义，具体可以看[这个](https://www.cnblogs.com/flying_bat/archive/2008/01/18/1044693.html)，引用作者一句话：
> 诚然，这是一个好的，应该提倡的编程习惯，但一般这样的宏都是作为library的一部分出现的，而对于一个library的作者，他所要做的就是让其库具有通用性，强壮性，因此他不能有任何对库的使用者的假设，如其编码规范，技术水平等。

---
* [x] 高效队列的实现
```c++
typedef void *QUEUE[2];

#define QUEUE_NEXT(q)       (*(QUEUE **) &((*(q))[0]))
#define QUEUE_PREV(q)       (*(QUEUE **) &((*(q))[1]))
#define QUEUE_PREV_NEXT(q)  (QUEUE_NEXT(QUEUE_PREV(q)))
#define QUEUE_NEXT_PREV(q)  (QUEUE_PREV(QUEUE_NEXT(q)))
```

---
* [x] 函数声明，没有定义
```c++
void uv__prepare_close(uv_prepare_t* handle);
```

---
* [x] 线程同步锁

---
* [x] 条件变量

---
* [ ] 命名 `__` 作为连接的和 `_` 作为连接的有什么区别？

---
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

---
* [x] AsyncCall 和 SyncCall 这两个方法是在哪里声明的呢？
<<<<<<< HEAD
头文件里

---
* [] 
=======
找到了

* [x] v8 isolate_ 是什么

* [x] libuv以二叉堆的形式维护了超时任务节点


>>>>>>> 20e3d82005f5e9dffca706f10705b24b2e17a184
