
console.log("Starting Logger...");

//printf like string formatting
//console.log("Title: %s, page: %d", title, page); 
//console.log(document); //you can log virtually any JavaScript object

    //adding a method to String built-in. 
String.prototype.startsWith = function(firstLetter) { 
     return firstLetter.toUpperCase() === this.charAt(0).toUpperCase() ? true : false; 
} 

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
                        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

var words = ['','Berkshire','Birmingham','Black Country','Bradford & W Yorks','Bristol', 
       	         'Cambridgeshire','Cornwall','Coventry & Warks','Cumbria','Derby','Devon','Dorset','Essex',
          	     'Gloucestershire','Hampshire','Hereford & Worcs', 
            	  'Humberside','Kent','Lancashire','Leeds','Leicester', 
                	'Lincolnshire','Liverpool','London','Manchester','Norfolk', 
                  'North Yorkshire','Northamptonshire','Northern Ireland', 
                  'Nottingham','Oxford','Shropshire','Somerset', 
                  'South Yorkshire','Stoke & Staffs','Suffolk','Surrey & Sussex','Tees','Tyne', 
                  'Wear','Wiltshire']; 
	
function getWordsStartingWithLetter(letter) { 
               
	var wordsWithLetter = []; 
  	var i, j, k; 
                
    //outer loop finds the first location that matches the letter 
    //inner loop uses that location position to loop to see if the next location matches, an so on 
    for(i = 0; i < words.length; i++){ 
    	if(words[i].startsWith(letter)){ //find the first location that matches the letter 
            for(j = 0; j < 9; j++) { 
//              if (words[(i+j)] && words[(i+j)].startsWith(letter)) { //find subsequent matches for that letter and check property exists.
                if (i+j !== words.length  && words[(i+j)].startsWith(letter)) { //find subsequent matches for that letter and check property exists.
                    wordsWithLetter.push(words[(i+j) % words.length]);  //modulo function used to loop back to beginning of words
                }else{ 
 	                break; 
                }                                       
             } 
        return wordsWithLetter; 
    	} 
     } 
           
   if(wordsWithLetter.length === 0) { 
       for (k = 0; k < letters.length; k++){ 
           if ( letters[k].toUpperCase() === letter.toUpperCase()){ 
              letter = letters[(k+1) % letters.length]; 
              return getWordsStartingWithLetter(letter); 
            } 
       } 
   }

 }
 
function getAvailableLetters() { 
    var availableLetters = {}; 
                
	for(var i = 0; i < letters.length; i++){ 
        availableLetters[letters[i]] = doAnyWordsBeginWithLetter(letters[i]); 
    } 
    return availableLetters;
}
        
function doAnyWordsBeginWithLetter (letter) { 
     for(var i = 0; i < words.length; i++){ 
         if(words[i].startsWith(letter)){
         	 return true; 
         }
     }
     return false; 
} 
 
 for(var i=0; i<letters.length; i++) {
	 console.log("Using " + letters[i] + " found words : "); 
	 var locations =  getWordsStartingWithLetter(letters[i]);
	 for (var j=0; j<locations.length; j++){
	 	console.log(locations[j] + ", ");
	 }
	 console.log("\n");		 
 }

