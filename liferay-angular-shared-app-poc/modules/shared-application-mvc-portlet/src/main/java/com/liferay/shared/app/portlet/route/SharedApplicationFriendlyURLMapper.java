package com.liferay.shared.app.portlet.route;

import com.liferay.portal.kernel.portlet.DefaultFriendlyURLMapper;
import com.liferay.portal.kernel.portlet.FriendlyURLMapper;
import com.liferay.shared.app.constants.SharedApplicationMvcPortletKeys;
import org.osgi.service.component.annotations.Component;

@Component(
	property = {
		"com.liferay.portlet.friendly-url-routes=META-INF/resources/friendly-url-routes/routes.xml",
		"javax.portlet.name=" + SharedApplicationMvcPortletKeys.SharedApplicationMvc
	},
	service = FriendlyURLMapper.class
)
public class SharedApplicationFriendlyURLMapper extends DefaultFriendlyURLMapper {

	@Override
	public String getMapping() {
		return _MAPPING;
	}

	private static final String _MAPPING = "react";

}