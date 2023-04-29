let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let start = document.querySelector('.start-btn')
let reset = document.querySelector('.reset-btn')
let selectElement = document.getElementById("mySelect");
let deposit = document.querySelector('.deposit')
let depositBtn = document.querySelector('.deposit-btn')
let wallet = document.querySelector('.wallet')




start.addEventListener('click', moving)


let position = 0
let loop = 0
let position2 = 0
let loop2 = 0
let position3 = 0
let loop3 = 0
function moving() {

    const sayilar = [8, 10, 12];
function karistir(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const karisikSayilar = karistir(sayilar);

let number1 = karisikSayilar[0]
let number2 = karisikSayilar[1]
let number3 = karisikSayilar[2]


    if(loop == 0) {
        myInterval = setInterval(() => {
                position += number1
                first.style.left = position + 'px'
                finishLine()
          }, 100);
        
    }
    loop++
    if(loop2 == 0) {
        myInterval2 = setInterval(() => {
            position2 += number2
            second.style.left = position2 + 'px'
            finishLine()
          }, 100);
    }
    loop2++
    if(loop3 == 0) {
        myInterval3 = setInterval(() => {
            position3 += number3
            third.style.left = position3 + 'px'  
            finishLine()
          }, 100);
    }
    loop3++
  }


reset.addEventListener('click', stop)
function stop() {
    loop = 0
    position = 0
    first.style.left = position + 'px'
    clearInterval(myInterval)
    loop2 = 0
    position2 = 0
    second.style.left = position2 + 'px'
    clearInterval(myInterval2)
    loop3 = 0
    position3 = 0
    third.style.left = position3 + 'px'
    clearInterval(myInterval3)
}


function finishLine() {
    const selectedOption = selectElement.value;
    if(position == 1120 || position == 1116) {
        if(selectedOption == 'First horse') {
            alert('Sizin at qalibdi')
           wallet.innerText = Number(wallet.innerText) + Number(deposit.value)
           deposit.value = 0
           depositBtn.style.backgroundColor = 'rgb(209, 82, 82)'
        }
        else {
           alert('Birinci at qazandi')
           wallet.innerText = Number(wallet.innerText) - Number(deposit.value)
           deposit.value = 0
           depositBtn.style.backgroundColor = 'rgb(209, 82, 82)'
        }
        stop()
    }
    else if(position2 == 1120 || position2 == 1116) {
        if(selectedOption == 'Second horse') {
            alert('Sizin at qalibdi')
            wallet.innerText = Number(wallet.innerText) + Number(deposit.value)
            deposit.value = 0
            depositBtn.style.backgroundColor = 'rgb(209, 82, 82)'
        }
        else {
           alert('Ikinci at qazandi')
           wallet.innerText = Number(wallet.innerText) - Number(deposit.value)
           deposit.value = 0
           depositBtn.style.backgroundColor = 'rgb(209, 82, 82)'
        }
        stop()
    }
    else if(position3 == 1120 || position3 == 1116) {
        if(selectedOption == 'Third horse') {
            alert('Sizin at qalibdi')
            wallet.innerText = Number(wallet.innerText) + Number(deposit.value)
            deposit.value = 0
            depositBtn.style.backgroundColor = 'rgb(209, 82, 82)'
        }
        else {
           alert('Ucuncu at qazandi')
           wallet.innerText = Number(wallet.innerText) - Number(deposit.value)
           deposit.value = 0
           depositBtn.style.backgroundColor = 'rgb(209, 82, 82)'
        }
        stop()      
    }
}


depositBtn.addEventListener('click', depoFunc)
function depoFunc() {
    a = Number(deposit.value)
    const selectedOption = selectElement.value;
    depositBtn.style.backgroundColor = 'yellow'
    alert(`${selectedOption} ucun ${a} mebleginde deposit qoydunuz. Start duymesini basin `)
}







