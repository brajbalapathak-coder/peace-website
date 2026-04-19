// MAP
function showMap(text){
document.getElementById("mapInfo").innerText=text;
}

// QUIZ
const quiz=[
{q:"Peace means?",a:["War","Harmony","Fight"],c:1},
{q:"Start peace with?",a:["Kindness","Anger","Violence"],c:0}
];
let i=0,score=0;

function load(){
if(!document.getElementById("question")) return;
document.getElementById("question").innerText=quiz[i].q;
let html="";
quiz[i].a.forEach((x,index)=>{
html+=`<button onclick="check(${index})">${x}</button>`;
});
document.getElementById("options").innerHTML=html;
}

function check(ans){
if(ans===quiz[i].c) score++;
i++;
document.getElementById("bar").style.width=(i/quiz.length)*100+"%";
if(i<quiz.length) load();
else document.getElementById("result").innerText="Score: "+score;
}
load();

// GAME
function startGame(){
let score=0;
let gameArea=document.getElementById("gameArea");
gameArea.innerHTML="";

let game=setInterval(()=>{
let ball=document.createElement("div");
ball.style.width="40px";
ball.style.height="40px";
ball.style.borderRadius="50%";
ball.style.background=Math.random()>0.5?"green":"red";
ball.style.position="absolute";
ball.style.left=Math.random()*90+"%";
ball.style.top="0px";

gameArea.appendChild(ball);

let fall=setInterval(()=>{
ball.style.top=(ball.offsetTop+5)+"px";
if(ball.offsetTop>160){
ball.remove();
clearInterval(fall);
}
},30);

ball.onclick=()=>{
score += ball.style.background=="green"?2:-1;
document.getElementById("gscore").innerText=score;
ball.remove();
};
},800);

setTimeout(()=>clearInterval(game),15000);
}

function downloadPDF(){
const { jsPDF } = window.jspdf;
let doc = new jsPDF();

let name=document.getElementById("username").value;
if(name==""){alert("Enter name");return;}

doc.setFontSize(22);
doc.text("Certificate of Peace",60,40);
doc.text(name,80,80);
doc.text("For Promoting Global Harmony",40,120);

doc.save("certificate.pdf");
}

// FORM
function submitForm(e){
e.preventDefault();
document.getElementById("msg").innerText="Thanks!";
}

// CHATBOT
function reply(){
let msg=document.getElementById("userMsg").value;
let res="Peace starts with kindness.";
if(msg.includes("how")) res="Help others and spread love.";
if(msg.includes("why")) res="Because peace builds a better world.";
document.getElementById("chatbox").innerHTML+=
"<p>You:"+msg+"</p><p>Bot:"+res+"</p>";
}

window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
let top=el.getBoundingClientRect().top;
if(top<window.innerHeight-50){
el.classList.add("active");
}
});
});