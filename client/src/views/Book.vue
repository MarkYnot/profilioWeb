<template>
  <table>
    <a id="555">xxxxx</a>
    <tr>
      <td>id</td>
      <td>书名</td>
      <td>作者</td>
    </tr>
    <tr :key="book.id" v-for="book in books">
      <td>{{book.id}}</td>
      <td>{{book.name}}</td>
      <td>{{book.author}}</td>
    </tr>
  </table>

</template>

<script>
import testServce from "../services/testServce";
export default {
  name: "Book.vue",
  data(){
    return{
      datas:[
        {
          id:1,
          name:'书1212',
          author:'作者1'
        },
        {
          id:2,
          name:'书2332',
          author:'作者2'
        },
        {
          id:3,
          name:'书2442',
          author:'作者3'
        }

      ],
      books:[]

    }
  },

  components:{
    testServce
  },
  created(){
    // testServce.getAllBookData()
    axios.get(`http://localhost:3001/book/findAll`).then(result=>{

      console.log(result.data)
      this.books = result.data
    })

  },

  methods:{
    test(){
         const codeBlock = document.getElementById('codeBlock');
        const codeLines = Array.from(codeBlock.querySelectorAll('.code-line'));
        const codeWithoutLineNumbers = codeLines.map(line => line.innerText.replace(/^\d+\s/, '')).join('\n');

        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = codeWithoutLineNumbers;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);

        this.isCopied = true;
        this.copyButtonText = 'Copied';

        setTimeout(() => {
          this.isCopied = false;
          this.copyButtonText = 'Copy';
        }, 2000);
    }

  }



}
</script>

<style scoped>

</style>
