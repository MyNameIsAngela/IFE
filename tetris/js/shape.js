var shapeObj = function(){ //定义海葵anemone 对象的类
this.centerX;
this.centerY;
this.leftX;
this.leftY;
this.rightX;
this.rightY;
}
shapeObj.prototype.init = function(){//初始化，确定每一个海葵的位置  此处从底部画上去
	centerX = canWidth/2;
	centerY = 0;

	for(var i = 0; i < this.num; i++){
		this.x[i] = i * 10 + Math.random() * 20; //Math.random()返回 [0,1）之间的值
		this.len[i] = 200 + Math.random * 50;
	}
	console.log("ane");
}
shapeObj.prototype.draw = function(){ //绘制到canvas上

}