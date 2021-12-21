//Admin.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 


import './Components.css';
import { Form, Modal, Container, Button} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContent, selectContent } from '../../state/contentSlice';



const Admin = ({ defaultContent, setShow, show }) => {
 
    const dispatch = useDispatch();
    const content = useSelector(selectContent);
    //const info = useSelector(selectContent);

    const [response, setResponse] = useState({ title: "", author: "" }) //we use this to keep track of the form input , see handleSubmit
    

    //this function takes the form responses and makes them into a key value pair, then puts it into 'response'
    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value
        })
    }

    const handleClose = () => setShow(false);

    //reset site to original content 
    const resetSite = () => {
        handleClose();
        localStorage.setItem("storedContent", JSON.stringify(defaultContent));
        window.location.reload(false);
    }
    const resetMessages = () => {
      
        handleClose();
        localStorage.clear("storedMessages");
        window.location.reload(false);
       
    }

    //send updated library to redux store
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        const updateContentArr = [
            ...content, response];

        if (response.title) {
            dispatch(addContent(updateContentArr));
            setResponse({});
        }
        if (response.author) {
            dispatch(addContent(updateContentArr));
            setResponse({});
        }
    }

//    const handleInput = (e) =>{
//         let { line } = e.target;
//         this.setState({ [line]: value });
//       }
    return (
        <Container>
            <Modal show={show} onHide={handleClose}width="100rem">
                <Modal.Title className="bg-dark text-secondary">Update Content</Modal.Title>

                <Form className="bg-secondary">
          <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="Name:" name="name" onChange={updateField}/>
           <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="password" name="password" onChange={updateField}/>
               
                </Form>
                <Modal.Footer className="bg-dark">  
                <Button size="sm" variant="secondary" onClick={resetMessages}>Clear All Messages</Button>
                 <Button size="sm" variant="secondary" onClick={resetSite}>Reset Site</Button>
               
                 <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )

}

export default Admin; 

