const maxCharactersPerLine = 52;
const maxLinesPerPage = 14;

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

// All uppercase trailing spaces
function baseUppercaseTrailingSpaces() {
  return baseLowercase().map((v) => { 
    let parts = v.split('');
    for (let i = 0; i < 5; i += 1) {
      if (!parts[i]) {
        parts.push(' ');
      }
    }
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
  for (let page = 0; page < maxLinesPerPage; page += 1) {
    let text = "";
    for (let line = 0; line <= page; line += 1) {
      text += `${baseLowercase().join(' ')}\n`;
    }
    results.push(text);
  }
  return results;
}

function set2() {
  const pages = [];
  for (let page = 0; page < maxLinesPerPage; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      if (line % 2 === 1) {
        lines.push(baseLowercase().join(' '))
      } else {
        lines.push(baseUppercase().join(' '))
      }
    }
    pages.push(lines.join("\n"));
  }
  return pages;
}

function set3() {
  const results = [];
  for (let pages = 0; pages < maxLinesPerPage; pages += 1) {
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

function set9() {
  const results = [];
  for (let page = 1; page < 10; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= 10; word += 1) {
        if (word === line) {
          words.push(baseUppercaseLeadingSpaces()[word]);
          words.push(baseUppercase()[word]);
        }
      }
      lines.push(words.join(" "));
    }
    results.push(lines.join("\n"));
  }
  return results;
}

function set10() {
  const results = [];
  for (let page = 1; page < 10; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= 10; word += 1) {
        if (word === line) {
          words.push(baseUppercaseTrailingSpaces()[word]);
          words.push(baseUppercaseLeadingSpaces()[word]);
        }
      }
      lines.push(words.join(" "));
    }
    results.push(lines.join("\n"));
  }
  return results;
}

function set11() {
  const results = [];
  for (let page = 1; page < 10; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= 10; word += 1) {
        if (word === line) {
          words.push(baseUppercaseLeadingSpaces()[word]);
          words.push(baseUppercaseTrailingSpaces()[word]);
          words.push(baseUppercaseLeadingSpaces()[word]);
          words.push(baseUppercaseTrailingSpaces()[word]);
        }
      }
      lines.push(words.join(" "));
    }
    results.push(lines.join("\n"));
  }
  return results;
}

function set12() {
  const results = [];
  for (let page = 1; page < 10; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= 10; word += 1) {
        if (word === line) {
          words.push(baseUppercaseTrailingSpaces()[word]);
          words.push(baseUppercaseLeadingSpaces()[word]);
          words.push(baseUppercaseTrailingSpaces()[word]);
          words.push(baseUppercaseLeadingSpaces()[word]);
        }
      }
      lines.push(words.join(" "));
    }
    results.push(lines.join("\n"));
  }
  return results;
}

function set13() {
  const results = [];
  for (let page = 1; page < 10; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= 10; word += 1) {
        words.push(baseUppercase()[line]);
      }
      lines.push(words.join(""));
    }
    results.push(lines.join("\n"));
  }
  return results;
}

function set14() {
  const results = [];
  for (let page = 1; page < 10; page += 1) {
    let lines = [];
    for (let line = 0; line <= page; line += 1) {
      let words = [];
      for (let word = 0; word <= 10; word += 1) {
        words.push(baseLowercase()[line]);
      }
      lines.push(words.join(""));
    }
    results.push(lines.join("\n"));
  }
  return results;
}


const pageSets = [
  set14(),
  set13(),
  set12(),
  set11(),
  set10(),
  set9(),
  set8(),
  set7(),
  set6(),
  set5(),
  set4(),
  set3(),
  set2(),
  set1(),
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
    this.startRun();
  }

  static formats = [];

  static getFormat() {
    if (this.formats.length === 0) {
      this.shuffleFormats();
    }
    return this.formats.pop();
  }

  static loadSets() {
    console.log('loadSets');
    this.sets = pageSets;
    this.padSetsLeft();
    this.padSetsRight();
    this.padSetsTop();
  }

  static padSetsLeft() {
    pageSets.forEach((pageSet) => {
      pageSet.forEach((page) => {
        const lines = page.split("\n");
        let maxLineLength = 0;
        lines.forEach((line) => {
          const lineLength = line.split('').length;
          if (maxLineLength < lineLength) {
            maxLineLength = lineLength;
          }
        });
        if (maxLineLength < maxCharactersPerLine) {
          let newPageSet = [];
          let newPage = [];
          let newLines = [];
          page.split("\n").forEach((line) => {
            let characters = line.split('').reverse();
            for (let addIndex = maxLineLength; addIndex < maxCharactersPerLine; addIndex += 1) {
              characters.push(" ")
            }
            newLines.push(characters.reverse().join(''));
          });
          newPageSet.push(newLines.join("\n"));
          this.sets.push(newPageSet);
        }
      });
    });
  }

  static padSetsRight() {
    pageSets.forEach((pageSet) => {
      pageSet.forEach((page) => {
        const lines = page.split("\n");
        let maxLineLength = 0;
        lines.forEach((line) => {
          const lineLength = line.split('').length;
          if (maxLineLength < lineLength) {
            maxLineLength = lineLength;
          }
        });
        if (maxLineLength < maxCharactersPerLine) {
          let newPageSet = [];
          let newPage = [];
          let newLines = [];
          page.split("\n").forEach((line) => {
            let characters = line.split('');
            for (let addIndex = maxLineLength; addIndex < maxCharactersPerLine; addIndex += 1) {
              characters.push(" ")
            }
            newLines.push(characters.join(''));
          });
          newPageSet.push(newLines.join("\n"));
          this.sets.push(newPageSet);
        }
      });
    });
  }

  static padSetsTop() {
    const targetLines = maxLinesPerPage - 6;
    let newSets = [];
    this.sets.forEach((pages) => {
      pages.forEach((page) => {
        const lines = page.split("\n");
        if (lines.length < targetLines) {
          let newSet = [];
          let newPage = [];
          let newLines = [];
          for (let addLine = 0; addLine < targetLines - lines.length; addLine += 1) {
            newLines.push("");
          }
          newLines.push(...lines);
          newPage.push(newLines.join("\n"));
          // newSet.push(newPage);
          newSets.push(newPage);
        }
      });
    });
    this.sets.push(...newSets);
    //console.log(newSets);
  }

  static shuffleFormats() {
    console.log('shuffleFormats');
    this.formats = [];
    for (let setIndex = 0; setIndex < this.sets.length; setIndex += 1) {
      this.formats.push(...this.sets[setIndex]);
    }
    shuffle(this.formats);
  }

  static kickoff() {
    console.log('kickoff');
    this.loadSets();
    this.startRun();
  }

  static startRun() {
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
    this.content.innerHTML = `${lineString}\n`;
    await sleep(300);
    for (let lineIndex = 0; lineIndex < theLines.length; lineIndex += 1) {
      const words = theLines[lineIndex].split(' ');
      await this.outputWords(words);
      this.content.innerHTML += "\n";
      await sleep(60);
    }
    await sleep(200);
  }

  async outputWords(words) {
    for (let i = 0; i < words.length; i += 1) {
      this.content.innerHTML += words[i];
      if (i !== words.length - 1) {
        this.content.innerHTML +=  " ";
      }
      // await sleep(10);
    }
  }

}

customElements.define('work-page', WorkPage)

