import { useState } from 'react';
import MyContract from '../../../../build/contracts/ProductRegistry.json';
import moment from 'moment';

const ProductDetails = ({ productData }) => {
	const [productName, setProductName] = useState(productData[0].productName);
	const [manufacturerName, setManufacturerName] = useState(
		productData[0].manufacturerName
	);
	const [manufacturingDate, setManufacturingDate] = useState(
		moment(productData[0].manufacturingDate).format('YYYY-MM-DD')
	);
	const [productId, setProductId] = useState(productData[0].productId);
	console.log(productData[0]);

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

	const handleEditProduct = async () => {
		if (
			productName.length === 0 ||
			productId.length === 0 ||
			manufacturerName.length === 0 ||
			manufacturingDate.length === 0
		) {
			alert("Fields can't be empty");
			return;
		}
		const web3 = new Web3('http://127.0.0.1:8545');
		const contractInstance = new web3.eth.Contract(
			MyContract.abi,
			'0xD41a1AD9eF47f0f438B775177134Da08a5c9680d'
		);
		const accounts = await web3.eth.getAccounts();
		try {
			const res = await contractInstance.methods
				.editProduct(
					productName,
					manufacturerName,
					moment(manufacturingDate).format('DDMMYYYY'),
					productId
				)
				.send({ from: accounts[0] });
			window.open(
				`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productId}`,
				'_blank'
			);
			alert("Don't Forget To Save The QR-Code");
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
		<div>
			<h2 className="text-center text-2xl mb-4">Update Product</h2>
			<form className="space-y-4">
				<div>
					<label htmlFor="productName" className="block mb-1">
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
						className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2"
						onClick={handleEditProduct}
					>
						Update Product
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductDetails;
