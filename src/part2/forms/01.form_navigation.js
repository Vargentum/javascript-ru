/*

  Queries

    - document.forms
      get document form via number or `name` attribute: document.forms[0] / document.forms.formName

    - form.elements
      get form elements: form.elements[0] / form.elements.elemName

    - fieldset.elements
      get fieldset elements: fieldset.elements[0] / fieldset.elements.elemName

    - element.form
      return element form


    Tips:

      - if `name` is similar for some elements - collection of elements is returned
      - form.name (shorten variant of form.elements.name)
        problem: if change name, input will be available under old name


    input value (checked for checkbox / radiobutton)



    Select:

      select.value / select.selectedIndex - change active select element
      select.options - return collecton of select options


    Option:
      
      new Option(text, value, defautSelected, selectd) - fast option creation
      option.selected / option.index / option.text


*/



/*Task 1

Есть селект:
При помощи JavaScript:

Выведите значение и текст текущей выбранной опции.
Добавьте опцию: <option value="Classic">Классика</option>.
Сделайте её выбранной.

*/

function task1 () {
  $$(select.options).filter(o => o.selected)
                    .forEach(o => console.log(o.value, o.text))
  select.appendChild(
    new Option('Классика', 'Classic', false, true)
  )
}
task1()     
