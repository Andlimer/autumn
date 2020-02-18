<template lang="pug">
.group-container
  .skills-group__header
    input(
      type="text" 
      placeholder="Название новой группы"
    ).input.skills-group__title
    .skills-group-buttons
      button.button-icon.button-icon_tick
      button.button-icon.button-icon_remove

  .skills-group__footer
    input(
      type="text" 
      placeholder="Новый навык"
    ).input.skills-group__new-skill-name
    input(
      type="number" 
      placeholder="100 %"
    ).input.skills-group__new-skill-percent
    button.skills-group__new-skill-add +
</template>