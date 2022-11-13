// randomly place rook
// let randnumRook1 = Math.floor(Math.random() * 8);
// let randnumRook2 = Math.floor(Math.random() * 8);
// let randnumBishop1 = Math.floor(Math.random() * 8);
// let randnumBishop2 = Math.floor(Math.random() * 8);
// let randnumKing = Math.floor(Math.random() * 8);
// let randnumQueen = Math.floor(Math.random() * 8);
// let randnumKnight1 = Math.floor(Math.random() * 8);
// let randnumKnight2 = Math.floor(Math.random() * 8);

let randNumber = Math.floor(Math.random()*1);

const black1 = document.querySelector(".black1");
const bid1 = document.getElementById('black1');
const white1 = document.querySelector(".white1");
const wid1 = document.getElementById('white1');

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

const gameboard = () =>{
    console.log(randNumber);
    switch (randNumber) {
        case 0:
            black1.src = "img/blackRook.png";
            black2.src = "img/blackKnight.png";
            black3.src = "img/blackBishop.png";
            black4.src = "img/blackQueen.png";
            black5.src = "img/blackKing.png";
            black6.src = "img/blackBishop.png";
            black7.src = "img/blackKnight.png";
            black8.src = "img/blackRook.png";
            bid1.id = "blackRook1";
            bid2.id = "blackKnight1";
            bid3.id = "blackBishop1";
            bid4.id = "blackQueen";
            bid5.id = "blackKing";
            bid6.id = "blackBishop2";
            bid7.id = "blackKnight2";
            bid8.id = "blackRook2";
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('blackKnight1').className = "black2 piece kight";
            document.getElementById('blackBishop1').className = "black3 piece bishop";
            document.getElementById('blackQueen').className = "black4 piece queen";
            document.getElementById('blackKing').className = "black5 piece bking";
            document.getElementById('blackBishop2').className = "black6 piece bishop";
            document.getElementById('blackKnight2').className = "black7 piece kight";
            document.getElementById('blackRook2').className = "black8 piece rook";

            white1.src = "img/whiteRook.png";
            wid1.id = "whiteRook1";
            document.getElementById('whiteRook1').className = "white1 piece rook";
            break;
        case 1:
            black2.src = "img/blackRook.png";
            bid2.id = "blackRook1";
            white2.src = "img/whiteRook.png";
            wid2.id = "whiteRook1";
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('whiteRook1').className = "white1 piece rook";
            break;
        case 2:
            black3.src = "img/blackRook.png";
            bid3.id = "blackRook1";
            white3.src = "img/whiteRook.png";
            wid3.id = "whiteRook1";
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('whiteRook1').className = "white1 piece rook";
            break;
        case 3:
            black4.src = "img/blackRook.png";
            bid4.id = "blackRook1";
            white4.src = "img/whiteRook.png";
            wid4.id = "whiteRook1";
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('whiteRook1').className = "white1 piece rook";
            break;
        case 4:
            black5.src = "img/blackRook.png";
            bid5.id = "blackRook1";
            white5.src = "img/whiteRook.png";
            wid5.id = "whiteRook1";
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('whiteRook1').className = "white1 piece rook";
            break;
        case 5:
            black6.src = "img/blackRook.png";
            bid6.id = "blackRook1";
            white6.src = "img/whiteRook.png";
            wid6.id = "whiteRook1";
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('whiteRook1').className = "white1 piece rook";
            break;
        case 6:
            black7.src = "img/blackRook.png";
            bid7.id = "blackRook1";
            white7.src = "img/whiteRook.png";
            wid7.id = "whiteRook1";
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('whiteRook1').className = "white1 piece rook";
            break;
        case 7:
            black8.src = "img/blackRook.png";
            bid8.id = "blackRook1";
            white8.src = "img/whiteRook.png";
            wid8.id = "whiteRook1";
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('whiteRook1').className = "white1 piece rook";
            break;
        default:
            break;
    }
}

