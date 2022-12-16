// действия при чтении документа
$(document).ready(function () {
  // находим кнопку с атрибутом filter="wd" и при клике на нее проверяем какое значение атрибута val она имеет. Если off(т.е.не нажата), скрываем за 3сек все элементы div, которые находятся в элемента с классом filter и сразу же показываем только те элементы, которые имеют такой же аттрибут как и кнопка. Всем кнопкам присваиваем значение аттрибута val=off, а рабочей кнопке - on (что б при повторном нажатии действие скрытия и показа не повторялись). Для удобства заключаем этот код в функцию filterShow(attribut)
  // $('.button[filter="wd"]').click(function () {
  //     if ($(this).attr('val') == 'off') {
  //         $('.button[filter]').attr('val','off')
  //         $(this).attr('val', 'on')
  //         $('.filter > div').hide(300)
  //         $('.filter > div[filter="wd"]').show(0)
  //     }
  // })
    // ПОРТФОЛИО
  filterShow('filter="wd"');
  filterShow('filter="ud"');
  filterShow('filter="moc"');
  showAll('filter="all"');
});
// функция для всех кнопок (если не меняем картинки)
// function filterShow(attribut) {
//  $(`.button[${attribut}]`).click(function () {
//     if ($(this).attr('val') == 'off') {
//         $('.button[filter]').attr('val','off')
//         $(this).attr('val', 'on')
//         $('.filter > div').hide(300)
//         $(`.filter > div[${attribut}]`).show(0)
//     }
// })
// }
// функция для всех кнопок, кроме "показывающей все"(если меняем картинки)
function filterShow(attribut) {
  $(`.button[${attribut}]`).click(function () {
    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      // добавляем подсветку кнопки после нажатия, а остальным кнопкам снимаем
      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused');
      // скрываем все картинки
      $('.filter').attr('style', 'display: none');
      // показываем новые(изначально они скрыты в css - display: none;) и сразу же их скрываем
      $('.show > div').attr('style', 'display: flex');
      $('.show > div').hide(0);
      // показываем нужные
      $(`.show > div[${attribut}]`).show(0);
    }
  });
}
// функция для всех кнопки "показывающей все"
function showAll(attribut) {
  $(`.button[${attribut}]`).click(function () {
    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused');
      $('.filter').attr('style', 'display: flex');
      $('.show > div').hide(0);
      $('.filter > div[filter]').show(0);
    }
  });
  // СЛАЙДЕР с сайта https://kenwheeler.github.io/slick/. Класс multiple-items вставляем в наш div, который будет слайдером
  $('.multiple-items').slick({
    // бесконечная прокрутка
    infinite: true,
    // сколько слайдов показывать
    slidesToShow: 3,
    // сколько слайдов прокручивать за раз
    slidesToScroll: 3,
    // убрать стрелки
    arrows: false,
    // добавить точки
    dots: true,
    // добавляем класс точкам для их стилизиции
    dotsClass: 'dots-style',

    // делаем слайдер адаптивным. На сайте слайдера sticks берем для нашего слайда параметр responsive c параметрами точки перелома меньше 1024 и настраиваем внешний вид (напр. 2 слайда и 2 на перелистывании)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
//   МЕНЮ. Находим элемент меню - это у нас ul с классом menu, в котором есть ссылка с атрибутом href со значением, содердащим # и пишем функцию которая будет выполнятся при клике по этому элементу: при клике на какой-либо элемент меню (ul.menu a[href^="#"]), берем из него ссылку (переменная tagret) и к ней делаем скролл в течении 500мс. Ставим return false чтобы ссылка не пересбрасывала нас на другие страницы, т.к. сайт одностраничный. В HTML для каждого ul.menu a в href вписываем названия разделов, а уже в разделах создаем id с этими названиями
    $('ul.menu a[href^="#"]').click(function () {
        let target = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500)
    })
    return false;
}
