// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ProductRegistry {
    struct Product {
        string productName;
        string manufacturerName;
        uint256 manufacturerDate;
        uint256 productId;
    }
    mapping(uint256 => Product) public productData;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorised Access");
        _;
    }

    function doesExist(uint256 productId) public view returns (bool) {
        return bytes(productData[productId].productName).length != 0;
    }

    // add products
    function addProduct(
        string memory name,
        string memory manufacturerName,
        uint256 manufacturerDate,
        uint256 productId
    ) public onlyOwner {
        require(!doesExist(productId), "Product Already Exists With This ID");
        productData[productId] = Product(
            name,
            manufacturerName,
            manufacturerDate,
            productId
        );
    }

    // update products
    function editProduct(
        string memory name,
        string memory manufacturerName,
        uint256 manufacturerDate,
        uint256 productId
    ) public onlyOwner {
        require(doesExist(productId), "Product With Given ID Doesn't Exist");
        Product storage updatedProduct = productData[productId];
        updatedProduct.productName = name;
        updatedProduct.manufacturerName = manufacturerName;
        updatedProduct.manufacturerDate = manufacturerDate;
        updatedProduct.productId = productId;
    }

    // delete products
    function deleteProduct(uint256 productId) public onlyOwner {
        require(doesExist(productId), "Product With Given ID Doesn't Exist");
        delete productData[productId];
    }

    // verify product
    function verifyProduct(
        uint256 productId
    ) public view returns (string memory, string memory, uint) {
        require(doesExist(productId), "Product With Given ID Doesn't Exist");
        Product memory currProduct = productData[productId];
        return (
            currProduct.productName,
            currProduct.manufacturerName,
            currProduct.manufacturerDate
        );
    }
}
