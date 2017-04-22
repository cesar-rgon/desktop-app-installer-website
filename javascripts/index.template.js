(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['index.template'] = template(function (Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
    var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      var buffer = "", stack1;
      buffer += "\r\n			<img src=";
      if (stack1 = helpers.imagePath) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
      else { stack1 = depth0.imagePath; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
      buffer += escapeExpression(stack1)
      + " />\r\n		";
      return buffer;
    }

    function program2(depth0,data) {
      var buffer = "", stack1;
      buffer += "\r\n		<li>";
      if (stack1 = helpers.prerequisite) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
      else { stack1 = depth0.prerequisite; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
      if(stack1 || stack1 === 0) { buffer += stack1; }
      buffer += ".</li>\r\n	";
      return buffer;
    }

    function program3(depth0,data) {
      var buffer = "", stack1;
      buffer += "\r\n		<li>";
      if (stack1 = helpers.feature) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
      else { stack1 = depth0.feature; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
      if(stack1 || stack1 === 0) { buffer += stack1; }
      buffer += ".</li>\r\n	";
      return buffer;
    }

    buffer += "<div id=\"sliderFrame\">\r\n	<div id=\"ribbon\"></div>\r\n	<div id=\"slider\">\r\n		";
    stack1 = helpers.each.call(depth0, depth0.imageSlider, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "\r\n	</div>\r\n</div>\r\n\r\n<br /><br />\r\n<h2>";

    if (stack1 = helpers.introduction) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.introduction; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1)
    + "</h2><hr/>\r\n<p>";
    if (stack1 = helpers.presentation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.presentation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += ".</p>\r\n\r\n<h4>";
    if (stack1 = helpers.features) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.features; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1)
    + "</h4>\r\n<ul>\r\n	";
    stack1 = helpers.each.call(depth0, depth0.featureList, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "\r\n</ul>\r\n\r\n<h4>";
    buffer += "\r\n</ul>\r\n";
    buffer += "<h4>"
    if (stack1 = helpers.information) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.information; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1)
    + "</h4>\r\n<p>";
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
    buffer += escapeExpression(stack1) + "</a></p><h2>";

    if (stack1 = helpers.prerequisites) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.prerequisites; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1)
    + "</h2><hr/>\r\n<ul>\r\n	";
    stack1 = helpers.each.call(depth0, depth0.prerequisiteList, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "</ul><h5>";
    if (stack1 = helpers.runScriptMethod1) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.runScriptMethod1; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    if (stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "</h5><pre><code>$ sudo apt install git\r\n$ git clone https://github.com/cesar-rgon/desktop-app-installer.git\r\n$ cd desktop-app-installer\r\n$ ./installer.sh</code></pre><h5>";

    if (stack1 = helpers.runScriptMethod2) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.runScriptMethod2; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "</h5><pre><code>$ wget https://github.com/cesar-rgon/desktop-app-installer/archive/master.tar.gz\r\n$ tar -xvf master.tar.gz\r\n$ cd desktop-app-installer-master\r\n$ ./installer.sh</code></pre><h2>";

    if (stack1 = helpers.installation) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.installation; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1) + "</h2><hr/><p>";

    if (stack1 = helpers.installationDescription) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
    else { stack1 = depth0.installationDescription; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
    buffer += escapeExpression(stack1) + "</p><p>";

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
    + "</a></p>";

    return buffer;
  });
})();
