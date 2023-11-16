import React, {useState} from 'react';
import { Form, Button } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import "../App.css";

const CommentForm = () => {
    const[name, setName] = useState('');
    const[message, setMessage] = useState('');

    const onSubmit = async () => {
        if (name && message)
        {
            const comment = {
                "name": name,
                "message": message
            };

            await axios.post("http://localhost:8080/comments/createComment", comment);
        }
        setName('');
        setMessage('');
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Input type='text' placeholder='name' required={true} onChange={(e) => setName(e.target.value)} value={name}></Form.Input>
                <Form.TextArea id="comment" placeholder='Please add your comment here' required={true} maxLength='256' onChange={(e) => setMessage(e.target.value)} value={message} />
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    );
}
 
export default CommentForm
;