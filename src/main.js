window.addEventListener(
	"load",
	() => {
		init();
	},
	false,
);

let client;
const init = async () => {
	const scopes = ["user.read", "profile", "User.ReadWrite", "Files.Read", "Files.Read.All", "Files.ReadWrite", "Files.ReadWrite.All", "Mail.Read", "Mail.ReadWrite", "Mail.Send"];
	const msalConfig = {
		auth: {
			clientId: Secrets.clientId,
			redirectUri: "http://localhost:8080",
		},
	};

	var msalApplication = new Msal.UserAgentApplication(msalConfig);
	const msalOptions = new MicrosoftGraph.MSALAuthenticationProviderOptions(scopes);
	const msalProvider = new MicrosoftGraph.ImplicitMSALAuthenticationProvider(msalApplication, msalOptions);
	client = MicrosoftGraph.Client.initWithMiddleware({
		debugLogging: true,
		authProvider: msalProvider,
	});

	bindEvents();
};

const bindEvents = () => {
	let requestsDOM = document.getElementById("requests");
	requestsDOM.addEventListener("click", (elem, event) => {
		let id = elem.srcElement.getAttribute("cell");
		switch (id) {
			case "1":
				request
					.getUserDetails()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "2":
				request
					.getMyDriveFiles()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "3":
				request
					.getMyMails()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "4":
				break;
		}
	});
};
/*
let text = '{"employees":[' +
'{"businessPhones": [],"displayName": "Admin Cloudlink","givenName": null,"jobTitle": null,"mail": "admin@cloudlink.ai","mobilePhone": null,"officeLocation": null,"preferredLanguage": "en-GB","surname": null,"userPrincipalName": "admin@cloudlink.ai","id": "c4b7c903-1180-479c-8591-9759ffc979b0" },';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
//obj.employees[1].firstName + " " + obj.employees[1].lastName;
obj.employees[0].businessPhones + " " + obj.employees[0].displayName + " " + obj.employees[0].givenName +" " + obj.employees[0].jobTitle + " " + obj.employees[0].mail + " " + obj.employees[0].mobilePhone + " " + obj.employees[0].officeLocation + " " + obj.employees[0].preferredLanguage + " " + obj.employees[0].surname + " " + obj.employees[0].userPrincipalName + " " + obj.employees[0].id;
*/