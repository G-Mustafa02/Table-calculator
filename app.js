var tableNum = document.querySelector("#table")

        
var div = document.querySelector("div")



function printTable() {
    div.innerHTML = " "
    for (var i = 1; i <= 10; i++) {
        console.log(`${tableNum.value} *  ${i} = ${tableNum.value * i} `);
        div.innerHTML += (`${tableNum.value} *  ${i} = ${tableNum.value * i} <br/>`)
    }
}

