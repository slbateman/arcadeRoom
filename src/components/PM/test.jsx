//import {useState} from 'react'; 
//import Admin from '../Admin'; 
//import {Button} from 'react-bootstrap'; 
import { useSelector } from 'react-redux';
import { selectContent } from '../../state/contentSlice';
import { Container, Row, Col} from 'react-bootstrap';
import PrivateMessages from '../PrivateMessages';
import '../Components.css'; 
import AvatarCard from './AvatarCard';
import Post from './Post'; 

const Test = () => {

  return (  
 <div>
  <Post/>

</div>

    );
}

export default Test;