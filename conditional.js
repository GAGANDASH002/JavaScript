var time = prompt("Hey whats the time");
if (time > 5 && time < 17) {
  alert("Good Morning");
} 
else if(time>12 && time<17){
  alert("Good Afternoon");
}
else if(time>17 && time<21){
    alert("Good Evening");
}
else{
    alert("Good Night");
}
