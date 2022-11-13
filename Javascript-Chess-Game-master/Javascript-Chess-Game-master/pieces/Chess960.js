let randNumber = Math.floor(Math.random()*8);

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
            white2.src = "img/whiteKnight.png";
            white3.src = "img/whiteBishop.png";
            white4.src = "img/whiteQueen.png";
            white5.src = "img/whiteKing.png";
            white6.src = "img/whiteBishop.png";
            white7.src = "img/whiteKnight.png";
            white8.src = "img/whiteRook.png";

            wid1.id = "whiteRook1";
            wid2.id = "whiteKnight1";
            wid3.id = "whiteBishop1";
            wid4.id = "whiteQueen";
            wid5.id = "whiteKing";
            wid6.id = "whiteBishop2";
            wid7.id = "whiteKnight2";
            wid8.id = "whiteRook2";

            document.getElementById('whiteRook1').className = "white1 piece rook";
            document.getElementById('whiteKnight1').className = "white2 piece knight";
            document.getElementById('whiteBishop1').className = "white3 piece bishop";
            document.getElementById('whiteQueen').className = "white4 piece queen";
            document.getElementById('whiteKing').className = "white5 piece wking";
            document.getElementById('whiteBishop2').className = "white6 piece bishop";
            document.getElementById('whiteKnight2').className = "white7 piece knight";
            document.getElementById('whiteRook2').className = "white8 piece rook";

            break;
            // need to do
        case 1:
            black1.src = "img/blackRook.png";
            // first rook
            black2.src = "img/blackRook.png";
            black3.src = "img/blackRook.png";
            black4.src = "img/blackRook.png";
            black5.src = "img/blackRook.png";
            black6.src = "img/blackRook.png";
            black7.src = "img/blackRook.png";
            black8.src = "img/blackRook.png";

            bid1.id = "blackRook1";
            // first rook
            bid2.id = "blackRook1";
            bid3.id = "blackRook1";
            bid4.id = "blackRook1";
            bid5.id = "blackRook1";
            bid6.id = "blackRook1";
            bid7.id = "blackRook1";
            bid8.id = "blackRook1";

            document.getElementById('blackRook1').className = "black1 piece rook";
            // first rook
            document.getElementById('blackRook1').className = "black2 piece rook";
            document.getElementById('blackRook1').className = "black3 piece rook";
            document.getElementById('blackRook1').className = "black4 piece rook";
            document.getElementById('blackRook1').className = "black5 piece rook";
            document.getElementById('blackRook1').className = "black6 piece rook";
            document.getElementById('blackRook1').className = "black7 piece rook";
            document.getElementById('blackRook1').className = "black8 piece rook";

            white1.src = "img/whiteRook.png";
            // first rook
            white2.src = "img/whiteRook.png";
            white3.src = "img/whiteRook.png";
            white4.src = "img/whiteRook.png";
            white5.src = "img/whiteRook.png";
            white6.src = "img/whiteRook.png";
            white7.src = "img/whiteRook.png";
            white8.src = "img/whiteRook.png";
            
            wid1.id = "whiteRook1";
            // first rook
            wid2.id = "whiteRook1";
            wid3.id = "whiteRook1";
            wid4.id = "whiteRook1";
            wid5.id = "whiteRook1";
            wid6.id = "whiteRook1";
            wid7.id = "whiteRook1";
            wid8.id = "whiteRook1";

            document.getElementById('whiteRook1').className = "white1 piece rook";
            // first rook
            document.getElementById('whiteRook1').className = "white2 piece rook";
            document.getElementById('whiteRook1').className = "white3 piece rook";
            document.getElementById('whiteRook1').className = "white4 piece rook";
            document.getElementById('whiteRook1').className = "white5 piece rook";
            document.getElementById('whiteRook1').className = "white6 piece rook";
            document.getElementById('whiteRook1').className = "white7 piece rook";
            document.getElementById('whiteRook1').className = "white8 piece rook";

            break;
            // need to do
        case 2:
            black1.src = "img/blackRook.png";
            black2.src = "img/blackRook.png";
            // first rook
            black3.src = "img/blackRook.png";
            black4.src = "img/blackRook.png";
            black5.src = "img/blackRook.png";
            black6.src = "img/blackRook.png";
            black7.src = "img/blackRook.png";
            black8.src = "img/blackRook.png";

            bid1.id = "blackRook1";
            bid2.id = "blackRook1";
            // first rook
            bid3.id = "blackRook1";
            bid4.id = "blackRook1";
            bid5.id = "blackRook1";
            bid6.id = "blackRook1";
            bid7.id = "blackRook1";
            bid8.id = "blackRook1";

            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('blackRook1').className = "black2 piece rook";
            // first rook
            document.getElementById('blackRook1').className = "black3 piece rook";
            document.getElementById('blackRook1').className = "black4 piece rook";
            document.getElementById('blackRook1').className = "black5 piece rook";
            document.getElementById('blackRook1').className = "black6 piece rook";
            document.getElementById('blackRook1').className = "black7 piece rook";
            document.getElementById('blackRook1').className = "black8 piece rook";

            white1.src = "img/whiteRook.png";
            white2.src = "img/whiteRook.png";
            // first rook
            white3.src = "img/whiteRook.png";
            white4.src = "img/whiteRook.png";
            white5.src = "img/whiteRook.png";
            white6.src = "img/whiteRook.png";
            white7.src = "img/whiteRook.png";
            white8.src = "img/whiteRook.png";

            wid1.id = "whiteRook1";
            wid2.id = "whiteRook1";
            // first rook
            wid3.id = "whiteRook1";
            wid4.id = "whiteRook1";
            wid5.id = "whiteRook1";
            wid6.id = "whiteRook1";
            wid7.id = "whiteRook1";
            wid8.id = "whiteRook1";

            document.getElementById('whiteRook1').className = "white1 piece rook";
            document.getElementById('whiteRook1').className = "white2 piece rook";
            // first rook
            document.getElementById('whiteRook1').className = "white3 piece rook";
            document.getElementById('whiteRook1').className = "white4 piece rook";
            document.getElementById('whiteRook1').className = "white5 piece rook";
            document.getElementById('whiteRook1').className = "white6 piece rook";
            document.getElementById('whiteRook1').className = "white7 piece rook";
            document.getElementById('whiteRook1').className = "white7 piece rook";
            
            break;
            // need to do
        case 3:
            black1.src = "img/blackRook.png";
            black2.src = "img/blackRook.png";
            black3.src = "img/blackRook.png";
            // first rook
            black4.src = "img/blackRook.png";
            black5.src = "img/blackRook.png";
            black6.src = "img/blackRook.png";
            black7.src = "img/blackRook.png";
            black8.src = "img/blackRook.png";

            bid1.id = "blackRook1";
            bid2.id = "blackRook1";
            bid3.id = "blackRook1";
            // first rook
            bid4.id = "blackRook1";
            bid5.id = "blackRook1";
            bid6.id = "blackRook1";
            bid7.id = "blackRook1";
            bid8.id = "blackRook1";
            
            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('blackRook1').className = "black2 piece rook";
            document.getElementById('blackRook1').className = "black3 piece rook";
            // first rook
            document.getElementById('blackRook1').className = "black4 piece rook";
            document.getElementById('blackRook1').className = "black5 piece rook";
            document.getElementById('blackRook1').className = "black6 piece rook";
            document.getElementById('blackRook1').className = "black7 piece rook";
            document.getElementById('blackRook1').className = "black8 piece rook";
            
            white1.src = "img/whiteRook.png";
            white2.src = "img/whiteRook.png";
            white3.src = "img/whiteRook.png";
            // first rook
            white4.src = "img/whiteRook.png";
            white5.src = "img/whiteRook.png";
            white6.src = "img/whiteRook.png";
            white7.src = "img/whiteRook.png";
            white8.src = "img/whiteRook.png";
            
            wid1.id = "whiteRook1";
            wid2.id = "whiteRook1";
            wid3.id = "whiteRook1";
            // first rook
            wid4.id = "whiteRook1";
            wid5.id = "whiteRook1";
            wid6.id = "whiteRook1";
            wid7.id = "whiteRook1";
            wid8.id = "whiteRook1";
            
            document.getElementById('whiteRook1').className = "white1 piece rook";
            document.getElementById('whiteRook1').className = "white2 piece rook";
            document.getElementById('whiteRook1').className = "white3 piece rook";
            // first rook
            document.getElementById('whiteRook1').className = "white4 piece rook";
            document.getElementById('whiteRook1').className = "white5 piece rook";
            document.getElementById('whiteRook1').className = "white6 piece rook";
            document.getElementById('whiteRook1').className = "white7 piece rook";
            document.getElementById('whiteRook1').className = "white8 piece rook";
            
            break;
            // need to do
        case 4:
            black1.src = "img/blackRook.png";
            black2.src = "img/blackRook.png";
            black3.src = "img/blackRook.png";
            black4.src = "img/blackRook.png";
            // first rook
            black5.src = "img/blackRook.png";
            black6.src = "img/blackRook.png";
            black7.src = "img/blackRook.png";
            black8.src = "img/blackRook.png";

            bid1.id = "blackRook1";
            bid2.id = "blackRook1";
            bid3.id = "blackRook1";
            bid4.id = "blackRook1";
            // first rook
            bid5.id = "blackRook1";
            bid6.id = "blackRook1";
            bid7.id = "blackRook1";
            bid8.id = "blackRook1";

            document.getElementById('blackRook1').className = "black1 piece rook";
            document.getElementById('blackRook1').className = "black2 piece rook";
            document.getElementById('blackRook1').className = "black3 piece rook";
            document.getElementById('blackRook1').className = "black4 piece rook";
            // first rook
            document.getElementById('blackRook1').className = "black5 piece rook";
            document.getElementById('blackRook1').className = "black6 piece rook";
            document.getElementById('blackRook1').className = "black7 piece rook";
            document.getElementById('blackRook1').className = "black8 piece rook";

            white1.src = "img/whiteRook.png";
            white2.src = "img/whiteRook.png";
            white3.src = "img/whiteRook.png";
            white4.src = "img/whiteRook.png";
            // first rook
            white5.src = "img/whiteRook.png";
            white6.src = "img/whiteRook.png";
            white7.src = "img/whiteRook.png";
            white8.src = "img/whiteRook.png";

            wid1.id = "whiteRook1";
            wid2.id = "whiteRook1";
            wid3.id = "whiteRook1";
            wid4.id = "whiteRook1";
            // first rook
            wid5.id = "whiteRook1";
            wid6.id = "whiteRook1";
            wid7.id = "whiteRook1";
            wid8.id = "whiteRook1";

            document.getElementById('whiteRook1').className = "white1 piece rook";
            document.getElementById('whiteRook1').className = "white2 piece rook";
            document.getElementById('whiteRook1').className = "white3 piece rook";
            document.getElementById('whiteRook1').className = "white4 piece rook";
            // first rook
            document.getElementById('whiteRook1').className = "white5 piece rook";
            document.getElementById('whiteRook1').className = "white6 piece rook";
            document.getElementById('whiteRook1').className = "white7 piece rook";
            document.getElementById('whiteRook1').className = "white8 piece rook";

            break;
            // need to do
        case 5:
            black6.src = "img/blackRook.png";

            bid6.id = "blackRook1";
            
            document.getElementById('blackRook1').className = "black1 piece rook";
            
            white6.src = "img/whiteRook.png";
            
            wid6.id = "whiteRook1";
            
            document.getElementById('whiteRook1').className = "white1 piece rook";
            
            break;
            // need to do
        case 6:
            black7.src = "img/blackRook.png";

            bid7.id = "blackRook1";
            
            document.getElementById('blackRook1').className = "black1 piece rook";
            
            white7.src = "img/whiteRook.png";
            
            wid7.id = "whiteRook1";
            
            document.getElementById('whiteRook1').className = "white1 piece rook";
            
            break;
            // need to do 
        case 7:
            black8.src = "img/blackRook.png";

            bid8.id = "blackRook1";
            
            document.getElementById('blackRook1').className = "black1 piece rook";
            
            white8.src = "img/whiteRook.png";
            
            wid8.id = "whiteRook1";
            
            document.getElementById('whiteRook1').className = "white1 piece rook";
            
            break;
        default:
            break;
    }
}

gameboard();