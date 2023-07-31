/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

/*
document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  };
*/


/*
//left 
let count1 = 0;
function changeImage1(src) {
    document.querySelector("#img1").src = "../images/" + src + ".png";}

document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
        count1 += 1;
    document.querySelector("#pop1").textContent = count1;
    changeImage1("p1");}
}
document.body.onkeyup = function (e) {
    if (e.keyCode = 32) {
    changeImage1("p2");}
}





//right  
let count2 = 0;
function changeImage2(src) {
    document.querySelector("#img2").src = "../images/" + src + ".png";}

document.body.onkeydown = function (e) {
    if (e.keyCode == 13) {
        count2 += 1;
    document.querySelector("#pop2").textContent = count2;
    changeImage2("p1");}
}
document.body.onkeyup = function (e) {
    if (e.keyCode == 13) {
    changeImage2("p2");}
}
*/


let count1 = 0;
let count2 = 0;

function changeImage1(src) {
    document.querySelector("#img1").src = "../images/" + src + ".png";
}

function changeImage2(src) {
    document.querySelector("#img2").src = "../images/" + src + ".png";
}

document.body.onkeydown = function (e) {
    // 當按下空格鍵 (key code: 32)
    if (e.keyCode == 32) {
        count1 += 1;
        document.querySelector("#pop1").textContent = count1;
        changeImage1("p1");
    }
    // 當按下回車鍵 (key code: 13)
    else if (e.keyCode == 13) {
        count2 += 1;
        document.querySelector("#pop2").textContent = count2;
        changeImage2("p1");
    }
};

document.body.onkeyup = function (e) {
    // 當放開空格鍵 (key code: 32)
    if (e.keyCode == 32) {
        changeImage1("p2");
    }
    // 當放開回車鍵 (key code: 13)
    else if (e.keyCode == 13) {
        changeImage2("p2");
    }
};
