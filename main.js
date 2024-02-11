//랜덤번호 지정
//유저가 번호 입력 후 버튼 클릭
//번호를 맞추면 -> "정답입니다." , 새로시작
//랜덤번호 < 입력번호 = "Down"
//랜덤번호 > 입력번호 = "UP"
//Reset 버튼을 클릭하면 게임이 새로시작
//5번의 기회 -> "기회가끝났습니다." -> 새로시작
//유저는 1~100 사이의 숫자 입력 가능 -> 밖의 숫자 입력할 경우, "1~100 사이의 숫자만 입력 가능합니다.", 기획 깎지 않음
//똑같은 숫자 입력할 경우 -> "이미 입력한 숫자입니다.", 기회 깎지 않음

let randomNum = 0;
let checkButton = document.getElementById("check-button");
let inputNumber = document.getElementById("number-input");
let explanationSentence = document.getElementById("explanation-sentence");
let resetButton = document.getElementById("reset-button");
let chanceNumber = document.getElementById("chance-number");
let chance = 5;
let history = [];


checkButton.addEventListener("click", play);
resetButton.addEventListener("click", pickRandomNum);

pickRandomNum();



function pickRandomNum(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    inputNumber.value = "";
    console.log("현재 랜덤번호는", randomNum);
    explanationSentence.textContent = "숫자를 입력해주세요."
    chance = 5;
    chanceNumber.textContent = `기회는 ${chance}번`
    history=[]
}

function play(){
    let userValue = inputNumber.value;

    if(userValue>100 || userValue<1){
        explanationSentence.textContent = "1~100 사이의 숫자를 입력해주세요."
        return;
    }
    if(history.includes(userValue)){
        explanationSentence.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    if(userValue == randomNum){
        alert("정답입니다.")
        pickRandomNum();
        return;
    }else if(userValue > randomNum){
        console.log("Down");
        explanationSentence.textContent = "Down"
    }else{
        console.log("Up")
        explanationSentence.textContent = "Up"
    }

    chance--;
    chanceNumber.textContent = `기회는 ${chance}번`
    history.push(userValue);

    if(chance < 1){
        alert("기회가 끝났습니다. 다시시작!");
        pickRandomNum();
    }
}
