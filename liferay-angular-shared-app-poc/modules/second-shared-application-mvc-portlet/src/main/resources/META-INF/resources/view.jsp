<%@ include file="/init.jsp" %>


<app-root-todo id="<portlet:namespace/>">Loading...</app-root-todo>


<liferay-util:html-bottom>
	<%--<script src="http://localhost:3000/runtime.js"></script>--%>
	<%--<script src="http://localhost:3000/polyfills.js"></script>--%>
	<%--<script src="http://localhost:3000/styles.js"></script>--%>
	<%--<script src="http://localhost:3000/vendor.js"></script>--%>
	<%--<script src="http://localhost:3000/main.js"></script>--%>

	<script src="http://localhost:3000/runtime.js?p=<%=portlet.getPortletId().toString()%>"></script>
	<script src="http://localhost:3000/polyfills.js?p=<%=portlet.getPortletId().toString()%>"></script>
	<script src="http://localhost:3000/styles.js?p=<%=portlet.getPortletId().toString()%>"></script>
	<script src="http://localhost:3000/vendor.js?p=<%=portlet.getPortletId().toString()%>"></script>
	<script src="http://localhost:3000/main.js?p=<%=portlet.getPortletId().toString()%>"></script>
</liferay-util:html-bottom>