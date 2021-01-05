const txtElement = ['Mahasiswa'];
let count = 0;
let txtIndex =0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.lenght){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.lenght == currentTxt.lenght)

	setTimeout(ngetik, 500);

})();