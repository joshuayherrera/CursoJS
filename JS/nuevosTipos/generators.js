//Defino un array cualquiera
let arr = [1,2,3,4,5];

//Redefino el iterador
arr[Symbol.iterator] = function* (){
	for(let valor of this.values()){
		yield `El valor es ${valor}`; //Devuelve el elemento concatenado a un string
	}
}

//Recorro el array (ejecuta el iterador sobreescrito)
for(let elem of arr){
	console.log(elem);
}