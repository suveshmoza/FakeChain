import Link from 'next/link';
import Button from './Button';

const Nav = () => {
	return (
		<nav className="flex justify-between items-center py-5 ">
			<Link href="/" className="p-2">
				<button className="text-2xl font-bold">FakeChain</button>
			</Link>
			<ul className="flex items-center gap">
				<Button link={'/verify'} color={'blue'} text={'Verify'} />
				<Button link={'/dashboard'} color={'red'} text={'Dashboard'} />
			</ul>
		</nav>
	);
};

export default Nav;
