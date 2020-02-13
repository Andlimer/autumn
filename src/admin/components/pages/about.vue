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