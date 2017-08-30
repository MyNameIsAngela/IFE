var shapeObj = function(){ //定义7种形状 shape 对象的类
	this.centerX;
	this.centerY;
	this.leftX;
	this.leftY;
	this.rightX;
	this.rightY;
	this.width;
	this.heigh;
}
shapeObj.prototype.init = function(){//初始化，画出每个形状
	this.centerX = mx+canWidth/2;
	this.centerY = my;

	this.leftX = this.centerX-2*unit;
	this.leftY = this.centerY;
	//this.rightX = this.centerX+2*unit;
	//this.rightY = this.centerY;
	this.width=4*unit;
	this.heigh=1*unit;
}
shapeObj.prototype.draw = function(){ //绘制到canvas上
	this.centerX = mx+canWidth/2;
	this.centerY = my;
	this.leftX = this.centerX-2*unit;
	this.leftY = this.centerY;
	//console.log(this.centerX,this.centerY);

	ctx1.save();
	//beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
	ctx1.beginPath();
	//ctx1.arc(200,200,100,0,Math.PI*2,true);//画圆的例子
	ctx1.fillRect(this.leftX, this.leftY,this.width,this.heigh);
	//ctx1.moveTo(this.leftX, this.leftY);
	//ctx1.lineTo(this.rightX, this.rightY);
	ctx1.fillStyle="#0000ff";//未着手成功
	ctx1.stroke();
	ctx1.restore();
}