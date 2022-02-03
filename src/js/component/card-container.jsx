import MyCard from "./card.jsx";
import ListGroup from "react-bootstrap/ListGroup";

const CardContainer = () => {
	return (
		<ListGroup>
			<ListGroup.Item className="ps-3">
				<input
					className="border-0 w-100"
					type="text"
					name="todo-title"
					id="todo-inpput"
					placeholder="What needs to be done?"
				/>
			</ListGroup.Item>
			<MyCard text="This is some text within a card body." />
			<MyCard className="card-footer" text="0 item left" />
		</ListGroup>
	);
};

export default CardContainer;
