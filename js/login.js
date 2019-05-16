var loginSystem = (function(apiRequest, urlRegister){

	
	

	var login = function(e){
		e.preventDefault();
		var email = this.querySelector('input[name=email]').value;
		var pass  = this.querySelector('input[name=password]').value;

		var data = { "user": {"email": email, "password":pass}}
		
		var url = urlRegister.urlBase + urlRegister.getLogin;
		apiRequest.postData(url, data, function(data){
			console.log(data);
		},  function(err){
			console.log(err);
		});

	}

	var LoginErr = function(){

	}

	var app = new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue!',
	    logged: false
	  }
	})

	var loginForm = document.querySelector("#login");

	addEvents = function(){
		loginForm.addEventListener('submit', login);
	}

	init = function(){
		addEvents();
	}

	init();
	//apiRequest.postData();

})(apiRequest, urlRegister);

