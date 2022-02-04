import MyCard from "./my-card.jsx";
import ListGroup from "react-bootstrap/ListGroup";
import MyFooter from "./my-footer.jsx";
import { useState } from "react";

const CardContainer = () => {
	const [items, setItems] = useState(["aaaaaaa"]);
	const [todo, setTodo] = useState("");

	function handleInput(event) {
		setTodo(event.target.value);
	}

	function handleEnter(event) {
		if (event.key === "Enter") {
			if (todo !== "") {
				setItems(items.concat(todo));
				setTodo("");
			}
		}
	}

	function handleRemove(event, index) {
		setItems(items.splice(index, 1));
	}

	return (
		<ListGroup>
			<ListGroup.Item className="ps-3">
				<input
					className="border-0 w-100 "
					type="text"
					name="todo-title"
					id="todo-input"
					value={todo}
					onChange={(e) => handleInput(e)}
					onKeyDown={(e) => handleEnter(e)}
					placeholder="What needs to be done?"
				/>
			</ListGroup.Item>
			{items.map((item, id) => (
				<MyCard
					key={id}
					index={id}
					text={item}
					handleRemove={handleRemove}
				/>
			))}

			<MyFooter itemsLeft={items.length} />
		</ListGroup>
	);
};

export default CardContainer;
