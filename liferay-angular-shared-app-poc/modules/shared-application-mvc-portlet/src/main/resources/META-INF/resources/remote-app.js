var exports = {};

var module = {
	exports: {}
}

class RemoteApp extends HTMLElement {

	$(selector) {
		return this.shadowRoot && this.shadowRoot.querySelector(selector)
	}

	constructor() {
		super();

		const template = this.createTemplate();
		const script = document.createElement('script');




		script.type = "module";
		script.src = this.getAttribute('src');

		script.onload = function(){console.log('react-apps-script loaded')};

		if (!this.shadowRoot) {
			this.attachShadow({mode: 'open'});

			this.shadowRoot.appendChild(template.content.cloneNode(true));
			this.shadowRoot.appendChild(script);
		}


	};

	connectedCallback() {
		if (this.shadowRoot) {

			if(this.ReactApplicationmodule)
				this.ReactApplicationModule.default(this.$('div'));
		}
	}

	createTemplate() {
		const selector = this.getAttribute('selector');

		const templateString = `<div id="${selector}">Loading</div>`;

		const template = document.createElement('template')
		template.innerHTML = templateString;

		return template;
	};
}

window.WebComponents.waitFor(() => customElements.define('remote-app', RemoteApp));
