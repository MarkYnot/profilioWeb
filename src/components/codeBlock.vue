<template>
  <div class="code-container">
    <pre class="code-editor">
      <!-- class="language-javascript" -->
      <div id="codeBlock" :class="[`language-${language}`]" >
        <!-- <div class="code-lines-wrapper"> -->
          <div v-for="(line,index) in codeLines" :key="index" class="code-line">
            <div class="line-no">{{ index + 1 }}</div>
            <span class="functionCode" v-html="highlightSyntax(line)"></span>
          </div>
        <!-- </div> -->
      </div>
    </pre>
    <button @click="copyCode" :disabled="isCopied" class="copy-button">{{ copyButtonText }}</button>
    <button class="language-button" disabled>{{ this.language=='markup'? 'html':this.language }}</button>
  </div>
</template>


<script>
import 'prismjs';
import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-java';
import 'prismjs/plugins/line-numbers/prism-line-numbers';


export default {
  data() {
    return {
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
    const lineNo = document.getElementsByClassName('line-no');
    lineNo.forEach(item => item.addEventListener('copy', this.handleCopy))
  
  },


  beforeDestroy(){
    const lineNo = document.getElementsByClassName('line-no');
    lineNo.forEach(item => item.removeEventListener('copy', this.handleCopy))
  },

  methods: {
    copyCode() {
        const codeContent = this.codeLines.join('\n');
          console.log(codeContent)

  
        navigator.clipboard.writeText(codeContent)
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

    handleCopy(event){
        event.preventDefault();
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
  overflow-x: scroll;
  line-height: 1.4;
}

#codeBlock {
  display:grid;
  align-items: start;
  vertical-align: top !important;
}

.code-lines-wrapper {
  position: relative;
}

.code-line {
  display: grid;
  grid-template-columns: 18px 300px;
  position: relative;
  height: 15px;
  width: 100%;
  margin-top:2px;
}

.code-line span {
  text-shadow: none !important;
  font-size: 10px;
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
  font-size: 10px;
  top: 0px;
  user-select: none !important;
  -moz-user-select:none;  
  -webkit-user-select:none; 
  -ms-user-select:none; 
  -khtml-user-select:none; 
  -o-user-select:none; 
  pointer-events: none;
}

.line-no::selection {
  background-color: transparent;
}


.copy-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 10px;
}

.language-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 10px;
  text-transform: uppercase
}
</style>