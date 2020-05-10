
let globalVariable

let ui = {
	setDisplayName: (name) => {
		document.getElementById("displayName").innerHTML = name;
	},

	setProfilePicture: (imgBlob) => {
		document.getElementById("profileImg").setAttribute("src", URL.createObjectURL(imgBlob));
	},

	updateOutput: (res) => {
		globalVariable = JSON.stringify(res)
		document.getElementById("output").innerHTML = globalVariable;
		//return result;
	},
};



ui.updateOutput();
console.log(globalVariable);


/* drit i denne delen her, experimentering
let text = '{"employees":[' +
'{"@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity","businessPhones": [],"displayName": "Admin Cloudlink","givenName": null,"jobTitle": null,"mail": "admin@cloudlink.ai","mobilePhone": null,"officeLocation": null,"preferredLanguage": "en-GB","surname": null,"userPrincipalName": "admin@cloudlink.ai","id": "c4b7c903-1180-479c-8591-9759ffc979b0" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
obj.employees[0]@odata.context + " " + obj.employees[0].businessPhones + " " + obj.employees[0].displayName + " " + obj.employees[0].givenName +" " + obj.employees[0].jobTitle + " " + obj.employees[0].mail + " " + obj.employees[0].mobilePhone + " " + obj.employees[0].officeLocation + " " + obj.employees[0].preferredLanguage + " " + obj.employees[0].surname + " " + obj.employees[0].userPrincipalName + " " + obj.employees[0].id + " ";

{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity","businessPhones": [],"displayName": "Admin Cloudlink","givenName": null,"jobTitle": null,"mail": "admin@cloudlink.ai","mobilePhone": null,"officeLocation": null,"preferredLanguage": "en-GB","surname": null,"userPrincipalName": "admin@cloudlink.ai","id": "c4b7c903-1180-479c-8591-9759ffc979b0"
}

*/