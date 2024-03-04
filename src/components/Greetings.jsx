const Greetings = ({ lang, children }) => {
	const greetings = {
		en: "Hello ",
		de: "Hallo ",
		fr: "Bonjour ",
	};
	return <div className="component">{greetings[lang] + children}</div>;
};
export default Greetings;
