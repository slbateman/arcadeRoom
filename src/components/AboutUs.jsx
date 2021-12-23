//AboutUs.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import './Components.css'; 
import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectContent } from '../state/contentSlice';


//mx-auto
function AboutUs() {
  const info = useSelector(selectContent);
   const mfImg = info[0].art2 ; 
   const mf = info[0].mf; 
   const mfg = info[0].mfg; 

    const [name, setName] = useState();
    const [bio, setBio] = useState();
    const [image, setImage] = useState();
     //setImage(mf);

    const handleClick = (name, bio, img) => {
        setName(name);
        setBio(bio);
        setImage(img); 
      }

    return (
        <div className="mx-auto about">

<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>





    <div className=' mx-auto gameBox' >     
<img src={info[0].art1} 
className="mx-auto arcadeGame" alt="arcade game console" 
onClick={ () =>  handleClick(mf, mfg, mfImg)}
/>

<Card className="mx-auto aCard "
style={{ height: '50rem', width: '20rem' }}
>
    <Card.Img variant="top" className=" mfGame" src={image}/>
    <Card.Body>
        {/* we could add a link that leads to profile based on name */}
      <Card.Title ></Card.Title>
      <Card.Text  >
     
      </Card.Text >
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
 <div className='mx-auto bio'>{name}</div>
 <div className='mx-auto bio2'>{bio}</div>

  </div>  

 <div className='mx-auto threeCards'>

 {info.map((data, i) => {
 return ( 

<div
  className='card'
  key={i}
  onClick={ () =>  handleClick(data.name, data.bio, data.img)}>
  <Card>
    <Card.Img variant="top" src={data.img} className='mx-auto cardImage' />
    <Card.Body className='cardBody'>
      <Card.Title ></Card.Title>
      <Card.Text >
    
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <div className='mx-auto cardTitle' ><Link to={`/profile/${data.name}`}>{data.name}</Link></div>
  <div className='cardText'>  {data.blurb}</div>

  </div>
    );
})}

  
</div>
        </div>
    );
}

export default AboutUs

