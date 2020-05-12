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
		
			//console.log(res.value);
		let result = '';
		let a = '';
		
		
		debugger;
		if(Array.isArray(res.value)){
				//console.log(true);
			let arrayCount = Object.keys(res.value).length;

			for (i=0;i<arrayCount;i++){
				console.log(res.value[i]); //var i;
				//debugger;
				let object = `<div class=new-object><br />`;
					object += parseJSON(res.value[i]);
					object += '</div>'

					result += object;
					
			} //end for
		} else {
				//console.log("isArray: " + false);
			a += '<pre>'
	
			for (var key in res) {
				if (res.hasOwnProperty(key)) {
					a += `<span style='color: green;'>"${key}"</span>: "${res[key]}", <br />`
				}
			} //end for
		} //end if


		function parseJSON(obj) {
			var parsedData = '';
			for(var i in obj) {
				if (typeof obj[i] == 'object') {
					  parsedData += parseJSON(obj[i]);
					  
				}else {
					parsedData += '<div class="new-line">';
					parsedData += `<span class='item-${i}" "variable' style='color: green;'>"${i}"</span>: <span class='string'>"${obj[i]}",`;
					parsedData += '</div>';
					  
				}//end if
				  //parsedData += '</div>';
			}//end for
			  
			  return parsedData;
		}//end function
		
		a += '</pre>'
		result += a;
		document.getElementById('output').innerHTML = result  

	}
}



