<template lang="pug">
  .skills-group
    .skills-group__header
      h3.input.skills-group__title Name
      .skills-group__buttons
        button.btns.btns_edit

    .skills
      skills

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
  components: {
    skills: () => import("./skills")
  }
}
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";

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

    @include laptop {
      width: 75%;
    }

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

    @include tablets {
      padding: 0px 20px;
    }

    @include phones-hd {
      justify-content: center;
      padding: 0px 20px;
    }
  }

  .add-skill__name {
    margin-right: 15px;
    padding-left: 20px;
    width: 220px;

    @include laptop {
      width: 50%;
    }
  }

  .add-skill__field {
    position: relative;
    margin-right: 30px;
    width: 70px;

    &:after {
      content: '%';
      position: absolute;
      top: 0;
      right: 10px;
      font-weight: 600;
      color: $input-color;
    }

    /* @include phones-hd {
      width: 23%;
    } */
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
</style>