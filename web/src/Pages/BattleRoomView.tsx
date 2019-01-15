import * as React from 'react';
import { Redirect } from 'react-router'

class BattleRoomView extends React.Component<any, any> {
    state:any = {
        editorRedirect: false
    }

    linkToEditor() {
        this.setState({
            editorRedirect: true
        })
    }

    render() {
        const {editorRedirect} = this.state;
        if (editorRedirect) {
            return  <Redirect to='/editor'/>;
        }
        return (
            <div>
                <h3>房间{this.props.match.params.roomId}</h3>
                <button onClick={this.linkToEditor.bind(this)}>开始挑战</button>
            </div>
            
        );
    }
}

export default BattleRoomView