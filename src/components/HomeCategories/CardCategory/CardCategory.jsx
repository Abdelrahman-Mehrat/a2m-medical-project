import { Card } from "react-bootstrap";
import "./CardCategory.css";
export const CardCategory = (props) => {
  return (
    <Card className='home__categoryCard'>
      <Card.Img className='cardImg' variant='top' src={props.img} />
      <Card.Body>
        <Card.Title className='text-center title text-capitalize'>
          {props.name}
        </Card.Title>
        <Card.Text>{props.describe}</Card.Text>
      </Card.Body>
    </Card>
  );
};
