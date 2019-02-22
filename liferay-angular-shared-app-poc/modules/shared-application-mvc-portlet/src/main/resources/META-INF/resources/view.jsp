<%@ include file="/init.jsp" %>

<c:set var="app_root" value="appRoot<portlet:namespace>"/>

<div id="${app_root}">Loading...</div>

<aui:script require="ReactApplicationModule as app">

	console.log(app.default);

	app.default('${app_root}');

</aui:script>