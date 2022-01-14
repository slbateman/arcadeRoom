// AvatarCard 
//asdf
import '../Components.css'; 
import { useSelector } from 'react-redux';
import { selectContent } from '../../state/contentSlice';
import { Container, Row, Col} from 'react-bootstrap';
import PrivateMessages from '../PrivateMessages';
import { selectLocalUserInfo } from '../../state/usersSlice';

const AvatarCard = () => 
{
   // const data = useSelector(selectLocalUserInfo());
   // console.log(data)
//   const name = data[0].name; 
//   const image = data[0].img; 
//    const color =data[0].color; 
    return (
    
     {/*   <Container className='posty'
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
        
        </Container>*/}
        
        
        );
}

export default AvatarCard; 