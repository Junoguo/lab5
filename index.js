var numDiv = document.getElementById("num")
var numDisp = document.getElementById("numDisplay")
var answer = Math.round(Math.random()*100);
var score = 100;

document.getElementById("guess").addEventListener("click",
function(){
    //console.log("hi");
    //document.body.style.backgroundColor = "red";
    //console.log(numDiv.value+1,10+1);
    //console.log(parseInt("10")+1)
var realNum = parseInt(numDiv.value)    
    
if(realNum == answer){
    numDisp.innerHTML = "You are correct Score:"+score;
}else { 
    //numDisp.innerHTML = "You are wrong";
if(realNum >answer){
    numDisp.innerText = "too big";
    
} else if(realNum <answer){
    numDisp.innerText = "too small";
} 
   score-=1;
}   
});