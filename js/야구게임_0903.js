// 랜덤 수 3개 뽑기 (문제)

let rdArray = []

// 다 채워질때까지 반복

// 랜덤수가 채워질 배열의 길이가 3보다 작을 동안
while(rdArray.length < 3) {
  // 1~9 수 한 개 뽑기
  let num = Math.floor(Math.random() * 9) + 1
  // Math.random() : 0 이상 ~ 1미만 실수 반환
  // Math.floor() : 실수 버림
  // -> Math.random() 에서 0~10 사이의 숫자가 나오면 * 10 을 하면 숫자가 10이 나올 수가 있어서 * 9 을 한 것이다.
  // [방법2] Math.ceil(Math.random() * 10) : 1~10 사이의 수 -> 0이나 10이 나오긴 매우 어렵다.

  // rdArray에서 num에 해당하는 데이터가 없다면 -1. 있다면 위치값 반환(0부터 시작)
  if (rdArray.indexOf(num) == -1) {
    rdArray.push(num)
  }
  
}

// 랜덤으로 뽑은 배열을 문자열로 만들기!
// let com = rdArray.join("")
// document.write("컴퓨터가 만든 문제 : ", com)

// 정답확인
let inputs = document.querySelectorAll("input")
let btn = document.querySelector("button")

// 제출하면 바로 색을 입히고, 추가한다.
let body = document.getElementsByTagName("body")[0]

let appendTemplete = '<br><input type="number" min="1" max="9" class = "target">' 
  + '<input type="number" min="1" max="9" class = "target">' 
  + '<input type="number" min="1" max="9" class = "target"></input>'

// 버튼을 누르면
btn.addEventListener("click", function(){

  let inputs = document.querySelectorAll(".target")

  // input에 적힌 숫자 한 개씩 확인
  for (let i = 0; i < inputs.length; i++) {
    
    // 스트라이크?
    if (inputs[i].value == rdArray[i]) {
      inputs[i].style.backgroundColor = "green"
    } else if( rdArray.indexOf( parseInt(inputs[i].value) ) != -1 ) { // 볼?? - 숫자가 3군데 중 하나가 있다.
      inputs[i].style.backgroundColor = "yellow"
    } else { // 아웃??
      inputs[i].style.backgroundColor = "gray"
    }

    // S / B 검사가 끝났으면 더이상 target 이 아님!
    inputs[i].classList.remove("target")
  }

  let br = document.createElement("br")
  document.querySelector("#container").appendChild(br)

  // 
  document.querySelector("#container").insertAdjacentHTML("beforeend", appendTemplete)

  // 
  /*
  for(let i = 0; i < 3; i++) {

    let new_input = document.createElement("input")

    new_input.setAttribute("type", "number")
    new_input.setAttribute("max", 9)
    new_input.setAttribute("min", 1)

    document.querySelector("#container").appendChild(new_input)
  }
  */



})