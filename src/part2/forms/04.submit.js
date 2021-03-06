/*
Создайте функцию showPrompt(text, callback), которая выводит форму для ввода с сообщением text и кнопками ОК/Отмена.

При отправке формы (OK/ввод в текстовом поле) – должна вызываться функция callback со значением поля.
При нажатии на Отмена или на клавишу Esc – должна вызываться функция callback(null). Клавиша Esc должна закрывать форму всегда, даже если поле для ввода сообщения не в фокусе.
Особенности реализации:

Форма должна показываться в центре окна (и оставаться в центре при изменении его размеров, а также при прокрутке окна!).
Текст может состоять из нескольких строк, возможен любой HTML
При показе формы остальные элементы страницы использовать нельзя, не работают другие кнопки и т.п, это окно – модальное.
При показе формы – сразу фокус на INPUT для ввода.
Нажатия Tab/Shift+Tab переключают в цикле только по полям формы, они не позволяют переключиться на другие элементы страницы.


https://plnkr.co/edit/LPHR9P3zs4dfSrvdAa7K?p=preview
*/

function task1 () {
  const ESC_KEYCODE = 27

  class Logger {
    constructor() {
      this.logger = document.createElement('div')
      this.logger.classList.add('logger')
      document.body.appendChild(this.logger)
    }
    log(html) {
      this.logger.innerHTML += `<br /> ${html}`
    }
  }
  
  class Prompt {
    constructor (text, callback) {
      this.callback = callback
      this.text = text
      this.formId = _.uniqueId('prompt-')
      this.escapeHandler = e => {
        if (e.keyCode !== ESC_KEYCODE) return
        this.handleCancel()
      }
      
      this.init()
    }

    handleCancel () {
      this.destroy()
      this.callback(null)
    }

    handleSubmit(e) {
      e.preventDefault() // no page reloading
      let val = this.form.elements.text.value
      if (val.length < 1) return
      this.destroy()
      this.callback(val)
    }

    makeFocusHelperInput (pos) {
      let input = `<input type="text" name="focusHelper" tabIndex="0" style="opacity: 0" />`
      this.form.insertAdjacentHTML(pos, input)
    }

    makeFocusCycle(e) {
      let elements = $$(this.form.elements)
      let idx = elements.indexOf(e.target)
      let isOutsideForm = elem => elem && elem.getAttribute('name') === 'focusHelper'

      if (isOutsideForm(e.relatedTarget) && idx === 0) {
        _.last(elements).focus()
      } 
      else if (isOutsideForm(e.relatedTarget) && idx === elements.length - 1) {
        _.first(elements).focus()
      }
    }

    addHandlers() {
      this.form.addEventListener('blur', e => {
        this.makeFocusCycle(e)    
      }, true)
      this.form.addEventListener('submit', e => {
        this.handleSubmit(e)
      })
      this.form.elements.cancel.addEventListener('click', e => {
        this.handleCancel()
      })
      document.body.addEventListener('keydown', e => {
        this.escapeHandler(e)
      })
    }

    init() {
      this.formString =
        `<form id="${this.formId}" class="prompt">
          <div class="prompt-body">
            <p>${this.text}</p>
            <input type="text" name="text"/>
            <input type="button" value="Cancel" name="cancel" />
            <input type="submit" value="Send" />
          </div>
        </form>`

      document.body.insertAdjacentHTML('beforeEnd', this.formString)
      this.form = document.getElementById(this.formId)
      
      this.addHandlers()
      this.form.elements.text.focus();

      //need for correct blur handling, if target is first / last at page
      ['beforeBegin', 'afterEnd'].forEach(pos => this.makeFocusHelperInput(pos))
    }

    destroy() {
      this.form.parentElement.removeChild(this.form)
      document.body.removeEventListener('keydown', this.escapeHandler)
    }
  }


  let logger = new Logger

  new Prompt('Are you ready?', result => {
    logger.log(`Result of 1 prompt is: <u>${result}</u>`)
    new Prompt("Really?", result => {
      logger.log(`Result of 2 prompt is: <u>${result}</u>`)
    });
  });



}
// task1()