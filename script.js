class Keyboard {
  settings = {
    wrapper: null,
    keyboard: null,
    textarea: null,
    rows: null,
    buttons: [],
    interval: null,
    language: localStorage.getItem('language') || 'en',
    isShift: false,
    isCaps: false,
    keys: [
      [
        { en: '`', ru: 'ё', enShift: '~', code: 'Backquote' },
        { en: '1', ru: '1', enShift: '!', ruShift: '!', code: 'Digit1' },
        { en: '2', ru: '2', enShift: '@', ruShift: '"', code: 'Digit2' },
        { en: '3', ru: '3', enShift: '#', ruShift: '№', code: 'Digit3' },
        { en: '4', ru: '4', enShift: '$', ruShift: ';', code: 'Digit4' },
        { en: '5', ru: '5', enShift: '%', ruShift: '%', code: 'Digit5' },
        { en: '6', ru: '6', enShift: '^', ruShift: ':', code: 'Digit6' },
        { en: '7', ru: '7', enShift: '&', ruShift: '?', code: 'Digit7' },
        { en: '8', ru: '8', enShift: '*', ruShift: '*', code: 'Digit8' },
        { en: '9', ru: '9', enShift: '(', ruShift: '(', code: 'Digit9' },
        { en: '0', ru: '0', enShift: ')', ruShift: ')', code: 'Digit0' },
        { en: '-', ru: '-', enShift: '_', ruShift: '_', code: 'Minus' },
        { en: '=', ru: '=', enShift: '+', ruShift: '+', code: 'Equal' },
        { en: 'Backspace', ru: 'Backspace', code: 'Backspace' },
      ],
      [
        { en: 'Tab', ru: 'Tab', code: 'Tab' },
        { en: 'q', ru: 'й', code: 'KeyQ' },
        { en: 'w', ru: 'ц', code: 'KeyW' },
        { en: 'e', ru: 'у', code: 'KeyE' },
        { en: 'r', ru: 'к', code: 'KeyR' },
        { en: 't', ru: 'е', code: 'KeyT' },
        { en: 'y', ru: 'н', code: 'KeyY' },
        { en: 'u', ru: 'г', code: 'KeyU' },
        { en: 'i', ru: 'ш', code: 'KeyI' },
        { en: 'o', ru: 'щ', code: 'KeyO' },
        { en: 'p', ru: 'з', code: 'KeyP' },
        { en: '[', ru: 'х', enShift: '{', code: 'BracketLeft' },
        { en: ']', ru: 'ъ', enShift: '{', code: 'BracketRight' },
        { en: '\\', ru: '\\', enShift: '|', ruShift: '/', code: 'Backslash' },
        { en: 'Del', ru: 'Del', code: 'Delete' },
      ],
      [
        { en: 'Caps lock', ru: 'Caps lock', code: 'CapsLock' },
        { en: 'a', ru: 'ф', code: 'KeyA' },
        { en: 's', ru: 'ы', code: 'KeyS' },
        { en: 'd', ru: 'в', code: 'KeyD' },
        { en: 'f', ru: 'а', code: 'KeyF' },
        { en: 'g', ru: 'п', code: 'KeyG' },
        { en: 'h', ru: 'р', code: 'KeyH' },
        { en: 'j', ru: 'о', code: 'KeyJ' },
        { en: 'k', ru: 'л', code: 'KeyK' },
        { en: 'l', ru: 'д', code: 'KeyL' },
        { en: ';', ru: 'ж', enShift: ':', code: 'Semicolon' },
        { en: '\'', ru: 'э', enShift: '"', code: 'Quote' },
        { en: 'Enter', ru: 'Enter', code: 'Enter' },
      ],
      [
        { en: 'Shift', ru: 'Shift', code: 'ShiftLeft' },
        { en: 'z', ru: 'я', code: 'KeyZ' },
        { en: 'x', ru: 'ч', code: 'KeyX' },
        { en: 'c', ru: 'с', code: 'KeyC' },
        { en: 'v', ru: 'м', code: 'KeyV' },
        { en: 'b', ru: 'и', code: 'KeyB' },
        { en: 'n', ru: 'т', code: 'KeyN' },
        { en: 'm', ru: 'ь', code: 'KeyM' },
        { en: ',', ru: 'б', enShift: '<', code: 'Comma' },
        { en: '.', ru: 'ю', enShift: '>', code: 'Period' },
        { en: '&#9650;', ru: '&#9650;', code: 'ArrowUp' },
        { en: 'Shift', ru: 'Shift', code: 'ShiftRight' },
      ],
      [
        { en: 'Ctrl', ru: 'Ctrl', code: 'ControlLeft' },
        { en: 'Win', ru: 'Win', code: 'MetaLeft' },
        { en: 'Alt', ru: 'Alt', code: 'AltLeft' },
        { en: ' ', ru: ' ', code: 'Space' },
        { en: 'Alt', ru: 'Alt', code: 'AltRight' },
        { en: 'Ctrl', ru: 'Ctrl', code: 'ControlRight' },
        { en: '&#9668;', ru: '&#9668;', code: 'ArrowLeft' },
        { en: '&#9660;', ru: '&#9660;', code: 'ArrowDown' },
        { en: '&#9658;', ru: '&#9658;', code: 'ArrowRight' },
      ],
    ],
  }

  init () {
    this.createMarkup();
    this.createButtons();
    document.body.addEventListener('keydown', this.keyDown);
    document.body.addEventListener('keyup', this.keyUp);
    this.settings.keyboard.addEventListener('mousedown', this.mouseDown);
    this.settings.keyboard.addEventListener('mouseup', this.mouseUp);
  }

  createMarkup () {
    document.body.innerHTML = '';
    this.settings.wrapper = document.createElement('div');
    this.settings.wrapper.classList.add('wrapper');
    this.settings.wrapper.innerHTML = `<textarea class="text" cols="30" rows="10"></textarea>
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
    if (this.settings.language === 'en') {
      for (let i = 0; i < this.settings.keys.length; i++) {
        this.settings.keys[i].forEach((key) => {
          const btn = document.createElement('button');
          if (key.code == 'Space') {
            btn.classList.add('space');
          }
          btn.setAttribute('data', key.code);
          btn.innerHTML = key.en;
          this.settings.rows[i].append(btn);
        });
      }
    }

    if (this.settings.language === 'ru') {
      for (let i = 0; i < this.settings.keys.length; i++) {
        this.settings.keys[i].forEach((key) => {
          const btn = document.createElement('button');
          if (key.code == 'Space') {
            btn.classList.add('space');
          }
          btn.setAttribute('data', key.code);
          btn.innerHTML = key.ru;
          this.settings.rows[i].append(btn);
        });
      }
    }

    this.settings.buttons = document.querySelectorAll('button');
  }

  keyDown = (event) => {
    this.settings.buttons.forEach((button) => {
      if (button.getAttribute('data') === event.code) {
        button.classList.add('button-active');
      }
    });
  }

  keyUp = (event) => {
    this.settings.buttons.forEach((button) => {
      if (button.getAttribute('data') === event.code) {
        button.classList.remove('button-active');
      }
    });
  }

  mouseDown = (event) => {
    if (event.target.hasAttribute('data')) {
      event.target.classList.add('button-active');
      this.settings.interval = setInterval(() => {
        this.settings.textarea.value += event.target.textContent;
      }, 20);
    }
  }

  mouseUp = (event) => {
    if (event.target.hasAttribute('data')) {
      event.target.classList.remove('button-active');
      clearInterval(this.settings.interval);
    }
  }

}

window.onload = () => {
  const keyboard = new Keyboard();
  keyboard.init();
};