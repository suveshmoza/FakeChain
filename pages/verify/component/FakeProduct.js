import Image from 'next/image';
const ProductInfo = ({ data }) => {
	const temp = new Array(data);
	return (
		<>
			<div className="flex flex-col items-center text-center">
				<Image
					alt="fake product"
					width="250px"
					height="250px"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZa_k4r9PvPk81DsbDkI3Fmp6oqUfx4ft3aFdiu6Lfg&usqp=CAU&ec=48665699"
				/>
				<p className="text-xl text-red-600 font-bold p-1">Fake Product!</p>
				<p className="text-sm mb-2">
					*Either the product is fake or the QR scanned is not generated from
					us.
				</p>
			</div>
		</>
	);
};

export default ProductInfo;
