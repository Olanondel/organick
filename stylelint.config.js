module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'color-no-invalid-hex': true,
    'color-hex-length': 'long',
    'selector-max-class': 3,
    'no-descending-specificity': null,
    'declaration-block-no-shorthand-property-overrides': true,
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'no-invalid-double-slash-comments': true,
    'no-duplicate-at-import-rules': true,
    // 'at-rule-no-unknown': false,
    'font-family-name-quotes': [
      'always-where-required',
      {
        severity: 'error',
      },
    ],
    'color-named': [
      'never',
      {
        severity: 'warning',
      },
    ],
    'unit-no-unknown': true,
    'order/order': [
      [
        'dollar-variables', // $variable
        'custom-properties', // --variable
        {
          type: 'at-rule', // @extend
          name: 'extend',
          hasBlock: false,
        },
        {
          type: 'at-rule', // @include variable
          name: 'include',
          hasBlock: false,
        },

        'declarations', // css rules

        {
          type: 'rule', // &: pseudo selector
          selector: '&:',
        },
        {
          type: 'rule', // &:: pseudo element
          selector: '&::',
        },
        {
          type: 'at-rule', // @include variable { nested rule }
          name: 'include',
          hasBlock: true,
        },
        {
          type: 'at-rule', // css @supports
          name: 'supports',
        },
        {
          type: 'at-rule', // @include media-breakpoint
          name: 'include',
          parameter: 'media',
          hasBlock: true,
        },
        {
          type: 'at-rule', // css @media
          name: 'media',
          hasBlock: true,
        },
        {
          type: 'rule', // .vendor-class
          selector: '& .',
        },

        'at-rules', // all other css @rules
        {
          type: 'rule', // interpolation (#{$parent})
          selector: '#{',
          hasBlock: true,
        },
        {
          type: 'rule', // &__font
          selector: '&__font',
        },
        {
          type: 'rule', // &__icon
          selector: '&__icon',
        },
        {
          type: 'rule', // &__element
          selector: '&__',
        },
        'rules', // selectors (h1, .block etc.)
        {
          type: 'rule', // &--modifier
          selector: '&--',
        },
      ],
      { severity: 'warnings' },
    ],
    // 'order/properties-order': propertyGroups.map((group) => ({
    //   ...group,
    //   emptyLineBefore: 'always',
    //   noEmptyLineBetween: false,
    // })),
  },
};
