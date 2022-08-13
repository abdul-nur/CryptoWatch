const coinsList = document.getElementById('coinsList');
const coinsContainer = document.querySelector('.coin-container');
const searchBar = document.getElementById('searchBar');

const coinModal = document.querySelector('.modal-bg');
const coinModalExit = document.querySelector('.modal-exit');
let allCoins = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredcoins = allCoins.filter((character) => {

        return (
            character.name.toLowerCase().includes(searchString)
        );
    });

    removeAllChildNodes(coinsList);
    
    displaycoins(filteredcoins);
});


const loadcoins = async () => {
    try {
        
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Clitecoin%2Cbitcoin%20cash%2Cstellar%2Cbinance%20coin%2Ceos%2Cmonero%2Caave%2Ctezos%2CXTZ%2Cvechain%2Csynthetix%2Ctron%2Cnem%2Ccosmos%2Cuniswap%2Ccelsius%20network%2Cneo%2Cokb%2Cdai%2Cceth%2Cleo%20token%2Ciota%2Cmaker%2Cdogecoin%2Chuobi%20token%2Cdash%2Ccdai%2Cfilecoin%2Cavalanche%2Ckusama%2Cftx%20token%2Csolana%2Csushi%2Ccompound%2Czilliqa%2Cdecred%2Cwaves&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        allCoins = await res.json();
        
        displaycoins(allCoins);
    } catch (err) {
        console.error(err);
    }
};


let coinName = document.querySelector('.coin-name');
let coinTicker = document.querySelector('.coin-ticker');
let coinPrice = document.querySelector('.coin-price');
let coin24h = document.querySelector('.coin-24h-change');
let coinATH = document.querySelector('.ath');
let coinMarketCap = document.querySelector('.market-cap');
let coinCirculatingSupply = document.querySelector('.circulating-supply');

const displaycoins = (coins) => {

    console.log(coins);
    for(let i = 0; i < coins.length; i++){
        let currentCoinName = coins[i]['name'];
        let currentCoinPrice = coins[i]['current_price'];
        let currentCoin24h = coins[i]['price_change_percentage_24h'];
        let currentCoinTicker = coins[i]['symbol'];
        let currentCoinMarketCap = coins[i]['market_cap'];
        let currentCoinCirculatingSupply = coins[i]['circulating_supply'];
        let currentCoinATH = coins[i]['ath'];

        






        /*Coin Info */
        const newCoin = document.createElement('div');
        
        const newCoinInfo = document.createElement('div');
        newCoinInfo.classList.add('new-coin-info')
        const newCoinImage = document.createElement('img');
        const newCoinTitle = document.createElement('h3');
        const newCoinSave = document.createElement('button');
        const newCoinPriceInfo = document.createElement('div');
        newCoinPriceInfo.classList.add('new-coin-price-info')
        
        const newCoinPrice = document.createElement('h5');
        const newCoin24h = document.createElement('p');
        const newCoinLastUpdated = document.createElement('p');

    
        coinsList.appendChild(newCoin);

        newCoin.appendChild(newCoinInfo);
        newCoinInfo.appendChild(newCoinImage);
        newCoinInfo.appendChild(newCoinTitle);
        newCoinInfo.appendChild(newCoinSave);

        newCoin.appendChild(newCoinPriceInfo)
        newCoinPriceInfo.appendChild(newCoinPrice)

        //newCoinGraphPriceDiv.appendChild(newCoin24h)
        newCoin.classList.add("new-coin")
        newCoin.classList.add("modal-exit")
        newCoin.appendChild(newCoinLastUpdated)
    

        newCoin.style.padding = "10px"
        newCoin.style.background = "#fff";
        newCoinTitle.innerHTML = currentCoinName;
        newCoinImage.src = coins[i]['image']
        newCoinPrice.innerHTML = `$${Math.round(currentCoinPrice * 100) / 100}`;
        newCoinSave.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
        newCoinSave.style.zIndex = '2';
        
        newCoin24h.innerHTML = `${Math.round(currentCoin24h * 100) / 100}%`


        if (coins[i]['price_change_percentage_24h']){
            newCoin24h.style.color = "tomato";
        }else{
            newCoin24h.style.color = "green";

        }


        newCoinLastUpdated.innerHTML = coins[i]['last_updated'].substring(11,19);

        newCoin.addEventListener('click', ()=>{
            console.log(newCoinTitle)
            coinModal.style.display = "block";
            coinName.innerHTML = currentCoinName;
            coinPrice.innerHTML = currentCoinPrice;
            coinATH.innerHTML = currentCoinATH;
            coinMarketCap.innerHTML = currentCoinMarketCap;
            coinCirculatingSupply.innerHTML = currentCoinCirculatingSupply;
            console.log(currentCoinTicker)

            coinModal.style.zIndex = "0";
            coinsContainer.style.zIndex = "-1";
            
           
        })

        coinModalExit.addEventListener('click', ()=>{
            coinModal.style.display = "none";
            coinModal.style.zIndex = "-1";
            coinsContainer.style.zIndex = "0";
        })


        


    }

    
    
    
};

loadcoins();




function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


        /**
         * const labels = [
            '24hr low',
            'Current Price'
          ];
        
          const data = {
            labels: labels,
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [coins[i]['low_24h'], coins[i]['current_price']],
            }]
            
          };
          
        
          const config = {
            type: 'line',
            data: data,
            options: {}
          };

        
        
        
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );*/

