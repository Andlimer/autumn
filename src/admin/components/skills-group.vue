<template lang="pug">
  .skills-group
    .skills-group__header
      h3.input.skills-group__title {{ category.category }}
      .skills-group__buttons
        button.btns.btns_edit
        button.btns.btns_remove

    .skills
      ul.skills__list
        skills-item(
          v-for="skill in category.skills"
          :key="skill.id"
          :skill="skill"
        )

    .skills-group__footer
      form(
        @submit.pevent="addNewSkill"
        :class={blocked: loading}
      ).add-skill
        input(
          type="text" 
          placeholder="Новый навык"
          v-model="skill.title"
        ).input.add-skill__name
        label.add-skill__field
          input(
            type="number" 
            placeholder="100"
            v-model="skill.percent"
          ).input.add-skill__percent
        button(
          type="submit"
          :disabled="loading"
        ).add-skill__button +
</template>

<script>
import { mapActions} from "vuex";
export default {
  components: {
    skillsItem: () => import("./skills-item")
  },
  data() {
    return {
      loading: false,
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    }
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch(error) {

      } finally {
        this.loading = false;
      }
    }
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

  .add-skill.blocked {
    opacity: 0.5;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
  }

</style>