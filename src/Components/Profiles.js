import React from "react";
import "./Profiles.scss";
import { profiles } from "./Assets";
import ProfileCard from "./ProfileCard";
import { Row } from 'react-bootstrap'

const Contents = () => {
	return (
		<Row className="Profiles" id="profiles">
			{profiles.map((content) => (
				<ProfileCard
                    headshot={content.photo}
					name={content.name}
                    position={content.position}
                    profession={content.profession}
                    linkedIn={content.linkedIn}
					description={content.description}
                    email={content.email}
					skills={content.skills}
					github={content.github}
					devpost={content.devpost}
				/>
			))}
		</Row>
	);
};

export default Contents;