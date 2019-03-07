package com.liferay.shared.app.portlet.action;

import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.module.configuration.ConfigurationException;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.shared.app.constants.SharedApplicationMvcPortletKeys;
import com.liferay.shared.app.portlet.configuration.SharedAppPortletInstanceConfiguration;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.util.Map;

@Component(
	immediate = true,
	property = {
		"javax.portlet.name=" + SharedApplicationMvcPortletKeys.SHARED_APPLICATION,
		"mvc.command.name=/", "mvc.command.name=/react/route/view"
	},
	service = MVCRenderCommand.class
)
public class MVCViewCommand implements MVCRenderCommand {

	@Override
	public String render(
		RenderRequest renderRequest, RenderResponse renderResponse)
		throws PortletException {

		renderRequest.setAttribute("_config", _configuration);

		return "/view.jsp";
	}

	@Activate
	@Modified
	protected void activate(Map<Object, Object> properties) {
		_configuration = ConfigurableUtil.createConfigurable(
			SharedAppPortletInstanceConfiguration.class, properties);
	}

	private volatile SharedAppPortletInstanceConfiguration _configuration;

}