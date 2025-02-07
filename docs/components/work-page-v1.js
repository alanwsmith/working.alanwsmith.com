function shuffleArray(array) {
  let currentIndex = array.length
  let randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], 
      array[currentIndex]
    ];
  }
}

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

  static pageOrder = [];

  static deregister(el) {
    // TODO: Remove the element
  }

  static register(el) {
    // console.log(`registered: ${el.id}`);
    this.instances[el.id] = el;
  }

  static updatePageOrder() {
    for (let id in instances) {
      pageOrder.push(id);
    }

  }

  static formats = [
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
    'alfa', 'bravo', 'charlie', 'delta',
  ];


  static pageCount() {
    return Object.keys(this.instances).length;
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

