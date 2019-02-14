<%@ include file="/init.jsp" %>


<app-root id="<portlet:namespace/>">Loading...</app-root>


<liferay-util:html-bottom>
	<%--<script src="http://localhost:4200/runtime.js"></script>--%>
	<%--<script src="http://localhost:4200/polyfills.js"></script>--%>
	<%--<script src="http://localhost:4200/styles.js"></script>--%>
	<%--<script src="http://localhost:4200/vendor.js"></script>--%>
	<%--<script src="http://localhost:4200/main.js"></script>--%>

	<script src="http://localhost:4200/runtime.js?p=<%=portlet.getPortletId().toString()%>"></script>
	<script src="http://localhost:4200/polyfills.js?p=<%=portlet.getPortletId().toString()%>"></script>
	<script src="http://localhost:4200/styles.js?p=<%=portlet.getPortletId().toString()%>"></script>
	<script src="http://localhost:4200/vendor.js?p=<%=portlet.getPortletId().toString()%>"></script>
	<script src="http://localhost:4200/main.js?p=<%=portlet.getPortletId().toString()%>"></script>
</liferay-util:html-bottom>