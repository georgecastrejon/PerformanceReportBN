setInterval(function() {
  var title = document.querySelector('#dynamic_title');
  var currentTitle = title.innerText;
  var animatedTitle = currentTitle.substr(1) + currentTitle.substr(0, 1);
  title.innerText = animatedTitle;
}, 200);

$(function() {
  $(".datepicker").datepicker({
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    showOn: "button",
    buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
    buttonImageOnly: true,
    buttonText: "Select date"
  });
});

function handleFileSelect(event) {
    var fileInput = event.target;
    var fileName = fileInput.files[0].name;
    
    var textField = document.getElementById('bannercli');
    textField.value = fileName;
  }

$(function() {
  $("#responsable").on("focus", function() {
    $(this).css("background-color", "rgba(0, 0, 0, 0)");
  });
  $("#responsable").on("blur", function() {
    $(this).css("background-color", "");
  });
});
