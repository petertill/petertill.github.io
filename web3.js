const ContractAddress = "0xeaC463632B0545b5A5462C436BF5C212B7bD822E";

async function addToMetamask() {
    const tokenSymbol = 'TCO';
    const tokenDecimals = 18;
    const tokenImage = 'https://petertill.github.io/assets/brand/token.png';

    try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
                address: ContractAddress, // The address that the token is at.
                symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                decimals: tokenDecimals, // The number of decimals in the token
                image: tokenImage, // A string url of the token logo
            },
            },
        });
    } catch (error) {
    console.log(error);
    }
}