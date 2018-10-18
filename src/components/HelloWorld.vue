<template>
  <div class="hello">
    <input type="button" value="按钮" @click="btn">
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'HelloWorld',
  methods:{
  btn () {
    Toast({
  message: '提示',
  position: 'bottom',
  duration: 5000
});
}

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
