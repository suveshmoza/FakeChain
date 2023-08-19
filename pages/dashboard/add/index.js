import { useState } from 'react';
import web3 from '@/ethereum/web3';
import ProductRegistry from '@/ethereum/productRegistry';
import moment from 'moment';
import { toast } from 'react-toastify';

const AddProduct = () => {
	const [productName, setProductName] = useState('');
	const [manufacturerName, setManufacturerName] = useState('');
	const [manufacturingDate, setManufacturingDate] = useState('');
	const [productId, setProductId] = useState('');

	const handleProductNameChange = (e) => {
		setProductName(e.target.value);
	};

	const handleManufacturerNameChange = (e) => {
		setManufacturerName(e.target.value);
	};

	const handleManufacturingDateChange = (e) => {
		setManufacturingDate(e.target.value);
	};

	const handleProductIdChange = (e) => {
		setProductId(e.target.value);
	};

	const handleAddProduct = async () => {
		if (
			productName.length === 0 ||
			productId.length === 0 ||
			manufacturerName.length === 0 ||
			manufacturingDate.length === 0
		) {
			toast.error("Fields can't be empty");
			return;
		}
		try {
			const accounts = await web3.eth.getAccounts();
			await ProductRegistry.methods
				.addProduct(
					productName,
					manufacturerName,
					moment(manufacturingDate).format('DDMMYYYY'),
					productId
				)
				.send({ from: accounts[0], gas: '1000000' });
			toast.success('Product Added Successfully! ');
			window.open(
				`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productId}`,
				'_blank'
			);
		} catch (err) {
			console.log(err);
		}

		// Reset form
		setProductName('');
		setManufacturerName('');
		setManufacturingDate('');
		setProductId('');
	};

	return (
		<div className="p-4">
			<div className="flex items-center justify-center gap-4">
				<div className="max-w-md w-full bg-white p-6 border rounded-xl shadow-2xl ">
					<h2 className="text-2xl mb-4 text-center font-semibold">
						Add Product
					</h2>
					<form className="space-y-4">
						<div>
							<label htmlFor="productName" className="block mb-1 ">
								Product Name:
							</label>
							<input
								type="text"
								id="productName"
								className="w-full border border-gray-300 rounded-md px-4 py-2"
								value={productName}
								onChange={handleProductNameChange}
							/>
						</div>
						<div>
							<label htmlFor="manufacturerName" className="block mb-1">
								Manufacturer Name:
							</label>
							<input
								type="text"
								id="manufacturerName"
								className="w-full border border-gray-300 rounded-md px-4 py-2"
								value={manufacturerName}
								onChange={handleManufacturerNameChange}
							/>
						</div>
						<div>
							<label htmlFor="manufacturingDate" className="block mb-1">
								Manufacturing Date:
							</label>
							<input
								type="date"
								id="manufacturingDate"
								className="w-full border border-gray-300 rounded-md px-4 py-2"
								value={manufacturingDate}
								onChange={handleManufacturingDateChange}
							/>
						</div>
						<div>
							<label htmlFor="productId" className="block mb-1">
								Product ID:
							</label>
							<input
								type="text"
								id="productId"
								className="w-full border border-gray-300 rounded-md px-4 py-2"
								value={productId}
								onChange={handleProductIdChange}
							/>
						</div>
						<div className="text-center">
							<button
								type="button"
								className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-6 py-2"
								onClick={handleAddProduct}
							>
								Add Product
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
