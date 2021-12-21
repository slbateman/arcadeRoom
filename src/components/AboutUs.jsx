//AboutUs.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 

import './Components.css'; 
import React from 'react'
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectContent } from '../state/contentSlice';


//mx-auto
function AboutUs() {
  const info = useSelector(selectContent);
  // const mf = info[0].art2 ; 
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
        <div className="about">

    <div className='  gameBox' >     
<img src={info[0].art1} 
className=" arcadeGame" alt="arcade game console" 
onClick={ () =>  handleClick("mf game","text",  info[0].art2)}
/>

<Card className="aCard "
style={{ height: '50rem', width: '20rem' }}
>
    <Card.Img variant="top" className=" mfGame" src={image}/>
    <Card.Body>
        {/* we could add a link that leads to profile based on name */}
      <Card.Title className='bio'>{name}</Card.Title>
      <Card.Text className='bio2' >
     {bio}
      </Card.Text >
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  </div>  

 <div className='threeCards'>

 {info.map((data, i) => {
 return ( 

  <Card 
  className='card'
  key={i}
  onClick={ () =>  handleClick(data.name, data.bio, data.img)}
  >
    <Card.Img variant="top" src={data.img} className='cardImage' />
    <Card.Body>
      <Card.Title><Link to={`/profile/${data.name}`}>{data.name}</Link></Card.Title>
      <Card.Text>
      {data.blurb}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
    );
})}

  
</div>
        </div>
    );
}

export default AboutUs

