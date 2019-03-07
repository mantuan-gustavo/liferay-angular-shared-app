package com.liferay.shared.app.portlet.configuration;

import com.liferay.portal.kernel.settings.definition.ConfigurationPidMapping;
import com.liferay.shared.app.constants.SharedApplicationMvcPortletKeys;
import org.osgi.service.component.annotations.Component;

@Component
public class SharedAppConfigurationPidMapping implements ConfigurationPidMapping {
	@Override
	public Class<?> getConfigurationBeanClass() {
		return SharedAppPortletInstanceConfiguration.class;
	}

	@Override
	public String getConfigurationPid() {
		return SharedApplicationMvcPortletKeys.SHARED_APPLICATION;
	}
}