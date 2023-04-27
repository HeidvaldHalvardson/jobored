# Страница поиска вакансий на React

## Задание
Написать приложение для поиска и управления вакансиями и в соответствии с дизайном.

[Ссылка на дизайн](https://www.figma.com/file/HxEJ0c4CEEuh1fSBfX3w8I/Job-Search-App?node-id=62%3A491&t=ZRqSx5dicTETfTZD-1)

## Требования
* Приложение должно быть написано с использованием фреймворка React
* Используй CRA, Vite или Next.js для старта проекта.
* Храни код своего приложения в GitHub. Инструкция.
* Опционально: Используй библиотеку компонентов Mantine (дизайн выше был создан на ее основе).
* Разверни приложение (Используй Netlify, Github Pages, Render.com и др.), чтобы оно было доступно по ссылке.

## Функциональность
Для выполнения тестового задания тебе понадобятся API сервиса [Superjob](https://api.superjob.ru/).

Используй следующие эндпоинты:

* [Авторизация по паролю](https://api.superjob.ru/#pass_auth)
* [Поиск вакансий](https://api.superjob.ru/#methods)
* [Каталог отраслей](https://api.superjob.ru/#catalogues)
* [Вакансия](https://api.superjob.ru/#vacancy) (может и не понадобится, зависит от реализации)

> 💡 Для запросов связанных с вакансиями тебе потребуется получить access_token. Используй эндпоинт “Авторизация по паролю” c параметрами: <br/>
login=sergei.stralenia@gmail.com <br/>
password=paralect123 <br/>
client_id=2231 <br/>
client_secret=v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909hr=0 <br/>

## Прокси-сервер
В виду некоторых технических сложностей все запросы следует отправлять не на URL сервиса (https://api.superjob.ru), а на наш прокси сервер (https://startup-summer-2023-proxy.onrender.com).

> 💡 Например, эндпоинт “авторизация по паролю” будет выглядеть как <br/> https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password

А поскольку мир веба населен не только добрыми людьми, но и злыми хакерами, прокси-сервер защищен паролем. <br/>
Передавай заголовок `x-secret-key` со значением `GEU4nvd3rej*jeh.eqp` с каждым запросом. <br/>
Если ты получаешь HTTP код 400 от прокси, скорее всего ты забыл послать заголовок.

## Страница “Поиск вакансий”
1. Пользователь видит список доступных вакансий, а также фильтры для сужения поиска
> 💡 Для отображения вакансий используй следующие поля ответа: <br/>
profession = название вакансии <br/>
firm_name = название компании <br/>
town.title = город <br/>
catalogues[0].title = название отрасли <br/>
type_of_work.title = тип занятости (полный день и тд) <br/>
payment_to, payment_from, currency = для отображения оклада <br/>

> 💡 Для поиска используй следующие парамерты запроса: <br/>
published=1 <br/>
keyword=строка из поиска <br/>
payment_from=сумма оклада от <br/>
payment_to=сумма оклада до <br/>
catalogues=33 - поле key из каталога отраслей <br/>

2. Пользователь может нажать на вакансию и попасть на страницу “Вакансия” для ее детального просмотра. 
3. Пользователь может сохранить вакансию в избранное, нажав на звездочку.
4. Пользователь может удалить вакансию из избранного, нажав еще раз на звездочку 

> 💡 Тебе потребуется база данных, чтобы хранить избранные вакансии. Используй localStorage браузера.

## Страница “Избранное”
Пользователь видит список сохраненных вакансий.
Пользователь может удалить вакансию из избранного нажав на звездочку.
Пользователь может нажать на вакансию и попасть на страницу “Вакансия” для ее детального просмотра.

## Страница “Вакансия”
Пользователь видит детали вакансии.

> 💡 Для отображения описания используй поле ответа vacancyRichText


## Дополнительная функциональность
* Отображать loader (пример) во время ожидания ответа сервера
* Показывать отдельную страницу (empty state), если список вакансий пуст на страницах “Вакансии” и “Избранное”. 
* Реализовать постраничный просмотр вакансий. Можно использовать библиотеку react-paginate.
* Минимальная ширина страницы, при которой она отображается корректно – 320рх. Дизайна для мобильной версии нет, делай на свое усмотрение. <br/> Все указанные в задании элементы присутствуют как на десктопной, так и на мобильной версии.
