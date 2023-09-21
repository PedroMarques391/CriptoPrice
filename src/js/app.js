const coins = document.getElementById('coin');
const btnTheme = document.getElementById('btnTheme');
const html = document.querySelector('html');

async function getAllTicker(coin = 'BTC') {
    try {
    const URL = `https://www.mercadobitcoin.net/api/${coin}/ticker/`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    const itens = document.getElementById('itensLi');

    
    //Função para formatar valores
    function formataValores(valor) {
        if(valor != data.ticker.date) {
            return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(valor)
        } 
    }
    //Função para formatar data
    const dataConsulta = new Date(data.ticker.date * 1000)
    const dataFormatada = dataConsulta.toLocaleString()

    itens.innerHTML = `
    <p class='text-center md:text-2xl md:text-yellow-400 md:font-bold md:dark:text-yellow-600'>Moeda Selecionada: ${coins.value}</p>
          <ul class="text-justify md:text-center md:text-2xl md:mt-8 md:font-serif md:shadow-2xl md:shadow-yellow-400 dark:shadow-black">
                  <li class="p-2 leading-15">Alta: ${formataValores(data.ticker.high)}</li>
                  <li class="p-2 leading-15">Baixa: ${formataValores(data.ticker.low)}</li>
                  <li class="p-2 leading-15">Última: ${formataValores(data.ticker.last)}</li>
                  <li class="p-2 leading-15">Compra: ${formataValores(data.ticker.buy)}</li>
                  <li class="p-2 leading-15">Venda: ${formataValores(data.ticker.sell)}</li>
                  <li class="p-2 leading-15">Abertura: ${formataValores(data.ticker.open)}</li>
                  <li class="p-2 leading-15">Data: ${dataFormatada}</li>
          </ul>
    `} catch(error) {
        const itens = document.getElementById('itensLi');
        itens.innerHTML = `<p class='text-center text-2xl text-red-600 font-bold shadow-2xl shadow-red-600'>Você precisa selecionar a moeda desejada para continuar.</p>`
    }
    
    
}

const btn = document.getElementById('price');

btn.addEventListener('click', () => {
    getAllTicker(coins.value);
})



btnTheme.addEventListener('click', function() {
    html.classList.toggle('dark');
    emoji = btnTheme.innerHTML === '🌚' ? '🌞' : '🌚'
    btnTheme.innerHTML = emoji
});

