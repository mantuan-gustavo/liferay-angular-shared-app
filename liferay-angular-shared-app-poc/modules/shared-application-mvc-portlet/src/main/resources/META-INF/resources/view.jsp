<%@ include file="/init.jsp" %>


<app-root></app-root>


<liferay-util:html-bottom>
	<script src="http://localhost:3000/bundle_shared_angular_app.js?p=<%= portlet.getInstanceId()%>" type="text/javascript" />
</liferay-util:html-bottom>

<script>
	Liferay.on(
		'allPortletsReady',
		function (e) {
			// var event = new CustomEvent("DOMContentLoaded");
			// document.dispatchEvent(event);

			console.log('DOMContentLoaded Event dispatched', "<%= portlet.getInstanceId() %>");
		}
	);
</script>