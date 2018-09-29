var dados;
var cones = []; 

function Cone(nome, apelido,img, pontuacao, acumulado){
	_this = this; 
	_this.nome = nome;
	_this.apelido = apelido;
	_this.img = "images/cones/" + img;
	_this.pontuacao = pontuacao;
	_this.acumulado = acumulado;
}

function getDados(callback){
	var url = "https://raw.githubusercontent.com/erickLFLopes/ConeBoard/a0110d58cc6b73728bd7ac09aa8be347d9999b35/data/data.json";
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			dados = JSON.parse(this.responseText);
			if(typeof callback === 'function'){
				callback();
			}
		}
	}; 
	
	xhttp.open("GET", url, true);
	xhttp.send();
}


function getCones(arr){
	
	for(var i = 0; i < dados.cones.length; i++){
		arr.push(new Cone(
			dados.cones[i].nome,
			dados.cones[i].apelido,
			dados.cones[i].img,
			dados.cones[i].pontuacao,
			dados.cones[i].pontuacao
		))
	}
}
// getDados();

function coneBoardViewModel(){
	_this = this; 
	

	this.cones = ko.observableArray([]);
	getDados(function(){
		for(var i = 0; i < dados.cones.length; i++){
			_this.cones.push(new Cone(
				dados.cones[i].nome,
				dados.cones[i].apelido,
				dados.cones[i].img,
				dados.cones[i].pontuacao,
				dados.cones[i].pontuacao
			))
		}
	});
	this.maxPontuacao = 10;
	
	this.getPorcentagem = function(p){
		if(!p) {
			console.warn('Pontuacao indefinida para calculo!'); 
			return "0%";
		}
		return ((p/_this.maxPontuacao)*100)+'%';;
	}
/*	_this.maxPontuacao = ko.computed(function(){
		var max = 0; 
		for(var i = 0; i < _this.cones().length; i++){
			max = max > _this.cones().pontuacao?max:_this.cones().pontuacao; 
		}
		return max; 
	});*/
}
ko.applyBindings(new coneBoardViewModel());