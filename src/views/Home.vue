<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
   <CodeBlock code="function hello() {
  console.log('Hello, world!');
}" language="javascript" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CodeBlock from './Book.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CodeBlock
  }
}
</script>
