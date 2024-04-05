# Nuxt 3 Boilerplate

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Directory structure

### [/app](https://nuxt.com/docs/guide/going-further/custom-routing#using-approuteroptions) - router.options.js

### [/assets](https://nuxt.com/docs/guide/directory-structure/assets) - files for build tool processing

#### /icons - svg icons to use by `CIcon` component. Icons can be folded. Usage:

```vue
<CIcon name="icon-path/icon-name" />
```

#### /styles - SCSS styles & tools

##### /base - SCSS global styles:

1. `reset.scss` - css reset (additional to 'reset-css')
2. `fonts.scss` - fonts setup (font-faces)
3. `vendors.scss` - vendor styles (for global libraries)
4. `transitions.scss` - vue transitions (https://vuejs.org/guide/built-ins/transition)
5. `base.scss` - html, body, base blocks styles
6. `blocks/index.scss` - global blocks (.container etc.)

##### /utils - SCSS utils (variables, mixins, functions etc.):

1. `variables.scss` - SCSS variables (https://sass-lang.com/documentation/variables/)
2. `utils.scss` - SCSS mixins (https://sass-lang.com/documentation/at-rules/mixin/) & functions (https://sass-lang.com/documentation/at-rules/function/)
3. `breakpoints.scss` - Bootstrap breakpoint mixins (https://getbootstrap.com/docs/5.2/layout/breakpoints/)

### [/components](https://nuxt.com/docs/guide/directory-structure/components) - Vue 3 components

#### /common - universal components closed to modifying

#### /layout - layout components (Header, Footer etc.)

#### /modals - [VueFinalModal modal components](https://vue-final-modal.org/api/components/vue-final-modal)

#### /ui - basic UI components (Button, Label etc.)

### [/composables](https://nuxt.com/docs/guide/directory-structure/composables) - Vue 3 composables

### /configs - static data storage

### [/layouts](https://nuxt.com/docs/guide/directory-structure/layouts) - composed wrappers

### [/pages](https://nuxt.com/docs/guide/directory-structure/pages) - Vue Router views

### [/plugins](https://nuxt.com/docs/guide/directory-structure/plugins) - Vue plugins, initial data fetching etc.

### /stores - [Pinia stores](https://pinia.vuejs.org/ssr/nuxt.html)

### [/utils](https://nuxt.com/docs/guide/directory-structure/utils) - helpers & other

### [app.vue](https://nuxt.com/docs/guide/directory-structure/app) - app entry point component

### [error.vue](https://nuxt.com/docs/guide/directory-structure/error) - error page component

### [nuxt.config.js](https://nuxt.com/docs/api/nuxt-config) - Nuxt configuration

### [app.config.js](https://nuxt.com/docs/guide/directory-structure/app-config) - Reactive app configuration

## Development

Make sure to install the dependencies:

```bash
yarn install
```

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
