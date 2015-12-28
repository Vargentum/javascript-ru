/*

  Event
  Event Listner / Handler


  handler can be added by 3 ways:

    - HTML - onclick=""
    - elem.onclick = function

  Multiple handlers addition
    - elem.addEventListner( eventName, handler [,phase] )
    - elem.removeEventListner( eventName, handler [,phase] )
    
    for IE8-
    - elem.attachEvent( 'on' + eventName, handler)
    - elem.detachEvent( 'on' + eventName, handler)


*/


/* Task 1
Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
Решение: http://plnkr.co/edit/NOqslGqW5G9pDZE88bCj?p=preview
*/
function task1 () {
  
  hider.onclick = () => text.hidden = true

}
// task1()



/*Task 2
Создайте кнопку, при клике на которую, она будет скрывать сама себя.
*/
function task2 () {
  hider.onclick = function () {
    this.hidden = true    
  }
}
task2()


/*Task 3

В переменной button находится кнопка. Изначально обработчиков на ней нет.
Что будет выведено при клике после выполнения кода?

button.addEventListener("click", function() { alert("1"); });
button.removeEventListener("click", function() { alert("1"); });
button.onclick = function() { alert(2); };

Ответ: 
1. добавится обработчик
2. предыдущий обработчик не будет удален, потому что для правильного удаления, 
   необходимо указать имя функции. механизма для удаления анонимных функций с идентичным кодом НЕТ
3. Обработчик onlick сработает в ДОПОЛНЕНИЕ к уже назначенным через `addEventListner`
Итого: 1 и 2
*/



/*Task 4
Создайте меню, которое раскрывается/сворачивается при клике:

Решение: http://plnkr.co/edit/rwLtdIVNHRFcJNh8rZK4?p=preview
*/


/*Task 5
Есть список сообщений. Добавьте каждому сообщению по кнопке для его скрытия.

Решение: http://plnkr.co/edit/2uocYXVsEWLvPKY9I3vZ?p=preview
*/


/*Task 6 
Создать карусель

Решение: http://plnkr.co/edit/Epspd4uiu328y7ConxnH?p=preview
*/