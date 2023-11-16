import React, {Component} from 'react';
import axios from 'axios';
import Comment from './comment';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8080/ws';


class comments extends Component {

    constructor() {
        super();
        this.state = {
            commentsArray: []
        }
    }

    componentDidMount() {
        let currentComponenet = this;
        
        const fetchData = async () => {
            try {
            const { data: commentsArray } = await axios("http://localhost:8080/comments/getComments");
            currentComponenet.setState({commentsArray});
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } 
        if (currentComponenet.state.commentsArray.length === 0)
        {
            fetchData();
        }
    };

    render()
    {
        let onConnected = () => {
            console.log("Connected!!")
        };
    
        let onMessageReceived = (msg) => {
            this.setState({commentsArray : [msg, ...this.state.commentsArray]})
            this.componentDidMount();
        };

        return (
            <div>
                <SockJsClient
                    url={SOCKET_URL}
                    topics={['/topic/comment']}
                    onMessage={msg => onMessageReceived(msg)}
                    debug={false}
                />
                {
                    this.state.commentsArray?.map(element => (<Comment key={element.id} value={element}/>))
                }
            </div>
        );
    }
}
 
export default comments;