import MyCard from "./card.jsx";
import ListGroup from "react-bootstrap/ListGroup";
import MyFooter from "./my-card.jsx";
import { useState } from "react";

const CardContainer = () => {
	const [items, setItems] = useState(["da o cu", "sair cagando"]);
	const [todo, setTodo] = useState("");

	function handleInput(event) {
		console.log(event);
		setTodo(event.target.value);
	}

	function handleEnter(event) {
		console.log("dsiduhsduis");
		if (event.key === "Enter") {
			setItems(items.concat(todo));
			setTodo("");
		}
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
				<MyCard key={id} text={item} />
			))}

			<MyFooter itemsLeft={items.length} />
		</ListGroup>
	);
};

export default CardContainer;
