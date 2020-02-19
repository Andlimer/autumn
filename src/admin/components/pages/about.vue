<template lang="pug">
  section.about
    .container
      .about__title
        h1.page-title Блок «Обо мне»
        form.categories-form
          button.about__add-group Добавить группу

    .about__content
      .container.container_mobile
        .groups
          ul.groups__list
            li.groups__item
              .skills-group
                .skills-group__header
                  input(
                    type="text" 
                    placeholder="Название новой группы"
                  ).input.skills-group__title
                  .skills-group__buttons
                    button.btns.btns_ok
                    button.btns.btns_cancell

                .skills-group__footer
                  form.add-skill
                    input(
                      type="text" 
                      placeholder="Новый навык"
                    ).input.add-skill__name
                    label.add-skill__field
                      input(
                        type="number" 
                        placeholder="100"
                      ).input.add-skill__percent
                    button.add-skill__button +

            li.groups__item
              .skills-group
                .skills-group__header
                  input(
                    type="text" 
                    placeholder="Название новой группы"
                    value="Frontend"
                    disabled
                  ).input.skills-group__title
                  .skills-group__buttons
                    button.btns.btns_edit

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
                        input.skills__input.skills__input_name(
                          type="text"
                          value=`${item[0]}`
                          disabled
                        )
                        label.skills__field
                          input.skills__input.skills__input_percent(
                            type="number"
                            value=`${item[1]}`
                            disabled
                          )
                      .skills__buttons
                        .skills__change
                          button.btns.btns_edit
                          button.btns.btns_remove
                        .skills__save
                          button.btns.btns_ok
                          button.btns.btns_cancell

                .skills-group__footer
                  form.add-skill
                    input(
                      type="text" 
                      placeholder="Новый навык"
                    ).input.add-skill__name
                    label.add-skill__field
                      input(
                        type="number" 
                        placeholder="100"
                      ).input.add-skill__percent
                    button.add-skill__button +

            li.groups__item
              .skills-group
                .skills-group__header
                  input(
                    type="text" 
                    placeholder="Название новой группы"
                    value="Workflow"
                    disabled
                  ).input.skills-group__title
                  .skills-group__buttons
                    button.btns.btns_edit

                .skills
                  ul.skills__list
                  -
                    var items = [
                      ["Git", "30"],
                      ["Terminal", "40"],
                      ["Gulp", "10"],
                      ["Webpack", "10"]
                    ];
                  each item in items
                    li.skills__item
                      .skills__row
                        input.skills__input.skills__input_name(
                          type="text"
                          value=`${item[0]}`
                          disabled
                        )
                        label.skills__field
                          input.skills__input.skills__input_percent(
                            type="number"
                            value=`${item[1]}`
                            disabled
                          )
                      .skills__buttons
                        .skills__change
                          button.btns.btns_edit
                          button.btns.btns_remove
                        .skills__save
                          button.btns.btns_ok
                          button.btns.btns_cancell

                .skills-group__footer
                  form.add-skill
                    input(
                      type="text" 
                      placeholder="Новый навык"
                    ).input.add-skill__name
                    label.add-skill__field
                      input(
                        type="number" 
                        placeholder="100"
                      ).input.add-skill__percent
                    button.add-skill__button +
</template>

<script>
export default {
  
}
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

  .about {
    padding: 60px 0;

    @include phones-hd {
      padding: 40px 0;
    }
  }

  .about__title {
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    @include phones {
      display: block;
      /* flex-wrap: wrap; */
      margin-bottom: 40px;
    }
  }

  .about__add-group {
    display: flex;
    align-items: center;
    margin-left: 60px;
    padding: 0;
    font-weight: 700;
    color: $admin-main-color;
    background: transparent;

    &:before {
      content: '+';
      display: block;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      background-image: $admin-btn-color;
      line-height: 23px;
      color: #fff;
      margin-right: 13px;
    }

    @include phones {
      margin-top: 30px;
      margin-left: 0;
    }
  }

  .groups__list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;

    @include tablets {
      margin-left: 0;
    }
  }

  .groups__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    margin-bottom: 30px;
    padding: 30px 20px;
    width: calc(100% / 2 - 30px);
    min-height: 410px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: $sec-text-color;

    @include tablets {
      padding: 30px 0;
      width: 100%;
      margin-left: 0;
      margin-bottom: 12px;
    }
  }

/* skills-group */

  .skills-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .skills-group__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0px 10px 14px 10px;
    border-bottom: 1px solid $input-color;

    @include phones-hd {
      padding: 0px 20px 14px 20px;
    }
  }

  .skills-group__title {
    width: 60%;
    font-size: 18px;

    @include phones-hd {
      width: 80%;
    }
  }

  .skills-group__buttons {

    .btns {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .add-skill {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @include phones-hd {
      justify-content: center;
      padding: 0px 20px;
    }
  }

  .add-skill__name {
    margin-right: 15px;
    padding-left: 20px;
    width: 40%;

    @include phones-hd {
      width: 50%;
    }
  }

  .add-skill__field {
    position: relative;
    margin-right: 30px;
    width: 15%;

    &:after {
      content: '%';
      position: absolute;
      top: 0;
      right: 10px;
      font-weight: 600;
      color: $input-color;
    }

    @include phones-hd {
      width: 23%;
    }
  }

  .add-skill__percent {
    padding-left: 10px;
    width: 100%;
  }

  .add-skill__button {
    width: 40px;
    height: 40px;
    font-size: 30px;
    font-weight: 600;
    color: $sec-text-color;
    background-image: $admin-btn-color;
    border-radius: 50%;
  }

/* skills */
  .skills {
    padding: 0px 10px;
    height: 100%;

    @include phones-hd {
      padding: 0px 20px;
    }
  }

  .skills__item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .skills__row {
    display: flex;
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

  .skills__input_name {
    margin-right: 5%;
    width: 75%;
  }

  .skills__field {
    position: relative;
    width: 20%;

    &:after {
      content: '%';
      position: absolute;
      top: 0;
      right: 10px;
      font-weight: 600;
      color: $input-color;
    }

    @include phones-hd {
      width: 35%;
    }
  }

  .skills__input_percent {
    padding-left: 10px;
    width: 100%;
  }

  .skills__buttons {

    .btns {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  /* .skills__change {
    display: none;
  } */

  .skills__save {
    display: none;
  }

</style>