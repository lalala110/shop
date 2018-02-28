<template>
    <div>
        <h1> {{val}}</h1>
       
        <!-- ???? -->
       
        <router-view></router-view>
        
        <el-switch
            v-model="nian"
            active-text="年龄"
            inactive-text="年龄">
        </el-switch>
        <el-button type="info" disabled>信息按钮</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      val: "年龄",
      nian:"lalala"
    };
  },
  //生命周期的函数
  created(){
 
    this.$axios.get(this.$api.logout).then(()=>{
       console.log(123)
    })
  }
};
</script>

<style scoped>

</style>