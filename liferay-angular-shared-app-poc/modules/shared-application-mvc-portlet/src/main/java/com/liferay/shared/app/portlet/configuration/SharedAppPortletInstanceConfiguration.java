package com.liferay.shared.app.portlet.configuration;


import aQute.bnd.annotation.metatype.Meta;
import com.liferay.portal.configuration.metatype.annotations.ExtendedObjectClassDefinition;
import com.liferay.shared.app.constants.SharedApplicationMvcPortletKeys;


@ExtendedObjectClassDefinition(
	category = "portlet-instance",
	scope = ExtendedObjectClassDefinition.Scope.PORTLET_INSTANCE
)
@Meta.OCD(
	id = SharedApplicationMvcPortletKeys.CONFIGURATION,
	localization = "content/Language", name = "shared-app-configuration"
)
public interface SharedAppPortletInstanceConfiguration {

	@Meta.AD(
		deflt = "", description = "remote-app-bundle-src",
		name = "remote_app_bundle_src", required = false
	)
	public String remoteAppBundleSrc();

	@Meta.AD(
		deflt = "", description = "remote-app-bundle-src",
		name = "remote_app_html_selector", required = false
	)
	public String remoteAppHtmlSelector();

	@Meta.AD(
		deflt = "", description = "remote-app-module-name",
		name = "remote_app_module_name", required = false
	)
	public String remoteAppModuleName();
}