// random rooks
// const placingRandomRook1 = () => {
//     console.log("rook1 " + randnumRook1);
//     switch (randnumRook1) {
//         case 0:
//             black1.src = "img/blackRook.png";
//             bid1.id = "blackRook1";
//             white1.src = "img/whiteRook.png";
//             wid1.id = "whiteRook1";
//             document.getElementById('blackRook1').className = "black1 piece rook";
//             document.getElementById('whiteRook1').className = "white1 piece rook";
//             break;
//         case 1:
//             black2.src = "img/blackRook.png";
//             bid2.id = "blackRook1";
//             white2.src = "img/whiteRook.png";
//             wid2.id = "whiteRook1";
//             document.getElementById('blackRook1').className = "black1 piece rook";
//             document.getElementById('whiteRook1').className = "white1 piece rook";
//             break;
//         case 2:
//             black3.src = "img/blackRook.png";
//             bid3.id = "blackRook1";
//             white3.src = "img/whiteRook.png";
//             wid3.id = "whiteRook1";
//             document.getElementById('blackRook1').className = "black1 piece rook";
//             document.getElementById('whiteRook1').className = "white1 piece rook";
//             break;
//         case 3:
//             black4.src = "img/blackRook.png";
//             bid4.id = "blackRook1";
//             white4.src = "img/whiteRook.png";
//             wid4.id = "whiteRook1";
//             document.getElementById('blackRook1').className = "black1 piece rook";
//             document.getElementById('whiteRook1').className = "white1 piece rook";
//             break;
//         case 4:
//             black5.src = "img/blackRook.png";
//             bid5.id = "blackRook1";
//             white5.src = "img/whiteRook.png";
//             wid5.id = "whiteRook1";
//             document.getElementById('blackRook1').className = "black1 piece rook";
//             document.getElementById('whiteRook1').className = "white1 piece rook";
//             break;
//         case 5:
//             black6.src = "img/blackRook.png";
//             bid6.id = "blackRook1";
//             white6.src = "img/whiteRook.png";
//             wid6.id = "whiteRook1";
//             document.getElementById('blackRook1').className = "black1 piece rook";
//             document.getElementById('whiteRook1').className = "white1 piece rook";
//             break;
//         case 6:
//             black7.src = "img/blackRook.png";
//             bid7.id = "blackRook1";
//             white7.src = "img/whiteRook.png";
//             wid7.id = "whiteRook1";
//             document.getElementById('blackRook1').className = "black1 piece rook";
//             document.getElementById('whiteRook1').className = "white1 piece rook";
//             break;
//         case 7:
//             black8.src = "img/blackRook.png";
//             bid8.id = "blackRook1";
//             white8.src = "img/whiteRook.png";
//             wid8.id = "whiteRook1";
//             document.getElementById('blackRook1').className = "black1 piece rook";
//             document.getElementById('whiteRook1').className = "white1 piece rook";
//             break;
//         default:
//             break;
//     }
// }

