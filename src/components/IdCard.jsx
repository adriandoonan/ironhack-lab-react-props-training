const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
	return (
		<article className="person-profile">
			<img src={picture} alt="person portrait" />
			<ul>
				<li>
					<strong>First name:</strong> <span>{firstName}</span>
				</li>
				<li>
					<strong>Last name:</strong> <span>{lastName}</span>
				</li>
				<li>
					<strong>Gender:</strong> <span>{gender}</span>
				</li>
				<li>
					<strong>Height</strong> <span>{height}</span>
				</li>
				<li>
					<strong>Birth</strong> <span>{birth}</span>
				</li>
			</ul>
		</article>
	);
};
export default IdCard;
