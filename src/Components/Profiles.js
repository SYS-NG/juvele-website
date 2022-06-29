import React from "react";
import "./Profiles.scss";
import { profiles } from "./Assets";
import ProfileCard from "./ProfileCard";
import { Row } from 'react-bootstrap'

const Contents = () => {
	return (
		<Row classname="Profiles" id="profiles">
			{profiles.map((content) => (
				<ProfileCard
                    headshot={content.photo}
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