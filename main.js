let pl1 = document.querySelector("#pl1");
let pl2= document.querySelector("#pl2");
let wint = document.querySelector("#wint");
let gamet = document.querySelector("#gamet");
let mess = document.querySelector("#mess");
const btn1 = document.querySelector("#pl1up");
const btn2 = document.querySelector("#pl2up");
let reset = document.querySelector("#reset");

let i = 0;
let j = 0;

gamet.addEventListener("input", function(){
    btn1.disabled = false;
    btn2.disabled = false;
    mess.innerText = "Use the buttons to keep scores";
});

btn1.addEventListener("click", function(){
    if(i!= gamet.value -1 ){
        pl1.innerText = ++i;
    }
    else{
        winner(1);
        pl1.innerText = gamet.value;
        btn1.disabled = true;
        btn2.disabled = true;
    }
});

btn2.addEventListener("click", function () {
    if (j !=  gamet.value - 1) {
        pl2.innerText = ++j;
    } else {
        winner(2);
        pl2.innerText = gamet.value;
        btn1.disabled = true;
        btn2.disabled = true;
    }

});

reset.addEventListener("click", function(){
    i = 0;
    j = 0;
    wint.innerText = "";
    pl1.innerText = 0;
    pl2.innerText = 0;
    btn1.disabled = true;
    btn2.disabled = true;
    gamet.selectedIndex = 0;
    pl1.style.color = "";
    pl2.style.color = "";
    mess.innerText = "First Choose a game type";
});


function winner(flag){
    if (flag == 1){
        let go1= "Player 1 wins!";
        wint.innerText = go1;
        pl1.style.color = "#21bf73";
        pl2.style.color = "#fd5e53";
    }
    else if (flag == 2){
        let go2 = "Player 2 wins";
        wint.innerText = go2;
        pl1.style.color = "#fd5e53";
        pl2.style.color = "#21bf73";
    }
}