export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/Atoms/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-atoms-button" */ 'src/Atoms/button.mdx'
    ),
  'src/Atoms/checkbox.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-atoms-checkbox" */ 'src/Atoms/checkbox.mdx'
    ),
  'src/Atoms/colors.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-atoms-colors" */ 'src/Atoms/colors.mdx'
    ),
  'src/Atoms/radio_button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-atoms-radio-button" */ 'src/Atoms/radio_button.mdx'
    ),
  'src/Atoms/text_fields.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-atoms-text-fields" */ 'src/Atoms/text_fields.mdx'
    ),
  'src/Atoms/typography.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-atoms-typography" */ 'src/Atoms/typography.mdx'
    ),
}
