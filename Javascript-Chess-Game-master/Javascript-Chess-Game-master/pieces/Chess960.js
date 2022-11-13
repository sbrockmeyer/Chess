// randomly place rook

const black1 = document.querySelector(".black1");
const id1 = document.getElementsByName("img").id;
let randnum = Math.floor(Math.random()*2);



const placingRandomRook = () =>{
    console.log(randnum);
    switch (randnum) {
        case 0:
            black1.src = "img/blackKnight.png";
            console.log(`i changed to kight`);
            // id1 = document.getElementById('black1').id1 = 'blackRook1';
            break;
        case 1:
            console.log(`i changed to something in 1`)
            break;
        default:
            break;
    }
}

black1.addEventListener("load", () =>{
    // console.log(randnum);
    placingRandomRook();
});

// console.log(randnum);
