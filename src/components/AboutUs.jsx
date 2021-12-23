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

          

<Container className="gameBox">
  <Row>
    <Col></Col>
    <Col><img alt ="" className=" mfGame" src={image}/>
    <img alt = "arcade console" className="mx-auto arcade" src={info[0].art1} 
    onClick={ () =>  handleClick(mf, mfg, mfImg)}/>
      
      <div className="info">
    <div className='mx-auto bio cardTitle '>{name}</div>
 <div className='mx-auto bio2 cardText'>{bio}</div>
</div>
    </Col>
	<Col className='righty'></Col>
  </Row>
  <Row className = "threes">
  {info.map((data, i) => {
 return ( 

    <Col  key={i}
    onClick={ () =>  handleClick(data.name, data.bio, data.img)}
    >
      <img alt="" src={data.img} className='mx-auto profilePic' 
      style={{ height: '18rem', width: '20rem', border: `3px solid ${data.color}` }}
      />
 
 
  <div className='mx-auto cardTitle' ><Link to={`/profile/${data.name}`}>{data.name}</Link></div>
  <div className='cardText'>  {data.blurb}</div>

    </Col>

    );
})}
  </Row>
</Container>





    
        </div>
    );
}

export default AboutUs

