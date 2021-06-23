
window.onload=function(){
	let userKanji = document.querySelector('.kanji');
	let english = document.querySelector('.meaning');
	let strokeCount = document.querySelector('.stroke');
	let kunYomi = document.querySelector('.kun');
	let onYomi = document.querySelector('.on');	
	function getKanji(){
		
		
		
			

		let char = document.querySelector('.userInput').value;	
	fetch(`https://kanjiapi.dev/v1/kanji/`+char)
	    .then(response => response.json())
	    .then(data =>{
			
		
				userKanji.innerHTML = data.kanji;
				english.innerHTML = `Meanings: ${data.meanings}`;
				strokeCount.innerHTML = `Strokes: ${data.stroke_count}`;
			
				if(data.kun_readings.length === 0){
					kunYomi.innerHTML = 'Kun-yomi: none' 
				
				}else{
					kunYomi.innerHTML = `Kun-yomi:  ${data.kun_readings}`;
				}
				
			
				if(data.on_readings.length === 0){
					onYomi.innerHTML = 'Kun-yomi: none';
				}else{
					onYomi.innerHTML = `Kun-yomi: ${data.on_readings}`;
				}
			
		
			

			
			
	    })
		
}		
document.querySelector('.btn').addEventListener('click', function(){
	getKanji()
})




}	












