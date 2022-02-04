import ListGroup from "react-bootstrap/ListGroup";

const MyFooter = (props) => {
	return (
		<>
			<ListGroup.Item className="card-footer ps-2 fw-light">
				{props.itemsLeft} item left
			</ListGroup.Item>
		</>
	);
};

export default MyFooter;
