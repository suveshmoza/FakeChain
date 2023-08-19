import Image from 'next/image';

import addProductImg from '../../assets/addProduct.png';
import editProductImg from '../../assets/editProduct.png';
import deleteProductImg from '../../assets/deleteProduct.png';
import Button from '@/components/Button';

export default function Home() {
	return (
		<main className="container mt-10">
			<div className="flex justify-center item-center gap-3">
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4">
					<Image
						alt="add product"
						height="200"
						width="200"
						src={addProductImg}
					/>
					<Button link={'/dashboard/add'} color={'blue'} text={'Add Product'} />
				</div>
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4">
					<Image
						alt="edit product"
						height="200"
						width="200"
						src={editProductImg}
					/>
					<Button
						link={'/dashboard/edit'}
						color={'red'}
						text={'Edit Product'}
					/>
				</div>
				<div className="p-4 border-2 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4">
					<Image
						alt="delete product"
						height="200"
						width="200"
						src={deleteProductImg}
					/>

					<Button
						link={'/dashboard/delete'}
						color={'red'}
						text={'Delete Product'}
					/>
				</div>
			</div>
		</main>
	);
}
