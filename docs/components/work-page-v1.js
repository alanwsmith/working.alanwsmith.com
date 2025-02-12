const maxCharactersPerLine = 52;
const maxLinesPerPage = 10;
let debug = true;
debug = false;

let debugSet = 106;
debugSet = null;

let showFormats = true;
showFormats = false;

function setList() {
  return [

    /////////////////////////////////////////////
    // Index: 0
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const targetLines = [0, 9];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (targetLines.includes(line) ) {
              words.push(baseDashes()[word]);
            } else {
              if (word === page) {
                words.push(baseLowercase()[word]);
              } else {
                words.push(baseDots()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 1
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const targetLines = [0, 9];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (targetLines.includes(line) ) {
              words.push(baseDashes()[word]);
            } else {
              if (word === page) {
                words.push(baseLowercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 2
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const targetLines = [0, 9];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (targetLines.includes(line) ) {
              words.push(baseDashes()[word]);
            } else {
              if (hitRandom(4)) {
                words.push(baseLowercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 3
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const targetLines = [0, 9];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (targetLines.includes(line) ) {
              words.push(baseUppercase()[word]);
            } else {
              if (hitRandom(4)) {
                words.push(baseLowercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 4
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumbers = [
          0,
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          9,
        ]
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (randomNumbers.includes(word) ) {
              words.push(baseLowercase()[word]);
            } else {
              words.push(baseDots()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 5
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumbers = [
          0,
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
        ]
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (randomNumbers.includes(word) ) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseDashes()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 6
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumbers = [
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
        ]
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (randomNumbers.includes(word) ) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 7
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === 0 || line === 9) {
              words.push(baseUppercase()[word]);
            } else if (word === page ) {
              words.push(baseDots()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 8
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === 0 || line === 9) {
              words.push(baseUppercase()[word]);
            } else if (word === page ) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 9
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === 0 || line === 9) {
              words.push(baseDashes()[word]);
            } else if (line === randomNumber) {
              words.push(baseUppercase()[word]);
            } else if (word === page ) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 10
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === randomNumber) {
              words.push(baseUppercase()[word]);
            } else if (word === page ) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 11
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === randomNumber) {
              words.push(baseUppercase()[word]);
            } else if (word === page ) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseDashes()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 12
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === 0 || line === 9) {
              words.push(baseDots()[word]);
            } else if (line === randomNumber) {
              words.push(baseUppercase()[word]);
            } else if (word === page ) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 13
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === randomNumber) {
              words.push(baseDots()[word]);
            } else {
              if (word === page ) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 14
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === randomNumber) {
              words.push(baseUppercase()[word]);
            } else {
              if (word === page ) {
                words.push(baseDots()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 15
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomNumber = randomNumberBetween(0, 9);
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === randomNumber) {
              words.push(baseUppercase()[word]);
            } else {
              if (word === page ) {
                words.push(baseHashtags()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 16
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === page) {
              words.push(baseDots()[word]);
            } else {
              if (hitRandom(3)) {
                words.push(baseLowercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 17
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === page) {
              words.push(baseLowercase()[word]);
            } else {
              if (hitRandom(3)) {
                words.push(baseDots()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 18
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === page ) {
              words.push(baseDashes()[word]);
            } else {
              if (hitRandom(3)) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 19
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line !== page) {
              words.push(baseUppercase()[word]);
            } else {
              if (hitRandom(4)) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 20
    () => {
      const pages = [];
      //for (let targetLine = 0; targetLine < 10; targetLine += 1) {
        for (let page = 0; page < 10; page += 1) {
          const lines = [];
          for (let line = 0; line < 10; line += 1) {
            const words = [];
            for (let word = 0; word < 10; word += 1) {
              if (line !== page && line !== page + 1 && line !== page -1) {
                words.push(baseUppercase()[word]);
              } else {
                if (hitRandom(2)) {
                  words.push(baseDots()[word]);
                } else {
                  words.push(baseSpaces()[word]);
                }
              }
            }
            lines.push(words.join(' '));
          }
          pages.push(lines.join("\n"));
        }
      // } 
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 21
    () => {
      const pages = [];
      // for (let targetLine = 0; targetLine < 10; targetLine += 1) {
        for (let page = 0; page < 10; page += 1) {
          const lines = [];
          for (let line = 0; line < 10; line += 1) {
            const words = [];
            for (let word = 0; word < 10; word += 1) {
              if (line !== page && line !== page + 1 && line !== page -1) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
            lines.push(words.join(' '));
          }
          pages.push(lines.join("\n"));
        }
      // } 
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 22
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
      const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line !== page && line !== page + 1 && line !== page -1 && line !== page + 4) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      } 
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 23
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
      const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line !== page && line !== page + 1 && line !== page -1 && line !== page + 4) {
              words.push(baseLowercase()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 24
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
      const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line !== page) {
              words.push(randomMarkFunction()[word]);
            } else {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 25
    () => {
      const pages = [];
      //for (let targetLine = 0; targetLine < 10; targetLine += 1) {
        for (let page = 0; page < 10; page += 1) {
          const lines = [];
          for (let line = 0; line < 10; line += 1) {
            const words = [];
            for (let word = 0; word < 10; word += 1) {
              if (line === 0 || line == 9) {
                words.push(baseHashtags()[word]);
              } else {
                if (word === 0 || word === 9) {
                  words.push(baseHashtags()[word]);
                } else {
                  if (hitRandom(3)) {
                    words.push(baseLowercase()[word]);
                  } else {
                    words.push(baseSpaces()[word]);
                  }
                }
              }
            }
            lines.push(words.join(' '));
          }
          pages.push(lines.join("\n"));
        }
      //}
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 26
    () => {
      const pages = [];
      //for (let targetLine = 0; targetLine < 10; targetLine += 1) {
        for (let page = 0; page < 10; page += 1) {
          const lines = [];
          for (let line = 0; line < 10; line += 1) {
            const words = [];
            for (let word = 0; word < 10; word += 1) {
              if (line === 0 || line == 9) {
                words.push(baseUppercase()[word]);
              } else {
                if (word === 0 || word === 9) {
                  words.push(baseUppercase()[word]);
                } else {
                  if (hitRandom(3)) {
                    words.push(baseLowercase()[word]);
                  } else {
                    words.push(baseSpaces()[word]);
                  }
                }
              }
            }
            lines.push(words.join(' '));
          }
          pages.push(lines.join("\n"));
        }
      //}
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 27
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === 9) {
              words.push(baseUppercase()[word]);
            } else {
              if (word === page ) {
                words.push(randomMarkFunction()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 28
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line === 0) {
              words.push(baseUppercase()[word]);
            } else {
              if (word === page ) {
                words.push(baseDashes()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 29
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === page) {
              words.push(baseUppercase()[word]);
            } else {
              if (line === page) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseDashes()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 30
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === page) {
              words.push(baseUppercase()[word]);
            } else {
              if (line === page) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 31
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              if (word !== page) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseUppercase()[word]);
              }
            } else {
              if (word === page ) {
                words.push(baseSpaces()[word]);
              } else {
                words.push(baseUppercase()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 32
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === page) {
              if (word !== line) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseUppercase()[word]);
              }
            } else {
              if (word === line) {
                words.push(baseUppercase()[page]);
              } else {
                words.push(baseSpaces()[page]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        if (page !== 5) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 33
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === page) {
              if (word !== line) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseDashes()[word]);
              }
            } else {
              if (word === line) {
                words.push(baseUppercase()[word]);
              } else {
                words.push(baseSpaces()[word]);
              }
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 34
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            words.push(baseLowercase()[word]);
          }
          lines.push(words.join('*'));
        }
        if (page === 9) { 
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 35
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            words.push(baseLowercase()[word]);
          }
          lines.push(centerLine(words.join('')));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 36
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = []
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(3)) {
              words.push(randomMarkFunction()[page]);
            } else {
              words.push(baseLowercase()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 37
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = []
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(3)) {
              words.push(randomMarkFunction()[page]);
            } else {
              words.push(baseUppercase()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 38
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = []
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word < line) {
              words.push(randomMarkFunction()[page]);
            } else {
              words.push(baseUppercase()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 39
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = []
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word < line) {
              words.push(randomMarkFunction()[page]);
            } else {
              words.push(baseUppercase()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 40
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = []
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word <= line) {
              words.push(baseLowercase()[page]);
            } else {
              words.push(randomMarkFunction()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 41
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = []
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word <= line) {
              words.push(baseUppercase()[page]);
            } else {
              words.push(randomMarkFunction()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 42
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = []
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            words.push(baseLowercase()[page]);
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 43
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word <= line) {
              words.push(baseLowercase()[page]);
            } else {
              words.push(baseSpaces()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 44
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < line; word += 1) {
            words.push(baseLowercase()[page]);
          }
          lines.push(words.join(''));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 45
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            words.push(baseUppercase()[page]);
          }
          lines.push(words.join(' '));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 46
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          words.push(baseUppercase()[page]);
          lines.push(centerLineWithDots(words.join(' ')));
        }
        if (page !== 7) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 47
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          //for (let word = 0; word < 10; word += 1) {
            words.push(baseUppercase()[page]);
          //}
          lines.push(centerLineWithDashes(words.join(' ')));
        }
        if (page !== 7) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 48
    () => {
      const pages = [];
      const indexes = [0, 1, 8, 9];
      for (let page = 0; page < markFunctions.length; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (indexes.includes(word)) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(markFunctions[page]()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 49
    () => {
      const pages = [];
      const indexes = [0, 1, 5, 8, 9];
      for (let page = 0; page < markFunctions.length; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (indexes.includes(word)) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(markFunctions[page]()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 50
    () => {
      const pages = [];
      for (let page = 0; page < markFunctions.length; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(markFunctions[page]()[word]);
            } else {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 51
    () => {
      const pages = [];
      for (let page = 0; page < markFunctions.length; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 10; word >= 0; word -= 1) {
            if (word === line) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(markFunctions[page]()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 52
    () => {
      const pages = [];
      for (let page = 0; page < markFunctions.length; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(markFunctions[page]()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 53
    () => {
      const pages = [];
      for (let page = 0; page < markFunctions.length; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseLowercase()[word]);
            } else {
              words.push(markFunctions[page]()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 54
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(9)) {
              words.push(baseLowercase()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 55
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(9)) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseUnderscore()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 56
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(4)) {
              words.push(randomMarkFunction()[word]);
            } else {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 57
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(4)) {
              words.push(baseSpaces()[word]);
            } else {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 58
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(4)) {
              words.push(baseDots()[word]);
            } else {
              words.push(baseLowercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 59
    () => {
      const pages = [];
      for (let page = 0; page < 1; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word <= 6; word += 1) {
            words.push(baseUppercaseTrailingSpaces()[line]);
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 60
    () => {
      const pages = [];
      for (let page = 0; page < 1; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word <= 6; word += 1) {
            words.push(baseLowercaseTrailingSpaces()[line]);
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 61
    () => {
      const pages = [];
      for (let page = 0; page < markFunctions.length; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
              words.push(markFunctions[page]()[1]);
              words.push(markFunctions[page]()[1]);
              words.push(markFunctions[page]()[1]);
              words.push(baseUppercaseLeadingSpaces()[word]);
            }
          }
          lines.push(centerLine(words.join(' ')));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 62
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseTrailingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseTrailingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
            }
          }
          lines.push(centerLine(words.join(' ')));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 63
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
            }
          }
          lines.push(centerLine(words.join(' ')));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 64
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseLowercase()[word]);
              words.push(baseLowercaseLeadingSpaces()[word]);
              words.push(baseLowercaseLeadingSpaces()[word]);
              words.push(baseLowercaseLeadingSpaces()[word]);
              words.push(baseLowercaseLeadingSpaces()[word]);
              words.push(baseLowercaseLeadingSpaces()[word]);
              words.push(baseLowercaseLeadingSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 65
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 66
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseLeadingSpaces()[word]);
            }
          }
          lines.push(centerLine(words.join(' ')));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 67
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseLeadingSpaces()[word]);
              words.push(baseUppercaseTrailingSpaces()[word]);
            }
          }
          lines.push(centerLine(words.join(' ')));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 68
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const leftPadding = randomUnderscoresBetween(0, 36);
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
            }
          }
          lines.push(centerLine(leftPadding + ' ' + words.join(' ')));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 69
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const leftPaddingNumber = randomNumberBetween(3, 14);
        const rightPaddingNumber = randomNumberBetween(3, 14);
        const leftPadding = randomUnderscoresBetween(leftPaddingNumber, leftPaddingNumber);
        const rightPadding = randomUnderscoresBetween(rightPaddingNumber, rightPaddingNumber);
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
            }
          }
          lines.push(centerLine(leftPadding + ' ' + words.join(' ') + ' ' + rightPadding));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 70
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const dotPaddingNumber = randomNumberBetween(1, 12);
        const dotPadding = randomDotsBetween(dotPaddingNumber, dotPaddingNumber);
        const spacePaddingNumber = 16 - dotPaddingNumber;
        const spacePadding = randomSpacesBetween(spacePaddingNumber, spacePaddingNumber);
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
            }
          }
          lines.push(spacePadding + dotPadding + " " + words.join(' ') + ' ' + dotPadding + spacePadding);
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 71
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const rightPadding = randomDotsBetween(5, 30);
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
            }
          }
          lines.push(centerLine(words.join(' ') + ' ' + rightPadding));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 72
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const leftPadding = randomSpacesBetween(16, 16);
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === page) {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(leftPadding + words.join(' '));
        }
        if (page !== 7) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 73
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(6)) {
              words.push(baseSpaces()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 74
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(5)) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseLowercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 75
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunction();
        const randomWords = [
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
        ];
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (randomWords.includes(word)) {
              words.push(randomMarkFunction()[word]);
            } else {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 76
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunction();
        const randomWords = [
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
          randomNumberBetween(0, 9),
        ];
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (randomWords.includes(word)) {
              words.push(randomMarkFunction()[word]);
            } else {
              words.push(baseLowercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 77
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if ((word + line) % 2 === 1) {
              words.push(baseSpaces()[word]);
            } else {
              words.push(baseLowercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 78
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(3)) {
              words.push(baseLowercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 79
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunction();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line == page) {
              words.push(randomMarkFunction()[word]);
            } else {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 80
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomMarkFunction = getRandomMarkFunction();
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line == page) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 81
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomMarkFunction = getRandomMarkFunction();
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line == page) {
              words.push(baseLowercase()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 82
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomMarkFunction = getRandomMarkFunction();
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line == page) {
              words.push(randomMarkFunction()[word]);
            } else {
              words.push(baseLowercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 83
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomMarkFunction = getRandomMarkFunction();
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(3)) {
              words.push(baseLowercase()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 84
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomMarkFunction = getRandomMarkFunction();
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line == page) {
              words.push(baseSpaces()[word]);
            } else {
              words.push(baseLowercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        if (page !== 0 && page !== 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 85
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomMarkFunction = getRandomMarkFunction();
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(3)) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 86
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomMarkFunction = getRandomMarkFunction();
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(3)) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 87
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if ((word + line) % 2 === 0) {
              words.push(baseSpaces()[word]);
            } else {
              words.push(baseLowercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 88
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if ((word + line) % 2 === 0) {
              words.push(baseSpaces()[word]);
            } else {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 89
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if ((word + line) % 2 === 1) {
              words.push(baseSpaces()[word]);
            } else {
              words.push(baseUppercase()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        if (page === 9) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 90
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        for (let func = 0; func < markFunctions.length; func += 1) {
          const randomMarkFunction = getRandomMarkFunction();
          const lines = [];
          for (let line = 0; line < 10; line += 1) {
            const words = [];
            for (let word = 0; word < 10; word += 1) {
              if ((word + line) % 2 === 0) {
                words.push(randomMarkFunction()[word]);
              } else {
                words.push(baseLowercase()[word]);
              }
            }
            lines.push(words.join(' '));
          }
          if (page === 9) {
            pages.push(lines.join("\n"));
          }
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 91
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        for (let func = 0; func < markFunctions.length; func += 1) {
          const randomMarkFunction = getRandomMarkFunction();
          const lines = [];
          for (let line = 0; line < 10; line += 1) {
            const words = [];
            for (let word = 0; word < 10; word += 1) {
              if ((word + line) % 2 === 1) {
                words.push(randomMarkFunction()[word]);
              } else {
                words.push(baseLowercase()[word]);
              }
            }
            lines.push(words.join(' '));
          }
          if (page === 9) {
            pages.push(lines.join("\n"));
          }
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 92
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        for (let func = 0; func < markFunctions.length; func += 1) {
          const randomMarkFunction = getRandomMarkFunction();
          const lines = [];
          for (let line = 0; line < 10; line += 1) {
            const words = [];
            for (let word = 0; word < 10; word += 1) {
              if ((word + line) % 2 === 0) {
                words.push(randomMarkFunction()[word]);
              } else {
                words.push(baseUppercase()[word]);
              }
            }
            lines.push(words.join(' '));
          }
          if (page === 9) {
            pages.push(lines.join("\n"));
          }
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 93
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        for (let func = 0; func < markFunctions.length; func += 1) {
          const randomMarkFunction = getRandomMarkFunction();
          const lines = [];
          for (let line = 0; line < 10; line += 1) {
            const words = [];
            for (let word = 0; word < 10; word += 1) {
              if ((word + line) % 2 === 1) {
                words.push(randomMarkFunction()[word]);
              } else {
                words.push(baseUppercase()[word]);
              }
            }
            lines.push(words.join(' '));
          }
          if (page === 9) {
            pages.push(lines.join("\n"));
          }
        }
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 94
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        const randomMarkFunction = getRandomMarkFunction();
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(6)) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 95
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunction();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(6)) {
              words.push(baseLowercase()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 96
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunction();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (hitRandom(randomNumberBetween(3,7))) {
              words.push(baseLowercase()[word]);
            } else if (hitRandom(randomNumberBetween(3,7))) {
              words.push(randomMarkFunction()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 97
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === page) {
              words.push(baseUppercase()[word]);
            } else if (word === 0) {
              words.push(baseOpenBracket()[word]);
            } else if (word === 9) {
              words.push(baseCloseBracket()[word]);
            } else {
              words.push(baseSpaces()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 98
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomMarkFunction = getRandomMarkFunctionWithoutSpaces();
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === page) {
              words.push(baseUppercase()[word]);
            } else {
              words.push(randomMarkFunction()[word]);
            }
          }
          lines.push(words.join(' '));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 99
    () => {
      const pages = [];
      for (let page = 0; page < 10; page += 1) {
        const rightPadding = randomUnderscoresBetween(5, 30);
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word === line) {
              words.push(baseUppercaseTrailingSpaces()[word]);
            }
          }
          lines.push(centerLine(words.join(' ') + ' ' + rightPadding));
        }
        pages.push(lines.join("\n"));
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 100
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word <= line) {
              words.push(baseLowercase()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 101
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word <= line) {
              words.push(baseLowercase()[page]);
            }
          }
          lines.push(centerLineWithDots(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 102
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word >= line) {
              words.push(baseLowercase()[page]);
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 103
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word >= line) {
              words.push(baseLowercase()[page]);
            }
          }
          lines.push(centerLineWithDots(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 104
    () => {
      const pages = [];
      const skipPages = [7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line >= 5) {
              if (word >= line) {
                words.push(baseLowercase()[page]);
              }
            } else {
              if (word <= line) {
                words.push(baseLowercase()[page]);
              }
            }
          }
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 105
    () => {
      const pages = [];
      const skipPages = [7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line >= 5) {
              if (word >= line) {
                words.push(baseLowercase()[page]);
              }
            } else {
              if (word <= line) {
                words.push(baseLowercase()[page]);
              }
            }
          }
          lines.push(centerLineWithDots(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 106
    () => {
      const pages = [];
      const skipPages = [];
      for (let page = 0; page < 10; page += 1) {
        const randomNumber = randomNumberBetween(0, 9); 
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          words.push('[');
          for (let word = 0; word < 10; word += 1) {
            if (word === randomNumber) {
              words.push(baseUppercase()[word]);
            } else {
              if (word > randomNumber) {
                words.push(baseCloseBracket()[word]);
              } else {
                words.push(baseOpenBracket()[word]);
              }
            }
          }
          words.push(']');
          lines.push(centerLine(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },


    /////////////////////////////////////////////
    // Index: 107
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word <= line) {
              words.push(baseLowercase()[page]);
            }
          }
          lines.push(centerLineWithBrackets(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 108
    () => {
      const pages = [];
      const skipPages = [5, 7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (word >= line) {
              words.push(baseLowercase()[page]);
            }
          }
          lines.push(centerLineWithBrackets(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

    /////////////////////////////////////////////
    // Index: 109
    () => {
      const pages = [];
      const skipPages = [7];
      for (let page = 0; page < 10; page += 1) {
        const lines = [];
        for (let line = 0; line < 10; line += 1) {
          const words = [];
          for (let word = 0; word < 10; word += 1) {
            if (line >= 5) {
              if (word >= line) {
                words.push(baseLowercase()[page]);
              }
            } else {
              if (word <= line) {
                words.push(baseLowercase()[page]);
              }
            }
          }
          lines.push(centerLineWithBrackets(words.join('')));
        }
        if (skipPages.includes(page) === false) {
          pages.push(lines.join("\n"));
        }
      }
      return pages;
    },

  ]
}

function centerLine(line) {
  const characterCount = Math.floor(line.split('').length / 2);
  const leftPad = 22 - characterCount;
  const rightPad = leftPad - (line.split('').length % 2); 
  if (leftPad > 0) {
    return Array(leftPad).fill(' ').join('') + line + Array(rightPad).fill(' ').join('');
  } else {
    return line;
  }
}

function centerLineWithDashes(line) {
  const characterCount = Math.floor(line.split('').length / 2);
  const leftPad = 22 - characterCount;
  const rightPad = leftPad - (line.split('').length % 2); 
  if (leftPad > 0) {
    return Array(leftPad).fill('-').join('') + line + Array(rightPad).fill('-').join('');
  } else {
    return line;
  }
}

function centerLineWithBrackets(line) {
  const characterCount = Math.floor(line.split('').length / 2);
  const leftPad = 22 - characterCount;
  const rightPad = leftPad - (line.split('').length % 2); 
  if (leftPad > 0) {
    return Array(leftPad).fill('[').join('') + line + Array(rightPad).fill(']').join('');
  } else {
    return line;
  }
}


function centerLineWithDots(line) {
  const characterCount = Math.floor(line.split('').length / 2);
  const leftPad = 22 - characterCount;
  const rightPad = leftPad - (line.split('').length % 2); 
  if (leftPad > 0) {
    return Array(leftPad).fill('.').join('') + line + Array(rightPad).fill('.').join('');
  } else {
    return line;
  }
}

function hitRandom(num) {
  const checkNum = Math.floor(Math.random() *  num) +  1;
  if (checkNum === num) {
    return true;
  } else {
    return false;
  }
}

function randomNumberBetween (min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomSpacesBetween (min, max) { 
  const spaceCount = Math.floor(Math.random() * (max - min + 1) + min);
  const theSpaces = Array(spaceCount).fill(' ').join('');
  return theSpaces;
}

function randomMarkBetween (min, max) { 
  const spaceCount = Math.floor(Math.random() * (max - min + 1) + min);
  let marks = [
    '-', '|', '*', '/', '\\', '#'
  ];
  shuffle(marks);
  const theSpaces = Array(spaceCount).fill(marks[0]).join('');
  return theSpaces;
}

function randomDotsBetween (min, max) { 
  const spaceCount = Math.floor(Math.random() * (max - min + 1) + min);
  const theSpaces = Array(spaceCount).fill('.').join('');
  return theSpaces;
}

function randomSlashesBetween (min, max) { 
  const spaceCount = Math.floor(Math.random() * (max - min + 1) + min);
  const theSpaces = Array(spaceCount).fill('/').join('');
  return theSpaces;
}

function randomUnderscoresBetween (min, max) { 
  const spaceCount = Math.floor(Math.random() * (max - min + 1) + min);
  const theSpaces = Array(spaceCount).fill('_').join('');
  return theSpaces;
}

const markFunctionsWithoutSpaces = [
    baseAsterisks,
    baseBackSlashes,
    baseCarets,
    baseDashes, 
    baseDots,
    baseHashtags,
    basePipes,
    baseSlashes,
    baseUnderscore,
    baseOpenBracket,
    baseCloseBracket,
];

const markFunctions = [
  ...markFunctionsWithoutSpaces,  
  baseSpaces,
];

function getRandomMarkFunction() {
  let funcs = markFunctions;
  shuffle(funcs);
  return funcs[0];
}

function getRandomMarkFunctionWithoutSpaces() {
  let funcs = markFunctionsWithoutSpaces;
  shuffle(funcs);
  return funcs[0];
}

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

// All lowercase leading spaces
function baseLowercaseLeadingSpaces() {
  return baseLowercase().map((v) => { 
    let parts = v.split('');
    parts.reverse();
    for (let i = 0; i < 5; i += 1) {
      if (!parts[i]) {
        parts.push(' ');
      }
    }
    parts.reverse();
    return parts.join("");
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

// All lowercase trailing spaces
function baseLowercaseTrailingSpaces() {
  return baseLowercase().map((v) => { 
    let parts = v.split('');
    for (let i = 0; i < 5; i += 1) {
      if (!parts[i]) {
        parts.push(' ');
      }
    }
    return parts.join("");
  });
}

// Capital case
function baseCapital() {
  return baseLowercase().map((v) => { 
    return String(v).charAt(0).toUpperCase() + String(v).slice(1);
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

// letters replaced with underscores
function baseUnderscore() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '_');
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

// letters replaced with dots 
function baseDots() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '.');
  });
}

// letters replaced with slashes 
function baseSlashes() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '/');
  });
}

// letters replaced with backslashes 
function baseBackSlashes() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '\\');
  });
}

// letters replaced with pipes 
function basePipes() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '|');
  });
}

// letters replaced with asterisks 
function baseAsterisks() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '*');
  });
}

// letters replaced with dash 
function baseDashes() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '-');
  });
}

// letters replaced with dash 
function baseCarets() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '^');
  });
}

// letters replaced with open bracket
function baseOpenBracket() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, '[');
  });
}

// letters replaced with close bracket
function baseCloseBracket() {
  return baseLowercase().map((v) => {
    return v.replaceAll(/./g, ']');
  });
}

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
  padding: 0.4rem;
}

.card {
  display: flex;
  justify-content: center;
  border-radius: 2px;
  position: absolute;
  background-image: url("data:image/jpg;base64,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");
  background-size: cover;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-shadow: 2px 2px 3px 2px rgb(0 0 0 / 20%);
  overflow-x: clip;
  overflow-y: clip;
  font-size: var(--card-font-size);
  color: var(--card-font-color);
  text-shadow: 1px 1px 2px rgb(0 0 0 / 0.1);
}


.card-1 {
  transform: var(--rotate-card-1);
  z-index: 1;
}

.card-2 {
  transform: var(--rotate-card-2);
  z-index: 2;
}

.card-3 {
  transform: var(--rotate-card-3);
  z-index: 3;
}

.card-4 {
  transform: var(--rotate-card-4);
  z-index: 4;
}

.wrapper {
  position: relative;
  height: 100%;
/*
  border-radius: 2px;
  box-sizing: border-box;
  padding-block: 0.2rem;
  z-index: 2;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
*/
}

.content {
  margin-top: 1.3rem;
  overflow-x: clip;
}

.written {
  background-image: url("data:image/jpg;base64,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");
  background-size: cover;
  color: black;
}
`);

const template = document.createElement('template');
template.innerHTML = `
<div class="wrapper">
  <div class="card card-1"><pre class="content"></pre></div>
  <div class="card card-2"><pre class="content"></pre></div>
  <div class="card card-3"><pre class="content"></pre></div>
  <div class="card card-4"><pre class="content"></pre></div>
</div>
`;

class WorkPage extends HTMLElement {

  static instances = {};

  static pageOrder = [];

  static outputDebugView() {
    this.loadSets();
    const outEl = document.createElement('div');
    this.sets.forEach((debugSet, debugSetIndex) => {
      const setEl = document.createElement('div');
      const pageArray = [];
      debugSet.forEach((pages) => {
        pageArray.push(pages);
      });
      setEl.innerHTML = `<h2>Set Index: ${debugSetIndex}</h2><div><pre>${pageArray.join('</pre></div><hr /><div><pre>')}</pre></div>`;
      outEl.appendChild(setEl);
    });
    const el = document.querySelector('.debug-view');
    el.appendChild(outEl);
  }

  static deregister(el) {
    // TODO: Remove the element
  }

  static updatePageOrder() {
    // console.log('updatePageOrder');
    for (let id in this.instances) {
      this.pageOrder.push(id);
    }
    this.pageOrder.reverse();
    shuffle(this.pageOrder);
  }

  static async updatePage() {
    // console.log('updatePage');
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

  static baseSets() {
    let theSets = [];
    setList().forEach((setItem, setIndex) => {
      if (debugSet === setIndex) {
        theSets.push(setItem());
      } else if (debugSet === null) {
        theSets.push(setItem());
      }
    });
    return theSets;
  }

  static loadSets() {
    // console.log('loadSets');
    this.sets = this.baseSets();
    // this.padSetsLeft();
    // this.padSetsRight();
    // this.padSetsTop();
    console.log(`Total sets: ${this.sets.length}`);
  }

  static padSetsLeft() {
    this.baseSets().forEach((pageSet) => {
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
    this.baseSets().forEach((pageSet) => {
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
    // console.log('shuffleFormats');
    this.formats = [];
    for (let setIndex = 0; setIndex < this.sets.length; setIndex += 1) {
      this.formats.push(...this.sets[setIndex]);
    }
    shuffle(this.formats);
  }

  static kickoff() {
    console.log('kickoff');
    if (showFormats === true) {
      this.outputDebugView();
    }
    this.startRun();
  }

  static startRun() {
    this.loadSets();
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
    this.wrapper = this.shadowRoot.querySelector('.card-4');
    this.content = this.shadowRoot.querySelector('.card-4 .content');
    this.setFontSize();
    this.setFontColor();
    this.setRotations();
    this.constructor.register(this);
    this.completedFirstWrite = false;
  }

  setRotations() {
    for (let i = 1; i <= 3; i += 1) {
      const value = randomNumberBetween(-80, 80) / 100;
      this.style.setProperty(`--rotate-card-${i}`, `rotate(${value}deg)`);
    }
  }

  setFontSize() {
    const rect = this.wrapper.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const size = width * 0.00176;
    this.style.setProperty('--card-font-size', `${size}rem`);
  }

  setFontColor() {
    this.style.setProperty('--card-font-color', `black`);
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
    if (this.completedFirstWrite) {
      await sleep(randomNumberBetween(400, 900));
    }
    this.allowBolds = hitRandom(4);
    this.allowFrequentBolds = hitRandom(9);
    for (let lineIndex = 0; lineIndex < theLines.length; lineIndex += 1) {
      // handle the different splitters start 
      // with space then fallback. note that this
      // may break things where you have sinlge
      // lines with asterisks. TODO: check that.
      let words = theLines[lineIndex].split(' ');
      if (words.length === 1) {
        words = theLines[lineIndex].split('*');
        await this.outputWords(words, '*');
      } else {
        await this.outputWords(words, ' ');
      }

      this.content.innerHTML += "\n";
      if (this.completedFirstWrite) {
        await sleep(randomNumberBetween(30, 100));
      }
    }
    if (this.completedFirstWrite) {
      await sleep(randomNumberBetween(900, 1800));
    }
    this.completedFirstWrite = true;
  }

  async outputWords(words, joiner) {
    for (let i = 0; i < words.length; i += 1) {
      if (this.allowFrequentBolds === true && hitRandom(3) === false) {
        this.content.innerHTML += `<strong>${words[i]}</strong>`;
      } else if (this.allowBolds === true && hitRandom(7) === true) {
        this.content.innerHTML += `<strong>${words[i]}</strong>`;
      } else {
       this.content.innerHTML += words[i];
      }
      if (i !== words.length - 1) {
        this.content.innerHTML +=  joiner;
      }
      // await sleep(10);
    }
  }

}

customElements.define('work-page', WorkPage)

