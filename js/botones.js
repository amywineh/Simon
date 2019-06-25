/**
 * This JavaScript function always returns a random 
 * number between min and max (both included)
 * 
 * @url https://www.w3schools.com/js/js_random.asp
 * 
 * @param min Number min  random 
 * @param max Number max random
 * @returns int Random Number
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.getElementById('boton0').onclick=function(){
	this.style.opacity='1';
	var objBoton = document.getElementById('boton0');
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	setTimeout(function(){
		objBoton.style.opacity='0.2';;
	},500);
}

document.getElementById('boton1').onclick=function(){
	this.style.opacity='1';
	var objBoton = document.getElementById('boton1');
	var objAudio = document.getElementById('audioBoton1');
	objAudio.play();
	setTimeout(function(){
		objBoton.style.opacity='0.2';;
	},500);
}

document.getElementById('boton2').onclick=function(){
	this.style.opacity='1';
	var objBoton = document.getElementById('boton2');
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	setTimeout(function(){
		objBoton.style.opacity='0.2';;
	},500);
}
document.getElementById('boton3').onclick=function(){
	this.style.opacity='1';
	var objBoton = document.getElementById('boton3');
	var objAudio = document.getElementById('audioBoton3');
	objAudio.play();
	setTimeout(function(){
		objBoton.style.opacity='0.2';;
	},500);
}