<template lang="pug">
  ul.skills__list
    li.skills__item
      .skills__row
        span.skills__input.skills__input_name Skill
        label.skills__field
          span.skills__input.skills__input_percent 100
      .skills__buttons
        .skills__change
          button.btns.btns_edit
          button.btns.btns_remove
        .skills__save
          button.btns.btns_ok
          button.btns.btns_cancell
</template>

<style lang="postcss">
@import "../../styles/mixins.pcss";

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

  .skills__save {
    display: none;
  }
</style>