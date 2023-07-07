<template>
<div class="code-block">
    <div class="header">
      <div class="language">{{ language }}</div>
      <button class="copy-button" @click="copyCode">Copy</button>
    </div>
    <pre>
      <code :class="`language-${language}`" v-html="formattedCode"></code>
    </pre>
</div>

</template>

<script>
import testServce from "../services/testServce";
import Prism from 'prismjs';


export default {
  name: "Book.vue",
  data(){
    return{
  
    }
  },

  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: 'javascript',
    },
  },

   computed: {
    formattedCode() {
      return this.highlightCode(this.code);
    },
  },

     methods:{
        highlightCode(code) {
      const language = Prism.languages[this.language];
      return Prism.highlight(code, language, this.language);
    },
    
    
    copyCode() {
      const codeElement = this.$el.querySelector('code');
      const clipboard = new Clipboard(codeElement, {
        text: () => this.code,
      });
      clipboard.on('success', () => {
        clipboard.destroy();
        // Perform any additional actions when the code is copied
        console.log('Code copied!');
      });
      clipboard.on('error', () => {
        clipboard.destroy();
        // Handle any error that may occur during copying
        console.error('Failed to copy code!');
      });
      clipboard.onClick({ target: codeElement });
    },
  },
    

  components:{
    testServce
  },
  created(){
   

  }

}
</script>

<style scoped>

/* Add any custom styles for the code block here */
.code-block {
  background-color: #f4f4f4;
  padding: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.language {
  font-weight: bold;
}

.copy-button {
  background-color: #f4f4f4;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.copy-button:hover {
  background-color: #e0e0e0;
}

</style>
