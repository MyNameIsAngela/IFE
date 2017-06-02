

function varify(){	
	var check = document.getElementById("check");
	var message = document.getElementById("message");
	
	// 判断输入内容是否为空
	if(check.value ==""){
		check.style.border="2px solid red";
		check.style.color="red";
		message.innerHTML="姓名不能为空";
	}else{
		test(check.value);
	};

	// 判断输入长度是否正确


	// console.log(check);
	// document.getElementById("con").innerHTML="hello world11";
	// document.write("必填，长度为4～16个字符");
}