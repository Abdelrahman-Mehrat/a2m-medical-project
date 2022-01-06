import "./CardCategory.css"
import { Card } from "react-bootstrap"
export const CardCategory = (props)=>{
    console.log(props);
    return(
<Card className="home__categoryCard" >
  <Card.Img className="cardImg" variant="top" src={props.img} />
  <Card.Body>
    <Card.Title className="text-center title">{props.name}</Card.Title>
    <Card.Text>
      {props.describe}
    </Card.Text>
  </Card.Body>
</Card>
    )
}
