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
		
		
		console.log(res.value);
		let result = '';
		let a = '';
		//debugger;

		if(Array.isArray(res.value)){
			console.log(true);


			let arrayCount = Object.keys(res.value).length;
		
			// this part is OK
			
			if(arrayCount>1){
				console.log(arrayCount);
				for (i=0;i<arrayCount;i++){
				
					//console.log(res.value[i]);
					var i;
								
					let object = i;
					console.log(object);
					
					object += `<pre id="object"${i} style='color: black;'>"${i}"</span>: "${i}", <br />`;
					object += parseJSON(res.value[i]);
					object += '</pre>'

					console.log(object);
					result += object;
					
					//debugger;
				}
			} else {
				console.log('bare en');
			}
			
		} else {
			console.log("isArray: " + false);

			a += '<pre>'
	
			for (var key in res) {
				if (res.hasOwnProperty(key)) {
				a += `<span style='color: green;'>"${key}"</span>: "${res[key]}", <br />`
				}
			}

			//debugger;
			
		}


		function parseJSON(obj) {
			var parsedData = '';
			for(var i in obj) {
				if (typeof obj[i] == 'object') {
					  parsedData += parseJSON(obj[i]);
					  
				}else {
					  parsedData += `<span class='item-${i}' style='color: green;'>"${i}"</span>: "${obj[i]}", <br />`;
					  
				}//end if
				  //parsedData += '\n';
			}//end for
			  
			  return parsedData;
		}//end function
		
		
		//result += object
		a += '</pre>'
		result += a;
		document.getElementById('output').innerHTML = result  

	}
}


