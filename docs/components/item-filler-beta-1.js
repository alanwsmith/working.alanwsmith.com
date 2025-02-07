const componentSheet = new CSSStyleSheet();
componentSheet.replaceSync(`
item-filler {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: 100%;
  align-items: var(--item-filler--align-items, center);
  align-content: var(--item-filler--align-content, center); 
  justify-content: var(--item-filler-justify-content, center);
}

item-filler > * {
  box-sizing: border-box;
  display: inline-block;
}
`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, componentSheet];

// const componentSheet = new CSSStyleSheet();
// componentSheet.replaceSync(`
// :host {
//   display: flex;
//   flex-wrap: wrap;
//   box-sizing: border-box;
//   height: 100%;
//   align-items: var(--item-filler--align-items, stretch);
//   align-content: var(--item-filler--align-content, space-between); 
//   justify-content: var(--item-filler-justify-content, space-between);
//   /*
//   border: 1px solid blue;
//   */
// }
// :host > * {
//   box-sizing: border-box;
//   display: inline-block;
//   background: green;
//   width: var(--item-width);
//   height: var(--item-height);
//   /*
//   border: 1px solid green;
//   */
// }
// `);

const template = document.createElement('template');

class ItemFiller extends HTMLElement {
  constructor() {
    super();
  }

  addElements() {
    for (let childIndex = 0; childIndex < this.totalChildren(); childIndex += 1) {
      const el = document.createElement(this.attributes.item);
      el.dataset.calculatedHeight = this.itemCalculatedHeight();
      el.dataset.calculatedWidth = this.itemCalculatedWidth();
      el.dataset.targetHeight = this.itemTargetHeight();
      el.dataset.targetWidth = this.itemTargetWidth();
      el.dataset.index = childIndex;
      el.dataset.index1 = childIndex + 1;
      el.dataset.totalItems = this.totalChildren();
      // el.innerHTML = "stub";
      //

      // TODO: Deprecate and remove this
      if (this.attributes.classes) {
        const theClasses = this.attributes.classes.split(" ");
        theClasses.forEach((c) => {
          el.classList.add(c);
        });
      }

      // this.shadowRoot.appendChild(el);
      this.appendChild(el);
    }
  }

