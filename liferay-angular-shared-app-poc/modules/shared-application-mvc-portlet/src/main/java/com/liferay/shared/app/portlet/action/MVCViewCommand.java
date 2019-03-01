package com.liferay.shared.app.portlet.action;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.shared.app.constants.SharedApplicationMvcPortletKeys;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

@Component(
	immediate = true,
	property = {
		"javax.portlet.name=" + SharedApplicationMvcPortletKeys.SharedApplicationMvc,
		"mvc.command.name=/", "mvc.command.name=/react/route/view"
	},
	service = MVCRenderCommand.class
)
public class MVCViewCommand implements MVCRenderCommand {

	@Override
	public String render(
		RenderRequest renderRequest, RenderResponse renderResponse)
		throws PortletException {

		return "/view.jsp";
	}

}