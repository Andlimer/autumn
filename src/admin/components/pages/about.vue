<template lang="pug">
  section.about
    .container
      .about__title
        h1.page-title Блок «Обо мне»
        button.about__add-group Добавить группу

    .about__content
      .container.container_mobile
        .groups
            
          ul.groups__list
            li.groups__item
              .skills-group
                form(
                  @submit.prevent="addNewCategory"
                ).categories-form.skills-group__header
                  input(
                    type="text" 
                    placeholder="Название новой группы"
                    v-model="title"
                  ).input.skills-group__title
                  .skills-group__buttons
                    button(type="submit").btns.btns_ok
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

            li.groups__item(v-for="category in categories" :key="category.id")
              skills-group(
                :category="category"
              )

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsGroup: () => import("../skills-group")
  },
  data: () => ({
    title: ""
  }),
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      try {
        await this.addCategory(this.title);
      } catch (error) {
        alert(error.message);
      }
    }
  }
}
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

  .about {
    padding: 60px 0;
    height: 100%;

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

    @include laptop {
      margin-left: -20px;
    }

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

    @include laptop {
      width: calc(100% / 2 - 20px);
      margin-left: 20px;
      margin-bottom: 20px;
    }

    @include tablets {
      padding: 30px 0;
      width: 100%;
      margin-left: 0;
      margin-bottom: 12px;
    }
  }

</style>