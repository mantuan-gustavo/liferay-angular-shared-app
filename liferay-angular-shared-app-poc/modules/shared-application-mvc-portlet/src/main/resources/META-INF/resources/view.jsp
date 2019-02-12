<%@ include file="/init.jsp" %>


<app-root>Loading...</app-root>


<script src="http://localhost:4200/runtime.js?p<%=portlet.getPortletId().toString()%>" ></script>
<script src="http://localhost:4200/polyfills.js?p<%=portlet.getPortletId().toString()%>" ></script>
<script src="http://localhost:4200/styles.js?p<%=portlet.getPortletId().toString()%>" ></script>
<script src="http://localhost:4200/vendor.js?p<%=portlet.getPortletId().toString()%>" ></script>
<script src="http://localhost:4200/main.js?p<%=portlet.getPortletId().toString()%>" ></script>