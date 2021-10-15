!<template>
  <div>
    <input type="button" class="buttoncss" @click="this.add"/><br/>


    {{this.name}} <input type="text" class="" placeholder="">
  </div>
</template>

<script>
export default {

  data(){
    return{
      name: "ligege"

    }
  },

  methods:{

    add(){
      alert('你好')


    }


  },

  mounted(){

    // alert('hahaha')
  }

}
</script>

<style scoped>

.buttoncss{
  width: 30%;

}

</style>
