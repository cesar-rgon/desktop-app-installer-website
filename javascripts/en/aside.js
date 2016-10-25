var asideData = {
	githubProyect: "View project in ",
	download: {
		title: "Download",
		file: " tar.gz file "
	},
	developed:  " and this website was developed by ",
	template: "This page was made from template Architect by ",
	theme: "using the Architect theme by ",
	taken: "taken from ",
	documentation: "For more information, see script's documentation: ",
	textReadmeLink: "Here",
	urlReadme: "https://github.com/cesar-rgon/desktop-app-installer/blob/master/README.md"
}

var asideTemplate = Handlebars.templates['aside.template'];
document.getElementById('aside-template').innerHTML = asideTemplate(asideData);
