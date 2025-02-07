const componentSheet = new CSSStyleSheet();
componentSheet.replaceSync(`
:host {
  display: inline-block;
  padding: 0.2rem;
}

.page-wrapper {
  height: 100%;
  background: #987;
}

`);

const template = document.createElement('template');
template.innerHTML = `<div class="page-wrapper">x</div>`;

class WorkPage extends HTMLElement {

  static instances = {};

  static deregister(el) {
    // TODO: Remove the element
  }

  static register(el) {
    // console.log(`registered: ${el.id}`);
    this.instances[el.id] = el;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.id = self.crypto.randomUUID();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.adoptedStyleSheets = [componentSheet];
    this.constructor.register(this);
  }

  disconnectedCallback() {
    this.constructor.deregister(this);
  }

}

customElements.define('work-page', WorkPage)

