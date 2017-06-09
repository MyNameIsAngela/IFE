

function varify(){	
	var check = document.getElementById("text");
	var message = document.getElementById("message");
	
	// 判断输入内容是否为空
	if(check.value ==""){
		text.style.border="2px solid red";
		message.style.color="red";
		message.innerHTML="姓名不能为空";
	}else{
		test(text.value);
	};
}

// 判断输入长度是否正确
// 	每个英文字母、数字、英文符号长度为1
// 每个汉字，中文符号长度为2 
function test(strLen){
		
		var excn=/[^\x00-\xff]+/g;  // /g执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
		var exen=/\w+/g;  //至少大于1个 字母或数字
		//var exen=/[.+,\w+]/g;
		var cn=excn.exec(strLen);
		var en=exen.exec(strLen);

		console.log(cn);
		console.log(en);  
		//输入abcde123 en输出 ["abcde123", index: 0, input: "abcde123+"]
		if(cn==null){
			cn="";
		};
		if(en==null){
			en="";
		};
		

		var len=cn.toString().length*2+en.toString().length;
		if(len>3&&len<17){
			text.style.border="2px solid #90EE90";
			message.style.color="green";
			message.innerHTML="名称格式正确";
		}else{
			text.style.border="2px solid grey";
			message.style.color="grey";
			message.innerHTML="长度为4~16个字符";
		};
}
