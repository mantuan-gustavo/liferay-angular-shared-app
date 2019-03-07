package com.liferay.shared.app.portlet.configuration;

import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.portlet.ConfigurationAction;
import com.liferay.portal.kernel.portlet.DefaultConfigurationAction;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.shared.app.constants.ConfigurationConstants;
import com.liferay.shared.app.constants.SharedApplicationMvcPortletKeys;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.component.annotations.Modified;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Component(
	configurationPid = SharedApplicationMvcPortletKeys.CONFIGURATION,
	configurationPolicy = ConfigurationPolicy.OPTIONAL,
	immediate = true,
	property = {
		"javax.portlet.name=" + SharedApplicationMvcPortletKeys.SHARED_APPLICATION,
	},
	service = ConfigurationAction.class
)
public class SharedAppConfigurationAction extends DefaultConfigurationAction {

	@Override
	public void include(PortletConfig portletConfig, HttpServletRequest request, HttpServletResponse response) throws Exception {
		request.setAttribute("_configuration", _configuration);

		super.include(portletConfig, request, response);
	}

	@Override
	public void processAction(PortletConfig portletConfig, ActionRequest actionRequest, ActionResponse actionResponse) throws Exception {
		String bundleSrc = ParamUtil.getString(actionRequest, ConfigurationConstants.REMOTE_APP_BUNDLE_SRC);
		setPreference(actionRequest, ConfigurationConstants.REMOTE_APP_BUNDLE_SRC, bundleSrc);

		String htmlSelector = ParamUtil.getString(actionRequest, ConfigurationConstants.REMOTE_APP_HTML_SELECTOR);
		setPreference(actionRequest, ConfigurationConstants.REMOTE_APP_HTML_SELECTOR, htmlSelector);

		String moduleName = ParamUtil.getString(actionRequest, ConfigurationConstants.REMOTE_APP_MODULE_NAME);
		setPreference(actionRequest, ConfigurationConstants.REMOTE_APP_MODULE_NAME, moduleName);

		super.processAction(portletConfig, actionRequest, actionResponse);
	}

	@Activate
	@Modified
	protected void activate(Map<Object, Object> properties) {
		_configuration = ConfigurableUtil.createConfigurable(
			SharedAppPortletInstanceConfiguration.class, properties);
	}

	private volatile SharedAppPortletInstanceConfiguration _configuration;
}