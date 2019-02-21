function loadHeader() {
	var req;
	var doc = "header.html";
	if(window.XMLHttpRequest){
		req=new XMLHttpRequest();
	}else{
		req= new ActiveObject("Microsoft.XMLHTTP");
	}
	req.onreadystatechange=function () {
		if (req.readyState==4) {
			document.querySelector(".header").innerHTML=req.responseText;
		}
	}
	req.open("GET",doc,true);
	req.send();
}

function loadFooter() {
	var req;
	var doc = "footer.html";
	if(window.XMLHttpRequest){
		req=new XMLHttpRequest();
	}else{
		req= new ActiveObject("Microsoft.XMLHTTP");
	}
	req.onreadystatechange=function () {
		if (req.readyState==4) {
			document.querySelector(".footer").innerHTML=req.responseText;
		}
	}
	req.open("GET",doc,true);
	req.send();
}