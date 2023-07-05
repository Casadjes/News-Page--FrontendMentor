import burgerIcon from "../assets/icon-menu.svg";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const Navbar = () => {
	const [isOpen, setisOpen] = useState(false);
	return (
		<>
			<ul className='hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-base sm:items-center'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>Popular</a>
				</li>
				<li>
					<a href='#'>Trending</a>
				</li>
				<li>
					<a href='#'>Categories</a>
				</li>
			</ul>
			<img
				src={burgerIcon}
				alt='Menu Icon'
				className='w-10 h-4 cursor-pointer sm:hidden'
				onClick={() => setisOpen(!isOpen)}
			/>
			<Sidebar isOpen={isOpen} setIsOpen={setisOpen} />
		</>
	);
};
