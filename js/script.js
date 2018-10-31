var imgs = [
	"img/lunbo/1.jpg",
	"img/lunbo/2.jpg",
	"img/lunbo/3.jpg",
	"img/lunbo/4.jpg",
	"img/lunbo/5.jpg"
];
var id = 1;
var img = document.getElementById("img");
var timer = setInterval(autoplay,1500);
var liNodes = document.getElementById("count").getElementsByTagName("li");
function autoplay(){
	if(id<5){
		img.src = imgs[id];
		for(var j = 0;j<liNodes.length;j++){
			liNodes[j].classList.remove("current");
		}
		liNodes[id].classList.add("current");
		id++;
	}else{
		for(var j = 0;j<liNodes.length;j++){
			liNodes[j].classList.remove("current");
		}
		liNodes[0].classList.add("current");
		img.src = "img/lunbo/1.jpg";
		id = 1;
	}
}
 
for(var i = 0;i<liNodes.length;i++){
	liNodes[i].index = i;
	liNodes[i].onmouseover = function(){
		clearInterval(timer);
		for(var j = 0;j<liNodes.length;j++){
			liNodes[j].classList.remove("current");
		}
		this.classList.add("current");
		id = this.index;
		img.src = imgs[this.index];
	};
	liNodes[i].onmouseout=function(){
		timer = setInterval(autoplay,1500);
	}
}