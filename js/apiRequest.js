var apiRequest = (function(){
	
	var getData = function(url, done){

		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function() {
			
			if (this.readyState == 4) {

				if(this.status == 200){
					var data = JSON.parse(this.responseText);
					if(typeof done === 'function'){
						done(data);
					}
				}else{
					console.log(this.statusText);
				}
			}
		}; 

		xhttp.open("GET", url, true);
		xhttp.send();
	}

	var postData = function(url, data, done, err){

		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			
			if (this.readyState == 4){

				if(this.status == 200){
					var data = JSON.parse(this.responseText);
					if(typeof done === 'function'){
						done(data);
					}
				}else{
					var data = JSON.parse(this.responseText)
					
					if(typeof err === 'function'){
						err(data);
					}
				}
			}	
		}; 

		request.open('POST', url, true);
		request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		request.send(JSON.stringify(data));
	}

	return {
		getData: getData,
		postData: postData
	}

})();


