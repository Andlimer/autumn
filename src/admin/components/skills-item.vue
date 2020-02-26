<template lang="pug">
  li(v-if="editmode === false").skills__item
    .skills__row
      span.skills__input.skills__input_name {{skill.title}}
      label.skills__field
        span.skills__input.skills__input_percent {{skill.percent}}
    .skills__buttons
      .skills__change
        button(type="button" @click="editmode = true").btns.btns_edit
        button(type="button" @click="removeExistedSkill").btns.btns_remove

  li(v-else).skills__item
    .skills__row
      input(
        type="text"
        v-model="editedSkill.title"
      ).skills__input.skills__input_name
      label.skills__field
        input(
          type="number"
          v-model="editedSkill.percent"
        ).skills__input.skills__input_percent
    .skills__buttons
      .skills__save
        button(type="button" @click="editExistedSkill").btns.btns_ok
        button(type="button" @click="editmode = false").btns.btns_cancell
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editmode: false,
      editedSkill: {...this.skill}
    };
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {

      }
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {

      }
    }
  }
};
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";
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
    width: 60px;

    &:after {
      content: '%';
      position: absolute;
      top: 0;
      right: 0;
      font-weight: 600;
      color: $input-color;
    }
  }

  .skills__input_percent {
    display: block;
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

  /* .skills__save {
    display: none;
  } */
</style>