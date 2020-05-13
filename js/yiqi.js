// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("男人需要卑微！不需要地位！");
	   }else if(Dianji==2){
		   		alert("身体不长衣服不买！");
		   		
	   }else if(Dianji==3){
		   		alert("我的东西都是我老婆的！");
		   		
	   }else if(Dianji==4){
		   		alert("我家的自热火锅 方便面还有🐄🐏🐖🐎");
		   		
	  }else if(Dianji==5){
		   		alert("给你买一辈子滴草莓🍓");
	  }else if(Dianji==6){
		   		alert("陪着你开心 陪着你难过💚");
	  }else if(Dianji==7){
		   		alert("我爱你老婆 永远当你滴labour💚🍓");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("我爱你老婆🍓💚 我想让你成为最幸福的人 我次胖胖你次瘦瘦 陪着你不论你开心还是难过 记得嫁给我！我们要一起享受余生");
	}
	

}