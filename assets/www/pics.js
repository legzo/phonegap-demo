$(document).ready(function(){
   document.addEventListener("deviceready", onDeviceReady, false);
 });

function onDeviceReady() {
	$('#takeAPic').click(takeAPic); 
}

function takeAPic() {
	$('#takeAPic').hide();
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
	    destinationType: Camera.DestinationType.DATA_URL
	 });
}

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
    
    $("#msg").text('Looking good!');
}

function onFail(message) {
	 $("#msg").text('Darn!');
}