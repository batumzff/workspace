document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = "https://api.coinranking.com/v2/coins"

    fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const coins = data.data.coins
        const tableBody = document.getElementById("coin-table").getElementsByTagName("tbody")[0]
        coins.forEach(coin=> {
            let row = tableBody.insertRow()
            let imgCell = row.insertCell(0)
            let rankCell = row.insertCell(1)
            let nameCell = row.insertCell(2)
            let priceCell = row.insertCell(3)

            let img = document.createElement("img")
            img.src =coin.iconUrl
            img.style.width ="15px"
            img.style.height="15px"
            img.alt = `${coin.name} icon`

            imgCell.appendChild(img)
            rankCell.innerHTML = coin.rank
            nameCell.innerHTML = coin.name
            priceCell.innerHTML = `$${parseFloat(coin.price).toFixed(2)}`

            

        })
    })
    .catch(error => console.error("Error:",error))
})