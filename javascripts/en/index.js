var indexData = {
	imageSlider: [
		{imagePath: "../../images/monitors.png"},
		{imagePath: "../../images/screenshots/en/yad-01.png"},
		{imagePath: "../../images/screenshots/en/dialog-00.png"},
		{imagePath: "../../images/screenshots/en/dialog-01.png"},
		{imagePath: "../../images/screenshots/en/yad-02.png"},
		{imagePath: "../../images/screenshots/en/dialog-02.png"},
		{imagePath: "../../images/screenshots/en/yad-03.png"},
		{imagePath: "../../images/screenshots/en/dialog-03.png"},
		{imagePath: "../../images/screenshots/en/dialog-04.png"},
		{imagePath: "../../images/screenshots/en/yad-04.png"},
		{imagePath: "../../images/screenshots/en/dialog-05.png"},
		{imagePath: "../../images/screenshots/en/yad-05.png"},
		{imagePath: "../../images/screenshots/en/dialog-06.png"},
		{imagePath: "../../images/screenshots/en/yad-06.png"},
		{imagePath: "../../images/screenshots/en/dialog-07.png"},
		{imagePath: "../../images/screenshots/en/yad-07.png"}
	],
	introduction: "Introduction",
	presentation: "Menu to install desktops and/or applications from default repositories, third-party ones or another sources \
								on next distros: <a href='http://releases.ubuntu.com/16.04/' target='_blank'>Ubuntu 16.04 LTS (Xenial Xerus)</a>, \
								<a href='https://www.debian.org/releases/jessie/' target='_blank'>Debian 8 (Jessie)</a>, \
								<a href='https://www.linuxmint.com/' target='_blank'>Linux Mint 18.1 (Serena)</a>, \
								<a href='https://www.linuxmint.com/download_lmde.php' target='_blank'>LMDE 2 (Betsy)</a> or \
								<a href='https://www.raspberrypi.org/' target='_blank'>Raspbian (Jessie)</a> (desktop or terminal). \
								Users can easily customize their application list just editing a single text file and extend \
								menu functionality by adding custom subscripts",
	features: "Features",
	featureList: [
		{feature: "One menu of aplications and desktop enviroments which can be selected for installation"},
		{feature: "Alternatively, there is one separate script for install each application or desktop"},
		{feature: "Install official and/or third-party repository applications through PPA or shell commands"},
		{feature: "Download, extract and install non-repository applications through custom subscripts"},
		{feature: "Prepare applications before the installation proccess begins through custom subscripts"},
		{feature: "Set up applications after they are installed through custom subscripts"},
		{feature: "Customize all like you want just editing some config files (no need to edit main script)"},
		{feature: "Remove third-party repositories automatically after the installation of the application"},
		{feature: "EULA support. No need of user interaction to accept legal terms of the application"},
		{feature: "The interface is adapted to the detected environment: Dialog (Terminal) / Yad or Zenity (Desktop)"},
		{feature: "Installation log file that shows installation steps and errors if they have occurred"},
		{feature: "Multilingual support. Right now, English and Spanish languages are included"},
		{feature: "Valid for multiple arquitecture systems: x64, i386, arm"}
	],
	prerequisites: "Pre-requisites",
	prerequisiteList: [
		{prerequisite: "The installed O.S. on your system must be a <a href='http://www.ubuntu.com/' target='_blank'>Ubuntu</a> or \
										<a href='http://www.debian.org/' target='_blank'>Debian</a> based O.S  (for desktop or server environment). \
										The script <a href='https://github.com/cesar-rgon/desktop-app-installer' target='_blank'>Desktop && App Installer v1.3.x</a> \
										is tested on next distros:  \
			 							<a href='http://releases.ubuntu.com/16.04/' target='_blank'>Ubuntu 16.04 LTS (Xenial Xerus)</a>, \
			 							<a href='https://www.debian.org/releases/jessie/' target='_blank'>Debian 8 (Jessie)</a>, \
			 							<a href='https://www.linuxmint.com/' target='_blank'>Linux Mint 18.1 (Serena)</a>, \
			 							<a href='https://www.linuxmint.com/download_lmde.php' target='_blank'>LMDE 2 (Betsy)</a>, \
										<a href='https://www.raspberrypi.org/' target='_blank'>Raspbian (Jessie)</a>. \
										It is not guaranteed the correct operation on another distros, \
										but with minor adjustments should work in full"},
		{prerequisite: "Internet conection is mandatory"},
		{prerequisite: "User must login to the system to be able to start installation steps"},
		{prerequisite: "Prepare script"}
	],
	runScriptMethod1: "Method 1 (recommended): Install git, clone repository and execute script",
	runScriptMethod2: "Method 2: Download script, uncompress it and execute it",
	installation: "Installation",
	installationDescription: "User must select needed applications by category to be installed. \
														After finish the seleccion operation and after press 'Accept' button, installation proccess starts automatically. \
														The script will be reporting the progress of the installation proccess to the end. \
														Finally, it will show a generated log file which contains executed steps and possible errors. \
														Furthermore, it will show authentication credentials for thouse selected applications who need it",
	documentation: "For more information, see script's documentacion: ",
	textReadmeLink: "Here",
	urlReadme: "https://github.com/cesar-rgon/desktop-app-installer/blob/master/README.md"
}

var indexTemplate = Handlebars.templates['index.template'];
document.getElementById('main-content').innerHTML = indexTemplate(indexData);
