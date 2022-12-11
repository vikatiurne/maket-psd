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
    filterShow('filter="wd"')
    filterShow('filter="ud"')
    filterShow('filter="moc"')
    showAll('filter="all"')
})
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
        $('.button[filter]').attr('val','off')
        $(this).attr('val', 'on')
        // добавляем подсветку кнопки после нажатия, а остальным кнопкам снимаем
        $('.button[filter]').removeClass('focused')
        $(this).addClass('focused')
        // скрываем все картинки
        $('.filter').attr('style', 'display: none')
        // показываем новые(изначально они скрыты в css - display: none;) и сразу же их скрываем
        $('.show > div').attr('style', 'display: flex')
        $('.show > div').hide(0)
        // показываем нужные
        $(`.show > div[${attribut}]`).show(0)
    }
})
}
// функция для всех кнопки "показывающей все"
function showAll(attribut) {
    $(`.button[${attribut}]`).click(function () {
        if ($(this).attr('val') == 'off') {
            $('.button[filter]').attr('val', 'off')
            $(this).attr('val', 'on')
            $('.button[filter]').removeClass('focused')
            $(this).addClass('focused')
            $('.filter').attr('style', 'display: flex')
            $('.show > div').hide(0)
            $('.filter > div[filter]').show(0)
        }
    })
}