<template lang="pug">
  .login-container
    form.login
      .login__title Авторизация
      .login__row
        label.login__block
          p.login__field-title Логин
          .login__field
            .login__icon
            input(
              type="text"
              name="user.name"
              required
            ).login__input
      .login__row
        label.login__block
          p.login__field-title Пароль
          .login__field
            .login__icon
            input(
              type="password"
              name="user.password"
              required
            ).login__input
      .login__button
        button(type="submit").login__send-data Отправить
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  })
}
</script>

<style lang="postcss">
  .login-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("~images/content/admin-bg.jpg") center center / cover no-repeat;
    z-index: 5;
    
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: .8;
      background-color: #2d3c4e;
    }
  }

  .login {
    padding: 60px 75px;
    background-color: $sec-text-color;
    z-index: 10;
  }

  .login__title {
    margin-bottom: 40px;
    font-size: 36px;
    font-weight: 600;
    line-height: 1;
  }

  .login__row {
    margin-bottom: 40px;
    width: 400px;
  }

  .login__field-title {
    margin-left: 50px;
  }

  .login__field {
    display: flex;
    margin-top: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid $text-color;
    transition: border-color .4s;

    &:focus-within {
      border-color: $main-color;
    }

    &_error {
      border-color: $error-color;
    }
  }

  .login__icon {
    margin-right: 20px;
    width: 40px;
    height: 40px;
    transition: background .4s;

    &_user {
      background: svg-load("user.svg", fill=$input-color, width=100%, height=100%) no-repeat;
    }

    &_password {
      
    }
  }

  .login__input {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    border: none;
    background: transparent;
    color: $sec-text-color;
    outline: none;
  }

</style>