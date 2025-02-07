const componentSheet = new CSSStyleSheet();
componentSheet.replaceSync(``);

const template = document.createElement('template');
template.innerHTML = `<div>ping</div>`;

class WorkPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.id = self.crypto.randomUUID();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.adoptedStyleSheets = [componentSheet];
  }

}

customElements.define('work-page', WorkPage)

