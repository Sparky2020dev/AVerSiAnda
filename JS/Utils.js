/**
 * Funciones Login
 */

function Login() {
	var userForm=document.getElementById("user").value;
	var passForm=document.getElementById("pass").value;
	if (((userForm==userData)||(userForm==userAdmin))&&(passForm==passwordData)){
		if(userForm==userAdmin){
		window.location = 'Admin.html?username=' + userForm;	
		}	
		else{
		window.location = 'Home.html?username=' + userForm;
		}

	}
	else{
		document.getElementById("feedError").textContent="Error: Incorrect user or password";
		document.getElementById("divError").style.display = "block";
	}

}
/*
 * Funciones Index
 */

function loadIndex(){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var c = url.searchParams.get("username");
	console.log(c);
	document.getElementById("UserName").textContent="Bienvenido "+c;

	
}


