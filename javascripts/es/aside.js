var asideData = {
	githubProyect: "Ver proyecto en ",
	download: {
		title: "Descargar",
		file: " fichero tar.gz "
	},
	developed:  " y esta web fué desarrollado por ",
	template: "Esta página parte de la plantilla Architect de ",
	taken: "tomada a partir de ",
	documentation: "Para más información, consultar la documentación del script: ",
	textReadmeLink: "Aquí",
	urlReadme: "https://github.com/cesar-rgon/desktop-app-installer/blob/master/LEEME.md"
}

var asideTemplate = Handlebars.templates['aside.template'];
document.getElementById('aside-template').innerHTML = asideTemplate(asideData);
