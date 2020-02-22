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
  components: {
    appHeader: () => import("./components/header"),
    tabs: () => import("./components/tabs")
  }
}
</script>

<style lang="postcss">
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
    width: 100%;
    background-color: #fff;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);

    @include phones-hd {
      padding: 30px 0;
    }
  }

  .form__title {
    padding: 0 10px 30px;
    margin-bottom: 48px;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid $input-color;

    @include phones-hd {
      padding: 0 20px 30px;
    }
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

  .btns {
    padding: 0;
    width: 15px;
    height: 15px;

    &_edit {
      background: svg-load("pencil.svg", fill=$input-color, width=100%, height=100%) no-repeat;
    }

    &_remove {
      background: svg-load("trash.svg", fill=$input-color, width=100%, height=100%) no-repeat;
    }

    &_ok {
      background: svg-load("tick.svg", fill=#00d70a, width=100%, height=100%) no-repeat;
    }

    &_cancell {
      background: svg-load("remove.svg", fill=#bf2929, width=100%, height=100%) no-repeat;
    }
  }
</style>