import { BrowserRouter, Route } from 'react-router-dom';
import * as React from 'react';

import index from '../Pages/index';
import CodeEditorView from '../Pages/CodeEditorView';
import BattleRoomView from '../Pages/BattleRoomView';

class RouterList extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <>
          <Route exact={true} path="/" component={index} />
          <Route path="/:roomId/battleroom" component={BattleRoomView} />
          <Route path="/editor" component={CodeEditorView} />
        </>
      </BrowserRouter >
    )
  }

}

export default RouterList;