var indexData = {
	imageSlider: [
		{imagePath: "../../images/monitores.png"},
		{imagePath: "../../images/screenshots/es/zenity-02.png"},
		{imagePath: "../../images/screenshots/es/dialog-03.png"},
		{imagePath: "../../images/screenshots/es/zenity-04.png"},
		{imagePath: "../../images/screenshots/es/dialog-05.png"},
		{imagePath: "../../images/screenshots/es/zenity-06.png"},
		{imagePath: "../../images/screenshots/es/dialog-07.png"},
		{imagePath: "../../images/screenshots/es/zenity-08.png"},
		{imagePath: "../../images/screenshots/es/dialog-09.png"},
		{imagePath: "../../images/screenshots/es/zenity-10.png"},
		{imagePath: "../../images/screenshots/es/dialog-11.png"},
		{imagePath: "../../images/screenshots/es/zenity-12.png"},
		{imagePath: "../../images/screenshots/es/dialog-13.png"},
		{imagePath: "../../images/screenshots/es/dialog-14.png"},
		{imagePath: "../../images/screenshots/es/zenity-14.png"},
		{imagePath: "../../images/screenshots/es/zenity-15.png"},
		{imagePath: "../../images/screenshots/es/zenity-16.png"}
	],
	introduction: "Introducción",
	presentation: "Menú que instala escritorios y/o aplicaciones a partir de repositorios oficiales, de terceros o fuentes externas \
								para las siguientes distros: <a href='http://releases.ubuntu.com/16.04/' target='_blank'>Ubuntu 16.04 LTS (Xenial Xerus)</a>, \
								<a href='https://www.debian.org/releases/jessie/' target='_blank'>Debian 8 (Jessie)</a>, \
								<a href='https://www.linuxmint.com/' target='_blank'>Linux Mint 18 (Sarah)</a> \
								<a href='https://www.linuxmint.com/download_lmde.php' target='_blank'>LMDE 2 (Betsy)</a> o\
								<a href='https://www.raspberrypi.org/' target='_blank'>Raspbian (Jessie)</a> (escrotorio o terminal). \
								Los usuarios pueden personalizar la lista de aplicaciones tan solo editando un fichero de texto y \
								extender la funcionalidad del menú agregando subscripts específicos",
	features: "Características",
	featureList: [
		{feature: "Un menú de aplicaciones y escritorios que pueden ser seleccionados para ser instalados"},
		{feature: "Alternativamente, hay un script individual para instalar cada aplicación por separado"},
		{feature: "Instala aplicaciones de repositorios oficiales y/o terceros mediante PPA o comandos shell"},
		{feature: "Descarga, extrae e instala aplicaciones de fuentes externas mediante subscripts específicos"},
		{feature: "Prepare applications before the installation proccess begins through custom subscripts"},
		{feature: "Configura aplicaciones después de ser instaladas mediante subscripts específicos"} ,
		{feature: "Personaliza tanto como quieras editando algunos ficheros de configuración o subscripts"},
		{feature: "Elimina automáticamente los repositorios de terceros que fueron agragados mediante PPA"},
		{feature: "Soporte EULA. Se evita interacción de usuario para aceptar términos legales de la aplicación"},
		{feature: "Interfaz adaptada al entorno detectado. Dialog (Terminal) / Zenity (escritorio)"},
		{feature: "Fichero log que muestra los pasos de instalación y posibles errores producidos"},
		{feature: "Soporte multi-idoma. En este momento, Inglés y Español están incluidos"},
		{feature: "Válido para multiples arquitecturas: x64, i386, arm"}
	],
	prerequisites: "Pre-requisitos",
	prerequisiteList: [
		{prerequisite: "El sistema operativo instalado debe estar basado en \
			<a href='http://www.ubuntu.com/' target='_blank'>Ubuntu</a> \
			 o <a href='http://www.debian.org/' target='_blank'>Debian</a> (para escritorio o servidor). \
			 El script <a href='https://github.com/cesar-rgon/desktop-app-installer' target='_blank'>Desktop && App Installer v1.3</a> \
			 está probado en las siguientes distros: \
			 <a href='http://releases.ubuntu.com/16.04/' target='_blank'>Ubuntu 16.04 LTS (Xenial Xerus)</a>, \
			 <a href='https://www.debian.org/releases/jessie/' target='_blank'>Debian 8 (Jessie)</a>, \
			 <a href='https://www.linuxmint.com/' target='_blank'>Linux Mint 18 (Sarah)</a>, \
			 <a href='https://www.linuxmint.com/download_lmde.php' target='_blank'>LMDE 2 (Betsy)</a>, \
			 <a href='https://www.raspberrypi.org/' target='_blank'>Raspbian (Jessie)</a>. \
			 No se garantiza el correcto funcionamiento en otras distros, \
			 aunque con pequeños ajustes debería funcionar en su totalidad"},
		{prerequisite: "Debe disponer de conexión a internet"},
		{prerequisite: "Iniciar sesión de usuario en escritorio o terminal para comenzar pasos de instalación"},
		{prerequisite: "Preparar script para la instalación"}
	],
	runScriptMethod1: "Método 1 (recomendado): Instalar git, clonar repositorio y ejecutar script",
	runScriptMethod2:	"Método 2: Descargar script, descomprimirlo y ejecutarlo",
	installation: "Instalación",
	installationDescription: "El usuario debe seleccionar las aplicaciones que quiere instalar por cada categoría. \
														Una vez finalice la selección y tras pulsar 'Aceptar', el proceso de instalación comienza automáticamente. \
														El script irá informando del avance de la instalación hasta finalizar. \
														Posteriormente, se muestra un fichero log generado con información de los pasos ejecutados \
													  y posibles errores que hayan ocurrido. \
														Además muestra las credenciales de autenticación para aquellas aplicaciones que las necesiten.",
  documentation: "Para más información, consultar la documentación del script: ",
	textReadmeLink: "Aquí",
	urlReadme: "https://github.com/cesar-rgon/desktop-app-installer/blob/master/LEEME.md"
}

var indexTemplate = Handlebars.templates['index.template'];
document.getElementById('main-content').innerHTML = indexTemplate(indexData);
