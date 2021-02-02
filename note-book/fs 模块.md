fs 模块

```javascript
// lib/fs.js

function open(path, flags, mode, callback) {
  ……
  ……
  binding.open(pathModule.toNamespacedPath(path),
               flagsNumber,
               mode,
               req);
}
```



1 是异步 open 方法

2 是同步 open 方法

*通过第三个参数是否为 undefined 判断异步还是同步*

![image-20210201171018089](C:\Users\42977\AppData\Roaming\Typora\typora-user-images\image-20210201171018089.png)



上图可知，调用了 `uv_fs_open`， 

```c
// libuv/src/unix/fs.c
int uv_fs_open(uv_loop_t* loop,
               uv_fs_t* req,
               const char* path,
               int flags,
               int mode,
               uv_fs_cb cb) {
  INIT(OPEN);
  PATH;
  req->flags = flags;
  req->mode = mode;
  POST;
}
```

