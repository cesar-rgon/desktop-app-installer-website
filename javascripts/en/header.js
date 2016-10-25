var headerData = {
	subtitle: "Customizable menu that allows to install desktop enviroments and applications for Ubuntu, Debian, LinuxMint and LMDE",
	selectedEnglish: "selected",
	githubProyect: "View project in ",
	optionsMenu: [
		{url: "index.html", title: "Start", target: "_self"},
		{url: "https://github.com/cesar-rgon/desktop-app-installer/tree/master/etc/applist", title: "Applications", target: "_blank"},
		{url: "https://github.com/cesar-rgon/desktop-app-installer/releases", title: "Versions", target: "_blank"}
	]
}

var headerTemplate = Handlebars.templates['header.template'];
document.getElementById('header-template').innerHTML = headerTemplate(headerData);
