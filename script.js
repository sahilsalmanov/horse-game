let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let start = document.querySelector('.start-btn')
let reset = document.querySelector('.reset-btn')




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
    if(position == 1120 || position == 1116) {
        alert('Birinci at qazandi')
        stop()
    }
    else if(position2 == 1120 || position2 == 1116) {
        alert('Ikinci at qazandi')
        stop()
    }
    else if(position3 == 1120 || position3 == 1116) {
        alert('Ucuncu at qazandi')
        stop()      
    }
}