// const placingRandomRook2 = () => {
//     console.log("rook2 " + randnumRook2);
//     switch (randnumRook2) {
//         case 0:
//             black1.src = "img/blackRook.png";
//             bid1.id = "blackRook2";
//             white1.src = "img/whiteRook.png";
//             wid1.id = "whiteRook2";
//             document.getElementById('blackRook2').className = "black1 piece rook";
//             document.getElementById('whiteRook2').className = "white1 piece rook";
//             break;
//         case 1:
//             black2.src = "img/blackRook.png";
//             bid2.id = "blackRook2";
//             white2.src = "img/whiteRook.png";
//             wid2.id = "whiteRook2";
//             document.getElementById('blackRook2').className = "black1 piece rook";
//             document.getElementById('whiteRook2').className = "white1 piece rook";
//             break;
//         case 2:
//             black3.src = "img/blackRook.png";
//             bid3.id = "blackRook2";
//             white3.src = "img/whiteRook.png";
//             wid3.id = "whiteRook2";
//             document.getElementById('blackRook2').className = "black1 piece rook";
//             document.getElementById('whiteRook2').className = "white1 piece rook";
//             break;
//         case 3:
//             black4.src = "img/blackRook.png";
//             bid4.id = "blackRook2";
//             white4.src = "img/whiteRook.png";
//             wid4.id = "whiteRook2";
//             document.getElementById('blackRook2').className = "black1 piece rook";
//             document.getElementById('whiteRook2').className = "white1 piece rook";
//             break;
//         case 4:
//             black5.src = "img/blackRook.png";
//             bid5.id = "blackRook2";
//             white5.src = "img/whiteRook.png";
//             wid5.id = "whiteRook2";
//             document.getElementById('blackRook2').className = "black1 piece rook";
//             document.getElementById('whiteRook2').className = "white1 piece rook";
//             break;
//         case 5:
//             black6.src = "img/blackRook.png";
//             bid6.id = "blackRook2";
//             white6.src = "img/whiteRook.png";
//             wid6.id = "whiteRook2";
//             document.getElementById('blackRook2').className = "black1 piece rook";
//             document.getElementById('whiteRook2').className = "white1 piece rook";
//             break;
//         case 6:
//             black7.src = "img/blackRook.png";
//             bid7.id = "blackRook2";
//             white7.src = "img/whiteRook.png";
//             wid7.id = "whiteRook2";
//             document.getElementById('blackRook2').className = "black1 piece rook";
//             document.getElementById('whiteRook2').className = "white1 piece rook";
//             break;
//         case 7:
//             black8.src = "img/blackRook.png";
//             bid8.id = "blackRook2";
//             white8.src = "img/whiteRook.png";
//             wid8.id = "whiteRook2";
//             document.getElementById('blackRook2').className = "black1 piece rook";
//             document.getElementById('whiteRook2').className = "white1 piece rook";
//             break;
//         default:
//             break;
//     }
// }

// // random bishops
// const placingRandomBishop1 = () =>{
//     console.log("bishop1 " + randnumBishop1);
//     switch (randnumBishop1) {
//         case 0:
//             black1.src = "img/blackBishop.png";
//             bid1.id = "blackBishop1";
//             white1.src = "img/whiteBishop.png";
//             wid1.id = "whiteBishop1";
//             document.getElementById('blackBishop1').className = "black1 piece bishop";
//             document.getElementById('whiteBishop1').className = "white1 piece bishop";
//             break;
//         case 1:
//             black2.src = "img/blackBishop.png";
//             bid2.id = "blackBishop1";
//             white2.src = "img/whiteBishop.png";
//             wid2.id = "whiteBishop1";
//             document.getElementById('blackBishop1').className = "black1 piece bishop";
//             document.getElementById('whiteBishop1').className = "white1 piece bishop";
//             break;
//         case 2:
//             black3.src = "img/blackBishop.png";
//             bid3.id = "blackBishop1";
//             white3.src = "img/whiteBishop.png";
//             wid3.id = "whiteBishop1";
//             document.getElementById('blackBishop1').className = "black1 piece bishop";
//             document.getElementById('whiteBishop1').className = "white1 piece bishop";
//             break;
//         case 3:
//             black4.src = "img/blackBishop.png";
//             bid4.id = "blackBishop1";
//             white4.src = "img/whiteBishop.png";
//             wid4.id = "whiteBishop1";
//             document.getElementById('blackBishop1').className = "black1 piece bishop";
//             document.getElementById('whiteBishop1').className = "white1 piece bishop";
//             break;
//         case 4:
//             black5.src = "img/blackBishop.png";
//             bid5.id = "blackBishop1";
//             white5.src = "img/whiteBishop.png";
//             wid5.id = "whiteBishop1";
//             document.getElementById('blackBishop1').className = "black1 piece bishop";
//             document.getElementById('whiteBishop1').className = "white1 piece bishop";
//             break;
//         case 5:
//             black6.src = "img/blackBishop.png";
//             bid6.id = "blackBishop1";
//             white6.src = "img/whiteBishop.png";
//             wid6.id = "whiteBishop1";
//             document.getElementById('blackBishop1').className = "black1 piece bishop";
//             document.getElementById('whiteBishop1').className = "white1 piece bishop";
//             break;
//         case 6:
//             black7.src = "img/blackBishop.png";
//             bid7.id = "blackBishop1";
//             white7.src = "img/whiteBishop.png";
//             wid7.id = "whiteBishop1";
//             document.getElementById('blackBishop1').className = "black1 piece bishop";
//             document.getElementById('whiteBishop1').className = "white1 piece bishop";
//             break;
//         case 7:
//             black8.src = "img/blackBishop.png";
//             bid8.id = "blackBishop1";
//             white8.src = "img/whiteBishop.png";
//             wid8.id = "whiteBishop1";
//             document.getElementById('blackBishop1').className = "black1 piece bishop";
//             document.getElementById('whiteBishop1').className = "white1 piece bishop";
//             break;
//         default:
//             break;
//     }
// }

