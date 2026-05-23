const correctPassword = "28052007";

/* AUDIO */

const tapSound = document.getElementById("tapSound");
const dropSound = document.getElementById("dropSound");
const blowSound = document.getElementById("blowSound");
const bgMusic = document.getElementById("bgMusic");

/* TAP SOUND */

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        tapSound.currentTime = 0;
        tapSound.play();

    });

});

/* INPUT */

function addNumber(num){

    const input = document.getElementById("password");

    if(input.value.length < 8){

        input.value += num;

    }
}

function clearInput(){

    document.getElementById("password").value = "";

}

function backspace(){

    const input = document.getElementById("password");

    input.value = input.value.slice(0,-1);
}
const centerName =
document.getElementById("centerName");

centerName.style.animation =
"showCenterName 1s forwards";

/* CHECK */

function checkPassword(){

    const userPass =
    document.getElementById("password").value;

    if(userPass === correctPassword){

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("mainPage").style.display = "block";

        bgMusic.play();

        startEffects();

        setupCakeLayers();

    }else{

        document.getElementById("wrong").innerHTML =
        "Wrong DOB 😅";
    }
}

/* FLOAT ITEMS */

function startEffects(){

    const stars =
    document.getElementById("stars");

    const items =
    ["✨","💖","⭐","🌸","🎈"];

    for(let i=0;i<60;i++){

        const item =
        document.createElement("div");

        item.classList.add("star");

        item.innerHTML =
        items[Math.floor(Math.random()*items.length)];

        item.style.left =
        Math.random()*100 + "%";

        item.style.fontSize =
        12 + Math.random()*12 + "px";

        item.style.animationDelay =
        Math.random()*5 + "s";

        stars.appendChild(item);
    }
}

/* CAKE */

function playDrop(){

    dropSound.currentTime = 0;

    dropSound.play();
}

function setupCakeLayers(){

    const bottom =
    document.querySelector(".bottomCake");

    const middle =
    document.querySelector(".middleCake");

    const top =
    document.querySelector(".topCake");

    const candles =
    document.querySelector(".candles");

    const blowBtn =
    document.getElementById("blowBtn");

    /* BOTTOM */

    setTimeout(()=>{

        playDrop();

        bottom.classList.add("drop");

        setTimeout(()=>{

            bottom.classList.add("squish");

            setTimeout(()=>{

                bottom.classList.remove("squish");

            },320);

        },700);

    },400);

    /* MIDDLE */

    setTimeout(()=>{

        playDrop();

        middle.classList.add("drop");

        setTimeout(()=>{

            middle.classList.add("squish");

            bottom.classList.add("squish");

            setTimeout(()=>{

                middle.classList.remove("squish");

                bottom.classList.remove("squish");

            },320);

        },680);

    },1700);

    /* TOP */

    setTimeout(()=>{

        playDrop();

        top.classList.add("drop");

        setTimeout(()=>{

            top.classList.add("squish");

            middle.classList.add("squish");

            bottom.classList.add("squish");

            setTimeout(()=>{

                top.classList.remove("squish");

                middle.classList.remove("squish");

                bottom.classList.remove("squish");

            },320);

        },650);

    },2900);

    /* CANDLES */

    setTimeout(()=>{

        candles.style.opacity = "1";

        blowBtn.style.display = "block";

    },4000);
}

/* BLOW */

document
.getElementById("blowBtn")
.addEventListener("click",blowCandles);

function blowCandles(){

    blowSound.play();

    const flames =
    document.querySelectorAll(".flame");

    const candles =
    document.querySelectorAll(".candle");

    flames.forEach((flame,index)=>{

        flame.style.animation =
        "blowOut 0.4s forwards";

        setTimeout(()=>{

            createSmoke(candles[index]);

        },150);
    });

    document.getElementById("blowBtn").style.display =
    "none";

    setTimeout(()=>{

        const text =
        document.getElementById("birthdayText");

        text.style.opacity = "1";

        showPhotos();

    },700);
}

/* SMOKE */

function createSmoke(candle){

    for(let i=0;i<5;i++){

        const smoke =
        document.createElement("div");

        smoke.classList.add("smoke");

        smoke.style.left = "50%";

        smoke.style.animation =
        `smokeRise ${1 + Math.random()*0.5}s forwards`;

        smoke.style.animationDelay =
        `${i*0.08}s`;

        candle.appendChild(smoke);

        setTimeout(()=>{

            smoke.remove();

        },2000);
    }
}

/* PHOTOS */

function showPhotos(){

    const p1 =
    document.getElementById("photo1");

    const p2 =
    document.getElementById("photo2");

    const p3 =
    document.getElementById("photo3");

    const p4 =
    document.getElementById("photo4");

    if(window.innerWidth <= 600){

        p1.style.left = "3%";
        p1.style.top = "22%";
        p1.style.setProperty("--rot","-7deg");

        p2.style.right = "3%";
        p2.style.top = "22%";
        p2.style.setProperty("--rot","7deg");

        p3.style.left = "3%";
        p3.style.bottom = "5%";
        p3.style.setProperty("--rot","-4deg");

        p4.style.right = "3%";
        p4.style.bottom = "5%";
        p4.style.setProperty("--rot","4deg");

    }else{

        p1.style.left = "7%";
        p1.style.top = "18%";
        p1.style.setProperty("--rot","-10deg");

        p2.style.right = "7%";
        p2.style.top = "18%";
        p2.style.setProperty("--rot","10deg");

        p3.style.left = "10%";
        p3.style.bottom = "8%";
        p3.style.setProperty("--rot","-6deg");

        p4.style.right = "10%";
        p4.style.bottom = "8%";
        p4.style.setProperty("--rot","6deg");
    }

    p1.style.animation =
    "showPhoto 0.8s forwards";

    p2.style.animation =
    "showPhoto 0.8s forwards 0.2s";

    p3.style.animation =
    "showPhoto 0.8s forwards 0.4s";

    p4.style.animation =
    "showPhoto 0.8s forwards 0.6s";
}
/* =========================
SOUND TOGGLE
========================= */

let soundOn = true;

const soundToggle =
document.getElementById("soundToggle");

soundToggle.addEventListener("click",()=>{

    soundOn = !soundOn;

    if(soundOn){

        soundToggle.innerHTML = "🔊";

        bgMusic.muted = false;
        tapSound.muted = false;
        dropSound.muted = false;
        blowSound.muted = false;

    }else{

        soundToggle.innerHTML = "🔇";

        bgMusic.muted = true;
        tapSound.muted = true;
        dropSound.muted = true;
        blowSound.muted = true;
    }
});