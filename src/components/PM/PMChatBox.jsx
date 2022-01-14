

const PMChatBox = () => 
{
return (
<>
<Container className='messageForm'>
            
                
            <header>
                Leave a message: 
            </header>
            <div eventKey="e">
            <Form onSubmit={onSubmit}>
              <Form.Group className ="mb-3" controlId='exampleForm.ControlInput1'>
                  {/* obviously instead of entry names it will be the logged in person and 
                      the person of the pm button that is clicked if it is not the same person maybe
                      it makes no sense to pm yourself 
                  */}
                    <Form.Control name="name" placeholder="name" onChange={updateField}/>   
             </Form.Group>   
              <Form.Group className ="mb-3" controlId='exampleForm.ControlInput2'>
                  <Form.Control as="textarea" name="message" placeholder="message" onChange={updateField}/>
               </Form.Group>
              
                 <Button type="Submit">Submit</Button>
            </Form>
              </div>

<div className="messageBox">
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
</div>            

  </Container>
</>
); 
}


export default PMChatBox; 