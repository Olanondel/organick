<script setup></script>

<template>
  <div class="footer-contact-us">
    <h3 class="footer-contact-us__title">
      <span class="footer-contact-us__font footer-contact-us__font--title">
        Contact Us
      </span>
    </h3>

    <ul class="footer-contact-us__list">
      <li class="footer-contact-us__contact">
        <h4 class="footer-contact-us__type">
          <span class="footer-contact-us__font footer-contact-us__font--type">
            Email
          </span>
        </h4>

        <a href="mailto:needhelp@Organia.com" class="footer-contact-us__value">
          <span class="footer-contact-us__font footer-contact-us__font--value">
            needhelp@Organia.com
          </span>
        </a>
      </li>

      <li class="footer-contact-us__contact">
        <h4 class="footer-contact-us__type">
          <span class="footer-contact-us__font footer-contact-us__font--type">
            Phone
          </span>
        </h4>

        <a href="tel: +666 888 888" class="footer-contact-us__value">
          <span class="footer-contact-us__font footer-contact-us__font--value">
            666 888 888
          </span>
        </a>
      </li>

      <li class="footer-contact-us__contact">
        <h4 class="footer-contact-us__type">
          <span class="footer-contact-us__font footer-contact-us__font--type">
            Address
          </span>
        </h4>

        <div class="footer-contact-us__value">
          <span class="footer-contact-us__font footer-contact-us__font--value">
            88 road, borklyn street, USA
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.footer-contact-us {
  text-align: right;

  &__title {
    color: $color-blue-1;
    margin-bottom: em(32);
  }

  &__font {
    &--title {
      font-family: $font-family-roboto;
      font-size: em(30);
      line-height: em(35, 30);
      font-weight: $font-weight-bold;
    }

    &--type {
      font-size: em(18);
      line-height: 1.65;
      font-weight: $font-weight-bold;
    }

    &--value {
      font-size: em(18);
      line-height: 1.65;
    }
  }

  &__contact {
    & + & {
      margin-top: em(40);
    }
  }

  &__type {
    margin-bottom: em(10);
    color: $color-grey-1;
  }

  &__value {
    color: $color-grey-1;
  }
}
</style>
