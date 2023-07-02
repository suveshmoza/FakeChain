## Fake Product Identification using Blockchain and QR-Code

This repository contains a project that aims to provide a solution for identifying fake products using blockchain technology and QR codes. The system leverages the immutability and transparency of blockchain to ensure the authenticity of products and the QR code scanning mechanism for easy verification.

### Features
- **Product Registration:** Register a product in the system by generating a unique QR code for each item and storing its details on the blockchain.
- **Verification:** Use the QR code scanner to verify the authenticity of a product by scanning its QR code. The system will retrieve the stored information from the blockchain and confirm its authenticity.
- **Blockchain Immutability:** The system utilizes blockchain technology to ensure that the product information cannot be tampered with or modified.
- **Decentralization:** The blockchain network is distributed among multiple nodes, ensuring no central authority controls the verification process.
- **Transparency:** All product information and verification records are transparently stored on the blockchain, enabling anyone to verify the authenticity of a product.

### Installation
To install and run this project locally, follow these steps:

1. Clone the repository:
```
git clone git@github.com:suveshmoza/Fake-Product-Identification.git
```
2. Navigate to the project directory:
```
cd repository
```
3. Install the dependencies:
```
npm install
```
4. Set up ganache-cli 
Setting up ganache-cli to run a local blockchain network. If you haven't installed it yet, you can install it globally using the following command:
```
npm install -g ganache-cli
```
5. Start ganache-cli to run the local blockchain network:
```
ganache-cli
```
**Make note of the provided RPC server URL and port number as you will need it.**
6. Start the application:
```
npm run dev
```
The application should now be running locally, connected to the ganache-cli blockchain network.

Note: If you prefer using Ganache GUI instead of the CLI version, you can download and install it from the Ganache website.

### Technologies Used
The following technologies were used in the development of this project:
- **Frontend:** Next.js, TailwindCSS
- **Blockchain**: Solidity
- **QR-Code**: react-qr-code, @yudiel/react-qr-scanner

### Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: ` git checkout -b my-feature`.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository: `git push origin my-feature`.
5. Submit a pull request detailing the changes you made.
