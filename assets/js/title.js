var message = "MrEzer | Главная";
var message = message+" ";
i="0";
var temptitle="";
var speed="200";
function titler() {
if (!document.all&&!document.getElementById) return;
document.title=temptitle+message.charAt(i);
temptitle=temptitle+message.charAt(i);
i++;
if(i==message.length) {
i="0";
temptitle="";
}
setTimeout("titler()",speed);
}
window.onload=titler;