// const placingRandomBishop2 = () =>{
//     console.log("bishop2 " + randnumBishop2);
//     switch (randnumBishop2) {
//         case 0:
//             black1.src = "img/blackBishop.png";
//             bid1.id = "blackBishop2";
//             white1.src = "img/whiteBishop.png";
//             wid1.id = "whiteBishop2";
//             document.getElementById('blackBishop2').className = "black1 piece bishop";
//             document.getElementById('whiteBishop2').className = "white1 piece bishop";
//             break;
//         case 1:
//             black2.src = "img/blackBishop.png";
//             bid2.id = "blackBishop2";
//             white2.src = "img/whiteBishop.png";
//             wid2.id = "whiteBishop2";
//             document.getElementById('blackBishop2').className = "black1 piece bishop";
//             document.getElementById('whiteBishop2').className = "white1 piece bishop";
//             break;
//         case 2:
//             black3.src = "img/blackBishop.png";
//             bid3.id = "blackBishop2";
//             white3.src = "img/whiteBishop.png";
//             wid3.id = "whiteBishop2";
//             document.getElementById('blackBishop2').className = "black1 piece bishop";
//             document.getElementById('whiteBishop2').className = "white1 piece bishop";
//             break;
//         case 3:
//             black4.src = "img/blackBishop.png";
//             bid4.id = "blackBishop2";
//             white4.src = "img/whiteBishop.png";
//             wid4.id = "whiteBishop2";
//             document.getElementById('blackBishop2').className = "black1 piece bishop";
//             document.getElementById('whiteBishop2').className = "white1 piece bishop";
//             break;
//         case 4:
//             black5.src = "img/blackBishop.png";
//             bid5.id = "blackBishop2";
//             white5.src = "img/whiteBishop.png";
//             wid5.id = "whiteBishop2";
//             document.getElementById('blackBishop2').className = "black1 piece bishop";
//             document.getElementById('whiteBishop2').className = "white1 piece bishop";
//             break;
//         case 5:
//             black6.src = "img/blackBishop.png";
//             bid6.id = "blackBishop2";
//             white6.src = "img/whiteBishop.png";
//             wid6.id = "whiteBishop2";
//             document.getElementById('blackBishop2').className = "black1 piece bishop";
//             document.getElementById('whiteBishop2').className = "white1 piece bishop";
//             break;
//         case 6:
//             black7.src = "img/blackBishop.png";
//             bid7.id = "blackBishop2";
//             white7.src = "img/whiteBishop.png";
//             wid7.id = "whiteBishop2";
//             document.getElementById('blackBishop2').className = "black1 piece bishop";
//             document.getElementById('whiteBishop2').className = "white1 piece bishop";
//             break;
//         case 7:
//             black8.src = "img/blackBishop.png";
//             bid8.id = "blackBishop2";
//             white8.src = "img/whiteBishop.png";
//             wid8.id = "whiteBishop2";
//             document.getElementById('blackBishop2').className = "black1 piece bishop";
//             document.getElementById('whiteBishop2').className = "white1 piece bishop";
//             break;
//         default:
//             break;
//     }
// }

