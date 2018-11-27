function loadPage(googleUser) {
	$("img_header_profilepic").attr("src",profile.getImageUrl());
	$("div_header_name").text(profile.getDisplayName());
}

function userSignOut() {
	signOut();
}

document.addEventListener("DOMContentLoaded",function (googleUser) {
	profile = googleUser.getBasicProfile();
	if (profile.getEmail() == "thenoahroger@gmail.com") {
		$("#container").css("display","block");
		loadPage(googleUser);
	}
	else {
		alert("Please contact Noah Roger to request permission to access these classified documents!");
		signOut();
		window.location = "https://portal.sherbernog.tk";
	}
});