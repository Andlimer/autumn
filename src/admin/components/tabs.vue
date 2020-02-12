<template lang="pug">
  .container
    ul.nav__list
      li.nav__item(v-for="tab in tabs")
        a.nav__link(
          :href="tab.href"
          exact-active-class="active"
        ) {{ tab.title }}
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {title: "Обо мне", href: "/"},
        {title: "Работы", href: "/works"},
        {title: "Отзывы", href: "/reviews"}
      ]
    };
  }
};
</script>

<style lang="postcss">
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
</style>