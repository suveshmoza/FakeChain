import Image from 'next/image';
import moment from 'moment';

const ProductInfo = ({ data, id }) => {
	console.log(id);
	const temp = new Array(data);
	return (
		<>
			<div className="flex flex-col items-center text-center">
				<Image
					alt="original product"
					width="250px"
					height="250px"
					src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png"
				/>
				<bold className="text-green-500">Product Verified Successfully</bold>
			</div>
			<div className="mt-2">
				{temp.map((t) => (
					<div key={t[0]}>
						<h1>
							Product Name: <strong>{t[0]}</strong>
						</h1>
						<h1>
							Manufacturer Name: <strong>{t[1]}</strong>
						</h1>
						<h1>
							Manufacturing Date:{' '}
							<strong>{moment(t[2], 'DDMMYYYY').format('DD/MM/YYYY')}</strong>
						</h1>
						<h1>
							Product ID: <strong>{id}</strong>
						</h1>
					</div>
				))}
			</div>
		</>
	);
};

export default ProductInfo;
