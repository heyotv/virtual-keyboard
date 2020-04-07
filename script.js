class Keyboard {
  settings = {
    wrapper: null,
    keyboard: null,
    textarea: null,
    rows: null,
    buttons: [],
    language: localStorage.getItem('language') || 'en',
    isShift: false,
    isCaps: false,
    keys: [
      [
        { en: '`', ru: 'ё', enShift: '~', code: 'Backquote', special: false },
        { en: '1', ru: '1', enShift: '!', ruShift: '!', code: 'Digit1', special: false },
        { en: '2', ru: '2', enShift: '@', ruShift: '"', code: 'Digit2', special: false },
        { en: '3', ru: '3', enShift: '#', ruShift: '№', code: 'Digit3', special: false },
        { en: '4', ru: '4', enShift: '$', ruShift: ';', code: 'Digit4', special: false },
        { en: '5', ru: '5', enShift: '%', ruShift: '%', code: 'Digit5', special: false },
        { en: '6', ru: '6', enShift: '^', ruShift: ':', code: 'Digit6', special: false },
        { en: '7', ru: '7', enShift: '&', ruShift: '?', code: 'Digit7', special: false },
        { en: '8', ru: '8', enShift: '*', ruShift: '*', code: 'Digit8', special: false },
        { en: '9', ru: '9', enShift: '(', ruShift: '(', code: 'Digit9', special: false },
        { en: '0', ru: '0', enShift: ')', ruShift: ')', code: 'Digit0', special: false },
        { en: '-', ru: '-', enShift: '_', ruShift: '_', code: 'Minus', special: false },
        { en: '=', ru: '=', enShift: '+', ruShift: '+', code: 'Equal', special: false },
        { en: 'Backspace', ru: 'Backspace', code: 'Backspace', special: true },
      ],
      [
        { en: 'Tab', ru: 'Tab', code: 'Tab', special: true },
        { en: 'q', ru: 'й', code: 'KeyQ', special: false },
        { en: 'w', ru: 'ц', code: 'KeyW', special: false },
        { en: 'e', ru: 'у', code: 'KeyE', special: false },
        { en: 'r', ru: 'к', code: 'KeyR', special: false },
        { en: 't', ru: 'е', code: 'KeyT', special: false },
        { en: 'y', ru: 'н', code: 'KeyY', special: false },
        { en: 'u', ru: 'г', code: 'KeyU', special: false },
        { en: 'i', ru: 'ш', code: 'KeyI', special: false },
        { en: 'o', ru: 'щ', code: 'KeyO', special: false },
        { en: 'p', ru: 'з', code: 'KeyP', special: false },
        { en: '[', ru: 'х', enShift: '{', code: 'BracketLeft', special: false },
        { en: ']', ru: 'ъ', enShift: '{', code: 'BracketRight', special: false },
        { en: '\\', ru: '\\', enShift: '|', ruShift: '/', code: 'Backslash', special: false },
        { en: 'Del', ru: 'Del', code: 'Delete', special: true },
      ],
      [
        { en: 'Caps lock', ru: 'Caps lock', code: 'CapsLock', special: true },
        { en: 'a', ru: 'ф', code: 'KeyA', special: false },
        { en: 's', ru: 'ы', code: 'KeyS', special: false },
        { en: 'd', ru: 'в', code: 'KeyD', special: false },
        { en: 'f', ru: 'а', code: 'KeyF', special: false },
        { en: 'g', ru: 'п', code: 'KeyG', special: false },
        { en: 'h', ru: 'р', code: 'KeyH', special: false },
        { en: 'j', ru: 'о', code: 'KeyJ', special: false },
        { en: 'k', ru: 'л', code: 'KeyK', special: false },
        { en: 'l', ru: 'д', code: 'KeyL', special: false },
        { en: ';', ru: 'ж', enShift: ':', code: 'Semicolon', special: false },
        { en: '\'', ru: 'э', enShift: '"', code: 'Quote', special: false },
        { en: 'Enter', ru: 'Enter', code: 'Enter', special: true },
      ],
      [
        { en: 'Shift', ru: 'Shift', code: 'ShiftLeft', special: true },
        { en: 'z', ru: 'я', code: 'KeyZ', special: false },
        { en: 'x', ru: 'ч', code: 'KeyX', special: false },
        { en: 'c', ru: 'с', code: 'KeyC', special: false },
        { en: 'v', ru: 'м', code: 'KeyV', special: false },
        { en: 'b', ru: 'и', code: 'KeyB', special: false },
        { en: 'n', ru: 'т', code: 'KeyN', special: false },
        { en: 'm', ru: 'ь', code: 'KeyM', special: false },
        { en: ',', ru: 'б', enShift: '<', code: 'Comma', special: false },
        { en: '.', ru: 'ю', enShift: '>', code: 'Period', special: false },
        { en: '▲', ru: '▲', code: 'ArrowUp', special: false },
        { en: 'Shift', ru: 'Shift', code: 'ShiftRight', special: true },
      ],
      [
        { en: 'Ctrl', ru: 'Ctrl', code: 'ControlLeft', special: true },
        { en: 'Win', ru: 'Win', code: 'MetaLeft', special: true },
        { en: 'Alt', ru: 'Alt', code: 'AltLeft', special: true },
        { en: ' ', ru: ' ', code: 'Space', special: false },
        { en: 'Ctrl', ru: 'Ctrl', code: 'ControlRight', special: true },
        { en: '◄', ru: '◄', code: 'ArrowLeft', special: false },
        { en: '▼', ru: '▼', code: 'ArrowDown', special: false },
        { en: '►', ru: '►', code: 'ArrowRight', special: false },
        { en: 'Alt', ru: 'Alt', code: 'AltRight', special: true },
      ],
    ],
  }

  init () {
    this.createMarkup();
    this.createButtons();
    this.addButtonsNames();
    document.body.addEventListener('keydown', this.keyDown);
    document.body.addEventListener('keyup', this.keyUp);
    this.settings.keyboard.addEventListener('mousedown', this.mouseDown);
    this.settings.keyboard.addEventListener('mouseup', this.mouseUp);
    this.settings.keyboard.addEventListener('mouseout', this.mouseOut);
  }

  createMarkup () {
    document.body.innerHTML = '';
    this.settings.wrapper = document.createElement('div');
    this.settings.wrapper.classList.add('wrapper');
    this.settings.wrapper.innerHTML = `<textarea class="text" cols="30" rows="10" autofocus></textarea>
    <div class="keyboard">
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
    </div>`;
    document.body.prepend(this.settings.wrapper);

    this.settings.keyboard = document.querySelector('.keyboard');
    this.settings.textarea = document.querySelector('.text');
    this.settings.rows = document.querySelectorAll('.row');
  }

  createButtons () {
    this.settings.rows.forEach((row) => {
      row.innerHTML = '';
    });
    for (let i = 0; i < this.settings.keys.length; i++) {
      this.settings.keys[i].forEach((key) => {
        const btn = document.createElement('button');
        switch (key.code) {
        case 'Space':
          btn.classList.add('space');
          break;
        case 'Backspace':
          btn.classList.add('backspace');
          break;
        case 'Tab':
          btn.classList.add('tab');
          break;
        case 'Delete':
          btn.classList.add('delete');
          break;
        case 'CapsLock':
          btn.classList.add('capslock');
          break;
        case 'Enter':
          btn.classList.add('enter');
          break;
        case 'ShiftLeft':
          btn.classList.add('shift');
          break;
        case 'ShiftRight':
          btn.classList.add('shift');
          break;
        case 'ControlLeft':
          btn.classList.add('control');
          break;
        case 'MetaLeft':
          btn.classList.add('meta-left');
          break;
        case 'AltLeft':
          btn.classList.add('alt-left');
          break;
        case 'AltRight':
          btn.classList.add('alt-right');
          break;
        case 'ControlRight':
          btn.classList.add('control');
          break;
        }       
        btn.setAttribute('data', key.code);      
        this.settings.rows[i].append(btn);
      });
    }
    this.settings.buttons = document.querySelectorAll('button');
  }

  addButtonsNames () {
    let keys = this.settings.keys.flat();
    this.settings.buttons.forEach((button, index) => {
      if (this.settings.isShift && !this.settings.isCaps && !keys[index].special) {
        let shift = this.settings.language + 'Shift';
        button.innerHTML = keys[index][shift] || keys[index][this.settings.language].toUpperCase();
      } else if (this.settings.isCaps && !this.settings.isShift && !keys[index].special) {
        button.innerHTML = keys[index][this.settings.language].toUpperCase();
      } else if (this.settings.isCaps && this.settings.isShift && !keys[index].special) {
        button.innerHTML = keys[index][this.settings.language].toLowerCase();
      } else {
        button.innerHTML = keys[index][this.settings.language];
      }  
    });
  }

  switchLanguange () {
    this.settings.language = (this.settings.language === 'en') ? 'ru' : 'en';
    localStorage.setItem('language', this.settings.language);
    this.addButtonsNames();
  }

  buttonPressed (key) {
    if (!key.special) {
      if (key[this.settings.language + 'Shift'] && this.settings.isShift) {
        this.writeSymbol(key[this.settings.language + 'Shift']);
      } else {
        this.writeSymbol(key[this.settings.language]);
      }    
    } else {
      switch (key.code) {
      case 'Backspace':
        this.backspacePressed();
        break;
      case 'Tab':
        this.tabPressed();
        break;
      case 'CapsLock':
        this.capslockPressed();
        break;
      case 'Delete':
        this.deletePressed();
        break;
      case 'Enter':
        this.enterPressed();
        break;
      case 'ShiftLeft':
        this.shiftPressed();
        break;
      case 'ShiftRight':
        this.shiftPressed();
        break;
      }
    }
  }

  writeSymbol (symbol) {
    let value = this.settings.textarea.value;
    let selectionStart = this.settings.textarea.selectionStart;
    let selectionEnd = this.settings.textarea.selectionEnd;
    if (this.settings.isCaps && !this.settings.isShift) {
      symbol = symbol.toUpperCase();
    }
    if (this.settings.isShift && !this.settings.isCaps) {
      symbol = symbol.toUpperCase();
    }
    if (selectionStart != selectionEnd) {
      this.settings.textarea.value = value.slice(0, selectionStart) + symbol + value.slice(selectionEnd);
    } else {
      this.settings.textarea.value = value.slice(0, selectionStart) + symbol + value.slice(selectionStart);
    }
    this.settings.textarea.selectionStart = selectionStart + 1;
    this.settings.textarea.selectionEnd = selectionEnd + 1;
  }

  backspacePressed () {
    let value = this.settings.textarea.value;
    let selectionStart = this.settings.textarea.selectionStart;
    let selectionEnd = this.settings.textarea.selectionEnd;
    if (value.length > 0 && selectionStart > 0) {
      if (selectionStart != selectionEnd) {
        this.settings.textarea.value = value.slice(0, selectionStart) + value.slice(selectionEnd);
        this.settings.textarea.selectionStart = selectionStart;
        this.settings.textarea.selectionEnd = selectionStart;
      } else {
        this.settings.textarea.value = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
        this.settings.textarea.selectionStart = selectionStart - 1;
        this.settings.textarea.selectionEnd = selectionStart - 1;
      }
    }
  }

  tabPressed () {
    this.settings.textarea.value += '\t';
  }

  deletePressed () {
    let value = this.settings.textarea.value;
    let selectionStart = this.settings.textarea.selectionStart;
    let selectionEnd = this.settings.textarea.selectionEnd;
    if (selectionStart != selectionEnd) {
      this.settings.textarea.value = value.slice(0, selectionStart) + value.slice(selectionEnd);
      this.settings.textarea.selectionStart = selectionStart;
      this.settings.textarea.selectionEnd = selectionStart;
    } else {
      this.settings.textarea.value = value.slice(0, selectionStart) + value.slice(selectionStart + 1);
      this.settings.textarea.selectionStart = selectionStart;
      this.settings.textarea.selectionEnd = selectionStart;
    }  
  }

  capslockPressed () {
    this.settings.isCaps = (this.settings.isCaps === true) ? false : true;
    this.addButtonsNames();
  }

  enterPressed () {
    this.settings.textarea.value += '\n';
  }

  shiftPressed () {
    this.settings.isShift = (this.settings.isShift === true) ? false : true;
    this.addButtonsNames();
  }

  keyDown = (event) => {
    this.settings.buttons.forEach((button) => {
      if (button.getAttribute('data') === event.code) {
        button.classList.add('button-active');      
      }
    });
    if (event.shiftKey && event.altKey) {
      this.switchLanguange();
    }
    
    if (event.shiftKey && !event.altKey) {
      this.settings.isShift = true;
      this.addButtonsNames();
    }

    if (event.code === 'CapsLock') {
      this.settings.isCaps = (this.settings.isCaps === true) ? false : true;
      this.addButtonsNames();
    }
  }

  keyUp = (event) => {
    this.settings.buttons.forEach((button) => {
      if (button.getAttribute('data') === event.code) {
        button.classList.remove('button-active');
      }
    });
    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && this.settings.isShift) {
      this.settings.isShift = false;
      this.addButtonsNames();
    }
  }

  mouseDown = (event) => {
    if (event.target.hasAttribute('data')) {
      event.target.classList.add('button-active');
      let keys = this.settings.keys.flat();
      this.settings.buttons.forEach((button, index) => {
        if (button == event.target) {
          this.buttonPressed(keys[index]);
        }
      });
    }
  }

  mouseUp = (event) => {
    if (event.target.hasAttribute('data')) {
      event.target.classList.remove('button-active');
    }
    if ((event.target.getAttribute('data') === 'ShiftLeft' || event.target.getAttribute('data') === 'ShiftRight') && this.settings.isShift) {
      this.settings.isShift = false;
      this.addButtonsNames();
    }
    this.settings.textarea.focus();
  }

  mouseOut = (event) => {
    if (event.target.hasAttribute('data')) {
      event.target.classList.remove('button-active');
    }
  }
}

window.onload = () => {
  const keyboard = new Keyboard();
  keyboard.init();
};