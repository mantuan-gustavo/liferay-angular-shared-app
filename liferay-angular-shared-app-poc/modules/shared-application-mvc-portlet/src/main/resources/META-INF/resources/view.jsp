<%@ include file="/init.jsp" %>

<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script src="<%= PortalUtil.getStaticResourceURL(request, request.getContextPath()+"/lib/require.js") %>"></script>

<script src='<%= PortalUtil.getStaticResourceURL(request, request.getContextPath()+"/remote-app.js") %>' type="module"></script>

<remote-app src="http://localhost:3000/app.js" selector="react-app-root" state=""></remote-app>


