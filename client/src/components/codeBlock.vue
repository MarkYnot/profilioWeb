<template>
  <div class="code-container">
    <pre class="code-editor">
      <!-- :class="`language-${language}`"  -->
      <code id="codeBlock" class="language-javascript">
        <div v-for="(line, index) in codeLines" :key="index" class="code-line">
          <span class="line-number">{{ index + 1 }}</span>
          <span v-html="highlightSyntax(line)" class="functionCode"></span>
        </div>
      </code>
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

export default {
  data() {
    return {
      code: ` startSearch(){
        this.search = !this.search;
        if(this.resultReturn){
          this.popular = false;
        }else this.popular = true;
        this.text = false;
        this.Ecommerce = false;
    },

    //methods
    searching(event){
        this.zeroResult = false;
      
        
        if(!event.target.value){
          this.popular = true;
          this.spinner = false;  
          this.resultReturn = false;
          return
        }
        this.resultReturn = false;
        this.spinner = true;
        this.popular = false;

        let reg = new RegExp(event.target.value)
        let resultSet = []
        
        this.projectList.forEach(item=>{
            if(reg.test(item.name)){
              resultSet.push(item)
            }
        })`,
      codeLines: [],
      isCopied: false,
      copyButtonText: 'Copy',
    };
  },

    props: {
    // code: {
    //   type: String,
    //   required: true,
    // },
    language: {
      type: String,
      default: 'javascript',
    },
  },

  created() {
    this.codeLines = this.code.split('\n');
    Prism.highlightAll();
  },
  
  
  methods: {
    copyCode() {
        const codeBlock = document.getElementById('codeBlock');
        // const codeLines = Array.from(codeBlock.querySelectorAll('.code-line'));
        const tempCodeBlock = codeBlock.cloneNode(true);

        // Remove line numbers from the cloned code block
        const lineNumbers = Array.from(tempCodeBlock.getElementsByClassName('line-number'));
        lineNumbers.forEach(lineNumber => lineNumber.remove());
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
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  overflow-x: scroll;
  line-height: 1.4;
}

.code-line {
  display: grid;
  grid-template-columns: 100px 1fr;
  position: relative;
  height: 15px;
  width: 1400px;
  margin-top: 8px;
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
}

.line-number {
  position: absolute;
  grid-column: 2;
  left: -6.5em;
  width: 2.5em;
  text-align: left;
  color: #757575;
  user-select: none;
  font-size: 14px;
  top: 0px;
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