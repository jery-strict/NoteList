**Запуск:**

- npm install
- webpack-dev-server --progress --hot --inline

**Описание:**

Простенький список заметок. Без DnD, без анимаций. 
Можно было DnD и поддержать, но в задании не было указаний.

Состояние хранится в localStorage. Таким образом шарится на разные вкладки.
Приложение подписывается на событие 'storage' и обновляет свое состояние, если на другой вкладке мы что-то изменили.
Хранить фильтр поиска мне показалось нелогичным, я его не храню. Ничего не мешает и сохранить.

Поиск осуществляется по принципу startsWith. Конкретных указаний не было. 

Не знаю React best practices может вам что-то покажется суперкорявым. Был бы благодарен если расскажете что именно.
Выполнял по знаниям полученным из книги "Pro React" от Cássio de Sousa Antonio.

Redux до конца не изучил поэтому применять не стал.

CSS фреймворки не использовал, набросал простенький CSS. Времени не хватило, отдохнуть после работы тоже хочется.

**По поводу папок:**

Не вижу никаких проблем. Даем списку имя. Позволяем списку хранить списки. Точно так же сериализуем состояние в storage.

   **По поводу мобильной версии:**

Опыта почти нет. Но впринципе сверстать медиа стиль ничего не мешает, js менять не придется. Кажется...


