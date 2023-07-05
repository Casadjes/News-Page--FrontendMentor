import { RiCloseFill } from "react-icons/ri";
import PropTypes from "prop-types";

export const Sidebar = ({ isOpen, setIsOpen }) => {
	return (
		<section
			className={`bg-black/50 z-50 w-full flex flex-col items-end sm:hidden h-screen space-y-10 fixed right-0 top-0  transition-all duration-500 ${
				!isOpen ? "translate-x-full" : "-translate-x-0"
			} `}>
			<div className='bg-OffWhite w-[70%] h-full'>
				<div className='h-24 flex  items-center justify-end p-4 '>
					<button type='button' onClick={() => setIsOpen(!isOpen)}>
						<RiCloseFill className='text-5xl text-VeryDarkBlue ' />
					</button>
				</div>
				<div className='px-8 space-y-7'>
					<ul className='flex flex-col gap-8 text-[18px] font-semibold pt-4'>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='#'>New</a>
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
				</div>
			</div>
		</section>
	);
};

Sidebar.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired
};
