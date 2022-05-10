window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

//цвет выбранного элемента меню, убирает и раздает класс

$('.menu a').on("click",function(){
    $('a').removeClass('menu__link_active');
    $(this).addClass('menu__link_active');
});

// переключение языка
$('.subheader__trans li').on("click",function(){
    $('li').removeClass('subheader__trans__late_active');
    $(this).addClass('subheader__trans__late_active');
});

//модальные окна
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
});

//validate
function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа")
              },
            phone: "Введите свой номер телефона",
            email: {
              required: "Введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');

//number musk
  $('input[name=phone]').mask("+7 (999) 999-99-99");



  $('form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "./mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});