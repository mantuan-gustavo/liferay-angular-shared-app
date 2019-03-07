<%@ include file="/init.jsp" %>

<div id="<%= htmlSelector %>"></div>

<script src="<%= PortalUtil.getStaticResourceURL(request, request.getContextPath()+"/lib/require.js") %>"></script>

<script type="text/javascript">

	var moduleName = "<%= moduleName %>";
	var bundleSrc =  "<%= bundleSrc %>";
	var htmlSelector = "<%= htmlSelector %>";

	require.config({
		paths: {[moduleName]: bundleSrc}
	});

	require([moduleName], function (module) {
		module.default(document.getElementById(htmlSelector), undefined, ["AAA","BBB"]);
	});


</script>