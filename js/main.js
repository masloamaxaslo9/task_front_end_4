// Добавить в конструктор Article:
//
//     Подсчёт общего количества созданных объектов.
//     Запоминание даты последнего созданного объекта.
//     Используйте для этого статические свойства.
//
//     Пусть вызов Article.showStats() выводит то и другое.
//
//     Использование:
function Article() {
    this.created = new Date();
    // ... ваш код ...
    Article.counter++;
    Article.lastData = this.created.getFullYear() + ' Year. ' + Number(this.created.getMonth() + 1) + ' Month. ' + this.created.getDay() + ' Day. ' + this.created.getSeconds() + ' sec.';
    Article.showStats = function () {
        return console.log('Всего: ' + this.counter + ', ' + 'Последняя: ' + '(' + Article.lastData + ')');
    }
}
Article.counter = 0;

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)