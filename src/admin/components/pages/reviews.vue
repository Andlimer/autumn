<template lang="pug">
  section.reviews
    .container
      h2.section-title.reviews__title Блок «Отзывы»
      form.form.new-review
        h3.form__title.new-review__title Новый отзыв
        .new-review__content
          .new-review__left
            .new-review__photo
            a(href="#").new-review__add-photo Добавить фото
          .new-review__right
            .new-review__row
              label.new-review__block
                p.input__title.new-review__input-title Имя автора
                input(type="text").input.new-review__input
              label.new-review__block
                p.input__title.new-review__input-title Титул автора
                input(type="text").input.new-review__input
            .new-review__row
              label.new-review__block
                p.input__title.new-review__input-title Отзыв
                textarea.new-review__input.form__input_textarea
            .new-review__buttons
              button(type="reset").page-button_cancel.new-review__button-reset Отмена
              button.page-button.new-review__button Сохранить

      ul.reviews__list
        li.reviews__item
          button.btn-create
            span.btn-create__icon
            span.btn-create__text Добавить отзыв

        li.reviews__item
          .review
            .review__title
              .review-user
                .review-user__image
                  img.review-user__img(src="../../../images/content/user-photo1.jpg")
                .review-user__text
                  .review-user__name Ковальчук Дмитрий
                  .review-user__desc Основатель Loftschool
            .review__content
              .review__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .review__buttons
                button.btn-change.btn-change_rename Править
                  span.btn-change__icon-rename
                button.btn-change.btn-change_del Удалить
                  span.btn-change__icon-del

        li.reviews__item
          .review
            .review__title
              .review-user
                .review-user__image
                  img.review-user__img(src="../../../images/content/user-photo1.jpg")
                .review-user__text
                  .review-user__name Владимир Сабанцев
                  .review-user__desc Преподаватель
            .review__content
              .review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .review__buttons
                button.btn-change.btn-change_rename Править
                  span.btn-change__icon-rename
                button.btn-change.btn-change_del Удалить
                  span.btn-change__icon-del
</template>