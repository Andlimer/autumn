<template lang="pug">
  section.works
    .container
      h2.page-title.works__title Блок «Работы»

    .works__content
      .container.container_mobile
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

<style lang="postcss">
@import "../../../styles/mixins.pcss";

  .works {
    padding: 60px 0;

    @include phones-hd {
      padding: 40px 0;
    }
  }

  .works__title {
    margin-bottom: 60px;

    @include phones-hd {
      margin-bottom: 40px;
    }
  }

  .new-work {
    margin-bottom: 30px;

    @include phones-hd {
      margin-bottom: 10px;
    }
  }

  .new-work__content {
    display: flex;
    padding: 0px 10px;

    @include tablets {
      display: block;
      padding: 0px 13%;
    }

    @include phones-hd {
      padding: 0 20px;
    }
  }

  .new-work__left {
    width: 50%;
    margin-right: 30px;

    @include tablets {
      margin-right: 0;
      margin-bottom: 55px;
      width: 100%;
    }
  }

  .new-work__right {
    width: 50%;

    @include tablets {
      width: 100%;
    }
  }

  .add-work {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 85px;
    padding-bottom: 65px;
    border: 1px solid #a1a1a1;
    background-color: #dee4ed;
  }

  .add-work__text {
    margin-bottom: 27px;
    width: 240px;
    font-weight: 600;
    line-height: 33.89px;
    opacity: .5;
  }

  .page-button {
    padding: 20px 40px;
    font-weight: 700;
    background-image: $admin-btn-color;
    color: $sec-text-color;
    border-radius: 50px;
    text-transform: uppercase;
  }

  .page-button_cancel {
    padding: 0;
    margin-right: 60px;
    font-weight: 600;
    background-color: transparent;
    color: $admin-main-color;
  }

  .new-work__row {
    margin-bottom: 30px;
    width: 100%;

    &:last-child {
      margin-bottom: 40px;
    }
  }

  .new-work__input {
    width: 100%;
    font-size: 16px;
  }

  .new-work__tags {
    display: flex;
    margin-top: 20px;
  }

  .new-work__tag {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 10px 15px;
    font-size: 14px;
    background-color: #f4f4f4;
    border-radius: 50px;
  }

  .close{
    position: relative;
    display: inline-block;
    margin-left: 10px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .close:before,
  .close:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 14px;
      height: 2px;
      background: $admin-text-color;
  }

  .close:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .close:after {
      transform: translate(-50%, -50%) rotate(-45deg);
  }

  .new-work__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @include tablets {
      justify-content: center;
    }
  }

  .works__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
  }

  .works__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    margin-bottom: 30px;
    width: calc(100% / 3 - 30px);
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #fff;

    @include laptop {
      width: calc(100% / 2 - 30px);
    }

    @include phones-hd {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  .work {
    height: 100%;
  }

  .work__image {
    margin-bottom: 40px;

    @include phones-hd {
      margin-bottom: 30px;
    }
  }

  .work__content {
    padding: 0px 30px 40px;
  }

  .work__title {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
  }

  .work__text {
    margin-bottom: 30px;
    font-weight: 600;
    line-height: 30px;
    color: $input-color;

    @include phones-hd {
      margin-bottom: 20px;
    }
  }

  .work__link {
    display: block;
    margin-bottom: 45px;
    font-weight: 600;
    text-decoration: none;
    color: $admin-main-color;

    @include phones-hd {
      margin-bottom: 35px;
    }
  }

  .work__buttons {
    display: flex;
    justify-content: space-between;
  }

  .btn-change {
    display: flex;
    align-items: center;
    padding: 0;
    font-weight: 600;
    color: $input-color;
    background-color: transparent;

    &__icon-rename,
    &__icon-del {
      margin-left: 10px;
      width: 17px;
      height: 17px;
    }

    &__icon-rename {
      background: svg-load("pencil.svg", fill=$admin-main-color, width=100%, height=100%) no-repeat;
    }

    &__icon-del {
      background: svg-load("close.svg", fill=$error-color, width=100%, height=100%) no-repeat;
    }
  }

  .btn-create {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 100%;
    background-image: $admin-btn-color;
    color: $sec-text-color;

    &__icon {
      position: relative;
      margin-bottom: 30px;
      width: 150px;
      height: 150px;
      background-color: transparent;
      border: 2px solid $sec-text-color;
      border-radius: 50%;

      &:after,
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 34px;
        height: 2px;
        background-color: $sec-text-color;
        transform: translate(-50%, -50%);

        @include phones-hd {
          width: 14px;
        }
      }

      &:before {
        transform: translate(-50%, -50%) rotate(90deg);
      }

      @include phones-hd {
        margin-right: 20px;
        margin-bottom: 0;
        width: 60px;
        height: 60px;
      }
    }

    &__text {
      width: 150px;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;

      @include phones-hd {
        width: auto;
      }
    }

    @include phones-hd {
      flex-direction: row;
      padding: 30px;
    }
  }
</style>