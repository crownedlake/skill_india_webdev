$(document).ready(function(){

	window.setInterval(function(){
  var d= new Date();
  var hour= d.getHours();
  var sec=d.getSeconds();
  var min=d.getMinutes();
  var time= "Current time: "+hour + ":"+min+":"+sec;
	$("#currTime").text(time);
}, 1000);

       $(".containerloader").fadeOut(2000);
       $("#rest").delay(2500).fadeIn('show');

})
