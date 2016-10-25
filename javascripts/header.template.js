(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header.template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {

  var buffer = "", stack1;
  buffer += "\n						<li><a href=";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " target=";
  if (stack1 = helpers.target) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.target; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n					";
  return buffer;
  }

  buffer += "<!--[if lt IE 7]>\n	<p class=\"chromeframe\">You are using a web browser <strong>deprecated</strong>. Please <a href=\"http://browsehappy.com/\">update it</a> or <a href=\"http://www.google.com/chromeframe/?redirect=true\">enable Google Chrome Frame</a> for better experience.</p>\n<![endif]-->\n\n<header>\n	<div class=\"inner\">\n		<h1>$ Desktop && App Installer Script</h1>\n		<h2>";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<img src=\"../../images/logos/desktop-app-installer.png\" alt=\"Logo Desktop-App Installer\" height=\"128\" width=\"128\">	<div class=\"language\">\n			<label>Language</label>\n			<select onchange=\"changeLanguage(this.value)\">\n				<option value=\"en\" ";
  if (stack1 = helpers.selectedEnglish) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedEnglish; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">English</option>\n				<option value=\"es\" ";
  if (stack1 = helpers.selectedSpanish) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.selectedSpanish; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">Español</option>\n			</select>\n		</div>\n	\n		\n	\n		<div id=\"sse2\">\n			<div id=\"sses2\">\n				<ul>\n					";
  stack1 = helpers.each.call(depth0, depth0.optionsMenu, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</ul>\n			</div>\n		</div>			\n	</div>\n</header>";
  return buffer;
  });
})();
