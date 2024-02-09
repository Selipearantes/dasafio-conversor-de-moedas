
const convertButton = document.querySelector(".button-converter")                 // selecionando botao
const selectMoney = document.querySelector(".select-currency")

function convertValues() {
    const selectdolar = document.querySelector(".select-dolar")
    const inputCurrencyValue = document.querySelector(".input-value").value    // valor pego do input
    const moneyToConverted = document.querySelector(".cashvalue1")            // valor em real a ser convertido
    const moneyConverted = document.querySelector(".cashvalue2")             // valor dolar convertido
    console.log(selectMoney.value)


    const dolarDay = 4.98
    const euroDay = 5.37  
    const btcDay = 233099.44
    const libraDay = 6.28                                                 // valor dolar do dia (valor do dia do projeto)
    const convertedValue = inputCurrencyValue / dolarDay    // --- FORMAR 1 FAZER ja dando o calculo na const e dando valor converteValue no .format do dolar


    if (selectMoney.value == "dolar") {
        moneyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)

    }

    if (selectMoney.value == "euro") {
        moneyConverted.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroDay) // --- FORMA 2 DE FAZER pegando o valor do input e ja divindo pelo valor da const do euro la de cima

    }


    if (selectMoney.value == "libra") {
        moneyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraDay) 

    }

    if (selectMoney.value == "bitcoin") {
        moneyConverted.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / btcDay)      

    }

    moneyToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".imgMoneyConverted")

    if (selectMoney.value == "dolar") {               // --- SI O SELECT FOR ESCOLHIDO DOLAR ELE MOSTRARA escrita DOLAR e a img do estados unidos
        currencyName.innerHTML = 'Dolar Americano'
        currencyImg.src ="./assets/estados-unidos (1) 1.png"
    }


    if (selectMoney.value == "euro") {              
        currencyName.innerHTML = 'Euro'
        currencyImg.src ="./assets/euro.png"
    }


    if (selectMoney.value == "libra") {              
        currencyName.innerHTML = 'libra'
        currencyImg.src ="./assets/libra.png"
    }

    if (selectMoney.value == "bitcoin") {               
        currencyName.innerHTML = 'bitcoin'
        currencyImg.src ="./assets/libra.png"
    }

}

selectMoney.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)



