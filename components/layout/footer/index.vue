<script setup></script>

<template>
  <footer class="footer">
    <div class="container container--md">
      <div class="footer__content">
        <div class="footer__part footer__part--left">
          <LayoutFooterContactUs />
        </div>

        <div class="footer__part footer__part--center">
          <LayoutFooterOrganic />
        </div>

        <div class="footer__part footer__part--right">
          <LayoutFooterUtilityPages />
        </div>
      </div>
    </div>

    <div class="footer__copyright">
      <span class="footer__font footer__font--copyright">
        Copyright &copy; <span>Organick</span>
      </span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  &__content {
    padding-bottom: em(102);
    display: flex;
    justify-content: center;
  }

  &__part {
    &--left {
      padding-right: em(51);
    }

    &--center {
      padding: 0 em(42);
      border-left: 1px solid $color-white-1;
      border-right: 1px solid $color-white-1;
    }

    &--right {
      padding-left: em(51);
    }
  }

  &__copyright {
    text-align: center;
    padding-top: em(17);
    border-top: 1px solid $color-white-1;
  }

  &__font {
    &--copyright {
      font-size: em(18);
      line-height: em(30, 18);

      span {
        font-weight: $font-weight-bold;
      }
    }
  }
}
</style>
