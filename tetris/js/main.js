var can1;
var ctx1;
var can2;
var ctx2;
var canWidth;
var canHeigh;

var lastTime;//上一帧执行时间
var deltaTime;//两帧间隔时间差

var bgPic = new Image();//存储背景图片

var shape;//俄罗斯方块的各种形状
var unit = 30;

var mx=0;//定义按键后坐标偏移的单位距离
var my=0;
var keyboard;//定义按键的类型
var speed=1000;//定义下降速度，初始值为1000，即下降时间间隔为1秒

document.body.onload = game;
function game(){
	// console.log("onload");
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();

}

function init(){
	can1 = document.getElementById('canvas1');
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById('canvas2');
	ctx2 = can2.getContext('2d');

	window.addEventListener('keydown', onKeydown, false); //捕捉鼠标的动作
	//window.addEventListener('keypress', onKeydown, true); //捕捉鼠标的动作
	//window.addEventListener('keyup', onKeydown, true); //捕捉鼠标的动作

	bgPic.src = "background.jpeg";
	canWidth = can1.width;
	canHeigh = can1.height;

	shape = new shapeObj();//画下落的七种形状
	shape.init();

	mx = 0;
	my = 0;
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	// console.log("loop");
	var now = Date.now();
	deltaTime = deltaTime + now - lastTime;
	lastTime = now;

	// console.log(deltaTime);
	//drawBackground();
	if(deltaTime>1000){
		deltaTime=0;
		my = my+unit;
	}
	ctx1.clearRect(0,0,canWidth,canHeigh);//将前一帧的内容清空，绘制新的
	shape.draw(mx,my);

}

function onKeydown(e){
	if(event.keyCode==37 || event.keyCode==65){//left
		mx = mx-unit;
		console.log("onKeydown"+mx,my);
	}
	if(event.keyCode==39 || event.keyCode==68){//right
		mx = mx+unit;
		console.log(mx,my);
	}
	if(event.keyCode==38 || event.keyCode==87){//up
		my = my-unit;
		console.log(mx,my);
	}
	if(event.keyCode==40 || event.keyCode==83){//down
		my = my+unit;
		console.log(mx,my);
	}
}


