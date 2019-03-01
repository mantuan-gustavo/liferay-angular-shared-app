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

		script.onload = function () {
			console.log('react-apps-script loaded')
		};

		if (!this.shadowRoot) {
			this.attachShadow({mode: 'open'});

			this.shadowRoot.appendChild(template.content.cloneNode(true));
			this.shadowRoot.appendChild(script);
		}

		if (this.shadowRoot) {
			var component = this;

			var shadowRoot = component.shadowRoot;

			shadowRoot.getElementById('button_click_me_2').addEventListener('click', function (ev) {
				console.log('button_click_me_2');
			});

			require.config({
				paths: {'ReactApplicationModule': 'http://localhost:3000/app'}
			});

			require(['ReactApplicationModule'], function (module) {
				shadowRoot.module = module;

				debugger;
				shadowRoot.module.default(component.$('div'), component);
			});
		}

	};

	connectedCallback() {
		console.log('connectedCallback');
	}

	disconnectedCallback() {
		console.log('disconnectedCallback');
	}

	createTemplate() {
		const selector = this.getAttribute('selector');

		const templateString = `<button type="button" onclick="console.log('webcomponent_button')">click-me</button>
								<button type="button" id="button_click_me_2">click-me-2</button>    
								<div id="${selector}">Loading</div>`;

		const template = document.createElement('template')
		template.innerHTML = templateString;

		return template;
	};
}

window.WebComponents.waitFor(() => customElements.define('remote-app', RemoteApp));
