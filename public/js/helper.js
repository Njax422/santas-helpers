var childInfoArray = [];
// var key = "";

var childName = "";
var childAge = 0;
var childTask = "";
var childGift = "";


function addchildInfo(name,age,task, gift){
	childInfoArray.push(task);
	console.log (childInfoArray)
}

function getchildInfo(){
	var childInfoStr = "";
	for(var i=0;i<childInfoArray.length;i++) {
		childInfoStr=childInfoStr+childInfoArray[i]+",";
	}


//------On click function to authenticate childs code on homepage--------
var btn = document.querySelector('submitChildCode');

function authenticateChildCode(childCode) {
  	console.log("Insert code to authenticate child code here.")
};

btn.onclick = function() {
	authenticateChildCode();
};