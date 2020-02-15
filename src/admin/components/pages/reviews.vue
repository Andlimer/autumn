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

<style lang="postcss">
  .reviews__list {
    display: flex;
    flex-wrap: wrap;
  }

  .reviews__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2%;
    margin-bottom: 2%;
    width: 32%;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #fff;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .new-review {
    padding-bottom: 50px;
  }

  .new-review__content {
    padding: 0px 10px;
    display: flex;
  }

  .new-review__left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 30px;
  }

  .new-review__right {
    width: 620px;
  }

  .new-review__photo {
    margin-bottom: 30px;
    width: 200px;
    height: 200px;
    background-image: svg-load("user-review.svg", fill=#fff,  width=105px, height=133px);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #dee4ed;
    border-radius: 50%;
    overflow: hidden;
  }

  .new-review__add-photo {
    font-weight: 600;
    color: $admin-main-color;
    text-decoration: none;
  }

  .new-review__row {
    display: flex;
    margin-bottom: 30px;
  }

  .new-review__block {
    margin-right: 30px;
    width: 100%;

    &:last-child {
      margin-right: 0;
    }
  }

  .new-review__input {
    width: 100%;
  }

  .new-review__input {
    padding: 20px;
  }

  .new-review__buttons {
    display: flex;
    justify-content: flex-end;
  }

  .review {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px;
  }

  .review__title {
    margin-bottom: 30px;
    padding: 0px 10px 30px;
    border-bottom: 1px solid $input-color;
  }

  .review-user {
    display: flex;
  }

  .review-user__image {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .review-user__name {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
  }

  .review-user__desc {;
    font-weight: 600;
    color: $input-color;
  }

  .review__content {
    padding: 0px 10px;
  }

  .review__text {
    padding-right: 15px;
    font-weight: 600;
    line-height: 30px;
    opacity: .7;
  }

  .review__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
  }
</style>