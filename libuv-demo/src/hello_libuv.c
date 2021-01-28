#include "stdio.h"
#include "uv.h"


int main() {
  // 声明一个 loop 指针
  uv_loop_t *loop = uv_default_loop();
  printf("hello libuv");
  uv_run(loop, UV_RUN_DEFAULT);
}
