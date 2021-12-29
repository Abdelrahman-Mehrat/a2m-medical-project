import { Card } from "react-bootstrap"
export const CardCategory = (props)=>{
    console.log(props);
    return(
<Card >
  <Card.Img variant="top" src={`https://via.placeholder.com/150`} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.describe}
    </Card.Text>
  </Card.Body>
</Card>
    )
}
