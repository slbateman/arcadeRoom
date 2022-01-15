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
import SendMessageForm from '../Chat/SendMessageForm'; 
import UserMessageList from '../User/UserMessageList'; 
const Test = () => {

  return (  
 <div>
   <br/> <br/>
   <PrivateMessages/>
  {/* <UserMessageList/><SendMessageForm/>  */}

</div>

    );
}

export default Test;