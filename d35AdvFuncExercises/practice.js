const abc = {
	salute: "",
	greet: function() {
	this.salute = "Hello";
	console.log(this.salute); //Hello
	const setFrench = (newSalute) => this.salute = newSalute;

	setFrench("Bonjour");
	console.log(this.salute); //Bonjour??
	}
	};
	abc.greet(); //Hello Hello ???
	