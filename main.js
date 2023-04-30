const root = document.querySelector(':root');


one.onchange = changeColorOne
two.onchange = changeColorTwo
three.onchange = changeColorThree
four.onchange = changeColorFour

blurCheck.onclick = toggleBlur



function changeColorOne() {
  root.style.setProperty('--color-one', `${one.value}`)
}

function changeColorTwo() {
  root.style.setProperty('--color-two', `${two.value}`)
}

function changeColorThree() {
  root.style.setProperty('--color-three', `${three.value}`)
}

function changeColorFour() {
  root.style.setProperty('--color-four', `${four.value}`)
}



function toggleBlur() {

  if(blurCheck.checked){
    root.style.setProperty('--blur', '10vmin')
    console.log('checked')
  } else {
    root.style.setProperty('--blur', '0vmin')
    console.log('unchecked')
  }

}