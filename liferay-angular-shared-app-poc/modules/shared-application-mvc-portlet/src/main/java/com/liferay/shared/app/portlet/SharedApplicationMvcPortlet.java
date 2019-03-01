package com.liferay.shared.app.portlet;

import com.liferay.shared.app.constants.SharedApplicationMvcPortletKeys;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author douglas
 */
@Component(
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.instanceable=true",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.mvc-command-names-default-views=/react/route/view",
		"javax.portlet.name=" + SharedApplicationMvcPortletKeys.SharedApplicationMvc,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class SharedApplicationMvcPortlet extends MVCPortlet {

}