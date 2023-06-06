import { useState } from 'react';
import web3 from '@/ethereum/web3';
import ProductRegistry from '@/ethereum/productRegistry';
import { toast } from 'react-toastify';

const MyForm = () => {
	const [productId, setProductId] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleInputChange = (e) => {
		setProductId(e.target.value);
		setIsValid(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (productId.trim() === '') {
			setIsValid(false);
			return;
		}

		const accounts = await web3.eth.getAccounts();
		try {
			await ProductRegistry.methods
				.deleteProduct(productId)
				.send({ from: accounts[0] });
			setProductId('');
			toast.success('Product Deleted Successfully');
		} catch (err) {
			alert("Error Occurred! Product with entered product id doesn't exist");
			setProductId('');
		}
		console.log('Product ID:', productId);
	};

	return (
		<div className="flex items-center justify-center mt-20">
			<form className="w-64">
				<div className="mb-4">
					<label
						htmlFor="product-id"
						className="block mb-2 text-sm font-medium text-gray-700"
					>
						Product ID
					</label>
					<input
						type="text"
						id="product-id"
						className={`w-full p-2 border ${
							isValid ? 'border-gray-300' : 'border-red-500'
						}`}
						value={productId}
						onChange={handleInputChange}
					/>
					{!isValid && (
						<p className="text-red-500 text-sm mt-1">
							Please enter a valid product ID.
						</p>
					)}
				</div>
				<button
					type="submit"
					className="bg-red-600 text-white px-4 py-2 rounded-full w-full"
					onClick={handleSubmit}
				>
					Delete
				</button>
			</form>
		</div>
	);
};

export default MyForm;
