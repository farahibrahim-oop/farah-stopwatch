
let Interval;
let second=0
let tens=0
let min=0
let OutputSecond = document.getElementById('second');
let OutputMin = document.getElementById('min');
let OutputTens = document.getElementById('tens');
let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let buttonReset = document.getElementById('reset');
buttonStart.addEventListener('click' ,()=>{

  Interval=setInterval(startTimer, 10);

});



buttonReset.addEventListener('click' , () => {
  clearInterval(Interval);
  tens=0;
  second=0;
  min=0;
  OutputTens.innerHTML='00';
  OutputSecond.innerHTML='00';
  OutputMin.innerHTML='00';
});
buttonStop.addEventListener('click' , ()=> {
  clearInterval(Interval);

 
});
function startTimer(){
    tens++;
    if (tens<=9){
        OutputTens.innerHTML="0" + tens;
    }
    if (tens>9){
        OutputTens.innerHTML= tens;
    }
    if(tens > 99){
        second++;
       
        tens = 0;
       
    }

    if(second > 9){
        OutputSecond.innerHTML = second;
    }
    if (second<=9){
      OutputSecond.innerHTML="0" + second;
  }
  if(second > 9){
    OutputSecond.innerHTML = second;
}
  if (second > 59) {
    min++;
    OutputMin.innerHTML = "0" +min;
    second = 0;
    OutputSecond.innerHTML = "0" + 0;
}

  if (min > 9) {
   OutputMin.innerHTML = min;
}
}

