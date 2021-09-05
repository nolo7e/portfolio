let btn_flash = document.getElementById('flash');
let btn_piano = document.getElementById('piano');
let btn_closeF = document.getElementById('closeF');
let btn_closeP = document.getElementById('closeP');

btn_flash.addEventListener('click',function (){
   toggle();
   toggleF();
   console.log('flash');
});

btn_piano.addEventListener('click',function (){
    toggle();
    toggleP();
    console.log('piano');
});

btn_closeF.addEventListener('click',function (){
    toggle();
    toggleF();
    console.log('closeF');
});
btn_closeP.addEventListener('click',function (){
    toggle();
    toggleP();
    console.log('closeP');
});

function toggle(){
    let blur = document.getElementById("whole-world");
    blur.classList.toggle('active');
}
function toggleF(){
    let pop_flash = document.getElementById("popup-flash");
    pop_flash.classList.toggle('active');
}
function toggleP(){
    let pop_piano = document.getElementById("popup-piano");
    pop_piano.classList.toggle('active');
}