  const startinghousrs = 3;
  let time = startinghousrs * 3600;

 setInterval(updatecountdown, 1000);

 function updatecountdown(){
     const H = Math.floor(time / 3600);
     const M = Math.floor((time % 3600) / 60);
     const S = time % 60;

     document.getElementById('countdown').innerHTML = `${H}: ${M}: ${S}`;
     time--;

     if(H == 0 && M == 0 && S == 0){
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
