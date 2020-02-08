<template>
  <div>
    <van-button type="primary" @click="getData">获取数据</van-button>
    <van-button type="danger">删除数据</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    ajax() {
      let url = '/api/users'
      let xmlhttp
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
      }
      xmlhttp.open('get', url, true)
      xmlhttp.send()
      // 服务器端响应
      xmlhttp.addEventListener('readystatechange', () => {
        if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
          let obj = JSON.parse(xmlhttp.responseText)
          console.log(obj)
        }
      })
    },
    getData() {
      this.ajax()
    }
  }
}
</script>
<style lang="scss" scoped></style>
