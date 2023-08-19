import Image from 'next/image';

import Button from '../components/Button';

import verifyImg from '../assets/verify.png';
import adminImg from '../assets/admin.png';

const Home = () => {
	return (
		<main className="mt-10">
			<div className="flex justify-center item-center gap-8">
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4">
					<Image alt="verify logo" src={verifyImg} height="200" width="200" />
					<Button link={'/verify'} color={'blue'} text={'Verify Product'} />
				</div>
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 ">
					<Image alt="admin logo" src={adminImg} height="200" width="200" />
					<Button link={'/dashboard'} color={'red'} text={'Dashboard'} />
				</div>
			</div>
		</main>
	);
};

export default Home;
