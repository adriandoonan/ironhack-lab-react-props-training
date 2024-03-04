{
	/* <CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/> */
}

import masterCardLogo from "../assets/images/master-card.svg";
import visaLogo from "../assets/images/visa.png";

const CreditCard = ({
	type,
	number,
	expirationMonth,
	expirationYear,
	bank,
	owner,
	bgColor,
	color,
}) => {
	const logos = {
		Visa: visaLogo,
		"Master Card": masterCardLogo,
	};

	const finalDigits = number.slice(-4);
	return (
		<article
			className="credit-card"
			style={{ backgroundColor: bgColor, color: color }}
		>
			<img src={logos[type]} alt="company logo" className="credit-card-logo" />
			<span>
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				{"   "}
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				{"   "}
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				<span className="dot" style={{ backgroundColor: color }} />
				{"   "}
				<span className="credit-card-final-digits">{finalDigits}</span>
			</span>
			<article className="credit-card-details">
				<span>
					Expires {expirationMonth}/{expirationYear}
				</span>
				{"     "}
				<span style={{ marginLeft: "20px" }}>{bank}</span>
				<p>{owner}</p>
			</article>
		</article>
	);
};
export default CreditCard;