// // random king
// const placingRandomKing = () =>{
//     console.log("King " + randnumKing);
//     switch (randnumKing) {
//         case 0:
//             black1.src = "img/blackKing.png";
//             bid1.id = "blackKing";
//             white1.src = "img/whiteKing.png";
//             wid1.id = "whiteKing";
//             document.getElementById('blackKing').className = "black1 piece bking";
//             document.getElementById('whiteKing').className = "white1 piece wking";
//             break;
//         case 1:
//             black2.src = "img/blackKing.png";
//             bid2.id = "blackKing";
//             white2.src = "img/whiteKing.png";
//             wid2.id = "whiteKing";
//             document.getElementById('blackKing').className = "black1 piece bking";
//             document.getElementById('whiteKing').className = "white1 piece wking";
//             break;
//         case 2:
//             black3.src = "img/blackKing.png";
//             bid3.id = "blackKing";
//             white3.src = "img/whiteKing.png";
//             wid3.id = "whiteKing";
//             document.getElementById('blackKing').className = "black1 piece bking";
//             document.getElementById('whiteKing').className = "white1 piece wking";
//             break;
//         case 3:
//             black4.src = "img/blackKing.png";
//             bid4.id = "blackKing";
//             white4.src = "img/whiteKing.png";
//             wid4.id = "whiteKing";
//             document.getElementById('blackKing').className = "black1 piece bking";
//             document.getElementById('whiteKing').className = "white1 piece wking";
//             break;
//         case 4:
//             black5.src = "img/blackKing.png";
//             bid5.id = "blackKing";
//             white5.src = "img/whiteKing.png";
//             wid5.id = "whiteKing";
//             document.getElementById('blackKing').className = "black1 piece bking";
//             document.getElementById('whiteKing').className = "white1 piece wking";
//             break;
//         case 5:
//             black6.src = "img/blackKing.png";
//             bid6.id = "blackKing";
//             white6.src = "img/whiteKing.png";
//             wid6.id = "whiteKing";
//             document.getElementById('blackKing').className = "black1 piece bking";
//             document.getElementById('whiteKing').className = "white1 piece wking";
//             break;
//         case 6:
//             black7.src = "img/blackKing.png";
//             bid7.id = "blackKing";
//             white7.src = "img/whiteKing.png";
//             wid7.id = "whiteKing";
//             document.getElementById('blackKing').className = "black1 piece bking";
//             document.getElementById('whiteKing').className = "white1 piece wking";
//             break;
//         case 7:
//             black8.src = "img/blackKing.png";
//             bid8.id = "blackKing";
//             white8.src = "img/whiteKing.png";
//             wid8.id = "whiteKing";
//             document.getElementById('blackKing').className = "black1 piece bking";
//             document.getElementById('whiteKing').className = "white1 piece wking";
//             break;
//         default:
//             break;
//     }
// }

