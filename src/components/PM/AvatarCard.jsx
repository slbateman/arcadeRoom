// AvatarCard 
//asdf
import '../Components.css'; 
import { useSelector } from 'react-redux';
import { selectContent } from '../../state/contentSlice';
import { Container, Row, Col} from 'react-bootstrap';
import PrivateMessages from '../PrivateMessages';
import { selectLocalUserInfo, selectUsers } from '../../state/usersSlice';

const AvatarCard = () => 
{
    const users = useSelector(selectUsers)
    const localUserInfo = useSelector(selectLocalUserInfo);
    const user = users.find((e) => e._id === localUserInfo.user_id)
    const name = !user ? '' : user.username;
    const image = !user ? '' : user.avatar; 
    const color = !user ? '' : user.color; 
    return (
    
        <Container className='posty'
        style = {{  height: "8.8rem", width: '10rem', color: `${color}` }}
        >
         
         <div className=''>lv #</div>
          
            <div className=' propic'><img className = "profilePic anImage" src={image}
            style={{ height: '4rem', width: '4rem', border: `3px solid ${color}` }}
            />
            </div>
       

           <div>{name}
           <br/>
           <Row>
               <Col><PrivateMessages/></Col>
               <Col><div>[b]</div> </Col>
               <Col></Col>
           </Row>
           
           </div> 
        
        </Container>
     
        
        
        );
}

export default AvatarCard; 