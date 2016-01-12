'use strict';

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

function task1() {
  $$(select.options).filter(function (o) {
    return o.selected;
  }).forEach(function (o) {
    return console.log(o.value, o.text);
  });
  select.appendChild(new Option('Классика', 'Classic', false, true));
}
task1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxLmZvcm1fbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLFNBQVMsS0FBSyxHQUFJO0FBQ2hCLElBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztXQUFJLENBQUMsQ0FBQyxRQUFRO0dBQUEsQ0FBQyxDQUN2QixPQUFPLENBQUMsVUFBQSxDQUFDO1dBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7R0FBQSxDQUFDLENBQUE7QUFDN0QsUUFBTSxDQUFDLFdBQVcsQ0FDaEIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQy9DLENBQUE7Q0FDRjtBQUNELEtBQUssRUFBRSxDQUFBIiwiZmlsZSI6InBhcnQyL2Zvcm1zLzAxLmZvcm1fbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbiAgUXVlcmllc1xuXG4gICAgLSBkb2N1bWVudC5mb3Jtc1xuICAgICAgZ2V0IGRvY3VtZW50IGZvcm0gdmlhIG51bWJlciBvciBgbmFtZWAgYXR0cmlidXRlOiBkb2N1bWVudC5mb3Jtc1swXSAvIGRvY3VtZW50LmZvcm1zLmZvcm1OYW1lXG5cbiAgICAtIGZvcm0uZWxlbWVudHNcbiAgICAgIGdldCBmb3JtIGVsZW1lbnRzOiBmb3JtLmVsZW1lbnRzWzBdIC8gZm9ybS5lbGVtZW50cy5lbGVtTmFtZVxuXG4gICAgLSBmaWVsZHNldC5lbGVtZW50c1xuICAgICAgZ2V0IGZpZWxkc2V0IGVsZW1lbnRzOiBmaWVsZHNldC5lbGVtZW50c1swXSAvIGZpZWxkc2V0LmVsZW1lbnRzLmVsZW1OYW1lXG5cbiAgICAtIGVsZW1lbnQuZm9ybVxuICAgICAgcmV0dXJuIGVsZW1lbnQgZm9ybVxuXG5cbiAgICBUaXBzOlxuXG4gICAgICAtIGlmIGBuYW1lYCBpcyBzaW1pbGFyIGZvciBzb21lIGVsZW1lbnRzIC0gY29sbGVjdGlvbiBvZiBlbGVtZW50cyBpcyByZXR1cm5lZFxuICAgICAgLSBmb3JtLm5hbWUgKHNob3J0ZW4gdmFyaWFudCBvZiBmb3JtLmVsZW1lbnRzLm5hbWUpXG4gICAgICAgIHByb2JsZW06IGlmIGNoYW5nZSBuYW1lLCBpbnB1dCB3aWxsIGJlIGF2YWlsYWJsZSB1bmRlciBvbGQgbmFtZVxuXG5cbiAgICBpbnB1dCB2YWx1ZSAoY2hlY2tlZCBmb3IgY2hlY2tib3ggLyByYWRpb2J1dHRvbilcblxuXG5cbiAgICBTZWxlY3Q6XG5cbiAgICAgIHNlbGVjdC52YWx1ZSAvIHNlbGVjdC5zZWxlY3RlZEluZGV4IC0gY2hhbmdlIGFjdGl2ZSBzZWxlY3QgZWxlbWVudFxuICAgICAgc2VsZWN0Lm9wdGlvbnMgLSByZXR1cm4gY29sbGVjdG9uIG9mIHNlbGVjdCBvcHRpb25zXG5cblxuICAgIE9wdGlvbjpcbiAgICAgIFxuICAgICAgbmV3IE9wdGlvbih0ZXh0LCB2YWx1ZSwgZGVmYXV0U2VsZWN0ZWQsIHNlbGVjdGQpIC0gZmFzdCBvcHRpb24gY3JlYXRpb25cbiAgICAgIG9wdGlvbi5zZWxlY3RlZCAvIG9wdGlvbi5pbmRleCAvIG9wdGlvbi50ZXh0XG5cblxuKi9cblxuXG5cbi8qVGFzayAxXG5cbtCV0YHRgtGMINGB0LXQu9C10LrRgjpcbtCf0YDQuCDQv9C+0LzQvtGJ0LggSmF2YVNjcmlwdDpcblxu0JLRi9Cy0LXQtNC40YLQtSDQt9C90LDRh9C10L3QuNC1INC4INGC0LXQutGB0YIg0YLQtdC60YPRidC10Lkg0LLRi9Cx0YDQsNC90L3QvtC5INC+0L/RhtC40LguXG7QlNC+0LHQsNCy0YzRgtC1INC+0L/RhtC40Y46IDxvcHRpb24gdmFsdWU9XCJDbGFzc2ljXCI+0JrQu9Cw0YHRgdC40LrQsDwvb3B0aW9uPi5cbtCh0LTQtdC70LDQudGC0LUg0LXRkSDQstGL0LHRgNCw0L3QvdC+0LkuXG5cbiovXG5cbmZ1bmN0aW9uIHRhc2sxICgpIHtcbiAgJCQoc2VsZWN0Lm9wdGlvbnMpLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKG8gPT4gY29uc29sZS5sb2coby52YWx1ZSwgby50ZXh0KSlcbiAgc2VsZWN0LmFwcGVuZENoaWxkKFxuICAgIG5ldyBPcHRpb24oJ9Ca0LvQsNGB0YHQuNC60LAnLCAnQ2xhc3NpYycsIGZhbHNlLCB0cnVlKVxuICApXG59XG50YXNrMSgpICAgICBcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