// // random queen
// const placingRandomQueen = () =>{
//     console.log("queen " + randnumQueen);
//     switch (randnumQueen) {
//         case 0:
//             black1.src = "img/blackQueen.png";
//             bid1.id = "blackQueen";
//             white1.src = "img/whiteQueen.png";
//             wid1.id = "whiteQueen";
//             document.getElementById('blackQueen').className = "black1 piece queen";
//             document.getElementById('whiteQueen').className = "white1 piece queen";
//             break;
//         case 1:
//             black2.src = "img/blackQueen.png";
//             bid2.id = "blackQueen";
//             white2.src = "img/whiteQueen.png";
//             wid2.id = "whiteQueen";
//             document.getElementById('blackQueen').className = "black1 piece queen";
//             document.getElementById('whiteQueen').className = "white1 piece queen";
//             break;
//         case 2:
//             black3.src = "img/blackQueen.png";
//             bid3.id = "blackQueen";
//             white3.src = "img/whiteQueen.png";
//             wid3.id = "whiteQueen";
//             document.getElementById('blackQueen').className = "black1 piece queen";
//             document.getElementById('whiteQueen').className = "white1 piece queen";
//             break;
//         case 3:
//             black4.src = "img/blackQueen.png";
//             bid4.id = "blackQueen";
//             white4.src = "img/whiteQueen.png";
//             wid4.id = "whiteQueen";
//             document.getElementById('blackQueen').className = "black1 piece queen";
//             document.getElementById('whiteQueen').className = "white1 piece queen";
//             break;
//         case 4:
//             black5.src = "img/blackQueen.png";
//             bid5.id = "blackQueen";
//             white5.src = "img/whiteQueen.png";
//             wid5.id = "whiteQueen";
//             document.getElementById('blackQueen').className = "black1 piece queen";
//             document.getElementById('whiteQueen').className = "white1 piece queen";
//             break;
//         case 5:
//             black6.src = "img/blackQueen.png";
//             bid6.id = "blackQueen";
//             white6.src = "img/whiteQueen.png";
//             wid6.id = "whiteQueen";
//             document.getElementById('blackQueen').className = "black1 piece queen";
//             document.getElementById('whiteQueen').className = "white1 piece queen";
//             break;
//         case 6:
//             black7.src = "img/blackQueen.png";
//             bid7.id = "blackQueen";
//             white7.src = "img/whiteQueen.png";
//             wid7.id = "whiteQueen";
//             document.getElementById('blackQueen').className = "black1 piece queen";
//             document.getElementById('whiteQueen').className = "white1 piece queen";
//             break;
//         case 7:
//             black8.src = "img/blackQueen.png";
//             bid8.id = "blackQueen";
//             white8.src = "img/whiteQueen.png";
//             wid8.id = "whiteQueen";
//             document.getElementById('blackBishop2').className = "black1 piece queen";
//             document.getElementById('whiteQueen').className = "white1 piece queen";
//             break;
//         default:
//             break;
//     }
// }

// // random knights
// const placingRandomKnight1 = () =>{
//     console.log("Kight1 " + randnumKnight1);
//     switch (randnumKnight1) {
//         case 0:
//             black1.src = "img/blackKnight.png";
//             bid1.id = "blackKnight1";
//             white1.src = "img/whiteKnight.png";
//             wid1.id = "whiteKnight1";
//             document.getElementById('blackKnight1').className = "black1 piece knight";
//             document.getElementById('whiteKnight1').className = "white1 piece knight";
//             break;
//         case 1:
//             black2.src = "img/blackKnight.png";
//             bid2.id = "blackKnight1";
//             white2.src = "img/whiteKnight.png";
//             wid2.id = "whiteKnight1";
//             document.getElementById('blackKnight1').className = "black1 piece knight";
//             document.getElementById('whiteKnight1').className = "white1 piece knight";
//             break;
//         case 2:
//             black3.src = "img/blackKnight.png";
//             bid3.id = "blackKnight1";
//             white3.src = "img/whiteKnight.png";
//             wid3.id = "whiteKnight1";
//             document.getElementById('blackKnight1').className = "black1 piece bishop";
//             document.getElementById('whiteKnight1').className = "white1 piece knight";
//             break;
//         case 3:
//             black4.src = "img/blackKnight.png";
//             bid4.id = "blackKnight1";
//             white4.src = "img/whiteKnight.png";
//             wid4.id = "whiteKnight1";
//             document.getElementById('blackKnight1').className = "black1 piece knight";
//             document.getElementById('whiteKnight1').className = "white1 piece knight";
//             break;
//         case 4:
//             black5.src = "img/blackKnight.png";
//             bid5.id = "blackKnight1";
//             white5.src = "img/whiteKnight.png";
//             wid5.id = "whiteKnight1";
//             document.getElementById('blackKnight1').className = "black1 piece knight";
//             document.getElementById('whiteKnight1').className = "white1 piece knight";
//             break;
//         case 5:
//             black6.src = "img/blackKnight.png";
//             bid6.id = "blackKnight1";
//             white6.src = "img/whiteKnight.png";
//             wid6.id = "whiteKnight1";
//             document.getElementById('blackKnight1').className = "black1 piece knight";
//             document.getElementById('whiteKnight1').className = "white1 piece knight";
//             break;
//         case 6:
//             black7.src = "img/blackKnight.png";
//             bid7.id = "blackKnight1";
//             white7.src = "img/whiteKnight.png";
//             wid7.id = "whiteKnight1";
//             document.getElementById('blackKnight1').className = "black1 piece knight";
//             document.getElementById('whiteKnight1').className = "white1 piece knight";
//             break;
//         case 7:
//             black8.src = "img/blackKnight.png";
//             bid8.id = "blackKnight1";
//             white8.src = "img/whiteKnight.png";
//             wid8.id = "whiteKnight1";
//             document.getElementById('blackKnight1').className = "black1 piece knight";
//             document.getElementById('whiteKnight1').className = "white1 piece knight";
//             break;
//         default:
//             break;
//     }
// }

