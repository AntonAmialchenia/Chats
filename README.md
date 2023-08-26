# Тестовое задание на должность Front-end developer

## Описание задания

1. Отверстать 6 базовых компонентов из которых состоит [интерфейc](<https://www.figma.com/file/caBDMdV2e36st7pCC7Kghb/TEST7-(Copy)?type=design&node-id=0%3A1&mode=design&t=5DpTHghUVjAuk1lJ-1>), прописать необходимые пропсы и состояния:

- Chat item list (чат из левой панели)
- Message (сообщение из тела чата)
- Input (Поле ввода)
- Header (хедер)
- Time (Дата в теле чата)
- New message (полоса что есть новые сообщеня)

2. При уменьшении экрана правая часть с сообщениями должна уменьшаться. Верстка до разрешения экрана 700 пикселей.
   Если размер экрана в ширину меньше 700 пикселей, выводим заглушку “ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ”.

3. Input (Поле ввода) для текста в правой части сообщений сделать НЕ input и НЕ textarea, но с возможностью писать в этом поле аналогично как в textarea. Должно быть видно три строки, если текста более трёх строк, то должна появиться прокрутка.

4. Список методов для работы с бэк-ендом вы найдете в сваггере по [ссылке](https://api.clout.one/documentation/#/) Используйте даные методы для вывода списка чатов и списка сообщений по каждому из них.

5. Левая панель, список чатов:В названиях чата, если название слишком длинное и не умещается в одну строку, обрезать название через троеточие(…)
   Если текст сообщения (вторая строка) слишком большой, оставить две строки, остальное обрезать и сделать троеточие (…)

6. При нажатии на чат слева в правой части должны динамически подгружаться сообщения, относящиеся к этому чату.

### Структура проекта

api - пример метода работы с бекэндом, для примера реализован список чатов/n
components - хранение компонентов, для примера реализован компонент Avatar/n
constants - любые константы используемые в проекте, для примера список URL/n
interface - общие интерфейсы, для примера интерфейс объекта Page/n
pages - список страниц проекта/n
utils - общие функции, для примера работа с бекендом.

## Исползуемые технологии

1. React + TypeScript
2. Redux-Toolkit + Redux-Thank
3. Tailwind
4. Навигация React-router-dom
5. axios для запросов на сервер
6. Vite для сборки

## Установка и запуск

1. Клонирование репозитория`$ git clone` [https://github.com/AntonAmialchenia/Chats.git](https://github.com/AntonAmialchenia/Chats.git)
2. Установить yarn `npm install --global yarn`
3. Установка пакетов `yarn`
4. Команда `yarn dev` используется для запуска проекта в режиме разработки. Эта команда запускает проект на локальном сервере и отслеживает изменения в исходном коде.
5. Команда `yarn build` используется для сборки проекта в статические файлы, которые можно разместить на сервере.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
