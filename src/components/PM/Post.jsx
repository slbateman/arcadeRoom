//Post.jsx
import { useSelector } from 'react-redux';
import { selectContent } from '../../state/contentSlice';
import { Container, Row, Col} from 'react-bootstrap';
import PrivateMessages from '../PrivateMessages';
import '../Components.css'; 
import AvatarCard from './AvatarCard';

const Post = ({avArray}) => {
  const data = useSelector(selectContent);
  const name = data[0].name; 
  const image = data[0].img; 
   const color =data[0].color; 

   const props = 
     {
       name: name,
      image: image,
      color: color
    }
   
    return (  
      /*style={{ width:"2rem", height: "2rem"  }} */
 <div>  
<br/><br/>  
<Container>
  <Row> <Col></Col> <Col></Col> <Col></Col></Row>
<Row>
  <Col></Col>
 
  <AvatarCard />
 <Col><div style={{paddingLeft: ".5rem",left: "10rem", position: "relative", height: "8.8rem", width: "15rem" , backgroundColor: "white", position: "relative", color: "black", left:"0rem"}}>
  blah blah blah 
   </div>
</Col>  
 <Col></Col> 
 </Row>
 <Row> <Col></Col> <Col></Col> <Col></Col></Row>
 </Container><br/><br/>
  

</div>

    );
}

export default Post;