function Cone(nome, apelido,img, pontuacao, acumulado){
	_this = this; 
	_this.nome = nome;
	_this.apelido = apelido;
	_this.img = "images/cones/" + img;
	_this.pontuacao = pontuacao;
	_this.acumulado = acumulado;

	_this.getPorcentagem = function(){
		var out = 
		conesole.log(out);
		return "100%";
	}
}

function coneBoardViewModel(){
	_this = this; 
	
	_this.cones = ko.observableArray([
		new Cone('Érick','Conerick','conerick.jpg',	'10','55'),
		new Cone('Jacques','Jacone','jacone.png','3','23'),
		new Cone('Fernando','Conando','conando.png','3','23'),
		new Cone('Patzdorf','PatzCone','patzcone.jpg',null,'23'),
		new Cone('Orlando','OrlanCone','orlancone.jpg','3','23'),
		new Cone('Robledo','CastorCone','castorcone.jpg','3','23'),
		new Cone('Bernardo','bernacone','bernacone.jpg','3','23'),
	]);
	_this.maxPontuacao = 10;
	
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