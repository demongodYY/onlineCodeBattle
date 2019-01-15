import * as React from 'react'
import * as Chai from 'chai'

import MonacoEditor from 'react-monaco-editor';
import testData from '../util/test-data.json'; // test

class CodeEditor extends React.Component {

  state: any = {
    code: "",
    hint: "",
    testItems: []
  }

  componentDidMount() {
    this.fetchDojoData();
  }

  fetchDojoData() {
    const dojoData = testData;
    const { initCode, testItems, hint } = dojoData;
    this.setState({
      code: initCode,
      hint,
      testItems
    })
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
    const { code, testItems } = this.state
    const assert = Chai.assert;
    if (assert) {
      const newTestItems = testItems.map(testItem => {
        try {
          eval(
            `${code}
            ${testItem.code}`
          )
          testItem.isPassed = true;
        } catch (error) {
          testItem.isPassed = false;
          console.error(error);
        }
        return testItem;
      });
      this.setState({
        testItems: newTestItems
      })
    }
  }

  render() {
    const { code, testItems, hint } = this.state;
    const isAllPass = testItems.every(testItem => testItem.isPassed);
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
        <div>{hint}</div>
        <div>
          {
            testItems.map((testItem, index) => {
              return (
                <p key={index}>
                  {testItem.desc}
                  <span>{testItem.isPassed ? "通过" : "未通过"}</span>
                </p>
              )
            })
          }
        </div>
        <div>{isAllPass ? '通过挑战！' : '未通过挑战'}</div>
      </>
    )
  }
}

export default CodeEditor