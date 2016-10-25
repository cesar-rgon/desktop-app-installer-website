var headerData = {
	subtitle: "Menú personalizable que permite instalar y configurar múltiples escritorios y aplicaciones para Ubuntu, Debian, LinuxMint y LMDE",
	selectedSpanish: "selected",
	githubProyect: "Ver proyecto en ",
	optionsMenu: [
		{url: "index.html", title: "Inicio", target: "_self"},
		{url: "https://github.com/cesar-rgon/desktop-app-installer/tree/master/etc/applist", title: "Applicaciones", target: "_blank"},
		{url: "https://github.com/cesar-rgon/desktop-app-installer/releases", title: "Versiones", target: "_blank"}
	]
}

var headerTemplate = Handlebars.templates['header.template'];
document.getElementById('header-template').innerHTML = headerTemplate(headerData);
