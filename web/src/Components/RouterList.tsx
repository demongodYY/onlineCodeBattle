import { BrowserRouter, Route } from 'react-router-dom';
import * as React from 'react';

import index from '../Pages/index'
import CodeEditor from '../Pages/CodeEditor'

class RouterList extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <>
          <Route exact={true} path="/" component={index} />
          <Route path="/editor" component={CodeEditor} />
        </>
      </BrowserRouter >
    )
  }

}

export default RouterList;