### [Ссылка на рабочий проект](https://app-with-x-scroll.netlify.app/)

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run dev - запуск в dev режиме
```

---

## Фейк горизонтальный скролл

При вертикальном скролле блока со слайдером создается иллюзия горизонтальной прокрутки за счет
автоматической подстановки отступа снизу на высоту скролла, а так же связыванием скролла и значения
свойства translateX средствами библиотеки GSAP -
[https://greensock.com/gsap/](https://greensock.com/gsap/) и ее плагина ScrollTrigger -
[https://greensock.com/scrolltrigger/](https://greensock.com/scrolltrigger/)
