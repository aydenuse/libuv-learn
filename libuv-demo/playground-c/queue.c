#include "stdio.h"
#include "uv.h"
#include "queue.h"
int main()
{
    int n[10]; /* n 是一个包含 10 个整数的数组 */
    int i, j;
    i = &n;

    /* 输出数组中每个元素的值 */
    for (j = 0; j < 10; j++)
    {
        printf("Element[%d] = %d, %d\n", j, i, *(n + j));
    }

    return 0;
}
