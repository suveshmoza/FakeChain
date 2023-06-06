import { useState } from 'react';
import { QrScanner } from '@yudiel/react-qr-scanner';
// import web3 from '@/ethereum/web3';
import ProductRegistry from '@/ethereum/productRegistry';
import Loader from './component/Loader';
import ProductInfo from './component/ProductInfo';
import FakeProduct from './component/FakeProduct';

const Verify = () => {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(false);
	const [scannedData, setScannedData] = useState(false);
	const [fakeProduct, setFakeProduct] = useState(false);
	const [productID, setProductID] = useState('');

	const updateProduct = (data) => {
		setProduct(data);
	};

	const updateLoading = (value) => {
		setLoading(value);
	};

	const handleScan = async (data) => {
		console.log(data);
		setProductID(data);
		setScannedData(true);
		if (data) {
			try {
				updateLoading(true);
				const res = await ProductRegistry.methods.verifyProduct(data).call();
				console.log(res);
				setTimeout(() => {
					updateProduct(res);
					updateLoading(false);
				}, 2000);
			} catch (err) {
				if (err.message.includes("Product With Given ID Doesn't Exist")) {
					setFakeProduct(true);
				}
				if (err) {
					setFakeProduct(true);
				}
				updateLoading(false); // Ensure loading state is updated in case of an error
			}
		}
	};

	const handleError = (error) => {
		console.error(error);
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="flex justify-center mt-12">
			{!scannedData && (
				<div className="pb-2 w-[25rem] border shadow-xl rounded-xl z-10 text-center">
					<QrScanner
						constraints={{
							facingMode: 'environment',
							width: {
								min: 640,
								ideal: 720,
								max: 1920,
							},
							height: {
								min: 640,
								ideal: 720,
								max: 1080,
							},
						}}
						onError={handleError}
						onDecode={handleScan}
					/>
					<p className="font-bold text-red-600 m-1 p-2">
						*Ensure the QR code is clearly visible.
					</p>
				</div>
			)}
			{scannedData && (
				<div className="border-2 w-1/2 rounded-xl shadow-xl p-4">
					{fakeProduct && !product && <FakeProduct />}
					{product && <ProductInfo data={product} id={productID} />}
					<div className="flex justify-center items-center">
						<button
							onClick={(e) => {
								setProduct(null);
								setScannedData(null);
							}}
							className="border px-3 py-2 rounded-lg bg-red-600 text-white"
						>
							Scan Again
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Verify;
