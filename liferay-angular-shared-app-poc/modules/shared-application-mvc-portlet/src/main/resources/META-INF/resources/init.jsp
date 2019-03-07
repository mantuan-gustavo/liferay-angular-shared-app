<%@ page import="com.liferay.portal.kernel.portlet.LiferayPortletContext" %>
<%@ page import="com.liferay.portal.kernel.model.Portlet" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %><%@
taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %><%@
taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %><%@
taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %><%@
taglib uri="http://liferay.com/tld/util" prefix="liferay-util"%>
<%@ page import="com.liferay.portal.kernel.util.PortalUtil" %>
<%@ page import="com.liferay.portal.kernel.util.Constants" %>
<%@ page import="com.liferay.shared.app.portlet.configuration.SharedAppPortletInstanceConfiguration" %>
<%@ page import="com.liferay.portal.kernel.util.Validator" %>

<liferay-theme:defineObjects />

<portlet:defineObjects />

<%
    LiferayPortletContext context = (LiferayPortletContext) portletConfig.getPortletContext();
	Portlet portlet = context.getPortlet();

	SharedAppPortletInstanceConfiguration _config = (SharedAppPortletInstanceConfiguration) renderRequest.getAttribute("_configuration");

	String bundleSrc = portletPreferences.getValue("remote_app_bundle_src", "");
	String htmlSelector = portletPreferences.getValue("remote_app_html_selector", "");
	String moduleName = portletPreferences.getValue("remote_app_module_name", "");

	if(Validator.isNotNull(_config)) {
		bundleSrc = portletPreferences.getValue("remote_app_bundle_src", _config.remoteAppBundleSrc());
		htmlSelector = portletPreferences.getValue("remote_app_html_selector", _config.remoteAppHtmlSelector());
		moduleName = portletPreferences.getValue("remote_app_module_name", "");
	}
%>

