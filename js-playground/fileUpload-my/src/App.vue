<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
const SIZE = 5 * 1024 * 1024; // 切片大小 10M

export default {
  data: () => ({
    container: {
      file: null
    },
    data: []
  }),
  computed: {
    uploadPercentage() {
      if (!this.container.file || !this.data.length) return 0;
      const loaded = this.data
        .map(item => item.size * item.percentage)
        .reduce((acc, cur) => acc + cur);
      return parseInt((loaded / this.container.file.size).toFixed(2));
    }
  },

  methods: {
    // 生成文件切片
    createFileChunk(file, size = SIZE) {
      const chunks = [];
      let current = 0;
      while (current < file.size) {
        chunks.push({ file: file.slice(current, current + size) });
        current += size;
      }
      console.log(chunks);
      return chunks;
    },

    async handleUpload() {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + "-" + index // 文件名 + 数组下标
      }));
      await this.uploadChunks();
    },

    // 上传切片
    async uploadChunks() {
      const requestList = this.data
        .map(({ chunk, hash, index }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          return { formData, index };
        })
        .map(async ({ formData, index }) =>
          this.request({
            url: "http://localhost:3000",
            data: formData,
            onProgress: this.createProgressHandler(this.data[index])
          })
        );
      await Promise.all(requestList); // 并发切片
      // 合并切片
      await this.mergeRequest();
    },

    createProgressHandler(item) {
      return e => {
        item.percentage = parseInt(String((e.loaded / e.total) * 100));
      };
    },

    async mergeRequest() {
      await this.request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          size: SIZE,
          fileHash: this.container.hash,
          filename: this.container.file.name
        })
      });
      this.$message.success("上传成功");
      this.status = Status.wait;
    },

    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      console.log(this.$data);
      console.log(this.$options.data());

      Object.assign(this.$data, this.$options.data());
      this.container.file = file;
    },

    request({
      url,
      method = "post",
      data,
      headers = {},
      onProgress = e => e,
      requestList
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.upload.onprogress = onProgress;
        xhr.open(method, url);
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
          resolve({
            data: e.target.response
          });
        };
      });
    }
  }
};
</script>
