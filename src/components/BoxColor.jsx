const BoxColor = ({ r, g, b }) => {
	return (
		<div
			className="component text-center"
			style={{ padding: "2rem", backgroundColor: `rgb(${r},${g},${b})` }}
		>
			rgb({r},{g},{b}) <br />#{r.toString(16).padStart(2, "0")}
			{g.toString(16).padStart(2, "0")}
			{b.toString(16).padStart(2, "0")}
		</div>
	);
};
export default BoxColor;
