//체크 박스 속성에 이벤트 처리하기
let check = document.querySelector("#shppingInfo");

//체크 이벤트 구현
check.addEventListener("click", checkBox);

let billingName = document.getElementById("billingName");
let billingTel = document.getElementById("billingTel");
let billingAddr = document.getElementById("billingAddr");

let shppingName = document.getElementById("shppingName");
let shppingTel = document.getElementById("shppingTel");
let shppingAddr = document.getElementById("shppingAddr");

function checkBox(){
    if(check.checked == true){  //체크 박스에 체크 되었다면
        shppingName.value = billingName.value;
        shppingTel.value = billingTel.value;
        shppingAddr.value = billingAddr.value;
    }else{
        shppingName.value = "";
        shppingTel.value = "";
        shppingAddr.value = "";
    }
}

