<%@ page import="com.liferay.portal.kernel.portlet.LiferayPortletContext" %>
<%@ page import="com.liferay.portal.kernel.model.Portlet" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %><%@
		taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %><%@
		taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %><%@
		taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %><%@
		taglib uri="http://liferay.com/tld/util" prefix="liferay-util"%>

<liferay-theme:defineObjects />

<portlet:defineObjects />

<%
	LiferayPortletContext context = (LiferayPortletContext) portletConfig.getPortletContext();
	Portlet portlet = context.getPortlet();
%>