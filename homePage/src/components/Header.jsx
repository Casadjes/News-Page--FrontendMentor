import logo from "../assets/logo.svg";
import { Navbar } from "./Navbar";

export const Header = () => {
	return (
		<header className='flex place-content-between items-center mb-8'>
			<img src={logo} alt='logo' />
			<Navbar />
		</header>
	);
};
