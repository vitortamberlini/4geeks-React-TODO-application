import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardContainer from "./card-container.jsx";
import "../../styles/index.css";

const Home = () => {
	return (
		<>
			<Container className="d-flex flex-column align-items-center justify-content-center">
				<Row className="w-50 text-center">
					<Col>
						<h1 className="fs-1">todos</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						<CardContainer />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Home;
