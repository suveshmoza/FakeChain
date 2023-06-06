import Link from 'next/link';

const Home = () => {
	return (
		<main className="mt-10">
			<div className="flex justify-center item-center gap-8">
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-1 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
					<img
						height="200"
						width="200"
						src="https://cdn-icons-png.flaticon.com/512/3207/3207660.png"
					/>
					<Link
						href="/verify"
						className="border rounded-lg bg-blue-600 text-white px-3 py-2 m-2"
					>
						Verify Product
					</Link>
				</div>
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-1 transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110">
					<img
						height="200"
						width="200"
						src="https://thumbs.dreamstime.com/b/three-persons-admin-icon-outline-three-persons-admin-vector-icon-color-flat-isolated-three-persons-admin-icon-color-outline-vector-233074232.jpg"
					/>
					<Link
						href="/dashboard"
						className="border rounded-lg bg-red-600 text-white px-3 py-2 m-2"
					>
						Dashboard
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Home;
