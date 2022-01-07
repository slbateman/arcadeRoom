import {useState} from 'react'; 
import Admin from '../Admin'; 
import {Button} from 'react-bootstrap'; 
import { useSelector } from 'react-redux';
import { selectContent } from '../../state/contentSlice';
import { Container, Row, Col} from 'react-bootstrap';
import Messages from '../Messages';

const Test = () => {
    const data = useSelector(selectContent);
    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow(true); 
    }
    const name = data[0].name; 
   const image = data[0].img; 
    const color =data[0].color; 
    return (  
<div  >
   
<div className="card mb-3" style={{width: '500px'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="150px"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Image
            </text>
          </svg>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Card Text
            </p>
            <p className="card-text">
              <small className="text-muted">Card Text 2</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <br/>

<Container className='aPost'
style = {{ color: `${color}` }}
>
    <Row>
<Col className=' '>0</Col>
<Col>
1
</Col>
<Col>
2
</Col>
    </Row>
  
    <Row>
    <Col className=' propic'><img className = "profilePic anImage" src={image}
    style={{ height: '8rem', width: '10rem', border: `3px solid ${color}` }}
    /></Col>
    <Col className='aMessage'>3 </Col>
    <Col>4</Col>
   </Row>
   <Row>
       <Col className='aLeft'>{name}5</Col>
       <Col >  6</Col>
       <Col>7</Col>
   </Row>
   <Row>
       <Col className='aLeft'>8</Col>
       <Col>9</Col>
       <Col>10</Col>
   </Row>
</Container>
 

<br/><br/>
<div className= "AdminButton">
<Button onClick = {handleShow} className="">Admin</Button> 
 <Admin defaultContent={data} setShow={setShow} show={show} />
 </div>
 <br/>
 <Messages/>
</div>

    );
}

export default Test;