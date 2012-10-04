$(document).ready(function(){
	$('#loading').hide();
	document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
	$('#fetchContacts').click(fetchContacts); 
}

function fetchContacts() {
	
	$('#fetchContacts').hide();
	$('#loading').show();
	$("#msg").text("tellement d'amis...");
	
	var fields = [ "displayname", "phoneNumbers" ];
	navigator.contacts.find(fields, onSuccess, onError);
}

function onSuccess(contacts) {
	$('#loading').hide();
	$("#msg").text('Sweeeeet! ' + contacts.length + ' contacts');
	
	for (var i=0; i<contacts.length; i++) {
		var contact = contacts[i];
		
		if(contact.displayName != '' 
			&& contact.phoneNumbers 
			&& contact.phoneNumbers.length > 0) {
			
			$("#list").append("<li>" + contact.displayName + " (" + anonymize(contact.phoneNumbers[0].value) + ")" +"</li>");
		}
	}
};

function onError(contactError) {
	$("#msg").text('oopsy!');
};

function anonymize(phoneNumber) {
	return phoneNumber.replace(/[0-9]{3}$/, "xxx");
}