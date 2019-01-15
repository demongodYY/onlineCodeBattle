import * as React from 'react';
import { Redirect } from 'react-router'


class Index extends React.Component {

    state:any = {
        editorRedirect: false,
        stRoomId: '0000'
    }

    createRoom() {
        const roomId = Math.floor(Math.random() * 1000000);
        const strRoomId = `000000${roomId}`.substr(-6);
        this.setState({
            editorRedirect: true,
            strRoomId
        })
    }

    render() {
        const {editorRedirect, strRoomId} = this.state;
        if (editorRedirect) {
            return  <Redirect to={`/${strRoomId}/battleroom`}/>;
        }
        return (
            <button onClick={this.createRoom.bind(this)}>创建房间</button>
        );
    }
}

export default Index