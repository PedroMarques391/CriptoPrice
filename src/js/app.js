const coins = document.getElementById('coin');
async function getAllTicker(coin = 'BTC') {
    const URL = `https://www.mercadobitcoin.net/api/${coin}/ticker/`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)

    const itens = document.getElementById('itensLi');

    itens.innerHTML = `
    <p class='text-center'>Moeda Selecionada: ${coins.value}</p>
    <ul class="text-justify">
            <li class="p-2">Alta: R$${parseFloat(data.ticker.high)}</li>
            <li class="p-2">Baixa: R$${parseFloat(data.ticker.low)}</li>
            <li class="p-2">Volume: R$${parseFloat(data.ticker.vol)}</li>
            <li class="p-2">Última: R$${parseFloat(data.ticker.last)}</li>
            <li class="p-2">Compra: R$${data.ticker.buy}</li>
            <li class="p-2">Venda: R$${parseFloat(data.ticker.sell)}</li>
            <li class="p-2">Abertura: R$${parseFloat(data.ticker.open)}</li>
            <li class="p-2">Data: ${data.ticker.date}</li>
    </ul>
    `
}


const btn = document.getElementById('price');

btn.addEventListener('click', () => {
    getAllTicker(coins.value);
})

