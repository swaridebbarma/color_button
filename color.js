let red_button=document.getElementById("red");
red_button.onclick=function(){
    let content=document.getElementById("box");
    content.style.backgroundColor="red";
};
let yellow_button=document.getElementById("yellow");
yellow_button.onclick=function(){
    let content=document.getElementById("box");
    content.style.backgroundColor="yellow";
};
let green_button=document.getElementById("green");
green_button.addEventListener("click",function(){
    let content=document.getElementById("box");
    content.style.backgroundColor="green";  
});
let pink_button=document.getElementById("pink");
pink_button.onclick=function(){
    let content=document.getElementById("box");
    content.style.backgroundColor="pink";
};
let click_button=document.getElementById("click");
click_button.onclick=function(){
    let msg=document.getElementById("comment2")
    msg.style.color="white";
};
 

