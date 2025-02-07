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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const componentSheet = new CSSStyleSheet();
componentSheet.replaceSync(`
:host {
  display: inline-block;
  padding: 0.3rem;
}


.wrapper {
  box-sizing: border-box;
  height: 100%;
  font-size: 0.5rem;
  overflow-x: clip;
  padding-block: 0.2rem;
}

.content {
  margin: 0.5rem;
  overflow-x: clip;
}

.written {
  background: #555;
}


`);

const template = document.createElement('template');
template.innerHTML = `<div class="wrapper"><pre class="content"></pre></div>`;

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
    await el.writePage();
    //console.log(el);
    //el.shadowRoot.innerHTML = format;
  }

  static async updatePages() {
    for (let pageCount = 0; pageCount < this.pageCount(); pageCount += 1) {
      await this.updatePage()
    }
  }

  static formats = [
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
    'alfa', 'bravo', 'charlie', 'delta', 'echo', 
  ];

  static shuffleFormats() {
    // TODO: Make the different formats here
    // and set them in in chunks so the
    // show up in the right order per section
  }

  static kickoff() {
    console.log('kicking off');
    this.shuffleFormats();
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
    this.wrapper = this.shadowRoot.querySelector('.wrapper');
    this.content = this.shadowRoot.querySelector('.content');
  }

  disconnectedCallback() {
    this.constructor.deregister(this);
  }

  async writePage() {
    this.wrapper.classList.add('written');
    const tmpStrings = [this.constructor.formats[this.dataset.index]];
    tmpStrings.push(tmpStrings[0]);
    tmpStrings.push(tmpStrings[0]);
    tmpStrings.push(tmpStrings[0]);
    tmpStrings.push(tmpStrings[0]);
    tmpStrings.push(tmpStrings[0]);
    const tmpLetters = tmpStrings.join(" ");
    this.content.innerHTML = 
      `all work and no play makes jack a dull boy.`;

    // this.content.innerHTML = `Writing: ${this.constructor.formats[this.dataset.index]}`;
    await sleep(200);
  }

}

customElements.define('work-page', WorkPage)

