function makeTitle(str) {
	 return str .split(" ")
		 					.map(function (w){return w[0].toUpperCase() + w.slice(1)})
		 					.join(" ") ;
}

makeTitle("jonathan gonzalez");
