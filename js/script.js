function openCloseMenu() {
	const menuItems = document.getElementsByClassName("nav-item");
	console.log(menuItems[0].style.display);
	if(menuItems[0].style.display == "none" || menuItems[0].style.display == ""){
		console.log("hi1");
		document.getElementById("menu-icon").style.display = "hidden";
		
		for (let i = 0; i < menuItems.length; i++) {
			menuItems[i].style.display = "contents";
		}
		console.log("hi2");
	}
	else{
		for (let i = 0; i < menuItems.length; i++) {
			menuItems[i].style.display = "none";
		}
		console.log("hi3");
	}
			
// document.getElementById(id)
}