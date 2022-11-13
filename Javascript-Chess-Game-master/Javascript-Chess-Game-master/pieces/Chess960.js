// randomly place rook
let randnum = Math.floor(Math.random() * 8);

const black1 = document.querySelector(".black1");
const bid1 = document.getElementById('black1');
const white1 = document.querySelector(".white1");
const wid1 = document.getElementById('white1');
// const class1 = document.getElementById('blackRook1').className;

const black2 = document.querySelector(".black2");
const bid2 = document.getElementById('black2');
const white2 = document.querySelector(".white2");
const wid2 = document.getElementById('white2');

const black3 = document.querySelector(".black3");
const bid3 = document.getElementById('black3');
const white3 = document.querySelector(".white3");
const wid3 = document.getElementById('white3');

const black4 = document.querySelector(".black4");
const bid4 = document.getElementById('black4');
const white4 = document.querySelector(".white4");
const wid4 = document.getElementById('white4');

const black5 = document.querySelector(".black5");
const bid5 = document.getElementById('black5');
const white5 = document.querySelector(".white5");
const wid5 = document.getElementById('white5');

const black6 = document.querySelector(".black6");
const bid6 = document.getElementById('black6');
const white6 = document.querySelector(".white6");
const wid6 = document.getElementById('white6');

const black7 = document.querySelector(".black7");
const bid7 = document.getElementById('black7');
const white7 = document.querySelector(".white7");
const wid7 = document.getElementById('white7');

const black8 = document.querySelector(".black8");
const bid8 = document.getElementById('black8');
const white8 = document.querySelector(".white8");
const wid8 = document.getElementById('white8');


const placingRandomRook = () => {
    console.log(randnum);
    switch (randnum) {
        case 0:
            black1.src = "img/blackRook.png";
            bid1.id = "blackRook1";
            white1.src = "img/whiteRook.png";
            wid1.id = "whiteRook1";

            
            // console.log(`i changed to kight`);
            // class1.className = "black1 piece rook"
            break;
        case 1:
            black2.src = "img/blackRook.png";
            bid2.id = "blackRook1";
            white2.src = "img/whiteRook.png";
            wid2.id = "whiteRook1";
            break;
        case 2:
            black3.src = "img/blackRook.png";
            bid3.id = "blackRook1";
            white3.src = "img/whiteRook.png";
            wid3.id = "whiteRook1";
            break;
        case 3:
            black4.src = "img/blackRook.png";
            bid4.id = "blackRook1";
            white4.src = "img/whiteRook.png";
            wid4.id = "whiteRook1";
            break;
        case 4:
            black5.src = "img/blackRook.png";
            bid5.id = "blackRook1";
            white5.src = "img/whiteRook.png";
            wid5.id = "whiteRook1";
            break;
        case 5:
            black6.src = "img/blackRook.png";
            bid6.id = "blackRook1";
            white6.src = "img/whiteRook.png";
            wid6.id = "whiteRook1";
            break;
        case 6:
            black7.src = "img/blackRook.png";
            bid7.id = "blackRook1";
            white7.src = "img/whiteRook.png";
            wid7.id = "whiteRook1";
            break;
        case 7:
            black8.src = "img/blackRook.png";
            bid8.id = "blackRook1";
            white8.src = "img/whiteRook.png";
            wid8.id = "whiteRook1";
            break;
        default:
            break;
    }
}

placingRandomRook();

// console.log(randnum);
