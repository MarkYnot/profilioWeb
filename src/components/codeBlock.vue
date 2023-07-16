<template>
  <div class="code-container">
    <pre class="code-editor">
      <!-- class="language-javascript" -->
      <div id="codeBlock" :class="[`language-${language}`]" >
        <!-- <div class="code-lines-wrapper"> -->
          <div v-for="(line,index) in codeLines" :key="line" class="code-line">
            <div class="line-no">{{ index + 1 }}</div>
            <span class="functionCode" v-html="highlightSyntax(line)"></span>
          </div>
        <!-- </div> -->
      </div>
    </pre>
    <button @click="copyCode" :disabled="isCopied" class="copy-button">{{ copyButtonText }}</button>
  </div>
</template>


<script>
import 'prismjs';
import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-json';
// import 'prismjs/themes/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';


export default {
  data() {
    return {
    //   code: ` startSearch(){
    //     this.search = !this.search;
    //     if(this.resultReturn){
    //       this.popular = false;
    //     }else this.popular = true;
    //     this.text = false;
    //     this.Ecommerce = false;
    // },

    // //methods
    // searching(event){
    //     this.zeroResult = false;
      
        
    //     if(!event.target.value){
    //       this.popular = true;
    //       this.spinner = false;  
    //       this.resultReturn = false;
    //       return
    //     }
    //     this.resultReturn = false;
    //     this.spinner = true;
    //     this.popular = false;

    //     let reg = new RegExp(event.target.value)
    //     let resultSet = []
        
    //     this.projectList.forEach(item=>{
    //         if(reg.test(item.name)){
    //           resultSet.push(item)
    //         }
    //     })`,
      codeLines: [],
      isCopied: false,
      copyButtonText: 'Copy',
    };
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

  mounted() {
    // Prism.highlightAll();
    this.codeLines = this.code.split('\n');
    console.log(this.codeLines)
      
  },

 computed: {
    highlightedCode() {
      // Use Prism.highlight with the line-numbers plugin to generate the code with line numbers
      return Prism.highlight(this.code, Prism.languages[this.language], this.language) + '\n';
    },
  },
  
  
  methods: {
    copyCode() {
        const codeBlock = document.getElementById('codeBlock');
        // const codeLines = Array.from(codeBlock.querySelectorAll('.code-line'));
        const tempCodeBlock = codeBlock.cloneNode(true);

        // Remove line numbers from the cloned code block
        const lineNumbers = Array.from(tempCodeBlock.getElementsByClassName('line-no'));
        lineNumbers.forEach(lineNumber => lineNumber.remove('line-no'));
      const codeWithoutLineNumbers = tempCodeBlock.innerText;
      const normalizedCode = codeWithoutLineNumbers.replace(/^\s+/gm, '');


          console.log(normalizedCode)

  
        navigator.clipboard.writeText(normalizedCode)
            .then(() => {
              this.isCopied = true;
              this.copyButtonText = 'Copied';

              setTimeout(() => {
                this.isCopied = false;
                this.copyButtonText = 'Copy';
              }, 2000);
            })
            .catch(error => {
              console.error('Failed to copy the code:', error);
            });
    },


     highlightSyntax(line) {
       const language = Prism.languages[this.language]
       return Prism.highlight(line, language, this.language);
    },
  },
};
</script>

<style lang="less" scoped>
.code-container {
  position: relative;
}

.code-editor {
  position: relative;
  background-color: rgb(30, 29, 29);
  /* color: red; */
  padding: 20px;
  border-radius: 5px;
  /* text-shadow: none !important; */
  // font-family: 'Courier New', Courier, monospace;
  font-size: 13px;
  overflow: scroll;
  line-height: 1.4;
}

.code-lines-wrapper {
  position: relative;
}

.code-line {
  display: grid;
  grid-template-columns: 10px 300px;
  position: relative;
  height: 15px;
  width: 100%;
  margin-top:2px;
}

.code-line span {
  text-shadow: none !important;
}

/deep/ .token.operator{
  background: transparent !important;
   color: rgba(224, 224, 158, 0.658);
}

.functionCode{
  grid-column: 2;
  color: rgb(224, 224, 158);
  text-align: left;
}

.line-no {
  grid-column: 1;
  width: 2.5em;
  text-align: left;
  color: #757575;
  font-size: 13px;
  top: 0px;
  user-select: none !important;
  -moz-user-select:none;  
  -webkit-user-select:none; 
  -ms-user-select:none; 
  -khtml-user-select:none; 
  -o-user-select:none; 
}

.copy-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #6272a4;
  color: #f8f8f2;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 14px;
}
</style>