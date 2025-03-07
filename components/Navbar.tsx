"use client";

import Link from "next/link";
import BlinkingBlock from "./ui/blink";

export const Navbar = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-16 text-white font-jetbrains px-4 z-20 backdrop-blur-lg shadow-lg flex items-center justify-center">
			<div className="flex items-center justify-between w-full max-w-3xl">
				<div className="text-green-500 font-bold text-sm">
					<div className="flex flex-row">
						<span>[ethereal@</span>
						<span className="hover:bg-green-700 hover:text-white">
							abh1shek
						</span>
						<span>&nbsp;~]$&nbsp;</span>
						<BlinkingBlock />
					</div>
				</div>

				<div className="flex gap-8">
					{["projects", "about", "achievements", "resume"].map(
						(item) => (
							<div key={item} className="relative cursor-pointer">
								<Link href={`/${item}`}>
									<span className="text-gray-300 hover:text-white transition-colors text-sm flex">
										<div>./</div>
										<div className="hover:bg-green-700">
											{item}
										</div>
									</span>
								</Link>
								<div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-green-400 transition-transform scale-x-0 hover:scale-x-100 duration-200" />
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};
