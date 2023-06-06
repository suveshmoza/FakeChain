var Storage = artifacts.require('./ProductRegistry.sol');

module.exports = function (deployer) {
	deployer.deploy(Storage);
};
