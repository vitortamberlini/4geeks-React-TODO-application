import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

const MyCard = (props) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<ListGroup.Item
				className={
					props.className + " d-flex justify-content-between ps-3"
				}
				onMouseLeave={() => setIsHovered(false)}
				onMouseEnter={() => setIsHovered(true)}>
				<span>{props.text}</span>
				<span
					className={(isHovered ? "hovered" : "") + " close-button"}
					onClick={(e) => props.handleRemove(e, props.index)}>
					x
				</span>
			</ListGroup.Item>
		</>
	);
};

export default MyCard;
