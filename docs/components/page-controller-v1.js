// const componentSheet = new CSSStyleSheet();
// componentSheet.replaceSync(``);

//const template = document.createElement('template');
// template.innerHTML = ``;

class PageController extends HTMLElement {
  constructor() {
    super();
    this.pages = {};
  }

  connectedCallback() {
    this.registerPages();
  }

  registerPages() {
    console.log('x');
    const pages = this.querySelectorAll('work-page');
    pages.forEach((page) => {
      console.log(page);
    });
  }
}

customElements.define('page-controller', PageController)


