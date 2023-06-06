import web3 from './web3';
import ProductRegistry from './ProductRegistry.json';

const instance = new web3.eth.Contract(
	ProductRegistry.abi,
	'0xD41a1AD9eF47f0f438B775177134Da08a5c9680d'
);

export default instance;
