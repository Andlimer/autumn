<template lang="pug">
  .page-content
    header.header
      app-header
    nav.nav
      tabs
    main.content
      router-view
</template>

<script>
export default {
  name: 'app',
  components: {
    appHeader: () => import("./components/header"),
    tabs: () => import("./components/tabs")
  }
}
</script>

<style lang="postcss">
  /* import стилей */
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

  body {
    color: $admin-text-color;
  }

  .page-content {
    background-color: #f7f9fe;
  }

  .page-title {
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
  }

  .input {
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    color: $admin-text-color;
    border: none;
    border-bottom: 1px solid #000;

    &::placeholder {
      color: $input-color;
    }

    &:disabled {
      background-color: transparent;
      border-bottom: 1px solid transparent;
    }
  }

  .input__title {
    margin-bottom: 15px;
    font-weight: 600;
    color: $input-color;
  }

  .form {
    padding: 30px 20px;
    margin-bottom: 30px;
    width: 100%;
    background-color: #fff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  }

  .form__title {
    padding: 0 10px 30px;
    margin-bottom: 48px;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid $input-color;
  }

  .form__input_textarea {
    padding: 20px 80px 20px 20px;
    height: 150px;
    width: 100%;
    font-weight: 600;
    line-height: 30px;
    border: 1px solid $input-color;
    resize: none;
  }

  .button-icon {
    width: 15px;
    height: 15px;

    &_pencil {
      background: svg-load("pencil.svg", fill=$input-color, width=100%, height=100%) no-repeat;
    }

    &_trash {
      background: svg-load("trash.svg", fill=$input-color, width=100%, height=100%) no-repeat;
    }

    &_tick {
      background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%) no-repeat;
    }

    &_remove {
      background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%) no-repeat;
    }
  }
</style>