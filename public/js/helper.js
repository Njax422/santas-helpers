
// When the user clicks any button, run addTask.
$("button").click(addTask);

// Add a listener to the document.
$(document).on("click", "#delete", removeTask);

// When a user presses any key on their keyboard,
$("input").keypress(function(event) {

  // listen to see that key was "enter."
  if (event.which === 13) {

    // If so, run addTask.
    addTask();
  }
});

// Function to add a task.
function addTask() {

  // Get the content (value) of the input box.
  var task = $("#new-task").val();

  // Append that content to the #tasks div.
  // Nest our content in another div in another div
  // with a span containing an X.
  // User can delete the task whenever the user clicks the X.
  $("#tasks").append("<div>" + task + "<span id='delete'>X</span></div>");

  // Clear the content of the input box.
  $("#new-task").val("");
}

// Function to remove a task.
function removeTask() {

  // Grab the closest div to the element that was clicked and remove it.
  // (In this case, the closest element is the one that's encapsulating it.)
  $(this).closest("div").remove();
}

//same thing  as above only with gifts this time
// When the user clicks any button, run addGift.
$("button").click(addGift);

// Add a listener to the document.
$(document).on("click", "#delete", removeGift);

// When a user presses any key on their keyboard,
$("input").keypress(function(event) {

  // listen to see that key was "enter."
  if (event.which === 13) {

    // If so, run addGift.
    addTask();
  }
});


function addGift(){

	var gift = $("#new-gift").val();

	$("#gifts").append("<div>" + gift + "<span id='delete'>X</span><div>");

	$("#new-gift").val("");
}

function removeGift() {
$(this).closest("div").remove();	
}