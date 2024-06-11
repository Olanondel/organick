# Nuxt 3 Boilerplate

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Directory structure

- **[/app](https://nuxt.com/docs/guide/going-further/custom-routing#using-approuteroptions)** - router.options.js
- **[/assets](https://nuxt.com/docs/guide/directory-structure/assets)** - files for build tool processing
  - **/icons** - svg icons to use by `CIcon` component. Icons can be folded. Usage:
    ```vue
    <CIcon name="icon-path/icon-name" />
    ```
  - **/styles** - SCSS styles & tools
    - **/base** - SCSS global styles:
      - `reset.scss` - CSS reset (additional to 'reset-css')
      - `fonts.scss` - fonts setup (font-faces)
      - `vendors.scss` - vendor styles (for global libraries)
      - `transitions.scss` - [Vue transitions](https://vuejs.org/guide/built-ins/transition)
      - `base.scss` - html, body, base blocks styles
      - `blocks/index.scss` - global blocks (.container etc.)
    - **/utils** - SCSS utils (variables, mixins, functions etc.):
      - `variables.scss` - [SCSS variables](https://sass-lang.com/documentation/variables/)
      - `utils.scss` - [SCSS mixins](https://sass-lang.com/documentation/at-rules/mixin/) & [functions](https://sass-lang.com/documentation/at-rules/function/)
      - `breakpoints.scss` - [Bootstrap breakpoint mixins](https://getbootstrap.com/docs/5.3/layout/breakpoints/)
- **[/components](https://nuxt.com/docs/guide/directory-structure/components)** - Vue 3 components
  - **/common** - universal components closed to modifying
  - **/layout** - layout components (Header, Footer etc.)
  - **/modals** - [VueFinalModal modal components](https://vue-final-modal.org/api/components/vue-final-modal)
  - **/ui** - basic UI components (Button, Label etc.)
- **[/composables](https://nuxt.com/docs/guide/directory-structure/composables)** - Vue 3 composables
- **/configs** - static data storage
- **[/layouts](https://nuxt.com/docs/guide/directory-structure/layouts)** - composed wrappers
- **[/pages](https://nuxt.com/docs/guide/directory-structure/pages)** - Vue Router views
- **[/plugins](https://nuxt.com/docs/guide/directory-structure/plugins)** - Vue plugins, initial data fetching etc.
- **/stores** - [Pinia stores](https://pinia.vuejs.org/ssr/nuxt.html)
- **[/utils](https://nuxt.com/docs/guide/directory-structure/utils)** - helpers & other
- **[app.vue](https://nuxt.com/docs/guide/directory-structure/app)** - app entry point component
- **[error.vue](https://nuxt.com/docs/guide/directory-structure/error)** - error page component
- **[nuxt.config.js](https://nuxt.com/docs/api/nuxt-config)** - Nuxt configuration
- **[app.config.js](https://nuxt.com/docs/guide/directory-structure/app-config)** - Reactive app configuration

## Name casing

- **Default**: kebab-case
- **/components**: PascalCase
- **/composables**: camelCase

## SCSS basics

**[BEM methodology](https://ru.bem.info/methodology/css/)** basic usage in Vue components:

```vue
<style scoped lang="scss">
.block {
  $parent: &;
  
  // block styles
  
  @include hover {
    // hover styles on devices with hover
  }
  
  @include media-breakpoint-down(sm) {
    // sm breakpoint down styles
  }
  
  &__font {
    &--text {
      // text font styles
    }
  }
  
  &__icon {
    &--circle {
      // circle icon styles
    }
  }
  
  &__element {
    &--modifier {
      // element modifier styles
    }
  }
  
  &--modifier {
    // block modifier styles
    
    #{$parent}__element {
      // block modifier element styles
    }
  }
}
</style>
```

- [Scoped CSS](https://vuejs.org/api/sfc-css-features.html#scoped-css)
- [Deep selectors](https://vuejs.org/api/sfc-css-features.html#deep-selectors)
- [v-bind() in CSS](https://vuejs.org/api/sfc-css-features.html#v-bind-in-css)

## Npm modules:

- **[@nuxt/image](https://image.nuxt.com/)** - image optimization
- **[@nuxtjs/device](https://github.com/nuxt-modules/device)** - device detection by user-agent
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** - internationalization
- **[@nuxtjs/robots](https://github.com/nuxt-modules/robots)** - robots.txt generator
- **[@sentry/vue](https://docs.sentry.io/platforms/javascript/guides/vue/)** - Sentry errors detection
- **[@vee-validate/yup](https://vee-validate.logaretm.com/v4/guide/composition-api/getting-started#validating-with-yup)** - Yup integration for vee-validate
- **[@vueuse/components](https://vueuse.org/guide/components)** - VueUse util components
- **[@vueuse/core](https://vueuse.org/)** - VueUse util composables
- **[bootstrap](https://getbootstrap.com/)** - Bootstrap for [breakpoint mixins](https://getbootstrap.com/docs/5.3/layout/breakpoints/)
- **[lodash](https://lodash.com/)** - Lodash util functions
- **[nuxt-delay-hydration](https://github.com/harlan-zw/nuxt-delay-hydration)** - delay client js hydration for pagespeed
- **[nuxt-svgo](https://nuxt.com/modules/nuxt-svgo)** - svg files as Vue components
- **[pinia](https://pinia.vuejs.org/)** - Pinia store for Vue
- **[qs](https://github.com/ljharb/qs)** - querystring parsing and stringifying
- **[reset-css](https://github.com/shannonmoeller/reset-css)** - base CSS reset
- **[scroll-lock](https://github.com/FL3NKEY/scroll-lock)** - js scroll lock
- **[swiper](https://swiperjs.com/)** - mobile touch slider
- **[typograf](https://github.com/typograf/typograf)** - grammar helper
- **[vee-validate](https://vee-validate.logaretm.com/v4/)** - Vue form validation
- **[vue-collapsed](https://github.com/smastrom/vue-collapsed)** - content toggle
- **[vue-final-modal](https://vue-final-modal.org/)** - modal window

## Development

Install the dependencies & start the development server:

```bash
yarn install
```

```bash
yarn dev
```

## Production

Build the application for production & locally preview:

```bash
yarn build
```

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
