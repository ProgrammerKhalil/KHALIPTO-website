// Fetch the current cryptocurrency rates from an API
async function fetchCryptoRates() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();

        // Update the rates on the page
        document.getElementById('btc-rate').textContent = `$${data.bitcoin.usd}`;
        document.getElementById('eth-rate').textContent = `$${data.ethereum.usd}`;
    } catch (error) {
        console.error('Error fetching crypto rates:', error);
    }
}

// Fetch the rates every 10 seconds
setInterval(fetchCryptoRates, 10000);

// Fetch the rates initially when the page loads
fetchCryptoRates();
