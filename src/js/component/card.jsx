import ListGroup from "react-bootstrap/ListGroup";

const MyCard = (props) => {
	return (
		<>
			<ListGroup.Item className={props.className + " ps-3"}>
				{props.text}
			</ListGroup.Item>
		</>
	);
};

export default MyCard;
