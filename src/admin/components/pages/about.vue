<template lang="pug">
  section.about
    .container
      h2.section-title.about__title Блок «Обо мне»
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
</template>

<style lang="postcss">
  .about {
    padding-top: 60px;
  }

  .about__title {
    display: flex;
    align-items: center;
  }

  .new-group {
    display: flex;
    align-items: center;
    margin-left: 60px;
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
    font-size: 16px;
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
</style>