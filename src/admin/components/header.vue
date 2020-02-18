<template lang="pug">
  .container
    .header__container
      .header__left
        .header__user-photo
          img(src="../../images/content/user.jpg").header__user-img
        .header__user-name Евгений Гуртовой
          a.header__exit(href="#") Выйти
        .header__desc Панель администрирования
      .header__right
        a.header__exit(href="#") Выйти
</template>

<style lang="postcss">
@import "../../styles/mixins.pcss";

  .header {
    padding: 18px 0;
    color: $sec-text-color;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__left {
    display: flex;
    align-items: center;
  }

  .header__user-photo {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
  }

  .header__user-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header__user-name {
    margin-right: 28px;
    font-size: 18px;

    .header__exit {
      display: none;

      @include phones {
        display: block;
      }
    }
  }

  .header__desc {
    font-size: 15px;
    opacity: .5;

    @include phones {
      display: none;
    }
  }

  .header__exit {
    display: block;
    opacity: .7;

    @include phones {
      display: none;
    }
  }
</style>