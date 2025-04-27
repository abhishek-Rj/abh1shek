"use client";

import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
	const [dimensions, setDimensions] = useState({ height: 2000, width: 2000 });
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		setDimensions({
			height: window.innerHeight * 2,
			width: window.innerWidth * 2,
		});

		const handleResize = () => {
			setDimensions({
				height: window.innerHeight * 2,
				width: window.innerWidth * 2,
			});
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleTypingComplete = () => {
		setTimeout(() => {
			const cursor = document.querySelector(
				".typed-cursor"
			) as HTMLElement;
			if (cursor) cursor.style.display = "none";

			// Reveal profile content after a small delay
			setTimeout(() => setShowContent(true), 300);
		}, 100);
	};

	return (
		<div className="min-h-screen w-full overflow-hidden rounded-lg relative bg-neutral-900 text-white flex justify-center items-center">
			<div className="text-sm font-jetbrains h-screen w-full -translate-x-12 flex flex-col items-center justify-center z-10 relative">
				<div className="min-w-[800px] px-16 text-left">
					{/* Command Line Effect */}
					<div className="typed-cursor-wrapper whitespace-nowrap mb-6">
						<span className="text-green-500">
							→ [ethereal@abh1shek ~]${" "}
						</span>
						<ReactTyped
							strings={[" fastfetch"]}
							typeSpeed={80}
							backSpeed={100}
							cursorChar="█"
							showCursor={true}
							onComplete={handleTypingComplete}
						/>
					</div>

					{/* Main Content (Hidden Initially, Fades In) */}
					{showContent && (
						<div className="flex flex-row items-center gap-20 p-6 rounded-lg shadow-lg w-fit opacity-0 animate-fadeIn">
							<div className="flex-shrink-0">
								<img
									src="./profile.png"
									width={270}
									height={270}
									alt="Profile"
									className="rounded-lg"
								/>
							</div>

							{/* Information Section */}
							<div className="text-sm translate-x-10">
								<p className="text-green-600 font-bold">
									Hi, I'm Abhishek
								</p>
								<p>-----------------</p>
								<p>Developer (OpenSource, Game, Web)</p>
								<p>Current Project: Rusted Souls (Game)</p>
								<p>Learning: Rust, Kubernetes, Remix</p>
								<p>
									GitHub:{" "}
									<a
										href="https://github.com/kazehaya-ctrl"
										className="text-blue-400 hover:underline"
									>
										github.com/kazehaya-ctrl
									</a>
								</p>
								<p>
									Email:{" "}
									<span className="text-blue-400">
										abhishek@wiranium.com
									</span>
								</p>
								<p>
									Twitter:{" "}
									<a
										href="https://twitter.com/abhishekRj_"
										className="text-blue-400 hover:underline"
									>
										@abhishekRj_
									</a>
								</p>
								<p>CPU: </p>
								<p>GPU: Radeon Graphics</p>
								<p>Motto: "Just Create"</p>
							</div>
						</div>
					)}
				</div>
			</div>

			<style jsx global>{`
				.typed-cursor {
					opacity: 1;
					animation: blink 1s infinite;
				}
				@keyframes blink {
					0%,
					100% {
						opacity: 1;
					}
					50% {
						opacity: 0;
					}
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.5s ease-out forwards;
				}
			`}</style>
		</div>
	);
}
