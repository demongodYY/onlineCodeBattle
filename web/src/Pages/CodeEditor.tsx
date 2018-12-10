import * as React from 'react'

import MonacoEditor from 'react-monaco-editor';


class CodeEditor extends React.Component {

  state: any = {
    code: '// type your code...',
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  render() {
    const { code } = this.state;
    const options = {
      language: 'javascript',
      minimap: { enabled: true },
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange.bind(this)}
        editorDidMount={this.editorDidMount.bind(this)}
      />
    )
  }
}

export default CodeEditor