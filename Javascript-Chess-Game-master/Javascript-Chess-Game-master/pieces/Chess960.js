// randomly place rook
let randnum = Math.floor(Math.random() * 8);

const black1 = document.querySelector(".black1");
const id1 = document.getElementById('black1');
// const class1 = document.getElementById('blackRook1').className;

const black2 = document.querySelector(".black2");
const id2 = document.getElementById('black2');

const black3 = document.querySelector(".black3");
const id3 = document.getElementById('black3');

const black4 = document.querySelector(".black4");
const id4 = document.getElementById('black4');

const black5 = document.querySelector(".black5");
const id5 = document.getElementById('black5');

const black6 = document.querySelector(".black6");
const id6 = document.getElementById('black6');

const black7 = document.querySelector(".black7");
const id7 = document.getElementById('black7');

const black8 = document.querySelector(".black8");
const id8 = document.getElementById('black8');


const placingRandomRook = () => {
    console.log(randnum);
    switch (randnum) {
        case 0:
            black1.src = "img/blackRook.png";
            id1.id = "blackRook1"
            // console.log(`i changed to kight`);
            // class1.className = "black1 piece rook"
            break;
        case 1:
            black2.src = "img/blackRook.png";
            id2.id = "blackRook1"
            break;
        case 2:
            black3.src = "img/blackRook.png";
            id3.id = "blackRook1"
            break;
        case 3:
            black4.src = "img/blackRook.png";
            id4.id = "blackRook1"
            break;
        case 4:
            black5.src = "img/blackRook.png";
            id5.id = "blackRook1"
            break;
        case 5:
            black6.src = "img/blackRook.png";
            id6.id = "blackRook1"
            break;
        case 6:
            black7.src = "img/blackRook.png";
            id7.id = "blackRook1"
            break;
        case 7:
            black8.src = "img/blackRook.png";
            id8.id = "blackRook1"
            break;
        default:
            break;
    }
}

black1.addEventListener("load", () => {
    console.log(randnum);
    placingRandomRook();
});

// console.log(randnum);
