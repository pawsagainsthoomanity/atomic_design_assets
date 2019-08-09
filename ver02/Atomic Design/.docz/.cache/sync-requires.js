const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-index-mdx": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/src/index.mdx"))),
  "component---src-atoms-button-mdx": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/src/Atoms/button.mdx"))),
  "component---src-atoms-checkbox-mdx": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/src/Atoms/checkbox.mdx"))),
  "component---src-atoms-colors-mdx": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/src/Atoms/colors.mdx"))),
  "component---src-atoms-radio-button-mdx": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/src/Atoms/radio_button.mdx"))),
  "component---src-atoms-text-fields-mdx": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/src/Atoms/text_fields.mdx"))),
  "component---src-atoms-typography-mdx": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/src/Atoms/typography.mdx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/zhuonama/Documents/work2/Atomic Design/.docz/src/pages/404.js")))
}

