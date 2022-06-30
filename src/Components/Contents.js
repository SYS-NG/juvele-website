import React from "react";
import "./Contents.scss";
import { contents } from "./Assets";
import ContentCard from "./ContentCard";
import { Row } from 'react-bootstrap'

const Contents = () => {
	return (
		<Row className="Contents" id="contents">
			{contents.map((content) => (
				<ContentCard
					logo={content.image}
					name={content.name}
					description={content.description}
					skills={content.skills}
					github={content.github}
					devpost={content.devpost}
				/>
			))}
		</Row>
	);
};

export default Contents;