function shuffle(array) {
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
template.innerHTML = `<div class="page-wrapper"></div>`;

class WorkPage extends HTMLElement {

  static instances = {};

  static pageOrder = [];

  static deregister(el) {
    // TODO: Remove the element
  }

  static updatePageOrder() {
    console.log('updatePageOrder');
    for (let id in this.instances) {
      this.pageOrder.push(id);
    }
    shuffle(this.pageOrder);
  }

  static async updatePage() {
    console.log('updatePage');
    const pageId = this.pageOrder.pop();
    const format = this.formats.pop()
    const el = this.instances[pageId];
    await el.writePage(format);
    //console.log(el);
    //el.shadowRoot.innerHTML = format;
  }

  static updatePages() {
    for (let pageCount = 0; pageCount < this.pageCount(); pageCount += 1) {
      this.updatePage()
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

  static kickoff() {
    console.log('kicking off');
    this.updatePageOrder();
    this.updatePages();
  }

  static pageCount() {
    return Object.keys(this.instances).length;
  }

  static register(el) {
    this.instances[el.id] = el;
    if (this.pageCount() === parseInt(el.dataset.totalItems)) {
      this.kickoff();
    }
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

  async writePage(format) {
    this.shadowRoot.innerHTML = `Writing: ${format}`;
  }

}

customElements.define('work-page', WorkPage)

