<template lang="pug">
  .page-content
    login
    header.header
      appHeader
    nav.nav
      appTabs
    main.content
      about
      works
      reviews
</template>

<script>
import header from './components/header';
import tabs from './components/tabs';
// pages
import login from './components/pages/login';
import about from './components/pages/about';
import works from './components/pages/works';
import reviews from './components/pages/reviews';

export default {
  name: 'app',
  components: {
    appHeader: header,
    appTabs: tabs,
    login,
    about,
    works,
    reviews
  },
  data () {
    return {

    }
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

  .section-title {
    margin-bottom: 60px;
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

  /* about */
  .about {
    padding-top: 60px;
  }

  .about__title {
    display: flex;
    align-items: center;
  }

  .new-group {
    display: flex;
    align-items: center;
    margin-left: 60px;
  }

  .new-group__icon {
    position: relative;
    margin-right: 20px;
    width: 21px;
    height: 21px;
    background-image: $admin-btn-color;
    border-radius: 50%;

    &:after {
      content: '+';
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 15px;
      color: $sec-text-color;
      transform: translate(-50%, -50%);
    }
  }

  .new-group__text {
    font-size: 16px;
    font-weight: 600;
    color: $admin-main-color;
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
      margin-right: 0;
    }
  }

  .groups__header {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 20px;
    padding: 0px 10px 14px 10px;
    border-bottom: 1px solid $input-color; 
  }

  .groups__title {
    width: 60%;
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

  .group-buttons {

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

  .groups__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .groups__new-skill-name {
    margin-right: 10px;
    padding-left: 20px;
    width: 40%;
    font-size: 16px;
  }

  .groups__new-skill-percent {
    margin-right: 30px;
    padding-left: 10px;
    width: 15%;
    font-size: 16px;
  }

  .groups__new-skill-add {
    width: 40px;
    height: 40px;
    font-size: 30px;
    font-weight: 600;
    color: $sec-text-color;
    background-image: $admin-btn-color;
    border-radius: 50%;
  }

  .works {
    padding-top: 60px;
  }

  .works__title {
    margin-bottom: 60px;
  }

  /* .new-work__title {
    padding: 0 10px 30px;
    margin-bottom: 48px;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid $input-color;
  } */

  .new-work__content {
    display: flex;
    padding: 0px 10px;
  }

  .new-work__left {
    width: 50%;
    margin-right: 30px;
  }

  .new-work__right {
    width: 50%;
  }

  .add-work {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 85px;
    padding-bottom: 65px;
    border: 1px solid #a1a1a1;
    background-color: #dee4ed;
  }

  .add-work__text {
    margin-bottom: 27px;
    width: 240px;
    font-weight: 600;
    line-height: 33.89px;
    opacity: .5;
  }

  .page-button {
    padding: 20px 40px;
    font-weight: 700;
    background-image: $admin-btn-color;
    color: $sec-text-color;
    border-radius: 50px;
    text-transform: uppercase;
  }

  .page-button_cancel {
    padding: 0;
    margin-right: 60px;
    font-weight: 600;
    background-color: transparent;
    color: $admin-main-color;
  }

  .new-work__row {
    margin-bottom: 30px;
    width: 100%;

    &:last-child {
      margin-bottom: 40px;
    }
  }

  /* .new-work__input-title {
    margin-bottom: 15px;
    font-weight: 600;
    color: $input-color;
  } */

  .new-work__input {
    width: 100%;
    font-size: 16px;
  }

  .new-work__tags {
    display: flex;
    margin-top: 20px;
  }

  .new-work__tag {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 10px 15px;
    font-size: 14px;
    background-color: #f4f4f4;
    border-radius: 50px;
  }

  .close{
    position: relative;
    display: inline-block;
    margin-left: 10px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .close:before,
  .close:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 14px;
      height: 2px;
      background: $admin-text-color;
  }

  .close:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .close:after {
      transform: translate(-50%, -50%) rotate(-45deg);
  }

  .new-work__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  /* .new-work__button-reset {
    padding: 0;
    margin-right: 60px;
    font-weight: 600;
    background-color: transparent;
    color: $admin-main-color;
  } */

  .works__list {
    display: flex;
    flex-wrap: wrap;
  }

  .works__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2%;
    margin-bottom: 2%;
    width: 32%;
    /* height: 590px; */
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #fff;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .work {
    height: 100%;
  }

  .work__image {
    margin-bottom: 40px;
  }

  .work__content {
    padding: 0px 30px 40px;
  }

  .work__title {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
  }

  .work__text {
    margin-bottom: 30px;
    font-weight: 600;
    line-height: 30px;
    color: $input-color;
  }

  .work__link {
    display: block;
    margin-bottom: 45px;
    font-weight: 600;
    text-decoration: none;
    color: $admin-main-color;
  }

  .work__buttons {
    display: flex;
    justify-content: space-between;
  }

  .btn-change {
    display: flex;
    align-items: center;
    padding: 0;
    font-weight: 600;
    color: $input-color;
    background-color: transparent;

    &__icon-rename,
    &__icon-del {
      margin-left: 10px;
      width: 17px;
      height: 17px;
    }

    &__icon-rename {
      background: svg-load("pencil.svg", fill=$admin-main-color, width=100%, height=100%) no-repeat;
    }

    &__icon-del {
      background: svg-load("close.svg", fill=$error-color, width=100%, height=100%) no-repeat;
    }
  }

  .btn-create {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 100%;
    background-image: $admin-btn-color;
    color: $sec-text-color;

    &__icon {
      position: relative;
      margin-bottom: 30px;
      width: 150px;
      height: 150px;
      background-color: transparent;
      border: 2px solid $sec-text-color;
      border-radius: 50%;

      &:after,
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 34px;
        height: 2px;
        background-color: $sec-text-color;
        transform: translate(-50%, -50%);
      }

      &:before {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }

    &__text {
      width: 150px;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
  }

  .reviews__list {
    display: flex;
    flex-wrap: wrap;
  }

  .reviews__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2%;
    margin-bottom: 2%;
    width: 32%;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #fff;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  .new-review {
    padding-bottom: 50px;
  }

  .new-review__content {
    padding: 0px 10px;
    display: flex;
  }

  .new-review__left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 30px;
  }

  .new-review__right {
    width: 620px;
  }

  .new-review__photo {
    margin-bottom: 30px;
    width: 200px;
    height: 200px;
    background-image: svg-load("user-review.svg", fill=#fff,  width=105px, height=133px);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #dee4ed;
    border-radius: 50%;
    overflow: hidden;
  }

  .new-review__add-photo {
    font-weight: 600;
    color: $admin-main-color;
    text-decoration: none;
  }

  .new-review__row {
    display: flex;
    margin-bottom: 30px;
  }

  .new-review__block {
    margin-right: 30px;
    width: 100%;

    &:last-child {
      margin-right: 0;
    }
  }

  .new-review__input {
    width: 100%;
  }

  .new-review__input {
    padding: 20px;
  }

  .new-review__buttons {
    display: flex;
    justify-content: flex-end;
  }

  .review {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px;
  }

  .review__title {
    margin-bottom: 30px;
    padding: 0px 10px 30px;
    border-bottom: 1px solid $input-color;
  }

  .review-user {
    display: flex;
  }

  .review-user__image {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .review-user__name {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
  }

  .review-user__desc {;
    font-weight: 600;
    color: $input-color;
  }

  .review__content {
    padding: 0px 10px;
  }

  .review__text {
    padding-right: 15px;
    font-weight: 600;
    line-height: 30px;
    opacity: .7;
  }

  .review__buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
  }
</style>