import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MyCard = (props) => {
	return (
		<>
			<ListGroup.Item className="ps-3">{props.text}</ListGroup.Item>
		</>
	);
};

export default MyCard;
