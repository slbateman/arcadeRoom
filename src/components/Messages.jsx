//Messages.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 
import React, {useState} from 'react';
import './Components.css';
import { Container, Button, Form, Accordion, Card } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessages, selectMessages } from '../state/messageSlice';

const Messages = () => {
    //grab index from the url of the parent component don't need to pass it as it is already here
    const {index} = useParams();

    const dispatch = useDispatch(); 
    const messageList = useSelector(selectMessages); // get list of messages from redux
    const storeMessageList = () => dispatch(addMessages([...messageList, message]));
  // local state (component and children)
  const [message, setMessage] = useState({}); 

   const onSubmit = (e) => {
       e.preventDefault(); 

       //prevent empty Messages 
       if (message.name && message.message) {
           //or duplicate message
           if (message !== messageList[messageList.length -1]) {
               storeMessageList();
           }
       }
       //reset the form and component state 
       setMessage({});
       e.target.reset(); 
   }

   const updateField = (e) => {
     setMessage({
        ...message,
        index: index,
        [e.target.name]: e.target.value
     })
   }

    return (
        <div>
        <Container className='messageForm'>
            <Accordion>
                
              <Accordion.Header>
                  Leave a message: 
              </Accordion.Header>
              <Accordion.Item eventKey="e">
              <Form onSubmit={onSubmit}>
                <Form.Group className ="mb-3" controlId='exampleForm.ControlInput1'>
                      <Form.Control name="name" placeholder="name" onChange={updateField}/>   
               </Form.Group>   
                <Form.Group className ="mb-3" controlId='exampleForm.ControlInput2'>
                    <Form.Control as="textarea" name="message" placeholder="message" onChange={updateField}/>
                 </Form.Group>
                
                   <Button type="Submit">Submit</Button>
              </Form>
                </Accordion.Item>

 <Accordion.Item className="messageBox">
        {messageList.map((entry,i) => {
            if (entry.index === index){// this is to make sure the messages only land on the correct blog
            // 
            return (
           
               
            <Card key={i} className="mt-2 message">
                <Card.Header className="text-light bg-secondary d-flex"> {entry.name} says: </Card.Header>
                <Card.Text className="p-3 d-flex">{entry.message}</Card.Text>
            </Card>
         
    
        )  }}
        )}
 </Accordion.Item>            
 </Accordion>
    </Container>
        </div>
    )
}
export default Messages; 