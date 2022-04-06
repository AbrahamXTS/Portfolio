import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Typing({phrases, classList}) {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: phrases,
			loop: true,
			startDelay: 300,
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 100,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div style={{"display": "inline-block"}}>
			<span ref={el}></span>
		</div>
	);
}