  addInstanceStyleSheet() {
    //console.log(this.id);
    const instanceStyleSheet = new CSSStyleSheet();
    instanceStyleSheet.replaceSync(`
#${this.id} > * {
  width: var(--item-width--${this.id});
  height: var(--item-height--${this.id});
}
`);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, instanceStyleSheet];
  }

  columns() {
    return Math.max(1, Math.floor(this.parent.widthMinusPadding / this.itemTargetWidth()));
  }

  connectedCallback() {
    this.id = `item-filler-${self.crypto.randomUUID()}`;
    this.addInstanceStyleSheet();
    // this.attachShadow({mode: 'open'});
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.adoptedStyleSheets = [componentSheet];
    this.values = {};
    this.loadParent();
    this.getAttributes();
    this.makeDataset();
    this.style.setProperty(`--item-width--${this.id}`, `${this.itemCalculatedWidth()}px`);
    this.style.setProperty(`--item-height--${this.id}`, `${this.itemCalculatedHeight()}px`);
    this.addElements();
  }

  convertToPixels(input) {
    // just handling px input for right now
    return Math.floor(parseFloat(input.trim().replace('px', '')));
  }

  getAttributes() {
    const attrs = this.getAttributeNames()
    attrs.forEach((attr) => {
      if (attr.startsWith(':') === true) {
        this.attributes[attr.substring(1)] = 
          this.getAttribute(attr)
      }
    })
  }

  itemCalculatedHeight() {
    // TODO: This needs to be calculated
    // NOTE: not sure if needed
    return this.itemTargetHeight();
  }

  itemCalculatedWidth() {
    // TODO: This needs to be calculated
    // NOTE: not sure if needed
    return this.itemTargetWidth();
  }


  // itemTargetHeight() {
  //   if (this.attributes['item-height']) {
  //     const heightParts = this.attributes['item-height'].split(',');
  //     const heightMin = this.convertToPixels(heightParts[0]);
  //     if (heightParts.length === 1) {
  //       if (this.minRowsValue() !== null && this.minRowsValue() < heightMin) {
  //         return this.minRowsValue();
  //       } else {
  //         return heightMin;
  //       } 
  //     } else if (heightParts.length >= 2) {
  //       let heightMax = this.convertToPixels(heightParts[1]);
  //       for (let rowCount = 1; rowCount <= 1000; rowCount += 1) {
  //         const checkValue = Math.floor(this.parent.heightMinusPadding / rowCount);
  //         if (checkValue >= heightMin && checkValue <= heightMax) {
  //           if (this.minRowsValue() !== null && this.minRowsValue() < checkValue) {
  //             // console.log(this.minRowsValue());
  //             return this.minRowsValue();
  //           } else {
  //             return checkValue;
  //           } 
  //           break; // this break might not be needed
  //         } else {
  //           return 100;
  //         }
  //       }
  //     } else {
  //       return 100;
  //     }
  //   } else {
  //     return 100;
  //   }
  // }

  itemTargetHeight() {
    if (this.attributes['item-height']) {
      const parts = this.attributes['item-height'].split(':');
      if (parts.length === 1) {
        const maxHeight = Math.min(
          this.convertToPixels(parts[0]),
          Math.floor(this.parent.heightMinusPadding / this.minRows())
        );
        for (let rowCount = this.minRows(); rowCount <= 1000; rowCount += 1) {
          const checkValue = Math.floor(this.parent.heightMinusPadding / rowCount);
          if (checkValue <= maxHeight) {
            return checkValue;
          }
        }
      } else if (parts.length === 2) {
        const ratioWidth = parseFloat(parts[0].trim());
        const ratioHeight = parseFloat(parts[1].trim());
        return Math.floor(this.itemTargetWidth() * ratioHeight / ratioWidth);
      }
    } else {
      return 100;
    }
  }

  itemTargetWidth() {
    if (this.attributes['item-width']) {
      const parts = this.attributes['item-width'].split(':');
      if (parts.length === 1) {
        const maxWidth = Math.min(
          this.convertToPixels(parts[0]),
          Math.floor(this.parent.widthMinusPadding / this.minColumns())
        );
        for (let colCount = this.minColumns(); colCount <= 1000; colCount += 1) {
          const checkValue = Math.floor(this.parent.widthMinusPadding / colCount);
          if (checkValue <= maxWidth) {
            return checkValue;
          }
        }
      } else if (parts.length === 2) {
        const ratioWidth = parseFloat(parts[0].trim());
        const ratioHeight = parseFloat(parts[1].trim());
        return Math.floor(this.itemTargetHeight() * ratioWidth / ratioHeight);
      }
    } else {
      return 100;
    }
  }


  // itemTargetWidth() {
  //   if (this.attributes['item-width']) {
  //     const widthParts = this.attributes['item-width'].split(',');
  //     const widthMin = this.convertToPixels(widthParts[0]);
  //     if (widthParts.length === 1) {
  //       if (this.minColumnsValue() !== null && this.minColumnsValue() < widthMin) {
  //         return this.minColumnsValue();
  //       } else {
  //         return widthMin;
  //       }
  //     } else if (widthParts.length >= 2) {
  //       const widthMax = this.convertToPixels(widthParts[1]);
  //       for (let colCount = 1; colCount <= 1000; colCount += 1) {
  //         const checkValue = Math.floor(this.parent.widthMinusPadding / colCount);
  //         if (checkValue >= widthMin && checkValue <= widthMax) {
  //           if (this.minColumnsValue() !== null && this.minColumnsValue() < checkValue) {
  //             return this.minColumnsValue();
  //           } else {
  //             return checkValue;
  //           }
  //           break; // this break might not be needed
  //         }
  //       }
  //     }
  //     return 100;
  //   } else {
  //     return 100;
  //   }
  // }

  loadParent() {
    const el = this.parentElement;
    const bounds = el.getBoundingClientRect();
    //console.log(el);
    this.parent = {
      'widthMinusPadding': Math.floor(bounds.width),
      'heightMinusPadding': Math.floor(bounds.height),
    }
    if (el.style.paddingLeft) {
      this.parent.widthMinusPadding -= this.convertToPixels(el.style.paddingLeft);
    }
    if (el.style.paddingRight) {
      this.parent.widthMinusPadding -= this.convertToPixels(el.style.paddingRight);
    }
    if (el.style.paddingTop) {
      this.parent.heightMinusPadding -= this.convertToPixels(el.style.paddingTop);
    }
    if (el.style.paddingBottom) {
      this.parent.heightMinusPadding -= this.convertToPixels(el.style.paddingBottom);
    }
  }

  makeDataset() {
    this.dataset.itemTargetWidth = this.itemTargetWidth();
    this.dataset.itemTargetHeight = this.itemTargetHeight();
    this.dataset.rows = this.rows();
    this.dataset.columns = this.columns();
    this.dataset.totalChildren = this.totalChildren();
  }

  minColumnsValue() {
    if (this.attributes['min-columns']) {
      const minColumns = parseInt(this.attributes['min-columns']);
      return Math.floor(this.parent.widthMinusPadding / minColumns);
    } else {
      return null
    }
  }

  minColumns() {
    if (this.attributes['min-columns']) {
      return parseInt(this.attributes['min-columns']);
    } else {
      return 1
    }
  }

  minRows() {
    if (this.attributes['min-rows']) {
      return parseInt(this.attributes['min-rows']);
    } else {
      return 1
    }
  }

// TODO: deprecate
  minRowsValue() {
    if (this.attributes['min-rows']) {
      const minRows = parseInt(this.attributes['min-rows']);
      const result = Math.floor(this.parent.heightMinusPadding / minRows);
      return result;
    } else {
      return null
    }
  }

  rows() {
    const result = Math.max(1, Math.floor(this.parent.heightMinusPadding / this.itemTargetHeight()));
    // console.log('eeeeee');
    // console.log(this.parent.heightMinusPadding);
    // console.log(this.itemTargetHeight());


    return result;
  }

  totalChildren() {
    // console.log(this.columns());
    // console.log(this.rows());
    return this.rows() * this.columns();
  }

}

customElements.define('item-filler', ItemFiller)

