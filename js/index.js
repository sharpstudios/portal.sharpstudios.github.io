function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	$("#header_img").attr("src",profile.getImageUrl());
	$("#header_name").text(profile.getName());
	$("#g-signin2").css("display","none");
	$("#g-signout").css("display","block");
	console.log("Test");
}

function signOut() {
	gapi.auth2.getAuthInstance().signOut();
	$("#header_img").attr("src","https://i.stack.imgur.com/34AD2.jpg");
	$("#header_name").text("Please Sign In");
	$("#g-signin2").css("display","block");
	$("#g-signout").css("display","none");
	console.log("Signed Out");
}