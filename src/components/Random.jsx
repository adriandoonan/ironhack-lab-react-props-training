const Random = ({ min, max }) => {
	return (
		<div className="component">
			Random value between {min} and {max} =&gt;{" "}
			{Math.floor(Math.random() * max + min)}
		</div>
	);
};
export default Random;
