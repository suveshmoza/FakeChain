import { useState } from 'react';
import web3 from '@/ethereum/web3';
import ProductRegistry from '@/ethereum/productRegistry';
import ProductDetails from './component/ProductDetails';
import Loader from './component/Loader';
import { toast } from 'react-toastify';

const EditProduct = () => {
	const [productId, setProductId] = useState('');
	const [productData, setProductData] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleProductIdChange = (e) => {
		setProductId(e.target.value);
	};

	const retrieveData = async () => {
		setLoading(true);
		const accounts = await web3.eth.getAccounts();
		try {
			const res = await ProductRegistry.methods
				.productData(productId)
				.call({ from: accounts[0] });
			setTimeout(() => {
				setLoading(false);
				if (res.productName.length >= 1) {
					toast.success('Product Info Retrieved!');
					setProductData(res);
				}
			}, 2000);
			if (res.productName.length === 0) {
				throw Error('Product ID in invalid');
			}
			console.log(productData);
		} catch (err) {
			toast.error(err.message);
		}
	};

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="p-4">
			<div className="flex items-start justify-center gap-4">
				<div className="max-w-md w-full bg-white p-6 border rounded-xl shadow-xl">
					{!productData && (
						<div>
							<div>
								<label htmlFor="productName" className="block mb-1">
									Enter product id to retrieve data
								</label>
								<input
									type="text"
									id="productName"
									className="w-full border border-gray-300 rounded-md px-4 py-2"
									value={productId}
									onChange={handleProductIdChange}
								/>
							</div>
							<div className="text-center  my-2">
								<button
									onClick={retrieveData}
									className="px-4 py-2 bg-blue-500 rounded-lg text-white"
								>
									Retrieve Data
								</button>
							</div>
						</div>
					)}
					{productData && <ProductDetails productData={[productData]} />}
				</div>
			</div>
		</div>
	);
};

export default EditProduct;
