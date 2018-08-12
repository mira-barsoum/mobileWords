 const keyPad= [[],
	 []			,		["A","B","C"],	["D","E","F"],
	 ["G","H","I"],		["J","K","L"],	["M","N","O"],
	 ["P","Q","R","S"],	["T","U","V"],	["W","X","Y","Z"]
	 ];

	function mobileWords( numList)
	 {
	 	// Precheck
	 	if(!Array.isArray(numList) )
 		{
			console.log("Invalid Input Array" );
			return [] ;		
		}	

	 	if(numList.length ==0  )
 		 	return [] ;		
		 	
	 	let x;
		
		for (x of numList) {
			if (2 > x || x > 9 ) 
			{
				console.log("Invalid Input: " + x);
				return [] ;		
			}
		     
		}

		//Integers to character lists
		 let charList = Array.from(numList, i => Array.from(keyPad[i]).reverse());
		 charList.push(charList.pop().reverse() );  
		
		/////////////////////////////////
		let wordList = [];	
		let stack = []; //Token stack
		let current = ""; //current token

		while (current!= undefined) {
		    
		    level = current.length;
		    //If word is compelete (last charcter of word is added) , add to wordlist - Otherwise, add to token stack
		    let lst = (level == charList.length-1)? wordList: stack;
		    for (let i of charList[level]) 
		       lst.push(current+i);
		    
		    current = stack.pop(); //get next token
		}
		 /////////////////////////////////////
		console.log(wordList); 
		return wordList;
				 
		}	 
		mobileWords([2,5]);
	 