// const placingRandomKnight2 = () =>{
//     console.log("Kight2 " + randnumKnight2);
//     switch (randnumKnight2) {
//         case 0:
//             black1.src = "img/blackKnight.png";
//             bid1.id = "blackBishop2";
//             white1.src = "img/whiteKnight.png";
//             wid1.id = "whiteKnight2";
//             document.getElementById('blackKnight2').className = "black1 piece knight";
//             document.getElementById('whiteKnight2').className = "white1 piece knight";
//             break;
//         case 1:
//             black2.src = "img/blackKnight.png";
//             bid2.id = "blackKnight2";
//             white2.src = "img/whiteKnight.png";
//             wid2.id = "whiteKnight2";
//             document.getElementById('blackKnight2').className = "black1 piece knight";
//             document.getElementById('whiteKnight2').className = "white1 piece knight";
//             break;
//         case 2:
//             black3.src = "img/blackKnight.png";
//             bid3.id = "blackKnight2";
//             white3.src = "img/whiteKnight.png";
//             wid3.id = "whiteKnight2";
//             document.getElementById('blackKnight2').className = "black1 piece knight";
//             document.getElementById('whiteKnight2').className = "white1 piece knight";
//             break;
//         case 3:
//             black4.src = "img/blackKnight.png";
//             bid4.id = "blackKnight2";
//             white4.src = "img/whiteKnight.png";
//             wid4.id = "whiteKnight2";
//             document.getElementById('blackKnight2').className = "black1 piece knight";
//             document.getElementById('whiteKnight2').className = "white1 piece knight";
//             break;
//         case 4:
//             black5.src = "img/blackKnight.png";
//             bid5.id = "blackKnight2";
//             white5.src = "img/whiteKnight.png";
//             wid5.id = "whiteKnight2";
//             document.getElementById('blackKnight2').className = "black1 piece knight";
//             document.getElementById('whiteKnight2').className = "white1 piece knight";
//             break;
//         case 5:
//             black6.src = "img/blackKnight.png";
//             bid6.id = "blackKnight2";
//             white6.src = "img/whiteKnight.png";
//             wid6.id = "whiteKnight2";
//             document.getElementById('blackKnight2').className = "black1 piece knight";
//             document.getElementById('whiteKnight2').className = "white1 piece knight";
//             break;
//         case 6:
//             black7.src = "img/blackKnight.png";
//             bid7.id = "blackKnight2";
//             white7.src = "img/whiteKnight.png";
//             wid7.id = "whiteKnight2";
//             document.getElementById('blackKnight2').className = "black1 piece knight";
//             document.getElementById('whiteKnight2').className = "white1 piece knight";
//             break;
//         case 7:
//             black8.src = "img/blackKnight.png";
//             bid8.id = "blackKnight2";
//             white8.src = "img/whiteKnight.png";
//             wid8.id = "whiteKnight2";
//             document.getElementById('blackKnight2').className = "black1 piece knight";
//             document.getElementById('whiteKnight2').className = "white1 piece knight";
//             break;
//         default:
//             break;
//     }
// }


// placingRandomRook1();
// placingRandomRook2();
// placingRandomBishop1();
// placingRandomBishop2();
// placingRandomKing();
// placingRandomQueen();
// placingRandomKnight1();
// placingRandomKnight2();

// console.log(randnum);

gameboard();