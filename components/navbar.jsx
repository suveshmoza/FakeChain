import Link from 'next/link';

const Nav = () => {
	return (
		<nav className="flex justify-between items-center py-5 ">
			<Link href="/" className="p-2">
				<button className="text-2xl font-bold">FakeChain</button>
			</Link>
			<ul className="flex items-center gap">
				<Link href="/verify">
					<p className="py-2 px-4 text-sm bg-blue-500 text-white font-medium rounded-xl ml-4">
						Verify
					</p>
				</Link>
				<Link href="/dashboard">
					<p className="py-2 px-4 text-sm bg-red-500 text-white font-medium rounded-xl ml-4">
						Dashboard
					</p>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
