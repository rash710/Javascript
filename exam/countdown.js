 const startinghousrs = 3;
 let time = startinghousrs * 3600;

 const timerstart = document.getElementById('countdown');

 setInterval(updatecountdown, 1000);

 function updatecountdown(){
     const hours = Math.floor(time / 3600);
     const minutes = Math.floor((time % 3600) / 60);
     const seconds = time % 60;

     timerstart.innerHTML = `${hours}: ${minutes}: ${seconds}`;
     time--;

     if(hours == 0 && minutes == 0 && seconds == 0){
        window.close();
     }
 }

 window.onload = function(){

    document.getElementById('two').style.display = "none";
 }

 function previous(){
    document.getElementById('one').style.display = "block";
    document.getElementById('two').style.display = "none";
 }
 function next(){

    document.getElementById('one').style.display = "none";
    document.getElementById('two').style.display = "block";

 }

// let time = 10;

// const timerstart = document.getElementById('countdown');

// setInterval(updatecountdown, 1000);

// function updatecountdown(){
   
//     const seconds = time % 60;

//     timerstart.innerHTML = `${seconds}`;
//     time--;

//     if(seconds == 0){

//         window.close();
//     }
// }
