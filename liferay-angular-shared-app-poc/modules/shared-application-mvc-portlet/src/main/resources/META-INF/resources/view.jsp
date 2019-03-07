<%@ include file="/init.jsp" %>

<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>

<script src="localhost:3000/app.js" type="module"></script>

<script src="<%= PortalUtil.getStaticResourceURL(request, request.getContextPath()+"/lib/require.js") %>"></script>

<script src='<%= PortalUtil.getStaticResourceURL(request, request.getContextPath()+"/remote-app.js") %>' type="module"></script>

<div id="react-app-root"></div>

<remote-app src="<%=bundleSrc%>" selector="<%=htmlSelector%>" moduleName="<%=moduleName%>"></remote-app>

<script>
	require.config({
		paths: {[moduleName]: src}
	});

	require([moduleName], function (module) {
		shadowRoot.module = module;

		shadowRoot.module.default(component.$('div'), shadowRoot, ["AAA","BBB"]);
	});

</script>