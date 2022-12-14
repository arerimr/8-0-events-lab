// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palCol = document.querySelectorAll('#palette')
//let curr
for (let col of palCol){
  col.addEventListener('click', x => {
    let curr = document.querySelector('#current-color')
    //  color = col.style.background
    // if (color){
    //   curr.style.background = color
    // }
    // curr.style.background = col.style.background
    curr.style.background = x.target.style.background
    // curr.setAttribute('style', 'background-color', color)

  })
}

const cells = document.querySelectorAll('.cell')

for (let cell of cells){
  cell.addEventListener('click', x => {
    let curr = document.querySelector('#current-color')
    x.target.style.background = curr.style.background
  })
}
