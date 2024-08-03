// let $tecla1 = document.querySelector('#teclas > [data-number="1"]')
// let $tecla2 = document.querySelector('#teclas > [data-number="2"]')
// let $tecla3 = document.querySelector('#teclas > [data-number="3"]')
// let $tecla4 = document.querySelector('#teclas > [data-number="4"]')
// let $tecla5 = document.querySelector('#teclas > [data-number="5"]')
// let $tecla6 = document.querySelector('#teclas > [data-number="6"]')
// let $tecla7 = document.querySelector('#teclas > [data-number="7"]')
// let $tecla8 = document.querySelector('#teclas > [data-number="8"]')
// let $tecla9 = document.querySelector('#teclas > [data-number="9"]')
// let $tecla0 = document.querySelector('#teclas > [data-number="0"]')
// let $teclace = document.querySelector('#teclas > [data-number="CE"]')

// $tecla1.addEventListener('click',handleKeyPress)
// $tecla2.addEventListener('click',handleKeyPress)
// $tecla3.addEventListener('click',handleKeyPress)
// $tecla4.addEventListener('click',handleKeyPress)
// $tecla5.addEventListener('click',handleKeyPress)
// $tecla6.addEventListener('click',handleKeyPress)
// $tecla7.addEventListener('click',handleKeyPress)
// $tecla8.addEventListener('click',handleKeyPress)
// $tecla9.addEventListener('click',handleKeyPress)
// $tecla0.addEventListener('click',handleKeyPress)
// $teclace.addEventListener('click',zerarDisplay)

let teclas = document.querySelectorAll("#teclas > [data-number]")

for(let i=0; i<teclas.length; i++){
  teclas[i].addEventListener('click', handleKeyPress)
}

$teclaCe = document.getElementById("ce-key")
$teclaCe.addEventListener("click",zerarDisplay)

function zerarDisplay(){
  let $display = document.getElementById("display")
  $display.innerText="0"
}

function handleKeyPress(event){
  let $elemento = event.target
  let number = $elemento.getAttribute("data-number")
  
  let $display = document.getElementById("display")

  if($display.innerText=="0"){
    $display.innerText=number
  }else{
    $display.innerText+=number
  }

  
  console.log(number)
}
