package com.liferay.shared.app.portlet.action;

import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.module.configuration.ConfigurationException;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.util.Portal;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.shared.app.constants.SharedApplicationMvcPortletKeys;
import com.liferay.shared.app.portlet.configuration.SharedAppPortletInstanceConfiguration;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.util.Map;
import org.osgi.service.component.annotations.Reference;

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

//		renderRequest.setAttribute("_config", _configuration);
		renderRequest.setAttribute("_config", renderRequest.getPreferences().getMap());
		try {

			String user = JSONFactoryUtil.serialize(PortalUtil.getUser(PortalUtil.getHttpServletRequest(renderRequest)));
			renderRequest.setAttribute(
				"userInfo", user);
		} catch (PortalException e) {
		_log.error(e);
		}

		return "/view.jsp";
	}

	@Activate
	@Modified
	protected void activate(Map<Object, Object> properties) {
		_configuration = ConfigurableUtil.createConfigurable(
			SharedAppPortletInstanceConfiguration.class, properties);
	}
	private static final Log _log = LogFactoryUtil.getLog(MVCViewCommand.class);

	private volatile SharedAppPortletInstanceConfiguration _configuration;


}