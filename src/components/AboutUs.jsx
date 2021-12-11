
//AboutUs.jsx
//Chatroom Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald, Steve Bateman, Bowen Condelario 
import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import info from './DataFile';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectContent } from '../../state/contentSlice';

function AboutUs() {

    return (
        <div className="about">
 <CardGroup>

 {info.map((data, i) => {
 return ( 

  <Card key={i}>
    <Card.Img variant="top" src={data.img} />
    <Card.Body>
      <Card.Title><Link to={`/profile/${data.name}`}>{data.name}</Link></Card.Title>
      <Card.Text>
      {data.bio}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
    );
})}

  
</CardGroup>
        </div>
    );
}

export default AboutUs

