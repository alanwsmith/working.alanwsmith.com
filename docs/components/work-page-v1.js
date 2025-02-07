// All lowercase
function baseLowercase() {
  return [
    `all`,
    `work`,
    `and`,
    `no`,
    `play`,
    `makes`,
    `jack`,
    `a`,
    `dull`,
    `boy`,
  ]
}

// All uppercase
function baseUppercase() {
  return baseLowercase().map((v) => { return v.toUpperCase() });
}

// All uppercase leading spaces
function baseUppercaseLeadingSpaces() {
  return baseLowercase().map((v) => { 
    let parts = v.split('');
    parts.reverse();
    for (let i = 0; i < 5; i += 1) {
      if (!parts[i]) {
        parts.push(' ');
      }
    }
    parts.reverse();
    return parts.join("").toUpperCase();
  });
}

// Capital case
function baseCapital() {
  return baseLowercase().map((v) => { 
    return String(v).charAt(0).toUpperCase() + String(v).slice(1);
  });
}

// letters replaced with underscores
function baseUnderscore() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '_');
  });
}

// first letter lowercase followed by uppercase
function baseLowerThenUppercase() {
  return baseLowercase().map((v) => { 
    return String(v).charAt(0).toLowerCase() + String(v).slice(1).toUpperCase();
  });
}

// reversed lower case
function baseLowercaseReversed() {
  return baseLowercase().map((v) => {
    return v.split('').reverse().join('');
  });
}

// letters replaced with spaces 
function baseSpaces() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, ' ');
  });
}

// letters replaced with hashtags 
function baseHashtags() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '#');
  });
}

function set1() {
  const results = [];
  for (let pages = 0; pages < 10; pages += 1) {
    let text = "";
    for (let lines = 0; lines <= pages; lines += 1) {
      text += `${baseLowercase().join(' ')}\n`;
    }
    results.push(text);
  }
  return results;
}

function set2() {
  const results = [];
  for (let pages = 0; pages < 10; pages += 1) {
    let text = "";
    for (let lines = 0; lines <= pages; lines += 1) {
      if (lines % 2 === 1) {
        text += `${baseLowercase().join(' ')}\n`;
      } else {
        text += `${baseUppercase().join(' ')}\n`;
      }
    }
    results.push(text);
  }
  return results;
}

function set3() {
  const results = [];
  for (let pages = 0; pages < 10; pages += 1) {
    let text = "";
    for (let lines = 0; lines <= pages; lines += 1) {
      text += `${baseUppercase().join(' ')}\n`;
    }
    results.push(text);
  }
  return results;
}

function set4() {
  const results = [];
  for (let pages = 0; pages < 10; pages += 1) {
    let text = "";
    for (let lines = 0; lines <= pages; lines += 1) {
      let words = [];
      for (let word = 0; word <= baseLowercase().length; word += 1) {
        if ((lines + word) % 2 === 0) {
          words.push(baseUppercase()[word]);
        } else {
          words.push(baseLowercase()[word]);
        }
      }
      text += `${words.join(" ")}\n`;
    }
    results.push(text);
  }
  return results;
}

function set5() {
  const results = [];
  for (let pages = 0; pages < 10; pages += 1) {
    let text = "";
    for (let lines = 0; lines <= pages; lines += 1) {
      let words = [];
      for (let word = 0; word <= baseLowercase().length; word += 1) {
        if ((lines + word) % 2 === 0) {
          words.push(baseSpaces()[word]);
        } else {
          words.push(baseLowercase()[word]);
        }
      }
      text += `${words.join(" ")}\n`;
    }
    results.push(text);
  }
  return results;
}

function set6() {
  const results = [];
  for (let page = 0; page < 10; page += 1) {
    let text = "";
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= baseLowercase().length; word += 1) {
        if ((line + word) % 2 === 0) {
          words.push(baseUppercase()[word]);
        } else {
          words.push(baseSpaces()[word]);
        }
      }
      text += `${words.join(" ")}\n`;
    }
    results.push(text);
  }
  return results;
}

function set7() {
  const results = [];
  for (let page = 1; page < 10; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= 10; word += 1) {
        if (word === line) {
          words.push(baseUppercase()[word]);
        }
      }
      lines.push(words.join(" "));
    }
    results.push(lines.join("\n"));
  }
  return results;
}

function set8() {
  const results = [];
  for (let page = 1; page < 10; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= 10; word += 1) {
        if (word === line) {
          words.push(baseUppercaseLeadingSpaces()[word]);
        }
      }
      lines.push(words.join(" "));
    }
    results.push(lines.join("\n"));
  }
  return results;
}



const sets = [
  set8(),
  // set7(),
  // set6(),
  // set5(),
  // set4(),
  // set3(),
  // set2(),
  // set1(),
]; 

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
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  font-size: 0.6rem;
  overflow-x: clip;
  overflow-y: clip;
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
template.innerHTML = `<div class="wrapper written"><pre class="content"></pre></div>`;

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
    this.pageOrder.reverse();
    shuffle(this.pageOrder);
  }

  static async updatePage() {
    console.log('updatePage');
    const pageId = this.pageOrder.pop();
    // const format = this.formats.pop()
    const el = this.instances[pageId];
    // console.log(el);
    await el.writePage();
    //el.shadowRoot.innerHTML = format;
  }

  static async updatePages() {
    for (let pageCount = 0; pageCount < this.pageCount(); pageCount += 1) {
      await this.updatePage()
    }
    this.kickoff();
  }

  static formats = [];

  static getFormat() {
    if (this.formats.length === 0) {
      this.shuffleFormats();
    }
    return this.formats.pop();
  }

  static shuffleFormats() {
    console.log('shuffleFormats');
    this.formats = [];
    for (let setIndex = 0; setIndex < sets.length; setIndex += 1) {
      this.formats.push(...sets[setIndex]);
    }
    shuffle(this.formats);
  }

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
    this.wrapper = this.shadowRoot.querySelector('.wrapper');
    this.content = this.shadowRoot.querySelector('.content');
    this.constructor.register(this);
  }

  disconnectedCallback() {
    this.constructor.deregister(this);
  }

  async writePage() {
//    const theLines = this.constructor.formats[this.dataset.index].split("\n");
    const theLines = this.constructor.getFormat().split("\n");
    // make a line with spaces so the correct length is set 
    let lineLength = 0;
    let lineString = '';
    theLines.forEach((line) => {
      const lineCharacters = line.split('');
      const lineStringCheck = lineCharacters.map((lc) => { return ' '}).join('');
      if (lineCharacters.length > lineLength) {
        lineLength = lineCharacters.length;
        lineString = lineStringCheck;
      }
    });
    this.content.innerHTML = `${lineString} \n`;

    for (let lineIndex = 0; lineIndex < theLines.length; lineIndex += 1) {
      const words = theLines[lineIndex].split(' ');
      await this.outputWords(words);
      this.content.innerHTML += "\n";
      await sleep(60);
    }
    await sleep(400);
  }

  async outputWords(words) {
    for (let i = 0; i < words.length; i += 1) {
      this.content.innerHTML += words[i];
      if (i !== words.lenght - 1) {
        this.content.innerHTML +=  " ";
      }
      await sleep(10);
    }
  }

}

customElements.define('work-page', WorkPage)

