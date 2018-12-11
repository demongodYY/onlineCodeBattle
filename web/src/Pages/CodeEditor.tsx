import * as React from 'react'
import * as Chai from 'chai'

import MonacoEditor from 'react-monaco-editor';

const assert = Chai.assert;

class CodeEditor extends React.Component {

  state: any = {
    code: `function dojo (...input) {
      var result;
      //Write code here
      return result;
    }`,
    isPass: false,
    testCode: `assert.equal(dojo(), 2, '2 equeal 2');`
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  onChange(newValue, e) {
    this.setState({
      code: newValue
    })
  }

  handleRunClick() {
    const { code, testCode } = this.state
    console.log(assert);
    try {
      eval(
        `${code}
        ${testCode}`
      )
      this.setState({
        isPass: true
      })
    } catch (error) {
      this.setState({
        isPass: false
      })
      console.log(error);
    }
  }

  render() {
    const { code, isPass } = this.state;
    const options = {
      language: 'javascript',
      minimap: { enabled: true },
      selectOnLineNumbers: true
    };
    return (
      <>
        <MonacoEditor
          width="800"
          height="600"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange.bind(this)}
          editorDidMount={this.editorDidMount.bind(this)}
        />
        <button onClick={this.handleRunClick.bind(this)}>run</button>
        <div>编写函数dojo ,使其返回值为2</div>
        <div>{isPass ? '通过挑战！' : '未通过挑战'}</div>
      </>
    )
  }
}

export default CodeEditor