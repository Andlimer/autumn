<template lang="pug">
  section.works
    .container
      h2.section-title.works__title Блок «Работы»
      form.form.new-work
        h3.form__title.new-work__title Редактирование работы
        .new-work__content
          .new-work__left
            .add-work
              .add-work__text Перетащите или загрузите для загрузки изображения
              button.page-button.add-work__button Загрузить
          .new-work__right
            - var items = ["Название", "Ссылка", "Описание", "Добавление тэга"];
            each item in items
              .new-work__row
                label.new-work__block
                  if item === "Описание"
                    p.input__title.new-work__input-title #{item}
                    textarea.new-work__input.form__input_textarea
                  else if item === "Добавление тэга"
                    p.input__title.new-work__input-title #{item}
                    input(type="text").input.new-work__input
                    ul.new-work__tags
                      - var tags = ["HTML", "CSS", "JavaScript"];
                      each tag in tags
                        li.new-work__tag #{tag}
                          span.close.new-work__del-tag
                  else
                    p.input__title.new-work__input-title #{item}
                    input(type="text").input.new-work__input
            .new-work__buttons
              button(type="reset").page-button_cancel.new-work__button-reset Отмена
              button.page-button.new-work__button Сохранить

      ul.works__list
        li.works__item
          .work
            button.btn-create
              span.btn-create__icon
              span.btn-create__text Добавить работу

        li.works__item
          .work
            .work__image
              img.work__img(src="../../../images/content/slide-1.jpg")
            .work__content
              .work__title Сайт школы образования
              .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href="#").work__link http://loftschool.ru
              .work__buttons
                button.btn-change.btn-change_rename Править
                  span.btn-change__icon-rename
                button.btn-change.btn-change_del Удалить
                  span.btn-change__icon-del

        li.works__item
          .work
            .work__image
              img.work__img(src="../../../images/content/slide-2.jpg")
            .work__content
              .work__title Сайт школы образования
              .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href="#").work__link http://loftschool.ru
              .work__buttons
                button.btn-change.btn-change_rename Править
                  span.btn-change__icon-rename
                button.btn-change.btn-change_del Удалить
                  span.btn-change__icon-del
        
        li.works__item
          .work
            .work__image
              img.work__img(src="../../../images/content/slide-3.jpg")
            .work__content
              .work__title Сайт школы образования
              .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href="#").work__link http://loftschool.ru
              .work__buttons
                button.btn-change.btn-change_rename Править
                  span.btn-change__icon-rename
                button.btn-change.btn-change_del Удалить
                  span.btn-change__icon-del
              
        li.works__item
          .work
            .work__image
              img.work__img(src="../../../images/content/slide-4.jpg")
            .work__content
              .work__title Сайт школы образования
              .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href="#").work__link http://loftschool.ru
              .work__buttons
                button.btn-change.btn-change_rename Править
                  span.btn-change__icon-rename
                button.btn-change.btn-change_del Удалить
                  span.btn-change__icon-del

        li.works__item
          .work
            .work__image
              img.work__img(src="../../../images/content/slide-5.jpg")
            .work__content
              .work__title Сайт школы образования
              .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href="#").work__link http://loftschool.ru
              .work__buttons
                button.btn-change.btn-change_rename Править
                  span.btn-change__icon-rename
                button.btn-change.btn-change_del Удалить
                  span.btn-change__icon-del
</template>