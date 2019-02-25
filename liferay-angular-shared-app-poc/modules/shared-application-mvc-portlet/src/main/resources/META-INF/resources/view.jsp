<%@ include file="/init.jsp" %>


<div id="appRoot_<portlet:namespace/>">Loading...</div>

<aui:script require="ReactApplicationModule as app">

	console.log(app.default);

	app.default('appRoot_<portlet:namespace/>');

</aui:script>