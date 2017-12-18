//------What is this code for?----------------------
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
//--------------------------------------------------


$(document).ready(function() {
  var nameInput = $("#author-name");
  var authorList = $("tbody");
  var authorContainer = $(".author-container");
  
  getTasks();	

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getTasks() {
    $.get("/api/authors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }


  // Function for handling what happens when the task is completed
  function handleTaskComplete() {
  }
});

