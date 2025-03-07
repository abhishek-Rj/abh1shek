import { useState, useEffect } from "react";

export default function BlinkingBlock() {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setVisible((prev) => !prev);
		}, 500);
		return () => clearInterval(interval);
	}, []);

	return <span className="text-sm inline-block">{visible ? "█" : " "}</span>;
}
