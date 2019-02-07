package com.liferay.shared.app.filter;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.servlet.BaseFilter;
import org.osgi.service.component.annotations.Component;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component(
	immediate = true,
	property = {
		"servlet-context-name=",
		"servlet-filter-name=Agular sockjs Filter",
		"url-pattern=/sockjs-node/*"
	},
	service = Filter.class
)
public class AngularSockJsFilter extends BaseFilter {


	@Override
	protected Log getLog() {
		return _log;
	}

	@Override
	protected void processFilter(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
		throws Exception {

		_log.info("Filter is invoked");
		super.processFilter(request, response, filterChain);
	}

	private static final Log _log = LogFactoryUtil.getLog(AngularSockJsFilter.class);

}