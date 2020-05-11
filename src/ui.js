let ui = {
	setDisplayName: (name) => {
	  document.getElementById('displayName').innerHTML = name
	},
  
	setProfilePicture: (imgBlob) => {
	  document
		.getElementById('profileImg')
		.setAttribute('src', URL.createObjectURL(imgBlob))
	},
  
	updateOutput: (res) => {
		
		let output = '<pre>'
		
			for (var key in res) {
				if (res.hasOwnProperty(key)) {
				
				let arrayCount = Object.keys(res).length;
				console.log(arrayCount);
				
				output += `<span id='item-${key}' style='color: green;'>"${key}"</span>: "${res[key]}", <br />`
					
				}
			}
		
		output += '</pre>'
	  	document.getElementById('output').innerHTML = output

	}
}










/*
		var result = parseJSON(res);

		function parseJSON(obj) {
			var parsedData = '';
			for(var i in obj) {
				if (typeof obj[i] == 'object') {
					parsedData += parseJSON(obj[i]);
					
				}else {
					parsedData += `<span style='color: green;'>"${i}"</span>: "${obj[i]}", <br />`;
					
				}//end if
				//parsedData += '\n';
			}//end for
			
			return parsedData;
		}//end function

		document.getElementById('output').innerHTML = result
*/



/*
		
			}




		function parseJSON(obj) {
			var parsedData = '';
			for(var i in obj) {
				if (typeof obj[i] == 'object') {
					parsedData += parseJSON(obj[i]);
					
				}else {
					parsedData += `<span style='color: green;'>"${i}"</span>: "${obj[i]}", <br />`;
					
				}//end if
				//parsedData += '\n';
			}//end for
			
			return parsedData;
		}//end function

		document.getElementById('message').innerHTML = output
		document.getElementById('output').innerHTML = result
/*		


/*
		let output = '<pre>'
		
			for (var key in res) {
				if (res.hasOwnProperty(key)) {
				output += `<span style='color: green;'>"${key}"</span>: "${res[key]}", <br />`
				}
			}
		output += '</pre>'
	  	document.getElementById('output').innerHTML = output
	  	console.log(res);*/
/*


/*
		var result = parseJSON(res);

		
		let arrayCount = Object.keys(res).length;
		console.log(arrayCount);
			if (arrayCount>1){
				//console.log('I found ' + arrayCount + ' objects');
				/*
				for(let i=0;i<arrayCount;i++){
					
					let output = '<pre>'
		
						for (var key in res) {
							if (res.hasOwnProperty(key)) {
							output += `<span style='color: green;'>"${key}"</span>: "${res[key]}", <br />`
							}
						}
					output += '</pre>'
					console.log('Item ' + i + ' processed');
					console.log(output);
		
*/