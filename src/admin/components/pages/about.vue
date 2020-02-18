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
              skills-group
</template>

<script>
export default {
  components: {
    skillsGroup: () => import("../skills-group")
  }
}
</script>

<style lang="postcss">

  .about {
    padding: 60px 0px;
  }

  .about__title {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
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
      margin-right: 0; /* Изменить на отрицательный margin */
    }
  }

/* перенести в skills-group.vue */

  .skills-group__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0px 10px 14px 10px;
    border-bottom: 1px solid $input-color; 
  }

  .skills-group__title {
    width: 60%;
  }

  .skills-group-buttons {

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

  .group__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .group__new-skill-name {
    margin-right: 10px;
    padding-left: 20px;
    width: 40%;
    font-size: 16px;
  }

  .group__new-skill-percent {
    margin-right: 30px;
    padding-left: 10px;
    width: 15%;
    font-size: 16px;
  }

  .group__new-skill-add {
    width: 40px;
    height: 40px;
    font-size: 30px;
    font-weight: 600;
    color: $sec-text-color;
    background-image: $admin-btn-color;
    border-radius: 50%;
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
</style>