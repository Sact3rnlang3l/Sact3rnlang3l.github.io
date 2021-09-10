
let pic= document.getElementsByClassName('t1','t2','t3','t4','t5','t6','t7','t8','t9')
function load(){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_keys.NASA_api_key}`)
    .then((res)=>{
       for( i = 0; i<pic.length;i++){
       pic.styleSheet.setProperty.background(url(res.data.hdurl))
        setElement(pic)}
    })
}
// 
function swap_tiles(cell1, cell2) {
  var temp = document.getElementById(cell1).className
  document.getElementById(cell1).className =
    document.getElementById(cell2).className
  document.getElementById(cell2).className = temp
}

function shuffle() {
  for (let row = 1; row <= 3; row++) {
    for (let column = 1; column <= 3; column++) {
      let r2 = Math.floor(Math.random() * 3 + 1)
      let c2 = Math.floor(Math.random() * 3 + 1)

      swap_tiles("cell" + row + column, "cell" + r2 + c2)
    }
  }
}
function click_tile(row, column) {
  let cell = document.getElementById("cell" + row + column)
  let tile = cell.className
  if (tile != "t9") {
    if (column < 3) {
      if (
        document.getElementById("cell" + row + (column + 1)).className == "t9"
      ) {
        swap_tiles("cell" + row + column, "cell" + row + (column + 1))
        return
      }
    }
    if (column > 1) {
      if (
        document.getElementById("cell" + row + (column - 1)).className == "t9"
      ) {
        swap_tiles("cell" + row + column, "cell" + row + (column - 1))
        return
      }
    }
    if (row < 3) {
      if (
        document.getElementById("cell" + (row + 1) + column).className == "t9"
      ) {
        swap_tiles("cell" + row + column, "cell" + (row + 1) + column)
        return
      }
    }
    if (row > 1) {
      if (
        document.getElementById("cell" + (row - 1) + column).className == "t9"
      ) {
        swap_tiles("cell" + row + column, "cell" + (row - 1) + column)
        return
      }
    }
  }
}
