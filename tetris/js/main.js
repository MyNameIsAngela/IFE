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

	bgPic.src = "background.jpeg";
	canWidth = can1.width;
	canHeigh = can1.height;

	shape = new shapeObj();//画下落的七种形状
	shape.init();
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	// console.log("loop");
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	// console.log(deltaTime);
	drawBackground();

}