(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['aside.template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;
  buffer += "<div id=\"content-wrapper\">\n	<div class=\"inner clearfix\">\n		<aside id=\"sidebar\">\n		<a href=\"https://github.com/cesar-rgon/desktop-app-installer\" id=\"github_button\" target=\"_blank\" class=\"button\">\n			<small>";
  if (stack1 = helpers.githubProyect) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.githubProyect; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</small>GitHub\n		</a> 	\n	\n\n	<a href=\"https://github.com/cesar-rgon/xfce-installer/archive/master.tar.gz\" class=\"button\">\n				<small>"
    + escapeExpression(((stack1 = ((stack1 = depth0.download),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</small>"
    + escapeExpression(((stack1 = ((stack1 = depth0.download),stack1 == null || stack1 === false ? stack1 : stack1.file)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n	</a>\n\n			<p>\n<a href=\"https://github.com/cesar-rgon/desktop-app-installer\" target=\"_blank\">Desktop && application installer script</a>\n				";
  if (stack2 = helpers.developed) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.developed; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n				<a href=\"https://github.com/cesar-rgon\" target=\"_blank\">C&eacute;sar Rodr&iacute;guez Gonz&aacute;lez</a>.\n</p>\n\n<p>\n";
    if (stack1 = helpers.documentation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.documentation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1)
    + "<a href=\""
    if (stack1 = helpers.urlReadme) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.urlReadme; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">"
    if (stack1 = helpers.textReadmeLink) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.textReadmeLink; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1)
    + "</a></p><p>";
    if (stack2 = helpers.template) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.template; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n<a href=\"http://twitter.com/jasonlong\" target=\"_blank\">Jason Long</a>\n				";
  if (stack2 = helpers.taken) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.taken; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }

  buffer += escapeExpression(stack2)
    + "\n\n<a href=\"http://pages.github.com/\" target=\"_blank\">GitHub Pages</a>.</p>\n\n";
  buffer += "<p><a href=\"http://www.ubuntu.com/\" target=\"_blank\" class=\"logo\"><img src=\"../../images/logos/ubuntu.png\" alt=\"Ubuntu logo\" height=\"32\" width=\"32\"></a>";
  buffer += "<a href=\"http://www.debian.org/\" target=\"_blank\" class=\"logo\"><img src=\"../../images/logos/debian.png\" alt=\"Debian logo\" height=\"34\" width=\"34\"></a>";
  buffer += "<a href=\"https://www.linuxmint.com/\" target=\"_blank\" class=\"logo\"><img src=\"../../images/logos/linuxmint.png\" alt=\"LinuxMint logo\" height=\"32\" width=\"32\"></a>";
  buffer += "<a href=\"https://www.linuxmint.com/download_lmde.php\" target=\"_blank\" class=\"logo\"><img src=\"../../images/logos/lmde.png\" alt=\"LMDE logo\" height=\"32\" width=\"32\"></a>";
  buffer += "<a href=\"https://www.raspberrypi.org/\" target=\"_blank\" class=\"logo\"><img src=\"../../images/logos/raspbian.png\" alt=\"Raspbian logo\" height=\"32\" width=\"25\"></a></p>";
  return buffer;
  });
})();
