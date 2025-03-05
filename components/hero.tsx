"use client";

import { useState, useEffect, useRef } from "react";
import { FlickeringGrid } from "@/components/ui/flickeringBackground";
import { ReactTyped } from "react-typed";

export default function Hero() {
	const [dimensions, setDimensions] = useState({ height: 2000, width: 2000 });

	useEffect(() => {
		// Small delay to ensure component is fully rendered
		const timer = setTimeout(() => {
			const cursor = document.querySelector(".typed-cursor");
			if (cursor) {
				cursor.classList.add("hidden");
			}
		}, 3000); // Adjust time as needed to hide cursor after typing completes

		return () => clearTimeout(timer);
	}, []);

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

	return (
		<div className="min-h-screen w-full overflow-hidden rounded-lg bg-background relative">
			<FlickeringGrid
				className="fixed inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
				squareSize={4}
				gridGap={6}
				color="#9fff99"
				maxOpacity={0.5}
				flickerChance={0.1}
				height={dimensions.height}
				width={dimensions.width}
			/>
			<div className="text-md font-jetbrains h-screen w-full flex items-center z-10 relative">
				{/* Adjusted alignment */}
				<div className="max-w-lg w-full text-left px-8 ml-10">
					<div className="typed-cursor-wrapper whitespace-nowrap">
						<span className="text-white">abh1shek@abh1shek</span>
						<span className="text-white">:~$</span>
						<span className="ml-2">
							<ReactTyped
								strings={["fastfetch"]}
								typeSpeed={80}
								backSpeed={100}
								cursorChar="█"
								showCursor={true}
							/>
						</span>
					</div>
				</div>
			</div>

			<style jsx global>{`
				.typed-cursor {
					opacity: 1;
					animation: blink 1s infinite;
				}
				.hidden {
					display: none !important;
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
			`}</style>
		</div>
	);
}
