/*
  Form element change events:


    - change: when change value of element. for input / textarea fires, when focus lost


    - input: instantly fires when change value of element. 
             Use instead of keydown / keypress if you need to get value


    - cut / copy / paste: can't get NEW data, 
                          so useful only if you need to prevent following action
*/



/*Task 1

  Создайте интерфейс для автоматического вычисления процентов по вкладу.
  Ставка фиксирована: 12% годовых. 
  При включённом поле «капитализация» – проценты приплюсовываются к сумме вклада каждый месяц (сложный процент).

  http://plnkr.co/edit/U6GC8uhFta4Kfejr4iXr?p=preview
*/

function task1 () {
  const rate = 0.12
  const elementsTemplate = 
  [{
    name: 'money',
    value: 'value',
    event: 'input'
  }, {
    name: 'months',
    value: 'value',
    event: 'input'
  }, {
    name: 'capitalization',
    value: 'checked',
    event: 'change'
  }]
  const formElements = document.forms.calculator.elements
  let data = {}

  const calcSimple  = (sum, years) => sum += sum * rate * years
  const calcComplex = (sum, years) => sum * Math.pow((1 + rate), years)

  const calcPersent = data => {
    let {money, months, capitalization} = data
    let result = 0
    let sum = parseInt(money) || 0
    let years = months / 12
    
    if (capitalization) {
      result = calcComplex(sum, years)
    } else {
      result = calcSimple(sum, years)
    }
    return Math.floor(result)
  }

  let setPersent = e => {
    let sum = data.money || 0
    
    let toHeight = val => {
      if (sum === 0) return '0'
      return val / (sum / 100) + 'px'
    }
    
    //fill data
    elementsTemplate.reduce((data, elem) => {
      let {name, value} = elem
      data[name] = formElements[name][value]
      return data
    }, data)

    document.querySelector('#money-before').textContent      = sum
    document.querySelector('#money-after').textContent       = calcPersent(data)
    document.querySelector('#money-before-bar').style.height = toHeight(sum)
    document.querySelector('#money-after-bar').style.height  = toHeight(calcPersent(data))
  }

  formElements.money.addEventListener('input', function(e) {
    if (isNaN(this.value)) {
      this.value = data.money || 0
      return
    };
    data.money = this.value || 0
  })

  elementsTemplate.forEach(elem => {
    let {name, event} = elem
    formElements[name].addEventListener(event, setPersent)
  })

  setPersent()
}
task1()