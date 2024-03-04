import fullStar from "../assets/images/star-full-icon.png";
import emptyStar from "../assets/images/star-empty-icon.png";

const Rating = ({ children, white }) => {
	const starRating = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];
	const rating = Math.round(Number(children));
	//console.log("rating", rating);

	// const rated = starRating.splice(0, rating, fullStar);
	for (let i = 0; i < rating; i++) {
		starRating.splice(i, 1, fullStar);
	}

	return (
		<article className="star-rating">
			{starRating.map((star, index) => (
				<img key={index + 1} src={star} alt="a star" />
			))}
		</article>
	);
};
export default Rating;
