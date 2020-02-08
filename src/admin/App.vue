<style lang="postcss">
  /* import стилей */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  body {
    color: $admin-text-color;
  }

  .page-content {
    background-color: #f7f9fe;
  }

  .section-title {
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
  }

  .input {
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    color: $admin-text-color;
    border: none;
    border-bottom: 1px solid #000;

    &::placeholder {
      color: $input-color;
    }

    &:disabled {
      background-color: transparent;
      border-bottom: 1px solid transparent;
    }
  }

  .form__input_textarea {
    padding: 20px 80px 20px 20px;
    height: 150px;
    font-weight: 600;
    line-height: 30px;
    border: 1px solid $input-color;
    resize: none;
  }

  .button-icon {
    width: 15px;
    height: 15px;

    &_pencil {
      background: svg-load("pencil.svg", fill=$input-color, width=100%, height=100%) no-repeat;
    }

    &_trash {
      background: svg-load("trash.svg", fill=$input-color, width=100%, height=100%) no-repeat;
    }

    &_tick {
      background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%) no-repeat;
    }

    &_remove {
      background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%) no-repeat;
    }
  }

  /* header */
  .header {
    padding: 18px 0;
    color: $sec-text-color;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__left {
    display: flex;
    align-items: center;
  }

  .header__user-photo {
    margin-right: 20px;
    width: 45px;
    height: 45px;
    overflow: hidden;
    border-radius: 50%;
  }

  .header__user-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header__user-name {
    margin-right: 28px;
    font-size: 18px;
  }

  .header__desc {
    font-size: 14px;
    opacity: .5;
  }

  .header__exit {
    opacity: .7;
  }

  /* nav */
  .nav {
    background-color: $sec-text-color;
  }

  .nav__list {
    display: flex;
    align-items: center;
    padding: 30px;
  }

  .nav__item {
    margin-right: 60px;
  }

  .nav__link {
    position: relative;
    font-weight: 600;
    text-decoration: none;
    transition: color .4s;

    &:hover {
      color: $admin-main-color;
    }

    &:after {
      content: "";
      display: block;
      width: 0%;
      height: 3px;
      position:absolute;
      left:50%;
      bottom: -30px;
      background-color: $admin-main-color;
      transform:translateX(-50%);
      transition: width .4s;
    }

    &:hover:after {
      width: 125px;
    }
  }

  /* .nav__item_active {
    .nav__link {
      color: $admin-main-color;
    }
    .nav__link:after {
      width: 125px;
    }
  } */

  /* about */
  .about {
    padding-top: 60px;
  }

  .about__header {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }

  .about__title {
    margin-right: 60px;
  }

  .new-group {
    display: flex;
    align-items: center;
  }

  .new-group__icon {
    position: relative;
    margin-right: 20px;
    width: 21px;
    height: 21px;
    background-image: $admin-btn-color;
    border-radius: 50%;

    &:after {
      content: '+';
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 15px;
      color: $sec-text-color;
      transform: translate(-50%, -50%);
    }
  }

  .new-group__text {
    font-weight: 600;
    color: $admin-main-color;
  }

  .groups__list {
    display: flex;
    flex-wrap: wrap;
  }

  .groups__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2%;
    margin-bottom: 2%;
    padding: 30px 20px;
    width: 49%;
    height: 410px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: $sec-text-color;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  .groups__header {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 20px;
    padding: 0px 10px 14px 10px;
    border-bottom: 1px solid $input-color; 
  }

  .groups__title {
    width: 60%;
  }

  .skills {
    height: 100%;
  }

  .skills__item {
    display: flex;
    justify-content: space-between;
    margin: 0px 8px 16px 8px;
  }

  .skills__row {
    width: 80%;
  }

  .skills__input {
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
    border: none;
    border-bottom: 1px solid #000;

    &:disabled {
      border-bottom: 1px solid transparent;
      background-color: transparent;
    }
  }

  .skills__skill-name {
    margin-right: 5%;
    width: 75%;
  }

  .skills__skill-percent {
    padding-left: 10px;
    width: 20%;
  }

  .group-buttons {

    .button-icon {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .group-buttons-change {
    /* display: none; */
  }

  .group-buttons-save {
    display: none;
  }



  .groups__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .groups__new-skill-name {
    margin-right: 10px;
    padding-left: 20px;
    width: 40%;
    font-size: 16px;
  }

  .groups__new-skill-percent {
    margin-right: 30px;
    padding-left: 10px;
    width: 15%;
    font-size: 16px;
  }

  .groups__new-skill-add {
    width: 40px;
    height: 40px;
    font-size: 30px;
    font-weight: 600;
    color: $sec-text-color;
    background-image: $admin-btn-color;
    border-radius: 50%;
  }

  .works {
    padding-top: 60px;
  }

  .works__title {
    margin-bottom: 60px;
  }

  .new-work {
    padding: 30px 20px;
    margin-bottom: 30px;
    width: 100%;
    background-color: #fff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  }

  .new-work__title {
    padding: 0 10px 25px 10px;
    margin-bottom: 48px;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid $input-color;
  }

  .new-work__content {
    display: flex;
    padding: 0px 10px;
  }

  .new-work__left {
    width: 50%;
    margin-right: 30px;
  }

  .new-work__right {
    width: 50%;
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

  .new-work__row {
    margin-bottom: 30px;
    width: 100%;

    &:last-child {
      margin-bottom: 40px;
    }
  }

  .new-work__input-title {
    margin-bottom: 15px;
    font-weight: 600;
    color: $input-color;
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
  }

  .new-work__button-reset {
    padding: 0;
    margin-right: 60px;
    font-weight: 600;
    background-color: transparent;
    color: $admin-main-color;
  }

  .works__list {
    display: flex;
    flex-wrap: wrap;
  }

  .works__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2%;
    margin-bottom: 2%;
    width: 32%;
    /* height: 590px; */
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #fff;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .work {
    height: 100%;
  }

  .work__image {
    margin-bottom: 40px;
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
  }

  .work__link {
    display: block;
    margin-bottom: 45px;
    font-weight: 600;
    text-decoration: none;
    color: $admin-main-color;
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
      }

      &:before {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }

    &__text {
      width: 150px;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
  }

</style>

<template lang="pug">
  .page-content
    header.header
      .container.header__container
        .header__left
          .header__user-photo
            img.header__user-img(src="../images/content/user.jpg")
          .header__user-name Евгений Гуртовой
          .header__desc Панель администрирования
        .header__right
          a.header__exit(href="#") Выйти
    nav.nav
      .container
        - var list = ["Обо мне", "Работы", "Отзывы"];
          ul.nav__list
            each item in list
              li.nav__item.nav__item_active
                a.nav__link(href="#") #{item}
    section.about
      .container
        .about__header
          h2.section-title.about__title Блок «Обо мне»
          .about__button
            a.new-group
              span.new-group__icon
              span.new-group__text Добавить группу

        .groups
          ul.groups__list

            li.groups__item
              .groups__header
                input.input.groups__title(
                  type="text" 
                  placeholder="Название новой группы"
                )
                .group-buttons
                  button.button-icon.button-icon_tick
                  button.button-icon.button-icon_remove
              
              .groups__footer
                input.input.groups__new-skill-name(
                  type="text" 
                  placeholder="Новый навык"
                )
                input.input.groups__new-skill-percent(
                  type="number" 
                  placeholder="100 %"
                )
                button.groups__new-skill-add +

            li.groups__item
              .groups__header
                input.input.groups__title(
                  type="text" 
                  placeholder="Название новой группы"
                  value="Frontend"
                  disabled
                )
                .group-buttons
                  .group-buttons-change
                    button.button-icon.button-icon_pencil
                  .group-buttons-save
                    button.button-icon.button-icon_tick
                    button.button-icon.button-icon_remove
              .skills
                ul.skills__list
                  -
                    var items = [
                      ["HTML5", "100"],
                      ["CSS3", "90"],
                      ["JavaScript", "80"],
                      ["Jquery и Vue.js", "85"]
                    ];
                  each item in items
                    li.skills__item
                      .skills__row
                        input.skills__input.skills__skill-name(
                          type="text"
                          value=`${item[0]}`
                          disabled
                        )
                        input.skills__input.skills__skill-percent(
                          type="number"
                          value=`${item[1]}`
                          disabled
                        )
                      .group-buttons
                        .group-buttons-change
                          button.button-icon.button-icon_pencil
                          button.button-icon.button-icon_trash
                        .group-buttons-save
                          button.button-icon.button-icon_tick
                          button.button-icon.button-icon_remove

              .groups__footer
                input.input.groups__new-skill-name(
                  type="text" 
                  placeholder="Новый навык"
                )
                input.input.groups__new-skill-percent(
                  type="number" 
                  placeholder="100 %"
                )
                button.groups__new-skill-add +

            li.groups__item
              .groups__header
                input.input.groups__title(
                  type="text" 
                  placeholder="Название новой группы"
                  value="Workflow"
                  disabled
                )
                .group-buttons
                  .group-buttons-change
                    button.button-icon.button-icon_pencil
                  .group-buttons-save
                    button.button-icon.button-icon_tick
                    button.button-icon.button-icon_remove
              .skills
                ul.skills__list
                  -
                    var items = [
                      ["Git", "30"],
                      ["Terminal", "20"],
                      ["Gulp", "10"],
                      ["Webpack", "25"]
                    ];
                  each item in items
                    li.skills__item
                      .skills__row
                        input.skills__input.skills__skill-name(
                          type="text"
                          value=`${item[0]}`
                          disabled
                        )
                        input.skills__input.skills__skill-percent(
                          type="number"
                          value=`${item[1]}`
                          disabled
                        )
                      .group-buttons
                        .group-buttons-change
                          button.button-icon.button-icon_pencil
                          button.button-icon.button-icon_trash
                        .group-buttons-save
                          button.button-icon.button-icon_tick
                          button.button-icon.button-icon_remove

              .groups__footer
                input.input.groups__new-skill-name(
                  type="text" 
                  placeholder="Новый навык"
                )
                input.input.groups__new-skill-percent(
                  type="number" 
                  placeholder="100 %"
                )
                button.groups__new-skill-add +

    section.works
      .container
        h2.section-title.works__title Блок «Работы»
        form.new-work
          h3.new-work__title Редактирование работы
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
                      p.new-work__input-title #{item}
                      textarea.new-work__input.form__input_textarea
                    else if item === "Добавление тэга"
                      p.new-work__input-title #{item}
                      input(type="text").input.new-work__input
                      ul.new-work__tags
                        - var tags = ["HTML", "CSS", "JavaScript"];
                        each tag in tags
                          li.new-work__tag #{tag}
                            span.close.new-work__del-tag
                          
                    else
                      p.new-work__input-title #{item}
                      input(type="text").input.new-work__input
              .new-work__buttons
                button(type="reset").new-work__button-reset Отмена
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
                img.work__img(src="../images/content/slide-1.jpg")
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
                img.work__img(src="../images/content/slide-2.jpg")
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
                img.work__img(src="../images/content/slide-3.jpg")
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
                img.work__img(src="../images/content/slide-4.jpg")
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
                img.work__img(src="../images/content/slide-5.jpg")
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